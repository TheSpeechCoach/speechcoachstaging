import ServicePage from "@/components/ServicePage";

const ExecutiveCorporate = () => (
  <ServicePage
    metaTitle="Executive Speech Coach | Communication Coaching for Leaders & Teams | The Speech Coach"
    metaDescription="Executive speech and communication coaching for senior leaders, boards and corporate teams. Bespoke 1:1 and group programmes. Online and in-person."
    h1={
      <>
        Executive Communication Coaching for <span className="italic text-gradient-gold">Leaders Who Need to Be Heard.</span>
      </>
    }
    subheading="Bespoke coaching for senior professionals, board members and corporate teams — delivering real results in how you communicate, present and lead."
    intro="At the most senior levels, communication is everything. The ability to speak with clarity, gravitas and authority — to a board, an investor group, a large audience or a global team — is what separates good leaders from exceptional ones."
    problems={[
      "You're about to present to a board or investor group and want to be exceptional",
      "You're a strong leader but your communication style is holding you back",
      "You've received feedback that your delivery needs work",
      "Your team has a communication problem",
      "You're preparing for a conference, TEDx or keynote",
      "You want to speak with more gravitas and executive presence",
    ]}
    workOn={[
      "Executive presence — commanding a room",
      "Gravitas — sounding authoritative",
      "Board and investor presentation coaching",
      "Voice, pace, tone and delivery",
      "Handling questions under pressure",
      "Communicating complex ideas simply",
      "Preparation for media appearances",
    ]}
    extraBlocks={[
      {
        heading: "Individual coaching",
        intro: "Completely bespoke 1:1 coaching built around your specific goals. Confidential and focused.",
        items: [],
      },
      {
        heading: "Team workshops",
        intro: "Group sessions for teams of 5 to 50 people. Delivered online or in-person.",
        items: [],
      },
    ]}
    closingHeading="Get in touch to discuss your requirements."
    closing="Bespoke proposals within 48 hours."
    ctaLabel="Request a Proposal"
  />
);

export default ExecutiveCorporate;
