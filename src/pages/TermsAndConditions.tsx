import content from "@/content/terms-and-conditions.md?raw";
import LegalPage from "@/components/LegalPage";

export default function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms and Conditions of Service"
      markdownContent={content}
      metaTitle="Terms and Conditions | The Speech Coach"
      metaDescription="The Speech Coach Limited Terms and Conditions of Service. Version 4.1, effective January 2026. England & Wales jurisdiction."
      slug="terms-and-conditions"
    />
  );
}
