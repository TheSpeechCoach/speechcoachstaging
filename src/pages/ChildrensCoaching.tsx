import ServicePage from "@/components/ServicePage";

const ChildrensCoaching = () => (
  <ServicePage
    metaTitle="Elocution & Speech Coaching for Children & Teenagers | The Speech Coach"
    metaDescription="Looking for speech coaching or elocution lessons for your child? Bespoke 1:1 coaching for children aged 8–17. Build confidence, clarity and communication skills. Online & London."
    h1={
      <>
        Give Your Child the <span className="italic text-gradient-gold">Gift of Confident Communication.</span>
      </>
    }
    subheading="Bespoke 1:1 speech coaching, elocution lessons and communication confidence building for children and teenagers aged 8–17."
    intro="You know your child has so much to say — but something is getting in the way. Maybe they speak too fast. Maybe they mumble. Maybe they're bright and capable but fall apart when asked to speak in front of others. Whatever it is, it's coachable — and the earlier you start, the greater the benefit."
    problemsHeading="What we help with"
    problems={[
      "Speaking too quickly",
      "Mumbling or unclear speech",
      "Confidence speaking in front of others",
      "Stutter or stammer",
      "Elocution",
      "Speech and debate preparation",
      "General communication confidence",
    ]}
    workOnHeading="How sessions work"
    workOn={[
      "Always age-appropriate, encouraging and pressure-free",
      "We move at the child's pace",
      "Typically 45–60 minutes per session",
      "Delivered online or in-person in London",
      "All coaches at TSC have an advanced DBS check",
      "We work with children from age 8 through to teenagers up to age 17",
    ]}
    closingHeading="Book a 20-minute parent consultation."
    closing="No obligation, just a conversation."
    ctaLabel="Book Parent Consultation"
  />
);

export default ChildrensCoaching;
