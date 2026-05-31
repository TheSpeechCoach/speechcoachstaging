import ServicePage from "@/components/ServicePage";

const BroadcastMedia = () => (
  <ServicePage
    metaTitle="Broadcast & Media Coaching | TV, Radio & Podcast Training | The Speech Coach"
    metaDescription="Specialist broadcast and media coaching for executives, spokespeople and on-air talent. Studio-condition training for TV, radio, down-the-line, podcast and self-shot video."
    h1={
      <>
        Broadcast & Media Coaching for <span className="italic text-gradient-gold">Professionals Who Need to Land It.</span>
      </>
    }
    subheading="Media training for executives, founders, spokespeople and senior public figures — built for the broadcast environment you actually operate in."
    intro="Broadcast is its own discipline. The camera and microphone catch what a meeting room forgives — the hesitation, the filler, the breath in the wrong place — which is why people who are impressive in person can fall flat on air. It's rarely about ability; it's about being trained for the medium. That's what we coach."
    problems={[
      "You're going on Today, Newsnight, Sky or a major podcast and you want to land it",
      "Previous footage of you does not match the version of you you intend",
      "Hostile or interruptive interviewers throw you off your line",
      "Down-the-line and remote interviews feel flat and underpowered",
      "You want a regular podcast or LinkedIn video presence and it isn't landing",
      "You over-answer, qualify too much and lose the soundbite",
      "You're representing the organisation in a crisis and need to be performance-ready",
      "You want training in studio conditions, not a meeting room",
    ]}
    workOn={[
      "Studio-condition camera and microphone presence",
      "Soundbite discipline and bridging under questioning",
      "Hostile interview rehearsal and reframing techniques",
      "Down-the-line and remote broadcast performance",
      "Long-form podcast structure and pacing",
      "Self-shot video framing, hook and close",
      "Voice, breath and pace specific to broadcast conditions",
      "Crisis and reactive media readiness",
    ]}
    closingHeading="Footage you would willingly publish."
    closing="Broadcast-ready coaching for the interview, the podcast and the camera in front of you. Book a Consultation."
    ctaLabel="Book a Consultation"
  />
);

export default BroadcastMedia;
