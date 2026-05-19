import ServicePage from "@/components/ServicePage";

const SalesPresentation = () => (
  <ServicePage
    metaTitle="Sales Presentation Coaching | Speech Coach for Sales Teams | The Speech Coach"
    metaDescription="Sales presentation and pitch coaching for individuals and teams. Convert more. Present with conviction. Expert coaching for sales leaders and managers."
    h1={
      <>
        Lost the Prospect. Lost the Narrative.{" "}
        <span className="italic text-gradient-gold">Lost the Deal.</span>
      </>
    }
    subheading="Now you're here. Sales presentation coaching that turns technically correct pitches into commercially compelling ones."
    intro="The product knowledge is there. The CRM is full. The deck is polished. And you're still losing deals that should be won. Sales presentation failure is almost always a communication failure — structure, delivery, conviction, or the ability to handle objections under pressure."
    problems={[
      "Sales presentations are technically solid but not converting",
      "You or your team struggle to tell a compelling commercial story",
      "Lose momentum when challenged or when the buyer stalls",
      "Opening isn't generating interest in the first five minutes",
      "Present to enterprise clients and need to operate at a higher level",
      "Want to train your team to present more effectively",
    ]}
    workOn={[
      "Sales narrative and commercial storytelling",
      "The opening — creating desire in the first five minutes",
      "Handling objections and stalls with confidence",
      "Closing language and commitment conversations",
      "Team training and group sales presentation coaching",
      "Post-pitch Q&A and executive selling",
    ]}
    closingHeading="Stop losing deals you should be winning."
    closing="Individual and team coaching for sales professionals across all sectors."
    ctaLabel="Book a Session"
  />
);

export default SalesPresentation;
