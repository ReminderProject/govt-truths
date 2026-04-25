import { SiteShell, SectionHero, ChapterStrip, useReveal, BottomLine, SectionHeader, PrevNext } from "@/components/site/SiteShell";
import type { ReactNode } from "react";

const CHAPTERS = [
  { n: "3.1", id: "irs", label: "IRS & Tax Enforcement" },
  { n: "3.2", id: "budget", label: "Budget & Deficit" },
  { n: "3.3", id: "immigration", label: "Immigration" },
  { n: "3.4", id: "costs", label: "What It Costs You" },
  { n: "3.5", id: "pattern", label: "The Pattern" },
];

type Receipt = { admin: string; promised: string; said: ReactNode; done: ReactNode; resp: "Congress" | "Executive" | "Both"; respText: ReactNode };

const IRS_RECEIPTS: Receipt[] = [
  {
    admin: "Obama Administration (2009–2017)", promised: "Focus on high-income enforcement and modernization",
    said: "Enforcement would focus on high-income filers and corporate compliance. The IRS would be modernized and phone service improved.",
    done: <><strong>Audit rates declined across all income levels</strong> as budget cuts reduced agents. The IRS leaned on automated collections — liens and levies — which hit middle- and lower-income taxpayers hardest because they rarely had attorneys. The NTA began flagging aggressive automated enforcement causing disproportionate hardship year after year.</>,
    resp: "Both", respText: "Congress cut IRS funding while demanding enforcement results. The executive branch responded by automating enforcement — choosing efficiency over fairness. The NTA flagged both. Nothing changed.",
  },
  {
    admin: "Trump 45 Administration (2017–2021)", promised: "Less regulatory burden, simplification via TCJA",
    said: "The Tax Cuts and Jobs Act would simplify the tax system. Regulatory burden would be reduced. The IRS would become less intrusive.",
    done: <><strong>Audit rates for high-income filers and corporations collapsed.</strong> The IRS lost a significant portion of its experienced workforce — including specialists capable of handling complex returns. Fewer experienced agents = fewer complex audits. IT infrastructure continued to deteriorate. COVID triggered a backlog crisis. The TCJA added complexity for millions of households despite its simplification claims.</>,
    resp: "Both", respText: "The administration chose to reduce IRS capacity as policy. Congress funded the reduction and did not legislate the simplification it promised. The NTA documented both failures. No consequences.",
  },
  {
    admin: "Biden Administration (2021–2025)", promised: "\"We will NOT increase audits on people under $400K\"",
    said: <>Treasury Secretary Yellen and the administration repeatedly committed, in writing, that <strong>no new audit activity would target households earning under $400,000.</strong> The $80B in IRS funding via the Inflation Reduction Act was framed as targeting wealthy tax cheats and large corporations.</>,
    done: <><strong>Audit rates for lower-income filers — particularly EITC recipients — remained elevated.</strong> Why? EITC audits are automated, cheap, and rarely contested because affected taxpayers can't afford attorneys. High-income audits are expensive and take years. The system drifts toward the cheapest audits regardless of what a president announces. The $400K promise was never operationally redesigned to be honored.</>,
    resp: "Executive", respText: "The IRS's enforcement prioritization is an executive function. The administration made a specific public promise and did not build the operational changes needed to keep it. Congress funded new IRS capacity but did not legislate enforcement priorities — leaving it to agency discretion that followed economic incentives, not political promises.",
  },
  {
    admin: "Trump 47 Administration (2025–Present)", promised: "Reduce IRS size, cut enforcement, eliminate Direct File",
    said: "The IRS would be downsized. The agency's enforcement footprint would be reduced. Direct File would be eliminated.",
    done: <><strong>Workforce reductions are underway. Fewer audits. Enforcement revenue declining.</strong> IRA funding is being cut. Modernization investments from 2022–2024 are being paused or reversed. Direct File was eliminated. The NTA has raised early concern about regression to pre-2022 backlog conditions. The same legacy systems flagged as dangerously outdated since the early 2000s remain in place.</>,
    resp: "Both", respText: "The executive branch is actively downsizing the IRS. Congress has not legislated any replacement system, structural reform, or enforcement alternative. The same documented failures from 20 years of NTA reports are likely to deepen.",
  },
];

const NTA_FAILURES = [
  ["IRS technology is dangerously outdated", "First flagged: early 2000s. Current status: core systems still run COBOL code from the 1960s. Congressional response: hearings, patches, no replacement."],
  ["EITC audits disproportionately target low-income filers", "Documented across all four administrations. Pattern persists because automated low-income audits cost less than complex high-income audits."],
  ["Tax code complexity creates unnecessary burden", "Compliance costs Americans an estimated $133 billion and 6 billion hours annually — before paying a dollar of tax. Complexity creates political leverage."],
  ["Phone service and processing delays harm taxpayers", "Backlog crises 2020–2023. Improvements 2023–2024. Regression in 2025. Structural causes — funding, staffing, technology — remain unaddressed."],
];

const PATTERN = [
  { n: "01", t: "Congress Avoids the Hard Vote", b: "Immigration, healthcare, trade, energy — Congress refuses to legislate on contested issues because legislation requires trade-offs, creates accountability, and gives the opposing party a partial win. Conflict is more valuable than resolution." },
  { n: "02", t: "Presidents Fill the Vacuum With EOs", b: "Executive orders are faster than legislation, don't require compromise, and let the president claim sole credit. They are also constitutionally fragile — reversible by the next president and immediately challengeable in court." },
  { n: "03", t: "Courts Become the De Facto Legislature", b: "When Congress won't legislate and presidents govern by EO, courts interpret vague or absent statutory language. Policy gets made through injunctions, not laws. The underlying questions never get resolved — just litigated again next cycle." },
  { n: "04", t: "Taxpayers Fund Every Round", b: "The EOs. The lawsuits challenging them. The lawsuits defending them. The reversals. The new lawsuits challenging the reversals. Politicians get fundraising material. Lawyers get billable hours. Taxpayers get the bill." },
];

const COSTS = [
  { n: "554+", l: "Lawsuits filed against federal executive actions in 2025 alone — virtually all challenging policies Congress could have legislated", src: "Just Security Tracker, Jan 2026" },
  { n: "$2B+", l: "Direct federal litigation cost to taxpayers — DOJ Civil Division defending challenged executive actions across 554+ cases", src: "FY2026 Presidential Budget" },
  { n: "503+", l: "Cases still pending — final cost won't be known for years. Every case is another round of taxpayer-funded defense.", src: "Just Security / Lawfare trackers" },
  { n: "78%", l: "Rate at which the administration lost at district court — 40 of 51 fully decided cases ruled against. Policies proceeded anyway via shadow docket.", src: "Progressive State Leaders Committee" },
];

const respColor = (r: Receipt["resp"]) =>
  r === "Congress" ? "bg-stamp text-paper" : r === "Executive" ? "bg-ink text-paper" : "bg-paper-2 text-ink border border-ink";

function ReceiptCard({ r, dark }: { r: Receipt; dark?: boolean }) {
  return (
    <article className={`reveal grid grid-cols-1 md:grid-cols-3 border border-ink ${dark ? "bg-ink text-paper" : "bg-paper"}`}>
      <div className={`p-6 md:p-7 border-b md:border-b-0 md:border-r border-ink ${dark ? "border-paper/15" : ""}`}>
        <div className={`font-mono text-[10px] uppercase tracking-[0.22em] mb-2 ${dark ? "text-stamp" : "text-stamp"}`}>What Was Said</div>
        <p className={`text-[15px] leading-relaxed ${dark ? "text-paper/85" : "text-foreground/85"}`}>{r.said}</p>
      </div>
      <div className={`p-6 md:p-7 border-b md:border-b-0 md:border-r border-ink ${dark ? "border-paper/15" : ""}`}>
        <div className={`font-mono text-[10px] uppercase tracking-[0.22em] mb-2 ${dark ? "text-paper/60" : "text-muted-foreground"}`}>What the Data Shows</div>
        <p className={`text-[15px] leading-relaxed ${dark ? "text-paper/90" : "text-foreground"}`}>{r.done}</p>
      </div>
      <div className="p-6 md:p-7">
        <div className="flex items-center gap-2 mb-3">
          <span className={`font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-1 ${respColor(r.resp)}`}>{r.resp}</span>
          <div className={`font-mono text-[10px] uppercase tracking-[0.22em] ${dark ? "text-paper/60" : "text-muted-foreground"}`}>Who's Responsible</div>
        </div>
        <p className={`text-sm leading-relaxed ${dark ? "text-paper/80" : "text-foreground/80"}`}>{r.respText}</p>
      </div>
    </article>
  );
}

export default function SaidVsDone() {
  const ref = useReveal();
  return (
    <SiteShell fileNo="US-003">
      <div ref={ref}>
        <SectionHero
          number="03"
          subtitle="Said vs. Done"
          title={<>Said vs. Done. <span className="italic font-semibold text-stamp">The receipts.</span></>}
          deck={<>What every administration promised about IRS enforcement, the deficit, and immigration. <strong>What the data actually shows.</strong> Documented, sourced, bipartisan.</>}
          note="↓ Four administrations. Same promises. Same outcomes."
        />

        <ChapterStrip items={CHAPTERS} />

        {/* HOW TO READ */}
        <section className="bg-paper-2 border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-px border border-ink">
            {[
              ["The Claim", "What Was Said", "Stamp red — the official statement, sourced and dated."],
              ["The Data", "What Actually Happened", "Audit data, IRS records, budget figures, court filings, independent reporting."],
              ["The Owner", "Who's Responsible", "Which branch owns the failure. No partisan framing — just structure."],
            ].map(([eyebrow, t, d], i) => (
              <div key={i} className="bg-paper p-6 md:p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stamp mb-2">{eyebrow}</div>
                <h3 className="font-display font-bold text-xl mb-2">{t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3.1 IRS */}
        <section id="irs" className="bg-paper border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              eyebrow="3.1 — IRS & Tax Enforcement"
              title={<>The $400,000 promise <span className="italic font-semibold text-stamp">nobody kept.</span></>}
              intro="Every administration claims to target wealthy tax cheats. Every administration's IRS audits the people who are cheapest to audit. Four administrations. Same words. Same outcome."
            />
            <div className="space-y-10">
              {IRS_RECEIPTS.map((r, i) => (
                <div key={i} className="reveal">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-display font-black text-2xl">0{i + 1}</span>
                    <h3 className="font-display font-bold text-xl md:text-2xl">{r.admin}</h3>
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-stamp mb-4">Promised: {r.promised}</div>
                  <ReceiptCard r={r} />
                </div>
              ))}
            </div>

            <div className="reveal mt-16 bg-ink text-paper p-8 md:p-10 border border-ink">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-stamp mb-4">The NTA Annual Report — Same Warnings, Every Year</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/15">
                {NTA_FAILURES.map(([t, d], i) => (
                  <div key={i} className="bg-ink p-5 border-l-2 border-stamp">
                    <h4 className="font-display font-bold mb-2 leading-tight">{t}</h4>
                    <p className="text-sm text-paper/70 leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm italic text-paper/60 leading-relaxed">The NTA reports annually to Congress. Congress acknowledges the reports. Congress changes nothing. This is not a reporting failure. It is a response failure — and the response is Congress's responsibility.</p>
              <div className="mt-6">
                <BottomLine label="Bottom Line">
                  Twenty years of identical warnings. Four administrations. Zero structural fixes. The diagnosis is documented; the treatment is refused.
                </BottomLine>
              </div>
            </div>
          </div>
        </section>

        {/* 3.2 BUDGET */}
        <section id="budget" className="bg-paper-2 border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              eyebrow="3.2 — The Budget & Deficit"
              title={<>Everyone promises fiscal responsibility. <span className="italic font-semibold text-stamp">Nobody delivers it.</span></>}
              intro="Every administration claims to be the responsible one. Here's what the numbers show — regardless of which party was in the White House or controlled Congress."
            />
            <ReceiptCard r={{
              admin: "All Recent Administrations",
              promised: "Fiscal responsibility",
              said: "\"We will reduce the deficit.\" \"We will cut wasteful spending.\" \"We will put America on a fiscally sustainable path.\" These statements have been made by Obama, Trump 45, Biden, and Trump 47. All of them. On the record.",
              done: <><strong>The national debt has increased under every president since 1981.</strong> The last federal surplus was 1998–2001 under Clinton with a Republican Congress. <strong>The government has not passed a complete, on-time budget since 1997.</strong> Nearly 30 years of continuing resolutions, omnibus bills, and shutdown brinkmanship — all of which prevent the coherent long-term planning required for genuine fiscal responsibility.</>,
              resp: "Congress",
              respText: <>The President proposes a budget. <strong>Congress controls all federal spending.</strong> Every dollar appropriated, every program funded, every deficit incurred requires Congressional action. Both parties have controlled Congress during the decades of debt accumulation. Blaming only the president for the deficit is a structural misunderstanding Congress benefits from perpetuating.</>,
            }} />
            <div className="reveal mt-10 grid grid-cols-1 md:grid-cols-3 border border-ink bg-ink text-paper">
              {[
                ["1997", "Last year the federal government passed a complete, on-time budget. Every year since: continuing resolutions, omnibus bills, or shutdowns.", "stamp"],
                ["$36T+", "Current national debt. Has grown under every administration since 1981. A bipartisan achievement.", "paper"],
                ["$0", "Meaningful structural budget reform passed by any Congress in the last two decades. Hearings happen. Legislation doesn't.", "stamp"],
              ].map(([n, l, color], i) => (
                <div key={i} className={`p-8 text-center ${i < 2 ? "md:border-r border-paper/15" : ""}`}>
                  <div className={`display-num text-[clamp(3rem,6vw,5rem)] ${color === "stamp" ? "text-stamp" : "text-paper"}`}>{n}</div>
                  <p className="mt-4 text-sm text-paper/75 leading-relaxed">{l}</p>
                </div>
              ))}
            </div>
            <div className="reveal mt-8">
              <BottomLine>
                The deficit isn't a presidential failure. It's a Congressional refusal — repeated, bipartisan, and 30 years deep.
              </BottomLine>
            </div>
          </div>
        </section>

        {/* 3.3 IMMIGRATION */}
        <section id="immigration" className="bg-paper border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              eyebrow="3.3 — Immigration"
              title={<>38 years of promises. <span className="italic font-semibold text-stamp">Zero legislation.</span></>}
              intro="Immigration is the clearest case of Congressional abdication in modern American history. Every president has promised to fix it. Congress has refused to legislate for nearly four decades."
            />
            <ReceiptCard r={{
              admin: "All Recent Administrations",
              promised: "Comprehensive immigration solution",
              said: <>Obama: comprehensive reform. Trump 45: border security, end illegal immigration. Biden: humane enforcement, pathway to citizenship. Trump 47: mass deportation, end birthright citizenship. <strong>Every administration has promised the definitive solution.</strong></>,
              done: <><strong>The last comprehensive immigration legislation: 1986.</strong> Everything since: executive orders, enforcement memoranda, administrative priorities — all constitutionally fragile, reversible, immediately challenged in court. Result: <strong>554+ lawsuits in 2025</strong> challenging immigration EOs. Cost: over $2 billion. The 2013 Senate bill passed 68-32; House leadership refused to bring it to a floor vote. The 2024 bipartisan border bill collapsed after the leading presidential candidate publicly opposed it before it reached a vote.</>,
              resp: "Congress",
              respText: "The executive branch governs by EO because Congress will not legislate. Both parties prefer the conflict — it generates donations, media, and base mobilization. The bill would have required members to take a recorded vote and own the trade-offs. That is exactly what Congress is designed to do — and exactly what it has refused for 38 years.",
            }} />

            <div className="reveal mt-10 bg-stamp text-paper p-8 md:p-10 border-l-8 border-ink">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] mb-3">The Hypocrisy You Need to Hear Clearly</div>
              <p className="text-base md:text-lg leading-relaxed text-paper/95">
                When politicians cry "executive overreach" every time a president uses EOs to manage immigration — <strong className="text-paper">those are the same politicians who have refused to legislate immigration for nearly four decades.</strong> The executive branch uses EOs because Congress left a vacuum. Congress left it deliberately — because immigration conflict generates more fundraising than immigration legislation.
              </p>
              <p className="mt-4 font-display font-bold text-xl md:text-2xl text-ink bg-paper inline-block px-3 py-1">
                You cannot abdicate for 38 years and then claim outrage at the consequences.
              </p>
            </div>

            <div className="reveal mt-8">
              <BottomLine>
                Congress chose the conflict. You paid for it. The next "executive overreach" lawsuit is on your tab.
              </BottomLine>
            </div>
          </div>
        </section>

        {/* 3.4 COSTS */}
        <section id="costs" className="bg-ink text-paper border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              invert
              eyebrow="3.4 — What Congressional Inaction Costs You"
              title={<>The bill <span className="italic font-semibold text-stamp">you didn't vote for.</span></>}
              intro="These are the documented costs of governing by executive order instead of legislation — of Congress refusing to do its job and leaving the tab for taxpayers."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-paper/15">
              {COSTS.map((s, i) => (
                <div key={i} className={`reveal p-8 ${i < COSTS.length - 1 ? "lg:border-r border-paper/15" : ""} ${i % 2 === 0 ? "md:border-r md:lg:border-r border-paper/15" : ""} ${i < 2 ? "md:border-b lg:border-b-0 border-paper/15" : ""}`}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stamp mb-3">Figure 0{i + 1}</div>
                  <div className="display-num text-[clamp(3.5rem,7vw,5.5rem)] text-paper">{s.n}</div>
                  <div className="mt-4 h-px w-10 bg-stamp" />
                  <p className="mt-4 text-sm text-paper/80 leading-relaxed">{s.l}</p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">{s.src}</p>
                </div>
              ))}
            </div>
            <div className="reveal mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/15">
              <div className="bg-ink p-7 border-t-2 border-stamp">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stamp mb-2">The Court Level Inversion</div>
                <h3 className="font-display font-bold text-xl md:text-2xl mb-3 leading-tight">Loses 78% at district court. Wins 80% at SCOTUS shadow docket.</h3>
                <p className="text-sm text-paper/75 leading-relaxed">District courts examine evidence, hold hearings, issue detailed opinions. The Supreme Court's emergency docket issues orders — often <strong className="text-paper">with no written explanation at all</strong> — allowing challenged policies to proceed while the underlying questions remain unresolved. 7 of 25 shadow docket decisions in 2025 provided zero reasoning.</p>
              </div>
              <div className="bg-ink p-7 border-t-2 border-stamp">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stamp mb-2">The Emergency Docket Escalation</div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-paper/5 p-4 text-center"><div className="display-num text-3xl text-paper">8</div><div className="text-xs text-paper/60 mt-1">Bush + Obama · 16 yrs</div></div>
                  <div className="bg-paper/5 p-4 text-center"><div className="display-num text-3xl text-stamp">33+</div><div className="text-xs text-paper/60 mt-1">Trump 47 · year one</div></div>
                </div>
                <p className="text-sm text-paper/75 leading-relaxed">Each application costs taxpayer money. Each one that succeeds allows a policy found unlawful by lower courts to proceed. Each unresolved question generates the next round of litigation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3.5 PATTERN */}
        <section id="pattern" className="bg-paper-2 border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              eyebrow="3.5 — The Pattern"
              title={<>Why the same problems show up <span className="italic font-semibold text-stamp">under every administration.</span></>}
              intro="After three topics and four administrations, the pattern is not a coincidence. It is a stable system producing predictable results for predictable beneficiaries."
            />
            <div className="border border-ink bg-paper">
              {PATTERN.map((p) => (
                <div key={p.n} className="reveal grid grid-cols-[80px_1fr] border-b border-ink last:border-b-0">
                  <div className="bg-ink text-stamp font-display font-black text-3xl flex items-center justify-center">{p.n}</div>
                  <div className="p-6 border-l border-ink">
                    <h3 className="font-display font-bold text-xl md:text-2xl mb-2">{p.t}</h3>
                    <p className="text-foreground/80 leading-relaxed">{p.b}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal mt-10 bg-ink text-paper p-8 md:p-12">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-stamp mb-3">Who Benefits From This System Staying Exactly As It Is</div>
              <h3 className="font-display font-black text-2xl md:text-3xl mb-5">Everyone except you.</h3>
              <ul className="space-y-3 text-paper/85">
                <li><strong className="text-paper">Politicians:</strong> Every unresolved crisis is a fundraising opportunity. Immigration stays broken = donations keep flowing.</li>
                <li><strong className="text-paper">Lawyers:</strong> 554+ lawsuits = thousands of billable hours. The shadow docket creates new emergency applications.</li>
                <li><strong className="text-paper">Lobbying industry:</strong> Complex tax code = clients who need help. Weak enforcement = industries that benefit from selectively enforced rules.</li>
              </ul>
              <p className="mt-6 font-display font-semibold text-lg md:text-xl text-stamp">Who doesn't benefit: you. The taxpayer. The only participant in this system who funds it, receives the worst outcomes from it, and has no institutional incentive to keep it broken.</p>
            </div>

            <div className="reveal mt-8">
              <BottomLine>
                The pattern is the policy. The dysfunction is the design. And every party in power — in either branch — has chosen to keep it that way.
              </BottomLine>
            </div>
          </div>
        </section>

        <PrevNext prev={{ to: "/money-trail", label: "Section 02 — The Money Trail" }} next={{ to: "/permanent-class", label: "Section 04 — The Permanent Class" }} />
      </div>
    </SiteShell>
  );
}