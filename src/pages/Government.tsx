import ServicePage from "@/components/ServicePage";

const Government = () => (
  <ServicePage
    metaTitle="Speech Coaching for Politicians & Government | Political Communication | The Speech Coach"
    metaDescription="Speech and communication coaching for politicians, civil servants and government officials. Select committee, media training and public speaking coaching."
    h1={
      <>
        Lost the Chamber. Lost the Cameras.{" "}
        <span className="italic text-gradient-gold">Lost the Public.</span>
      <br />
      <span className="italic text-gradient-gold">Now you're here.</span>
      </>
    }
    subheading="Speech coaching for politicians and officials who need to communicate with conviction — under scrutiny."
    intro="Political communication has never been more demanding or more visible. Speeches, select committees, media appearances — the ability to speak with clarity and authority in every format is essential. Whether you're an MP, a minister or a civil servant, communication is your primary instrument."
    problems={[
      "Preparing a speech for the House or a public event",
      "Facing a select committee or inquiry",
      "Need media training before a major press event",
      "Your policies aren't landing with the right audience",
      "Need to communicate complex policy simply",
      "Want to project more conviction and authenticity",
    ]}
    workOn={[
      "Parliamentary and public speaking",
      "Select committee and scrutiny preparation",
      "Media training: broadcast and press",
      "Policy communication and public narrative",
      "Speech structure, language and delivery",
      "Communicating under pressure and challenge",
    ]}
    closingHeading="Communicate with the authority the role demands."
    closing="Confidential coaching for elected officials, ministers, civil servants and public sector leaders."
    ctaLabel="Request a Consultation"
  />
);

export default Government;
