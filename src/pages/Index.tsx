import { useEffect, useRef } from "react";

const FACTS = [
  "Congress hasn't passed a complete on-time budget since 1997",
  "Congressional approval ~15% — re-election rate ~95%",
  "554+ lawsuits against federal actions in 2025 — $2B+ in legal costs",
  "Last comprehensive immigration reform: 1986",
  "IRS core systems still run on 1960s COBOL — Congress warned for 20+ years",
  "California: $267M in confirmed hospice fraud — 14 providers, zero real patients",
  "3,144 counties in America — thousands of local board seats sit empty",
  "The NTA has flagged the same IRS failures for 20+ years",
];

const MYTHS: { tag: string; myth: string; reality: React.ReactNode; verdict: string }[] = [
  {
    tag: "Dossier 01",
    myth: "“The President runs the country. If something’s broken, it’s the President’s fault.”",
    reality: (
      <>
        The President runs the executive branch. <strong>Congress controls all federal spending, writes all laws, and oversees every agency.</strong> When the IRS doesn’t work, when the VA fails veterans — those are primarily Congressional failures. Presidents get the blame for things Congress controls. That is not an accident.
      </>
    ),
    verdict: "Blame routes to the wrong branch — by design.",
  },
  {
    tag: "Dossier 02",
    myth: "“Congress passed a law. The problem is solved.”",
    reality: (
      <>
        A law is permission to attempt a solution — if Congress also funds it (separate vote), if an agency writes regulations (years), and if courts don’t block it. <strong>Congress passes a law and takes credit. You find out it failed years later.</strong>
      </>
    ),
    verdict: "Passage ≠ implementation. Credit is collected up front.",
  },
  {
    tag: "Dossier 03",
    myth: "“There’s a congressional hearing. People will be held accountable.”",
    reality: (
      <>
        Oversight is the power to look. It does not require acting on what you see. <strong>The IRS Taxpayer Advocate has flagged the same failures for 20+ years.</strong> Same hearings. Same reports. Same problems.
      </>
    ),
    verdict: "Oversight works. Accountability does not exist.",
  },
  {
    tag: "Dossier 04",
    myth: "“The two parties disagree on everything.”",
    reality: (
      <>
        They fight loudly over things that generate donations. They quietly agree on protecting their institutional power — keeping the tax code complex, avoiding hard votes, maintaining the revolving door to lobbying. <strong>Bipartisan cooperation is, more often than not, an exercise in mutual self-interest.</strong>
      </>
    ),
    verdict: "Disagreement is the show. Self-protection is the policy.",
  },
  {
    tag: "Dossier 05",
    myth: "“Waste and fraud get investigated and punished.”",
    reality: (
      <>
        The GAO and Inspector General offices identify waste constantly. Reports are public. Consequences are rare. <strong>The waste often flows to the same industries that fund the campaigns of the people who would have to investigate it.</strong>
      </>
    ),
    verdict: "Documentation is routine. Punishment is the exception.",
  },
  {
    tag: "Dossier 06",
    myth: "“The government passes a budget every year.”",
    reality: (
      <>
        The last complete, on-time federal budget was 1997. <strong>For nearly 30 years, Congress has lurched from temporary patch to temporary patch</strong> — preventing agencies from planning, modernizing, or fixing the very problems Congress holds hearings about.
      </>
    ),
    verdict: "It hasn’t been done properly in a generation.",
  },
  {
    tag: "Dossier 07",
    myth: "“The fraud happens in Washington. There’s nothing I can do locally.”",
    reality: (
      <>
        <strong>The fraud doesn’t happen in Washington. It gets approved in your county.</strong> Local boards sign off on nonprofit contracts, healthcare licenses, and grant money. Most of those seats are empty or uncontested. That is not a coincidence.
      </>
    ),
    verdict: "The rubber stamp is local. So is the leverage.",
  },
  {
    tag: "Dossier 08",
    myth: "“My presidential vote is the most powerful vote I have.”",
    reality: (
      <>
        For your daily life, your three members of Congress — and your local officials — have more direct impact than the President. <strong>Congress: 95% re-election rate. 15% approval rating.</strong> Local seats that determine your county’s contracts are decided by dozens of voters — or no one.
      </>
    ),
    verdict: "The smaller the ballot, the larger your vote.",
  },
];

const STATS = [
  { num: "554+", label: "Lawsuits filed against federal actions in 2025 — challenging policy Congress could have legislated." },
  { num: "$2B+", label: "Direct taxpayer cost of that litigation. Congress created the conditions. You pay for them." },
  { num: "38yrs", label: "Since Congress last passed comprehensive immigration law — everything since: orders, reversals, suits." },
  { num: "3,144", label: "Counties in America — thousands of local board seats where your tax dollars are approved and spent." },
];

const SECTIONS = [
  { n: "01", t: "The Setup: How It Actually Works", d: "Who controls what, what each branch can and cannot do, and why blaming the President for what Congress controls is exactly what Congress wants.", href: "#myths" },
  { n: "02", t: "The Money Trail", d: "From your paycheck to the empty hospice office billing $6,000 per phantom patient. The pipeline is longer than you think — and leaks at every level.", href: "/money-trail" },
  { n: "03", t: "Said vs. Done: The Receipts", d: "What every administration promised about IRS enforcement, tax fairness, and spending. What the data actually shows. Documented, sourced, bipartisan.", href: "/said-vs-done" },
  { n: "04", t: "The Permanent Class", d: "95% re-election. 15% approval. The revolving door. The filibuster. The campaign-finance math. How incumbents protect the system that protects them.", href: "/permanent-class" },
  { n: "05", t: "What You Can Actually Do", d: "Ten people per county. That’s the math. Fraud requires empty rooms — local boards nobody watches. Here is exactly how to take a seat.", href: "/take-action" },
];

const CASE_STATS = [
  { n: "$267M", l: "Billed to Medi-Cal by 14 fraudulent hospice providers — confirmed by California AG, April 2026." },
  { n: "89", l: "Hospice companies registered in a single building in Los Angeles." },
  { n: "1,500%", l: "Increase in hospice companies in California since 2010. Population growth over the same period: flat." },
  { n: "$3.5B", l: "Federal estimate of total suspected hospice fraud nationwide. California identified as the primary hotspot." },
];

const Index = () => {
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

  return (
    <div ref={ref} className="min-h-screen bg-background text-foreground">
      {/* MASTHEAD */}
      <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur border-b border-ink/80">
        <div className="mx-auto max-w-[1400px] px-6 h-14 flex items-center justify-between">
          <a href="/" className="flex items-baseline gap-2">
            <span className="font-display font-black tracking-tight text-xl leading-none">Unspoken</span>
            <span className="font-display italic font-semibold text-xl leading-none text-stamp">Truths.</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em]">
            <a href="#myths" className="hover:text-stamp transition-colors">The Myths</a>
            <a href="/money-trail" className="hover:text-stamp transition-colors">Money Trail</a>
            <a href="/said-vs-done" className="hover:text-stamp transition-colors">Said vs. Done</a>
            <a href="/permanent-class" className="hover:text-stamp transition-colors">Permanent Class</a>
            <a href="/take-action" className="px-3 py-2 bg-ink text-paper hover:bg-stamp transition-colors">Take Action →</a>
          </nav>
          <div className="md:hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Vol. I · Civic Record
          </div>
        </div>
        <div className="h-[3px] w-full bg-gradient-to-r from-ink via-stamp to-ink" />
      </header>

      {/* MASTHEAD META BAR */}
      <div className="border-b border-ink/80 bg-paper">
        <div className="mx-auto max-w-[1400px] px-6 py-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>File №&nbsp;US-001 · Civic Record</span>
          <span className="hidden sm:inline">Documented Reality · No Ideology Required</span>
          <span>Edition I</span>
        </div>
      </div>

      {/* HERO — newspaper white-paper */}
      <section className="relative overflow-hidden border-b border-ink/80">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-20 md:pt-24 md:pb-28 relative">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="stamp">Classified · Public Record</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">An expert briefing, in plain English</span>
              </div>

              <h1 className="font-display font-black leading-[0.85] tracking-[-0.04em] text-[clamp(3.5rem,10vw,8.5rem)]">
                Everything
                <br />
                <span className="italic font-semibold text-stamp" style={{ fontVariationSettings: '"SOFT" 100' }}>they don’t</span>
                <br />
                tell&nbsp;you.
              </h1>

              <div className="mt-10 max-w-2xl">
                <p className="text-xl md:text-2xl leading-[1.45] font-light">
                  You’ve been told your government works one way.
                  <span className="font-medium"> The documented reality is something else entirely.</span>{" "}
                  This is a plain-language briefing on how power actually moves, where your money actually goes, and who is actually responsible when it disappears.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#myths" className="group inline-flex items-center gap-3 bg-ink text-paper px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] hover:bg-stamp transition-colors">
                  Begin the briefing
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a href="#numbers" className="inline-flex items-center gap-3 px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] border border-ink hover:bg-ink hover:text-paper transition-colors">
                  Skip to the numbers
                </a>
              </div>
            </div>

            {/* Editorial side card */}
            <aside className="col-span-12 md:col-span-4 md:pl-8 md:border-l md:border-ink/80">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-4">Bottom Line · Up Front</div>
              <ol className="space-y-5">
                {[
                  ["The President is not the bottleneck.", "Congress writes laws, holds the purse, and runs oversight."],
                  ["Hearings are theater. Reports are routine.", "The same failures have been documented for 20+ years."],
                  ["Fraud is not a Washington problem.", "It’s rubber-stamped in your county, on a Tuesday, in an empty room."],
                ].map(([h, b], i) => (
                  <li key={i} className="grid grid-cols-[auto,1fr] gap-4">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-stamp pt-1">0{i + 1}</span>
                    <div>
                      <div className="font-display font-bold text-lg leading-tight">{h}</div>
                      <div className="text-sm text-muted-foreground mt-1 leading-snug">{b}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-ink text-paper border-y border-ink overflow-hidden">
        <div className="flex items-stretch">
          <div className="bg-stamp text-paper px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] flex items-center shrink-0">
            On the Record
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...FACTS, ...FACTS].map((f, i) => (
                <span key={i} className="px-10 py-3 font-mono text-[12px] uppercase tracking-[0.14em] flex items-center gap-10 shrink-0">
                  {f}
                  <span className="text-stamp">◆</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MYTHS */}
      <section id="myths" className="border-b border-ink/80">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-6 mb-14">
            <div className="col-span-12 md:col-span-4">
              <div className="eyebrow mb-4">Section I · The Eight Dossiers</div>
              <div className="rule-thick mb-6" />
              <h2 className="font-display font-black leading-[0.9] tracking-[-0.03em] text-[clamp(2.6rem,5.5vw,4.5rem)]">
                What you were taught
                <br />
                <span className="italic font-semibold text-stamp">vs. what’s real.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6 md:pt-4">
              <p className="text-lg leading-relaxed text-foreground/80">
                These aren’t political opinions. They are structural misunderstandings — and they benefit exactly the people who are supposed to be accountable to you. Read each one. Then ask why you were never told.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="px-2 py-1 border border-hairline">Sourced</span>
                <span className="px-2 py-1 border border-hairline">Bipartisan</span>
                <span className="px-2 py-1 border border-hairline">Plain-language</span>
                <span className="px-2 py-1 border border-hairline">No ideology</span>
              </div>
            </div>
          </div>

          <div className="border-t border-ink">
            {MYTHS.map((m, i) => (
              <article
                key={i}
                className="reveal grid grid-cols-1 md:grid-cols-12 border-b border-ink"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {/* Index column */}
                <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-ink p-6 md:p-8 flex md:flex-col items-baseline md:items-start gap-4 md:gap-2 bg-paper-2">
                  <div className="font-display font-black text-5xl md:text-6xl leading-none tracking-[-0.04em]">{String(i + 1).padStart(2, "0")}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{m.tag}</div>
                </div>
                {/* Myth */}
                <div className="md:col-span-5 p-6 md:p-8 border-b md:border-b-0 md:border-r border-ink">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stamp mb-3">The Myth</div>
                  <p className="font-display italic text-xl md:text-2xl leading-snug text-foreground/85">{m.myth}</p>
                </div>
                {/* Reality */}
                <div className="md:col-span-5 p-6 md:p-8 bg-paper">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">The Reality</div>
                  <p className="text-base md:text-[17px] leading-relaxed text-foreground">{m.reality}</p>

                  {/* Stamped Verdict */}
                  <div className="mt-5 bottom-line p-4 flex items-start gap-4">
                    <div className="shrink-0">
                      <span className="stamp stamp-solid">The Bottom Line</span>
                    </div>
                    <p className="font-display font-semibold text-base md:text-lg leading-snug text-paper">
                      {m.verdict}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section id="numbers" className="bg-ink text-paper border-b border-ink relative overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none opacity-50" />
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28 relative">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 border-b border-paper/20 pb-8">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-stamp mb-3">Section II · The Ledger</div>
              <h2 className="font-display font-black leading-[0.9] tracking-[-0.03em] text-[clamp(2.4rem,5vw,4rem)] max-w-3xl">
                The numbers nobody puts
                <br /><span className="italic font-semibold text-paper/70">on the same page.</span>
              </h2>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60 max-w-xs">
              All figures from primary sources: GAO, NTA, federal court dockets, state AG filings.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="reveal border-t border-paper/20 lg:border-l first:lg:border-l-0 sm:[&:nth-child(2)]:border-l-paper/20 lg:[&:nth-child(2)]:border-l-paper/20 p-8 group hover:bg-paper/5 transition-colors"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stamp mb-4">Figure 0{i + 1}</div>
                <div className="display-num text-[clamp(3.5rem,7vw,6rem)] text-paper">
                  {s.num}
                </div>
                <div className="mt-6 h-px w-10 bg-stamp" />
                <p className="mt-5 text-sm leading-relaxed text-paper/75">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTIONS PREVIEW */}
      <section id="sections" className="border-b border-ink/80 bg-paper-2">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-5">
              <div className="eyebrow mb-4">Section III · Inside the Briefing</div>
              <div className="rule-thick mb-6" />
              <h2 className="font-display font-black leading-[0.9] tracking-[-0.03em] text-[clamp(2.4rem,5vw,4rem)]">
                Five things
                <br /><span className="italic font-semibold text-stamp">you need to understand.</span>
              </h2>
            </div>
            <p className="col-span-12 md:col-span-6 md:col-start-7 text-lg leading-relaxed text-foreground/80">
              Organized around the five layers of how government dysfunction actually works — from federal structure to your local county board. Each section is sourced, documented, and written for a human being, not a policy analyst.
            </p>
          </div>

          <div className="border border-ink bg-paper">
            {SECTIONS.map((s, i) => (
              <a
                key={s.n}
                href="#"
                className="reveal group grid grid-cols-12 gap-6 px-6 md:px-10 py-8 border-b border-ink last:border-b-0 hover:bg-ink hover:text-paper transition-colors"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="col-span-12 md:col-span-2 font-display font-black text-5xl md:text-6xl leading-none tracking-[-0.04em]">{s.n}</div>
                <div className="col-span-12 md:col-span-7">
                  <h3 className="font-display font-bold text-2xl md:text-3xl leading-tight tracking-tight">{s.t}</h3>
                  <p className="mt-3 text-base leading-relaxed opacity-80">{s.d}</p>
                </div>
                <div className="col-span-12 md:col-span-3 flex md:items-end md:justify-end">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-stamp group-hover:text-paper transition-colors">
                    Open file <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY — California */}
      <section id="case" className="border-b border-ink/80">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div>
              <div className="eyebrow mb-3">Section IV · Case Study, The Local Layer</div>
              <div className="h-[3px] w-24 bg-stamp" />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              California · 2025 – 2026 · Confirmed by California AG, Apr 2026
            </div>
          </div>

          <div className="reveal grid grid-cols-12 border border-ink">
            <div className="col-span-12 lg:col-span-7 p-8 md:p-12 bg-paper">
              <div className="flex items-center gap-3 mb-6">
                <span className="stamp">Field Report</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">№ CA-2026-04</span>
              </div>
              <h3 className="font-display font-black leading-[0.92] tracking-[-0.03em] text-[clamp(2.4rem,5vw,4rem)]">
                $267 million.
                <br /><span className="italic font-semibold text-stamp">Zero real patients.</span>
                <br />All locally approved.
              </h3>
              <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground/85 max-w-xl">
                <p>
                  In early 2026, independent journalist Nick Shirley walked into Los Angeles neighborhoods and found something extraordinary: <strong>hundreds of hospice companies registered at the same addresses, billing Medicaid for patients who didn’t exist.</strong>
                </p>
                <p>
                  The fraud wasn’t approved in Sacramento. It was approved by local county licensing boards — the kind of committee that meets on a Tuesday afternoon, with five seats and nobody in the audience.
                </p>
                <p>
                  When Shirley’s reporting went viral and forced an investigation, California’s legislative response wasn’t to prosecute the fraudsters faster. <strong className="marker">It was to introduce a bill that would have made his journalism illegal.</strong>
                </p>
              </div>

              <div className="mt-10 bottom-line p-5 flex items-start gap-4">
                <span className="stamp stamp-solid shrink-0">Bottom Line</span>
                <p className="font-display font-semibold text-lg md:text-xl leading-snug text-paper">
                  The fraud is local. The cover is local. The fix is local — if anyone shows up.
                </p>
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-5 bg-ink text-paper p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-ink">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-stamp mb-8">Confirmed Numbers</div>
              <div className="divide-y divide-paper/15">
                {CASE_STATS.map((s, i) => (
                  <div key={i} className="py-6 first:pt-0 last:pb-0">
                    <div className="flex items-baseline gap-4">
                      <div className="font-display font-black tracking-[-0.03em] text-4xl md:text-5xl leading-none">{s.n}</div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50">Fig. {String(i + 1).padStart(2, "0")}</div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-paper/80">{s.l}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="action" className="relative bg-paper border-b border-ink/80 overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 relative">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <div className="eyebrow mb-4">Section V · Directive</div>
              <div className="rule-thick mb-8" />
              <h2 className="font-display font-black leading-[0.85] tracking-[-0.04em] text-[clamp(3rem,8vw,7rem)]">
                Ten people.
                <br />Your county.
                <br /><span className="italic font-semibold text-stamp">That’s it.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4">
              <p className="text-lg leading-relaxed text-foreground/85">
                There are 3,144 counties in America. Most have local board seats that are empty, uncontested, or filled by appointment. Those boards approve contracts, license providers, allocate grant money. <strong>They are where the fraud gets rubber-stamped — because nobody is watching.</strong>
              </p>
              <p className="mt-5 text-lg leading-relaxed text-foreground/85">
                You don’t need to run for Senate. You need ten neighbors and a Tuesday afternoon.
              </p>
              <a href="#" className="mt-8 inline-flex items-center gap-3 bg-ink text-paper px-7 py-5 font-mono text-xs uppercase tracking-[0.22em] hover:bg-stamp transition-colors group">
                Take the seat
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

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
                How your government actually works. Who is responsible for what. Whether they’re doing it.
              </p>
            </div>
            <div className="col-span-6 md:col-span-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-4">The Sections</div>
              <ul className="space-y-2 text-paper/85">
                <li><a href="#myths" className="hover:text-stamp transition-colors">01 — The Myths</a></li>
                <li><a href="#numbers" className="hover:text-stamp transition-colors">02 — The Money Trail</a></li>
                <li><a href="#sections" className="hover:text-stamp transition-colors">03 — Said vs. Done</a></li>
                <li><a href="#case" className="hover:text-stamp transition-colors">04 — The Permanent Class</a></li>
                <li><a href="#action" className="hover:text-stamp transition-colors">05 — What You Can Do</a></li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-4">Editorial Standards</div>
              <ul className="space-y-2 text-paper/85">
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
};

export default Index;
