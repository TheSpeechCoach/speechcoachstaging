import ServicePage from "@/components/ServicePage";

const ExecutiveCorporate = () => (
  <ServicePage
    seoTitle="Executive Speech Coach | Communication Coaching for Leaders & Teams | The Speech Coach"
    seoDescription="Executive speech and communication coaching for senior leaders, boards and corporate teams. Bespoke 1:1 and group programmes. Online and in-person."
    canonicalPath="/executive-corporate-coaching"
    tagline="The Speech Coach"
    headline="Executive Communication Coaching for Leaders"
    headlineAccent="Who Need to Be Heard."
    subheading="Bespoke coaching for senior professionals, board members and corporate teams — delivering real results in how you communicate, present and lead."
    intro="At the most senior levels, communication is everything. The ability to speak with clarity, gravitas and authority — to a board, an investor group, a large audience or a global team — is what separates good leaders from exceptional ones. The Speech Coach works with executives, directors and C-suite leaders who want to communicate at the level their role demands."
    problemsHeading="This coaching is right for you if..."
    problems={[
      "You're about to present to a board, investor group or large audience — and you want to be exceptional",
      "You're a strong leader but you know your communication style is holding you back",
      "You've received feedback — formally or informally — that your delivery needs work",
      "Your team has a communication problem and you need expert support to fix it",
      "You're preparing for a high-stakes speaking moment: conference, TEDx, keynote or media appearance",
      "You're a non-native English speaker operating at the highest levels of your organisation",
      "You want to speak with more gravitas, authority and executive presence",
    ]}
    workItems={[
      "Executive presence — how to command a room from the moment you walk in",
      "Gravitas — sounding authoritative without being aggressive",
      "Board and investor presentation coaching",
      "Voice, pace, tone and delivery",
      "Handling questions under pressure",
      "Communicating complex ideas with simplicity and impact",
      "Preparation for media appearances, podcasts or panel discussions",
    ]}
    extraSections={[
      {
        heading: "Individual Executive Coaching",
        content:
          "Completely bespoke 1:1 coaching built entirely around your specific goals, communication style and upcoming challenges. Sessions are confidential, focused and designed to produce results quickly. Many executives see significant improvement within two to three sessions.",
      },
      {
        heading: "Team & Group Workshops",
        content:
          "Group coaching sessions and workshops for teams of 5 to 50 people. Delivered online or in-person at your offices or at an offsite location. Tailored entirely to your team's needs and delivered at a time that suits you.",
      },
      {
        heading: "Looking to Book for Someone Else?",
        content:
          "We work regularly with HR teams, L&D managers and Executive Assistants booking coaching for executives or employees. We'll handle all the scheduling, structure the programme around your colleague's needs and report back on progress if required. Just get in touch and we'll take it from there.",
      },
    ]}
    closingHeading="Get in Touch to Discuss Your Requirements."
    closingBody="Whether it's 1:1 executive coaching or a team workshop, we'll put together a bespoke proposal within 48 hours."
  />
);

export default ExecutiveCorporate;
