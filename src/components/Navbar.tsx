import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Strona główna", scroll: false },
  { to: "/uslugi", label: "Usługi", scroll: false },
  { to: "/#o-nas", label: "O nas", scroll: true },
  { to: "/galeria", label: "Galeria realizacji", scroll: false },
  { to: "/#kontakt", label: "Kontakt", scroll: true },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleScrollLink = (hash: string) => {
    setOpen(false);
    const id = hash.replace("/#", "");
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="text-xl font-extrabold tracking-[0.15em] uppercase text-foreground">
          ACCORD
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.scroll ? (
              <button
                key={link.to}
                onClick={() => handleScrollLink(link.to)}
                className="text-sm font-medium transition-colors hover:text-foreground text-muted-foreground"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+48601475547" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="h-4 w-4" />
            601 475 547
          </a>
          <Button variant="cta" size="lg" onClick={() => handleScrollLink("/#kontakt")}>
            Darmowa wycena
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border/40 pb-4">
          <nav className="flex flex-col gap-1 px-4 pt-2">
            {navLinks.map((link) =>
              link.scroll ? (
                <button
                  key={link.to}
                  onClick={() => handleScrollLink(link.to)}
                  className="py-2.5 text-sm font-medium text-muted-foreground text-left"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`py-2.5 text-sm font-medium ${
                    location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a href="tel:+48601475547" className="flex items-center gap-2 py-2.5 text-sm font-medium text-muted-foreground">
              <Phone className="h-4 w-4" />
              601 475 547
            </a>
            <Button variant="cta" className="mt-2" onClick={() => handleScrollLink("/#kontakt")}>
              Darmowa wycena
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
