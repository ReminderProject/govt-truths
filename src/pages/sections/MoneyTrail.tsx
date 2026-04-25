import { SiteShell, SectionHero, ChapterStrip, useReveal, BottomLine, SectionHeader, PrevNext } from "@/components/site/SiteShell";

const CHAPTERS = [
  { n: "2.1", id: "pipeline", label: "The Pipeline" },
  { n: "2.2", id: "california", label: "California Case Study" },
  { n: "2.3", id: "local-layer", label: "The Local Layer" },
  { n: "2.4", id: "rigged", label: "Rigged for Silence" },
  { n: "2.5", id: "county-math", label: "The County Math" },
  { n: "2.6", id: "do", label: "What You Can Do" },
];

const PIPELINE = [
  {
    n: "01", level: "Federal · Congress", title: "Congress Appropriates the Money",
    body: <>Congress passes a spending bill that allocates federal dollars to a program — healthcare, housing, workforce development, childcare. <strong>This is where the law gets written and the budget gets set.</strong> Congress also decides how much oversight the spending requires and how fraud will be defined and reported.</>,
    gap: "Congress funds programs at the federal level but often sets weak or vague fraud-prevention requirements. Medicaid, for example, is a federal-state partnership where the federal government provides 50–77¢ of every dollar — but enforcement standards vary widely by state.",
    leak: false,
  },
  {
    n: "02", level: "Federal · Agency", title: "Federal Agency Distributes Funds to States",
    body: <>The relevant federal agency — HHS for healthcare, HUD for housing, USDA for food programs — sends money to state governments through block grants, formula grants, or reimbursement programs. <strong>The federal agency sets the rules. It does not run the programs.</strong></>,
    gap: "Federal agencies often lack the staff to audit every state's spending. They rely on states to self-report. One in ten federal healthcare dollars is estimated to be an improper payment — the federal government's own figure.",
    leak: false,
  },
  {
    n: "03", level: "State · Legislature + Agency", title: "State Receives and Passes Money Down",
    body: <>State government receives the federal funds, adds (or doesn't add) its own money, and allocates it to state agencies. <strong>State agencies set licensing requirements and approve providers who can bill the programs.</strong></>,
    gap: "California's Medi-Cal program saw a 1,500% increase in licensed hospice companies between 2010 and 2023. The state licensing process approved virtually all of them. Provider verification was inadequate. Many licenses were issued to addresses that housed dozens of companies.",
    leak: false,
  },
  {
    n: "04", level: "⚠ Local · Where it actually happens", title: "Local Boards Approve Everything",
    body: <>This is the step nobody talks about. <strong>Nonprofit grants are signed off by city councils, approved by community development boards, and rubber-stamped by county commissions.</strong> Healthcare provider licenses require local approval. Housing funds flow through local Continuums of Care. These boards approve millions in contracts. They meet in rooms that are often empty.</>,
    gap: "The hospice fraud in Los Angeles was not approved in Sacramento. Each fraudulent provider passed through a local licensing process — county health certification, local registration, and in many cases local nonprofit grant approval. The empty offices, the 89 companies in one building — all locally certified.",
    leak: true,
  },
  {
    n: "05", level: "The Fraud Point", title: "Approved Provider Bills the Program",
    body: <>Once locally approved and state-licensed, a provider can bill Medicaid, Medicare, or other federal/state programs. <strong>Fraudulent providers bill for patients who don't exist, services never rendered, treatments never provided.</strong> The billing is automated. The fraud is invisible until someone goes looking.</>,
    gap: "A building in Los Angeles has 89 registered hospice companies. Each billing $6,000+ per patient per month. Most have no real patients. The billing runs automatically. It takes an independent journalist with a camera — not a government auditor — to expose it.",
    leak: false,
  },
  {
    n: "06", level: "Government Response", title: "What Happens When It Gets Exposed",
    body: <>When fraud gets exposed — usually by outside journalists, whistleblowers, or federal investigators — the response follows a predictable pattern: denial, then "decisive action," then prosecution of individual fraudsters, then no structural reform. In California's case: legislation targeting the journalist who exposed it.</>,
    gap: "Step 1: Denial. Step 2: Eventual admission, reframed as decisive action. Step 3: Prosecution of individual fraudsters (sometimes). Step 4: No structural reform. Step 5: In California — a bill targeting the journalist.",
    leak: false,
  },
];

const TIMELINE = [
  { date: "2010 — 2023", title: "The Setup: 1,500% Growth With No Scrutiny", body: <>California's hospice industry expands from a few hundred providers to thousands. <strong>One building in Los Angeles accumulates 89 registered hospice companies.</strong> A 2023 state audit flags the growth and raises fraud concerns. The licensing continues anyway.</>, verdict: "The audit existed. The findings were known. The response didn't come." },
  { date: "March 10, 2026", title: "CBS News Investigation", body: <>CBS News publishes an investigation built on the 2023 audit. Reporter Adam Yamaguchi walks into a building with 89 hospice licenses. <strong>Most have no staff, no patients, and months of mail piled at the door.</strong> The story gets limited traction.</>, verdict: "" },
  { date: "March 16, 2026", title: "Nick Shirley's Video — 42.8 Million Views", body: <>Independent journalist Nick Shirley posts a 40-minute video on X. Luxury vehicles outside. Empty offices inside. Operators panicking on camera. The video estimates <strong>at least $170 million in LA hospice fraud alone</strong> — a conservative figure.</>, verdict: "42.8 million views. Three days later, the federal government was looking. Not because oversight worked — because a journalist with a camera showed up." },
  { date: "April 9, 2026", title: "California AG Confirms $267 Million in Fraud — 14 Providers", body: <>AG Rob Bonta announces the dismantling of a hospice fraud ring. <strong>14 providers. $267 million billed. Zero real patients.</strong> Stolen identities used to enroll people in Medi-Cal. Transnational criminal networks. The federal government had been paying most of it.</>, verdict: "$267M confirmed. Federal estimate of total nationwide hospice fraud: $3.5B. The licensing process that approved these providers: unchanged.", highlight: true },
  { date: "Concurrent — The Political Response", title: "California Introduces Assembly Bill 2624", body: <>While the fraud investigation is underway, California Democrats introduce AB 2624 — quickly nicknamed the "Stop Nick Shirley Act" by critics. The bill would make it <strong>illegal to publish images of people providing immigration services</strong>, criminalizing Shirley's investigative method.</>, verdict: "The government didn't go after the fraud faster. It went after the journalist exposing it. Critics named the bill after him. That's how openly they operated." },
];

const LOCAL_BODIES = [
  { hi: true, label: "Healthcare Fraud Gateway", title: "County Health Commissions", body: <>County health departments issue local certifications required for Medicaid/Medi-Cal providers. <strong>In California, these local approvals were a prerequisite for state licensing.</strong> With no public watchdogs in attendance, fraudulent applicants faced zero scrutiny.</> },
  { hi: true, label: "Homelessness Money Gateway", title: "Continuums of Care", body: <>Federal HUD homelessness funds flow through local Continuum of Care (CoC) boards. <strong>California's $24 billion in homelessness spending flowed through CoCs.</strong> Most meetings have no public attendance whatsoever.</> },
  { hi: false, label: "Nonprofit Contract Gateway", title: "City Councils & Community Boards", body: <>City councils approve contracts with nonprofits that receive federal and state grants. <strong>Contract approvals often occur on consent agendas</strong> — items passed in bulk with no discussion.</> },
  { hi: false, label: "Workforce & Training Money", title: "Workforce Development Boards", body: <>Federal workforce dollars (WIOA funds) flow through local Workforce Development Boards — appointed bodies that contract with training providers. <strong>These boards allocate hundreds of millions per year.</strong></> },
];

const RIGGED = [
  { n: "01", tag: "The Notice Window", title: "24 Hours. That's the Legal Standard.", body: <>In many states, a board satisfies its public notice obligation by posting a meeting announcement <strong>24 hours in advance</strong>. One day. For meetings where millions in contracts are approved. Colorado defines "full and timely" notice as 24 hours. The most generous standard in most states is 72 hours.</>, verdict: "By the time you legally have to be told about a meeting, the people who benefit already know the agenda — and how they'll vote." },
  { n: "02", tag: "The Posting Location", title: "\"Posted in a Public Place\" Means a Bulletin Board You've Never Seen.", body: <>The law requires notice to be posted — not broadcast, not emailed. "Posted" legally means a piece of paper on a bulletin board inside a government building. Many boards don't even have websites. Where they do, the law requires online posting <strong>only "if the body maintains one."</strong></>, verdict: "You are legally notified when a piece of paper is taped to a wall in a building most people have never entered. That is compliant. That is the standard." },
  { n: "03", tag: "The Agenda Exemption", title: "You Can Be Notified a Meeting Exists Without Being Told What Will Be Decided.", body: <>New York's Open Meetings Law requires notice of time and place — <strong>but does not require an agenda or subject matter</strong>. Where agendas are required, "reasonable specificity" is satisfied by language like "vendor contract renewal." You know the meeting is happening. You don't know that the $4M hospice approval is item 7B.</>, verdict: "Even if you find the meeting in time, you may have no legal right to know what's on the agenda until you walk in." },
  { n: "04", tag: "The Consent Agenda", title: "The Most Consequential Decisions Disappear Into a Single Vote With Zero Discussion.", body: <>Boards routinely bundle dozens of items — contract renewals, license approvals, grant disbursements — into a single block called the "consent agenda." The block passes in one vote. <strong>No discussion. No debate. No one reads the items aloud.</strong> An Ohio Supreme Court case found one board "constructively closed its public meeting" by adjourning one minute after adopting a consent agenda containing three spending resolutions.</>, verdict: "You can be in the room and still never see the decision happen — passed in the three seconds it takes to say \"motion to approve consent agenda, all in favor.\"" },
  { n: "05", tag: "The Scheduling", title: "Meetings Are Scheduled for People Who Already Work in the System.", body: <>Orange County, CA's Continuum of Care meets every fourth Wednesday from <strong>2:00–5:00 p.m.</strong> Contra Costa's Council on Homelessness meets first Thursdays from <strong>1:00–3:00 p.m.</strong> These are not times designed for working people. They work for the nonprofit administrators whose organizations receive the contracts.</>, verdict: "The people who receive the money are paid to be in that room. The people who fund the money are at work. The scheduling didn't happen by accident." },
  { n: "06", tag: "Your Right to Speak", title: "You Have the Right to Watch. You Do Not Automatically Have the Right to Be Heard.", body: <>The right to attend a public meeting is guaranteed. The right to speak at it is not. Some boards allow comment only on specific items. Some limit it to three minutes. Some schedule public comment <strong>after the vote</strong>. The law says the meeting must be open. It says nothing about whether anyone in power has to listen.</>, verdict: "You can watch a $4M contract get approved on a consent agenda in 10 seconds and have zero legal recourse to be heard before it happens. That is the system." },
  { n: "07", tag: "The Penalty", title: "When They Break Even These Weak Rules, the Fine Is $500.", body: <>Washington State law holds a board member personally liable for <strong>$500 for the first violation. $1,000 for subsequent ones.</strong> That is the deterrent for conducting an illegal closed meeting where millions in spending gets decided. Less than the cost of a weekend at a conference where those same members network with the vendors they're approving.</>, verdict: "The rules exist. The penalties don't deter. The people approving the contracts are the ones who would have to enforce penalties on themselves." },
];

const COUNTY_CONTROL = [
  ["🏥", "Healthcare Provider Licensing", "Who can bill Medicaid. Which hospices, home health agencies, and clinics get certified to receive public money. Where the California fraud entered the pipeline."],
  ["🏠", "Homelessness Fund Allocation", "Which nonprofits receive federal HUD housing money. California's $24B in homelessness spending flowed through CoC boards with no public attendance."],
  ["📋", "Nonprofit Grant Approval", "Who gets community development grants and social service contracts from federal block grants. Often passed on consent agendas with zero discussion."],
  ["🎓", "Workforce & Training Contracts", "Which training providers receive federal workforce dollars. Hundreds of millions per year allocated by boards most Americans don't know exist."],
  ["🏗", "Zoning & Development", "Which projects get built. Which variances are granted. Who benefits from public land use decisions worth millions — decided in Tuesday afternoon hearings."],
  ["📚", "School District Spending", "How education dollars are allocated. Which vendors get school contracts. Decisions made by boards that rarely see a parent in the audience."],
];

const STEPS = [
  { n: "1", title: "Find Your Local Boards", body: <>Go to your county government's website and search "boards and commissions." Every county publishes a list of appointed bodies — most have vacant seats filled by a single application with no competition. <strong>JoinTAB.us has a "Find My Seat" tool</strong> that maps open positions by ZIP code.</> },
  { n: "2", title: "Show Up to a Meeting Before You Apply", body: <>All board meetings are public. Attend first to understand the process. <strong>Your presence alone changes the dynamic.</strong> Request the meeting agenda in advance. It's public record. They have to give it to you.</> },
  { n: "3", title: "Ask These Four Questions — Every Time", questions: [
    "Can I see the contracts for every vendor receiving public funds?",
    "What is the audit process for providers billing this program?",
    "How are new providers verified before they're approved?",
    "What happens when a provider doesn't deliver what was contracted?",
  ], body: <>You don't need to be an expert. You need four questions — and the willingness to wait for a real answer. These are public record requests. Anyone can make them. The answers — or the resistance to answering — tell you everything.</> },
  { n: "4", title: "Apply for an Open Seat", body: <>Many local board seats are filled by application and appointment — no election campaign needed. <strong>No prior government experience required.</strong> The people in those seats were chosen because they were the only ones who applied.</> },
  { n: "5", title: "Bring Nine People With You", body: <>One engaged citizen is an anomaly. Ten is a pattern the board has to respond to. <strong>Ten people per county = 31,440 nationwide.</strong> A church group, a veterans post, ten parents from your kid's school, a dinner party. You know ten people right now.</> },
];

export default function MoneyTrail() {
  const ref = useReveal();
  return (
    <SiteShell fileNo="US-002">
      <div ref={ref}>
        <SectionHero
          number="02"
          subtitle="The Money Trail"
          title={<>The <span className="italic font-semibold text-stamp">Money Trail.</span></>}
          deck={<>Federal dollars leave Washington. They pass through state agencies. They land in local boards where five people sit on a Tuesday afternoon. <strong>And in that room — with nobody watching — the fraud gets approved.</strong></>}
          note="↓ Follow every step of the pipeline — and where it breaks"
        />

        <ChapterStrip items={CHAPTERS} />

        {/* BIG STATEMENT */}
        <section className="border-b border-ink/80 bg-paper">
          <div className="mx-auto max-w-[1100px] px-6 py-20 md:py-28 reveal text-center">
            <div className="font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,5vw,3.8rem)]">
              The money originates <span className="text-stamp">in Congress.</span><br />
              The fraud gets approved <span className="bg-ink text-paper px-3 italic font-semibold">in your county.</span>
            </div>
            <p className="mt-8 max-w-2xl mx-auto text-foreground/75 leading-relaxed">
              Congress appropriates the dollars. The fraud doesn't happen in Washington — it gets rubber-stamped by local licensing boards in your county. Understanding that pipeline is the whole ballgame.
            </p>
          </div>
        </section>

        {/* 2.1 PIPELINE */}
        <section id="pipeline" className="border-b border-ink/80 bg-paper-2">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              eyebrow="2.1 — The Pipeline"
              title={<>How a federal dollar <span className="italic font-semibold text-stamp">becomes local fraud.</span></>}
              intro="A dollar leaves the U.S. Treasury and takes a journey through multiple layers of government before it reaches a program. At each step, a different set of people controls the money — and each step is a place where it can disappear."
            />
            <div className="border border-ink bg-paper">
              {PIPELINE.map((p, i) => (
                <div key={i} className={`reveal grid grid-cols-1 md:grid-cols-12 border-b border-ink last:border-b-0 ${p.leak ? "bg-stamp/[0.04]" : ""}`}>
                  <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-ink p-6 md:p-8 flex md:flex-col items-baseline md:items-start gap-3">
                    <div className="font-display font-black text-5xl md:text-6xl leading-none tracking-[-0.04em]">{p.n}</div>
                    <div className={`font-mono text-[10px] uppercase tracking-[0.2em] ${p.leak ? "text-stamp" : "text-muted-foreground"}`}>{p.level}</div>
                  </div>
                  <div className="md:col-span-10 p-6 md:p-8">
                    <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-tight mb-4">{p.title}</h3>
                    <p className="text-base md:text-[17px] leading-relaxed text-foreground/85 max-w-3xl">{p.body}</p>
                    <div className={`mt-6 border-l-4 ${p.leak ? "border-stamp bg-stamp/10" : "border-ink/40 bg-paper-2"} p-4 max-w-3xl`}>
                      <div className={`font-mono text-[10px] uppercase tracking-[0.22em] mb-2 ${p.leak ? "text-stamp" : "text-muted-foreground"}`}>
                        {p.leak ? "▲ The Leak Point" : "The Gap"}
                      </div>
                      <p className="text-sm leading-relaxed">{p.gap}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSIGHT BAND */}
        <section className="bg-stamp text-paper border-b border-ink/80">
          <div className="mx-auto max-w-[1100px] px-6 py-20 md:py-24 text-center reveal">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/70 mb-6">The Key Insight</div>
            <div className="font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,5vw,3.8rem)]">
              Sacramento sits on top of it<br />
              and benefits from the fraud.<br />
              <span className="italic font-semibold">The fraud lives downstairs —</span><br />
              and downstairs is empty.
            </div>
            <p className="mt-8 max-w-2xl mx-auto text-paper/85 leading-relaxed">
              The empty rooms — local boards, county commissions, advisory committees — are where the money gets approved. Filling those rooms changes the math entirely.
            </p>
          </div>
        </section>

        {/* 2.2 CALIFORNIA */}
        <section id="california" className="bg-ink text-paper border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              invert
              eyebrow="2.2 — Case Study"
              title={<>California: <span className="italic font-semibold text-stamp">what actually happened.</span></>}
              intro="The California hospice fraud isn't just about California. It's a blueprint for how this pipeline breaks down nationwide — and how government responds when someone follows the money."
            />
            <div className="relative pl-8 md:pl-12 border-l border-paper/20">
              {TIMELINE.map((t, i) => (
                <div key={i} className="reveal mb-12 last:mb-0 relative">
                  <span className={`absolute -left-[37px] md:-left-[49px] top-1 w-3 h-3 ${t.highlight ? "bg-stamp" : "bg-paper"} ring-2 ${t.highlight ? "ring-stamp" : "ring-paper/40"} ring-offset-2 ring-offset-ink`} />
                  <div className={`font-mono text-[11px] uppercase tracking-[0.22em] mb-2 ${t.highlight ? "text-stamp" : "text-paper/60"}`}>{t.date}</div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">{t.title}</h3>
                  <p className="text-paper/80 leading-relaxed max-w-3xl">{t.body}</p>
                  {t.verdict && (
                    <div className={`mt-4 border-l-4 ${t.highlight ? "border-stamp" : "border-paper/40"} pl-4 py-2 max-w-2xl`}>
                      <p className="text-sm text-paper/90 italic leading-relaxed">{t.verdict}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2.3 LOCAL LAYER */}
        <section id="local-layer" className="bg-paper border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              eyebrow="2.3 — The Local Layer"
              title={<>The rooms <span className="italic font-semibold text-stamp">nobody watches.</span></>}
              intro="Every fraudulent dollar in California passed through a local approval process. Here's exactly what local government bodies control — and what happens when nobody is in the audience."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 border border-ink">
              {LOCAL_BODIES.map((b, i) => (
                <div key={i} className={`reveal p-6 md:p-8 border-b md:border-b border-ink ${i % 2 === 0 ? "md:border-r" : ""} ${i >= 2 ? "md:border-b-0" : ""} ${i === LOCAL_BODIES.length - 1 ? "border-b-0" : ""} ${b.hi ? "bg-paper-2" : "bg-paper"}`}>
                  <div className={`font-mono text-[10px] uppercase tracking-[0.22em] mb-3 ${b.hi ? "text-stamp" : "text-muted-foreground"}`}>{b.label}</div>
                  <h3 className="font-display font-bold text-2xl mb-3">{b.title}</h3>
                  <p className="leading-relaxed text-foreground/85">{b.body}</p>
                </div>
              ))}
            </div>
            <div className="reveal mt-px bg-ink text-paper p-8 md:p-12 border-x border-b border-ink">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stamp mb-3">The Common Thread</div>
              <h3 className="font-display font-black text-3xl md:text-4xl mb-4 tracking-tight">Real Power. No Audience.</h3>
              <p className="max-w-3xl text-paper/85 leading-relaxed">
                Every one of these bodies approves spending of public money. Every one is required to hold public meetings. Every one has seats that can be filled by ordinary citizens. <strong className="text-paper">And most of the time, those meetings happen in a government building with nobody watching except the people receiving the contracts.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* 2.4 RIGGED */}
        <section id="rigged" className="bg-ink text-paper border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              invert
              eyebrow="2.4 — The System Is Working as Designed"
              title={<>Rigged <span className="italic font-semibold text-stamp">for silence.</span></>}
              intro={<>These meetings are <em className="not-italic font-semibold text-paper">legally required to be public</em>. That is the cover. Here is what public actually means — and how every procedural rule stacks up to make sure you never actually show up.</>}
            />
            <div className="space-y-px">
              {RIGGED.map((r) => (
                <article key={r.n} className="reveal grid grid-cols-[6px_1fr] bg-paper/[0.03]">
                  <div className="bg-stamp" />
                  <div className="p-6 md:p-8">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stamp mb-2">Mechanism {r.n} — {r.tag}</div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-paper mb-4 leading-tight">{r.title}</h3>
                    <p className="text-paper/80 leading-relaxed max-w-3xl mb-5">{r.body}</p>
                    <BottomLine label="Bottom Line">{r.verdict}</BottomLine>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RAGE BRIDGE */}
        <section className="bg-stamp text-paper border-b border-ink/80">
          <div className="mx-auto max-w-[900px] px-6 py-20 md:py-24 text-center reveal">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/80 mb-6">Read that again. All of it.</div>
            <div className="font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,5vw,4rem)]">
              Seven ways they kept you out of the room <span className="italic font-semibold text-ink">while spending your money.</span>
            </div>
            <p className="mt-8 text-paper/90 leading-relaxed font-medium">
              Not one required a conspiracy. They required only that the rules be written by the people who benefit from you not being there — and left unchanged by the people those rules protect.
            </p>
            <div className="mt-10 inline-block bg-ink text-paper p-6 md:p-8 text-left">
              <div className="font-display font-bold text-2xl md:text-3xl text-stamp mb-3">Here's what they didn't count on.</div>
              <p className="text-paper/85">You now know the room exists. You know what happens in it. You know how it was designed to keep you out. And you know exactly what it takes to walk in anyway.</p>
            </div>
          </div>
        </section>

        {/* 2.5 COUNTY MATH */}
        <section id="county-math" className="bg-paper-2 border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              eyebrow="2.5 — The Math"
              title={<>Why ten people per county <span className="italic font-semibold text-stamp">changes everything.</span></>}
              intro="This is not a metaphor. It is arithmetic. The system was built assuming you wouldn't show up. Change that one variable and the entire equation inverts."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 border border-ink mb-12">
              {[
                { n: "3,144", l: "Counties in America — each with multiple local boards approving public spending" },
                { n: "× 10", l: "Engaged citizens per county — showing up, asking questions, demanding to see contracts" },
                { n: "31,440", l: "Total Americans needed to transform local oversight everywhere. Less than a college football crowd." },
              ].map((s, i) => (
                <div key={i} className={`reveal bg-ink text-paper p-8 md:p-10 text-center ${i < 2 ? "md:border-r border-paper/15" : ""}`}>
                  <div className="display-num text-[clamp(3.5rem,7vw,6rem)] text-stamp">{s.n}</div>
                  <div className="mt-4 h-px w-12 bg-stamp mx-auto" />
                  <p className="mt-5 text-sm leading-relaxed text-paper/80">{s.l}</p>
                </div>
              ))}
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-stamp mb-4">What These Boards Actually Control</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-ink bg-paper">
              {COUNTY_CONTROL.map(([icon, t, d], i) => (
                <div key={i} className={`reveal p-6 border-b border-ink ${(i + 1) % 3 !== 0 ? "lg:border-r" : ""} ${(i + 1) % 2 !== 0 ? "md:border-r lg:border-r" : ""}`}>
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="font-display font-bold text-lg mb-2">{t}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2.6 WHAT YOU CAN DO */}
        <section id="do" className="bg-paper border-b border-ink/80">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
            <SectionHeader
              eyebrow="2.6 — What You Can Do"
              title={<>The concrete steps. <span className="italic font-semibold text-stamp">Right now.</span></>}
              intro="You now understand why the room is empty. Here is exactly how to walk into it — step by step, no experience required."
            />
            <div className="space-y-px border border-ink">
              {STEPS.map((s) => (
                <div key={s.n} className="reveal grid grid-cols-[80px_1fr] bg-paper">
                  <div className="bg-ink text-stamp font-display font-black text-4xl flex items-center justify-center">{s.n}</div>
                  <div className="p-6 md:p-8 border-l border-ink">
                    <h3 className="font-display font-bold text-xl md:text-2xl mb-3">{s.title}</h3>
                    <p className="text-foreground/80 leading-relaxed mb-4">{s.body}</p>
                    {s.questions && (
                      <ul className="space-y-2 mt-4">
                        {s.questions.map((q, i) => (
                          <li key={i} className="bg-ink text-stamp font-mono text-[12px] uppercase tracking-[0.1em] p-3">"{q}"</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal bg-ink text-paper p-10 md:p-16 text-center mt-px">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-stamp mb-4">The Only Thing Left to Do</div>
              <div className="font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2.2rem,5vw,4.5rem)]">
                The fraud requires the empty room.<br />
                <span className="italic font-semibold text-stamp">Take the room.</span>
              </div>
              <p className="mt-6 max-w-xl mx-auto text-paper/80 leading-relaxed">
                Not because of a federal investigation. Not because of a new law. Because you showed up on a Tuesday afternoon and asked to see the contracts.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <a href="https://www.jointab.us/find-your-seat" target="_blank" rel="noopener" className="bg-stamp text-paper px-7 py-4 font-mono text-xs uppercase tracking-[0.22em] hover:bg-paper hover:text-ink transition-colors">
                  Find My Seat — JoinTAB.us →
                </a>
              </div>
            </div>
          </div>
        </section>

        <PrevNext prev={{ to: "/", label: "Section 01 — The Myths" }} next={{ to: "/said-vs-done", label: "Section 03 — Said vs. Done" }} />
      </div>
    </SiteShell>
  );
}