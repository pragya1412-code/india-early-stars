/**
 * Visual regression check runner.
 *
 * Usage:
 *   npx tsx scripts/visual-regression.ts            # compare against baseline
 *   npx tsx scripts/visual-regression.ts --update   # write new baselines
 *
 * Screenshots per route are taken at desktop + mobile viewports and compared
 * pixel-by-pixel against ./tests/visual/baseline. Diffs are written to
 * ./tests/visual/diff on failure.
 */
import { chromium, devices } from "playwright";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import fs from "node:fs";
import path from "node:path";

const BASE = process.env.VR_BASE_URL ?? "http://localhost:8080";
const UPDATE = process.argv.includes("--update");
const THRESHOLD = 0.02; // 2% diff pixels tolerated

const ROUTES = ["/", "/about-us", "/our-services", "/our-team", "/contact"];
const VIEWPORTS = [
  { name: "desktop", width: 1280, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const dir = (p: string) => (fs.mkdirSync(p, { recursive: true }), p);
const BASELINE = dir("tests/visual/baseline");
const CURRENT = dir("tests/visual/current");
const DIFF = dir("tests/visual/diff");

async function main() {
  const browser = await chromium.launch();
  const failures: string[] = [];

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();

    for (const route of ROUTES) {
      const slug = `${vp.name}${route.replace(/\//g, "_") || "_home"}`;
      const url = `${BASE}${route}`;
      await page.goto(url, { waitUntil: "networkidle" });
      // freeze animations
      await page.addStyleTag({
        content: `*,*::before,*::after{animation:none!important;transition:none!important}`,
      });
      const buf = await page.screenshot();
      const currentPath = path.join(CURRENT, `${slug}.png`);
      fs.writeFileSync(currentPath, buf);

      const baselinePath = path.join(BASELINE, `${slug}.png`);
      if (UPDATE || !fs.existsSync(baselinePath)) {
        fs.writeFileSync(baselinePath, buf);
        console.log(`baseline ${UPDATE ? "updated" : "created"}: ${slug}`);
        continue;
      }

      const base = PNG.sync.read(fs.readFileSync(baselinePath));
      const cur = PNG.sync.read(buf);
      if (base.width !== cur.width || base.height !== cur.height) {
        failures.push(`${slug}: size mismatch`);
        continue;
      }
      const diff = new PNG({ width: base.width, height: base.height });
      const changed = pixelmatch(base.data, cur.data, diff.data, base.width, base.height, {
        threshold: 0.1,
      });
      const ratio = changed / (base.width * base.height);
      if (ratio > THRESHOLD) {
        fs.writeFileSync(path.join(DIFF, `${slug}.png`), PNG.sync.write(diff));
        failures.push(`${slug}: ${(ratio * 100).toFixed(2)}% pixels changed`);
      } else {
        console.log(`ok       ${slug}  (${(ratio * 100).toFixed(3)}%)`);
      }
    }
    await context.close();
  }
  await browser.close();

  if (failures.length) {
    console.error("\nVisual regressions:");
    failures.forEach((f) => console.error("  -", f));
    process.exit(1);
  }
  console.log("\nAll routes match baseline.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
