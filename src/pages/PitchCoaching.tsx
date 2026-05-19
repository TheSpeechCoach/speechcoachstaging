import ServicePage from "@/components/ServicePage";

const PitchCoaching = () => (
  <ServicePage
    metaTitle="Pitch Coach | Investor Pitch Coaching | The Speech Coach"
    metaDescription="Expert pitch coaching for founders, entrepreneurs and sales leaders. Investor pitches, Demo Day, Dragons' Den and business pitch preparation."
    h1={
      <>
        Lost the Opening. Lost the Ask.{" "}
        <span className="italic text-gradient-gold">Lost the Deal.</span>
      </>
    }
    subheading="Now you're here. Pitch coaching that gets you investment-ready — in delivery, structure and conviction."
    intro="The pitch is not the deck. The deck is the document — the pitch is the performance. Every investor has sat through hundreds of technically correct pitches. What they remember is the founder who made them believe. This coaching turns a good pitch into a compelling one."
    problems={[
      "Pitching to investors and want to be the one they remember",
      "Pitch is factually strong but not generating emotional buy-in",
      "Stumble when challenged or asked difficult questions",
      "Preparing for Demo Day, a pitch competition or Dragons' Den",
      "Great business but don't know how to tell its story",
      "Opening 60 seconds isn't commanding attention",
    ]}
    workOn={[
      "The first 60 seconds — opening with conviction",
      "Pitch narrative and structure",
      "The ask — making it compelling",
      "Handling investor questions and challenges",
      "Pace, energy and belief in delivery",
      "Full pitch rehearsal and performance preparation",
    ]}
    closingHeading="Get investment-ready."
    closing="Intensive pitch coaching packages tailored to your stage and investor audience."
    ctaLabel="Book a Session"
  />
);

export default PitchCoaching;
