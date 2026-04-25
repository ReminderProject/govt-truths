import { SiteShell, SectionHero, ChapterStrip, useReveal, BottomLine, SectionHeader, PrevNext } from "@/components/site/SiteShell";

const CHAPTERS = [
  { n: "5.1", id: "reframe", label: "The Reframe" },
  { n: "5.2", id: "local", label: "Local Boards" },
  { n: "5.3", id: "primary", label: "Vote the Primary" },
  { n: "5.4", id: "foia", label: "FOIA & Records" },
  { n: "5.5", id: "share", label: "Share This" },
  { n: "5.6", id: "resources", label: "Resources" },
];

const LOCAL_STEPS = [
  { n: "1", t: "Find What Exists in Your County", b: <>Go to your county's official website. Search "boards and commissions." You're looking for: health advisory boards, housing/homelessness committees, continuum of care bodies, workforce development boards, nonprofit grant review panels, zoning commissions. <strong>Most counties have more than 20 of these. Most have vacancies.</strong> Fastest shortcut: <a href="https://www.jointab.us/find-your-seat" target="_blank" rel="noopener" className="text-stamp underline">JoinTAB.us — Find My Seat</a>.</> },
  { n: "2", t: "Attend a Meeting Before You Apply", b: <>All meetings are public. Go first as an observer. <strong>Notice whether the consent agenda passes spending items without discussion.</strong> Notice whether board members appear to know the vendors whose contracts they're approving. Request the meeting agenda in advance — it is a public record.</> },
  { n: "3", t: "Apply for an Open Seat", b: <>Most local board seats are filled by application — not election. <strong>No campaign. No fundraising. No prior political experience required.</strong> The people in those seats were chosen because they applied. Often they were the only applicants.</> },
  { n: "4", t: "Bring Nine People", b: <>One person asking questions is an anomaly. Ten is a pattern the board must respond to. <strong>3,144 counties × 10 people = 31,440 Americans</strong> who transform local oversight nationwide. A church, a veterans post, a group chat. You know ten people right now.</> },
];

const QUESTIONS = [
  "Can I see the contracts for every vendor receiving public funds through this board?",
  "What is the audit or verification process for providers approved by this body?",
  "How are new providers vetted before they're licensed or contracted?",
  "What recourse exists if a contracted provider fails to deliver services?",
  "I'd like the complete minutes from the last 12 months of meetings.",
];

const PRIMARY_TIPS = [
  ["Ask About Their Legislative Record", "Have they passed meaningful legislation — not named post offices, but substantive laws? Have they voted on contested issues or found ways to avoid recorded votes? ProPublica's Congress API and GovTrack track every vote."],
  ["Follow Their Campaign Finance", "OpenSecrets.org shows every member's top donors and industries. A member who receives significant funding from an industry they regulate — and then doesn't regulate it — is doing what they were paid to do."],
  ["Check Committee Assignment vs. Votes", "What committee are they on? How have they voted on issues in their committee's jurisdiction? Are they blocking legislation that would address the problems their committee is supposed to oversee?"],
  ["Look at Tenure vs. Outcomes", "How long have they served? What has changed during that time? If someone has served on Senate Finance for 15 years and the IRS still runs 1960s COBOL — that is a data point about their performance."],
];

const RESOURCES = [
  { icon: "🏛️", t: "JoinTAB.us", d: "Find open local government board seats by ZIP code. The starting point.", url: "https://www.jointab.us/find-your-seat", cta: "Find My Seat →" },
  { icon: "💰", t: "OpenSecrets.org", d: "Follow the money. Every congressional member's donors, lobbying, and disclosures.", url: "https://www.opensecrets.org", cta: "Explore →" },
  { icon: "🗳️", t: "GovTrack.us", d: "Track every vote by every member of Congress. Including bills that never got a floor vote.", url: "https://www.govtrack.us", cta: "Track Votes →" },
  { icon: "📋", t: "FOIA.gov", d: "File Freedom of Information Act requests with any federal agency.", url: "https://www.foia.gov", cta: "File a Request →" },
  { icon: "📰", t: "MuckRock.com", d: "File public records requests at federal, state, and local levels. Free guidance on denials.", url: "https://www.muckrock.com", cta: "Request Records →" },
  { icon: "⚖️", t: "National Taxpayer Advocate", d: "The independent IRS watchdog. Annual reports documenting every systemic failure.", url: "https://www.taxpayeradvocate.irs.gov", cta: "Read Reports →" },
  { icon: "🔍", t: "USASpending.gov", d: "Track every federal dollar — by agency, program, recipient, location.", url: "https://www.usaspending.gov", cta: "Follow the Money →" },
  { icon: "📊", t: "GAO.gov", d: "Government Accountability Office reports documenting waste, fraud, and inefficiency.", url: "https://www.gao.gov", cta: "Read Reports →" },
  { icon: "⚡", t: "Just Security Tracker", d: "Tracker of all litigation challenging federal executive actions — sourced and organized.", url: "https://www.justsecurity.org/107087/", cta: "See All Cases →" },
];

export default function TakeAction() {
  const ref = useReveal();
  return (
    <SiteShell fileNo="US-005">
      <div ref={ref}>
        <SectionHero
          number="05"
          subtitle="Take Action"
          title={<>You know enough. <span className="italic font-semibold text-stamp">Now act.</span></>}
          deck={<>You've seen the money trail. The receipts. How the permanent class protects itself. <strong>None of that is worth anything if you close this tab and scroll on.</strong> Here's exactly what to do — sorted by how much time you have.</>}
          note="↓ From 5 minutes to taking a seat — every level of action."
        />

        <ChapterStrip items={CHAPTERS} />

        {/* 5.1 REFRAME */}
        <section id="reframe" className="bg-stamp text-paper border-b border-ink/80">
          <div className="mx-auto max-w-[1100px] px-6 py-20 md:py-28 reveal">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/80 mb-6">5.1 — The Reframe</div>
            <h2 className="font-display font-black leading-[0.92] tracking-[-0.03em] text-[clamp(2.4rem,6vw,5rem)]">
              This is not too <span className="italic font-semibold text-ink bg-paper px-3">big</span> for you.
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-paper/95 leading-relaxed text-lg">
              <p>The biggest lie the broken system tells you is that you can't change it. That it's too complex, too entrenched, too far gone. That lie keeps you scrolling and them governing.</p>
              <p><strong className="text-paper">The people currently in those empty local board seats are not uniquely qualified.</strong> They are simply the people who showed up. The incumbents in Congress are not serving because voters chose them. They are serving because primary turnout is 15% and most people who disapprove of Congress vote in November — not in August when the real decision was made.</p>
              <p>The gap between the system that exists and the system that's possible is not a gap of power. <strong className="text-paper">It is a gap of participation. You are the missing variable.</strong></p>
            </div>
          </div>
        </section>

        {/* 5.2 LOCAL */}
        <section id="local" className="bg-paper-2 border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              eyebrow="5.2 — The Highest-Leverage Action Available"
              title={<>Show up to <span className="italic font-semibold text-stamp">the empty room.</span></>}
              intro="You've seen how local boards approve the contracts, license the providers, and allocate the grants. Here is exactly how to walk in."
            />
            <div className="border border-ink bg-paper">
              {LOCAL_STEPS.map((s) => (
                <div key={s.n} className="reveal grid grid-cols-[80px_1fr] border-b border-ink last:border-b-0">
                  <div className="bg-ink text-stamp font-display font-black text-3xl md:text-4xl flex items-center justify-center">{s.n}</div>
                  <div className="p-6 md:p-8 border-l border-ink">
                    <h3 className="font-display font-bold text-xl md:text-2xl mb-3">{s.t}</h3>
                    <p className="text-foreground/85 leading-relaxed">{s.b}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal mt-10 bg-ink text-paper p-8 md:p-10">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-stamp mb-4">Ask These at Every Meeting — They Are Public Record Requests</div>
              <ul className="space-y-2">
                {QUESTIONS.map((q, i) => (
                  <li key={i} className="bg-paper/5 p-4 font-mono text-[12px] md:text-[13px] tracking-[0.04em] text-stamp">"{q}"</li>
                ))}
              </ul>
            </div>

            <div className="reveal mt-8">
              <BottomLine>One person is an anomaly. Ten is a pattern the board has to respond to. That's the whole equation.</BottomLine>
            </div>
          </div>
        </section>

        {/* 5.3 PRIMARY */}
        <section id="primary" className="bg-paper border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              eyebrow="5.3 — The Accountability Lever Nobody Uses"
              title={<>Vote in the primary. <span className="italic font-semibold text-stamp">That's the real election.</span></>}
              intro="Incumbents survive at 15% approval because 85% of dissatisfied voters show up in November — after the primary has already selected the candidates."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 border border-ink">
              <div className="reveal p-7 md:p-9 bg-ink text-paper border-r border-ink">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stamp mb-3">The Problem</div>
                <h3 className="font-display font-bold text-2xl mb-3">15–20% primary turnout selects your choices.</h3>
                <p className="text-paper/80 leading-relaxed">The most engaged, ideologically motivated slice of each party determines who appears on the November ballot. Everyone who votes in November but skips the primary has ceded that decision.</p>
              </div>
              <div className="reveal p-7 md:p-9 bg-paper">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stamp mb-3">The Solution</div>
                <h3 className="font-display font-bold text-2xl mb-3">Showing up in August changes everything.</h3>
                <p className="text-foreground/85 leading-relaxed">If the 85% who disapprove voted in primaries at even half their general-election rate, incumbency would not be structurally guaranteed. <strong>Register for your party's primary. Mark the date. Show up in August.</strong></p>
              </div>
            </div>

            <div className="reveal mt-px bg-ink text-paper p-8 md:p-10 border border-ink">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-stamp mb-4">What to Look for in a Primary Candidate</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/15">
                {PRIMARY_TIPS.map(([t, d], i) => (
                  <div key={i} className="bg-ink p-5">
                    <h4 className="font-display font-bold mb-2">{t}</h4>
                    <p className="text-sm text-paper/75 leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal mt-8">
              <BottomLine>The general election is the secondary election. The primary is where accountability lives — and dies.</BottomLine>
            </div>
          </div>
        </section>

        {/* 5.4 FOIA */}
        <section id="foia" className="bg-paper-2 border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              eyebrow="5.4 — Your Legal Right to the Documents"
              title={<>They have to give you <span className="italic font-semibold text-stamp">the records.</span></>}
              intro="The Freedom of Information Act and its state equivalents give every American the legal right to request government documents. It is available to you. It is free. It works."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 border border-ink bg-paper">
              <div className="reveal p-6 md:p-7 border-b md:border-b-0 md:border-r border-ink">
                <div className="font-display font-black text-stamp text-3xl mb-3">F</div>
                <h3 className="font-display font-bold text-xl mb-2">Federal FOIA</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">Any federal agency, by any person. Contracts, audits, communications, budget allocations, inspections. Response required within 20 business days. Use <a href="https://www.foia.gov" target="_blank" rel="noopener" className="text-stamp underline">FOIA.gov</a> or MuckRock.</p>
              </div>
              <div className="reveal p-6 md:p-7 border-b md:border-b-0 md:border-r border-ink">
                <div className="font-display font-black text-stamp text-3xl mb-3">S</div>
                <h3 className="font-display font-bold text-xl mb-2">State Public Records Laws</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">California Public Records Act, Texas PIA, Florida Sunshine Law. Apply to county governments, school boards, health departments, CoCs. <strong>The tool to use for local board contracts and meeting minutes.</strong></p>
              </div>
              <div className="reveal p-6 md:p-7">
                <div className="font-display font-black text-stamp text-3xl mb-3">$</div>
                <h3 className="font-display font-bold text-xl mb-2">What to Request</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">From local boards: all contracts in past 24 months, audits, complaints. From state agencies: inspection records, licensure basis. From federal: CMS billing, HUD grants, IG reports.</p>
              </div>
            </div>
            <div className="reveal mt-8">
              <BottomLine>If they deny the request improperly, the denial itself is a data point. An agency that refuses to show its work is telling you something.</BottomLine>
            </div>
          </div>
        </section>

        {/* 5.5 SHARE */}
        <section id="share" className="bg-ink text-paper border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              invert
              eyebrow="5.5 — The Simplest Action on This Page"
              title={<>Share this site <span className="italic font-semibold text-stamp">with ten people.</span></>}
              intro="Everything here is designed to be shared — plain language, documented, bipartisan, built for the person who's never thought about any of this. Ten people share with ten more. That is awareness becoming action."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/15">
              <div className="reveal bg-ink p-7 border-t-4 border-stamp">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stamp mb-3">The Most Shareable Entry Points</div>
                <ul className="space-y-3 text-paper/85 text-sm leading-relaxed">
                  <li><strong className="text-paper">The Eight Myths (Homepage).</strong> The fastest reframe. 3 minutes on a phone.</li>
                  <li><strong className="text-paper">Rigged for Silence (Section 2.4).</strong> Seven mechanisms that keep meetings empty. Most "I had no idea" responses.</li>
                  <li><strong className="text-paper">The Pattern (Section 3.5).</strong> Four steps. Every administration. Shareable as a single screenshot.</li>
                </ul>
              </div>
              <div className="reveal bg-ink p-7 border-t-4 border-paper">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper mb-3">Who to Share It With</div>
                <ul className="space-y-3 text-paper/85 text-sm leading-relaxed">
                  <li><strong className="text-paper">The person who says "they're all the same."</strong> Section 3.5 proves them right about dysfunction, then redirects the target.</li>
                  <li><strong className="text-paper">The person who's given up on voting.</strong> Section 5.3 — the general election is the secondary one.</li>
                  <li><strong className="text-paper">The person who's angry but doesn't know where to direct it.</strong> Section 2 names the room.</li>
                </ul>
              </div>
            </div>
            <div className="reveal mt-px bg-stamp text-paper p-8 md:p-10 text-center">
              <h3 className="font-display font-black text-2xl md:text-3xl mb-3">No ads. No tracking. No partisan agenda.</h3>
              <p className="max-w-2xl mx-auto text-paper/95 leading-relaxed">This site exists to give ordinary Americans a clear, documented, plain-language understanding of how government actually works. Never advertising. Never party funding. The accountability here applies to both sides. Always.</p>
            </div>
          </div>
        </section>

        {/* 5.6 RESOURCES */}
        <section id="resources" className="bg-paper-2 border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              eyebrow="5.6 — The Tools to Go Deeper"
              title={<>Where to find what <span className="italic font-semibold text-stamp">you need to know.</span></>}
              intro="Every claim on this site is sourced. Here are the tools and databases to verify what we've said — and to do your own research."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-ink bg-paper">
              {RESOURCES.map((r, i) => (
                <a
                  key={i}
                  href={r.url}
                  target="_blank"
                  rel="noopener"
                  className="reveal group p-6 border-b border-ink lg:[&:nth-child(3n)]:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r border-r border-ink hover:bg-ink hover:text-paper transition-colors"
                >
                  <div className="text-2xl mb-3">{r.icon}</div>
                  <h3 className="font-display font-bold text-xl mb-2">{r.t}</h3>
                  <p className="text-sm opacity-80 leading-relaxed mb-4">{r.d}</p>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-stamp group-hover:text-stamp">{r.cta}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-ink text-paper border-b border-ink/80">
          <div className="mx-auto max-w-[900px] px-6 py-24 md:py-32 text-center reveal">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-stamp mb-6">The Whole Thing — Always Within Reach</div>
            <h2 className="font-display font-black leading-[0.9] tracking-[-0.04em] text-[clamp(3rem,8vw,6.5rem)]">
              You know the system. <span className="italic font-semibold text-stamp">Break the pattern.</span>
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-paper/85 leading-relaxed text-lg">
              The fraud requires the empty room. The permanent class requires the empty primary. The broken budget requires the uninformed voter. <strong className="text-paper">You are no longer any of those things.</strong>
            </p>
            <p className="mt-4 max-w-xl mx-auto text-paper/75 leading-relaxed">
              Find your local board seat. Vote in the primary. Request the contracts. Share this with ten people.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <a href="https://www.jointab.us/find-your-seat" target="_blank" rel="noopener" className="bg-stamp text-paper px-7 py-4 font-mono text-xs uppercase tracking-[0.22em] hover:bg-paper hover:text-ink transition-colors">
                Find My Seat — JoinTAB.us →
              </a>
              <a href="/" className="border border-paper/40 text-paper/85 px-7 py-4 font-mono text-xs uppercase tracking-[0.22em] hover:bg-paper hover:text-ink transition-colors">
                Start Over From the Beginning
              </a>
            </div>
          </div>
        </section>

        <PrevNext prev={{ to: "/permanent-class", label: "Section 04 — The Permanent Class" }} />
      </div>
    </SiteShell>
  );
}