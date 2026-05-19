import ServicePage from "@/components/ServicePage";

const VoiceCoaching = () => (
  <ServicePage
    metaTitle="Voice Coach London | Professional Voice Coaching | The Speech Coach"
    metaDescription="Professional voice coaching for executives, presenters and professionals. Develop resonance, authority and vocal range. Expert voice coach in London and online."
    h1={
      <>
        Lost the Volume. Lost the Resonance.{" "}
        <span className="italic text-gradient-gold">Lost the Room.</span>
      </>
    }
    subheading="Now you're here. Professional voice coaching to develop a voice that commands attention — in any room, at any volume."
    intro="Your voice is your primary professional instrument. Thin, quiet, rushed or monotone delivery undermines the quality of the ideas behind it. Voice coaching isn't about sounding different — it's about sounding like yourself, at your best. Resonant, authoritative, controlled and heard."
    problems={[
      "People ask you to speak up even when you think you're speaking loudly",
      "Voice sounds thin or lacking authority on recordings",
      "You rush when nervous and lose impact",
      "Voice tires easily in long presentations",
      "Lost your voice before and want to protect it",
      "Want to develop more vocal range, warmth or presence",
    ]}
    workOn={[
      "Breath support and resonance",
      "Projection without strain",
      "Pace, pause and emphasis",
      "Vocal range and expressiveness",
      "Voice care and stamina",
      "Regional accent clarity work",
    ]}
    closingHeading="Develop a voice that does your thinking justice."
    closing="Expert voice coaching in London and online."
    ctaLabel="Book a Session"
  />
);

export default VoiceCoaching;
