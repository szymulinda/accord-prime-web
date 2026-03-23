import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm opacity-80">© 2026 Accord. Wszelkie prawa zastrzeżone.</p>
      <div className="flex gap-6 text-sm opacity-80">
        <Link to="/polityka-prywatnosci" className="hover:opacity-100 transition-opacity">
          Polityka prywatności
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
