import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ALARMS = [
  {
    n: "01",
    tag: "What you weren't told",
    headline: "The fraud isn't approved in Washington. It's rubber-stamped in your county on a Tuesday afternoon.",
    detail:
      "Local boards license the healthcare providers, approve the nonprofit contracts, and allocate the federal grants. Most of those seats are empty or uncontested. The 89 fraudulent hospice companies in one Los Angeles building? Each one was locally certified. Not in Sacramento. Not in DC. In your county's equivalent room.",
    receipt: "$267M in confirmed Medi-Cal hospice fraud · 14 providers · zero real patients · April 2026",
  },
  {
    n: "02",
    tag: "The legal standard",
    headline: "Your government can legally notify you of a meeting by taping a piece of paper to a wall — 24 hours in advance.",
    detail:
      "In many states, posting an agenda on a bulletin board inside a government building 24 hours before a meeting satisfies \"public notice.\" No website required. No agenda subject required (NY: time and place is enough). You can be in the room and still miss the vote — bundled into a \"consent agenda\" that passes dozens of contracts in a single 3-second motion with no discussion.",
    receipt: "Penalty for an illegal closed meeting in Washington State: $500 first offense.",
  },
  {
    n: "03",
    tag: "The IRS nobody fixes",
    headline: "The IRS still runs on COBOL code from the 1960s. Congress has been warned every single year for 20+ years.",
    detail:
      "The National Taxpayer Advocate — the IRS's own independent watchdog — flags the same systemic failures annually. Outdated tech. EITC audits hammering low-income filers because they're cheap and rarely contested. Phone wait times that punish ordinary taxpayers. Four administrations. Same warnings. Zero structural fixes. Compliance costs Americans an estimated $133 billion and 6 billion hours per year — before paying a dollar of tax.",
    receipt: "Yellen promised no new audits under $400K. EITC audits — overwhelmingly under $400K — stayed elevated.",
  },
  {
    n: "04",
    tag: "The numbers that can't both be true",
    headline: "Congressional approval: 15%. Re-election rate: 95%. Both numbers, every year, since 1964.",
    detail:
      "Fewer than 10% of 2022 House races were decided by less than 10 points. The general election is the secondary election — primaries with 15–20% turnout pick the candidates. The DCCC's model schedule for new members allocates 4 hours per day to fundraising calls and only 2 hours to legislating. By design, from day one. Over half of retiring members become registered lobbyists within two years.",
    receipt: "10,000+ registered federal lobbyists · ~19 for every member of Congress · $4.1B spent in 2023 alone.",
  },
  {
    n: "05",
    tag: "The budget you didn't know was broken",
    headline: "The federal government has not passed a complete, on-time budget since 1997.",
    detail:
      "Nearly 30 years of continuing resolutions, omnibus bills, and shutdown brinkmanship. The national debt has grown under every president since 1981 — Republican and Democratic. The President proposes; Congress controls every appropriated dollar. Blaming only the White House for the deficit is a structural misunderstanding Congress benefits from perpetuating.",
    receipt: "$36T+ national debt · $0 in meaningful structural budget reform passed in two decades.",
  },
  {
    n: "06",
    tag: "The 38-year abdication",
    headline: "The last comprehensive immigration law passed in 1986. Everything since: executive orders, lawsuits, reversals.",
    detail:
      "The 2013 Senate bill passed 68–32; House leadership refused a floor vote. The 2024 bipartisan border bill collapsed after the leading presidential candidate publicly opposed it before it could be voted on. Both parties prefer the conflict — it generates donations, media, and base mobilization. A recorded vote would force trade-offs. The filibuster and the missing floor vote are the design, not the bug.",
    receipt: "554+ lawsuits filed against federal executive actions in 2025 · $2B+ in taxpayer-funded litigation.",
  },
  {
    n: "07",
    tag: "What happens when fraud gets exposed",
    headline: "When a journalist's video exposed $170M+ in California hospice fraud, the legislature introduced a bill targeting the journalist.",
    detail:
      "Independent reporter Nick Shirley posted a 40-minute video showing empty offices and luxury cars at the same addresses billing Medi-Cal millions. 42.8 million views. While the AG investigated, California Democrats introduced AB 2624 — quickly nicknamed the \"Stop Nick Shirley Act\" — which would criminalize the investigative method he used. Critics named the bill after him. That's how openly the response operated.",
    receipt: "Federal estimate of total nationwide hospice fraud: $3.5B · The licensing process that approved the providers: unchanged.",
  },
  {
    n: "08",
    tag: "The math that fixes it",
    headline: "10 people per county = 31,440 Americans. That is the entire equation.",
    detail:
      "3,144 counties. Most local board seats are filled by application, not election — no campaign, no fundraising, no prior experience required. The people in them were chosen because they were the only ones who applied. One engaged citizen is an anomaly. Ten is a pattern the board must respond to. You know ten people right now. A church group, a veterans post, ten parents from your kid's school, a group chat.",
    receipt: "Primary turnout: 15–20% · The accountability lever almost nobody uses.",
  },
  {
    n: "09",
    tag: "Abdication, then outrage",
    headline: "Congress hasn't passed major immigration reform since the late 1980s — then calls it 'overreach' every time a president acts.",
    detail:
      "The Immigration Reform and Control Act of 1986 was the last comprehensive law. Nearly four decades later, Congress has held the pen and refused to write — no floor vote on the 2013 Senate bill, the 2024 bipartisan border deal killed before a vote, every serious attempt buried by leadership of both parties. Then, the moment any administration issues an executive order to fill the vacuum Congress created, the same members who blocked the legislation file lawsuits and call it tyranny. You don't get to skip your job for 38 years and then claim the substitute teacher overstepped.",
    receipt: "Last comprehensive immigration law: 1986 · Executive orders & lawsuits since: hundreds · Congressional votes on a comprehensive bill: ~zero.",
  },
];

const QUESTIONS = [
  "Can I see the contracts for every vendor receiving public funds through this board?",
  "What is the audit or verification process for providers approved by this body?",
  "How are new providers vetted before they're licensed or contracted?",
  "What recourse exists if a contracted provider fails to deliver?",
  "I'd like the complete minutes from the last 12 months of meetings.",
];

export default function Condensed() {
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
      <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-ink/80">
        <div className="mx-auto max-w-[1400px] px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-display font-black tracking-tight text-xl leading-none">Unspoken</span>
            <span className="font-display italic font-semibold text-xl leading-none text-stamp">Truths.</span>
          </Link>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Single-Page Edition · 9 Alarms
          </div>
        </div>
        <div className="h-[3px] w-full bg-gradient-to-r from-ink via-stamp to-ink" />
      </header>

      {/* META BAR */}
      <div className="border-b border-ink/80 bg-paper">
        <div className="mx-auto max-w-[1400px] px-6 py-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>File №&nbsp;US-000 · Condensed Briefing</span>
          <span className="hidden sm:inline">Read in 7 Minutes · Built to Be Shared</span>
          <span>Edition I</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink/80">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="mx-auto max-w-[1100px] px-6 pt-16 pb-14 md:pt-24 md:pb-20 relative">
          <div className="flex items-center gap-3 mb-8">
            <span className="stamp">Classified · Public Record</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              The 9 things most Americans never get told
            </span>
          </div>
          <h1 className="font-display font-black leading-[0.86] tracking-[-0.04em] text-[clamp(2.8rem,9vw,7rem)]">
            Nine facts
            <br />
            <span className="italic font-semibold text-stamp">they hope</span>
            <br />
            you never learn.
          </h1>
          <p className="mt-10 max-w-2xl text-xl md:text-2xl leading-[1.45] font-light">
            The condensed edition.
            <span className="font-medium"> Every claim is documented. Every alarm is something the average person doesn't know.</span>{" "}
            Read it in seven minutes. Send it to ten people.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#alarms"
              className="group inline-flex items-center gap-3 bg-ink text-paper px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] hover:bg-stamp transition-colors"
            >
              Start the briefing
              <span className="transition-transform group-hover:translate-x-1">↓</span>
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] border border-ink hover:bg-ink hover:text-paper transition-colors"
            >
              Full multi-section edition →
            </Link>
          </div>
        </div>
      </section>

      {/* ALARMS */}
      <section id="alarms" className="border-b border-ink/80">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
          <div className="mb-12">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-stamp mb-3">The Nine Alarms</div>
            <div className="h-[3px] w-24 bg-ink mb-6" />
            <h2 className="font-display font-black leading-[0.92] tracking-[-0.03em] text-[clamp(2rem,5vw,3.6rem)]">
              What you weren't told — <span className="italic font-semibold text-stamp">in order of how alarming it is.</span>
            </h2>
          </div>

          <div className="border-t border-ink">
            {ALARMS.map((a, i) => (
              <article key={i} className="reveal grid grid-cols-1 md:grid-cols-12 border-b border-ink">
                <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-ink p-6 md:p-8 bg-paper-2 flex md:flex-col items-baseline md:items-start gap-3">
                  <div className="font-display font-black text-5xl md:text-6xl leading-none tracking-[-0.04em]">{a.n}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{a.tag}</div>
                </div>
                <div className="md:col-span-10 p-6 md:p-8 bg-paper">
                  <h3 className="font-display font-bold text-xl md:text-3xl leading-tight tracking-tight mb-4">
                    {a.headline}
                  </h3>
                  <p className="text-base md:text-[17px] leading-relaxed text-foreground/85">{a.detail}</p>
                  <div className="mt-5 bottom-line p-4 flex items-start gap-4">
                    <span className="stamp stamp-solid shrink-0">Receipt</span>
                    <p className="font-display font-semibold text-base md:text-lg leading-snug text-paper">{a.receipt}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO DO */}
      <section className="bg-stamp text-paper border-b border-ink/80">
        <div className="mx-auto max-w-[1100px] px-6 py-16 md:py-24 reveal">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/80 mb-6">
            What you can actually do — today
          </div>
          <h2 className="font-display font-black leading-[0.92] tracking-[-0.03em] text-[clamp(2rem,5vw,3.6rem)]">
            Show up to <span className="italic font-semibold text-ink bg-paper px-3">the empty room.</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/20 border border-paper/20">
            <div className="bg-stamp p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/80 mb-2">5 minutes</div>
              <h3 className="font-display font-bold text-xl mb-2">Find your local boards.</h3>
              <p className="text-paper/90 text-sm leading-relaxed">
                Search your county website for "boards and commissions." Or use{" "}
                <a href="https://www.jointab.us/find-your-seat" target="_blank" rel="noopener" className="underline">
                  JoinTAB.us
                </a>{" "}
                to see open seats by ZIP.
              </p>
            </div>
            <div className="bg-stamp p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/80 mb-2">1 hour</div>
              <h3 className="font-display font-bold text-xl mb-2">Attend one meeting.</h3>
              <p className="text-paper/90 text-sm leading-relaxed">
                All meetings are public. Watch how the consent agenda passes spending. Notice who is — and isn't — in the room.
              </p>
            </div>
            <div className="bg-stamp p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/80 mb-2">Once a year</div>
              <h3 className="font-display font-bold text-xl mb-2">Vote in the primary.</h3>
              <p className="text-paper/90 text-sm leading-relaxed">
                The general election is the secondary one. 15–20% primary turnout decides who's on the ballot in November.
              </p>
            </div>
            <div className="bg-stamp p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/80 mb-2">Right now</div>
              <h3 className="font-display font-bold text-xl mb-2">Send this to ten people.</h3>
              <p className="text-paper/90 text-sm leading-relaxed">
                Ten per county = 31,440 Americans. That's the entire math. You know ten people right now.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-ink text-paper p-6 md:p-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-stamp mb-4">
              Five questions to ask at every meeting — they are public record requests
            </div>
            <ul className="space-y-2">
              {QUESTIONS.map((q, i) => (
                <li key={i} className="bg-paper/5 p-3 font-mono text-[12px] md:text-[13px] tracking-[0.04em] text-stamp">
                  "{q}"
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-paper">
        <div className="mx-auto max-w-[1100px] px-6 py-12">
          <div className="flex flex-wrap items-end justify-between gap-6 pb-8 border-b border-paper/15">
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display font-black tracking-tight text-2xl">Unspoken</span>
                <span className="font-display italic font-semibold text-2xl text-stamp">Truths.</span>
              </div>
              <p className="text-paper/70 text-sm max-w-md">
                Want the receipts? Read the full multi-section edition.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.jointab.us/find-your-seat"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 bg-paper text-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-stamp hover:text-paper transition-colors"
              >
                Find your seat · JoinTAB.us →
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-3 bg-stamp text-paper px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-paper hover:text-ink transition-colors"
              >
                Read the full edition →
              </Link>
            </div>
          </div>
          <div className="pt-6 flex flex-wrap justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50">
            <span>© Unspoken Truths · Condensed Briefing</span>
            <span>No ideology required — just documented reality.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}