import ServicePage from "@/components/ServicePage";

const PublicSpeaking = () => (
  <ServicePage
    metaTitle="Public Speaking Coach | Overcome Your Fear | Online & London | The Speech Coach"
    metaDescription="Afraid of public speaking? Work with an expert public speaking coach to build real confidence, calm your nerves and deliver powerful presentations. 1:1 coaching online and in London."
    h1={
      <>
        Terrified of Public Speaking?{" "}
        <span className="italic text-gradient-gold">You're Not Alone</span> — and It Can Change.
      </>
    }
    subheading="Expert 1:1 public speaking coaching to help you face any audience with calm, confidence and genuine impact."
    intro="Public speaking is one of the most common fears in the world. The dry mouth. The racing heart. The mind that goes completely blank the moment all eyes are on you. Whether you're presenting at a team meeting, speaking at a conference, delivering a keynote or standing up at a board meeting — the fear can feel overwhelming. The good news: it is absolutely coachable."
    problems={[
      "You've had a lifelong fear of speaking in front of groups",
      "You go blank when presenting to senior people",
      "Your heart races, your hands shake, your voice trembles",
      "You've recently joined a new company in a senior role and the stakes feel higher",
      "You know your material inside out but you can't deliver it calmly",
      "You avoid opportunities because public speaking fills you with dread",
    ]}
    workOn={[
      "Understanding why your nerves happen and how to use them",
      "Breathing and grounding techniques that calm your body",
      "How to structure what you say so you never go blank",
      "Voice control — pace, pause, projection and power",
      "How to hold the room and engage your audience",
      "Practice with feedback in a safe private space",
      "Preparing for your specific next speaking moment",
    ]}
    closingHeading="You don't have to be naturally confident to be a great speaker."
    closing="You just need the right coaching. Book a 20-minute consultation."
  />
);

export default PublicSpeaking;
