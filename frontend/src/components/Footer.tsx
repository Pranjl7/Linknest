import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full flex items-center justify-center gap-1.5 py-8 text-gray-500 text-sm font-archi">
      <span>build with</span>
      <Heart size={14} className="text-red-500 fill-red-500" />
      <span>by</span>
      <a
        href="https://x.com/Pranjltwt"
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-300 transition-colors"
      >
        Pranjltwt
      </a>
    </footer>
  );
}

export default Footer;
