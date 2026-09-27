import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays,
  GraduationCap,
  Instagram,
  MapPin,
  Youtube,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const agendaLink =
  "https://minhaautoagenda.com/p/lava-jato-do-diogo?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadzJpgRzdtpdC47mqwKDLuUNKizktS_UVxgGBmugFyATjgf-Jc7LqIe5B710g_aem_7x_OcyVPT9C5y4W4W5Rhfw";

const ceraLogo =
  "data:image/png;base64,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";

const secondaryLinks = [
  {
    label: "Nossa Localização",
    href: "https://www.google.com/maps/place/22%C2%B042'43.6%22S+43%C2%B018'12.0%22W/@-22.712101,-43.3059006,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-22.712101!4d-43.3033257?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D",
    icon: <MapPin className="h-6 w-6 shrink-0" strokeWidth={2.2} />,
  },
  {
    label: "Curso Lavajato do Zero",
    href: "https://pay.cakto.com.br/engra6s_1136817",
    icon: <GraduationCap className="h-6 w-6 shrink-0" strokeWidth={2.2} />,
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
            Escolha uma opção para acessar nossos serviços
          </p>
        </header>

        <section className="mt-7 w-full">
          <a
            href={agendaLink}
            target="_blank"
            rel="noreferrer"
            className="group relative block w-full overflow-hidden rounded-3xl border border-blue-400/40 bg-gradient-to-br from-blue-600 via-blue-700 to-sky-500 p-5 text-white shadow-[0_18px_50px_rgba(37,99,235,0.35)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.45)] active:scale-[0.99]"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-zinc-900 shadow">
                <img src={ceraLogo} alt="CERA" className="h-5 w-auto" />
                Parceria oficial
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                  <CalendarDays className="h-7 w-7" strokeWidth={2.2} />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                    Agendamento online
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold leading-tight sm:text-3xl">
                    Agende sua lavagem
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-blue-50/90 sm:text-base">
                    Escolha o serviço, veja os horários disponíveis e faça seu
                    agendamento em poucos cliques.
                  </p>

                  <div className="mt-4 inline-flex items-center rounded-2xl bg-white px-4 py-2.5 text-sm font-extrabold text-blue-700 transition group-hover:bg-blue-50">
                    ACESSAR AGENDA →
                  </div>
                </div>
              </div>
            </div>
          </a>
        </section>

        <section
          aria-label="Outros acessos"
          className="mt-5 flex w-full flex-col items-center gap-3.5"
        >
          {secondaryLinks.map((item) => (
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
