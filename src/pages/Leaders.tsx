import ServicePage from "@/components/ServicePage";

const Leaders = () => (
  <ServicePage
    metaTitle="Speech Coach for Leaders | Executive Communication Coaching | The Speech Coach"
    metaDescription="Speech and communication coaching for CEOs, directors and senior leaders. Build executive presence, authority and gravitas. Bespoke 1:1 coaching in London and online."
    heroLines={[
      "Lost the Authority.",
      "Lost the Team.",
      "Lost the Room.",
      "Now you're here.",
    ]}
    subheading="Speech and communication coaching for leaders who need to own every room they walk into."
    intro="Leadership is a communication challenge as much as a strategic one. The most effective leaders have the ability to land their ideas. Whether addressing a board, leading a town hall or managing up, how you communicate determines whether you lead or just occupy a title."
    problems={[
      "You have the title but struggle to project the authority that comes with it",
      "Your team isn't responding to your communication the way you need",
      "You need to present to boards or investors with confidence",
      "You've been told your presence or gravitas needs work",
      "You're stepping into a bigger role and want to hit the ground running",
      "You lead global teams and need to communicate across cultures",
    ]}
    workOn={[
      "Executive presence and gravitas",
      "Voice, authority and delivery",
      "Leading town halls and all-hands meetings",
      "Board and investor communication",
      "Communicating under pressure",
      "Real-time leadership scenario coaching",
    ]}
    closingHeading="Ready to lead every room you walk into?"
    closing="Bespoke proposals within 48 hours."
    ctaLabel="Request a Proposal"
  />
);

export default Leaders;
