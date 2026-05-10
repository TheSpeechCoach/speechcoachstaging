import ServicePage from "@/components/ServicePage";

const AccentCoaching = () => (
  <ServicePage
    seoTitle="Accent Coaching for Professionals | Speak Clearly in English | The Speech Coach"
    seoDescription="Worried your accent is holding you back? Bespoke accent coaching to help you speak more clearly and confidently in English — without losing who you are. Online worldwide."
    canonicalPath="/accent-coaching"
    tagline="The Speech Coach"
    headline="Speak Clearly. Be Understood."
    headlineAccent="Keep Your Identity."
    subheading="Bespoke accent coaching for professionals who want to communicate with clarity and confidence — without losing the voice that makes them who they are."
    intro="If English is not your first language — or if you've moved to a new country and found that people sometimes struggle to understand you — this is for you. Accent coaching is not about making you sound British, American or 'neutral'. It is about helping you be heard, understood and taken seriously. Your accent is part of who you are. The goal is never to erase it — it is to make sure it never stands in your way."
    problems={[
      "People ask you to repeat yourself in meetings",
      "You feel less confident speaking English in professional settings",
      "You've been told in feedback that your communication needs work",
      "You know your ideas are strong — but you worry they don't land the way you intend",
      "You want to be more persuasive and influential — and your spoken English is holding you back",
      "You speak fast in your first language — and the pace carries over into English",
      "You want to refine your pronunciation without losing your accent completely",
    ]}
    workItems={[
      "Clarity of specific sounds that commonly cause difficulty in English",
      "Word stress — English is a stress-timed language, and stress patterns change everything",
      "Connected speech — how words run together in natural, fluent English",
      "Intonation — the patterns that help your meaning land",
      "Pace and rhythm — speaking at a pace that gives your listener time to follow",
      "Vocabulary and word choice for professional settings",
      "Confidence when speaking English under pressure",
    ]}
    extraSections={[
      {
        heading: "A Note on Accent Coaching",
        content:
          "Working with an accent coach is not about becoming someone you're not. Many of the world's most admired communicators speak English with a strong accent — what makes them compelling is the clarity, rhythm and confidence with which they deliver their message. That is exactly what we work on.",
      },
    ]}
    closingHeading="Work on Your Clarity, Not Your Identity."
    closingBody="Book a free 20-minute consultation. Let's talk about where you are, where you want to be, and how to get there."
  />
);

export default AccentCoaching;
