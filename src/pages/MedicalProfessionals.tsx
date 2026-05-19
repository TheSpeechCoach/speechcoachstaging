import ServicePage from "@/components/ServicePage";

const MedicalProfessionals = () => (
  <ServicePage
    metaTitle="Speech Coaching for Doctors | Communication for Medical Professionals | The Speech Coach"
    metaDescription="Communication coaching for consultants, surgeons, GPs and medical professionals. Grand Rounds, conference presentations and clinical leadership coaching."
    h1={
      <>
        Lost in the Jargon. Lost in the Silence.{" "}
        <span className="italic text-gradient-gold">Lost the Patient.</span>
      <br />
      <span className="italic text-gradient-gold">Now you're here.</span>
      </>
    }
    subheading="Communication coaching for medical professionals trained in everything — except how to communicate it."
    intro="Medical training builds clinical excellence. It rarely builds communication excellence. Whether presenting at Grand Rounds, preparing a conference keynote or managing difficult patient conversations, the ability to communicate clearly separates good clinicians from trusted ones."
    problems={[
      "Presenting at conference Grand Rounds or academic setting",
      "Asked to give a public lecture or keynote",
      "Moving into clinical leadership",
      "Struggling to explain complex clinical information accessibly",
      "Patient consultations technically excellent but emotionally difficult",
      "Told communication style needs work",
    ]}
    workOn={[
      "Conference and Grand Rounds coaching",
      "Translating clinical complexity into clarity",
      "Leadership communication for clinical directors",
      "Patient consultation coaching",
      "Media training for healthcare professionals",
      "Managing difficult conversations",
    ]}
    closingHeading="Your clinical expertise deserves communication that matches it."
    closing="Confidential coaching for NHS and private sector medical professionals."
    ctaLabel="Book a Consultation"
  />
);

export default MedicalProfessionals;
