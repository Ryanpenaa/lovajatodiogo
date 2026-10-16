import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  CalendarDays,
  Camera,
  CarFront,
  ChevronRight,
  Droplets,
  GraduationCap,
  Instagram,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Youtube,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const agendaLink =
  "https://minhaautoagenda.com/p/lava-jato-do-diogo?utm_source=ig&utm_medium=social&utm_content=link_in_bio";

const courseLink =
  "https://pay.cakto.com.br/engra6s_1136817?utm_source=instagram&utm_medium=link_in_bio&utm_campaign=lavajato_diogo&utm_content=curso_lavajato";

const locationLink =
  "https://www.google.com/maps/place/22%C2%B042'43.6%22S+43%C2%B018'12.0%22W/@-22.712101,-43.3059006,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-22.712101!4d-43.3033257?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D";

const instagramLink = "https://www.instagram.com/lavajatododiogo_pilar/";
const youtubeLink = "https://www.youtube.com/@Lavajatododiogo_pilar";

const services = [
  { title: "Lavagem Completa", icon: Droplets },
  { title: "Higienização Interna", icon: Sparkles },
  { title: "Polimento e Proteção", icon: Star },
  { title: "Detalhamento Premium", icon: ShieldCheck },
];

const menuItems = [
  {
    label: "Agendar Lavagem",
    description: "Escolha o serviço e o melhor horário",
    href: agendaLink,
    icon: CalendarDays,
    highlight: true,
  },
  {
    label: "Curso Lavajato do Zero",
    description: "Aprenda do básico ao profissional",
    href: courseLink,
    icon: GraduationCap,
  },
  {
    label: "Galeria de Resultados",
    description: "Veja nossos trabalhos no Instagram",
    href: instagramLink,
    icon: Camera,
  },
  {
    label: "Onde Estamos",
    description: "Abra nossa localização no mapa",
    href: locationLink,
    icon: MapPin,
  },
];

const benefits = [
  { title: "Atendimento de confiança", icon: BadgeCheck },
  { title: "Qualidade comprovada", icon: ShieldCheck },
  { title: "Resultados que impressionam", icon: Star },
  { title: "Cuidado de verdade", icon: CarFront },
];

function Index() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="relative mx-auto flex min-h-screen w-full max-w-xl flex-col px-4 pb-8 pt-5 sm:px-6 sm:pt-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ff5a00]/15 blur-3xl"
        />

        <header className="relative z-10 overflow-hidden rounded-[28px] border border-white/10 bg-[#0c0c0c] p-5 shadow-[0_0_40px_rgba(255,90,0,0.08)]">
          <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#ff5a00]/10 blur-3xl" />

          <div className="relative flex items-center gap-3">
            <div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-black">
              <img
                src="/logo-lavajato.webp"
                alt="Logo Lavajato do Diogo"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                Estética automotiva
              </p>
              <h1 className="text-xl font-black leading-tight sm:text-2xl">
                Lavajato do Diogo
              </h1>
            </div>
          </div>

          <div className="relative mt-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ff7a2f]">
              Seu carro sempre no melhor estado
            </p>

            <h2 className="mt-2 text-4xl font-black uppercase leading-[0.92] sm:text-5xl">
              Cuidado que
              <br />
              <span className="text-[#ff5a00]">faz diferença</span>
            </h2>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-300 sm:text-base">
              Mais do que uma lavagem: cuidado, acabamento e atenção em cada
              detalhe do seu carro.
            </p>
          </div>
        </header>

        <section className="relative z-10 mt-4 grid grid-cols-2 gap-3">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-3.5 text-center"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#ff5a00]/50 bg-[#ff5a00]/10 text-[#ff7a2f]">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>

                <p className="mt-2.5 text-[13px] font-bold leading-tight text-white">
                  {item.title}
                </p>
              </div>
            );
          })}
        </section>

        <section className="relative z-10 mt-5 rounded-[28px] border border-white/10 bg-[#0d0d0d] p-4 shadow-[0_0_35px_rgba(255,90,0,0.05)]">
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Acesso rápido
              </p>
              <h3 className="mt-0.5 text-lg font-extrabold text-white">
                Escolha uma opção
              </h3>
            </div>

            <span className="rounded-full border border-[#ff5a00]/30 bg-[#ff5a00]/10 px-3 py-1 text-[9px] font-black uppercase tracking-wide text-[#ff7a2f]">
              Link na bio
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex items-center gap-3 rounded-2xl border px-4 py-3.5 transition duration-200 hover:-translate-y-0.5 active:scale-[0.985] ${
                    item.highlight
                      ? "border-[#ff5a00]/50 bg-gradient-to-r from-[#ff5a00] to-[#ff7a2f] text-white shadow-lg shadow-[#ff5a00]/15"
                      : "border-white/10 bg-[#171717] text-white hover:border-[#ff5a00]/40 hover:bg-[#1b1b1b]"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      item.highlight
                        ? "bg-black/15 text-white"
                        : "bg-[#ff5a00]/10 text-[#ff7a2f]"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-extrabold sm:text-base">
                      {item.label}
                    </span>
                    <span
                      className={`mt-0.5 block text-[11px] sm:text-xs ${
                        item.highlight ? "text-orange-50/90" : "text-zinc-400"
                      }`}
                    >
                      {item.description}
                    </span>
                  </span>

                  <ChevronRight
                    className={`h-5 w-5 shrink-0 transition group-hover:translate-x-0.5 ${
                      item.highlight ? "text-white" : "text-zinc-500"
                    }`}
                    strokeWidth={2.5}
                  />
                </a>
              );
            })}
          </div>
        </section>

        <section className="relative z-10 mt-5 rounded-[28px] border border-white/10 bg-[#0d0d0d] p-4">
          <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Por que escolher a gente
          </p>

          <div className="grid grid-cols-2 gap-3">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#111111] p-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ff5a00]/40 bg-[#ff5a00]/10 text-[#ff7a2f]">
                    <Icon className="h-4.5 w-4.5" strokeWidth={2.2} />
                  </div>

                  <p className="mt-2.5 text-xs font-bold leading-tight text-white sm:text-sm">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <footer className="relative z-10 mt-6 pb-2 text-center">
          <div className="flex items-center justify-center gap-3">
            <a
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-[#ff5a00]/40 hover:bg-[#171717]"
            >
              <Instagram className="h-5 w-5 text-[#ff7a2f]" />
              Instagram
            </a>

            <a
              href={youtubeLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-[#ff5a00]/40 hover:bg-[#171717]"
            >
              <Youtube className="h-5 w-5 text-[#ff7a2f]" />
              YouTube
            </a>
          </div>

          <div className="mt-6">
            <p className="text-base font-black uppercase tracking-[0.3em] text-zinc-300">
              Lavajato
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-zinc-500">
              Estética automotiva
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
