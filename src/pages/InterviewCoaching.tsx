import ServicePage from "@/components/ServicePage";

const InterviewCoaching = () => (
  <ServicePage
    metaTitle="Interview Coaching London | Job Interview Speech Coach | The Speech Coach"
    metaDescription="Expert interview coaching for professionals, executives and graduates. Prepare, practise and perform at your best in job interviews and promotion panels."
    h1={
      <>
        Lost for Words. Lost the Thread.{" "}
        <span className="italic text-gradient-gold">Lost the Job.</span>
      <br />
      <span className="italic text-gradient-gold">Now you're here.</span>
      </>
    }
    subheading="Interview coaching that takes you from prepared to compelling."
    intro="You know you can do the job. The interview is the proof of concept — and proof of concept is a communication challenge. Most candidates prepare the content. Few prepare the delivery. Interview coaching works on both: what you say, how you say it, and how you own the room when it counts."
    problems={[
      "Been to interviews and not been offered roles you deserved",
      "Lose composure when challenged or asked difficult questions",
      "Know what you want to say but it doesn't come out right under pressure",
      "Preparing for a senior executive interview or board appointment",
      "Feel anxious or over-prepared in a way that reads as stiff or scripted",
      "Want to come across as confident, capable and compelling",
    ]}
    workOn={[
      "Answer structure — STAR narrative and conversational formats",
      "The first two minutes — making a strong immediate impression",
      "Handling difficult, unexpected or loaded questions",
      "Physical presence, composure and authority in the room",
      "Executive and board-level interview coaching",
      "Mock interview practice and performance preparation",
    ]}
    closingHeading="Get the role you're qualified for."
    closing="Expert interview coaching for professionals at every career stage."
    ctaLabel="Book a Session"
  />
);

export default InterviewCoaching;
