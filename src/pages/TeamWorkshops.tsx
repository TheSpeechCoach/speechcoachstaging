import ServicePage from "@/components/ServicePage";

const TeamWorkshops = () => (
  <ServicePage
    metaTitle="Communication & Presentation Workshops for Teams | The Speech Coach"
    metaDescription="Expert-led communication and presentation skills workshops for teams of 5 to 50. Delivered in-person or online. Bespoke programmes available. Get a proposal today."
    h1={
      <>
        Help Your Team Communicate Like It Matters — <span className="italic text-gradient-gold">Because It Does.</span>
      </>
    }
    subheading="Bespoke communication and presentation workshops for teams of 5 to 50. In-person, online or at your offsite — fully tailored to your team's needs."
    intro="Your team might be full of brilliant people. But if they can't communicate their brilliance clearly — to clients, to leadership, to each other — that brilliance stays hidden."
    problems={[
      "Your team is full of brilliant people who can't always communicate it clearly.",
      "Presentations to clients or leadership fall flat.",
      "Filler words and rambling undermine your team on calls.",
      "People hold back instead of speaking with authority.",
      "Your team struggles to handle tough questions under pressure.",
      "You're preparing for a big pitch or conference and want everyone sharp.",
    ]}
    workOn={[
      "Eliminating filler words",
      "Presenting confidently to clients and leadership",
      "Communicating clearly on video calls",
      "Structuring messages for impact",
      "Speaking with authority at all levels",
      "Handling questions under pressure",
    ]}
    extraBlocks={[
      {
        heading: "Formats",
        items: [
          "Half-day (3hrs)",
          "Full-day (6hrs)",
          "Two-day intensive",
          "Online group sessions",
          "Ongoing monthly coaching",
        ],
      },
      {
        heading: "Who books our workshops",
        items: [
          "HR and L&D managers",
          "Senior leaders wanting their teams to communicate better",
          "Companies preparing for a pitch or conference",
          "Professional services firms",
          "International teams working in English",
        ],
      },
    ]}
    closingHeading="Tell us about your team."
    closing="We'll put together a bespoke proposal within 48 hours. No obligation."
    ctaLabel="Request a Proposal"
  />
);

export default TeamWorkshops;
