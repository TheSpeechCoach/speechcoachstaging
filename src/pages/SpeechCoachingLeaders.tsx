import ServicePage from "@/components/ServicePage";

const SpeechCoachingLeaders = () => (
  <ServicePage
    metaTitle="Speech Coaching for Leaders | Executive Voice & Delivery Coaching | The Speech Coach"
    metaDescription="Speech coaching for leaders who need to command a room. Develop gravitas, authority and clarity in how you speak, present and lead. 1:1 and online."
    h1={
      <>
        Speech Coaching for Leaders Who Need to <span className="italic text-gradient-gold">Command the Room.</span>
      </>
    }
    subheading="Bespoke 1:1 coaching for senior leaders, founders and executives — building the voice, presence and delivery your role demands."
    intro="Leadership is communication. The way you speak shapes how people perceive your authority, your vision and your ability to lead. When the stakes are high — a board, a town hall, an investor meeting, a global team — your delivery has to match the weight of the role."
    problems={[
      "You've grown into a senior role but your delivery hasn't caught up",
      "Your voice doesn't carry the authority your title does",
      "You sound tentative when you need to sound certain",
      "You're preparing for a high-stakes address and want to land every word",
      "Feedback has flagged your communication as something to work on",
      "You want to lead with more presence, gravitas and conviction",
    ]}
    workOn={[
      "Executive presence and gravitas",
      "Voice, pace, tone and projection",
      "Sounding certain — even when you're not",
      "Commanding a room of any size",
      "Speaking with clarity under pressure",
      "Handling tough questions with composure",
      "Delivering vision with conviction",
    ]}
    closingHeading="Ready to lead with the voice your role deserves?"
    closing="Bespoke 1:1 coaching, online or in-person. Initial consultation within 48 hours."
    ctaLabel="Book a Consultation"
  />
);

export default SpeechCoachingLeaders;
