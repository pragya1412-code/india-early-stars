import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";

/**
 * Smoke test verifying the retina favicon set + OG assets exist.
 * The pixel-diff regression suite lives in scripts/visual-regression.ts and
 * is invoked out-of-band (it needs the dev server running).
 */
describe("assets", () => {
  const publicDir = path.resolve(__dirname, "../../public");
  it.each([
    "favicon.ico",
    "favicon-16.png",
    "favicon-32.png",
    "favicon-48.png",
    "favicon-180.png",
    "favicon-192.png",
    "favicon-512.png",
    "og-image.jpg",
  ])("ships %s", (file) => {
    expect(fs.existsSync(path.join(publicDir, file))).toBe(true);
  });

  it("index.html declares og:image and apple-touch-icon", () => {
    const html = fs.readFileSync(path.resolve(__dirname, "../../index.html"), "utf8");
    expect(html).toMatch(/property="og:image"/);
    expect(html).toMatch(/rel="apple-touch-icon"/);
    expect(html).toMatch(/name="twitter:card"/);
  });
});
