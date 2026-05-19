import ServicePage from "@/components/ServicePage";

const Negotiations = () => (
  <ServicePage
    metaTitle="Negotiation Communication Coaching | Speech Coach for Negotiations | The Speech Coach"
    metaDescription="Communication coaching for high-stakes negotiations. Develop verbal authority, persuasion and presence in commercial, legal and executive negotiations."
    h1={
      <>
        Lost the Advantage. Lost the Argument.{" "}
        <span className="italic text-gradient-gold">Lost the Deal.</span>
      </>
    }
    subheading="Now you're here. Communication coaching for high-stakes negotiations — where how you say it determines what you get."
    intro="Negotiation is a communication performance. The person who controls the room, the language, the pace and the silence controls the outcome. Whether you're negotiating commercial contracts, M&A transactions, employment terms or international agreements, your communication is your leverage."
    problems={[
      "Left value on the table in negotiations you should have won",
      "Struggle to hold your position under pressure",
      "They control the pace and frame of every conversation",
      "Want to project more authority and certainty when negotiating",
      "Preparing for a high-stakes commercial, legal or diplomatic negotiation",
      "Want to be more persuasive without being aggressive",
    ]}
    workOn={[
      "Verbal authority and control of the room",
      "Using silence, pace and emphasis as negotiating tools",
      "Handling pressure, ultimatums and difficult moments",
      "The language of persuasion and commitment",
      "Preparation and scenario rehearsal for specific negotiations",
      "Communicating certainty even when you feel none",
    ]}
    closingHeading="Control the room. Control the outcome."
    closing="Intensive coaching for senior professionals preparing for high-value negotiations."
    ctaLabel="Request a Consultation"
  />
);

export default Negotiations;
