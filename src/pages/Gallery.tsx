import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const projects = [
  {
    image: gallery1,
    title: "Pompa Ciepła Panasonic T-Cap 9kW",
    location: "Opole, 2024",
    desc: "Kompleksowa modernizacja kotłowni z wymianą źródła ciepła na pompę ciepła powietrze-woda.",
  },
  {
    image: gallery2,
    title: "Instalacja fotowoltaiczna 12kWp",
    location: "Masów, 2024",
    desc: "Montaż paneli fotowoltaicznych na dachu skośnym domu jednorodzinnego. Roczna produkcja ~11 MWh.",
  },
  {
    image: gallery3,
    title: "Klimatyzacja multi-split 3 jednostki",
    location: "Opole, 2023",
    desc: "Montaż systemu klimatyzacji w domu jednorodzinnym — salon i dwie sypialnie.",
  },
  {
    image: gallery4,
    title: "Rekuperacja z centralą 350m³/h",
    location: "Chrząstowice, 2024",
    desc: "Instalacja systemu wentylacji mechanicznej z odzyskiem ciepła w budynku pasywnym.",
  },
  {
    image: gallery5,
    title: "Modernizacja kotłowni — pompa ciepła 16kW",
    location: "Zawada, 2023",
    desc: "Wymiana kotła gazowego na pompę ciepła gruntową z pełną przebudową instalacji hydraulicznej.",
  },
  {
    image: gallery6,
    title: "Fotowoltaika na budynku komercyjnym 50kWp",
    location: "Opole, 2024",
    desc: "Wielkopowierzchniowa instalacja na dachu płaskim hali magazynowej z optymalizacją mocy.",
  },
];

const Gallery = () => {
  const scrollRef = useScrollAnimation();

  return (
    <section className="py-24" ref={scrollRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-extrabold">Galeria realizacji</h1>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Wybrane projekty zrealizowane przez nasz zespół na terenie województwa opolskiego.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="fade-up group rounded-2xl overflow-hidden border border-border/50 bg-background hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-bold">{p.title}</h3>
                <p className="text-xs font-medium text-muted-foreground tracking-wide uppercase">{p.location}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
