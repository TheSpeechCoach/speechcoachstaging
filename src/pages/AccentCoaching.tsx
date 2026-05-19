import ServicePage from "@/components/ServicePage";

const AccentCoaching = () => (
  <ServicePage
    metaTitle="Accent Coaching for Professionals | Speak Clearly in English | The Speech Coach"
    metaDescription="Worried your accent is holding you back? Bespoke accent coaching to help you speak more clearly and confidently in English — without losing who you are. Online worldwide."
    h1={
      <>
        Lost in Translation. Lost in the Meeting. <span className="italic text-gradient-gold">Lost the Moment.</span>
      </>
    }
    subheading="Now you're here. Accent softening and clarity coaching so you are never asked to repeat yourself again."
    intro="If English is not your first language — or if you've moved to a new country and found that people sometimes struggle to understand you — this is for you. Accent coaching is not about making you sound British or American. It is about helping you be heard, understood and taken seriously. Your accent is part of who you are. The goal is never to erase it."
    problems={[
      "People ask you to repeat yourself in meetings",
      "You feel less confident speaking English in professional settings",
      "You've been told in feedback that your communication needs work",
      "You know your ideas are strong but worry they don't land as intended",
      "You want to be more persuasive and influential",
      "You speak fast in your first language and the pace carries over into English",
    ]}
    workOn={[
      "Clarity of specific sounds that cause difficulty",
      "Word stress — English is a stress-timed language",
      "Connected speech — how words run together naturally",
      "Intonation patterns that carry meaning",
      "Pace and rhythm",
      "Confidence when speaking English under pressure",
    ]}
    closingHeading="Work on clarity, not identity."
    closing="Book a free 20-minute consultation."
  />
);

export default AccentCoaching;
