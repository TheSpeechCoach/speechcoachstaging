// Extended landing-page content for hero variants.
// Each entry is keyed by the slug in heroVariants.ts and overlays the base record.

export type HeroVariantContent = {
  introExtended?: string;
  whyMatters?: string;
  approach?: string;
  outcomes?: string[];
  formats?: { name: string; description: string }[];
  caseSnapshot?: string;
  faqs?: { question: string; answer: string }[];
  problems?: string[];
  workOn?: string[];
};

// Reusable approach framings — varied per audience inside each entry below.
// Doctrine recurring across the practice: "What to say. How to say it. How to own it."
// Public speaking is performance. Confidence comes from competence and proof of work. Structure creates freedom.

export const heroVariantContent: Record<string, HeroVariantContent> = {
  // =========================================================================
  // CORE
  // =========================================================================
  "homepage-lost": {
    introExtended:
      "You have done the reading. You have watched the videos. You have asked the chatbot for a structure, a script, a hook, an opening line. None of it has changed the way you sound in the room — because the room is not a problem of information. It is a problem of performance.\n\nWhat fails when communication fails is rarely the idea itself. It is the gap between the version of you that thought of it and the version of you that has to deliver it. The rush. The hedging. The retreat into jargon. The thinning of the voice when the stakes lift. The eye contact that drifts at the moment it should hold. These are not character flaws. They are untrained reflexes — and they respond to training.\n\nThe alternative is a method built around you. What to say. How to say it. How to own it. Structure that gives you freedom rather than confining you. Delivery that reads as conviction, not performance. A voice that sounds like you at your strongest — not a borrowed register from someone else's TED talk. This is the work. It is human, specific, and built on three decades of doing it with people whose careers turn on what comes out of their mouths.",
    whyMatters:
      "Most people speak well enough in private and underperform in public. The cost is rarely a single moment. It is the cumulative compounding of meetings that did not move, pitches that did not convert, interviews that did not land, presentations that left a senior room unconvinced. None of it shows up on a balance sheet. All of it shows up in a career.\n\nCommunication is the layer underneath every other professional skill. If it is sharp, the work speaks; if it is blurred, the work has to be re-explained. Coaching this layer is the single highest-leverage piece of professional development most senior people never receive — because no one taught it in school, the books cannot rehearse it, and the chatbot cannot watch you do it.",
    approach:
      "The doctrine is straightforward and the work is exact. What to say — sharpening the message until it survives interruption, scrutiny and edit. How to say it — voice, pace, breath, eye, body, the physical mechanics of being understood and believed. How to own it — performance preparation: the rehearsal that takes the work past adequate into delivery that lands every time it is required to.\n\nSessions are 1:1, in person in London or via video. Each session is built around your real material — your next board meeting, your investor pitch, your conference keynote, the conversation you are dreading. There is no curriculum stapled on top of you. There is footage, structured feedback, and reps. Confidence is not pep-talked into existence. It is earned by doing the thing, badly, then better, then under pressure, then well.",
    outcomes: [
      "Speak with a voice that matches the seniority of the role",
      "Open and close any high-stakes talk with deliberate impact",
      "Handle interruption and challenge without losing the thread",
      "Read the room and adjust without losing the message",
      "Deliver on camera with the same presence as in the room",
      "Walk into the moments you used to avoid",
    ],
    formats: [
      {
        name: "1:1 Coaching Programme",
        description:
          "Six sessions over six to twelve weeks, built around your real material and the moments coming up in your diary. The default starting point for most individual clients.",
      },
      {
        name: "Intensive Preparation",
        description:
          "Compressed coaching for a single named event — keynote, board, investor pitch, IPO roadshow, media appearance. Two to four sessions over a tight timeline with full rehearsal to performance level.",
      },
      {
        name: "Corporate & Team Workshops",
        description:
          "Bespoke half-day or full-day workshops for leadership, sales and client-facing teams. Delivered at your office or our London studio. Built around your live business scenarios.",
      },
    ],
    caseSnapshot:
      "A newly promoted divisional MD at a FTSE 100 group inherited a quarterly all-hands of nine hundred people and a voice that disappeared past the third row. Six sessions: breath and projection, message architecture, opener and close discipline, two rehearsals in the actual room. By the third quarter the feedback in the engagement survey moved from 'corporate and distant' to 'the first all-hands I have looked forward to' — the same person, the same content, a different performance.",
    faqs: [
      {
        question: "How quickly will I see results?",
        answer:
          "Most clients notice a change in voice and structure within the first two sessions. By session four the change is visible to colleagues and partners. The work is cumulative — what you can do under pressure six weeks in is materially different from what you walked in with. Intensive preparation packages are designed to deliver readiness for a named event in two to three weeks.",
      },
      {
        question: "Is the coaching confidential?",
        answer:
          "Yes. All 1:1 work is conducted under strict confidentiality. We do not name clients, share footage, or reference the work outside the studio. For senior, public and regulated clients we sign NDAs as standard and can hold sessions off-site or via secure video. Discretion is part of the service.",
      },
      {
        question: "Do I have to come to London?",
        answer:
          "No. Approximately half of our 1:1 work is delivered via video — for clients in the US, Europe, Asia and the Middle East as much as for clients across the UK. Video sessions are not a compromised version of the room work; they are designed for the medium and are particularly effective for clients whose own work is increasingly remote.",
      },
      {
        question: "What does the investment look like?",
        answer:
          "Standard 1:1 packages start at £1,800 for six sessions. Senior intensives, board-level engagements and three-day C-suite programmes are quoted bespoke, typically in the £5,000–£30,000 range depending on scope. Corporate workshops are quoted per day. We issue a written proposal within forty-eight hours of an initial consultation.",
      },
      {
        question: "How do I know if I need this rather than another presentation course?",
        answer:
          "If your job has changed and your delivery has not — if you are being heard at a level beneath the work — if the recording sounds nothing like you intended — this is the right work. Off-the-shelf courses teach generic frameworks to rooms of strangers. This is one-to-one coaching on your material, with someone in the room who has done this with senior people for thirty years.",
      },
    ],
    problems: [
      "You've tried self-help videos, books and AI tools and nothing has stuck",
      "You sound nothing on a recording like you do in your head",
      "You freeze, rush or shrink in the moments that matter most",
      "You're stepping into a bigger role and your delivery hasn't caught up",
      "You've been told to work on your communication and don't know where to start",
      "You over-prepare and still feel under-prepared on the day",
      "You can hold a one-to-one but lose authority in front of a group",
      "You're done figuring it out alone",
    ],
    workOn: [
      "Voice, authority and physical presence",
      "Speech clarity, pace and breath control",
      "Confidence and composure under pressure",
      "Structure, story and message discipline",
      "Opener and close craftsmanship",
      "Delivery for stage, screen and the boardroom",
      "Handling Q&A, interruption and hostile questioning",
      "A communication style that is unmistakably yours",
    ],
  },

  // -------------------------------------------------------------------------
  "executive-lost": {
    introExtended:
      "By the time most executives book this work, they have been promoted past the level at which their communication style was last properly developed. They have read the leadership books, sat through corporate training, watched the conference talks, and still walk out of board meetings replaying the moment their answer landed flatter than the thinking behind it.\n\nThe problem is not preparation. Most senior executives over-prepare. The problem is that the delivery layer — the voice that holds the room, the pace that signals control, the body that backs the words, the structure that survives interruption — was never deliberately built. It was inherited, adapted, and quietly hoped to be enough. At a divisional or C-suite level, hope is an expensive operating model.\n\nExecutive speech coaching is the deliberate building of that layer. Boards, investor days, all-hands, regulator interviews, succession panels, media — the moments where the seniority of the role and the seniority of the delivery have to match. Done properly, the work compounds: every subsequent meeting, every subsequent presentation, every subsequent difficult conversation is performed by a more capable version of you.",
    whyMatters:
      "At executive level the audience is already convinced of your competence. They are listening for something more specific: judgement, calm under pressure, command of detail without drowning in it, the ability to hold conviction without grandstanding. These are not qualities a deck communicates. They are read off the speaker.\n\nWhen executive communication misses, the cost rarely shows up immediately. It shows up in the board paper that gets pushed back for redrafting. The investor call that did not move the share price. The succession decision that quietly passes to someone whose delivery felt more inevitable. The team that stopped bringing the harder questions because the answers felt rehearsed. Each of these is recoverable individually and unaffordable in aggregate.",
    approach:
      "The work is anchored in three disciplines. What to say — message architecture built for executive audiences: front-loaded, scrutiny-proof, anchored in narrative rather than data dump. How to say it — voice, breath, pace and physical presence calibrated to the room you actually operate in. How to own it — full rehearsal of named moments to performance level, with structured feedback, video review, and reps under pressure.\n\nSessions are 1:1, fully confidential, in person at our London studio or via secure video. The work uses your live material: the upcoming board agenda, the AGM script, the investor day talking points, the regulator interview brief. There is no off-the-shelf module — the coach is in the room with you, watching you do the actual work, and making the precise adjustments that move it from competent to commanding.",
    outcomes: [
      "Board and investor presentations that land with conviction and control",
      "A voice that reads as the seniority of the role from the first sentence",
      "Composure under hostile questioning, regulator scrutiny and media pressure",
      "Town halls that engage the room rather than survive it",
      "Succession-conversation readiness without sounding rehearsed",
      "A consistent executive presence across in-person, video and broadcast",
    ],
    formats: [
      {
        name: "Executive 1:1 Programme",
        description:
          "Bespoke six-to-ten session programme over two to four months. Built around your live executive moments — board, investor, all-hands, public-facing. The default for incoming or recently promoted senior executives.",
      },
      {
        name: "Named-Event Intensive",
        description:
          "Compressed preparation for a single high-stakes event: AGM, capital markets day, IPO roadshow, regulator hearing, conference keynote. Two to four sessions inside the run-up window, with full rehearsal in the actual room where possible.",
      },
      {
        name: "C-Suite Engagement",
        description:
          "Three-day immersive engagement for sitting C-suite executives. Strategic communication, executive presence, scenario rehearsal, media and crisis readiness. Delivered off-site or at our studio. Quoted bespoke from £30,000.",
      },
    ],
    caseSnapshot:
      "A newly appointed CFO of a FTSE 250 group, inheriting a difficult set of results and an analyst community already short on patience, came in three weeks before the prelims. Four sessions: front-loading the message, calibrating the voice for analyst calls, rehearsing the eight hardest questions until each answer was forty seconds and tight. The call ran. The share price held. The Chair's note afterwards used the phrase 'visibly more in command'. The same numbers, a different performance.",
    faqs: [
      {
        question: "Is this confidential at a senior level?",
        answer:
          "Yes — and visibly so. All executive work is conducted under strict NDA. Sessions are held one-to-one with no observers, footage is held only for the duration of the engagement and destroyed at completion, and no client is ever named publicly without explicit written consent. For listed-company and regulated-industry clients we work to whatever incremental protocols your office requires.",
      },
      {
        question: "How is this different from corporate executive training?",
        answer:
          "Group executive programmes teach frameworks. This is one-to-one coaching on your actual board paper, your actual analyst script, your actual all-hands. The coach is in the room watching you deliver the live material and making the specific adjustments that move it from adequate to commanding. There is no curriculum stapled on top of your role.",
      },
      {
        question: "How does scheduling work at this level?",
        answer:
          "Sessions are scheduled around your diary, not the other way around. Evening, early-morning and weekend sessions are available. For named-event intensives we hold the dates and travel to your office or off-site location where it is operationally cleaner than the studio. Video sessions are used for international clients and during travel.",
      },
      {
        question: "Do you work with the rest of the executive team?",
        answer:
          "Frequently. We coach individual executives, executive committees and direct-report teams. C-suite engagements often combine 1:1 work for the principal with team workshops for the broader leadership group, so the shift in communication standard spreads beyond a single person.",
      },
      {
        question: "What is the investment?",
        answer:
          "Senior executive programmes typically range from £5,000 to £12,000 depending on scope and number of sessions. Three-day C-suite engagements are quoted from £30,000. A full written proposal is issued within forty-eight hours of an initial conversation. We do not list standard rates publicly at this level.",
      },
    ],
    problems: [
      "You hold the title but the authority isn't landing the way it should",
      "Board, investor or all-hands presentations feel flat or over-rehearsed",
      "You're being prepared for a step-up role and the delivery needs to lead it",
      "You've had feedback on presence, gravitas or executive voice",
      "You sound stiff or hedging in high-stakes Q&A",
      "Analyst calls and media appearances don't sound like the version of you you intend",
      "You're managing succession optics and need the delivery to match the candidacy",
      "You want a coach who works at the level you operate at",
    ],
    workOn: [
      "Executive presence, gravitas and authority",
      "Voice, breath and physical command of the room",
      "Board, investor and AGM communication",
      "Analyst calls, capital markets days and regulator interviews",
      "Town hall and all-hands delivery",
      "Structure and message discipline under scrutiny",
      "Crisis and high-pressure scenario rehearsal",
      "Media training for executive interviews and broadcast",
    ],
  },

  // -------------------------------------------------------------------------
  "corporate-workshops-lost": {
    introExtended:
      "Most corporate communication training is forgotten by Friday. Slides are filed, frameworks are politely ignored, and the team reverts to whatever habits it had on Monday morning. The cost is not the training spend. The cost is the year that follows, in which the same pitch fails, the same town hall flattens, and the same leader struggles to land the same message a different way.\n\nWhat fails is the format. A generic curriculum taught to a room of strangers, decoupled from the team's live business reality, will always lose to the workload that resumes the moment people stand up. Retention follows relevance. People keep what they practised on material that mattered.\n\nWorkshop-based speech coaching is built the other way round. We start with the live business scenarios — the actual pitch, the actual town hall, the actual sales conversation, the actual investor narrative — and build the skills around them. The frameworks are taught in service of the work, not the other way round. The team walks out with material they will use on Monday, delivered by people who have rehearsed it under coaching pressure.",
    whyMatters:
      "Communication is the highest-leverage skill in any client-facing or leadership-facing team. When it lifts, the entire commercial output of the team lifts with it — pitch conversion, retention, internal alignment, the calibre of conversations with external partners. When it stalls, every other function pays the tax in re-explained briefs, missed deals and disengaged staff.\n\nThe organisations that take this seriously do so because they have seen the alternative. The pitch that should have closed and did not. The all-hands that quietly demoralised the room. The leader who was technically excellent and operationally invisible. Workshop coaching is the deliberate intervention that closes that gap at team scale.",
    approach:
      "Workshops are bespoke. Every engagement begins with a discovery conversation that surfaces the real moments the team needs to win — pitches, town halls, sales conversations, internal briefings, conference presentations. The curriculum is then built backwards from those moments. What to say, how to say it, how to own it — taught against the team's live material, not against generic case studies.\n\nDelivery is performance-led. Frameworks are introduced, applied immediately to the team's own work, then rehearsed under structured feedback. We use video. We use coached repetition. We bring the standard of the room up to the standard the business needs. Sessions are delivered half-day, full-day, or as multi-day programmes at our London studio, on-site at your offices, or via video for distributed teams.",
    outcomes: [
      "Pitch conversion rates that visibly lift inside one quarter",
      "Internal communication consistency across the leadership group",
      "Town halls that engage rather than tolerate the audience",
      "Sales teams that can hold structured conversations under client pressure",
      "Conference and event-ready performance across the team",
      "A shared communication standard that survives staff turnover",
    ],
    formats: [
      {
        name: "Bespoke Half-Day or Full-Day Workshop",
        description:
          "A single workshop designed around a named outcome — pitch readiness, town hall preparation, sales lift, leadership voice. Delivered on-site or at our London studio. Day rate £7,000.",
      },
      {
        name: "Multi-Day Programme",
        description:
          "Two to five days of coaching spread over a quarter, combining group workshops with 1:1 sessions for nominated leaders. The format of choice when the change has to embed beyond a single day.",
      },
      {
        name: "Event-Ready Intensive",
        description:
          "Compressed team preparation for a specific conference, roadshow, town hall or external event. Full rehearsal of the team's named contributions to performance level, in the actual room where possible.",
      },
    ],
    caseSnapshot:
      "A consultancy partner team of fourteen, repeatedly losing six-figure pitches to a smaller competitor with weaker credentials. A two-day workshop rebuilt the pitch architecture, drilled the partners on opener and close discipline, and rehearsed the three hardest client objections to script. Conversion rate over the following two quarters moved from twenty-eight per cent to fifty-one per cent on the same pipeline. The technical content barely changed. The performance did.",
    faqs: [
      {
        question: "Will this be tailored to our business or a generic curriculum?",
        answer:
          "Tailored. Every engagement begins with a discovery conversation to identify the live business scenarios the team needs to perform in. The workshop is then built around those scenarios — your real pitches, your real town halls, your real sales conversations. Generic decks are not used. Frameworks are taught in service of your material.",
      },
      {
        question: "Can you deliver on-site or only at your London studio?",
        answer:
          "Both. We deliver at the studio, at client offices across the UK and internationally, at off-site venues, and via video for distributed teams. Travel is included in the proposal where applicable. The choice usually comes down to whichever environment best replicates the room the team will eventually be performing in.",
      },
      {
        question: "What size of group does this work for?",
        answer:
          "Most effective at six to twelve participants per workshop, where every person gets meaningful coached reps inside the day. Larger groups are run as conference-style sessions with smaller breakout coaching. For executive teams we typically combine a group workshop with individual 1:1 sessions for nominated leaders.",
      },
      {
        question: "How is impact measured?",
        answer:
          "By the metric the engagement was scoped against. For pitch teams it is conversion rate; for leadership teams it is engagement survey movement; for conference teams it is the named event outcome. We agree the measure at proposal stage and track it back at the end of the engagement. Anything else is theatre.",
      },
      {
        question: "What does it cost?",
        answer:
          "Day rate £7,000 for a bespoke workshop. Multi-day programmes and event intensives are quoted in proposal. Engagements for small senior leadership groups typically run £5,000–£6,500 per off-site day. A written proposal is issued within forty-eight hours of an initial scoping conversation.",
      },
    ],
    problems: [
      "Your team's external pitches aren't converting at the rate they should",
      "Internal communication is flat or inconsistent across leaders",
      "You've run training before and nothing measurably changed",
      "A conference, town hall or roadshow needs the team performance-ready",
      "Sales or client-facing teams need to communicate at a higher level",
      "Newly promoted managers are struggling to hold a room",
      "You want training built around your business, not a generic template",
      "You need a measurable lift, not a feel-good day",
    ],
    workOn: [
      "Bespoke workshops built around your real-world business scenarios",
      "Pitch and sales presentation discipline",
      "Leadership communication and town hall delivery",
      "Voice, presence and confidence across the team",
      "Storytelling, structure and message discipline",
      "Conference and roadshow preparation",
      "Coaching nominated team leads to a higher standard 1:1",
      "Embedding a consistent communication standard across the business",
    ],
  },

  // -------------------------------------------------------------------------
  "childrens-lost": {
    introExtended:
      "Most parents come to this work after the waiting list, the school SLT review and the kindly worded note that says progress is happening but more slowly than hoped. Time matters. Articulation, fluency, confidence and clarity at primary and early secondary age compound in both directions — when they go well the child runs ahead; when they stall the gap widens quietly inside every classroom and every playground.\n\nWhat fails when children's speech coaching fails is rarely effort. It is often pace and specificity. A generic plan delivered fortnightly will not move a child who needs targeted articulation drills, structured fluency strategies, or the specific confidence work that comes from being properly heard. Children read whether the adult opposite them is genuinely listening; they perform accordingly.\n\nThis coaching is built for parents who are done waiting. Bespoke 1:1 work with children from age seven upwards, in articulation, fluency, public speaking confidence, school presentations, audition preparation and accent or clarity work for bilingual households. Sessions are designed to be enjoyable and structured at the same time — children retain what they have rehearsed under skilled, kind, exact attention.",
    whyMatters:
      "Communication confidence at this age sets the floor for everything that follows: classroom participation, friendships, secondary school interviews, debate, drama, scholarship auditions, the first time the child has to introduce themselves to a room of new peers. A child who learns now that their voice is welcome and capable carries that finding into adolescence; a child who learns the opposite carries the opposite finding into adolescence.\n\nFor families with bilingual or multilingual households, for children with stammer or articulation challenges, and for academically able children who are simply quieter than the school environment rewards, the gap between potential and presence is the gap that coaching closes.",
    approach:
      "The work is gentle, exact and built around the individual child. Initial assessment identifies the specific articulation, fluency or confidence target — and the parent is given a clear written summary. Sessions then build the skill in question through structured games, scripts, recordings and graduated public-speaking exposure appropriate to the child's age. Progress is tracked session by session and shared with parents at the end of each block.\n\nWhere relevant, sessions integrate with school assessments, scholarship audition timelines, or specific upcoming public-speaking moments (assemblies, end-of-year performances, interviews). The doctrine is the same as the adult work in a form a child can use: what to say, how to say it, how to own it — taught with patience, structure and the expectation that the child will surprise themselves.",
    outcomes: [
      "Clear, age-appropriate articulation of target sounds",
      "Measurable reduction in disfluency frequency where stammer is present",
      "Confidence to read aloud, present, audition and answer in class",
      "Scholarship interview and audition readiness",
      "A child who actually enjoys being listened to",
      "Parents with a clear written picture of what was worked on and why",
    ],
    formats: [
      {
        name: "1:1 Children's Coaching Programme",
        description:
          "Block of six sessions, typically weekly, designed around the child's specific articulation, fluency or confidence goals. Held at our London studio or via video for families outside London.",
      },
      {
        name: "Audition & Interview Preparation",
        description:
          "Compressed preparation for scholarship interviews, drama-school auditions, school plays, debating and public-speaking competitions. Tightly timed to the date and the brief.",
      },
      {
        name: "Family Online Programme",
        description:
          "Video-based programme for families abroad or outside London. Same structured approach, with parent updates after every session and a clear written progress summary at the end of each block.",
      },
    ],
    caseSnapshot:
      "A nine-year-old in a bilingual household, articulate at home, near-silent at school and dreading the upcoming Year 5 class assembly. Six sessions of breath work, scripted reading, structured eye-contact exposure and the assembly itself rehearsed three times to performance level. The assembly was delivered, the form teacher wrote separately to the parents to say something had shifted, and the child volunteered for the next reading without being asked. The same child, audibly more at home in their own voice.",
    faqs: [
      {
        question: "From what age do you work with children?",
        answer:
          "From age seven upwards for individual coaching. Below that age we direct parents to specialist paediatric speech and language services. From seven we work across articulation, fluency, public speaking confidence, school presentations, scholarship interviews and bilingual clarity work. Younger sessions are shorter (thirty to forty minutes); older children typically work to a fifty-minute session.",
      },
      {
        question: "How is this different from NHS speech and language therapy?",
        answer:
          "We are not a clinical SLT service and do not duplicate the role of NHS therapists. For diagnosed clinical conditions (cleft, severe articulation disorder, developmental language disorder) NHS or specialist clinical SLT remains the right route. We work alongside that — particularly on confidence, fluency strategies, public-speaking exposure, and the integration of communication skills into school life.",
      },
      {
        question: "Will I be involved as a parent?",
        answer:
          "Yes. Every session ends with a brief update for the parent. End of each six-session block includes a written summary of what was worked on, what changed, and what to practise at home. For online sessions parents typically join the last five minutes. The work is on the child, the partnership is with the family.",
      },
      {
        question: "Can you help with scholarship and senior school interview preparation?",
        answer:
          "Yes — and this is one of the most common reasons families come to us in Years 5 to 8. Coaching covers how to introduce yourself, how to answer the open question, how to talk about your interests in a way that sounds genuine, and the eye contact and voice that make the interview land. Tightly tailored to the school and the round.",
      },
      {
        question: "What is the investment?",
        answer:
          "Children's six-session blocks start at £900 (£150 per session). Scholarship audition intensives and longer programmes are quoted on request. Video-based programmes are priced identically to in-studio sessions. Invoices are issued per block; sibling rates are available where two children from the same family are coached concurrently.",
      },
    ],
    problems: [
      "Your child is on a school or NHS waiting list and you don't want to wait",
      "Specific sounds aren't developing the way you expected",
      "Stammering or disfluency is becoming socially costly",
      "A scholarship interview or audition is coming up and the stakes are real",
      "Bilingual household and your child is markedly quieter at school than at home",
      "Your academically able child is being read as shy and is paying for it",
      "Your child dreads class assemblies, presentations or being called on",
      "You want a coach who takes children seriously without patronising them",
    ],
    workOn: [
      "Articulation of target sounds, age appropriate",
      "Fluency strategies for children who stammer",
      "Confidence work for reading aloud and presenting",
      "School assembly, presentation and debate preparation",
      "Scholarship, audition and senior school interview readiness",
      "Bilingual clarity and accent comfort",
      "Eye contact, posture and breath at a child's pace",
      "Parent guidance on what to practise between sessions",
    ],
  },

  // -------------------------------------------------------------------------
  "broadcast-lost": {
    introExtended:
      "Broadcast and podcast media reward and punish the same thing: presence. The microphone hears every hesitation, every filler, every dropped end-of-sentence. The camera reads every flicker of eye contact and every breath in the wrong place. Most professionals who appear well in the room do not appear well on broadcast — not because they lack ability, but because nobody trained them for the medium.\n\nWhat fails on broadcast is almost always the same: pace too fast, voice too thin, sentences that meander past the soundbite, eye contact that drifts when the camera holds. These are not personality issues. They are mechanical issues, and the mechanics respond to coached reps.\n\nThis is media training built for the actual media environment professionals now operate in: BBC, Sky and ITV studio interviews; podcast long-form; LinkedIn video and self-shot content; remote down-the-line interviews from a home office; corporate broadcast for results announcements and town halls. The coaching produces footage you would willingly publish, not footage you tolerate.",
    whyMatters:
      "Broadcast appearances are the single most leveraged communication a senior professional does. A ten-minute Today programme interview reaches more people than a year of internal town halls. A bad clip — handled badly under hostile questioning — circulates indefinitely. A well-delivered piece becomes the reference point everyone in your industry quotes back at you.\n\nFor founders, executives, spokespeople, expert commentators and senior public figures, the difference between good and competent on broadcast is the difference between being booked back and not. Producers note who handles the medium. So do audiences.",
    approach:
      "The work is medium-specific. Studio set-up, camera framing, microphone awareness, the physics of pace and breath under broadcast conditions, the soundbite discipline that gets you quoted accurately rather than edited cruelly. For long-form podcast we coach narrative structure, the management of the silent space, and the discipline of not over-answering. For self-shot content we coach the framing, the opening hook and the close.\n\nSessions are 1:1, often run in a broadcast-condition studio environment with full camera and microphone set-up. We use playback, structured feedback and repeated takes. For named upcoming interviews we work through the producer brief, anticipate the hostile and the hooky questions, and rehearse the bridging and the soundbite that will survive the edit. Confidence under hot lights is built the same way every other performance confidence is built: reps under conditions that match the room.",
    outcomes: [
      "Studio interviews that land your message and survive the edit",
      "Soundbite discipline that produces quotable, broadcast-ready answers",
      "Composure under hostile or interruptive questioning",
      "Down-the-line interviews delivered with full presence and pace",
      "Podcast long-form that holds the audience past the first ten minutes",
      "Self-shot video that you will actually publish",
    ],
    formats: [
      {
        name: "Broadcast Media Training Day",
        description:
          "Single intensive day of studio-condition coaching across hostile interview, friendly interview, down-the-line and panel. Full playback and structured feedback. The default for spokespeople and senior media-facing executives.",
      },
      {
        name: "Named-Interview Preparation",
        description:
          "Compressed preparation for a specific upcoming interview — Today, Newsnight, Sky News, podcast feature. Two to three sessions inside the run-up window, with full briefing review and rehearsal to performance level.",
      },
      {
        name: "Podcast & Content Programme",
        description:
          "Block of sessions for hosts and guests building long-form podcast presence or regular video content. Voice, pacing, structure, on-camera presence and editing-aware delivery.",
      },
    ],
    caseSnapshot:
      "The CEO of a mid-cap consumer business, called on Today the morning after a difficult set of half-year results, had ninety minutes' notice and a hostile presenter. One pre-session by video the night before: three bridging lines, two soundbites, the discipline of finishing every answer with the message rather than the defence. The clip that travelled was the executive's line — not the question. The Chair's note afterwards used the word 'professional'. The work was three hours total.",
    faqs: [
      {
        question: "Do you train for hostile interviews specifically?",
        answer:
          "Yes — this is a core part of the work. We rehearse the actual hostile questions you are likely to face, drill the bridging and reframing techniques that protect the message, and run the full interview under condition with playback. By the end of a media training day you will have handled at least three full hostile interviews and watched yourself back on each.",
      },
      {
        question: "Can you prepare me for a specific upcoming interview at short notice?",
        answer:
          "Yes. Short-notice named-interview preparation is one of the most common engagements we run, often inside twenty-four to seventy-two hours of the broadcast. We work from the producer brief, anticipate the questions, build the soundbites, and rehearse to performance level in the time available. Video sessions are used where time does not permit in-studio work.",
      },
      {
        question: "Will the coaching cover both television and podcast?",
        answer:
          "Yes — and the two are coached differently because the mediums work differently. Television rewards soundbite discipline and visible composure; long-form podcast rewards narrative pace, the use of silence and the willingness not to over-answer. Most senior clients now need to be good at both, and the work treats them as distinct disciplines.",
      },
      {
        question: "Do you record the sessions?",
        answer:
          "Yes — playback is central to the method. Every session uses full camera and microphone recording, reviewed on the spot and used to drive the next take. Recordings are held only for the duration of the engagement and destroyed at completion unless the client requests retention for their own review.",
      },
      {
        question: "What does this cost?",
        answer:
          "Full broadcast media training days are £7,000. Named-interview preparation is typically quoted in the £1,800–£3,500 range depending on number of sessions and timing. Podcast and content programmes follow standard six-session pricing from £1,800. A written proposal is issued within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "You're going on Today, Newsnight, Sky or a major podcast and you want to land it",
      "Previous footage of you does not match the version of you you intend",
      "Hostile or interruptive interviewers throw you off your line",
      "Down-the-line and remote interviews feel flat and underpowered",
      "You want a regular podcast or LinkedIn video presence and it isn't landing",
      "You over-answer, qualify too much and lose the soundbite",
      "You're representing the organisation in a crisis and need to be performance-ready",
      "You want training in studio conditions, not a meeting room",
    ],
    workOn: [
      "Studio-condition camera and microphone presence",
      "Soundbite discipline and bridging under questioning",
      "Hostile interview rehearsal and reframing techniques",
      "Down-the-line and remote broadcast performance",
      "Long-form podcast structure and pacing",
      "Self-shot video framing, hook and close",
      "Voice, breath and pace specific to broadcast conditions",
      "Crisis and reactive media readiness",
    ],
  },

  // -------------------------------------------------------------------------
  "cpd-lost": {
    introExtended:
      "CPD that delivers measurable communication change is rare. Most CPD courses in this space are theory-led, classroom-paced and end with a certificate that confirms attendance rather than capability. The professional walks out with notes, no recorded footage of themselves performing, and no behaviour that has actually moved.\n\nThe Speech Coach CPD programmes are accredited by the CPD Certification Service and built to a different standard. They are performance-led, video-reviewed and rehearsal-based. Participants leave with documented before-and-after evidence of their own delivery, a written feedback profile against the programme competencies, and a CPD certificate that reflects what they actually demonstrated, not what they were exposed to.\n\nThe programmes are designed for professionals whose regulatory or organisational frameworks require evidenced CPD in communication, presentation, leadership voice or media — and for organisations that want their internal communication standard to be visibly accredited rather than informally assumed.",
    whyMatters:
      "For regulated professionals — barristers, solicitors, medical consultants, financial advisers, accountants, surveyors, senior public-sector leaders — CPD is not optional and is increasingly scrutinised on quality rather than hours. A communication CPD that produces a certificate and no measurable behavioural change is a compliance asset and a development liability.\n\nFor organisations, accredited CPD communication programmes serve a second purpose: they signal externally and internally that communication has been taken seriously as a competency, not informally as a preference. This matters in firms whose client work depends on consistent senior-level delivery, and in public bodies where reputation, scrutiny and accountability are constant.",
    approach:
      "Every programme is built against documented learning outcomes mapped to CPD Certification Service standards. Participants are assessed at the start of the programme, coached against the named competencies through structured workshops and 1:1 sessions, and assessed again at the end. The end-of-programme report documents the change. The certificate reflects the assessed outcome.\n\nThe doctrine is the same as the rest of the practice: what to say, how to say it, how to own it. The CPD wrapper adds documented assessment, structured learning outcomes and accredited certification — so the work is both demonstrably delivered and externally evidenced. Sessions can be delivered in person at our London studio, on-site at your offices, or via accredited online formats.",
    outcomes: [
      "CPD Certification Service accredited certificate on completion",
      "Documented before-and-after assessment of communication competencies",
      "Written feedback profile against named programme outcomes",
      "Recorded video evidence of performance change",
      "Regulatory CPD hours mapped to your professional body's requirements",
      "An organisationally credible, externally accredited standard",
    ],
    formats: [
      {
        name: "Accredited 1:1 Programme",
        description:
          "Six-session 1:1 programme mapped to CPD Certification Service outcomes. Initial and final assessment, video evidence, written feedback report, accredited certificate. Suitable for individual regulated professionals.",
      },
      {
        name: "Accredited Group Workshop",
        description:
          "One- or two-day workshop for cohorts of six to twelve professionals, fully mapped to CPD outcomes, with assessed performance work and accredited certificates issued on completion. Day rate £7,000.",
      },
      {
        name: "In-House Accredited Programme",
        description:
          "Multi-cohort accredited programme delivered across an organisation, with consistent assessment standards, organisational reporting and named-leader 1:1 elements. Quoted in proposal.",
      },
    ],
    caseSnapshot:
      "A regional law firm needed to demonstrate to its regulator that the partner group had received evidenced communication CPD following a complaint about courtroom conduct. A two-day accredited workshop plus 1:1 sessions for the three named partners delivered the certificates, the written competence reports and — separately and more importantly — visibly higher-grade advocacy in the next set of internal moots. The regulator closed the file; the firm kept the standard.",
    faqs: [
      {
        question: "What does CPD accreditation actually mean here?",
        answer:
          "The programmes are accredited by the CPD Certification Service, the leading independent accreditation body for CPD in the UK. Accreditation means the programme has been independently assessed against documented learning outcomes, structured delivery, and verifiable assessment of participants. Certificates are recognised across regulated UK professions.",
      },
      {
        question: "Will the hours count towards my professional body's CPD requirement?",
        answer:
          "In almost all cases, yes. CPD Certification Service accreditation is recognised by the major UK regulators and professional bodies — Bar Standards Board, SRA, GMC, ICAEW, RICS, CIPD and others. We can map the programme hours and outcomes to your specific professional body's requirement on request. The certificate is structured to support recording into your annual CPD return.",
      },
      {
        question: "Can the programme be delivered to a single individual?",
        answer:
          "Yes. The 1:1 accredited programme is designed for individual regulated professionals who need evidenced CPD in communication, presentation or media — and who need it documented to a standard their professional body or employer can audit. The format follows the standard six-session structure with formal initial and final assessment added.",
      },
      {
        question: "Is the accreditation visible on the certificate?",
        answer:
          "Yes. Certificates carry the CPD Certification Service accreditation mark, the documented learning outcomes the participant was assessed against, and the assessed hours. The end-of-programme report — issued separately — contains the written competence feedback and the before-and-after evidence.",
      },
      {
        question: "What does this cost?",
        answer:
          "Accredited 1:1 programmes are priced from £2,150 for six sessions. Accredited group workshops are £7,000 per day. In-house multi-cohort programmes are quoted bespoke. The accreditation, assessment and certification are included in all pricing; there are no additional administrative fees.",
      },
    ],
    problems: [
      "Your regulator requires evidenced CPD in communication and you need it documented",
      "You've done generic CPD before and it produced a certificate but no change",
      "Your firm needs an accredited internal communication standard, not an informal one",
      "You want CPD that improves performance and survives an audit",
      "You need before-and-after evidence of communication competence",
      "You're a regulated professional whose work turns on delivery, not just knowledge",
      "Your organisation has been asked by a regulator to evidence communication training",
      "You want to record CPD hours against your professional body's requirement",
    ],
    workOn: [
      "Communication competencies mapped to CPD Certification Service outcomes",
      "Structured initial and final assessment with video evidence",
      "Voice, presence and delivery at regulated-profession standard",
      "Structure and message discipline for client-facing communication",
      "Advocacy, presentation or media skills as specified by your role",
      "Written feedback profile against the named competencies",
      "Documented evidence pack suitable for regulator or audit submission",
      "Certified hours mapped to your professional body's CPD framework",
    ],
  },

  // =========================================================================
  // AUDIENCE
  // =========================================================================
  "leaders-lost": {
    introExtended:
      "Leadership communication is the layer beneath every other leadership skill. Strategy that cannot be communicated is strategy that cannot be executed. Vision that does not survive contact with a townhall stops being vision and becomes a slide. Most leaders are promoted on their ability to think and judged on their ability to land what they think.\n\nWhat fails when leaders fail to communicate is rarely the content. It is the gap between the inner clarity and the outer delivery — the pace that betrays the certainty, the structure that loses the thread, the voice that flattens at the moment it should hold. Teams read the speaker, not the slide. So do boards, regulators, the press and the people who decide whether to follow you into the next quarter.\n\nThis coaching is built for senior leaders — divisional MDs, executive committee members, partners, public-sector directors — who need their communication to operate at the seniority of the role rather than the seniority of the last time they were trained.",
    whyMatters:
      "At leadership level, communication is the multiplier on every other input. A capable leader who communicates poorly underperforms by a meaningful margin against a similarly capable peer who communicates well. The difference is not measurable in a single meeting; it is measurable in retention, engagement, execution speed and how readily the next opportunity is offered.\n\nThe stakes also widen. Leaders speak in moments where the cost of misfiring is asymmetric: a town hall after redundancies, a media interview during a crisis, a board paper that needs to land judgement rather than data. These are not moments for generic communication skills. They are moments for trained ones.",
    approach:
      "The work is anchored in three disciplines. What to say — message architecture for leadership audiences: front-loaded, judgement-led, free of hedging. How to say it — voice, breath, pace and physical presence calibrated to the size and seniority of the room. How to own it — full rehearsal of the leader's named moments, with structured feedback, video review and reps under pressure.\n\nSessions are 1:1, fully confidential, in person at our London studio or via secure video. We use your live material — your next town hall, your board paper presentation, your external speech, the difficult one-to-one you are about to have. The coach is in the room with you, watching you do the actual work, and making the precise adjustments that move it from competent to authoritative. Confidence is not coached into existence. It is earned through coached reps on material that matters.",
    outcomes: [
      "Town halls that engage the room rather than survive it",
      "Board and executive committee presentations that land judgement, not data",
      "Composure and authority under regulator, press and analyst scrutiny",
      "Difficult one-to-ones handled with directness and care",
      "A leadership voice consistent in person, on camera and on stage",
      "Engagement and retention metrics that move because the delivery moved",
    ],
    formats: [
      {
        name: "Leadership 1:1 Programme",
        description:
          "Bespoke six-to-ten session programme over two to four months, built around the leader's live communication moments. The default for divisional and executive committee leaders.",
      },
      {
        name: "Named-Event Intensive",
        description:
          "Compressed preparation for a town hall, external speech, conference keynote, board paper, or specific high-stakes leadership moment. Two to four sessions inside the run-up window.",
      },
      {
        name: "Senior Leadership Off-Site",
        description:
          "Small-group programme for executive leadership teams (six to ten participants). One to three days off-site or at the studio, combining group workshop with 1:1 work for the principal. From £5,000 per day.",
      },
    ],
    caseSnapshot:
      "A newly appointed divisional MD inheriting a workforce of two thousand people after a difficult restructure faced a town hall in which the room was, fairly, sceptical. Five sessions in three weeks: message architecture, voice and pace for the venue, the three hostile questions rehearsed to answer-fit, the opening ninety seconds drilled to performance level. The town hall did not solve the restructure. It reset what the workforce believed about the leader. Engagement scores moved twelve points inside two quarters.",
    faqs: [
      {
        question: "How is this different from leadership development programmes?",
        answer:
          "Leadership development programmes teach what to think. This is coaching on how to land what you think. The two are complementary and not interchangeable. Most senior leaders who come to this work have already done the leadership programmes; what they need now is the delivery layer those programmes did not build.",
      },
      {
        question: "Will sessions interfere with my diary?",
        answer:
          "Sessions are scheduled around your diary. Early-morning, evening and weekend sessions are available. For named-event intensives we hold the dates and travel to your office or off-site location where it is operationally cleaner than the studio. Video sessions are used during travel and for international assignments.",
      },
      {
        question: "Is the work confidential?",
        answer:
          "Yes. All leadership 1:1 work is conducted under strict NDA. Sessions are held one-to-one with no observers, footage is held only for the duration of the engagement and destroyed at completion, and no client is ever named publicly without explicit written consent. Discretion is part of the service.",
      },
      {
        question: "Do you work with my leadership team as well as with me?",
        answer:
          "Often. Many engagements combine 1:1 work for the principal with a workshop or short programme for the broader leadership group. This is the most effective way to ensure the standard of communication you want to set does not stop at your office door.",
      },
      {
        question: "What is the investment?",
        answer:
          "Leadership 1:1 programmes typically range £3,500–£10,000 depending on scope and number of sessions. Named-event intensives £1,800–£3,500. Senior leadership off-sites from £5,000 per day. A written proposal is issued within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "You hold the title but the authority isn't landing the way it should",
      "Town halls feel like something to survive rather than lead",
      "Board, executive committee or AGM moments feel under-powered",
      "You've had feedback on presence, gravitas or executive voice",
      "Strategy you believe in is not landing with the people who have to execute it",
      "Difficult one-to-ones feel either too soft or too blunt",
      "You're being prepared for a step-up and the delivery needs to lead it",
      "You want a coach who works at the level you operate at",
    ],
    workOn: [
      "Leadership presence, voice and gravitas",
      "Town hall and all-hands delivery",
      "Board and executive committee communication",
      "Message architecture for strategy, change and difficult news",
      "Difficult one-to-one conversation craft",
      "External speech and conference keynote performance",
      "Composure under regulator, press and analyst scrutiny",
      "Embedding a leadership communication standard across the team",
    ],
  },

  // -------------------------------------------------------------------------
  "founders-lost": {
    introExtended:
      "Founder communication is high-stakes and high-frequency. Investor pitches, board updates, all-hands, hiring conversations, customer keynotes, press, podcast appearances, the cold DM that becomes a strategic partnership. Most founders are operating five communication modes a week and were trained for none of them.\n\nWhat fails when founder communication fails is almost always the same: the technical story is told instead of the narrative one; the ask is buried; the opening sixty seconds does not earn the next ten minutes; the answers to investor questions are too long, too hedged or too defensive. The cost is direct — rounds that stall, talent that does not join, partnerships that quietly go cold.\n\nThis coaching is built for founders at the stage their communication has become a commercial input. Pre-seed to growth stage. First institutional round through to IPO roadshow. The work is investor-pitch coaching, narrative architecture, all-hands and customer keynote performance, media training and the specific delivery work that turns a technically good founder into a memorable one.",
    whyMatters:
      "Investors fund founders, not decks. They are looking for conviction that can survive contact with a difficult quarter, narrative that can be repeated by their LPs, and a person whose delivery makes the next round feel inevitable. Most rounds that close on weaker fundamentals over stronger ones close because the weaker founder was the better communicator. The reverse is also true and more painful.\n\nThe same dynamics apply internally. Engineers join companies whose founder makes the mission feel true. Senior commercial hires accept offers from founders whose narrative they can repeat to their families. Customers buy from founders who sound certain. None of this is reducible to the deck. All of it is reducible to the speaker.",
    approach:
      "The doctrine is exact. What to say — narrative architecture: the company story, the why-now, the wedge, the unfair advantage, the ask. How to say it — voice, pace, conviction, the discipline of the forty-second answer rather than the four-minute one. How to own it — full rehearsal of pitch, Q&A and the hostile investor question, with structured feedback and reps under conditions that match the real room.\n\nSessions are 1:1, in person in London or via video. We use your live material — your live deck, your live data room, the actual investors on your target list, the conference keynote you have just been confirmed for. The coach is in the room watching you deliver and making the precise adjustments. By the end of the programme the pitch is not just better; it is a performance you can run on demand at a level that closes.",
    outcomes: [
      "An investor pitch that opens, asks and closes with conviction",
      "Q&A answers tight enough to survive a difficult partner meeting",
      "All-hands and customer keynote performance that hires and sells",
      "Press and podcast appearances that build narrative rather than dilute it",
      "A founder voice that scales as the company scales",
      "Round-readiness for first institutional through IPO roadshow",
    ],
    formats: [
      {
        name: "Founder 1:1 Programme",
        description:
          "Six sessions over six to ten weeks, built around live company material — pitch, all-hands, customer keynote, media. The default starting point for funded founders.",
      },
      {
        name: "Round-Ready Intensive",
        description:
          "Compressed preparation for an active fundraise. Pitch architecture, partner-meeting Q&A drill, hostile question rehearsal, conference and demo-day readiness. Run inside the fundraise window.",
      },
      {
        name: "Founder Media Day",
        description:
          "Single intensive day of broadcast-condition media training — studio interview, podcast long-form, hostile questioning, conference panel. The default for founders entering a press cycle.",
      },
    ],
    caseSnapshot:
      "The founder of a Series A B2B SaaS company, technically formidable and commercially under-heard, came in three weeks before a fundraise. Five sessions: rebuilt the opening ninety seconds, drilled the eight hardest partner questions to forty-second answers, rehearsed the close. The round closed at the target valuation on the original term sheet. The lead partner's email afterwards said the pitch was 'the most coherent founder narrative we have heard this year'. The product had not changed. The performance had.",
    faqs: [
      {
        question: "I'm pre-seed — is this too early?",
        answer:
          "No. Pre-seed and seed founders benefit disproportionately because the narrative is still being formed and the delivery patterns set now will compound. Many founders we work with at pre-seed return at Series A and again at Series B because the underlying voice and structure carry forward and the work each round is sharpening rather than rebuilding.",
      },
      {
        question: "Will you help with the deck itself or only with delivery?",
        answer:
          "Both. Pitch architecture — narrative, structure, the order of slides, the wedge and the ask — is part of the work. We do not design slides; we shape what the slides need to say so that the founder is delivering the right material in the right order. The deck and the delivery are coached as a single piece of performance.",
      },
      {
        question: "Can you prepare me for a specific demo day or partner pitch at short notice?",
        answer:
          "Yes. Compressed intensives inside seven to fourteen days are common, particularly around demo days, Y Combinator Demo Day, accelerator showcases, conference keynote spots and named partner meetings. Where time is tight we structure two to three high-intensity sessions plus video review between them.",
      },
      {
        question: "Do you work with co-founder teams?",
        answer:
          "Yes — and it is often the highest-leverage version of this work. We coach the founder team together on pitch and all-hands choreography (who speaks when, how to hand off, how to look like a team rather than two individuals sharing a stage), with 1:1 sessions for the principal speaker on top.",
      },
      {
        question: "What is the investment?",
        answer:
          "Founder 1:1 programmes from £1,800 for six sessions. Round-ready intensives £1,800–£3,500 depending on number of sessions and timeline. Founder media days £7,000. Co-founder team engagements quoted in proposal. We work with founders at every stage and pricing reflects scope, not vanity.",
      },
    ],
    problems: [
      "Investor pitches are not converting and you don't know why",
      "Partner meeting Q&A throws you off and you over-answer",
      "All-hands and customer keynotes feel flat for a company at your stage",
      "Press and podcast appearances are diluting the narrative rather than building it",
      "Your technical credibility is high and your commercial presence is lagging",
      "Co-founder delivery is inconsistent and the room reads it",
      "You're heading into a fundraise and the pitch is not yet performance-ready",
      "You want a coach who has worked with founders at every stage",
    ],
    workOn: [
      "Investor pitch architecture, opener and close",
      "Hostile partner Q&A and the forty-second answer",
      "All-hands delivery as the team scales",
      "Customer keynote and conference presentation",
      "Media, podcast and press performance",
      "Co-founder team choreography on stage and in the room",
      "Narrative consistency across investor, customer and team audiences",
      "Round-readiness from pre-seed through IPO roadshow",
    ],
  },

  // -------------------------------------------------------------------------
  "professionals-lost": {
    introExtended:
      "Senior professionals — partners, directors, senior associates, consultants — are paid for judgement and judged on delivery. The technical work is assumed; the communication around it is what determines whether the client renews, the panel appoints, the promotion follows, the practice grows.\n\nWhat fails when professional communication fails is rarely the analysis. It is the gap between the quality of the thinking and the quality of the delivery. The pitch that lost on chemistry rather than capability. The client update that felt thorough and read as defensive. The internal panel where the more articulate candidate was promoted. The conference panel where a peer with weaker substance got the bookings.\n\nThis coaching is built for senior professionals in law, finance, consulting, accountancy, surveying and the wider professional services world. The work is pitch, panel, client communication, internal stakeholder management, conference and external profile — coached at the standard the profession demands and the seniority of the role rewards.",
    whyMatters:
      "Professional services is a referral and renewal business. Every external communication moment is both a delivery and an audition for the next one. Clients renew when they feel heard and re-pitch when they do not. Panels appoint people whose communication matches the role they are appointing into. None of this is recorded as a communication outcome; all of it shows up in revenue, retention and progression.\n\nFor senior professionals the cost of underperformance is also asymmetric. A poor pitch is a lost client. A poor panel performance is a missed promotion. A poor conference appearance is a peer's profile climbing while yours stalls. The work is high-leverage because the moments are.",
    approach:
      "The doctrine is the same and the application is profession-specific. What to say — the structure of pitch, client update, panel answer or conference contribution, built so that the most important thing is the first thing. How to say it — voice, pace, breath and physical presence calibrated to senior professional rooms. How to own it — rehearsal of named upcoming moments to performance level.\n\nSessions are 1:1, in person in London or via video. We use your live material: the live pitch you are preparing, the live client situation you are managing, the live internal panel you are facing. The coach is in the room with you, watching you do the actual work, and making the precise adjustments that move it from competent to memorable.",
    outcomes: [
      "Pitch conversion rates that visibly lift on the same pipeline",
      "Client meetings that build trust rather than test it",
      "Internal panel and promotion performance at the level of the role",
      "Conference and external profile that matches your technical reputation",
      "A delivery that reads as the seniority you actually hold",
      "Composure under client, regulator or partner-group scrutiny",
    ],
    formats: [
      {
        name: "Senior Professional 1:1 Programme",
        description:
          "Six sessions over six to twelve weeks, built around live pitch, client and panel material. The default for partners, directors and senior associates.",
      },
      {
        name: "Pitch & Panel Intensive",
        description:
          "Compressed preparation for a specific upcoming pitch, panel interview or client beauty parade. Two to three sessions inside the run-up window, with full rehearsal in conditions matching the real room.",
      },
      {
        name: "Practice-Group Workshop",
        description:
          "Half-day or full-day workshop for partner or director groups, built around the practice's live pitch and client communication scenarios. Delivered on-site or at the London studio. From £7,000 per day.",
      },
    ],
    caseSnapshot:
      "A salaried partner at a Magic Circle firm, technically formidable and consistently passed over for the equity step, came in nine months before the next promotion round. Six sessions plus two named-panel intensives: voice and pace, the internal pitch architecture, the eight hostile questions rehearsed to answer-fit, the conference keynote that quietly raised the external profile. The promotion landed in the next round. The technical capability had not changed; the way the partnership read it had.",
    faqs: [
      {
        question: "Is this work confidential?",
        answer:
          "Yes. All senior professional work is conducted under strict NDA. Sessions are one-to-one with no observers, footage is held only for the engagement and destroyed at completion, and no client is named publicly without explicit consent. For regulated-profession clients we work to whatever incremental protocols your firm requires.",
      },
      {
        question: "Can you help with a specific upcoming pitch or panel?",
        answer:
          "Yes — and named-event intensives are among the most common engagements. We work from the brief, anticipate the hardest questions, rehearse the opener and close, and run the full event under condition. For client beauty parades we typically run the rehearsal in the actual room where possible.",
      },
      {
        question: "How does this compare with internal firm training?",
        answer:
          "Internal training is group-based, generic and infrequent. This is 1:1 coaching on your live work, at a pace and standard the firm cannot deliver internally. Many partners use this in addition to firm training, not instead of it — the firm builds the baseline, the 1:1 work builds the senior delivery.",
      },
      {
        question: "Will the firm pay for it?",
        answer:
          "Often, yes. Many firms allocate budget for senior professional development and pitch coaching, particularly around promotion rounds, partner candidacy and named major-client pitches. We can issue invoices to the firm or to the individual depending on how the engagement is structured.",
      },
      {
        question: "What does it cost?",
        answer:
          "Senior professional 1:1 programmes from £1,800 for six sessions. Pitch and panel intensives £1,800–£3,500. Practice-group workshops from £7,000 per day. A written proposal is issued within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "Pitches and beauty parades are not converting at the rate they should",
      "Internal panels are appointing more articulate candidates over more capable ones",
      "Client meetings feel thorough but don't build the relationship",
      "You're being prepared for partner candidacy and the delivery needs to match",
      "Conference and external profile is lagging your technical reputation",
      "Senior stakeholder management feels defensive rather than authoritative",
      "You're being told to work on presence and don't know what that means",
      "You want a coach used to working with senior professionals",
    ],
    workOn: [
      "Pitch architecture and beauty parade performance",
      "Client meeting and update craftsmanship",
      "Internal panel and promotion-round preparation",
      "Senior stakeholder and partner-group communication",
      "Conference, panel and external speaking",
      "Voice, presence and pace at senior professional standard",
      "Composure under client, regulator or partner-group scrutiny",
      "Building external profile that matches internal seniority",
    ],
  },

  // -------------------------------------------------------------------------
  "hospitality-lost": {
    introExtended:
      "Hospitality is communication-as-product. The food, the room, the location, the wine list — necessary and rarely sufficient. The differentiator at the higher end is the voice opposite the guest: the front-of-house greeting that sets the room's temperature, the sommelier recommendation that lifts the spend, the manager intervention that recovers a service slip without acknowledging it as one.\n\nWhat fails when hospitality communication fails is rarely friendliness. It is precision. The script that sounds like a script. The recovery line that reads as defensive. The pre-shift briefing that motivates no-one. The manager who leads operationally and not vocally. Guests forgive most things; they remember how they were spoken to.\n\nThis coaching is built for hotel groups, restaurant operators, luxury brands and hospitality leadership teams who treat communication as a commercial input. The work spans front-of-house teams, F&B leadership, general managers, brand spokespeople and the senior figures whose voice represents the property externally — in press, in industry, in the room.",
    whyMatters:
      "At the luxury and premium end of hospitality, guests are paying for an experience they could replicate technically elsewhere for less. The reason they return is not the technical product; it is the voice that delivered it. Trained communication across a team lifts review scores, average spend, retention and the calibre of word-of-mouth that fills the next quarter's diary.\n\nFor general managers and brand-facing leadership, the external voice carries the property. Trade press, industry awards, hotelier panels, owner conversations — each is an opportunity to position the brand or to dilute it. Most hospitality leaders are excellent operators and under-coached communicators. Closing that gap is one of the highest-leverage interventions a property can make.",
    approach:
      "The work is precisely calibrated to the medium. For front-of-house teams: greeting, recovery, upsell and the script that does not sound like one. For sommeliers and F&B leads: the recommendation language that lifts confidence and spend without performance. For general managers: pre-shift briefing, guest recovery conversations, owner updates and the leadership voice that holds a property. For brand-facing leaders: press, panel, industry keynote.\n\nSessions are delivered on-site at the property where possible — the same room, the same conditions, the same script the team will use that evening. The coach watches a service, debriefs with the team, builds the specific corrections and runs the next service against them. Confidence is built in the room the work actually happens in.",
    outcomes: [
      "Front-of-house greeting that visibly lifts guest experience scores",
      "Recovery conversations that resolve rather than escalate",
      "Sommelier and F&B recommendation that lifts confidence and spend",
      "Pre-shift briefings that the team actually retains and uses",
      "General-manager presence that holds the property across a service",
      "Brand-facing media and panel performance for senior leadership",
    ],
    formats: [
      {
        name: "Property On-Site Programme",
        description:
          "Multi-day engagement delivered at the property, combining front-of-house coaching with leadership 1:1 work. Built around live services, with debrief and correction between shifts.",
      },
      {
        name: "Leadership Communication Programme",
        description:
          "Six-session 1:1 programme for general managers, F&B directors and brand-facing executives. Built around live operational and external communication moments.",
      },
      {
        name: "Pre-Opening Communication Build",
        description:
          "Compressed engagement in the run-up to a property opening or rebrand. Team voice, leadership voice, brand-facing media and launch event preparation. Quoted bespoke.",
      },
    ],
    caseSnapshot:
      "A five-star London hotel relaunching after a refurbishment had operationally excellent staff and a guest review profile stuck below where the owner needed it to be. A three-day on-site engagement: front-of-house greeting and recovery, sommelier confidence work, pre-shift briefing structure for the GM. The next quarter's guest review average lifted from 4.6 to 4.8 — the smallest-looking metric in luxury hospitality, and the one that decides whether the property keeps its star.",
    faqs: [
      {
        question: "Do you work on-site at the property?",
        answer:
          "Yes — and for most hospitality engagements on-site delivery is the most effective format. Coaching front-of-house teams in their own room, against their own service, against their own scripts produces more retention than studio work could. For leadership 1:1 work we deliver on-site, at the London studio or via video as the diary allows.",
      },
      {
        question: "How is this different from standard service training?",
        answer:
          "Standard service training teaches the steps. This teaches the voice that delivers them. Most properties have invested in service training and still hear feedback that the warmth, confidence or recovery is uneven. That is a communication issue, not a service-steps issue, and it responds to performance coaching rather than to more training modules.",
      },
      {
        question: "Can you coach leadership and team in the same engagement?",
        answer:
          "Yes — this is the most effective format for a property that wants the standard to lift everywhere at once. We typically combine multi-day on-site team work with 1:1 sessions for the GM, F&B director and head sommelier. The leadership work compounds with the team work and the standard embeds.",
      },
      {
        question: "Do you work with restaurant groups as well as hotels?",
        answer:
          "Yes. Restaurant groups, premium retail-with-hospitality, members' clubs and luxury brands all use this work. The principles are identical; the application is calibrated to the format. For multi-site groups we typically build a consistent standard across properties through a combination of on-site programmes and leadership 1:1 work.",
      },
      {
        question: "What does this cost?",
        answer:
          "On-site property programmes are quoted bespoke based on team size, number of days and scope. Day rate £7,000 with adjustments for travel and accommodation outside London. Leadership 1:1 programmes from £1,800. Pre-opening engagements quoted in proposal. We issue a written scope within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "Guest review scores are stuck below where the property needs them",
      "Front-of-house greeting and recovery is inconsistent across the team",
      "Sommelier or F&B recommendation language is timid and spend is flat",
      "Pre-shift briefings are not changing what happens in the service",
      "General manager presence is operational but not vocal",
      "A property opening or rebrand needs the launch voice to land",
      "Brand-facing media and industry panels are not landing for the leadership",
      "You want training delivered in the room the work actually happens in",
    ],
    workOn: [
      "Front-of-house greeting, recovery and upsell language",
      "Sommelier and F&B recommendation confidence",
      "Pre-shift briefing structure and delivery",
      "General manager presence across a service",
      "Owner update and stakeholder communication",
      "Brand-facing press and industry panel performance",
      "Pre-opening and rebrand launch communication",
      "Multi-site standard consistency across properties",
    ],
  },

  // -------------------------------------------------------------------------
  "medical-lost": {
    introExtended:
      "Medical communication is high-consequence and chronically under-coached. Clinical training builds the diagnostic and procedural skill; almost nothing in standard medical training builds the communication layer on top of it. Grand Rounds, conference plenaries, consultant interviews, expert-witness testimony, media commentary, leadership of clinical teams, difficult conversations with patients and families — all are performed by people whose preparation for the medium is largely on-the-job.\n\nWhat fails when medical communication fails is rarely the medicine. It is the gap between clinical authority and delivered authority. The Grand Rounds presentation that loses the room past slide six. The consultant interview where the more articulate candidate was appointed. The expert-witness testimony where the cross-examination dismantled an answer the witness was right about. The patient consultation that escalated because the language did not de-escalate it.\n\nThis coaching is built for consultants, senior trainees moving towards consultant interview, clinical academics with a public profile, NHS and private leadership figures, expert witnesses and clinicians with a media presence. The work is calibrated to medical audiences and to the regulatory and professional standards the role requires.",
    whyMatters:
      "For consultants, communication is a clinical leadership skill. It is the layer that decides whether the registrar follows the plan, the multidisciplinary team aligns, the patient consents informed rather than passively, and the difficult family conversation closes rather than reopens. For clinical academics and senior public-facing medics, it is the layer that decides whether the research gets cited and quoted accurately or distorted.\n\nFor consultant interview candidates, communication is the entire visible surface of the appointment process. The reference panels have already established the clinical capability. What the interview tests is whether the candidate sounds like a consultant. Most appointments are won and lost on that distinction.",
    approach:
      "The work is medical-context specific. What to say — Grand Rounds and plenary architecture, consultant interview structure, expert-witness answer discipline, patient consultation framing. How to say it — voice, pace, calm under pressure, the language register that holds a multidisciplinary room. How to own it — full rehearsal of named upcoming moments, with structured feedback and reps under conditions that match the real room.\n\nSessions are 1:1, in person in London or via video. We use your live material — your upcoming Grand Rounds talk, your consultant interview brief, your expert-witness instruction, the difficult family conversation pattern you are seeing repeatedly. The coach has worked with senior medics for many years and the work is calibrated accordingly.",
    outcomes: [
      "Grand Rounds and plenary delivery that holds a clinical audience",
      "Consultant interview performance at the level of the appointment",
      "Expert-witness testimony composed under cross-examination",
      "Patient and family consultations that de-escalate and inform",
      "Media commentary that protects the science and the speaker",
      "A clinical leadership voice that holds an MDT and a department",
    ],
    formats: [
      {
        name: "Clinician 1:1 Programme",
        description:
          "Six-session bespoke programme built around live clinical communication moments. Suitable for consultants, senior trainees and clinical academics.",
      },
      {
        name: "Consultant Interview Intensive",
        description:
          "Compressed preparation for an upcoming consultant interview. Three to four sessions inside the interview window, with full mock interview, presentation rehearsal and structured feedback.",
      },
      {
        name: "Expert Witness & Media Programme",
        description:
          "Specialist programme for clinicians appearing as expert witnesses or as media commentators. Cross-examination drill, broadcast-condition media work, soundbite discipline.",
      },
    ],
    caseSnapshot:
      "A consultant cardiologist invited to give the plenary at a European Society of Cardiology meeting had the data, the slides and a quiet certainty the room would not stay with her past the third slide. Four sessions: opening architecture, voice and pace for a thousand-seat plenary, the close that named the implication of the data without overclaiming. The talk landed; the citation that followed was the talk's title, not the paper's. The science had not changed. The delivery had.",
    faqs: [
      {
        question: "Is this work compliant with GMC professional standards?",
        answer:
          "Yes. The coaching is communication and performance coaching; it does not engage clinical judgement or content and therefore does not interfere with GMC Good Medical Practice obligations. For media work and expert-witness preparation we are explicit about the boundary between coaching delivery and protecting the integrity of the clinical content.",
      },
      {
        question: "Can sessions count towards CPD?",
        answer:
          "Yes — the work is delivered under our CPD Certification Service accredited programme structure, with formal assessment and certified hours mapped to GMC and Royal College CPD requirements. Certificates are issued on completion of the programme and are structured to be recorded into your annual CPD return.",
      },
      {
        question: "Will the coach understand the clinical context?",
        answer:
          "We do not coach clinical content — we coach the delivery of it. The coach has worked with consultants, senior trainees and clinical academics across multiple specialties over many years and has a working understanding of the structures (Grand Rounds, MDT, plenary, expert testimony, media interview) the work has to land inside. Clinical content remains yours; structure, voice and delivery are ours.",
      },
      {
        question: "Can sessions be scheduled around clinical commitments?",
        answer:
          "Yes. Evening and weekend sessions are available, and video sessions are used where clinical commitments make travel impractical. For consultant interview intensives we typically schedule three to four sessions inside the four to six weeks before the interview, flexing around your rota.",
      },
      {
        question: "What is the investment?",
        answer:
          "Clinician 1:1 programmes from £1,800 for six sessions. Consultant interview intensives £1,800–£3,500. Expert witness and media programmes quoted in proposal based on scope and timing. CPD-accredited 1:1 programmes from £2,150. Invoices are issued to the individual or to the Trust / chambers / academic department as required.",
      },
    ],
    problems: [
      "Grand Rounds and plenary presentations are losing the room past the second slide",
      "An upcoming consultant interview and you want the delivery to match the candidacy",
      "Expert witness cross-examination has dismantled testimony you were right about",
      "Patient and family consultations are escalating where they should de-escalate",
      "Media commentary distorts the science and you want to protect it",
      "MDT leadership voice isn't holding the room the way the role requires",
      "Academic teaching presence is technically correct and pedagogically flat",
      "You want a coach used to working with senior medics",
    ],
    workOn: [
      "Grand Rounds, plenary and conference delivery",
      "Consultant interview presentation and panel performance",
      "Expert witness testimony and cross-examination composure",
      "Patient and family consultation framing and de-escalation",
      "Media commentary, broadcast and soundbite discipline",
      "MDT and clinical leadership voice",
      "Academic teaching and lecture performance",
      "CPD-accredited communication competence with certificate",
    ],
  },

  // -------------------------------------------------------------------------
  "government-lost": {
    introExtended:
      "Government communication operates under conditions no commercial communication does: regulatory scrutiny, parliamentary accountability, freedom-of-information exposure, an adversarial press, and an audience that is by definition every citizen. The communication standard required of senior civil servants, ministers, regulators, mayors, leaders of arm's-length bodies and senior local-government officials is higher than the commercial benchmark and the training provision is, in practice, lower.\n\nWhat fails when government communication fails is rarely judgement. It is delivery: the select committee evidence that should have closed the issue and instead reopened it; the media interview during a crisis that produced the clip used against the department for a fortnight; the public consultation event that confirmed the cynicism rather than reduced it; the regulator speech that lost the industry it was trying to persuade.\n\nThis coaching is built for senior figures in central government, devolved administrations, regulators, local government leadership and the broader public sector — including arm's-length bodies, quangos and senior public-sector executives. The work is select committee preparation, ministerial and senior official media training, public consultation and engagement performance, and the specific communication discipline required by public-facing regulated roles.",
    whyMatters:
      "Senior public communication is high-consequence and high-visibility. The select committee transcript is permanent. The media clip is permanent. The departmental brief on the press release is read by every journalist in the lobby. Communication failure in this environment has political, regulatory and reputational cost that compounds.\n\nThe inverse is also true. Well-delivered select committee evidence closes issues that could have run for a quarter. Composed crisis-media performance protects ministers and protects the department. A speech to industry that lands moves a sector that legislation alone cannot. Trained communication is the most reliable input to all of it.",
    approach:
      "The work is calibrated to public-sector conditions. What to say — message architecture that survives FOI, parliamentary record and adversarial editing; the answer-fit discipline that protects content under cross-examination. How to say it — voice, pace and composure under select committee, media and public scrutiny. How to own it — full rehearsal of named upcoming moments, with structured feedback and reps under conditions that match the actual room.\n\nSessions are 1:1, fully confidential, conducted in person at the studio, in Whitehall or departmental offices, or via secure video. All work is delivered under explicit confidentiality terms appropriate to government clients. The coach has worked with senior figures across central government, devolved administrations, regulators and local government over many years.",
    outcomes: [
      "Select committee evidence that closes issues rather than reopens them",
      "Ministerial and senior official media performance under crisis pressure",
      "Composure and message discipline under adversarial questioning",
      "Public consultation and engagement events that reduce rather than confirm cynicism",
      "Regulator speeches that move industry behaviour",
      "A senior public-sector voice that holds the seriousness of the role",
    ],
    formats: [
      {
        name: "Senior Official 1:1 Programme",
        description:
          "Bespoke six-to-ten session programme for senior civil servants, regulator executives and local-government leadership. Built around live select committee, media and public-engagement moments.",
      },
      {
        name: "Select Committee Intensive",
        description:
          "Compressed preparation for a named select committee appearance. Two to four sessions inside the run-up window, with full mock committee, hostile questioning rehearsal and message architecture.",
      },
      {
        name: "Departmental Media Day",
        description:
          "Single intensive day of broadcast-condition media training for ministers, special advisers, senior officials and departmental spokespeople. Crisis interview, friendly interview, down-the-line, panel.",
      },
    ],
    caseSnapshot:
      "A senior regulator executive appearing before a select committee on a politically contested issue had the evidence base and the policy clarity, and was walking in expecting to be procedurally dismantled. Three sessions: message architecture, the eight hostile lines of questioning rehearsed to answer-fit, the bridging discipline that returned every answer to the regulator's framework. The committee transcript that emerged was used by the department as the closing reference on the issue. The regulator's chair's note used the phrase 'visibly in command'. The evidence had not changed; the performance had.",
    faqs: [
      {
        question: "Is this work confidential at government level?",
        answer:
          "Yes — and to the standards public-sector clients require. All sessions are conducted under strict confidentiality, with footage held only for the engagement and destroyed at completion. We sign NDAs as standard, are familiar with the Civil Service Code obligations, and can hold sessions off the studio site where operationally cleaner. No public-sector client is ever named publicly without explicit written consent.",
      },
      {
        question: "Can you prepare officials for a specific select committee appearance?",
        answer:
          "Yes — and this is one of the most common engagements we run. The preparation typically runs three to four sessions inside the four weeks before the appearance, including full mock committee with adversarial questioning. Where the committee is high-profile we can also rehearse media interviews structured around the expected coverage of the evidence.",
      },
      {
        question: "Do you work with ministers and special advisers?",
        answer:
          "Yes. Ministerial 1:1 work and named-event preparation (PMQs follow-up, departmental statement, sector speech, media round) are delivered under standard senior-political confidentiality terms. Special adviser work tends to focus on briefing voice, media handling and the specific public-facing moments the SpAd is shaping rather than fronting.",
      },
      {
        question: "Can the work cover multiple officials in the same department?",
        answer:
          "Yes. Departmental media days are typically delivered to a small group of named officials and spokespeople, with consistent standards and shared rehearsal. For larger cohorts we structure multi-day programmes with a mix of group workshop and 1:1 sessions for nominated leaders.",
      },
      {
        question: "What does this cost?",
        answer:
          "Senior official 1:1 programmes from £2,150 for six sessions (CPD-accredited where required). Select committee intensives £1,800–£3,500. Departmental media days £7,000. Multi-cohort departmental programmes quoted in proposal. Invoices are issued to the department, regulator or individual as required.",
      },
    ],
    problems: [
      "A select committee appearance is imminent and the preparation isn't to standard",
      "Crisis media performance has produced clips that ran longer than they should have",
      "Public consultation events are confirming cynicism rather than reducing it",
      "Regulator speeches are not moving industry behaviour",
      "Departmental spokesperson performance is inconsistent across briefings",
      "Senior official appearance reads as procedural rather than authoritative",
      "Ministerial media rounds aren't landing the policy message",
      "You want a coach used to government conditions and confidentiality",
    ],
    workOn: [
      "Select committee evidence and cross-examination composure",
      "Ministerial and senior official media performance",
      "Crisis communication and reactive media discipline",
      "Public consultation and engagement event delivery",
      "Regulator and sector-speech preparation",
      "Message architecture that survives FOI and parliamentary record",
      "Departmental spokesperson and briefing voice",
      "Confidentiality-compliant coaching delivered to public-sector standards",
    ],
  },

  // -------------------------------------------------------------------------
  "charities-lost": {
    introExtended:
      "Charity and non-profit communication operates under harder constraints than commercial communication and is rewarded less for getting it right. Trustee boards, major-donor cultivation events, public fundraising appeals, beneficiary advocacy, media commentary on the cause area, sector conference platforms — each is a moment where the right delivery moves real money and the wrong delivery costs it.\n\nWhat fails when charity communication fails is rarely commitment. It is craft. The CEO appeal at the gala that the room respected and did not give to. The trustee chair whose AGM performance worried rather than reassured. The advocacy interview where the cause was diluted by the speaker rather than carried by them. The beneficiary story told in a way that exhausted the audience rather than engaging it.\n\nThis coaching is built for charity CEOs, trustee chairs, senior fundraisers, advocacy leads and major-cause spokespeople — across grant-giving foundations, operational charities, social enterprises and the broader non-profit sector. The work is fundraising appeal craft, board and trustee communication, major-donor cultivation conversation, media advocacy and the specific delivery work that turns mission into money.",
    whyMatters:
      "For charities, the communication moments are the income. A major-donor cultivation conversation that lands becomes a six- or seven-figure gift; one that does not becomes a polite decline. A gala appeal that lands moves the year's fundraising target; one that does not means the team rebuilds the gap from cold over the next ten months. The leverage is direct and measurable.\n\nFor advocacy and sector leadership the leverage is reputational and over time, political. The CEO whose media commentary is sharp gets booked back and shapes the public conversation about the cause. The trustee chair whose AGM and AGM-equivalent performances are calm and confident protects the organisation under scrutiny.",
    approach:
      "The work is calibrated to non-profit conditions and budget realities. What to say — appeal architecture, donor-cultivation conversation structure, board and trustee message discipline, advocacy soundbite craft. How to say it — voice, pace and emotional control under the pressure of speaking about cause material night after night. How to own it — rehearsal of named upcoming moments to performance level.\n\nSessions are 1:1, in person in London or via video, with concessionary pricing available for registered charities. The coach has worked with charity CEOs, trustees and senior fundraisers across the sector for many years and the work is calibrated to the standard the sector deserves rather than the one it typically receives.",
    outcomes: [
      "Gala and appeal performances that visibly move giving in the room",
      "Major-donor cultivation conversations that close at the target gift level",
      "Board and trustee communication that reassures rather than worries",
      "Advocacy media commentary that protects and builds the cause",
      "Beneficiary storytelling that engages without exhausting",
      "A CEO and trustee voice that holds the seriousness of the cause",
    ],
    formats: [
      {
        name: "Charity Leadership 1:1 Programme",
        description:
          "Six-session 1:1 programme for CEOs, trustee chairs and senior fundraisers. Built around live appeal, board and media moments. Concessionary pricing available for registered charities.",
      },
      {
        name: "Gala & Appeal Intensive",
        description:
          "Compressed preparation for a named gala, major appeal event or capital campaign launch. Three to four sessions inside the run-up window, with full rehearsal in conditions matching the room.",
      },
      {
        name: "Fundraising Team Workshop",
        description:
          "Half-day or full-day workshop for major-donor and corporate fundraising teams. Built around live cultivation conversation patterns and the team's actual donor pipeline.",
      },
    ],
    caseSnapshot:
      "A national children's charity's annual gala had under-performed against target for three consecutive years despite a stronger guest list each year. Four sessions with the CEO over a fortnight: appeal architecture, the discipline of the single beneficiary story, the ask reframed and rehearsed to performance level. The gala in question raised seventy-two per cent over the previous year's total on a comparable guest list. The cause had not changed. The voice asking had.",
    faqs: [
      {
        question: "Do you offer concessionary rates for charities?",
        answer:
          "Yes. Registered charities receive concessionary pricing across all 1:1 and workshop formats, typically twenty to thirty per cent below standard commercial rates. For smaller charities we can structure phased payments across financial years. A written proposal with the applicable concession is issued within forty-eight hours of an initial conversation.",
      },
      {
        question: "Can you prepare a CEO for a specific gala or major-donor event?",
        answer:
          "Yes — and named-event intensives are among the most common engagements we run for the sector. The preparation typically runs three to four sessions inside the four to six weeks before the event, including the appeal script, the ask rehearsal and the room-condition rehearsal where possible.",
      },
      {
        question: "Will you work with trustee boards as well as executives?",
        answer:
          "Yes. Trustee chair and trustee board communication is a frequent piece of work — particularly around AGMs, major-donor briefings and crisis response. We can also deliver trustee-only sessions where the board needs to develop a shared communication standard distinct from the executive's.",
      },
      {
        question: "Can the work be delivered outside London?",
        answer:
          "Yes. Sessions are delivered at the London studio, on-site at the charity's premises, at the event venue itself, or via video for distributed teams and trustees. Travel costs outside London are agreed in advance and concessionary rates apply across all formats.",
      },
      {
        question: "What does the investment look like?",
        answer:
          "Charity-rate 1:1 programmes typically £1,200–£1,500 for six sessions. Gala and appeal intensives quoted in proposal at concessionary rates. Fundraising team workshops at concessionary day rate. For smaller charities and social enterprises we can structure pro-bono or part-bono engagements selectively each year — please raise this in the initial conversation.",
      },
    ],
    problems: [
      "Gala or appeal performances aren't moving giving in the room",
      "Major-donor cultivation conversations stall at the wrong number",
      "Trustee board communication is worrying rather than reassuring stakeholders",
      "Advocacy media interviews are diluting the cause rather than carrying it",
      "Beneficiary storytelling exhausts the audience instead of engaging them",
      "CEO voice isn't holding the seriousness of the cause externally",
      "Capital campaign launch is imminent and the messaging isn't performance-ready",
      "You want a coach who understands non-profit conditions and budgets",
    ],
    workOn: [
      "Gala and appeal architecture and delivery",
      "Major-donor cultivation conversation craft",
      "Board, trustee and AGM communication",
      "Advocacy media performance and soundbite discipline",
      "Beneficiary storytelling that engages without exhausting",
      "Capital campaign launch and named-event preparation",
      "Fundraising team conversation skills at scale",
      "Crisis communication for safeguarding and reputational pressure",
    ],
  },

  // -------------------------------------------------------------------------
  "crypto-lost": {
    introExtended:
      "Crypto and blockchain communication operates under conditions no other sector quite does: a technically dense product, an audience split between deeply technical and entirely lay, a regulatory environment in active formation, and a press environment whose default frame ranges from sceptical to adversarial. Founders, protocol leads, foundation executives and senior operators are routinely asked to communicate across all of these audiences in the same week and were trained, in most cases, for none of them.\n\nWhat fails when crypto communication fails is almost always the same pattern: explanation that defaults to the technical when the audience needed the strategic; defensiveness when challenged on regulatory or volatility questions; conference keynotes pitched at the in-group when the outside world was the audience that mattered; podcast appearances that confirmed the priors of sceptics instead of moving them.\n\nThis coaching is built for founders, foundation executives, protocol leads, exchange leadership and senior operators across crypto, web3 and digital-asset infrastructure. The work is investor and institutional communication, conference and keynote performance, regulator and policy-engagement coaching, and media training calibrated specifically to the sector's current operating environment.",
    whyMatters:
      "In a sector where regulation is being written in real time and public perception is fluid, the senior figures who can communicate well are disproportionately the ones shaping the conversation. Regulators read the senior testimony. Institutional capital reads the conference keynotes and the podcast appearances. The press reads the press round. Each of those audiences is forming a view of the sector through the speakers it has access to. Underperforming on those platforms is not a personal cost; it is a sector cost.\n\nInternally the same applies. Token communities, ecosystem participants and institutional partners read founder communication for signals of conviction, maturity and durability. A protocol lead whose all-hands and ecosystem updates are sharp builds confidence; one whose are not erodes it faster than the underlying product can replace.",
    approach:
      "The doctrine is exact and the application is sector-aware. What to say — translating technically dense material into narrative that survives an institutional or general audience without losing precision; the ask, the framework, the regulatory line. How to say it — voice, pace, calm under hostile questioning, the soundbite discipline that protects the message under adversarial editing. How to own it — full rehearsal of named upcoming moments: conference keynote, podcast, institutional pitch, regulator engagement, congressional or parliamentary testimony.\n\nSessions are 1:1, in person in London or via video, under strict confidentiality. The coach has worked with founders and senior operators across crypto, web3 and adjacent infrastructure sectors and the work is calibrated to the sector's specific communication risks — regulatory exposure, volatility, technical complexity, adversarial press.",
    outcomes: [
      "Conference keynote performance that lands outside the in-group",
      "Institutional pitch communication that reads as mature and durable",
      "Regulator and policy engagement that protects the protocol or business",
      "Podcast and media performance that moves rather than confirms scepticism",
      "Technical-to-narrative translation that does not dilute the substance",
      "Composure under adversarial questioning on regulatory and volatility issues",
    ],
    formats: [
      {
        name: "Founder & Operator 1:1 Programme",
        description:
          "Six-session bespoke programme for crypto founders, foundation executives and protocol leads. Built around live institutional, conference and media moments.",
      },
      {
        name: "Named-Event Intensive",
        description:
          "Compressed preparation for a specific upcoming keynote, institutional pitch, regulator engagement or congressional testimony. Two to four sessions inside the run-up window.",
      },
      {
        name: "Crypto Media Day",
        description:
          "Single intensive day of broadcast-condition media training calibrated to the sector — hostile interview, podcast long-form, regulator-style questioning, conference panel.",
      },
    ],
    caseSnapshot:
      "The founder of a Layer 1 protocol invited to give the closing keynote at a major institutional conference faced an audience eighty per cent allocators and twenty per cent in-group. Three sessions: rebuilt the talk for an institutional audience, drilled the technical-to-narrative translations, rehearsed the close. The keynote was the most-clipped talk of the conference and resulted in five direct institutional intros in the following fortnight. The protocol had not changed; the audience had finally been spoken to in the language it operates in.",
    faqs: [
      {
        question: "Will the coach understand the sector?",
        answer:
          "We do not coach on tokenomics, smart-contract design or regulatory strategy. We coach the delivery of those things to specific audiences. The coach has worked with founders and senior operators across crypto, web3 and adjacent infrastructure for several years and has a working understanding of the sector structures and pressures the communication has to operate inside. Technical and regulatory substance remains yours; structure, voice and delivery are ours.",
      },
      {
        question: "Is this work confidential?",
        answer:
          "Yes — and at standards appropriate to a sector where pre-announcement leakage is materially costly. All sessions under strict NDA, footage destroyed at engagement completion, no client named publicly without explicit consent. For institutional pitch and regulator-engagement preparation we work to whatever incremental confidentiality protocols your counsel requires.",
      },
      {
        question: "Can you prepare for regulator or congressional testimony?",
        answer:
          "Yes. Regulator engagement and congressional or parliamentary testimony are among the named-event intensives we run most frequently in this sector. The preparation includes message architecture, hostile-questioning rehearsal and full mock testimony under conditions matching the actual forum. We work alongside your external counsel and policy advisers, not in substitution for them.",
      },
      {
        question: "Do you work with foundations and protocols as well as commercial entities?",
        answer:
          "Yes. Engagements span commercial crypto businesses (exchanges, custodians, infrastructure providers), foundations, protocols and DAOs with designated communications principals. Invoicing and contracting are adjusted accordingly. For DAO and foundation engagements we can work with multi-signatory approvals and structured public-disclosure terms.",
      },
      {
        question: "What is the investment?",
        answer:
          "Founder and operator 1:1 programmes from £1,800 for six sessions. Named-event intensives £1,800–£3,500. Crypto media days £7,000. Multi-principal engagements (foundation or protocol leadership groups) quoted in proposal. A written scope is issued within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "Conference keynotes land with the in-group and miss the institutional audience",
      "Institutional pitch communication reads as technical rather than mature",
      "Podcast and media appearances are confirming scepticism rather than moving it",
      "Regulator engagement is defensive rather than authoritative",
      "Congressional or parliamentary testimony is imminent and the preparation isn't to standard",
      "Token community and ecosystem updates aren't reading as conviction",
      "Technical-to-narrative translation keeps losing the substance or losing the audience",
      "You want a coach who understands the sector's specific communication risks",
    ],
    workOn: [
      "Conference keynote and panel performance for mixed audiences",
      "Institutional and allocator-pitch communication",
      "Regulator, policy and testimony engagement",
      "Podcast long-form and hostile media performance",
      "Technical-to-narrative translation discipline",
      "Ecosystem, foundation and DAO communication",
      "Crisis and reactive media for volatility events",
      "Soundbite discipline under adversarial editing",
    ],
  },

  // -------------------------------------------------------------------------
  "un-lost": {
    introExtended:
      "Communication inside the United Nations system operates under conditions no commercial environment replicates. Multilateral audiences, multiple working languages in the room, member-state sensitivities, parallel diplomatic and operational tracks, and a working culture in which the difference between a sentence that lands and a sentence that closes a corridor of cooperation is real. Senior UN officials, mission staff, agency leadership and senior delegates are operating in this register every day and are largely self-taught at it.\n\nWhat fails when UN-context communication fails is rarely intent. It is calibration: the speech in plenary that read as activist when it needed to read as principled; the side-event panel where the moderator's framing was not corrected and the message drifted; the bilateral conversation that did not anticipate the second-order political reading; the media line that gave the press the clip the secretariat had spent the week trying to avoid.\n\nThis coaching is built for senior UN officials, agency leadership, mission staff, special envoys, ambassadors and the broader multilateral diplomatic community. The work is plenary and high-level segment delivery, side-event and panel performance, bilateral conversation craft, press and member-state media engagement, and the specific communication discipline required by multilateral-system roles.",
    whyMatters:
      "In a multilateral environment the speaker is not only delivering their own position; they are delivering a calibrated signal that other delegations, the secretariat, the press and capitals will all read differently. Communication failure in this register has diplomatic, operational and political cost. Communication success — the well-judged intervention, the composed side-event, the clean media line — moves the conversation in directions the formal text of resolutions cannot.\n\nFor senior officials and mission leadership, the personal cost of underperformance is also visible. The speaker who is articulate in plenary is the speaker who gets the bilateral; the speaker who is composed in press is the speaker who protects the agency or mission; the speaker whose side-event reads as serious is the speaker the next conference asks back.",
    approach:
      "The work is calibrated to multilateral conditions. What to say — message architecture that holds across multiple audiences in the same room; the bilateral conversation framing that anticipates second-order readings; the press line that survives translation. How to say it — voice, pace and physical presence calibrated to plenary, side-event and bilateral registers. How to own it — full rehearsal of named upcoming moments under conditions that match the room.\n\nSessions are 1:1, in person where logistics allow or via secure video, under strict diplomatic confidentiality. The coach has worked with senior figures across the UN system, ambassadors and mission staff over many years and the work is calibrated accordingly. For delegations preparing for high-level weeks we offer compressed delegation-readiness programmes covering principals and supporting staff together.",
    outcomes: [
      "Plenary and high-level segment delivery that lands across audiences",
      "Side-event and panel performance that holds the framing",
      "Bilateral conversation craft calibrated to second-order political reading",
      "Press and media engagement that protects the secretariat or mission",
      "Composure across multiple working languages and multilateral registers",
      "A senior multilateral voice that holds the seriousness of the role",
    ],
    formats: [
      {
        name: "Senior Official 1:1 Programme",
        description:
          "Bespoke six-to-ten session programme for senior UN officials, agency leadership and mission principals. Built around live plenary, side-event, bilateral and media moments.",
      },
      {
        name: "High-Level Week Intensive",
        description:
          "Compressed preparation for a named high-level segment, General Assembly, Human Rights Council session or major conference. Multiple sessions inside the run-up window, with full rehearsal of principal interventions.",
      },
      {
        name: "Delegation Communication Programme",
        description:
          "Multi-principal programme for delegations and mission teams. Combines individual coaching for the head of delegation with group sessions for supporting staff. Quoted bespoke.",
      },
    ],
    caseSnapshot:
      "A senior UN agency executive preparing for a contested intervention in plenary faced a member-state environment in which the substantive position was supported and the delivery, if mis-pitched, would lose the room. Four sessions: message architecture, calibration of language register, the eight likely interventions from sceptical delegations rehearsed to response-fit. The intervention landed; the resulting consensus text included three of the four principles the agency had sought to land. The substance had not changed; the way it was heard had.",
    faqs: [
      {
        question: "Is this work compatible with UN secretariat confidentiality requirements?",
        answer:
          "Yes. All work is conducted under strict diplomatic confidentiality, with NDAs signed as standard and footage destroyed at engagement completion. We are familiar with the operational confidentiality norms of secretariat staff and mission environments, and can hold sessions off-site or via secure video where preferred. No UN-system client is named publicly without explicit written consent.",
      },
      {
        question: "Can sessions be conducted in working languages other than English?",
        answer:
          "Primary delivery is in English. For principals whose plenary or bilateral interventions are delivered in French or Spanish we can work in mixed-language mode, with delivery rehearsal in the working language and structural coaching in English. For other language requirements please raise in the initial conversation.",
      },
      {
        question: "Do you work with permanent missions as well as secretariat staff?",
        answer:
          "Yes — permanent missions, the secretariat, specialised agencies, programmes and funds. Delegation-readiness programmes typically combine the head of mission or principal with supporting staff over a compressed window before a named high-level moment.",
      },
      {
        question: "Can you deliver in New York, Geneva or other UN-system cities?",
        answer:
          "Yes. We deliver at our London studio, in New York, Geneva, Vienna and Nairobi by arrangement, and via secure video for principals based elsewhere. Travel costs are agreed in advance and folded into the proposal. High-level week intensives are typically delivered in the relevant city in the days immediately before the segment.",
      },
      {
        question: "What is the investment?",
        answer:
          "Senior official 1:1 programmes from £2,150 for six sessions. High-level week intensives quoted in proposal based on number of named events and timing. Delegation programmes quoted in proposal. We can structure invoicing through the mission, the agency, the secretariat or the individual as required. A written proposal is issued within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "Plenary interventions are reading as activist when they need to read as principled",
      "Side-event panel framing is drifting and the message is not being protected",
      "Bilateral conversations aren't anticipating second-order political readings",
      "Press lines are giving the wire services the clips you've been trying to avoid",
      "Delegation principal delivery is uneven across the high-level week",
      "Working in a second working language has muted the principal's authority",
      "Agency or mission leadership voice isn't holding the seriousness of the role",
      "You want a coach used to multilateral conditions and diplomatic confidentiality",
    ],
    workOn: [
      "Plenary and high-level segment delivery",
      "Side-event panel performance and framing control",
      "Bilateral conversation craft for diplomatic registers",
      "Press and member-state media engagement",
      "Message architecture for multilateral audiences",
      "Voice and pace for plenary, panel and bilateral conditions",
      "Delegation readiness across principal and supporting staff",
      "Mixed-language delivery rehearsal",
    ],
  },

  // =========================================================================
  // TOPIC
  // =========================================================================
  "fear-public-speaking-lost": {
    introExtended:
      "Most people who come to this work do not have a phobia. They have a job, or a moment in a job, that has made the fear specific. A board they have just joined. A keynote they have just been offered. A wedding they have just been asked to speak at. A promotion that comes with townhalls attached. The fear is not abstract; it is attached to a date and a room.\n\nWhat fails in self-managed fear of public speaking is almost always the same. Avoidance grows the fear; over-preparation deepens it; rehearsal in private trains the wrong reflex; the actual room, when it arrives, is the first time the body has experienced anything like the conditions. The result is a performance that disappoints the speaker and a feedback loop that confirms what they already feared about themselves.\n\nThe alternative is structured exposure under coaching. The fear does not go because someone tells you it will. It goes because the body does the thing, badly, under supervision, then better, then under pressure, then well — until the room becomes ordinary. This is the work. Specific, paced, kind, and built for adults whose careers will not wait for the fear to lift on its own.",
    whyMatters:
      "Fear of public speaking is the most career-limiting communication condition senior professionals live with privately. It is the reason promotions are politely declined, conference invitations are turned down, board appointments are sidestepped, and the more articulate colleague is sent in your place. None of that shows up on a development plan; all of it shows up in a career.\n\nThe cost is also internal and ongoing. The week before a presentation is spent in low-grade dread. The presentation itself is endured rather than delivered. The week after is spent rerunning the lower-quality version of yourself that showed up. Trained out, the same week becomes ordinary: prepared, delivered, moved past.",
    approach:
      "The work is paced and exact. Initial session establishes the specific moment the fear is attached to, the physical pattern the fear produces, and the realistic timeline. From there the work runs in graduated exposure — controlled rehearsal, then progressively more demanding conditions, with the voice, breath and body trained alongside. Confidence is not coaxed into existence; it is built by reps under conditions that match the room.\n\nThe doctrine is the same as the rest of the practice — what to say, how to say it, how to own it — applied here with particular attention to the physical mechanics. Breath that does not collapse under stress. Voice that does not thin out at the top of the room. Eye contact that holds rather than scans. Structure that the brain can hold even when the body would prefer not to be there. Sessions are 1:1, in person in London or via video, with strict confidentiality.",
    outcomes: [
      "The next named event delivered rather than endured",
      "A breath and voice pattern that does not collapse under stress",
      "Composure in front of groups of any size",
      "Recovery techniques for the moments when the fear briefly returns",
      "Willingness to take on the platforms previously declined",
      "A week-before pattern that is preparation rather than dread",
    ],
    formats: [
      {
        name: "Six-Session Programme",
        description:
          "The default programme. Six 1:1 sessions over six to ten weeks, paced to the speaker's specific event or platform. Strictly confidential, fully bespoke, no group exposure unless requested.",
      },
      {
        name: "Pre-Event Intensive",
        description:
          "Compressed preparation for a specific upcoming moment — wedding speech, keynote, board appearance, promotion presentation. Three to four sessions inside the run-up window, with full rehearsal to performance level.",
      },
      {
        name: "Extended Programme",
        description:
          "Longer programme for clients whose fear is more established and whose role requires sustained public-speaking exposure. Ten to twelve sessions across three to four months with graduated exposure built in.",
      },
    ],
    caseSnapshot:
      "A senior partner at an accountancy firm, technically distinguished and quietly terrified of any meeting larger than ten people, had declined the firm's annual conference keynote twice. Eight sessions over three months: breath, voice, structure, then rehearsal in front of progressively larger trusted audiences. The third year's keynote was delivered. The feedback note from the managing partner used the phrase 'completely unrecognisable from the partner I have heard at internal events for ten years'. The fear had not vanished; it had been trained out of the way.",
    faqs: [
      {
        question: "Is this confidential? I don't want anyone at work to know.",
        answer:
          "Yes — and explicitly so. All sessions are private, one-to-one, no observers, and no reference is ever made to the work outside the studio. Invoices can be issued personally rather than to your employer. Many senior clients do this work entirely off the firm's books and that is, professionally, none of the firm's business.",
      },
      {
        question: "Will the fear ever fully go away?",
        answer:
          "For most clients the fear does not fully disappear and does not need to. What changes is the relationship to it. The body still mildly registers a high-stakes moment; the speaker is no longer hijacked by that registration. The week before becomes preparation; the moment itself becomes delivery; the week after is moved past. That is what the work is for.",
      },
      {
        question: "I have a specific event coming up — can the work be paced to it?",
        answer:
          "Yes. Pre-event intensives are one of the most common formats — wedding speeches, conference keynotes, promotion presentations, named board appearances. The work is paced backwards from your date and the rehearsal is structured so that by the day of the event the room is the third or fourth time you have done the talk under condition, not the first.",
      },
      {
        question: "I've tried other coaches and CBT and it hasn't stuck. Why would this be different?",
        answer:
          "Most fear-of-public-speaking work focuses either on cognition (CBT, hypnotherapy) or on technique (presentation skills courses). Neither alone reliably moves the body. This work combines structural communication coaching with graduated physical exposure under condition, which is what re-trains the reflex. For most clients the difference is that this is the first time the body has done the thing repeatedly under skilled supervision.",
      },
      {
        question: "What does it cost?",
        answer:
          "Six-session programmes from £1,800. Pre-event intensives £1,800–£3,500 depending on number of sessions and timeline. Extended programmes quoted in proposal. Payment can be staged across the programme; invoices can be issued personally. A written proposal is issued within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "You've declined platforms, panels or promotions because of how speaking feels",
      "You over-prepare and still feel under-prepared on the day",
      "Your voice thins, rushes or shakes in front of groups",
      "The week before any presentation is spent in low-grade dread",
      "A specific upcoming event has the fear newly attached to it",
      "You've tried CBT, hypnotherapy or self-help with limited durable effect",
      "You sound nothing in the room like you do in private",
      "You want the work done discreetly, with no link back to your employer",
    ],
    workOn: [
      "Breath and voice patterns that hold under stress",
      "Structural confidence — material the brain can hold under pressure",
      "Graduated exposure to progressively more demanding conditions",
      "Physical presence and eye contact that hold rather than scan",
      "Recovery techniques for in-the-moment fear spikes",
      "Pre-event preparation that is paced rather than panicked",
      "Specific upcoming events rehearsed to performance level",
      "A new relationship to the body's stress response",
    ],
  },

  // -------------------------------------------------------------------------
  "accent-softening-lost": {
    introExtended:
      "Accent coaching at the senior end is rarely about removing the accent. It is about clarity, ease and the discreet adjustment that means colleagues, clients and the wider room are listening to your ideas rather than to the way you are saying them. Most adults who book this work are highly capable, internationally experienced, and have reached a point where being repeatedly asked to repeat themselves has become a professional friction.\n\nWhat fails in self-managed accent work is almost always the same. The speaker hears the issue and over-corrects on the wrong sounds. Generic apps drill phonemes the speaker already produces well and miss the specific intelligibility issues that are actually causing the friction. Friends and colleagues are too polite to give precise feedback, so the speaker is left guessing.\n\nThe work this coaching does is exact. Initial assessment identifies the specific intelligibility points — the sound combinations, the stress patterns, the rhythm — that are actually causing colleagues to lean in or ask again. The programme then drills those, and only those, against the speaker's live material. The accent stays. The intelligibility lifts. The room starts hearing the speaker rather than the speaker's history.",
    whyMatters:
      "For senior international professionals working in English-speaking environments — and particularly in London — the cost of unclear delivery is silent and ongoing. Meetings in which a contribution is repeated and reframed by a native-speaker colleague who heard it second. Pitches where the conviction is undermined by the audience working too hard to follow the words. Promotions and panel appointments that gravitate towards colleagues whose communication is read as easier rather than better.\n\nThe inverse is also true. Trained clarity work tends to lift confidence as quickly as it lifts intelligibility, because the speaker stops bracing against being misheard. The same person, in the same room, with the same ideas, is heard differently. Most clients describe the shift as 'I stopped having to over-explain'.",
    approach:
      "The work is targeted and assessment-driven. Session one: detailed assessment of the speaker's actual intelligibility profile — which sounds are clear, which combinations are not, which stress patterns are losing intelligibility, where the rhythm of English speech is fighting the first-language rhythm. From there, the programme drills the specific points causing the friction, and leaves the rest of the accent alone.\n\nThe doctrine remains — what to say, how to say it, how to own it — applied here with technical specificity to articulation, stress and rhythm. We use the speaker's live material: real meeting recordings, real presentation scripts, real pitch language. Sessions are 1:1, in person in London or via video, with structured recordings and written feedback after each session so the practice between sessions is precise rather than scattergun.",
    outcomes: [
      "Measurable lift in intelligibility on speaker's live material",
      "Colleagues and clients no longer asking for repetition",
      "Confidence in meetings, pitches and panels that no longer braces against being misheard",
      "Targeted clarity work that leaves the accent intact",
      "Written intelligibility profile and structured between-session practice",
      "Senior-level communication that reads as fluent rather than effortful",
    ],
    formats: [
      {
        name: "Senior Clarity Programme",
        description:
          "Six-session 1:1 programme with detailed initial assessment, targeted drill on the specific intelligibility points causing friction, and structured progress tracking. The default for senior international professionals.",
      },
      {
        name: "Pre-Event Intensive",
        description:
          "Compressed preparation for a specific upcoming presentation, pitch or keynote where clarity is critical. Two to three sessions focused on the live material to be delivered.",
      },
      {
        name: "Extended Clarity Programme",
        description:
          "Longer programme for clients with broader clarity goals or for those whose role requires sustained high-stakes English-language delivery. Ten to twelve sessions across three to four months.",
      },
    ],
    caseSnapshot:
      "A managing director at a European investment bank, fluent in English, repeatedly mis-heard in a high-stakes pitch process her team would have won on substance. Six sessions: assessment, four specific consonant combinations and one stress-pattern adjustment drilled against her actual pitch script. The next pitch closed at target valuation. Her own note afterwards was characteristic of the work: 'I am not speaking differently. I am being heard differently.'",
    faqs: [
      {
        question: "Will I lose my accent?",
        answer:
          "No — and the work is explicitly designed not to. Accent is identity, and at senior level losing it is neither desirable nor professionally helpful. The work targets only the specific intelligibility points that are causing colleagues and clients to ask for repetition. The accent stays. The clarity lifts. Most clients report colleagues notice they are easier to follow without being able to articulate what has changed.",
      },
      {
        question: "How quickly will the change be measurable?",
        answer:
          "Most clients see measurable change inside three sessions on the specific intelligibility points being targeted. Colleagues typically notice the shift around session four to five. The full programme lift compounds over the six sessions because the targeted sounds become reflexive rather than conscious — which is what makes it sustainable.",
      },
      {
        question: "I've used accent-softening apps and they didn't move it. Why is this different?",
        answer:
          "Apps drill phonemes generically. The reason your specific intelligibility issue persists is almost certainly that the apps are not drilling the specific combinations causing the friction in your live communication. This work begins with detailed assessment of your actual intelligibility profile and drills only what is causing the issue, using your real material.",
      },
      {
        question: "Can sessions be conducted online?",
        answer:
          "Yes — and online delivery is particularly well-suited to this work because high-quality recording is built into the format. Approximately half of our accent-clarity clients work entirely online, including senior clients based outside the UK whose work is delivered in English globally.",
      },
      {
        question: "What does this cost?",
        answer:
          "Senior clarity programmes from £1,800 for six sessions. Pre-event intensives £1,800–£3,500. Extended programmes quoted in proposal. Invoicing personal or corporate. A written proposal with the assessment summary is issued within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "Colleagues and clients are repeatedly asking you to repeat yourself",
      "Your contributions are being reframed and credited to native-speaker colleagues",
      "Pitch and presentation impact is being undermined by clarity friction",
      "You've used accent-softening apps and nothing has measurably moved",
      "Promotions and panel appointments seem to favour colleagues who are easier to follow",
      "You're fluent in English and being mis-read as less senior than you are",
      "A specific upcoming high-stakes presentation needs to land clearly",
      "You want clarity work that does not require you to lose your accent",
    ],
    workOn: [
      "Targeted articulation of the specific sounds causing friction",
      "English-language stress and rhythm patterns",
      "Clarity in pitch, presentation and meeting delivery",
      "Voice, pace and breath alongside the clarity work",
      "Written intelligibility profile and structured between-session practice",
      "Live-material rehearsal — your real pitches, your real meetings",
      "Confidence work alongside the technical clarity drills",
      "Senior-level English-language delivery that reads as effortless",
    ],
  },

  // -------------------------------------------------------------------------
  "stammering-lost": {
    introExtended:
      "Stammering at the adult professional end is rarely about effort. It is about pattern. Most adults who stammer have lived with it long enough to have developed sophisticated avoidance and substitution strategies that hide the disfluency at the cost of confidence, fluency and energy. The cost is silent and chronic: the meeting contribution withheld, the word swapped for a weaker one, the public-speaking opportunity declined, the relationship managed around the moment.\n\nWhat fails when adults try to self-manage stammering at work is almost always the same. Generic fluency techniques are taught but not embedded under pressure; speech therapy from childhood is remembered patchily; the workplace is the first environment in which the strategies are tested and the conditions are precisely the ones that defeat them.\n\nThis coaching is built for adult professionals who stammer and who want to do more with their voice in their working lives. The work is fluency strategy, confidence under pressure, public-speaking exposure, and the integration of evidence-informed techniques into the speaker's actual professional reality — meetings, pitches, presentations, interviews, leadership moments.",
    whyMatters:
      "For adult professionals who stammer, communication patterns at work compound. The colleague who never volunteers is read as quieter, less confident, less senior — none of which is accurate. The pitch that was delivered by someone else because the stammer was anticipated is one more piece of evidence the speaker uses to confirm their own avoidance. Over a career the cost is measurable in opportunities not taken and contributions not made.\n\nTrained fluency work at the adult professional end does not 'cure' stammering — and frames itself accordingly. What it does is move the speaker's relationship to the stammer and the speaker's available range. The same speaker, with the same speech, is able to do more: speak in larger meetings, deliver presentations, lead from the front of the room, take the platforms previously declined.",
    approach:
      "The work integrates evidence-informed fluency strategies (block modification, prolonged speech techniques, easy onset, breath integration) with structural communication coaching and graduated public-speaking exposure. The starting point is the speaker's actual professional life — the meetings, presentations, pitches and conversations that matter — and the work is built around them rather than around generic fluency exercises.\n\nThe doctrine remains — what to say, how to say it, how to own it — applied here with explicit attention to fluency. Sessions are 1:1, kind, exact and entirely confidential. The pace is set by the speaker. Many clients integrate this work alongside continuing or previous speech therapy; the two are complementary. The coaching does not duplicate clinical SLT; it builds the layer above it that workplace performance requires.",
    outcomes: [
      "Greater range of fluency strategies usable under workplace pressure",
      "Reduced avoidance and substitution in meetings and presentations",
      "Confidence to volunteer, present and lead in environments previously avoided",
      "Structured pre-event preparation for named high-stakes moments",
      "A new working relationship with the stammer in professional contexts",
      "Sustained increase in the platforms and opportunities being taken",
    ],
    formats: [
      {
        name: "Adult Fluency Programme",
        description:
          "Six-session 1:1 programme integrating fluency strategy with structural communication coaching. Strictly confidential, paced to the speaker. The default starting point.",
      },
      {
        name: "Pre-Event Intensive",
        description:
          "Compressed preparation for a specific upcoming presentation, interview or leadership moment. Three to four sessions inside the run-up window, with full rehearsal under condition.",
      },
      {
        name: "Extended Programme",
        description:
          "Longer programme for clients with broader public-speaking goals or for those whose role requires sustained high-visibility delivery. Ten to twelve sessions across three to four months.",
      },
    ],
    caseSnapshot:
      "A senior in-house lawyer at a FTSE 100 group, technically formidable and consistently declining the platform speaking the role increasingly required, came in nine months before a series of internal compliance conferences he had been asked to front. Ten sessions over five months: fluency integration, presentation structure, graduated rehearsal in front of progressively larger trusted audiences. The three conferences were delivered. His own note afterwards was the test of the work: 'I am not pretending I do not stammer. I am no longer letting it choose my career.'",
    faqs: [
      {
        question: "Will this 'cure' my stammer?",
        answer:
          "No — and the work is explicit about that. Stammering at adult age is not 'cured' by coaching, and any practitioner promising that should be treated with suspicion. What the work does is increase your available range of fluency strategies under pressure, reduce avoidance and substitution, and expand the professional contexts in which you can comfortably operate. Most clients describe the change as 'I do more of what I want to do.'",
      },
      {
        question: "Is this work confidential?",
        answer:
          "Yes — and at the highest level of confidentiality the practice maintains. All sessions one-to-one, no observers, footage destroyed at engagement completion. Many clients do this work entirely off their employer's books and invoices can be issued personally. We do not name clients in any context.",
      },
      {
        question: "I've had speech therapy in the past — is this duplicative?",
        answer:
          "No. Clinical speech and language therapy and adult professional fluency coaching are complementary, not interchangeable. SLT builds the underlying fluency techniques; this coaching integrates them with structural communication work and graduated workplace exposure, against the speaker's actual professional life. Many clients work with both concurrently.",
      },
      {
        question: "Can I work on a specific upcoming event?",
        answer:
          "Yes — and pre-event intensives are one of the most common formats. Named upcoming presentations, interviews, panel appearances, leadership moments — paced backwards from your date, rehearsed to performance level. The work is structured so that the day of the event is the third or fourth time you have delivered the material under condition rather than the first.",
      },
      {
        question: "What is the investment?",
        answer:
          "Adult fluency programmes from £1,800 for six sessions. Pre-event intensives £1,800–£3,500. Extended programmes quoted in proposal. Payment can be staged. Invoicing personal or corporate. A written proposal is issued within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "You're avoiding meetings, presentations or platforms because of the stammer",
      "Word substitution is hiding the stammer at the cost of clarity and confidence",
      "Childhood speech therapy is patchily remembered and not embedded under workplace pressure",
      "A specific upcoming presentation or interview is bringing the stammer forward",
      "Colleagues read you as quieter than you actually are",
      "Promotions and platforms that involve public speaking have been quietly declined",
      "You want fluency work integrated with real-world professional reality",
      "You want a coach who treats stammering with seriousness and without condescension",
    ],
    workOn: [
      "Evidence-informed fluency strategies for workplace pressure",
      "Reducing avoidance and substitution in real meetings and presentations",
      "Structural communication coaching alongside fluency",
      "Graduated public-speaking exposure paced to the speaker",
      "Pre-event preparation for named high-stakes moments",
      "Voice, breath and pace integration with fluency technique",
      "Confidence work for senior platforms previously declined",
      "Coordinated working relationship with continuing clinical SLT where in place",
    ],
  },

  // -------------------------------------------------------------------------
  "voice-lost": {
    introExtended:
      "The voice is the most under-coached professional instrument in adult working life. Most senior professionals have never had a single session of structured voice work and rely on whatever vocal habits they happened to develop by the age of twenty. The cost is silent and pervasive: thin voices in large rooms, voices that tire across long days of meetings, voices that read as junior when the speaker is not, voices that lose authority on recording, voices that the speaker themselves dislikes hearing back.\n\nWhat fails in self-managed voice work is almost always the same. Generic 'speak louder' advice forces volume from the throat and damages the instrument over time. Online drills are practised in isolation and do not transfer to the room. Years of accumulated tension, shallow breath patterns and habitual pitch settle in and become invisible to the speaker.\n\nProfessional voice coaching is the deliberate development of the voice as an instrument — resonance, range, breath, projection, stamina, and the warmth and authority that come from a voice that is fully supported. The work is calibrated to professional adult working life: meetings, presentations, broadcast, conference, the long day, the difficult conversation, the moment that has to land.",
    whyMatters:
      "The voice carries everything. The same content delivered by an under-developed voice and a fully resonant one is received as two different propositions. Resonance reads as authority. Breath support reads as composure. Range reads as engagement. Their absence reads, equally consistently, as junior, anxious or low-energy — none of which the speaker intends and most of which the speaker does not realise they are projecting.\n\nFor senior professionals whose roles require sustained vocal output — leadership, teaching, broadcast, performance, courtroom advocacy, customer-facing work, conference circuits — the voice is also a stamina question. Voices that have never been trained tire fast, lose pitch range across the day, and become a source of chronic strain. Trained voices last.",
    approach:
      "The work is technical and applied. Breath integration first — diaphragmatic support that produces volume without strain. Resonance work — opening the chest, mask and head resonance the voice can actually use. Range — extending the speaker's available pitch range so the voice carries colour and engagement. Articulation — clean delivery without effort. Stamina — voice care, warm-up and recovery protocols for sustained professional use.\n\nThe doctrine — what to say, how to say it, how to own it — sits over the technical voice work. The voice is built, then immediately applied to the speaker's live material: presentations, meetings, broadcast, the named moments coming up. Sessions are 1:1, in person in London or via video, with structured recordings and between-session practice. For clients with vocal health concerns we coordinate with ENT and laryngology where relevant.",
    outcomes: [
      "A voice with greater resonance, warmth and authority",
      "Projection without throat strain across long days",
      "Range and colour that reads as engaged rather than monotone",
      "Recording playback that sounds like the speaker intends",
      "Voice that holds across a conference, a courtroom, a teaching day",
      "Voice care and recovery protocols for sustained professional use",
    ],
    formats: [
      {
        name: "Voice Programme",
        description:
          "Six-session 1:1 programme covering breath, resonance, range, projection and stamina, applied to the speaker's live material. The default for adult professional voice development.",
      },
      {
        name: "Pre-Event Voice Intensive",
        description:
          "Compressed voice preparation for a specific upcoming presentation, conference, broadcast or stage moment. Two to three sessions targeted at the voice the room will require.",
      },
      {
        name: "Voice Health Programme",
        description:
          "Specialist programme for clients whose voices are tiring, hoarsening or failing under professional load. Built around vocal recovery, sustainable technique and coordinated working where ENT or laryngology input is in place.",
      },
    ],
    caseSnapshot:
      "A keynote speaker on the international corporate circuit, technically capable and consistently losing voice by the third day of any conference run, came in between two major programmes. Six sessions: breath integration, resonance and range work, voice care and recovery protocols. The next year's circuit ran twenty-eight conference days without vocal failure. Her own note afterwards was the test of the work: 'For the first time in my career I am not rationing my voice.'",
    faqs: [
      {
        question: "Will I sound like someone else?",
        answer:
          "No. The work is to develop the voice you already have — the resonance, range and breath support that have been under-used — not to impose a different voice on top of it. Most clients report colleagues notice they sound 'more authoritative' or 'warmer' without being able to articulate what has changed. The voice stays unmistakably theirs; it simply does more.",
      },
      {
        question: "I'm worried about damaging my voice — is this work safe?",
        answer:
          "Yes — and is in fact one of the safest things you can do for a professionally used voice. The work is built around breath support and resonance precisely so that volume and stamina come from the body rather than the throat, which is the protective mechanism. For clients with existing vocal health concerns we coordinate with ENT and laryngology where relevant and pace the work accordingly.",
      },
      {
        question: "My voice gets recorded a lot — can the work be calibrated to that?",
        answer:
          "Yes — broadcast, podcast, video and recorded content are a major part of the practice. Voice work for recorded media has specific requirements (microphone-aware delivery, broadcast pacing, recorded-condition resonance) that we coach explicitly. Many clients report the largest single change is in how they sound on playback.",
      },
      {
        question: "Can sessions be conducted online?",
        answer:
          "Yes. With good audio set-up online voice coaching is fully effective and approximately half of voice clients work entirely online. We will advise on microphone and recording set-up at the start of the programme so the session conditions support the work.",
      },
      {
        question: "What does this cost?",
        answer:
          "Voice programmes from £1,800 for six sessions. Pre-event voice intensives £1,800–£3,500. Voice health programmes quoted in proposal. A written proposal is issued within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "Your voice is thin or quiet in large rooms despite your seniority",
      "Voice tires or hoarsens across long meeting or conference days",
      "Recording playback sounds nothing like you intend",
      "You've been told you sound monotone or low-energy and you disagree",
      "Voice reads as junior when the work and the title are not",
      "You're entering a role with sustained vocal demands and the instrument isn't ready",
      "You're losing voice on conference circuits and rationing speaking",
      "You want a voice you actually like hearing back",
    ],
    workOn: [
      "Diaphragmatic breath support for projection without strain",
      "Chest, mask and head resonance development",
      "Pitch range and vocal colour",
      "Articulation and consonant clarity at projected volume",
      "Voice stamina, warm-up and recovery protocols",
      "Voice for broadcast, podcast and recorded media",
      "Voice care for clients with existing vocal health concerns",
      "Application to live material — presentations, meetings, broadcast, stage",
    ],
  },

  // -------------------------------------------------------------------------
  "leadership-comms-lost": {
    introExtended:
      "Leadership communication is what turns strategy into action. The plan, the structure, the org chart, the OKRs — necessary and inert without communication that lands. Most senior leaders have been promoted on their ability to think strategically and judged on their ability to land what they think; very few have been deliberately coached on the second half of that equation.\n\nWhat fails in leadership communication is rarely the strategy. It is the architecture and the delivery. Town halls that surface the answers and not the questions. All-hands that talk at the room rather than with it. Strategy briefings that translate badly down the org. Difficult conversations that hedge until the message is invisible. Change communication that the team can repeat but cannot believe.\n\nThis coaching is built for leaders whose communication has to carry the strategy. Divisional MDs, executive committee members, partners, public-sector directors and senior leadership team members. The work is town hall and all-hands delivery, strategy briefing architecture, difficult conversation craft, change communication and the specific delivery work that turns plans into movement.",
    whyMatters:
      "Strategy that cannot be communicated is strategy that cannot be executed. The cost is not registered as a communication failure; it is registered as poor execution, low engagement, slow adoption, change fatigue. All of these have one upstream cause: the leadership voice failed to land. The reverse compounds positively: strategy that is well-communicated executes faster, retains better people, weathers difficult quarters more durably.\n\nFor leaders themselves, communication is the most visible career surface. Promotion panels, succession conversations, executive committee judgement, board impression — all are formed through repeated exposure to the leader's communication. The leader whose town halls feel inevitable is the leader whose next role feels inevitable.",
    approach:
      "The work has three components. Architecture — building strategy, change and difficult communication so the most important thing is the first thing and the message survives the chain of internal retelling. Delivery — voice, pace, presence and the specific physical mechanics of leading a room rather than talking at it. Performance preparation — rehearsal of named upcoming moments to performance level.\n\nSessions are 1:1, in person in London or via video, using the leader's live material. The doctrine — what to say, how to say it, how to own it — sits at the centre of the work. The coach is in the room watching the leader do the actual work and making the precise adjustments that move it from competent to authoritative. Where required we extend the engagement to the leader's direct-report team so the communication standard the leader wants does not stop at the leader.",
    outcomes: [
      "Town halls that engage the room and the engagement survey reflects it",
      "Strategy briefings that translate down the org without losing fidelity",
      "Difficult conversations delivered with directness and care",
      "Change communication that the team can repeat and believe",
      "All-hands and leadership moments that read as inevitable",
      "A leadership voice consistent in person, on video and on stage",
    ],
    formats: [
      {
        name: "Leadership 1:1 Programme",
        description:
          "Bespoke six-to-ten session programme built around the leader's live communication moments. The default starting point for senior leaders.",
      },
      {
        name: "Strategy Briefing Intensive",
        description:
          "Compressed preparation for a specific strategy briefing, change announcement, town hall series or named leadership moment. Two to four sessions inside the run-up window.",
      },
      {
        name: "Leadership Team Engagement",
        description:
          "Combined programme: 1:1 coaching for the principal plus a workshop for the direct-report team, so the communication standard sets at leadership level and embeds down. From £5,000 per off-site day.",
      },
    ],
    caseSnapshot:
      "A divisional MD inheriting a 2,000-person workforce after a difficult restructure faced a town hall in which the room was, fairly, sceptical. Five sessions in three weeks: message architecture, voice and pace for the venue, the three hostile questions rehearsed to answer-fit. The town hall did not solve the restructure. It reset what the workforce believed about the leader. The engagement survey moved twelve points inside two quarters.",
    faqs: [
      {
        question: "How is this different from leadership development?",
        answer:
          "Leadership development teaches what to think. This coaches how to land what you think. The two are complementary and not interchangeable. Most senior leaders who book this work have already done the leadership programmes; what they need now is the delivery layer those programmes did not build.",
      },
      {
        question: "Can the work include my direct-report team?",
        answer:
          "Yes — and this is one of the most effective formats. We typically combine 1:1 work for the principal leader with a workshop or short programme for the direct-report team, so the communication standard the leader wants to set does not stop at their office door. Many leaders see the largest organisational effect from this combination rather than from 1:1 alone.",
      },
      {
        question: "Is the work confidential?",
        answer:
          "Yes. All leadership 1:1 work is conducted under strict NDA. Sessions are one-to-one with no observers, footage destroyed at engagement completion, no client named publicly without explicit written consent. Discretion is part of the service.",
      },
      {
        question: "Can sessions be paced around a heavy diary?",
        answer:
          "Yes. Sessions are scheduled around your diary, including early-morning, evening and weekend sessions. For named-event intensives we hold the dates and travel to your office or off-site where operationally cleaner. Video sessions are used during travel and for international assignments.",
      },
      {
        question: "What is the investment?",
        answer:
          "Leadership 1:1 programmes typically £3,500–£10,000 depending on scope and number of sessions. Named-event intensives £1,800–£3,500. Leadership team engagements from £5,000 per off-site day plus 1:1 component. A written proposal is issued within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "Town halls are tolerated by the room rather than led",
      "Strategy briefings translate badly down the organisation",
      "Difficult conversations hedge until the message is invisible",
      "Change communication is repeated by the team but not believed",
      "Engagement and retention metrics aren't moving and you suspect delivery is the cause",
      "You've been told to work on presence or gravitas and don't know what that means",
      "Newly promoted into a bigger role and the delivery hasn't scaled with it",
      "You want a coach who works at the level you operate at",
    ],
    workOn: [
      "Town hall and all-hands architecture and delivery",
      "Strategy briefing structure for internal cascade",
      "Difficult conversation craftsmanship",
      "Change and restructure communication",
      "Leadership voice, presence and gravitas",
      "Direct-report team communication standard work",
      "Composure under hostile internal Q&A",
      "Performance preparation for named leadership moments",
    ],
  },

  // =========================================================================
  // OCCASION
  // =========================================================================
  "keynote-lost": {
    introExtended:
      "A keynote is a performance, not a presentation. The room has cleared its diary, the lights are on the speaker, the audience has invested social and reputational capital in being there, and the speaker has somewhere between fifteen and sixty minutes to make it worth that investment. Most speakers — including very senior, technically distinguished ones — under-perform the platform because they prepare it as a longer version of a meeting talk rather than as a piece of theatre.\n\nWhat fails when keynotes fail is rarely the content. It is the architecture and the delivery. Openings that take three minutes to start. Structures that lose the room past the second slide. Closes that trail rather than land. Pacing that flattens the second half. Voice and physical presence that work in a meeting room and disappear in a conference auditorium. Q&A that disperses the energy the talk earned.\n\nThis coaching is built for keynote and conference speakers who want their stage performance to match the seriousness of the platform. The work is talk architecture, opening and close craftsmanship, voice and pace for conference conditions, slide-and-speaker integration, Q&A discipline and the full rehearsal regime that turns a good talk into a memorable one.",
    whyMatters:
      "Keynotes are leveraged communication. A single forty-minute talk reaches more people than a quarter of internal meetings, and the recording circulates indefinitely. A talk that lands becomes the speaker's calling card for the next two years. A talk that does not lands inside the speaker's reputation just as durably. Conferences book back speakers whose talks were memorable; they do not book back competent ones.\n\nFor senior leaders, founders, academics and public figures whose external profile depends on the conference circuit, keynote quality is therefore not a vanity question. It is a pipeline question.",
    approach:
      "The work is staged. Architecture first — opening, structure, close, the through-line that holds the talk together. Then delivery — voice, pace, physical presence calibrated to the room size, slide-and-speaker integration. Then rehearsal — full run-throughs under condition, timed, recorded, debriefed, then run again. By the day of the keynote the talk is the third or fourth time the speaker has delivered it under condition, not the first.\n\nThe doctrine — what to say, how to say it, how to own it — is the spine of the work. Sessions are 1:1, in person in London or via video, with full recording and structured feedback. For major keynotes where the venue is accessible we run the final rehearsal in the actual room. For broadcast or recorded keynotes we calibrate the work specifically to the recorded medium.",
    outcomes: [
      "An opening that earns the next ten minutes inside ninety seconds",
      "A through-line strong enough that the audience can quote the talk",
      "A close that lands rather than trails",
      "Voice and physical presence calibrated to the actual room size",
      "Slide-and-speaker integration that does not let the deck lead",
      "Q&A discipline that protects the energy the talk earned",
    ],
    formats: [
      {
        name: "Keynote Preparation Intensive",
        description:
          "Three to six sessions inside the run-up window to a named keynote. Architecture, delivery, full rehearsal under condition. The default for a specific upcoming talk.",
      },
      {
        name: "Conference Speaker Programme",
        description:
          "Extended six-to-ten session programme for speakers preparing multiple keynotes across a season or building a sustained conference-circuit presence.",
      },
      {
        name: "Venue Rehearsal Day",
        description:
          "Single intensive day at the actual venue or a comparable space. Full run-throughs under stage conditions, recorded and debriefed. Suitable for major keynote moments.",
      },
    ],
    caseSnapshot:
      "A technology leader invited to give the closing keynote at a major industry conference had the substance and a tendency to over-prepare into a talk that read as recited. Four sessions: rebuilt the architecture around a single through-line, drilled the opening ninety seconds and the close, ran two full rehearsals on the live deck. The talk was the second most clipped of the conference and produced eleven inbound speaking invitations in the following quarter. The expertise had not changed; the platform had finally been used.",
    faqs: [
      {
        question: "How long before the keynote should we start working?",
        answer:
          "Four to eight weeks is the most effective window for a major keynote. We can work in shorter timeframes — including inside seven days for high-pressure named moments — but the rehearsal arc that produces a properly memorable talk benefits from the longer window. For ongoing conference circuits we typically work on a continuous basis with the speaker, with intensives around named talks.",
      },
      {
        question: "Will the coach see the deck?",
        answer:
          "Yes — the deck and the talk are coached as a single piece of performance. We do not design slides, but we shape what they need to say and what they need to not say, and we coach the speaker on how to integrate slide and voice so the deck supports rather than leads. Many talks improve dramatically simply by removing slides the speaker did not realise were working against them.",
      },
      {
        question: "Can we rehearse at the actual venue?",
        answer:
          "Where possible, yes. For major keynotes we will rehearse at the venue on the day before or the morning of the event where the diary and venue access allow. For talks delivered at recurring venues (industry conferences with consistent stage configurations) we can rehearse in comparable spaces. The room-condition rehearsal materially changes how the talk lands on the day.",
      },
      {
        question: "Is this different from a media or presentation coach?",
        answer:
          "Yes. Keynote work is its own discipline. The pacing, the relationship to the audience, the slide-and-speaker choreography, the way energy has to be built and held across a longer talk — none of this is what a media coach trains. Many of our clients use this coaching for keynotes specifically and other coaches for other formats.",
      },
      {
        question: "What is the investment?",
        answer:
          "Keynote preparation intensives £1,800–£3,500 depending on number of sessions and timeline. Conference speaker programmes from £1,800 for six sessions. Venue rehearsal days quoted in proposal. A written proposal is issued within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "Your keynote reads as a longer version of a meeting talk",
      "The opening takes three minutes to start and you've lost the room before then",
      "The close trails rather than lands and the Q&A disperses the energy",
      "Voice that works in a meeting room disappears in a conference auditorium",
      "Slides are leading the talk and the speaker is following them",
      "A major upcoming keynote is in the diary and the preparation isn't to standard",
      "You're being invited onto bigger platforms and the delivery hasn't scaled with them",
      "You want a coach who treats the keynote as a performance, not a presentation",
    ],
    workOn: [
      "Talk architecture and the through-line",
      "Opening discipline — the first ninety seconds",
      "Close craftsmanship that lands rather than trails",
      "Voice and pace calibrated to the actual room size",
      "Physical presence and stage choreography",
      "Slide-and-speaker integration",
      "Q&A discipline that protects the talk's energy",
      "Full rehearsal regime under venue or condition match",
    ],
  },

  // -------------------------------------------------------------------------
  "pitch-lost": {
    introExtended:
      "The pitch is not the deck. The deck is the document. The pitch is the performance — the version of the speaker that walks into the room, makes the room believe, handles the questions and earns the next meeting. Investors have sat through hundreds of technically correct pitches. They remember the founders whose delivery matched the conviction of the underlying thesis. They write cheques for the ones who do both.\n\nWhat fails when pitches fail is almost always the same. The opening sixty seconds does not earn the next ten minutes. The narrative is buried under the technical detail. The ask is hedged or unclear. Q&A produces four-minute answers when forty-second ones were needed. Hostile partner questions land on a defensive reflex rather than on a prepared answer. The room respects the founder and does not commit.\n\nThis coaching is built for founders, sales leaders and senior commercial figures pitching for investment, major partnership or strategic capital. The work is pitch architecture, opening and close craftsmanship, Q&A discipline, hostile-question rehearsal and the full performance preparation that turns a good pitch into a closing one.",
    whyMatters:
      "Pitches are the single highest-leverage communication moment most founders and senior commercial leaders ever have. A forty-five-minute partner meeting determines whether a round closes, whether a strategic partner commits, whether a major contract moves to legal. The downstream economic consequence is direct and measurable. Coaching that materially improves the performance pays for itself many times over the value of the meeting it improves.\n\nThe inverse is also true and rarely acknowledged. Founders and commercial leaders who under-perform pitches do not generally know which specific delivery patterns are costing them. The polite passes do not come with delivery feedback. The decline of the term sheet does not name the moment in the meeting where the room cooled. The work this coaching does is partly diagnostic and partly performance: identifying what is actually failing, and re-building it.",
    approach:
      "The doctrine is exact. What to say — pitch architecture: opening hook, problem, solution, market, evidence, ask. The order matters and the discipline of the order matters more. How to say it — voice, pace, conviction, the forty-second answer rather than the four-minute one. How to own it — full rehearsal of pitch and Q&A under condition, with the hostile partner questions drilled to answer-fit.\n\nSessions are 1:1, in person in London or via video. We use your live deck and your live target list. The coach plays the difficult partner — the technical-deep partner, the market-sceptical partner, the founder-fit partner — and the speaker rehearses against each. By the round-opening meeting the pitch is a performance the founder can run on demand at a level that closes.",
    outcomes: [
      "Opening sixty seconds that earns the next ten minutes",
      "Pitch architecture that lands the narrative without losing the substance",
      "An ask delivered with clarity and the right number attached",
      "Q&A answers tight enough to survive a difficult partner meeting",
      "Hostile question composure that protects the round rather than confirming concerns",
      "A pitch that converts at the rate the underlying business deserves",
    ],
    formats: [
      {
        name: "Pitch Preparation Intensive",
        description:
          "Three to six sessions inside the run-up window to a named round or major pitch. Architecture, delivery, Q&A drill, full rehearsal. The default for a specific upcoming raise.",
      },
      {
        name: "Founder Pitch Programme",
        description:
          "Extended six-to-ten session programme for founders building a sustained pitch capability across a round and beyond. Includes co-founder choreography where applicable.",
      },
      {
        name: "Demo Day & Showcase Intensive",
        description:
          "Compressed preparation for Demo Day, accelerator showcase, pitch competition or Dragons' Den-style format. Built specifically around the format's pacing and judging criteria.",
      },
    ],
    caseSnapshot:
      "The founder of a Series A B2B SaaS company, technically formidable and commercially under-heard, came in three weeks before a fundraise. Five sessions: rebuilt the opening ninety seconds, drilled the eight hardest partner questions to forty-second answers, rehearsed the close. The round closed at target valuation on the original term sheet. The lead partner's email afterwards described the pitch as 'the most coherent founder narrative we have heard this year'. The product had not changed. The performance had.",
    faqs: [
      {
        question: "Will you help with the deck itself or only delivery?",
        answer:
          "Both. Pitch architecture is part of the work — what slides need to be there, in what order, with what supporting material. We do not design slides; we shape what the slides need to say so that the founder is delivering the right material in the right order. The deck and the delivery are coached as a single piece of performance.",
      },
      {
        question: "Can you work to a short timeline?",
        answer:
          "Yes. Compressed intensives inside seven to fourteen days are common, particularly around demo days, named partner meetings and short-notice strategic pitches. Where time is tight we structure two to three high-intensity sessions plus video review between them, with priority given to opening, ask and the top eight Q&A scenarios.",
      },
      {
        question: "Do you coach co-founder teams together?",
        answer:
          "Yes — and it is often the highest-leverage version of this work. We coach the founder team together on pitch and Q&A choreography (who speaks when, how to hand off, how to look like a team rather than two individuals sharing a room) plus 1:1 sessions for the principal pitcher.",
      },
      {
        question: "What kinds of pitches do you work on?",
        answer:
          "Investor pitches (pre-seed through growth and IPO roadshow), major commercial pitches and beauty parades, strategic partnership pitches, board pitches for internal capital allocation, pitch competitions and accelerator showcases. The structure of the work is consistent; the application is tailored to the format and audience.",
      },
      {
        question: "What is the investment?",
        answer:
          "Pitch preparation intensives £1,800–£3,500 depending on number of sessions and timeline. Founder pitch programmes from £1,800 for six sessions. Co-founder team engagements and named-round intensives quoted in proposal. A written proposal is issued within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "Pitches are not converting at the rate the business deserves",
      "The opening sixty seconds is not earning the next ten minutes",
      "The ask is buried, hedged or unclear when delivered",
      "Q&A produces four-minute answers when forty-second ones were needed",
      "Hostile partner questions land on a defensive reflex",
      "Co-founder pitch choreography is uneven and the room reads it",
      "A demo day or major named pitch is imminent and the preparation isn't to standard",
      "You want a coach who treats the pitch as a performance, not a conversation",
    ],
    workOn: [
      "Pitch architecture: opening, problem, solution, market, evidence, ask",
      "Opening sixty seconds discipline",
      "Ask clarity and the number attached",
      "Q&A discipline and the forty-second answer",
      "Hostile partner question rehearsal",
      "Co-founder team pitch choreography",
      "Format-specific preparation: demo day, beauty parade, board pitch, competition",
      "Full rehearsal under condition matching the actual room",
    ],
  },

  // -------------------------------------------------------------------------
  "negotiations-lost": {
    introExtended:
      "Negotiation outcomes are decided as much by communication craft as by the substantive position. Two negotiators with identical positions and identical authority will close at different numbers depending on how each runs the room — the pace of concessions, the framing of value, the discipline of silence, the timing of the close. Most senior negotiators have been promoted on substantive judgement and have never had structured coaching on the communication mechanics that determine how the substantive judgement is received.\n\nWhat fails when negotiation communication fails is rarely the strategy. It is the discipline. Over-talking the position into ambiguity. Conceding pace and value because silence felt uncomfortable. Allowing the counterparty's framing to set the agenda. Closing too early because the room wanted to be liked. The cost shows up directly: the deal that closed three to seven per cent below where it should have, the partnership that gave away terms it did not need to, the salary that anchored where the other side wanted it to.\n\nThis coaching is built for senior professionals whose negotiations are commercially material — commercial leaders, M&A principals, dealmakers, partners, senior in-house counsel, executives entering high-stakes individual negotiations. The work is framing and anchoring craft, concession discipline, silence and pacing, hostile-counterparty composure and the specific communication mechanics that move negotiation outcomes.",
    whyMatters:
      "At senior level negotiation outcomes compound. A deal closed three per cent better is a three per cent better baseline for every subsequent deal of similar shape. A salary or partnership terms anchored higher carries forward indefinitely. A partnership framed correctly at the outset structures the relationship and the renewals for years. The leverage of trained communication craft in this register is therefore high and the half-life of the work is long.\n\nInternally the same applies. Executives who run their own negotiations well — supplier contracts, internal capital allocation, hiring conversations, board discussions on remuneration and scope — capture value for themselves and for the businesses they run. Most do not have the communication coaching the role would justify.",
    approach:
      "The work focuses on the specific communication mechanics that move negotiation outcomes. Framing — how the position is introduced and how the counterparty's framing is rejected without confrontation. Anchoring — the language and the timing of the opening number. Concession discipline — the language that holds value and the language that gives it away. Silence — the most under-used negotiation tool and the one that requires the most training. Hostile-counterparty composure — staying in pace and framing when the room turns adversarial.\n\nSessions are 1:1, in person in London or via video, with full confidentiality. We use live deal scenarios where the client is comfortable sharing them, or close composite analogues where they are not. Role-played counterparty work — the coach plays the difficult buyer, the difficult board chair, the difficult opposing counsel — is central to the method. The doctrine — what to say, how to say it, how to own it — applies here with particular emphasis on what to leave unsaid.",
    outcomes: [
      "Better closes on commercially material deals — measurable in points and pounds",
      "Framing discipline that does not let counterparty narrative set the agenda",
      "Anchoring craft and the language of the opening number",
      "Concession pacing that holds value rather than giving it away",
      "Tolerance and use of silence as a negotiation tool",
      "Composure under hostile or adversarial counterparty pressure",
    ],
    formats: [
      {
        name: "Negotiation 1:1 Programme",
        description:
          "Six-session programme combining framing, anchoring, concession discipline, silence and counterparty role-play. The default for senior commercial and M&A principals.",
      },
      {
        name: "Named-Deal Intensive",
        description:
          "Compressed preparation for a specific upcoming negotiation — major contract close, M&A counterparty meeting, partnership terms negotiation, individual remuneration discussion. Two to four sessions inside the run-up window.",
      },
      {
        name: "Deal Team Workshop",
        description:
          "Half-day or full-day workshop for negotiation and deal teams, built around the team's live deal patterns and counterparty profiles. Includes coached role-play and structured debrief. From £7,000 per day.",
      },
    ],
    caseSnapshot:
      "A managing director leading a UK acquisition for a global industrials group entered final-stage negotiations with a vendor side known for late-stage repricing. Three sessions inside ten days: framing and pacing discipline, the silence work, the eight most likely vendor repricing manoeuvres rehearsed to language-fit. The deal closed at the original price three weeks later. The MD's note afterwards was the test of the work: 'I said less and held more.'",
    faqs: [
      {
        question: "Is this work confidential?",
        answer:
          "Yes — and to the standards M&A and senior commercial work requires. All sessions under strict NDA. Live deal material is held only for the duration of the engagement, and where the client prefers we work entirely from composite analogues so no live material is shared. No client or deal is named publicly without explicit consent.",
      },
      {
        question: "Will you negotiate alongside me or only coach?",
        answer:
          "We coach. We do not enter the room as a representative, do not act as your counsel and do not negotiate on your behalf. The work is to build your own communication craft so the negotiation outcomes improve under your delivery. For complex transactional matters we recommend the coaching sits alongside your legal and financial advisers, who remain in their respective roles.",
      },
      {
        question: "Can the work address a specific upcoming deal?",
        answer:
          "Yes — and named-deal intensives are among the most common engagements. We work from the brief, identify the specific counterparty patterns the negotiation is likely to produce, and drill against them. For deals where the counterparty is well-known to you we can build the role-play with substantial specificity.",
      },
      {
        question: "Do you work with deal teams as well as individuals?",
        answer:
          "Yes. Deal team workshops are particularly effective for in-house commercial teams, M&A teams, partner-led practice groups and senior procurement teams. The workshop format combines coached role-play with structured debrief on the team's live deal patterns. We can also extend with 1:1 sessions for nominated principals.",
      },
      {
        question: "What is the investment?",
        answer:
          "Negotiation 1:1 programmes from £1,800 for six sessions. Named-deal intensives £1,800–£3,500. Deal team workshops from £7,000 per day. A written proposal is issued within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "Deals are closing three to seven per cent below where they should",
      "Counterparty framing is setting the agenda and you're responding to it",
      "Concessions are coming early and the value is leaking out of the deal",
      "Silence feels uncomfortable and you are talking through it",
      "Hostile counterparty pressure is moving you off pace and out of framing",
      "Individual remuneration and partnership-terms conversations are anchoring badly",
      "Internal stakeholder negotiations are giving away scope unnecessarily",
      "You want a coach who treats negotiation as a communication discipline",
    ],
    workOn: [
      "Framing discipline and the language of the opening position",
      "Anchoring craft and timing",
      "Concession pacing and the language that holds value",
      "Silence as a negotiation tool",
      "Hostile-counterparty composure and pace control",
      "Role-played rehearsal against live counterparty patterns",
      "Individual remuneration and partnership-terms negotiation",
      "Deal team communication consistency",
    ],
  },

  // -------------------------------------------------------------------------
  "online-lost": {
    introExtended:
      "Online communication is now a substantial part of senior professional working life and is, for most senior professionals, the medium they have had the least structured coaching in. The camera and the microphone are unforgiving instruments. They flatten voice, reveal pacing issues, expose the wandering eye-line and amplify the small physical tells that the room would have absorbed. Most senior professionals deliver online at a level visibly below their in-person performance and have learned to live with the gap rather than train it out.\n\nWhat fails when online communication fails is medium-specific and consistent. Voice that worked in the room sounds thin on a built-in microphone. Pace that worked in the room runs too fast through a video call. Eye contact drifts to the second monitor or the speaker's own image. Energy drops past the twenty-minute mark and the room with it. Slide-share takes over and the speaker disappears.\n\nThis coaching is built for senior professionals whose roles require sustained, high-quality online delivery — leaders running distributed teams, founders pitching internationally, executives whose board and investor meetings are now hybrid by default, consultants and advisers whose entire client interaction has moved to video. The work is online-specific delivery technique, on-camera presence, voice and microphone craft, slide-and-speaker choreography for the medium and the specific performance disciplines online platforms require.",
    whyMatters:
      "For most senior professionals, online is now the dominant medium and the largest single under-trained area in their communication. The cost is silent and constant: board meetings where the principal's online presence is below their in-room standard; pitches that close less reliably on video than in person; town halls that read as flatter than the same speaker live; client conversations that lose nuance through the screen. Across a year the cumulative cost is significant. Across a career it is substantial.\n\nThe inverse is also true. Speakers who train deliberately for the online medium deliver materially better than the comparable peer who has not. The lift is not subtle and the audience reads it immediately — even if they cannot name what is different.",
    approach:
      "The work is medium-specific. Set-up — camera height, framing, microphone, lighting, the physical conditions that determine half the on-camera quality before the speaker has done anything. Voice — the recalibration of voice and pace for the online medium, which is materially different from in-room delivery. Eye-line discipline — holding the camera as if it were the room and not the screen. Slide-and-speaker choreography — keeping the speaker present even when the slides are sharing. Energy management — holding pace and engagement across the timescales online meetings actually run at.\n\nSessions are themselves delivered online — the medium is the rehearsal. We use the client's actual set-up. The doctrine — what to say, how to say it, how to own it — applies fully, with the additional medium-specific layer. For clients running international 1:1 work this is also the most operationally efficient format, and approximately half of our adult clients work exclusively online for that reason.",
    outcomes: [
      "On-camera presence that matches your in-room standard",
      "Voice and microphone calibration appropriate to the medium",
      "Eye-line discipline that holds the camera as the room",
      "Energy management that holds pace past the twenty-minute mark",
      "Slide-and-speaker choreography that keeps the speaker visible",
      "A set-up that does the visual half of the work before you speak",
    ],
    formats: [
      {
        name: "Online Coaching Programme",
        description:
          "Six-session 1:1 programme delivered entirely online, calibrated to the medium. The default for senior professionals whose work is now substantially online.",
      },
      {
        name: "Named-Event Online Intensive",
        description:
          "Compressed preparation for a specific upcoming online event — virtual keynote, hybrid board, online pitch, distributed town hall. Two to three sessions inside the run-up window.",
      },
      {
        name: "Distributed Team Workshop",
        description:
          "Online workshop for distributed leadership and sales teams. Built around the team's live online meeting patterns. Includes on-camera coaching for each participant.",
      },
    ],
    caseSnapshot:
      "A US-based founder running a UK fundraise entirely on video had a strong product, a respected reputation and an online pitch presence that was visibly below her in-person standard. Four online sessions across two weeks: set-up rebuild, voice and pace recalibration, eye-line discipline, full rehearsal on the live deck. The round closed at the target valuation. The lead partner's note afterwards said the pitch was 'one of the strongest online deliveries we have seen this cycle'. The product had not changed; the medium had finally been used properly.",
    faqs: [
      {
        question: "Will online sessions be as effective as in-person?",
        answer:
          "For online-specific work, more so — because the medium of the session is the medium of the eventual delivery. For broader communication coaching, online sessions are fully effective for most clients with good set-up. Approximately half of our adult clients work exclusively online and the outcomes are comparable to in-studio engagements.",
      },
      {
        question: "Do you advise on set-up — camera, microphone, lighting?",
        answer:
          "Yes — and it is the first piece of work in any online programme. Most senior professionals are operating with set-ups that are materially below what their role and audience deserve. We will audit your set-up at the start of the programme and recommend specific adjustments. The visual half of online presence is determined before the speaker has done anything.",
      },
      {
        question: "Can the work be done across time zones?",
        answer:
          "Yes. We schedule sessions across UK, European, US East and West Coast, Middle Eastern and Asian time zones. Many clients work from outside the UK entirely. Sessions are typically held in the client's preferred window and the diary is built backwards from that.",
      },
      {
        question: "How is this different from a presentation skills course?",
        answer:
          "Presentation skills courses are largely room-based and do not train the medium-specific disciplines online requires. This work is calibrated specifically to camera, microphone, eye-line, slide-and-speaker choreography and the energy curves online meetings actually produce. Most clients have done presentation training previously and report this is the first work that has materially moved their online performance.",
      },
      {
        question: "What is the investment?",
        answer:
          "Online coaching programmes from £1,800 for six sessions (priced identically to in-studio work). Named-event online intensives £1,800–£3,500. Distributed team workshops quoted in proposal. A written proposal is issued within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "Your online presence is visibly below your in-room standard",
      "Voice that works in the room sounds thin on video",
      "Eye-line drifts to the second monitor or your own image",
      "Energy drops past the twenty-minute mark in long online meetings",
      "Slide-share takes over and you disappear from the call",
      "Your online set-up is below what your role deserves and you don't know how to fix it",
      "A major upcoming online event — pitch, keynote, hybrid board — needs the delivery to land",
      "You're running a distributed team and the online standard isn't where it needs to be",
    ],
    workOn: [
      "Camera, microphone, lighting and set-up audit",
      "Voice and pace recalibration for the online medium",
      "Eye-line discipline and holding the camera as the room",
      "Energy and pace management across long online meetings",
      "Slide-and-speaker choreography for screen-share environments",
      "Online keynote and virtual conference presence",
      "Distributed team meeting craft",
      "Online interview, pitch and board performance",
    ],
  },

  // -------------------------------------------------------------------------
  "sales-lost": {
    introExtended:
      "Sales communication is high-frequency, commercially measurable and chronically under-coached above the SDR layer. Senior salespeople, account directors and commercial leaders are paid for closing and judged on it; almost none of them have had structured communication coaching since their first year in the role. The gap between adequate and excellent in this domain is directly measurable in pipeline conversion and revenue.\n\nWhat fails when senior sales communication fails is rarely product knowledge. It is craft. Discovery conversations that fail to find the actual deal-shaping pain. Pitches that over-feature and under-narrate. Demo presentations that lose the room past the third feature. Procurement-stage communication that gives away value through concession pace rather than pricing. Closing conversations that hedge until the buyer chooses by default to delay.\n\nThis coaching is built for senior salespeople, account directors, sales leaders and commercial principals whose conversion is commercially material. The work is discovery craft, pitch and presentation architecture, demo performance, procurement-stage communication, close discipline and the specific delivery work that moves conversion rates.",
    whyMatters:
      "Senior sales communication is the highest-leverage communication coaching available for revenue-bearing roles. A two or three point improvement in conversion across a senior salesperson's pipeline pays for the coaching many times over inside a single quarter. The same applies, multiplied, at sales leadership level where the coaching cascade lifts an entire team's performance.\n\nThe inverse is also true and rarely acknowledged. Most senior salespeople do not know which specific delivery patterns are costing them. Lost deals come with rationalisations attached (price, timing, competitor, internal politics) and rarely with delivery feedback. Coaching this work is therefore partly diagnostic: identifying what is actually failing, and re-building it.",
    approach:
      "The work focuses on the specific moments that move deal outcomes. Discovery — the questioning craft that finds the deal-shaping pain rather than the buyer's stated brief. Pitch and presentation — architecture that narrates rather than features. Demo — the discipline of letting the product speak without losing the room. Procurement — the communication that holds value through concession without losing the relationship. Close — the discipline that turns a positive buyer into a signed contract rather than a delayed decision.\n\nSessions are 1:1, in person in London or via video, using the client's actual pipeline and live deal material. Role-played buyer work — the coach plays the difficult procurement lead, the technical sceptic, the indecisive committee — is central. The doctrine — what to say, how to say it, how to own it — applies here with particular emphasis on the listening half of sales communication, which is where most of the work actually is.",
    outcomes: [
      "Conversion rate lifts measurable inside a single quarter",
      "Discovery conversations that find the deal-shaping pain rather than the brief",
      "Pitch and presentation that narrates rather than features",
      "Demo discipline that does not lose the room past the third feature",
      "Procurement-stage communication that holds value",
      "Close discipline that turns positive buyers into signed contracts",
    ],
    formats: [
      {
        name: "Senior Salesperson 1:1 Programme",
        description:
          "Six-session 1:1 programme covering discovery, pitch, demo, procurement and close. Built around live pipeline. The default for senior individual contributors and account directors.",
      },
      {
        name: "Named-Deal Intensive",
        description:
          "Compressed preparation for a specific named deal at a critical stage. Two to four sessions inside the run-up window, with full rehearsal against the actual buyer profile.",
      },
      {
        name: "Sales Team Workshop",
        description:
          "Half-day or full-day workshop for sales teams, built around the team's live deal patterns and buyer types. Includes coached role-play and structured debrief. From £7,000 per day.",
      },
    ],
    caseSnapshot:
      "A consultancy partner team of fourteen had been losing six-figure pitches to a smaller competitor with weaker credentials. A two-day workshop rebuilt pitch architecture, drilled the partners on opener and close discipline, and rehearsed the three hardest client objections to script. Conversion rate over the following two quarters moved from twenty-eight per cent to fifty-one per cent on the same pipeline. The technical content barely changed. The performance did.",
    faqs: [
      {
        question: "How is this different from sales methodology training?",
        answer:
          "Sales methodologies (MEDDIC, Challenger, SPIN, Sandler) teach process and questioning frameworks. They are useful and they are not delivery coaching. This work is the communication craft layer on top of whatever methodology your team operates — voice, pace, presence, discovery questioning rhythm, demo discipline, close craft. Most clients use this work in addition to their existing methodology, not instead of it.",
      },
      {
        question: "Can you work on a specific live deal?",
        answer:
          "Yes — named-deal intensives are among the most common engagements, particularly around major procurement stages, panel pitches and final-stage negotiations. We work from the deal context, identify the specific buyer patterns the deal will produce, and drill against them with role-played counterparty work.",
      },
      {
        question: "Do you work with sales leaders as well as individual contributors?",
        answer:
          "Yes. Sales leader engagements typically combine 1:1 work on the leader's own commercial communication (board reporting, executive committee presence, customer escalations) with team workshops for the leader's direct sales team. The two compound — the leader's own communication standard sets the team's standard.",
      },
      {
        question: "How is impact measured?",
        answer:
          "By the metric agreed at proposal stage. For individual contributors and account directors it is conversion rate or average deal size on a tracked pipeline. For sales leaders it is team-level conversion or revenue per head. We agree the measure at the outset and track it back. Anything else is theatre.",
      },
      {
        question: "What does this cost?",
        answer:
          "Senior salesperson 1:1 programmes from £1,800 for six sessions. Named-deal intensives £1,800–£3,500. Sales team workshops from £7,000 per day. Sales leader engagements combining both quoted in proposal. A written proposal is issued within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "Conversion rate is below where the pipeline suggests it should be",
      "Discovery conversations are missing the deal-shaping pain",
      "Pitches are over-featuring and under-narrating",
      "Demos are losing the room past the third feature",
      "Procurement-stage communication is giving away value unnecessarily",
      "Close conversations hedge and the buyer chooses by default to delay",
      "Lost deals come with rationalisations attached and no clear pattern",
      "You want a coach who treats sales as a communication discipline",
    ],
    workOn: [
      "Discovery questioning craft and the listening half of sales",
      "Pitch and presentation architecture",
      "Demo performance and feature discipline",
      "Procurement-stage communication and concession craft",
      "Close discipline and the move from positive to signed",
      "Role-played buyer scenarios against live deal types",
      "Sales leader communication for team and customer escalation",
      "Team-level communication standard work",
    ],
  },

  // -------------------------------------------------------------------------
  "media-training-lost": {
    introExtended:
      "Media training as most senior professionals have experienced it produces certificates and not durable performance. Half-day sessions in a conference room, a single mock interview filmed on a webcam, a feedback sheet, and the assumption that the skill will be there when the real interview lands. It is rarely there. The real interview produces the same mistakes — over-answering, defensive hedging, losing the soundbite, allowing hostile interviewers to set the agenda — and the spokesperson learns the wrong lesson, which is that they 'aren't good on media'.\n\nWhat fails in most media training is the conditions. Skills built in low-pressure conference-room mocks do not transfer to studio conditions, hot lights, hostile presenters, down-the-line audio, podcast long-form or live broadcast pressure. The medium has to be the training medium, and the conditions have to match what the spokesperson will actually face.\n\nThis coaching is built for spokespeople, executives, senior public-facing figures and expert commentators whose media performance is commercially or reputationally material. The work is studio-condition broadcast training, hostile interview rehearsal, soundbite and bridging discipline, down-the-line and podcast performance and the specific delivery work that produces footage worth publishing.",
    whyMatters:
      "Media performances are leveraged communication. A single ten-minute Today programme interview reaches more people than a year of internal communications. A clip from a hostile interview circulates indefinitely. A well-handled crisis appearance becomes the reference point the industry quotes back at the speaker. The downstream effect of a single broadcast is materially larger than the speaker usually realises in the moment.\n\nThe inverse is the more painful asymmetry. A poorly handled hostile interview produces a clip that lives on the spokesperson's record indefinitely, is used as the reference image of them inside the organisation and outside, and shapes every subsequent invitation to comment. Trained media performance is the most reliable insurance against that asymmetry.",
    approach:
      "The work is medium-specific and condition-matched. Full broadcast set-up: camera, microphone, lighting, presenter, interruption pattern. We rehearse hostile interviews under hostile conditions, friendly interviews under friendly conditions, down-the-line interviews with full broadcast audio, podcast long-form with the actual rhythm the medium produces, and panels with the multi-speaker dynamics they actually create.\n\nThe doctrine — what to say, how to say it, how to own it — applies here with particular emphasis on soundbite discipline and the bridging language that protects the message under adversarial editing. Sessions are 1:1, with full video playback and structured debrief on every take. By the end of a media day the spokesperson has handled at least three full interviews and watched themselves back on each. Confidence on media is built the same way every other performance confidence is built: reps under conditions that match the room.",
    outcomes: [
      "Studio interviews that land the message and survive the edit",
      "Soundbite and bridging discipline that produces quotable, broadcast-ready answers",
      "Composure under hostile, interruptive or adversarial questioning",
      "Down-the-line performance with full presence and pace",
      "Podcast long-form that holds the audience past the first ten minutes",
      "Crisis interview readiness that protects the organisation under pressure",
    ],
    formats: [
      {
        name: "Media Training Day",
        description:
          "Single intensive day of studio-condition broadcast training. Hostile interview, friendly interview, down-the-line, panel. Full playback and structured feedback. The default for spokespeople and senior media-facing executives. £7,000.",
      },
      {
        name: "Named-Interview Preparation",
        description:
          "Compressed preparation for a specific upcoming interview — Today, Newsnight, Sky News, podcast feature. Two to three sessions inside the run-up window.",
      },
      {
        name: "Crisis Media Readiness Programme",
        description:
          "Structured programme for organisations preparing senior figures for crisis-media readiness. Multi-spokesperson, scenario-based, with documented protocols for live activation. Quoted in proposal.",
      },
    ],
    caseSnapshot:
      "The CEO of a mid-cap consumer business was called on Today the morning after a difficult set of half-year results, with ninety minutes' notice and a hostile presenter. One pre-session by video the night before: three bridging lines, two soundbites, the discipline of finishing every answer with the message rather than the defence. The clip that travelled was the executive's line — not the question. The work was three hours total. The reputation it protected was the next year of the business.",
    faqs: [
      {
        question: "Do you train for hostile interviews specifically?",
        answer:
          "Yes — and at length. Hostile interview rehearsal is the core of any senior media training day. We rehearse the actual hostile questions you are likely to face, drill the bridging and reframing techniques that protect the message, and run the full interview under condition with playback. By the end of the day you will have handled at least three full hostile interviews and watched yourself back on each.",
      },
      {
        question: "Can you prepare me for a specific upcoming interview at short notice?",
        answer:
          "Yes — and this is one of the most common engagements we run, often inside twenty-four to seventy-two hours of the broadcast. We work from the producer brief, anticipate the questions, build the soundbites and rehearse to performance level in the time available. Video sessions are used where time does not permit in-studio work.",
      },
      {
        question: "Will you cover both television and podcast?",
        answer:
          "Yes — and the two are coached differently because the mediums work differently. Television rewards soundbite discipline and visible composure; long-form podcast rewards narrative pace, the use of silence and the willingness not to over-answer. Most senior clients now need to be good at both, and the work treats them as distinct disciplines.",
      },
      {
        question: "Do you work with crisis communications teams?",
        answer:
          "Yes. For organisations preparing senior figures for crisis-media readiness we run multi-spokesperson programmes with scenario-based rehearsal and documented protocols for live activation. This typically combines a media training day with named-spokesperson 1:1 work and a written readiness pack.",
      },
      {
        question: "What is the investment?",
        answer:
          "Full broadcast media training days are £7,000. Named-interview preparation £1,800–£3,500 depending on number of sessions and timing. Crisis media readiness programmes quoted in proposal based on number of spokespeople and scope. A written proposal is issued within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "You're going on Today, Newsnight, Sky or a major podcast and you want to land it",
      "Previous footage of you does not match the version of you you intend",
      "Hostile or interruptive interviewers throw you off your line",
      "Down-the-line and remote interviews feel flat and underpowered",
      "You over-answer, qualify too much and lose the soundbite",
      "You're representing the organisation in a crisis and need to be performance-ready",
      "A previous media training day produced a certificate and no durable change",
      "You want training in studio conditions, not a meeting room",
    ],
    workOn: [
      "Studio-condition camera and microphone presence",
      "Soundbite and bridging discipline",
      "Hostile interview rehearsal and reframing techniques",
      "Down-the-line and remote broadcast performance",
      "Long-form podcast structure and pacing",
      "Voice, breath and pace specific to broadcast conditions",
      "Crisis and reactive media readiness",
      "Self-shot and corporate video performance",
    ],
  },

  // -------------------------------------------------------------------------
  "interview-lost": {
    introExtended:
      "Interview performance is decided by communication craft as much as by underlying credentials. The shortlist proves the credentials; the interview decides the appointment. Two equally qualified candidates with identical CVs will perform unequally in the room, and the more articulate one will be appointed. Senior interview formats — partner panel, board-level appointment, regulator hearing, ambassadorial vetting, executive search — make the asymmetry sharper.\n\nWhat fails in interview communication is consistent. Opening answers that recite the CV rather than narrate it. STAR answers that drift into four-minute monologues. Hostile or competency-frame questions that land on defensive reflex. Question handling that gives away the candidacy by over-explaining the weakness. Closing answers that fail to use the room's last opportunity. The candidate walks out replaying the answer they would have given.\n\nThis coaching is built for senior interview candidates — partner candidacy, executive appointments, board appointments, consultant interviews in medicine, senior public-sector appointments, regulator and ambassadorial vetting. The work is interview architecture, opening and closing answer craft, competency-frame and behavioural answer discipline, hostile question rehearsal and the full performance preparation that turns a strong CV into an offered role.",
    whyMatters:
      "Interview outcomes are leveraged and durable. A successful appointment opens the next decade of the candidate's career. An unsuccessful one closes a specific opportunity and shapes the candidate's narrative — internally and externally — for the next round. The coaching investment is small against the opportunity and large against the average candidate's preparation level.\n\nFor employers and panels the same applies in reverse. The most communicative candidate at panel is frequently the one appointed even where they are not the most substantively qualified. This is rarely acknowledged in panel feedback and is consistently visible in outcomes.",
    approach:
      "The work is structured. Architecture — interview question typology, opening and closing answer craft, the STAR answer discipline that fits sixty to ninety seconds and lands. Delivery — voice, pace, composure, the physical presence that reads as the seniority of the role. Performance — full mock interviews with the coach playing the panel, recorded, debriefed, then run again. By the day of the interview the candidate has performed the interview three or four times under condition, not once.\n\nThe doctrine — what to say, how to say it, how to own it — applies fully. We use the candidate's actual interview brief, the actual likely panel composition, the actual competency framework if published, the actual presentation element if required. Sessions are 1:1, in person in London or via video, under strict confidentiality. For senior public, regulator and judicial appointments we coordinate with the relevant search consultants where appropriate.",
    outcomes: [
      "Opening answers that narrate the candidacy rather than recite the CV",
      "Competency-frame answers that fit sixty to ninety seconds and land",
      "Composure under hostile and adversarial questioning",
      "Handling of weakness questions that protects the candidacy",
      "Closing answers that use the room's last opportunity",
      "Performance under condition by the day of the interview",
    ],
    formats: [
      {
        name: "Senior Interview Intensive",
        description:
          "Three to six sessions inside the run-up window to a named interview. Architecture, delivery, full mock interview under condition. The default for a specific upcoming appointment.",
      },
      {
        name: "Consultant Interview Programme",
        description:
          "Specialist programme for medical consultant interview candidates. Includes presentation, panel and clinical-scenario components, with three to four sessions inside the interview window.",
      },
      {
        name: "Executive Appointment Programme",
        description:
          "Extended programme for candidates in executive search processes (Board, CEO, C-suite). Combines interview craft with broader executive communication work. Quoted in proposal.",
      },
    ],
    caseSnapshot:
      "A salaried partner at a Magic Circle firm, technically formidable and consistently passed over at internal equity panels, came in four months before the next round. Six sessions plus two pre-panel intensives: rebuilt opening narrative, drilled the eight hostile partner questions to answer-fit, rehearsed the closing answer. The promotion landed in the next round. The candidacy and the technical record had not changed; the way the panel read them had.",
    faqs: [
      {
        question: "How is this different from generic interview coaching?",
        answer:
          "Most interview coaching is graduate-level or middle-management generic. This is calibrated to senior appointment interviews — partner candidacy, executive search, board appointments, consultant interviews, senior public-sector and regulator appointments. The pace, the format and the standard are entirely different and so is the coaching.",
      },
      {
        question: "Can you prepare me for a specific upcoming interview?",
        answer:
          "Yes — and named-interview intensives are the default format. We work from the role brief, the published competency framework if any, the likely panel composition and the format of the interview itself (panel, presentation, scenario, clinical case). The preparation is paced backwards from the date.",
      },
      {
        question: "Is the work confidential?",
        answer:
          "Yes — at the highest standard. Many candidates do this work while still in role with their current employer and confidentiality is non-negotiable. All sessions one-to-one, no observers, no reference to the work outside the studio, invoices issued personally rather than to the candidate's current employer where preferred.",
      },
      {
        question: "Will you give me feedback on whether I should take the role if offered?",
        answer:
          "No. The work is to maximise your performance at interview so the choice is yours to make. We do not advise on the merits of the role itself, the negotiation of the offer terms (other than communication craft if requested) or the longer-term career strategy. Those are properly the province of you, your mentor and where relevant your search consultant.",
      },
      {
        question: "What is the investment?",
        answer:
          "Senior interview intensives £1,800–£3,500 depending on number of sessions and timeline. Consultant interview programmes from £2,150 (CPD-accredited). Executive appointment programmes quoted in proposal. Invoicing personal or corporate as the candidate prefers.",
      },
    ],
    problems: [
      "A senior appointment interview is imminent and you want the delivery to match the candidacy",
      "Internal panels have appointed less qualified but more articulate candidates",
      "Opening answers recite the CV rather than narrate the candidacy",
      "Competency-frame answers drift into four-minute monologues",
      "Weakness questions are giving away the candidacy",
      "Hostile or adversarial questioning lands on defensive reflex",
      "You've been told you 'interview as junior to your CV'",
      "You want a coach who treats senior interviews as the high-stakes performance they are",
    ],
    workOn: [
      "Interview architecture and question typology",
      "Opening and closing answer craft",
      "STAR and competency-frame answer discipline",
      "Hostile and adversarial question rehearsal",
      "Weakness-question handling",
      "Presentation and scenario components where required",
      "Voice, pace and physical presence at the seniority of the role",
      "Full mock interview under condition",
    ],
  },

  // -------------------------------------------------------------------------
  "wedding-lost": {
    introExtended:
      "A wedding speech is the highest-pressure public-speaking moment most non-professional speakers ever face. The room is partial, the moment is personal, the recording is permanent, and the speaker has a single chance to deliver something the couple and the room will remember warmly for the rest of their lives. Most speakers — fathers of the bride, fathers of the groom, mothers, best men, best women, brides and grooms themselves, friends asked to officiate — prepare alone and walk into the moment hoping for the best.\n\nWhat fails when wedding speeches fail is rarely affection. It is craft and nerve. Opening minutes spent on housekeeping and thanks the room is politely sitting through. Anecdotes that land for the speaker and not the room. Jokes that travel less well than the speaker hoped. Pace that races past the emotional beats. The toast at the end delivered by someone whose hands are shaking and whose voice has thinned with adrenaline.\n\nThis coaching is built for any wedding speaker — fathers, mothers, partners, best men and best women, brides, grooms and officiants — who wants the speech to land warmly and to be delivered by a calm version of themselves. The work is speech architecture, story selection, joke and anecdote discipline, nerve management and the rehearsal that means the day itself is performance rather than improvisation.",
    whyMatters:
      "Wedding speeches are remembered. The couple will hear theirs replayed for the rest of their married life. The room will quote it back at weddings for years. The recording will outlive the wedding. There is no rerun. The asymmetry between effort and outcome is genuine: a relatively small amount of coaching effort produces a speech the speaker and the couple will remember well, and the absence of it produces one that the speaker spends years quietly regretting.\n\nFor nervous speakers in particular the cost of underperformance is internal as well as external. A wedding speech that goes badly stays with the speaker as a personal narrative. The same speech, delivered by a properly prepared version of the same speaker, becomes a small moment of pride.",
    approach:
      "The work is paced kindly and structured exactly. Initial session: stories, themes, the couple, what the speech needs to do. Then architecture — opening, story selection, the laugh-and-warm rhythm, the toast. Then rehearsal — full deliveries with structured feedback, then nerve management work, then full rehearsal again. For most speakers four sessions across the run-up window is the right shape; for highly nervous speakers we extend the rehearsal arc.\n\nThe doctrine — what to say, how to say it, how to own it — applies fully and gently. Sessions are 1:1, in person in London or via video. Many wedding clients work entirely online and the format is unaffected. By the day of the wedding the speech is the third or fourth time the speaker has delivered it under condition, not the first.",
    outcomes: [
      "A speech the couple will quote back for years",
      "An opening that earns the room inside the first thirty seconds",
      "Stories chosen so they land for the room and not just the speaker",
      "Jokes and anecdotes paced for the laugh to land",
      "A toast delivered by a calm version of the speaker",
      "The recording that the speaker is glad to watch back",
    ],
    formats: [
      {
        name: "Wedding Speech Programme",
        description:
          "Four-session programme paced to the wedding date. Architecture, rehearsal, nerve management and full delivery under condition. The default for most wedding speakers.",
      },
      {
        name: "Pre-Wedding Intensive",
        description:
          "Compressed preparation inside the last two to three weeks before the wedding. Three sessions, fully focused on the live speech, with full rehearsal and nerve management.",
      },
      {
        name: "Nervous Speaker Programme",
        description:
          "Extended programme for highly nervous speakers — typically six to eight sessions across two months. Graduated rehearsal and structured nerve management built in.",
      },
    ],
    caseSnapshot:
      "The father of the bride at a London wedding, a senior surgeon who had presented at international conferences for thirty years and was newly terrified by the prospect of his only daughter's wedding, came in six weeks before the day. Five sessions: architecture, story selection, full rehearsal under condition, nerve management. The speech ran. The mother of the bride's note afterwards was the test of the work: 'He sounded like himself, only more so.'",
    faqs: [
      {
        question: "I've never given a speech before — is this for me?",
        answer:
          "Yes — and most wedding clients are in exactly that position. The work is paced for non-professional speakers and the kindness of the room is treated as part of the equation. Most clients describe the experience as discovering they were capable of more than they expected. Many continue to other public-speaking work afterwards.",
      },
      {
        question: "I'm very nervous — can the work help with that?",
        answer:
          "Yes. For highly nervous speakers we extend the programme to include graduated rehearsal under condition and structured nerve management. The day of the wedding becomes the third or fourth time the speech has been delivered under condition, which is the most reliable nerve antidote there is.",
      },
      {
        question: "Can the sessions be online?",
        answer:
          "Yes — and approximately half of wedding clients work entirely online. The format is unaffected. We can also include a final in-person rehearsal at the studio in the week of the wedding where geography allows and the client prefers.",
      },
      {
        question: "Will you write the speech for me?",
        answer:
          "No. The speech is yours and the stories are yours. We will help you shape what you bring — choose the right stories, structure them so they land, edit the bits that are not serving the speech, pace the laughs and the emotional beats — but the words remain unmistakably yours. A speech written for the speaker does not sound like the speaker, and the room knows.",
      },
      {
        question: "What does this cost?",
        answer:
          "Wedding speech programmes from £900 for four sessions. Pre-wedding intensives £750–£1,200. Nervous speaker programmes from £1,500. Invoicing personal. Concessionary rates are not normally applied to wedding work but please raise specific circumstances in the initial conversation.",
      },
    ],
    problems: [
      "You're giving a wedding speech and the prospect is genuinely keeping you awake",
      "You've started writing it three times and abandoned three drafts",
      "You don't know which stories will land for the room and which won't",
      "Your jokes work in the pub and you're not sure they'll travel",
      "You've watched recordings of yourself before and you don't like what you see",
      "You want the speech to be the moment the couple remember warmly",
      "You're a confident public speaker professionally and this one has unnerved you",
      "You want it done well, once, and not regretted afterwards",
    ],
    workOn: [
      "Speech architecture and the right opening",
      "Story selection that lands for the room",
      "Joke and anecdote pacing",
      "The emotional beats and the toast",
      "Voice and pace under the day's adrenaline",
      "Nerve management work",
      "Full rehearsal under condition before the day",
      "Confidence to deliver from a calm version of yourself",
    ],
  },

  // =========================================================================
  // SPECIALIST
  // =========================================================================
  "lawyers-lost": {
    introExtended:
      "Legal communication is performance under adversarial conditions. Advocacy in court, tribunal and arbitration; partner-panel pitches and beauty parades; client meetings with sophisticated commercial counterparties; partnership candidacy panels; expert evidence under cross-examination. Each is a performance and each is performed by professionals whose formal training in delivery ended at Bar school or somewhere short of it.\n\nWhat fails when legal communication fails is rarely the law. It is the delivery. Submissions that bury the strongest point on page nine when it should have been on page one. Cross-examinations that ask the question they hoped for and not the question that lands the answer. Client meetings where the technical capability is delivered as a memorandum rather than as counsel. Partnership candidacy where the more articulate associate is preferred to the more capable one. Expert evidence dismantled by counsel because the witness had never rehearsed the cross.\n\nThis coaching is built for barristers, solicitors, in-house counsel, judges in waiting, expert witnesses and senior legal professionals across the bar and the firms. The work is advocacy, client communication, partner candidacy, tribunal and arbitration performance, expert evidence preparation and the specific delivery work that turns legal capability into legal authority.",
    whyMatters:
      "At the bar, advocacy is the visible output of the practice. Strong advocacy wins instructions, builds reputation, secures silk, attracts the next set's interest. Weak advocacy loses cases the law would have won. The asymmetry is direct and unforgiving. The same applies in the firms: the senior associate whose client meetings read as counsel is the one offered partnership; the one whose meetings read as memoranda is not.\n\nFor expert witnesses and witnesses in regulatory proceedings, the cost of under-preparation is asymmetric in the other direction: testimony dismantled in cross-examination becomes the matter of public record permanently. Trained preparation is the only insurance.",
    approach:
      "The work is calibrated to legal conditions. For advocacy: structure of submissions, the discipline of front-loading the strongest point, voice and pace for the court or tribunal, the management of the bench's attention, opening and closing speech craft. For cross-examination: the difference between questions that hope and questions that close, pace control, the use of silence. For client and partner communication: the move from technical delivery to counsel-grade voice. For expert evidence: full mock cross-examination under condition.\n\nSessions are 1:1, in person in London or via video, under strict legal-professional confidentiality. The doctrine — what to say, how to say it, how to own it — applies fully and is tested against the standards of the bar and the senior end of the firms. Where appropriate the work is CPD-accredited and certified hours map to SRA or BSB CPD requirements.",
    outcomes: [
      "Submissions front-loaded so the strongest point lands first",
      "Cross-examination that asks the question that lands the answer",
      "Voice and pace calibrated to court, tribunal and arbitration conditions",
      "Client meetings that deliver counsel rather than memoranda",
      "Partnership panel performance at the level of the candidacy",
      "Expert evidence prepared under full mock cross-examination",
    ],
    formats: [
      {
        name: "Legal 1:1 Programme",
        description:
          "Six-session 1:1 programme covering advocacy, client communication, partner candidacy or expert-evidence preparation depending on the practitioner's focus. CPD-accredited where required.",
      },
      {
        name: "Named-Hearing Intensive",
        description:
          "Compressed preparation for a specific upcoming hearing, tribunal, arbitration or partnership panel. Two to four sessions inside the run-up window.",
      },
      {
        name: "Chambers or Firm Workshop",
        description:
          "Half-day or full-day workshop for chambers, practice groups or firm partner teams. Built around live advocacy and client communication standards. From £7,000 per day.",
      },
    ],
    caseSnapshot:
      "A junior silk preparing for a Court of Appeal listing on a finely balanced commercial appeal had the law, the brief and a tendency in conference to bury the strongest argument. Five sessions across three weeks: rebuilt submission architecture, drilled opening minutes of oral argument, rehearsed the eight likely interventions from the bench. The appeal succeeded on the principal ground. The lay client's note afterwards used the phrase 'I have never heard our case put that well'. The law had not changed. The advocacy had.",
    faqs: [
      {
        question: "Is this work CPD-accredited?",
        answer:
          "Yes. Our 1:1 and group programmes for legal practitioners are accredited by the CPD Certification Service, with certified hours that map to BSB (bar) and SRA (solicitor) CPD requirements. End-of-programme certificates are structured to support direct recording into your annual CPD return.",
      },
      {
        question: "Will the coach understand legal practice?",
        answer:
          "We do not coach on the law and do not substitute for instructing solicitors, leading counsel, or the candidate's own preparation. We coach the delivery of legal work. The coach has worked with members of the bar, partners in firms, in-house counsel and judges in waiting for many years and has a working understanding of the structures (Magistrates', Crown, Family Court, tribunal, arbitration, appellate) the work operates inside.",
      },
      {
        question: "Is the work confidential?",
        answer:
          "Yes — and to the standards legal practice requires. All sessions one-to-one, under strict legal-professional NDA, footage destroyed at engagement completion. For matters subject to legal privilege we structure the work so that any case material discussed remains within the protections the practitioner is required to maintain.",
      },
      {
        question: "Do you work with chambers and firms as well as individuals?",
        answer:
          "Yes. Chambers and firm workshops are a frequent format, particularly around junior tenant training, partnership-track development, advocacy refreshers and client-pitch preparation. We can also deliver bespoke programmes for practice groups around specific commercial or contentious work.",
      },
      {
        question: "What is the investment?",
        answer:
          "Legal 1:1 programmes from £2,150 for six sessions (CPD-accredited). Named-hearing intensives £1,800–£3,500. Chambers and firm workshops from £7,000 per day. A written proposal is issued within forty-eight hours of an initial conversation.",
      },
    ],
    problems: [
      "Submissions are burying the strongest point and the bench is missing it",
      "Cross-examination is asking the question that hopes rather than the question that lands",
      "Client meetings are delivering memoranda when counsel is what the client wants",
      "Partner panel performance is below the candidacy",
      "Expert evidence is being dismantled in cross because the cross was not rehearsed",
      "Voice and pace don't hold in court, tribunal or arbitration conditions",
      "You're preparing for silk and the advocacy needs to lift",
      "You want a coach who treats legal communication as advocacy, not presentation",
    ],
    workOn: [
      "Submission architecture and front-loading discipline",
      "Cross-examination question craft and pace",
      "Opening and closing speech construction",
      "Voice and pace for court, tribunal and arbitration",
      "Client meeting communication at counsel grade",
      "Partner candidacy and panel performance",
      "Expert evidence preparation and mock cross",
      "CPD-accredited training for bar and solicitor CPD records",
    ],
  },

  // -------------------------------------------------------------------------
  "teachers-lost": {
    introExtended:
      "Teaching is one of the highest sustained vocal loads in any profession. Five to seven hours of projected voice across a school day, multiplied across a year, multiplied across a career — and the voice almost no teacher was trained to use. The result is the most consistent occupational voice-injury rate of any profession: hoarseness, vocal fatigue, recurring throat infections, and at the senior end, full vocal failure that takes teachers out of the classroom for weeks at a time.\n\nWhat fails in self-managed teaching voice is consistent and predictable. Volume is produced from the throat rather than from breath support, which damages the instrument incrementally over years. Pitch settles into a narrow band that flattens engagement and tires the speaker. There is no warm-up. There is no recovery protocol. The voice is used until it gives out and then rested until it returns, with no work done to prevent the next cycle.\n\nThis coaching is built for teachers, school leaders, university lecturers, training and development professionals and anyone whose role involves sustained projected vocal use. The work is voice health — breath support, projection without strain, range, stamina, warm-up and recovery protocols — combined with the structural communication craft that makes teaching itself more effective.",
    whyMatters:
      "For teachers, voice is the instrument of the role. Damaged voice does not just hurt the teacher; it limits the teaching. The teacher whose voice is tiring at three p.m. is teaching less effectively in the last lesson than in the first. The teacher who has lost voice for the third time this academic year is missing teaching time their students cannot fully recover. Trained voice prevents this and produces a voice that lasts the career.\n\nFor school leaders the same applies in larger rooms — assemblies, parent meetings, public speaking on behalf of the school, governor meetings, inspection contexts. The voice that holds a classroom does not automatically hold a hall, and the leadership voice is a separate piece of work.",
    approach:
      "The work is technical and applied to the classroom and the hall. Breath support — the diaphragmatic mechanics that produce projection without throat strain. Resonance — opening the chest, mask and head resonance that carries voice without forcing it. Range — extending pitch range so engagement does not flatten and the voice does not tire. Stamina — voice care, warm-up routines, recovery protocols. Then application: classroom delivery, assembly voice, parent meeting voice, leadership voice in larger rooms.\n\nSessions are 1:1, in person in London or via video, and where appropriate include in-school visits to observe the teacher delivering and provide structured feedback against the room conditions. The doctrine — what to say, how to say it, how to own it — applies fully and is calibrated to the specific communication demands of education. CPD-accredited where required.",
    outcomes: [
      "Voice that holds across the full teaching day without tiring",
      "Projection without throat strain or vocal injury",
      "Pitch range that holds engagement across long lessons",
      "Voice care and recovery protocols for sustained use",
      "Assembly and hall voice for school leadership",
      "Reduced incidence of vocal failure and time out of the classroom",
    ],
    formats: [
      {
        name: "Teacher Voice Programme",
        description:
          "Six-session 1:1 programme covering breath, resonance, range, stamina and voice care, applied to the classroom and the hall. CPD-accredited.",
      },
      {
        name: "School Leadership Programme",
        description:
          "Programme for headteachers, deputies and senior leadership. Assembly and hall voice, parent and governor meeting communication, inspection-context delivery. Quoted in proposal.",
      },
      {
        name: "Whole-School INSET Workshop",
        description:
          "Half-day or full-day INSET workshop for full staff bodies. Voice health, classroom delivery and sustainability. Delivered on-site. From £7,000 per day.",
      },
    ],
    caseSnapshot:
      "A head of department at an inner-London secondary school had lost voice three times in the previous academic year and was facing the prospect of a sustained leave of absence on medical advice. Six sessions across two months: breath support, resonance work, voice care and warm-up routines. The next academic year ran without vocal failure. The teacher's GP record showed no further laryngeal referrals. Her note afterwards was the test of the work: 'I am still teaching the same lessons. My voice is no longer the limiting factor.'",
    faqs: [
      {
        question: "Is this safe for a voice that is currently damaged or recovering?",
        answer:
          "Yes — and is in fact one of the safest things you can do for a vocally injured teaching voice. The work is built around breath support and resonance so that volume comes from the body rather than the throat, which is the protective mechanism. For teachers with active ENT or laryngology input we coordinate with the clinician and pace the work accordingly.",
      },
      {
        question: "Can this work be funded through CPD budgets?",
        answer:
          "Often, yes. Many schools and trusts allocate CPD or professional-development budget that can fund this work, particularly where the teacher has a documented voice issue or the school has identified voice across the staff body as a development priority. Our programmes are CPD-accredited and certificates are structured to support funding submissions.",
      },
      {
        question: "Do you offer whole-school training?",
        answer:
          "Yes. Whole-school or whole-department INSET workshops are a frequent format, particularly for schools where voice issues are widespread or where the staff body has not previously had structured voice training. Day-rate £7,000, with multi-day programmes for larger trusts quoted in proposal.",
      },
      {
        question: "Will you visit my classroom?",
        answer:
          "Where geography and the school allow, yes. In-classroom observation is one of the most effective parts of the work for teachers because it allows feedback against the actual conditions, the actual room and the actual lesson dynamics. For schools outside London we typically deliver online with video of the teacher's own classroom for the observation work.",
      },
      {
        question: "What is the investment?",
        answer:
          "Teacher voice programmes from £1,800 for six sessions (CPD-accredited from £2,150). School leadership programmes quoted in proposal. Whole-school INSET workshops from £7,000 per day. We can structure invoicing to the school, trust or individual as required.",
      },
    ],
    problems: [
      "Your voice is hoarsening or failing repeatedly across the academic year",
      "Volume is being produced from the throat and you can feel the strain",
      "Engagement drops in the last lesson because the voice has tired",
      "You're a school leader and the assembly hall is too big for your current voice",
      "You've had time out of the classroom for voice issues and want to prevent the next round",
      "The staff body has widespread voice issues and the school wants to address them",
      "You're newly into leadership and the larger-room voice isn't yet developed",
      "You want a voice that lasts the career",
    ],
    workOn: [
      "Diaphragmatic breath support for projection without strain",
      "Chest, mask and head resonance",
      "Pitch range across long teaching days",
      "Voice care, warm-up and recovery protocols",
      "Classroom delivery and engagement craft",
      "Assembly and hall voice for school leadership",
      "Parent meeting and governor communication",
      "CPD-accredited training for individual or whole-school records",
    ],
  },

  // -------------------------------------------------------------------------
  "creators-lost": {
    introExtended:
      "Content creator communication is high-volume and audience-direct. The successful creator delivers across video, podcast, livestream, written social and brand-partnership content, and is judged in real time on the metrics each medium produces. Most creators have built their following through instinct and consistency and have never had structured communication coaching on the specific delivery patterns that determine retention, engagement and conversion at scale.\n\nWhat fails when creator communication fails is medium-specific and increasingly visible. Hook discipline that loses the first three seconds of a video. Pacing that holds for thirty seconds and not for ninety. On-camera presence that reads as effortful rather than easy. Podcast long-form that drifts past the twenty-minute mark. Brand-integration delivery that breaks the voice the audience came for. Live performance that flattens compared to the edited version.\n\nThis coaching is built for established and emerging creators — YouTubers, podcasters, TikTok and Reels creators, livestreamers, professional commentators with a sustained content output, and brand-facing creators monetising through partnerships and direct audience relationship. The work is on-camera presence, hook and retention craft, podcast and long-form delivery, livestream performance, brand-integration discipline and the specific work that lifts creator metrics measurably.",
    whyMatters:
      "For creators, communication is the product. Every retention point, every subscriber, every brand partnership renewal is downstream of how the creator delivers. Small percentage lifts in average view duration, episode completion, livestream concurrent or click-through compound into substantial annual revenue. The leverage of coached communication craft in this domain is direct and measurable.\n\nThe inverse is also true. Plateaued creators frequently plateau on delivery patterns they cannot self-diagnose because the metrics show the symptom rather than the cause. Outside coaching surfaces what the analytics cannot: which delivery patterns are losing the audience and what would replace them.",
    approach:
      "The work is medium-specific and metrics-aware. Hook craft — the first three seconds, the opening pattern that earns retention. On-camera presence — voice, pace, eye-line discipline for camera, the difference between recorded and live delivery. Podcast long-form — the use of silence, the discipline of not over-explaining, the architecture of an episode the audience finishes. Livestream — the energy curve, the audience-interaction discipline, the moments where the stream wins or loses concurrent viewers. Brand integration — delivery that protects the creator's voice rather than breaking it.\n\nSessions are 1:1, in person in London or via video, with structured review of the creator's actual recent output. Many creators work entirely online for operational reasons. The doctrine — what to say, how to say it, how to own it — applies fully and is calibrated to the audience-direct, metrics-visible reality of the work.",
    outcomes: [
      "Measurable lift in average view duration and retention metrics",
      "Hook discipline that holds the first three seconds",
      "On-camera presence that reads as easy rather than effortful",
      "Podcast long-form that holds the audience past the twenty-minute mark",
      "Livestream performance that holds concurrent viewers across the curve",
      "Brand-integration delivery that protects the creator's voice",
    ],
    formats: [
      {
        name: "Creator 1:1 Programme",
        description:
          "Six-session programme covering hook craft, on-camera presence, long-form delivery and brand-integration. Built around the creator's live output and metrics. The default for established and serious emerging creators.",
      },
      {
        name: "Named-Campaign Intensive",
        description:
          "Compressed preparation for a specific upcoming campaign, brand launch, podcast series launch or major collaboration. Two to four sessions inside the run-up window.",
      },
      {
        name: "Creator Team Programme",
        description:
          "Programme for multi-host channels, creator-led businesses with multiple on-camera principals, or talent rosters. Combines individual coaching with team consistency work. Quoted in proposal.",
      },
    ],
    caseSnapshot:
      "A YouTuber with eight hundred thousand subscribers and an average view duration plateaued at four minutes thirty across her finance-explainer format came in between content cycles. Six sessions: hook rebuild, pacing recalibration, on-camera eye-line work and the close that drove subscription. The next quarter's published videos averaged six minutes twenty AVD on comparable lengths. Subscriber net-adds doubled. The format had not changed. The delivery had.",
    faqs: [
      {
        question: "Will the coach understand the creator economy?",
        answer:
          "We do not coach on platform strategy, monetisation, or channel growth strategy. We coach the delivery layer that determines whether the content lands. The coach has worked with creators across YouTube, podcast, TikTok and livestream platforms over several years and has a working understanding of the metrics each medium produces. Platform and growth strategy remain yours and your manager's; delivery craft is ours.",
      },
      {
        question: "Can the work be done online?",
        answer:
          "Yes — and approximately half of creator clients work entirely online. Sessions are typically recorded on the creator's actual set-up, which is the most effective format for medium-specific coaching. Many creator clients are international and work entirely online for that reason.",
      },
      {
        question: "Will you give me feedback on my analytics?",
        answer:
          "Yes — analytics review is part of the work. We will review your retention curves, completion rates and engagement metrics to identify the specific delivery patterns that are working and the ones that are not. The coaching is then targeted at the specific patterns the analytics surface, which is why measurable lift typically appears inside one to two publishing cycles.",
      },
      {
        question: "Do you work with brand-integration coaching specifically?",
        answer:
          "Yes. Brand-integration delivery is one of the most common pieces of work, particularly for creators where the partnership revenue is becoming a substantial share of total income. The work is to deliver integrations in a way that protects the creator's voice and the audience's trust — which is the only way the partnerships continue to renew.",
      },
      {
        question: "What is the investment?",
        answer:
          "Creator 1:1 programmes from £1,800 for six sessions. Named-campaign intensives £1,800–£3,500. Creator team programmes quoted in proposal. Invoicing personal or to the creator's business as preferred.",
      },
    ],
    problems: [
      "Average view duration is plateaued and you don't know which delivery patterns are costing you",
      "The first three seconds aren't holding and retention is bleeding out of the hook",
      "On-camera presence reads as effortful rather than easy",
      "Podcast long-form drifts past the twenty-minute mark and completion drops",
      "Livestream concurrent viewers are dropping across the curve",
      "Brand integrations are breaking the voice the audience came for",
      "Subscriber net-adds are slowing on output the channel previously grew on",
      "You want a coach who treats creator work as a delivery discipline with measurable metrics",
    ],
    workOn: [
      "Hook craft and the first three seconds",
      "On-camera presence, voice and eye-line discipline",
      "Pacing for short-form and long-form video",
      "Podcast long-form architecture and silence discipline",
      "Livestream energy curve and concurrent retention",
      "Brand-integration delivery that protects the creator voice",
      "Analytics-driven coaching against retention and engagement metrics",
      "Multi-host and creator-team consistency",
    ],
  },

  // -------------------------------------------------------------------------
  "children-present-lost": {
    introExtended:
      "We teach children how to talk. How to speak. How to inform. How to debate and discuss. How to present. How to represent and how to be present. How to be fluent, eloquent, articulate and appropriate. We coach communication. We curate confidence. We cultivate character.\n\nMost parents come to this work somewhere between the kindly worded note from school and the audition that is now four weeks away. The child has the words. The child has the ideas. What is missing is the deliberate, exact training that converts a bright young mind into a young speaker — one who can walk into a room, hold an eye line, breathe through a sentence and trust that their voice is welcome.\n\nThis coaching is built for young speakers aged eight to seventeen. Bespoke 1:1 sessions in articulation, fluency, presentation, scholarship interview preparation, debate and the quiet character work that makes the rest of it possible. Sessions are warm, structured and respectful — children retain what they have rehearsed under skilled, kind, exact attention.",
    whyMatters:
      "Communication confidence at this age sets the floor for everything that follows: classroom participation, friendships, secondary school interviews, debate, drama, scholarship auditions, the first time the child has to introduce themselves to a room of new peers. A child who learns now that their voice is welcome and capable carries that finding into adolescence; a child who learns the opposite carries the opposite finding into adolescence.\n\nPresenting, representing and being present are not optional skills any more. They are the skills your child will use in every classroom, every interview, every team and every stage they walk on to. Coaching now is the difference between a teenager who steps forward and a teenager who waits to be asked.",
    approach:
      "The work is gentle, exact and built around the individual child. Initial assessment identifies the specific articulation, fluency or presentation target — and the parent is given a clear written summary. Sessions then build the skill in question through structured games, scripts, recordings and graduated public-speaking exposure appropriate to the child's age. Progress is tracked session by session and shared with parents at the end of each block.\n\nWhere relevant, sessions integrate with school assessments, scholarship audition timelines, or specific upcoming public-speaking moments (assemblies, debates, end-of-year performances, interviews). The doctrine is the same as the adult work in a form a child can use: what to say, how to say it, how to own it — taught with patience, structure and the expectation that the child will surprise themselves.",
    outcomes: [
      "Class presentations and assemblies delivered with confidence, not dread",
      "Scholarship and senior school interview readiness",
      "Clear, age-appropriate articulation of target sounds",
      "Measurable reduction in disfluency frequency where stammer is present",
      "Eye contact, breath and posture that read as composure",
      "A young speaker who actually enjoys being listened to",
      "Parents with a clear written picture of what was worked on and why",
    ],
    formats: [
      {
        name: "1:1 Children's Coaching Programme",
        description:
          "Block of six sessions, typically weekly, designed around the child's specific presentation, articulation or fluency goals. Held at our London studio or via video for families outside London.",
      },
      {
        name: "Audition & Interview Preparation",
        description:
          "Compressed preparation for scholarship interviews, drama-school auditions, debate finals, school plays and public-speaking competitions. Tightly timed to the date and the brief.",
      },
      {
        name: "Family Online Programme",
        description:
          "Video-based programme for families abroad or outside London. Same structured approach, with parent updates after every session and a clear written progress summary at the end of each block.",
      },
    ],
    caseSnapshot:
      "A twelve-year-old preparing a scholarship interview for a senior school four weeks out, articulate at home and visibly braced under any direct question. Six sessions: introduction craft, the open question rehearsed eleven different ways, eye-contact exposure, breath under pressure. The interview was held. The offer arrived. The form teacher noted in passing that the child had volunteered to chair the next form debate.",
    faqs: [
      {
        question: "What age range do you coach?",
        answer:
          "Eight to seventeen. Sessions for younger children run thirty to forty minutes; older children typically work to a fifty-minute session. We cover articulation, fluency, presentation, debate, scholarship and senior school interview preparation, and the bilingual clarity work many families need.",
      },
      {
        question: "How is this different from school speech and drama?",
        answer:
          "School speech and drama is group-based and curriculum-driven. This is 1:1, built around your child's specific goals and the specific moments coming up — the assembly, the audition, the interview, the debate final. The coach is in the room with your child watching them do the actual work and making the specific adjustments that move them forward.",
      },
      {
        question: "Will I be involved as a parent?",
        answer:
          "Yes. Every session ends with a brief update. The end of each six-session block includes a written summary of what was worked on, what changed, and what to practise at home. For online sessions parents typically join the last five minutes. The work is on the child, the partnership is with the family.",
      },
      {
        question: "Can you prepare my child for a specific scholarship or senior school interview?",
        answer:
          "Yes — and this is one of the most common reasons families come to us in Years 5 to 8. Coaching covers how to introduce yourself, how to answer the open question, how to talk about your interests in a way that sounds genuine, and the eye contact and voice that make the interview land. Tightly tailored to the school and the round.",
      },
      {
        question: "What is the investment?",
        answer:
          "Children's six-session blocks start at £900 (£150 per session). Scholarship audition intensives and longer programmes are quoted on request. Video-based programmes are priced identically to in-studio sessions. Sibling rates are available where two children from the same family are coached concurrently.",
      },
    ],
    problems: [
      "Your child has plenty to say and shrinks the moment they're asked to say it",
      "Class assemblies, presentations or being called on are dreaded",
      "A scholarship interview or audition is coming up and the stakes are real",
      "Bilingual household — clearly articulate at home, markedly quieter at school",
      "Stammering or disfluency is becoming socially costly",
      "An academically able child is being read as shy and is paying for it",
      "School speech and drama hasn't moved the needle the way you hoped",
      "You want a coach who takes children seriously without patronising them",
    ],
    workOn: [
      "How to present — structure, opening, close and the quiet confidence between",
      "How to represent — speaking for school, team, debate or scholarship interview",
      "How to be present — voice, breath, eye contact and physical composure",
      "Articulation of target sounds, age appropriate",
      "Fluency strategies for children who stammer",
      "Reading aloud, assemblies and class presentations",
      "Audition, scholarship and senior school interview readiness",
      "Bilingual clarity and accent comfort",
    ],
  },
};
