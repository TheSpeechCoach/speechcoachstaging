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
    intro=""
    postProblems={
      <section className="py-16 md:py-20 px-6 border-t border-border">
        <div className="container mx-auto max-w-3xl">
          <div className="rounded-2xl border border-primary/30 bg-card/40 p-8 md:p-10 space-y-4 glow-gold">
            <p className="font-display text-xl md:text-2xl text-primary">
              We teach children: 'How to Talk'.
            </p>
            <p className="font-body text-lg text-foreground/90 leading-relaxed">
              How to speak. How to inform. How to debate and discuss.
            </p>
            <p className="font-body text-lg text-foreground/90 leading-relaxed">
              How to present. How to represent and how to be present.
            </p>
            <p className="font-body text-lg text-foreground/90 leading-relaxed">
              How to be fluent, eloquent, articulate and appropriate.
            </p>
            <p className="font-body text-lg md:text-xl text-primary font-semibold leading-relaxed pt-2">
              We coach communication.<br />
              We curate confidence.<br />
              We cultivate character.
            </p>
          </div>
        </div>
      </section>
    }
    problems={[
      "Your child speaks so fast that others struggle to follow.",
      "They mumble or trail off and you can hear their confidence dip.",
      "They're bright and capable but freeze when asked to speak in front of the class.",
      "A stutter or stammer is starting to knock their confidence.",
      "They avoid putting their hand up, presentations, or reading aloud.",
      "You want them to grow into a clear, confident communicator.",
    ]}
    workOn={[
      "Speaking too quickly",
      "Mumbling or unclear speech",
      "Confidence speaking in front of others",
      "Stutter or stammer",
      "Elocution",
      "Speech and debate preparation",
    ]}
    extraBlocks={[
      {
        heading: "How sessions work",
        items: [
          "Always age-appropriate, encouraging and pressure-free",
          "We move at the child's pace",
          "Typically 45–60 minutes per session",
          "Delivered online or in-person in London",
          "All coaches at TSC have an advanced DBS check",
          "We work with children from age 8 through to teenagers up to age 17",
        ],
      },
    ]}
    closingHeading="Book a Parent Consultation"
    closing="No obligation, just a conversation."
    ctaLabel="Book Parent Consultation"
  />
);

export default ChildrensCoaching;
