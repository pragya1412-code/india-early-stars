import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-ink text-cream py-2.5 px-4 text-center text-xs tracking-wide relative">
      <Link to="/screening" className="inline-flex items-center gap-2 reveal-line">
        <Sparkles className="h-3.5 w-3.5 text-accent" />
        <span className="font-medium">Free 2-minute developmental check — gentle, private, reassuring.</span>
      </Link>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream transition"
        aria-label="Close announcement"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
