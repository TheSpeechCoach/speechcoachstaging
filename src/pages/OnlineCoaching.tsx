import ServicePage from "@/components/ServicePage";

const OnlineCoaching = () => (
  <ServicePage
    seoTitle="Online Speech Coach | 1:1 Coaching Worldwide | The Speech Coach"
    seoDescription="Looking for an online speech coach? Work with an expert from anywhere in the world via Zoom. Bespoke 1:1 coaching for professionals across the UK, UAE, USA, Europe and beyond."
    canonicalPath="/online-coaching"
    tagline="The Speech Coach"
    headline="World-Class Speech Coaching —"
    headlineAccent="Wherever You Are in the World."
    subheading="Bespoke 1:1 online coaching via Zoom for professionals in the UK, UAE, USA, Europe, Asia and beyond."
    intro="Online coaching works. It is not a compromise or a second-best option — it is simply a different format, and for speech and communication coaching, it works exceptionally well. Whether you're in London or Dubai, Frankfurt or Singapore, New York or Sydney — the quality of your coaching will be exactly the same. All you need is a good internet connection and a quiet space."
    problemsHeading="Online coaching is right for you if..."
    problems={[
      "You're based outside London but want access to expert coaching",
      "You're in the UAE, Saudi Arabia, Europe, USA, Asia or anywhere else in the world",
      "You're a busy professional who can't travel for sessions",
      "You prefer the convenience and flexibility of working from home or your office",
      "You want coaching that fits around your schedule — including evenings and weekends",
    ]}
    workHeading="How online sessions work"
    workItems={[
      "Sessions delivered via Zoom — the link is sent ahead of each session",
      "Sessions are typically 60 minutes, though shorter or longer options are available",
      "Book sessions around your schedule — mornings, evenings and weekends available",
      "Notes, exercises and resources sent after each session",
      "Progress tracked across your programme so every session builds on the last",
    ]}
    extraSections={[
      {
        heading: "Does Online Really Work?",
        content:
          "Yes. For speech and communication coaching, online sessions are highly effective. You can be seen clearly, heard clearly, and coached in real time — just as you would be in person. In fact, for many clients, online coaching is more practical, more flexible and easier to commit to. The Speech Coach has worked with professionals across more than 30 countries — all online.",
      },
    ]}
    closingHeading="Wherever You Are, We Can Work Together."
    closingBody="Book a free 20-minute consultation and let's get started."
  />
);

export default OnlineCoaching;
