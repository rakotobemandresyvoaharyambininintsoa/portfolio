import React, { useState } from "react";
import {
  Github,
  Mail,
  Phone,
  ArrowUpRight,
  Menu,
  X,
  Terminal,
} from "lucide-react";
import {
  PROFIL,
  COMPETENCES,
  PROJETS,
  EXPERIENCE,
  FORMATIONS,
} from "./data/contenu.js";

const NAV = [
  { href: "#a-propos", label: "à propos" },
  { href: "#competences", label: "compétences" },
  { href: "#projets", label: "projets" },
  { href: "#parcours", label: "parcours" },
  { href: "#contact", label: "contact" },
];

function AccentDot({ accent }) {
  return (
    <span
      className={`inline-block h-1.5 w-1.5 rounded-full ${
        accent === "teal" ? "bg-teal" : "bg-amber"
      }`}
    />
  );
}

export default function App() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <div className="min-h-screen bg-ink font-body text-white/85 antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-mono text-sm text-white">
            <Terminal className="h-4 w-4 text-teal" aria-hidden="true" />
            rakotobe<span className="text-teal">.dev</span>
          </a>

          <nav className="hidden items-center gap-8 font-mono text-xs text-white/50 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-teal">
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href={PROFIL.github}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-md border border-line px-4 py-2 font-mono text-xs text-white/70 transition-colors hover:border-teal/50 hover:text-teal md:flex"
          >
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
            GitHub
          </a>

          <button
            type="button"
            className="text-white md:hidden"
            onClick={() => setMenuOuvert((o) => !o)}
            aria-expanded={menuOuvert}
            aria-label="Ouvrir le menu"
          >
            {menuOuvert ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOuvert && (
          <nav className="border-t border-line/70 px-6 py-4 font-mono text-sm md:hidden">
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={() => setMenuOuvert(false)} className="text-white/70">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-20 md:pt-28">
        <p className="font-mono text-sm text-teal">$ whoami</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl">
          {PROFIL.nom}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/60">{PROFIL.accroche}</p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projets"
            className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 font-mono text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Voir mes projets
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3 font-mono text-sm text-white/70 transition-colors hover:border-teal/50 hover:text-teal"
          >
            Me contacter
          </a>
        </div>
      </section>

      {/* À PROPOS */}
      <section id="a-propos" className="border-t border-line/70 bg-panel/40 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="font-mono text-sm text-teal">// à propos</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">{PROFIL.bio}</p>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section id="competences" className="scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="font-mono text-sm text-teal">// compétences</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {COMPETENCES.map((c) => (
              <div key={c.categorie} className="rounded-lg border border-line bg-panel/50 p-6">
                <h3 className="font-mono text-sm font-semibold text-white">{c.categorie}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-line bg-ink px-3 py-1.5 font-mono text-xs text-white/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projets" className="border-t border-line/70 bg-panel/40 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="font-mono text-sm text-teal">// projets</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {PROJETS.map((p) => (
              <a
                key={p.nom}
                href={p.lien}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-between rounded-lg border border-line bg-ink p-6 transition-colors hover:border-teal/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="flex items-center gap-2 font-mono text-sm font-semibold text-white">
                      <AccentDot accent={p.accent} />
                      {p.nom}
                    </h3>
                    <span className="font-mono text-xs text-white/30">{p.annee}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{p.description}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-[11px] text-white/35">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-4 flex items-center gap-1 font-mono text-xs text-teal opacity-0 transition-opacity group-hover:opacity-100">
                  voir le code
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section id="parcours" className="scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="font-mono text-sm text-teal">// parcours</p>

          <div className="mt-8 space-y-5">
            {EXPERIENCE.map((e) => (
              <div key={e.role} className="rounded-lg border border-line bg-panel/50 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-mono text-sm font-semibold text-white">{e.role}</h3>
                  <span className="font-mono text-xs text-white/40">{e.periode}</span>
                </div>
                <p className="mt-1 text-sm text-white/50">{e.structure}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{e.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {FORMATIONS.map((f) => (
              <div key={f.diplome} className="rounded-lg border border-line bg-panel/50 p-6">
                <h3 className="font-mono text-sm font-semibold text-white">{f.diplome}</h3>
                <p className="mt-1 text-sm text-white/50">
                  {f.etablissement} · {f.annee}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-line/70 bg-panel/40 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="font-mono text-sm text-teal">// contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Discutons de votre projet.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${PROFIL.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 font-mono text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {PROFIL.email}
            </a>
            <a
              href={`tel:${PROFIL.telephone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3 font-mono text-sm text-white/70 transition-colors hover:border-teal/50 hover:text-teal"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {PROFIL.telephone}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-line/70 px-6 py-8 text-center font-mono text-xs text-white/30">
        © 2026 {PROFIL.nom} — construit avec React &amp; Tailwind CSS.
      </footer>
    </div>
  );
}
