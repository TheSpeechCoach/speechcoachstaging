import ServicePage from "@/components/ServicePage";

const WeddingSpeech = () => (
  <ServicePage
    metaTitle="Wedding Speech Coach | Best Man & Father of Bride Speech Coaching | The Speech Coach"
    metaDescription="Expert wedding speech coaching for best men, fathers of the bride and grooms. Write it. Rehearse it. Deliver it perfectly."
    h1={
      <>
        Lost the Speech. Lost the Plot.{" "}
        <span className="italic text-gradient-gold">Lost for Words.</span>
      <br />
      <span className="italic text-gradient-gold">Now you're here.</span>
      </>
    }
    subheading="Wedding speech coaching so the most important speech of the day is delivered exactly the way it deserves to be."
    intro="You said yes to the speech before you understood what that meant. Now the day is coming and the blank page is the problem. A great wedding speech is personal, warm, structured and well-delivered. It's not about being funny — it's about landing the moment. This coaching helps you write it, rehearse it and own it."
    problems={[
      "You're a best man and have no idea where to start",
      "You're the father of the bride or groom and want to do justice to the occasion",
      "You've started writing but it feels flat, long or unfocused",
      "Terrified of public speaking and this is the worst possible first time",
      "Want the speech to be genuinely funny but safely",
      "Written it but need help with delivery, timing and nerves",
    ]}
    workOn={[
      "Speech structure — opening, middle and close",
      "Finding the right stories and making them land",
      "Timing, pace and delivery",
      "Managing nerves on the day",
      "Getting the tone exactly right for the room",
      "Full rehearsal and performance preparation",
    ]}
    closingHeading="Deliver the speech they'll talk about for years."
    closing="One-off coaching sessions or a full speech preparation programme."
    ctaLabel="Book a Session"
  />
);

export default WeddingSpeech;
