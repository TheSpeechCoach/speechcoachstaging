import ServicePage from "@/components/ServicePage";

const ElocutionVoice = () => (
  <ServicePage
    metaTitle="Elocution Lessons & Voice Coaching | Online & London | The Speech Coach"
    metaDescription="Looking for elocution lessons or a voice coach? Improve your speaking voice, clarity, tone and articulation with bespoke 1:1 coaching. Online worldwide and in London."
    h1={
      <>
        Your Voice Is the <span className="italic text-gradient-gold">Most Powerful Tool</span> You Have. Are You Using It Well?
      </>
    }
    subheading="Voice coaching and elocution lessons to help you speak with clarity, authority and presence."
    intro="Your voice says more about you than you might think. Before people have processed what you've said, they've already decided how they feel about how you said it. A voice that is clear, well-paced and confident commands attention. Voice coaching isn't about sounding 'posh'. It's about sounding like the best, clearest, most confident version of yourself."
    problems={[
      "People often ask you to repeat yourself",
      "You've been told your voice is flat, quiet or monotone",
      "You mumble, especially under pressure",
      "You speak too quickly and people lose track",
      "Your voice rises at the end of sentences making statements sound like questions",
      "You want more authority and presence in how you sound",
    ]}
    workOn={[
      "Articulation — how clearly each word lands",
      "Tone — warmth, authority, expressiveness",
      "Pace — finding the right rhythm",
      "Projection — how to fill a room without shouting",
      "Resonance — developing depth",
      "Pause — using silence powerfully",
      "Intonation — the rise and fall that keeps people listening",
    ]}
    closingHeading="Your voice can change — and faster than you think."
    closing="Book a free 20-minute consultation."
  />
);

export default ElocutionVoice;
