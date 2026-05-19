import ServicePage from "@/components/ServicePage";

const Teachers = () => (
  <ServicePage
    metaTitle="Voice Coaching for Teachers | Teacher Communication Skills | The Speech Coach"
    metaDescription="Voice and communication coaching for teachers and educators. Protect your voice, improve classroom delivery and develop CPD-accredited communication skills."
    h1={
      <>
        Lost the Voice. Lost the Lesson.{" "}
        <span className="italic text-gradient-gold">Lost the Class.</span>
      </>
    }
    subheading="Now you're here. Voice and communication coaching for teachers who communicate for a living — and need to protect their most important instrument."
    intro="Teaching is one of the most demanding communication professions. You speak for hours every day, manage rooms of different-sized audiences, modulate your energy, handle disruption and still find the volume and presence to hold a class at 3pm on a Friday. Voice coaching for teachers is about sustainability as much as skill."
    problems={[
      "Lost your voice in term time and pushed through anyway",
      "Voice tires by afternoon or after long teaching days",
      "Struggle to project in noisy classrooms without straining",
      "Want to hold student attention without shouting",
      "Preparing for an Ofsted inspection or formal observation",
      "Want CPD in communication and delivery skills",
    ]}
    workOn={[
      "Voice care, sustainability and recovery",
      "Projection without strain or damage",
      "Classroom presence and behaviour through communication",
      "Pacing, pause and variety in delivery",
      "Engaging different types of learners through vocal range",
      "CPD-accredited coaching and certification",
    ]}
    closingHeading="Protect your voice. Elevate your teaching."
    closing="Individual coaching and school-wide CPD programmes available."
    ctaLabel="Book a Consultation"
  />
);

export default Teachers;
