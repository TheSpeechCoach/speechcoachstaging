import ServicePage from "@/components/ServicePage";

const LeadershipCommunication = () => (
  <ServicePage
    metaTitle="Leadership Communication Coaching | Internal Communication for Leaders | The Speech Coach"
    metaDescription="Leadership communication coaching for executives and senior managers. Town halls, all-hands, culture communication and internal leadership speaking."
    h1={
      <>
        Lost the Town Hall. Lost the Culture.{" "}
        <span className="italic text-gradient-gold">Lost the Trust.</span>
      </>
    }
    subheading="Now you're here. Coaching for leaders whose communication needs to build culture — not just deliver information."
    intro="Leadership communication is different from public speaking. It's not about impressing an audience — it's about moving one. The best leaders don't just inform their organisations, they energise them. Whether it's a town hall, an all-hands, a difficult team conversation or a culture-building message, how you communicate shapes how people feel about working for you."
    problems={[
      "Internal communications feel flat, scripted or not landing",
      "Struggle to inspire your team rather than just inform them",
      "Lead town halls or all-hands that don't generate energy",
      "Need to communicate difficult news, change or uncertainty well",
      "Communication style holding back leadership effectiveness",
      "Want to build a communication-led culture",
    ]}
    workOn={[
      "Town hall and all-hands preparation and delivery",
      "Communicating change, uncertainty and difficult news",
      "Building emotional resonance into internal communication",
      "One-to-one leadership conversations and feedback delivery",
      "Culture communication and values articulation",
      "Finding the authentic leadership voice",
    ]}
    closingHeading="Lead through communication, not despite it."
    closing="Bespoke coaching for senior leaders who want their communication to match their capability."
    ctaLabel="Request a Proposal"
  />
);

export default LeadershipCommunication;
