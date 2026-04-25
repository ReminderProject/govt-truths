import { ReactNode, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV = [
  { to: "/", label: "The Myths" },
  { to: "/money-trail", label: "The Money Trail" },
  { to: "/said-vs-done", label: "Said vs. Done" },
  { to: "/permanent-class", label: "The Permanent Class" },
  { to: "/take-action", label: "Take Action", cta: true },
];

export function SiteShell({
  children,
  fileNo,
  edition = "Edition I",
}: {
  children: ReactNode;
  fileNo: string;
  edition?: string;
}) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* MASTHEAD */}
      <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-ink/80">
        <div className="mx-auto max-w-[1400px] px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-display font-black tracking-tight text-xl leading-none">Unspoken</span>
            <span className="font-display italic font-semibold text-xl leading-none text-stamp">Truths.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.18em]">
            {NAV.map((n) => {
              const active = pathname === n.to;
              if (n.cta) {
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={`ml-3 px-3 py-2 bg-ink text-paper hover:bg-stamp transition-colors ${active ? "bg-stamp" : ""}`}
                  >
                    {n.label} →
                  </Link>
                );
              }
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-3 py-2 transition-colors ${active ? "text-stamp" : "hover:text-stamp"}`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <button
            className="md:hidden p-2 -mr-2 flex flex-col gap-1.5"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-5 h-px bg-ink" />
            <span className="block w-5 h-px bg-ink" />
            <span className="block w-5 h-px bg-ink" />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-ink/80 bg-paper">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] border-b border-ink/20 last:border-b-0 hover:bg-ink hover:text-paper"
              >
                {n.label}
              </Link>
            ))}
          </div>
        )}
        <div className="h-[3px] w-full bg-gradient-to-r from-ink via-stamp to-ink" />
        <div className="h-[2px] w-full bg-paper-2 relative">
          <div
            className="absolute left-0 top-0 h-full bg-stamp transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* META BAR */}
      <div className="border-b border-ink/80 bg-paper">
        <div className="mx-auto max-w-[1400px] px-6 py-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>File №&nbsp;{fileNo} · Civic Record</span>
          <span className="hidden sm:inline">Documented Reality · No Ideology Required</span>
          <span>{edition}</span>
        </div>
      </div>

      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-6 py-16">
          <div className="grid grid-cols-12 gap-8 pb-12 border-b border-paper/15">
            <div className="col-span-12 md:col-span-5">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display font-black tracking-tight text-2xl">Unspoken</span>
                <span className="font-display italic font-semibold text-2xl text-stamp">Truths.</span>
              </div>
              <p className="text-paper/70 leading-relaxed max-w-sm">
                How your government actually works. Who is responsible for what. Whether they're doing it.
              </p>
            </div>
            <div className="col-span-6 md:col-span-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-4">All Sections</div>
              <ul className="space-y-2 text-paper/85">
                <li><Link to="/" className="hover:text-stamp transition-colors">01 — The Myths</Link></li>
                <li><Link to="/money-trail" className="hover:text-stamp transition-colors">02 — The Money Trail</Link></li>
                <li><Link to="/said-vs-done" className="hover:text-stamp transition-colors">03 — Said vs. Done</Link></li>
                <li><Link to="/permanent-class" className="hover:text-stamp transition-colors">04 — The Permanent Class</Link></li>
                <li><Link to="/take-action" className="hover:text-stamp transition-colors">05 — Take Action</Link></li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-4">Editorial Standards</div>
              <ul className="space-y-2 text-paper/85 text-sm">
                <li>All claims sourced to primary documents</li>
                <li>No advertising · No partisan framing</li>
                <li>Bipartisan accountability</li>
                <li>Plain language, not policy-speak</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-wrap justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50">
            <span>© Unspoken Truths · Civic Record · Vol. I</span>
            <span>No ideology required — just documented reality.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function SectionHero({
  number,
  title,
  subtitle,
  deck,
  note,
}: {
  number: string;
  title: ReactNode;
  subtitle?: string;
  deck: ReactNode;
  note?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/80 bg-paper">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-6 pt-14 pb-16 md:pt-20 md:pb-24 relative">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6 flex items-center gap-3">
          <Link to="/" className="hover:text-stamp">Unspoken Truths</Link>
          <span>›</span>
          <span className="text-stamp">Section {number}{subtitle ? ` — ${subtitle}` : ""}</span>
        </div>
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="stamp">Dossier {number}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Public Record · Sourced</span>
            </div>
            <h1 className="font-display font-black leading-[0.88] tracking-[-0.04em] text-[clamp(2.8rem,8vw,7rem)]">
              {title}
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 md:pl-8 md:border-l md:border-ink/80">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-4">The Deck</div>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85">{deck}</p>
            {note && (
              <div className="mt-6 pt-4 border-t border-ink/30 font-mono text-[11px] uppercase tracking-[0.18em] text-stamp">
                {note}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PrevNext({
  prev,
  next,
}: {
  prev?: { to: string; label: string };
  next?: { to: string; label: string };
}) {
  return (
    <div className="border-y border-ink/80 bg-paper-2">
      <div className="mx-auto max-w-[1400px] px-6 py-6 flex flex-wrap items-center justify-between gap-4">
        {prev ? (
          <Link to={prev.to} className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] hover:text-stamp transition-colors">
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            {prev.label}
          </Link>
        ) : <span />}
        {next ? (
          <Link to={next.to} className="group inline-flex items-center gap-3 bg-ink text-paper px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-stamp transition-colors">
            {next.label}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        ) : <span />}
      </div>
    </div>
  );
}

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>(".reveal") ?? [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

export function ChapterStrip({ items }: { items: { id: string; label: string; n: string }[] }) {
  return (
    <div className="bg-ink text-paper border-b border-ink overflow-x-auto">
      <div className="mx-auto max-w-[1400px] flex">
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className="shrink-0 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60 hover:text-paper hover:bg-paper/5 border-r border-paper/10 transition-colors flex items-center gap-2"
          >
            <span className="text-stamp">{it.n}</span>
            <span>{it.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function BottomLine({
  children,
  label = "The Bottom Line",
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <div className="bottom-line p-5 flex items-start gap-4">
      <span className="stamp stamp-solid shrink-0">{label}</span>
      <p className="font-display font-semibold text-base md:text-lg leading-snug text-paper">
        {children}
      </p>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  invert,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  invert?: boolean;
}) {
  return (
    <div className="mb-12">
      <div className={`font-mono text-[11px] uppercase tracking-[0.22em] mb-3 ${invert ? "text-stamp" : "text-stamp"}`}>
        {eyebrow}
      </div>
      <div className={`h-[3px] w-24 ${invert ? "bg-stamp" : "bg-ink"} mb-6`} />
      <h2 className={`font-display font-black leading-[0.92] tracking-[-0.03em] text-[clamp(2.2rem,5vw,4rem)] ${invert ? "text-paper" : ""}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-6 max-w-3xl text-base md:text-lg leading-relaxed ${invert ? "text-paper/75" : "text-foreground/80"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}