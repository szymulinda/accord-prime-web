import { ThermometerSun, Wind, Sun, Fan, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: ThermometerSun,
    title: "Pompy Ciepła",
    desc: "Nowoczesne pompy ciepła powietrze-woda i gruntowe. Ogrzewanie, chłodzenie i ciepła woda użytkowa w jednym urządzeniu.",
    benefits: ["Niskie koszty eksploatacji", "Dotacje nawet do 50%", "Ogrzewanie i chłodzenie"],
  },
  {
    icon: Wind,
    title: "Klimatyzacja",
    desc: "Systemy klimatyzacji do domu i biura. Montaż, serwis i przeglądy klimatyzatorów wiodących marek.",
    benefits: ["Komfort termiczny cały rok", "Energooszczędne modele", "Cicha praca urządzeń"],
  },
  {
    icon: Sun,
    title: "Fotowoltaika",
    desc: "Instalacje fotowoltaiczne dopasowane do Twoich potrzeb. Produkuj własną energię i oszczędzaj.",
    benefits: ["Obniżenie rachunków", "Niezależność energetyczna", "Ekologiczna energia"],
  },
  {
    icon: Fan,
    title: "Rekuperacja",
    desc: "Systemy wentylacji mechanicznej z odzyskiem ciepła. Czyste powietrze bez strat energii.",
    benefits: ["Czyste powietrze 24/7", "Odzysk ciepła do 95%", "Redukcja alergenów"],
  },
];

const Services = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">Nasze usługi</h1>
      <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
        Kompleksowe rozwiązania OZE i HVAC — od projektu po montaż i serwis.
      </p>
      <div className="space-y-12">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="flex-shrink-0 rounded-2xl bg-accent/10 p-10 flex items-center justify-center">
              <s.icon className="h-20 w-20 text-accent" />
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="space-y-2">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <Button variant="cta" size="lg" asChild>
          <Link to="/kontakt">Zamów darmową wycenę</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default Services;
