import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function WhatsAppIcon() {
  return (
    <span className="relative flex h-6 w-6 shrink-0 items-center justify-center">
      <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
      <Phone className="absolute h-3 w-3" strokeWidth={2.5} />
    </span>
  );
}

const primaryLinks = [
  {
    label: "Agendamento Lavagem",
    href: "https://wa.me/5521983851943?text=Gostaria%20de%20agendar%20uma%20limpeza%20do%20meu%20carro",
    icon: <WhatsAppIcon />,
  },
  {
    label: "Acesse Nosso Grupo de Vendas",
    href: "https://wa.me/5521983851943?text=Olá!%20Gostaria%20de%20entrar%20no%20grupo%20de%20vendas",
    icon: <WhatsAppIcon />,
  },
  {
    label: "Nossa Localização",
    href: "https://maps.app.goo.gl/uoiZ5yT9BrAa1cHJ8",
    icon: <MapPin className="h-6 w-6 shrink-0" strokeWidth={2.2} />,
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-xl flex-col items-center px-4 pb-8 pt-8 sm:px-6 sm:pt-10">
        <header className="flex w-full flex-col items-center text-center">
          <div className="mb-3 flex h-44 w-44 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_0_45px_rgba(37,99,235,0.16)] sm:h-52 sm:w-52">
            <img
              src="/logo-lavajato.webp"
              alt="Logo Lavajato do Diogo"
              className="h-full w-full object-cover"
            />
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Lavajato do Diogo
          </h1>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-400 sm:text-base">
            Escolha uma opção para falar com a nossa equipe
          </p>
        </header>

        <section
          aria-label="Acessos principais"
          className="mt-7 flex w-full flex-col items-center gap-3.5"
        >
          {primaryLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-16 w-[90%] max-w-md items-center gap-3 rounded-2xl border border-white/10 bg-zinc-100 px-5 py-4 text-left font-semibold text-zinc-950 shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-0.5 hover:border-blue-500/60 hover:bg-white hover:shadow-blue-950/20 active:scale-[0.985]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition group-hover:bg-blue-500">
                {item.icon}
              </span>
              <span className="flex-1 text-[15px] leading-tight sm:text-base">
                {item.label}
              </span>
              <span className="text-xl text-blue-600" aria-hidden="true">
                ›
              </span>
            </a>
          ))}

          <button
            type="button"
            disabled
            aria-disabled="true"
            className="relative flex min-h-16 w-[90%] max-w-md cursor-not-allowed items-center gap-3 rounded-2xl border border-white/10 bg-zinc-700/60 px-5 py-4 text-left font-semibold text-zinc-300 opacity-55"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-600 text-zinc-300">
              <GraduationCap className="h-6 w-6" strokeWidth={2.2} />
            </span>
            <span className="flex-1 text-[15px] leading-tight sm:text-base">
              Curso Lavajato do Zero
            </span>
            <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-300">
              Em breve
            </span>
          </button>
        </section>

        <footer className="mt-auto flex w-full flex-col items-center pt-10 text-center">
          <div className="h-px w-[90%] max-w-md bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/lavajatododiogo_pilar/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram do Lavajato do Diogo"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-blue-500/50 hover:bg-zinc-800 active:scale-95"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>

            <a
              href="https://www.youtube.com/@Lavajatododiogo_pilar"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube do Lavajato do Diogo"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-blue-500/50 hover:bg-zinc-800 active:scale-95"
            >
              <Youtube className="h-5 w-5" />
              YouTube
            </a>
          </div>

          <div className="mt-7 text-sm">
            <p className="font-bold text-white">Lavajato do Diogo</p>
            <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
              Qualidade, cuidado e confiança com o seu carro.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
