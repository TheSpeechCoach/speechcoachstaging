import ServicePage from "@/components/ServicePage";

const TeamWorkshops = () => (
  <ServicePage
    metaTitle="Communication & Presentation Workshops for Teams | The Speech Coach"
    metaDescription="Expert-led communication and presentation skills workshops for teams of 5 to 50. Delivered in-person or online. Bespoke programmes available. Get a proposal today."
    h1={
      <>
        Lost the Message. Lost the Team. <span className="italic text-gradient-gold">Lost the Room.</span>
      </>
    }
    subheading="Now you're here. Corporate speech and communication training for teams that need to land their message — every time."
    intro="Your team might be full of brilliant people. But if they can't communicate their brilliance clearly — to clients, to leadership, to each other — that brilliance stays hidden."
    problemsHeading="Workshop topics"
    problems={[
      "Eliminating filler words across the team",
      "Presenting confidently to clients and leadership",
      "Communicating clearly on video calls",
      "Structuring messages for impact",
      "Speaking with authority at all levels",
      "Handling questions under pressure",
    ]}
    workOnHeading="Formats"
    workOn={[
      "Half-day (3hrs)",
      "Full-day (6hrs)",
      "Two-day intensive",
      "Online group sessions",
      "Ongoing monthly coaching",
    ]}
    extraBlocks={[
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
