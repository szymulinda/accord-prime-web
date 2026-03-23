import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ThermometerSun, Wind, Sun, Fan, CheckCircle, Award, Star, Wrench, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroBg from "@/assets/hero-bg.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const services = [
  {
    icon: ThermometerSun,
    title: "Pompy Ciepła",
    desc: "Nowoczesne pompy ciepła powietrze-woda i gruntowe. Ogrzewanie, chłodzenie i ciepła woda użytkowa.",
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

const Home = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const scrollRef = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Dziękujemy! Skontaktujemy się wkrótce.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div ref={scrollRef}>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Nowoczesny dom z pompą ciepła i fotowoltaiką" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm font-medium text-white/90 w-fit">
              <Star className="h-4 w-4 fill-white/80" /> 5.0 na Google · Od 1984 roku
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-white">
              Inżynieryjna precyzja.{" "}
              <span className="text-white/70">Komfort na lata.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-xl">
              Pompy ciepła · Klimatyzacja · Fotowoltaika · Rekuperacja. Kompleksowe instalacje OZE i HVAC od A do Z.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button
                variant="cta"
                size="lg"
                onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
              >
                Zamów darmową wycenę
              </Button>
              <Button variant="cta-outline" size="lg" asChild>
                <Link to="/uslugi">Poznaj nasze usługi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">Co robimy</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Nasze specjalizacje</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="fade-up group rounded-2xl overflow-hidden border border-border/50 bg-background hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-muted p-2.5 text-foreground">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 fade-up">
            <Button variant="cta-outline" size="lg" asChild>
              <Link to="/uslugi" className="gap-2">
                Wszystkie usługi <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About / Why Accord */}
      <section id="o-nas" className="py-24 section-alt scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">O firmie</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Dlaczego Accord?</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Budujemy komfort i oszczędności — z pasją i ponad 40-letnim doświadczeniem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="fade-up rounded-2xl bg-background border border-border/50 p-10 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-5"
              >
                <div className="rounded-xl bg-muted p-4 text-foreground">
                  <b.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">Kontakt</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Gotowy na zmiany?</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Skontaktuj się z nami — przygotujemy bezpłatną wycenę.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <div className="space-y-8 fade-up">
              <div>
                <h3 className="text-xl font-bold mb-2">F.U.H. Accord</h3>
                <p className="text-muted-foreground text-sm">Inżynieryjna precyzja od 1984 roku.</p>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-muted p-2.5 text-foreground"><MapPin className="h-5 w-5" /></div>
                  <div>
                    <p className="font-medium text-sm">Adres</p>
                    <p className="text-sm text-muted-foreground">ul. Opolska 27, 46-024 Masów</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-muted p-2.5 text-foreground"><Phone className="h-5 w-5" /></div>
                  <div>
                    <p className="font-medium text-sm">Telefon</p>
                    <a href="tel:+48601475547" className="text-sm text-muted-foreground hover:text-foreground transition-colors">+48 601 475 547</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-muted p-2.5 text-foreground"><Clock className="h-5 w-5" /></div>
                  <div>
                    <p className="font-medium text-sm">Godziny pracy</p>
                    <p className="text-sm text-muted-foreground">Pon–Pt: 09:00–17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="fade-up rounded-2xl border border-border/50 bg-background p-8 shadow-sm space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Imię i nazwisko</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Jan Kowalski" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Telefon</label>
                  <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+48 ..." />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="jan@example.com" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Wiadomość</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required placeholder="Opisz swoje potrzeby..." rows={5} />
              </div>
              <Button type="submit" variant="cta" size="lg" className="w-full">
                Wyślij wiadomość
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
