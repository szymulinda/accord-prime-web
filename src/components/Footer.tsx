import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-background">
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="font-extrabold tracking-[0.15em] uppercase text-sm">ACCORD</span>
        <span className="text-sm opacity-60">© 2026 Wszelkie prawa zastrzeżone.</span>
      </div>
      <div className="flex gap-6 text-sm opacity-60">
        <Link to="/polityka-prywatnosci" className="hover:opacity-100 transition-opacity">
          Polityka prywatności
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
