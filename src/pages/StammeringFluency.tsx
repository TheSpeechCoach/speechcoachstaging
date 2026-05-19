import ServicePage from "@/components/ServicePage";

const StammeringFluency = () => (
  <ServicePage
    metaTitle="Stammering Coach | Fluency Coaching for Adults | The Speech Coach"
    metaDescription="Expert stammering and fluency coaching for adults. One-to-one coaching to build confidence, reduce speaking anxiety and develop lasting communication skills."
    h1={
      <>
        Lost Mid-sentence. Lost Mid-thought.{" "}
        <span className="italic text-gradient-gold">Lost Mid-room.</span>
      </>
    }
    subheading="Now you're here. Expert fluency coaching for adults who are done letting their stammer control the conversation."
    intro="Stammering is not a lack of intelligence, knowledge or ability — it is a communication challenge. And like all communication challenges, it responds to the right coaching. This isn't about curing a stammer. It's about developing the confidence, technique and self-possession to speak on your own terms."
    problems={[
      "Stammer holds you back in meetings, presentations or conversations",
      "Been told you'll grow out of it and haven't",
      "Anxiety around speaking makes the stammer worse",
      "Avoid situations requiring public speaking",
      "Tried therapy but want specific communication coaching",
      "Want to speak with confidence regardless of fluency",
    ]}
    workOn={[
      "Reducing anxiety around speaking situations",
      "Breathing, rhythm and physical delivery techniques",
      "Building confidence in high-pressure speaking",
      "Preparing for specific scenarios — presentations, interviews, meetings",
      "Developing a consistent personal approach to fluency",
      "Rebuilding the relationship between thinking, feeling and speaking",
    ]}
    closingHeading="Speak on your own terms."
    closing="Confidential, compassionate 1:1 coaching for adults who stammer."
    ctaLabel="Book a Consultation"
  />
);

export default StammeringFluency;
