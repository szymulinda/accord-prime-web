import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const contacts = [
  {
    icon: MapPin,
    label: "Siedziba",
    value: "ul. Armii Krajowej 7, 45-071 Opole",
    href: "https://maps.google.com/?q=Armii+Krajowej+7,+Opole",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "605 680 745",
    href: "tel:+48605680745",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "atb-bud@o2.pl",
    href: "mailto:atb-bud@o2.pl",
  },
];

const Home = () => {
  return (
    <main className="relative h-dvh overflow-hidden bg-white text-atb-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-drift absolute -left-24 -top-32 h-[28rem] w-[28rem] rounded-full bg-atb-green/[0.07] blur-3xl" />
        <div className="animate-drift absolute -bottom-24 -right-16 h-[32rem] w-[32rem] rounded-full bg-atb-soft/10 blur-3xl [animation-delay:-7s]" />
        <div className="animate-spin-slow absolute left-1/2 top-1/2 h-[52rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-atb-green/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(27,109,49,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(27,109,49,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6">
        <header className="animate-rise flex shrink-0 items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-atb-green sm:text-[11px]">
            Opole
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-black/45 sm:text-[11px]">
            www.atb-bud.pl
          </p>
        </header>

        <section className="grid min-h-0 flex-1 items-center gap-4 py-3 sm:gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-12 lg:py-4">
          <div className="animate-enter-left flex justify-center lg:justify-end">
            <div className="animate-float">
              <img
                src="/logo-atb-bud.png"
                alt="ATB-BUD — Budujemy dla Ciebie"
                className="h-auto w-[min(42vw,220px)] sm:w-[min(36vw,280px)] lg:w-[300px]"
              />
            </div>
          </div>

          <div className="animate-enter-right text-center lg:text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-atb-green sm:text-[11px] sm:tracking-[0.38em]">
              Strona w przebudowie
            </p>

            <h1 className="mt-2 max-w-xl text-[1.65rem] font-extrabold leading-[1.15] tracking-tight text-atb-black sm:mt-3 sm:text-4xl lg:text-[2.75rem]">
              Budujemy nową przestrzeń
              <span className="block text-atb-green">cyfrową.</span>
            </h1>

            <p className="font-script mt-2 text-[1.7rem] leading-none text-atb-green sm:mt-3 sm:text-4xl">
              Budujemy dla Ciebie!
            </p>

            <div className="animate-pulse-line mx-auto mt-3 h-px w-32 bg-atb-green sm:mt-5 sm:w-40 lg:mx-0" />

            <p className="mx-auto mt-3 hidden max-w-xl text-sm leading-relaxed text-black/60 sm:mt-4 sm:block sm:text-base lg:mx-0">
              Nasza witryna powstaje na nowo. W tym czasie zapraszamy do kontaktu
              telefonicznego lub mailowego — jesteśmy w Opolu i realizujemy
              inwestycje budowlane z pełnym zaangażowaniem.
            </p>

            <div className="mx-auto mt-4 w-full max-w-md sm:mt-6 lg:mx-0">
              <div className="h-[3px] overflow-hidden rounded-full bg-atb-mist">
                <div className="animate-shimmer h-full w-2/3 rounded-full bg-[linear-gradient(90deg,#1B6D31,#3AA155,#1B6D31)]" />
              </div>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.28em] text-black/35">
                Prace w toku
              </p>
            </div>
          </div>
        </section>

        <section className="animate-rise delay-5 grid shrink-0 grid-cols-3 gap-2 sm:gap-3">
          {contacts.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group rounded-xl border border-atb-green/15 bg-white/80 px-2 py-2.5 text-left backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-atb-green/40 hover:bg-atb-mist sm:rounded-2xl sm:px-4 sm:py-3"
              >
                <Icon className="mb-1.5 h-3.5 w-3.5 text-atb-green transition-transform duration-300 ease-in-out group-hover:scale-110 sm:mb-2 sm:h-4 sm:w-4" />
                <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-black/40 sm:text-[10px] sm:tracking-[0.22em]">
                  {item.label}
                </p>
                <p className="mt-1 text-[10px] font-medium leading-snug text-atb-black sm:text-sm">
                  {item.value}
                </p>
              </a>
            );
          })}
        </section>

        <footer className="animate-rise delay-6 mt-3 flex shrink-0 items-center justify-between gap-4 border-t border-atb-green/10 pt-3 sm:mt-4 sm:pt-4">
          <div className="min-w-0 text-left">
            <p className="truncate text-[11px] font-bold tracking-wide text-atb-black sm:text-sm">
              ATB-BUD 2 SP. Z O.O.
            </p>
            <p className="mt-0.5 text-[10px] text-black/50 sm:text-xs">
              NIP 754 313 04 89
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href="https://www.instagram.com/atbbud.opole/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram ATB-BUD Opole"
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-atb-green/25 text-atb-green transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-atb-green hover:bg-atb-green hover:text-white sm:h-16 sm:w-16"
            >
              <Instagram className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.75} />
            </a>
            <a
              href="https://www.facebook.com/AtbBudOpole/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook ATB-BUD Opole"
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-atb-green/25 text-atb-green transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-atb-green hover:bg-atb-green hover:text-white sm:h-16 sm:w-16"
            >
              <Facebook className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.75} />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Home;
