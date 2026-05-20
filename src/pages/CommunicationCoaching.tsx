import ServicePage from "@/components/ServicePage";

const CommunicationCoaching = () => (
  <ServicePage
    metaTitle="Communication Skills Coach | Speak Clearly & Confidently at Work | The Speech Coach"
    metaDescription="Want to communicate better at work? Expert 1:1 communication coaching to help you speak with clarity, confidence and impact in every professional situation. Online & London."
    h1={
      <>
        Communicate Better. <span className="italic text-gradient-gold">Get Taken More Seriously.</span> Go Further.
      </>
    }
    subheading="Bespoke 1:1 communication coaching for professionals who want to make every conversation, meeting and interaction count."
    intro="Communication isn't just something that happens when you stand up and present. It's every meeting. Every moment you speak up — or don't. Every conversation with a client, a colleague, a senior leader. The way you communicate shapes what opportunities you're given and how far you go in your career."
    problems={[
      "You use too many filler words — um, er, like, you know",
      "You speak too quickly and people don't always follow you",
      "You come across as casual when you want to sound authoritative",
      "You're not concise — you know you waffle",
      "You struggle to find the right words in the moment",
      "You feel there's a ceiling on how far you can go while you communicate the way you do",
    ]}
    workOn={[
      "Eliminating filler words and finding comfort in silence",
      "Pacing — slowing down without feeling awkward",
      "Tone and register",
      "Conciseness — saying more by saying less",
      "Storytelling",
      "Confident communication in meetings and on calls",
    ]}
    closingHeading="Great communicators aren't born — they're coached."
    closing="Book a consultation."
  />
);

export default CommunicationCoaching;
