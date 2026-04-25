import { SiteShell, SectionHero, ChapterStrip, useReveal, BottomLine, SectionHeader, PrevNext } from "@/components/site/SiteShell";

const CHAPTERS = [
  { n: "4.1", id: "math", label: "The Incumbency Math" },
  { n: "4.2", id: "door", label: "The Revolving Door" },
  { n: "4.3", id: "finance", label: "Follow the Money" },
  { n: "4.4", id: "filibuster", label: "The Filibuster" },
  { n: "4.5", id: "hypocrisy", label: "Documented Hypocrisies" },
];

const INCUMBENCY = [
  ["Name Recognition", "The incumbent's name is already on every voter's mental map. Challengers spend the first third of every campaign introducing themselves. In low-information races, name recognition alone is worth 10–15 percentage points."],
  ["The Franking Privilege", "Members can mail constituents for free using the government franking privilege — essentially unlimited taxpayer-funded direct mail. Newsletters and \"constituent updates\" before every election are paid for by you. Challengers pay for their own mail."],
  ["Gerrymandering", "Congressional district lines are drawn — in most states — by state legislators in the same parties as the incumbents being protected. In 2022, fewer than 10% of House races were decided by less than 10 points. The election is over before it begins."],
  ["Primary Dynamics", "Primaries — the only elections where incumbents are vulnerable — are decided by 15–20% of registered voters: the most engaged, partisan slice. The general-election majority who disapprove of Congress rarely vote in the primaries where the real decision is made."],
  ["Fundraising Flywheel", "Incumbents raise more money, deterring serious challengers, leading to less competitive races, making it easier to raise more money. Average winning Senate campaign: $20M+. House: $2–3M. Donors give to winners. Incumbents win. Donors give to incumbents."],
];

const DOOR = [
  ["Step 1", "Member Serves on Key Committee", "A member serves on Finance, Armed Services, or Energy. They regulate industries in their jurisdiction. They receive campaign contributions from those industries. They develop deep expertise — and deep relationships."],
  ["Step 2", "Member Leaves Congress", "The member retires, loses, or doesn't run. Federal law requires a \"cooling off\" period — 1 year for House, 2 for Senate. During it they can advise, consult, prepare materials. They just can't make direct lobbying contact."],
  ["Step 3", "Member Becomes a Lobbyist", "After cooling off, they join a lobbying firm or become an in-house lobbyist for the industry they regulated. Their value: access, relationships, and knowledge of the legislative process. They are paid millions for expertise acquired at public expense."],
  ["Step 4", "The Incentive Reshapes Governance", "Current members — watching their predecessors' post-Congress careers — understand that the industries they oversee are also their future employers. The incentive to regulate aggressively is structurally suppressed. This doesn't require corruption. It requires rational career planning."],
];

const FILIBUSTER = [
  ["2013", <><strong className="text-paper">Democrats</strong> (majority) invoke the "nuclear option" — eliminating the filibuster for lower-court and executive nominees. Reason: Republicans were blocking Obama's appointments. Republican response: "an abuse of power that will haunt them."</>],
  ["2017", <><strong className="text-stamp">Republicans</strong> (majority) invoke the nuclear option for Supreme Court nominees — eliminating the filibuster to confirm Gorsuch. Democratic response: "the death of the Senate."</>],
  ["2021–24", <><strong className="text-paper">Democrats</strong> (majority) propose eliminating the filibuster for legislation to pass voting rights, immigration reform, climate. Two Democratic senators refuse. Bills die. Republicans: "the filibuster protects minority rights."</>],
  ["Always", <><strong className="text-paper">Both parties</strong> maintain the filibuster for legislation because it provides cover: the minority can block things without a recorded vote, and the majority can propose things they know will fail — generating fundraising outrage without ever being held accountable for governing.</>],
];

const HYPOCRISIES = [
  ["Deficit Spending", "Attacked deficit spending under Bush and Trump. Voted for $1.9T ARP, expanded Medicaid, student loan forgiveness.", "Attacked deficit spending under Obama and Biden. Voted for $1.5T TCJA tax cuts, COVID relief, military expansion."],
  ["Executive Overreach", "Attacked Trump's EOs as unconstitutional. Supported Obama's DACA, climate rules, student loan actions — challenged on identical grounds.", "Attacked Obama's and Biden's EOs as unconstitutional. Supported Trump's EOs on immigration, tariffs, federal workforce — challenged on identical grounds."],
  ["Judicial Independence", "Called Garland's blocking a theft of a Supreme Court seat. Praised district judges blocking Trump policies as upholding the rule of law.", "Blocked Garland for 11 months citing \"election year\" — fast-tracked Barrett in 5 weeks before an election. Called rulings against Trump \"judicial activism.\""],
  ["The Filibuster", "Eliminated it for judges in 2013. Proposed eliminating it for legislation 2021–24. Opposed elimination when Republicans used the precedent in 2017.", "Called the 2013 nuclear option a \"power grab.\" Invoked it for Supreme Court nominees in 2017. Defended the filibuster as protecting minority rights."],
  ["Oversight & Investigation", "Conducted aggressive oversight of Trump administrations. Slow-walked oversight of Biden on Afghanistan, student loans, border management.", "Conducted aggressive oversight of Obama and Biden. Refused oversight of Trump 45 and 47 on identical institutional grounds."],
];

export default function PermanentClass() {
  const ref = useReveal();
  return (
    <SiteShell fileNo="US-004">
      <div ref={ref}>
        <SectionHero
          number="04"
          subtitle="The Permanent Class"
          title={<>The Permanent <span className="italic font-semibold text-stamp">Class.</span></>}
          deck={<>Congressional approval sits at 15%. Re-election rates sit at 95%. <strong>Those two numbers, coexisting, tell you everything you need to know about why nothing changes.</strong></>}
          note="↓ Incumbency math. Revolving door. Campaign finance. Filibuster."
        />

        <ChapterStrip items={CHAPTERS} />

        {/* OPENER STATS */}
        <section className="bg-paper border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-px border border-ink mb-px">
            <div className="bg-paper p-8 md:p-10 border-t-4 border-stamp">
              <div className="display-num text-[clamp(4rem,9vw,7rem)] text-stamp">15%</div>
              <p className="mt-4 leading-relaxed text-foreground/85">Congressional approval rating — Gallup, consistent average across recent years. A 15-year low hit 9% in 2013. Currently 13–17%.</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Source: Gallup Congressional approval tracking</p>
            </div>
            <div className="bg-paper p-8 md:p-10 border-t-4 border-ink">
              <div className="display-num text-[clamp(4rem,9vw,7rem)] text-ink">95%</div>
              <p className="mt-4 leading-relaxed text-foreground/85">Congressional re-election rate — incumbents who run and win. Has held above 85% every cycle since 1964.</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Source: OpenSecrets / MIT Election Lab</p>
            </div>
          </div>
          <div className="mx-auto max-w-[1400px] px-6 pb-16">
            <BottomLine>
              These two numbers cannot both be true — unless the system that's supposed to translate public opinion into political consequences is structurally broken. It is.
            </BottomLine>
          </div>
        </section>

        {/* 4.1 INCUMBENCY MATH */}
        <section id="math" className="bg-paper-2 border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              eyebrow="4.1 — The Incumbency Math"
              title={<>Why a 15% approval rating <span className="italic font-semibold text-stamp">doesn't cost anyone their job.</span></>}
              intro="Incumbents don't survive at 15% approval by accident. They survive because of structural advantages that compound into near-invincibility — regardless of performance."
            />
            <div className="border border-ink bg-paper">
              {INCUMBENCY.map(([t, d], i) => (
                <div key={i} className="reveal grid grid-cols-1 md:grid-cols-[260px_1fr] border-b border-ink last:border-b-0">
                  <div className="bg-ink text-paper p-6 md:p-8 flex items-center">
                    <div className="font-display font-black text-2xl md:text-3xl tracking-tight leading-tight">{t}</div>
                  </div>
                  <div className="p-6 md:p-8 leading-relaxed text-foreground/85">{d}</div>
                </div>
              ))}
            </div>
            <div className="reveal mt-10">
              <BottomLine>
                Most Congressional elections are decided before you ever enter the voting booth — by a redistricting commission and a 15% primary turnout.
              </BottomLine>
            </div>
          </div>
        </section>

        {/* 4.2 REVOLVING DOOR */}
        <section id="door" className="bg-paper border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              eyebrow="4.2 — The Revolving Door"
              title={<>From Congress to lobbying <span className="italic font-semibold text-stamp">and back again.</span></>}
              intro="Not a conspiracy. Legal, documented, and produces exactly the outcomes you'd expect when the people writing the rules are the same people who will eventually profit from them."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink border border-ink">
              {DOOR.map(([s, t, d], i) => (
                <div key={i} className="reveal bg-paper p-6 md:p-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stamp mb-2">{s}</div>
                  <h3 className="font-display font-bold text-xl md:text-2xl mb-3">{t}</h3>
                  <p className="leading-relaxed text-foreground/80">{d}</p>
                </div>
              ))}
            </div>
            <div className="reveal mt-px grid grid-cols-1 md:grid-cols-3 border border-ink bg-ink text-paper">
              {[
                ["50%+", "Of retiring members of Congress who become registered lobbyists within two years of leaving office", "stamp"],
                ["$4.1B", "Total federal lobbying in 2023 — the highest single-year total ever recorded", "paper"],
                ["10,000+", "Registered federal lobbyists in Washington — roughly 19 for every member of Congress", "stamp"],
              ].map(([n, l, c], i) => (
                <div key={i} className={`p-8 text-center ${i < 2 ? "md:border-r border-paper/15" : ""}`}>
                  <div className={`display-num text-[clamp(3rem,6vw,5rem)] ${c === "stamp" ? "text-stamp" : "text-paper"}`}>{n}</div>
                  <p className="mt-4 text-sm text-paper/75 leading-relaxed">{l}</p>
                </div>
              ))}
            </div>
            <div className="reveal mt-8">
              <BottomLine>The regulator becomes the lobbyist. Knowing this in advance shapes every vote — and that's the whole point.</BottomLine>
            </div>
          </div>
        </section>

        {/* 4.3 CAMPAIGN FINANCE */}
        <section id="finance" className="bg-paper-2 border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              eyebrow="4.3 — Follow the Money"
              title={<>Your representatives are fundraising <span className="italic font-semibold text-stamp">when they should be legislating.</span></>}
              intro="New members are told, on day one, that they need to spend 4 hours per day on the phone fundraising. Not governing. Not legislating. Calling donors. Fundraising isn't a corruption of the system — it is the system."
            />
            <div className="reveal bg-ink text-paper p-8 md:p-10 border border-ink">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-stamp mb-3">The Daily Schedule of a Member of Congress</div>
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">4 hours daily on the phone with donors. 2 hours legislating.</h3>
              <p className="text-paper/80 leading-relaxed max-w-3xl">The DCCC's model schedule for new members allocates <strong className="text-paper">4 hours to "call time" (fundraising), 1–2 hours to constituents, 2 hours to committee/floor work, and 1 hour to "strategic outreach."</strong> The work of legislating is explicitly secondary to the work of fundraising — by design, from day one.</p>
            </div>
            <div className="reveal mt-px grid grid-cols-1 md:grid-cols-2 gap-px bg-ink">
              <div className="bg-paper p-7 border-l-4 border-stamp">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stamp mb-2">The Citizens United Effect</div>
                <h4 className="font-display font-bold text-xl mb-2">Unlimited corporate and union money can flow into elections.</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">The 2010 ruling held that political spending is protected speech — allowing unlimited spending via Super PACs. Outside spending grew from $750M in 2010 to over $4B in recent cycles. The donors writing the largest checks are not doing so out of civic generosity.</p>
              </div>
              <div className="bg-paper p-7 border-l-4 border-ink">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink mb-2">The STOCK Act — Enacted 2012, Barely Enforced</div>
                <h4 className="font-display font-bold text-xl mb-2">Members can't trade on nonpublic information — and rarely face consequences.</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">The Stop Trading on Congressional Knowledge Act requires disclosure within 45 days. Studies document trading patterns correlating with committee assignments. Enforcement actions: minimal. The Office of Congressional Ethics has limited jurisdiction and limited teeth.</p>
              </div>
            </div>
            <div className="reveal mt-8">
              <BottomLine>The job description starts with "raise money." Everything else — including legislating — is what's left over.</BottomLine>
            </div>
          </div>
        </section>

        {/* 4.4 FILIBUSTER */}
        <section id="filibuster" className="bg-ink text-paper border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              invert
              eyebrow="4.4 — The Filibuster"
              title={<>The rule both parties weaponize <span className="italic font-semibold text-stamp">and neither will abolish.</span></>}
              intro="The mechanism that lets the Senate minority block legislation indefinitely — requiring 60 votes to proceed when only 51 are needed to pass. Not in the Constitution. Both parties have changed it when it served them. Both parties keep it when it doesn't."
            />
            <div className="border border-paper/20">
              {FILIBUSTER.map(([y, d], i) => (
                <div key={i} className="reveal grid grid-cols-[110px_1fr] border-b border-paper/15 last:border-b-0">
                  <div className="bg-paper/5 flex items-center justify-center p-5">
                    <div className="font-display font-bold text-stamp text-lg">{y as string}</div>
                  </div>
                  <div className="p-5 md:p-6 text-paper/85 leading-relaxed border-l border-paper/15">{d}</div>
                </div>
              ))}
            </div>
            <div className="reveal mt-8 bg-paper text-ink p-6 md:p-8 border-l-8 border-stamp">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-stamp mb-2">The Filibuster's Real Function</div>
              <p className="leading-relaxed">Publicly defended as protecting minority rights and encouraging compromise. Its actual function: allowing the minority to block without a recorded vote, and the majority to propose legislation they know will fail in order to generate outrage and fundraising. <strong>The bills that would require members to take a stand are exactly the bills the filibuster kills. That is the design.</strong></p>
            </div>
            <div className="reveal mt-8">
              <BottomLine>Both parties claim to hate it. Neither will end it. That tells you which is the truth.</BottomLine>
            </div>
          </div>
        </section>

        {/* 4.5 HYPOCRISIES */}
        <section id="hypocrisy" className="bg-paper border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              eyebrow="4.5 — The Documented Hypocrisies"
              title={<>Same play, different jersey. <span className="italic font-semibold text-stamp">Every time.</span></>}
              intro="Not opinions. Documented patterns — both parties, in the same position, with the same justification reversed. The hypocrisy is the point: it reveals positions are not principled. They are instrumental."
            />
            <div className="border border-ink bg-paper">
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-ink bg-ink text-paper font-mono text-[10px] uppercase tracking-[0.22em]">
                <div className="p-4">The Issue</div>
                <div className="p-4 border-l border-paper/20 text-stamp">Democrats Said / Did</div>
                <div className="p-4 border-l border-paper/20 text-stamp">Republicans Said / Did</div>
              </div>
              {HYPOCRISIES.map(([issue, dem, rep], i) => (
                <div key={i} className="reveal grid grid-cols-1 md:grid-cols-3 border-b border-ink last:border-b-0">
                  <div className="p-5 md:p-6 bg-paper-2">
                    <div className="inline-block bg-stamp text-paper font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-1 mb-2">Bipartisan</div>
                    <h3 className="font-display font-bold text-lg">{issue}</h3>
                  </div>
                  <div className="p-5 md:p-6 border-l border-ink text-sm leading-relaxed text-foreground/85">{dem}</div>
                  <div className="p-5 md:p-6 border-l border-ink text-sm leading-relaxed text-foreground/85">{rep}</div>
                </div>
              ))}
            </div>
            <div className="reveal mt-10 bg-stamp text-paper p-8 md:p-10">
              <h3 className="font-display font-black text-2xl md:text-3xl mb-3">What this actually means</h3>
              <p className="leading-relaxed text-paper/95">When both parties take identical positions on the same procedural issue — defending it when they benefit, attacking it when they don't — the position is not principled. It is strategic. The principle: <strong className="text-paper">power is good when we have it and bad when they do.</strong> Not a left-right distinction. The shared operating logic of an institution that has insulated itself from accountability.</p>
            </div>
            <div className="reveal mt-8">
              <BottomLine>The labels switch. The script stays the same. The institution wins. You lose.</BottomLine>
            </div>
          </div>
        </section>

        <PrevNext prev={{ to: "/said-vs-done", label: "Section 03 — Said vs. Done" }} next={{ to: "/take-action", label: "Section 05 — Take Action" }} />
      </div>
    </SiteShell>
  );
}