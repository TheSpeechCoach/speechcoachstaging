import ServicePage from "@/components/ServicePage";

const KeynoteConference = () => (
  <ServicePage
    metaTitle="Keynote Speaker Coach | Conference Presentation Coaching | The Speech Coach"
    metaDescription="Expert keynote and conference speaker coaching. TEDx preparation, opening keynotes, panel sessions and conference presentations. London and online."
    h1={
      <>
        Lost the Opening. Lost the Thread.{" "}
        <span className="italic text-gradient-gold">Lost the Room.</span>
      <br />
      <span className="italic text-gradient-gold">Now you're here.</span>
      </>
    }
    subheading="Expert coaching for keynote speakers and conference presenters who need to make every minute count."
    intro="A keynote is not a presentation. It's a performance. The preparation, the structure, the delivery, the opening, the close — every element has to earn its place. Whether it's a TEDx talk, an industry conference, a company event or an international summit, the standard is the same: the room has to leave changed."
    problems={[
      "Invited to give a keynote and want to be exceptional",
      "Preparing a TEDx talk and need expert coaching",
      "Speak at conferences regularly but want to raise your game",
      "Writing a talk from scratch",
      "Previous presentations technically good but not quite landed",
      "Speak on panels and want to be the most compelling voice",
    ]}
    workOn={[
      "Talk structure and narrative arc",
      "The opening — the first 90 seconds",
      "Physical delivery, movement and stage presence",
      "The close — what the audience takes home",
      "Handling the Q&A",
      "Rehearsal to performance level",
    ]}
    closingHeading="Make the room leave changed."
    closing="Intensive keynote coaching packages for one-off events and regular conference speakers."
    ctaLabel="Book a Session"
  />
);

export default KeynoteConference;
