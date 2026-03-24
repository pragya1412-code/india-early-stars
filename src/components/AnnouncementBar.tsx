import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-accent text-accent-foreground py-2.5 px-4 text-center text-sm font-bold relative">
      <Link to="/screening" className="hover:underline">
        👉 Take Our Free Autism Screening — Just 2 Minutes!
      </Link>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-accent-foreground/80 hover:text-accent-foreground"
        aria-label="Close announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
