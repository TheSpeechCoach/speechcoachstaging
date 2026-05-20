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
        heading: "Why broadcast matters more than ever",
        intro:
          "Broadcast appearances are the single most leveraged communication a senior professional does. A ten-minute Today programme interview reaches more people than a year of internal town halls. A bad clip — handled badly under hostile questioning — circulates indefinitely. A well-delivered piece becomes the reference point everyone in your industry quotes back at you. Producers note who handles the medium. So do audiences.",
        items: [],
      },
      {
        heading: "How we work",
        intro:
          "The work is medium-specific. Studio set-up, camera framing, microphone awareness, the physics of pace and breath under broadcast conditions, the soundbite discipline that gets you quoted accurately rather than edited cruelly. For long-form podcast we coach narrative structure, the management of the silent space, and the discipline of not over-answering. For self-shot content we coach framing, the opening hook and the close. Sessions are 1:1, often run in a broadcast-condition studio with full camera and microphone set-up, using playback, structured feedback and repeated takes. For named upcoming interviews we work through the producer brief, anticipate hostile and hooky questions, and rehearse the bridging and the soundbite that will survive the edit.",
        items: [],
      },
      {
        heading: "Outcomes",
        items: [
          "Studio interviews that land your message and survive the edit",
          "Soundbite discipline that produces quotable, broadcast-ready answers",
          "Composure under hostile or interruptive questioning",
          "Down-the-line interviews delivered with full presence and pace",
          "Podcast long-form that holds the audience past the first ten minutes",
          "Self-shot video that you will actually publish",
        ],
      },
      {
        heading: "Programme formats",
        intro:
          "Broadcast Media Training Day — a single intensive day of studio-condition coaching across hostile interview, friendly interview, down-the-line and panel, with full playback and structured feedback. Named-Interview Preparation — compressed preparation for a specific upcoming interview such as Today, Newsnight, Sky News or a podcast feature, with two to three sessions inside the run-up window. Podcast & Content Programme — a block of sessions for hosts and guests building long-form podcast presence or regular video content: voice, pacing, structure, on-camera presence and editing-aware delivery.",
        items: [],
      },
      {
        heading: "Case snapshot",
        intro:
          "The CEO of a mid-cap consumer business, called on Today the morning after a difficult set of half-year results, had ninety minutes' notice and a hostile presenter. One pre-session by video the night before: three bridging lines, two soundbites, the discipline of finishing every answer with the message rather than the defence. The clip that travelled was the executive's line — not the question. The Chair's note afterwards used the word 'professional'. The work was three hours total.",
        items: [],
      },
    ]}
    closingHeading="Footage you would willingly publish."
    closing="Broadcast-ready coaching for the interview, the podcast and the camera in front of you. Book a 20-minute consultation."
    ctaLabel="Book a Consultation"
  />
);

export default BroadcastMedia;
