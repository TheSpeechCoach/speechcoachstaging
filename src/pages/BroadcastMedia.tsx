import ServicePage from "@/components/ServicePage";

const BroadcastMedia = () => (
  <ServicePage
    metaTitle="Broadcast & Media Coaching | Voice & On-Camera Presence | The Speech Coach"
    metaDescription="Specialist voice and on-camera coaching for broadcasters, presenters, podcasters and journalists. 1:1 coaching online worldwide and in London."
    h1={
      <>
        Lost on Playback. Lost Your Audience. <span className="italic text-gradient-gold">Lost Your Confidence.</span>
      </>
    }
    subheading="Now you're here. Broadcast and media coaching for presenters, podcasters and on-screen professionals."
    intro="In broadcast and media, your voice and on-camera presence are everything. Broadcasting demands a completely different skill set to public speaking. The microphone picks up everything. The camera amplifies every hesitation. The Speech Coach works with broadcast and media professionals to develop the specific techniques that make the difference between adequate and genuinely compelling."
    problems={[
      "Your voice doesn't quite cut through on-air the way you'd like",
      "You sound stiff or scripted when reading from autocue",
      "On camera you feel self-conscious and it shows",
      "Live broadcasts make you tense up and lose your natural warmth",
      "You're moving from print or production into on-air work",
      "You want to develop a stronger, more distinctive on-air identity",
    ]}
    workOnHeading="What we work on"
    workOn={[
      "Voice for broadcast — resonance, pace, clarity and authority",
      "On-camera presence — eye contact, stillness, expression and physicality",
      "Delivery for radio and podcast — intimacy, warmth and conversational ease",
      "Media interview preparation — handling difficult questions under pressure",
      "Autocue and script reading — sounding natural, not scripted",
      "Microphone technique — mic proximity, volume and breath control",
      "Developing your on-air personality without losing your authenticity",
      "Live broadcast confidence — performing under pressure in real time",
    ]}
    extraBlocks={[
      {
        heading: "Who we work with",
        intro:
          "From established broadcasters refining their craft to professionals stepping in front of a microphone or camera for the first time.",
        items: [
          "Television and radio presenters",
          "Podcast hosts and producers",
          "Journalists and correspondents",
          "Subject-matter experts appearing as commentators",
          "Spokespeople preparing for media interviews",
          "Producers and executives moving on-air",
        ],
      },
    ]}
    closingHeading="Ready to sound and look your absolute best on-air?"
    closing="Book a free 20-minute consultation and let's talk about where you are now and where you want to be."
  />
);

export default BroadcastMedia;
