import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThermometerSun, Wind, Sun, Fan, Star } from "lucide-react";

const services = [
  { icon: ThermometerSun, title: "Pompy Ciepła", desc: "Efektywne ogrzewanie i chłodzenie z wykorzystaniem energii odnawialnej." },
  { icon: Wind, title: "Klimatyzacja", desc: "Profesjonalny montaż i serwis systemów klimatyzacyjnych." },
  { icon: Sun, title: "Fotowoltaika", desc: "Instalacje fotowoltaiczne, które obniżą Twoje rachunki za prąd." },
  { icon: Fan, title: "Rekuperacja", desc: "Czyste powietrze w domu dzięki nowoczesnej wentylacji mechanicznej." },
];

const Home = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container mx-auto px-4 py-24 md:py-36 relative">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <Star className="h-4 w-4 fill-accent" /> 5.0 na Google | Na rynku od 1984 roku
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Twój komfortowy i ekologiczny dom.{" "}
            <span className="text-accent">Od A do Z.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Kompleksowe instalacje: Pompy ciepła, Klimatyzacja, Fotowoltaika i Rekuperacja.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button variant="cta" size="lg" asChild>
              <Link to="/kontakt">Zamów darmową wycenę</Link>
            </Button>
            <Button variant="cta-outline" size="lg" asChild>
              <Link to="/uslugi">Poznaj nasze usługi</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="section-alt py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Nasze usługi</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Oferujemy kompleksowe rozwiązania z zakresu OZE i HVAC.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-border/50 flex flex-col items-start gap-4"
            >
              <div className="rounded-xl bg-accent/10 p-3 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Home;
