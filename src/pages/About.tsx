import { Award, Star, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Award,
    title: "Ponad 40 lat doświadczenia",
    desc: "Działamy nieprzerwanie od 1984 roku. Zaufały nam setki klientów w regionie Opola.",
  },
  {
    icon: Star,
    title: "Ocena 5.0 w Google",
    desc: "Nasi klienci doceniają jakość usług, terminowość i profesjonalne podejście.",
  },
  {
    icon: Wrench,
    title: "Kompleksowa obsługa",
    desc: "Od projektu, przez montaż, po serwis gwarancyjny i pogwarancyjny — wszystko w jednym miejscu.",
  },
];

const About = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">Dlaczego Accord?</h1>
      <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
        Budujemy komfort i oszczędności — z pasją i doświadczeniem.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl bg-background border border-border/50 p-8 text-center shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center gap-4"
          >
            <div className="rounded-xl bg-accent/10 p-4 text-accent">
              <b.icon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">{b.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <Button variant="cta" size="lg" asChild>
          <Link to="/kontakt">Skontaktuj się z nami</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default About;
