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
    subheading="Studio-condition media training for executives, founders, spokespeople and senior public figures — built for the broadcast environment you actually operate in."
    intro="Broadcast and podcast media reward and punish the same thing: presence. The microphone hears every hesitation, every filler, every dropped end-of-sentence. The camera reads every flicker of eye contact and every breath in the wrong place. Most professionals who appear well in the room do not appear well on broadcast — not because they lack ability, but because nobody trained them for the medium. The mechanics respond to coached reps."
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
    extraBlocks={[
      {
        heading: "Case snapshot",
        intro:
          "The CEO of a mid-cap consumer business, called on Today the morning after a difficult set of half-year results, had ninety minutes' notice and a hostile presenter. One pre-session by video the night before: three bridging lines, two soundbites, the discipline of finishing every answer with the message rather than the defence. The clip that travelled was the executive's line — not the question. The Chair's note afterwards used the word 'professional'. The work was three hours total.",
        items: [],
      },
    ]}
    closingHeading="Footage you would willingly publish."
    closing="Broadcast-ready coaching for the interview, the podcast and the camera in front of you. Book a Consultation."
    ctaLabel="Book a Consultation"
  />
);

export default BroadcastMedia;
