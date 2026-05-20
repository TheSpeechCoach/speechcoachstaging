import ServicePage from "@/components/ServicePage";

const PresentationSkills = () => (
  <ServicePage
    metaTitle="Presentation Skills Coaching | Confident Presenting at Work | The Speech Coach"
    metaDescription="Struggling with presentations? Expert 1:1 presentation coaching to help you deliver confidently, clearly and with impact — in person or on video calls. Online & London."
    h1={
      <>
        Stop Dreading Presentations. <span className="italic text-gradient-gold">Start Owning Them.</span>
      </>
    }
    subheading="1:1 presentation skills coaching for professionals who want to present with confidence, clarity and real authority — in the room and on screen."
    intro="You've done the work. You know the content. But the moment you're asked to present — to your team, your director, a client, an investor — something shifts. The nerves kick in. You speak too fast. You lose your thread. You come out feeling you didn't represent yourself properly."
    problems={[
      "You rush through presentations because nerves make you speed up",
      "You go blank mid-presentation to senior people",
      "You feel confident one-on-one but fall apart presenting to groups",
      "Your virtual presentations feel flat",
      "You've been passed over for opportunities because of how you come across",
    ]}
    workOn={[
      "Structure — how to build a presentation people follow",
      "Opening and closing — the moments that matter most",
      "Managing nerves",
      "Pace, pause and emphasis",
      "Body language and eye contact",
      "Handling questions with confidence",
      "Presenting on video calls — Zoom, Teams, Google Meet",
    ]}
    closingHeading="Your next presentation could change how people see you at work."
    closing="Book a consultation."
  />
);

export default PresentationSkills;
