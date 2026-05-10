import ServicePage from "@/components/ServicePage";

const TeamWorkshops = () => (
  <ServicePage
    seoTitle="Communication & Presentation Workshops for Teams | The Speech Coach"
    seoDescription="Expert-led communication and presentation skills workshops for teams of 5 to 50. Delivered in-person or online. Bespoke programmes available. Get a proposal today."
    canonicalPath="/team-workshops"
    tagline="The Speech Coach"
    headline="Help Your Team Communicate Like It Matters —"
    headlineAccent="Because It Does."
    subheading="Bespoke communication and presentation workshops for teams of 5 to 50. In-person, online or at your offsite — fully tailored to your team's needs."
    intro="Your team might be full of brilliant people. But if they can't communicate their brilliance clearly — to clients, to leadership, to each other — that brilliance stays hidden. Team communication workshops from The Speech Coach change that. Fast, practical and immediately applicable — your team will leave with tools they can use from the very next conversation."
    problemsHeading="What teams typically work on"
    problems={[
      "Eliminating filler words across the team — 'um', 'er', 'like', 'you know'",
      "Presenting with confidence to clients, senior stakeholders and leadership",
      "Communicating clearly on video calls and in hybrid meetings",
      "Structuring messages so they land with impact",
      "Speaking with authority and gravitas at all levels",
      "Handling questions under pressure",
    ]}
    workHeading="Workshop formats available"
    workItems={[
      "Half-day workshop (3 hours) — ideal for a focused single topic",
      "Full-day workshop (6 hours) — comprehensive team communication programme",
      "Two-day intensive — for teams with multiple areas to work on",
      "Online group sessions — for remote or distributed teams",
      "Ongoing team coaching — monthly sessions over a programme period",
    ]}
    extraSections={[
      {
        heading: "Who Books Team Workshops",
        content:
          "HR and L&D managers investing in their team's communication skills. Senior leaders wanting their direct reports to communicate at a higher level. Companies preparing for a major pitch, client event or conference. Professional services firms — law, finance, consulting, healthcare. International teams working in English as a second language.",
      },
    ]}
    closingHeading="Tell Us About Your Team."
    closingBody="We'll put together a bespoke proposal within 48 hours. No obligation."
  />
);

export default TeamWorkshops;
