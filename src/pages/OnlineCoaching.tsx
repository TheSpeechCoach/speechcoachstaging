import ServicePage from "@/components/ServicePage";

const OnlineCoaching = () => (
  <ServicePage
    metaTitle="Online Speech Coach | 1:1 Coaching Worldwide | The Speech Coach"
    metaDescription="Looking for an online speech coach? Work with an expert from anywhere in the world via Zoom. Bespoke 1:1 coaching for professionals in the UK, UAE, USA, Europe and beyond."
    h1={
      <>
        World-Class Speech Coaching — <span className="italic text-gradient-gold">Wherever You Are in the World.</span>
      </>
    }
    subheading="Bespoke 1:1 online coaching via Zoom for professionals in the UK, UAE, USA, Europe, Asia and beyond."
    intro="Online coaching works. It is not a compromise or a second-best option — it is simply a different format, and for speech and communication coaching, it works exceptionally well. Whether you're in London or Dubai, Frankfurt or Singapore — the quality of your coaching will be exactly the same."
    problemsHeading="How it works"
    problems={[
      "Sessions delivered via Zoom — link sent ahead of each session",
      "Sessions typically 60 minutes",
      "Book around your schedule — mornings, evenings and weekends available",
      "Notes, exercises and resources sent after each session",
      "Progress tracked across your programme",
    ]}
    workOnHeading="Who it's for"
    workOn={[
      "Professionals based outside London",
      "Clients in UAE, Saudi Arabia, Europe, USA, Asia",
      "Busy professionals who can't travel",
      "People who prefer flexibility of online sessions",
    ]}
    extraBlocks={[
      {
        heading: "Does online really work?",
        intro:
          "Yes. For speech and communication coaching, online sessions are highly effective. The Speech Coach has worked with professionals across more than 30 countries — all online.",
        items: [],
      },
    ]}
    closingHeading="Wherever you are, we can work together."
    closing="Book a Consultation."
  />
);

export default OnlineCoaching;
