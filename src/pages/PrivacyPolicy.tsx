import content from "@/content/privacy-policy.md?raw";
import LegalPage from "@/components/LegalPage";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy, Confidentiality, Data Protection & Intellectual Property Policy"
      markdownContent={content}
      metaTitle="Privacy Policy | The Speech Coach"
      metaDescription="The Speech Coach Limited Privacy, Confidentiality, Data Protection & Intellectual Property Policy. UK GDPR-compliant. Version 5.1, effective January 2026."
      slug="privacy-policy"
    />
  );
}
