import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Dziękujemy! Skontaktujemy się wkrótce.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">Gotowy na zmiany?</h1>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Skontaktuj się z nami — przygotujemy bezpłatną wycenę.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Dane kontaktowe</h2>
              <p className="text-muted-foreground mb-8">F.U.H. Accord</p>
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-2.5 text-accent"><MapPin className="h-5 w-5" /></div>
                <div>
                  <p className="font-medium">Adres</p>
                  <p className="text-sm text-muted-foreground">ul. Opolska 27, 46-024 Masów</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-2.5 text-accent"><Phone className="h-5 w-5" /></div>
                <div>
                  <p className="font-medium">Telefon</p>
                  <a href="tel:+48601475547" className="text-sm text-muted-foreground hover:text-accent transition-colors">+48 601 475 547</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-2.5 text-accent"><Clock className="h-5 w-5" /></div>
                <div>
                  <p className="font-medium">Godziny pracy</p>
                  <p className="text-sm text-muted-foreground">Pon–Pt: 09:00–17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="rounded-2xl border border-border/50 bg-background p-8 shadow-sm space-y-5">
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
  );
};

export default Contact;
