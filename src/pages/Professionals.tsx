import ServicePage from "@/components/ServicePage";

const Professionals = () => (
  <ServicePage
    metaTitle="Speech Coaching for Professionals | Communication Coaching London | The Speech Coach"
    metaDescription="Speech and communication coaching for ambitious professionals. Improve presentation skills, gravitas and career impact. Expert coaching in London and online."
    h1={
      <>
        Lost the Thread. Lost the Room.{" "}
        <span className="italic text-gradient-gold">Lost the Promotion.</span>
      <br />
      <span className="italic text-gradient-gold">Now you're here.</span>
      </>
    }
    subheading="Communication coaching for professionals who are good at their job and want their delivery to match."
    intro="It came up in your review. Or you felt it in the meeting. You know your subject but something isn't landing the way it should. Across law, finance, consulting, medicine and technology, the ability to communicate with authority is the differentiator between careers that plateau and careers that accelerate."
    problems={[
      "You received feedback your communication needs work",
      "You struggle to assert yourself in meetings",
      "You find it hard to land ideas in large groups",
      "You want more authority and confidence",
      "Preparing for a high-stakes stakeholder presentation",
      "Communication is holding back your promotion",
    ]}
    workOn={[
      "Assertiveness and professional presence",
      "Structuring arguments clearly",
      "Presenting to senior stakeholders",
      "Meeting contribution and boardroom behaviour",
      "Handling difficult questions",
      "Gravitas, tone and vocal authority",
    ]}
    closingHeading="Time to communicate at the level you're capable of."
    closing="1:1 coaching tailored to your profession, seniority and goals."
    ctaLabel="Book a Consultation"
  />
);

export default Professionals;
