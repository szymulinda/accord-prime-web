import { ThermometerSun, Wind, Sun, Fan, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const services = [
  {
    icon: ThermometerSun,
    title: "Pompy Ciepła",
    desc: "Nowoczesne pompy ciepła powietrze-woda i gruntowe. Ogrzewanie, chłodzenie i ciepła woda użytkowa w jednym urządzeniu.",
    benefits: ["Niskie koszty eksploatacji", "Dotacje nawet do 50%", "Ogrzewanie i chłodzenie"],
    image: gallery1,
  },
  {
    icon: Wind,
    title: "Klimatyzacja",
    desc: "Systemy klimatyzacji do domu i biura. Montaż, serwis i przeglądy klimatyzatorów wiodących marek.",
    benefits: ["Komfort termiczny cały rok", "Energooszczędne modele", "Cicha praca urządzeń"],
    image: gallery3,
  },
  {
    icon: Sun,
    title: "Fotowoltaika",
    desc: "Instalacje fotowoltaiczne dopasowane do Twoich potrzeb. Produkuj własną energię i oszczędzaj.",
    benefits: ["Obniżenie rachunków", "Niezależność energetyczna", "Ekologiczna energia"],
    image: gallery2,
  },
  {
    icon: Fan,
    title: "Rekuperacja",
    desc: "Systemy wentylacji mechanicznej z odzyskiem ciepła. Czyste powietrze bez strat energii.",
    benefits: ["Czyste powietrze 24/7", "Odzysk ciepła do 95%", "Redukcja alergenów"],
    image: gallery4,
  },
];

const Services = () => {
  const scrollRef = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <section className="py-24" ref={scrollRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">Oferta</p>
          <h1 className="text-4xl md:text-5xl font-extrabold">Nasze usługi</h1>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Kompleksowe rozwiązania OZE i HVAC — od projektu po montaż i serwis.
          </p>
        </div>
        <div className="space-y-20">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`fade-up flex flex-col lg:flex-row gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 rounded-2xl overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" className="w-full h-80 object-cover rounded-2xl" />
              </div>
              <div className="flex-1 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-muted p-2.5 text-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{s.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-20 fade-up">
          <Button
            variant="cta"
            size="lg"
            onClick={() => {
              navigate("/");
              setTimeout(() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" }), 100);
            }}
          >
            Zamów darmową wycenę
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
