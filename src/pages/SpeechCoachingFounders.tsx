import ServicePage from "@/components/ServicePage";

const SpeechCoachingFounders = () => (
  <ServicePage
    metaTitle="Speech Coaching for Founders | Pitch & Investor Communication Coaching | The Speech Coach"
    metaDescription="Speech coaching for founders who need to pitch with conviction. Investor-ready communication, pitch delivery and leadership presence. 1:1 and online."
    h1={
      <>
        Speech Coaching for Founders Who Need to <span className="italic text-gradient-gold">Pitch with Conviction.</span>
      </>
    }
    subheading="Bespoke 1:1 coaching for founders and startup leaders — building the communication skills that turn pitches into term sheets."
    intro="Investors don't just fund ideas, they fund founders who can articulate a vision with clarity, confidence and command. If your product is ready but your pitch isn't, that's a communication problem. Whether you're addressing a board, leading a town hall or managing up, how you communicate determines whether you lead or just occupy a title."
    problems={[
      "You have a great product but struggle to communicate its value in a pitch",
      "Investors seem interested but you're not closing the round",
      "Your pitch deck is polished but your delivery lets you down",
      "You sound rehearsed or uncertain when presenting to stakeholders",
      "You're preparing for a demo day, investor day or board meeting",
      "Your team is growing and your communication needs to scale with it",
    ]}
    workOn={[
      "Pitch delivery and investor communication",
      "Clarity, confidence and conviction under pressure",
      "Voice, pace and presence in high-stakes meetings",
      "Handling tough questions from boards and investors",
      "Leading all-hands and town halls with authority",
      "Managing up and communicating with senior stakeholders",
      "Executive presence as your company scales",
    ]}
    closingHeading="Ready to pitch with the conviction investors respond to?"
    closing="Bespoke 1:1 coaching, online or in-person. Initial consultation within 48 hours."
    ctaLabel="Book a Consultation"
  />
);

export default SpeechCoachingFounders;