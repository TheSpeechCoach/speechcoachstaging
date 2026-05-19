import ServicePage from "@/components/ServicePage";

const Hospitality = () => (
  <ServicePage
    metaTitle="Speech Coaching for Hospitality Leaders | Executive Communication | The Speech Coach"
    metaDescription="Communication coaching for GMs, hotel executives and hospitality group leaders. Board presentations, investor communication and executive presence coaching."
    h1={
      <>
        Lost with the Board. Lost the Investment Case.{" "}
        <span className="italic text-gradient-gold">Lost the Room.</span>
      <br />
      <span className="italic text-gradient-gold">Now you're here.</span>
      </>
    }
    subheading="Speech coaching for hospitality leaders who run the room — and need to own the boardroom."
    intro="Hospitality is the industry of communication. But the skills that make an exceptional operator are different from what's required when presenting to ownership groups, investment boards or brand leadership. This coaching bridges that gap."
    problems={[
      "Presenting to owners or investors for the first time",
      "Leading a hotel group and need to communicate vision more effectively",
      "Operational expertise is strong but boardroom presentation needs work",
      "Representing brand at industry events and panels",
      "Being considered for a C-suite role",
    ]}
    workOn={[
      "Board and owner group presentation coaching",
      "Articulating commercial strategy and vision",
      "Executive presence for hospitality leaders",
      "Media and press preparation",
      "Conference keynote and panel coaching",
      "Communicating financial performance",
    ]}
    closingHeading="Own every room — not just the ones you designed."
    closing="Discreet, bespoke coaching for senior hospitality professionals."
    ctaLabel="Request a Proposal"
  />
);

export default Hospitality;
