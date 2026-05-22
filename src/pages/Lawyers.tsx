import ServicePage from "@/components/ServicePage";

const Lawyers = () => (
  <ServicePage
    metaTitle="Speech Coaching for Lawyers | Advocacy & Courtroom Communication | The Speech Coach"
    metaDescription="Communication and advocacy coaching for barristers, solicitors and legal professionals. Courtroom presence, tribunal preparation and legal communication."
    heroLines={[
      "Lost the Argument.",
      "Lost the Jury.",
      "Lost the Case.",
      "Now you're here.",
    ]}
    subheading="Advocacy coaching for legal professionals who need to do more than know the law."
    intro="Legal skill and advocacy skill are different things. The ability to construct a watertight argument is not the same as the ability to deliver one with the authority and presence that wins a room. Whether it's a court appearance, a tribunal, a client presentation or a media appearance, how you communicate is part of the outcome."
    problems={[
      "Advocacy is technically strong but lacks physical authority",
      "Preparing for a high-profile trial, tribunal or public inquiry",
      "Present to clients or partners and want to command more confidence",
      "Appear in the media and want to communicate with more precision",
      "Building silk and want to develop a stronger courtroom presence",
      "Want to be more persuasive in oral argument",
    ]}
    workOn={[
      "Courtroom delivery and physical presence",
      "Voice, pace, emphasis and silence in advocacy",
      "Client and partner presentation coaching",
      "Media and press appearance preparation",
      "Preparing for specific trials, tribunals or public inquiries",
      "Persuasive oral argument technique",
    ]}
    closingHeading="The argument deserves the advocacy."
    closing="Discreet expert coaching for barristers, solicitors and legal professionals."
    ctaLabel="Request a Consultation"
  />
);

export default Lawyers;
