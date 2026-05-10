import ServicePage from "@/components/ServicePage";

const ChildrensCoaching = () => (
  <ServicePage
    seoTitle="Elocution & Speech Coaching for Children & Teenagers | The Speech Coach"
    seoDescription="Looking for speech coaching or elocution lessons for your child? Bespoke 1:1 coaching for children aged 8–17. Build confidence, clarity and communication skills. Online & London."
    canonicalPath="/speech-coaching-children"
    tagline="The Speech Coach"
    headline="Give Your Child the Gift of"
    headlineAccent="Confident Communication."
    subheading="Bespoke 1:1 speech coaching, elocution lessons and communication confidence building for children and teenagers aged 8–17. Online and in London."
    intro="You know your child has so much to say — but something is getting in the way of them saying it well. Maybe they speak too fast. Maybe they mumble. Maybe they're bright and capable but fall apart when they have to speak in front of others. Maybe they stutter under pressure. Whatever it is, it's coachable — and the earlier you start, the greater the benefit."
    problemsHeading="What we help children with"
    problems={[
      "Speaking too quickly — helping them slow down and be understood",
      "Mumbling or unclear speech — improving articulation and clarity",
      "Confidence speaking in front of others — class presentations, assemblies, drama",
      "Stutter or stammer — gentle, supportive techniques to smooth delivery",
      "Elocution — clear, expressive and well-formed speech",
      "Speech and debate preparation",
      "General communication confidence — how to hold a conversation and be heard",
    ]}
    workHeading="How sessions work"
    workItems={[
      "Sessions are always age-appropriate, encouraging and entirely pressure-free",
      "We move at the child's pace — no rushing, no pressure",
      "Sessions are typically 45–60 minutes via Zoom or in-person in London",
      "Parents are welcome to observe, especially for younger children",
      "We work with children from age 8 through to teenagers aged 17",
      "All coaches at The Speech Coach have an advanced DBS check",
    ]}
    closingHeading="Find Out If Coaching Is Right for Your Child."
    closingBody="Book a free 20-minute parent consultation — no obligation, just a conversation."
  />
);

export default ChildrensCoaching;
