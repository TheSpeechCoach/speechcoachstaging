import ServicePage from "@/components/ServicePage";

const CryptoBlockchain = () => (
  <ServicePage
    metaTitle="Speech Coach for Crypto & Blockchain | Web3 Communication Coaching | The Speech Coach"
    metaDescription="Pitch and communication coaching for crypto founders, blockchain executives and web3 professionals. Token2049, investor pitches, keynotes and panel appearances."
    h1={
      <>
        Lost in the Whitepaper. Lost the Investor.{" "}
        <span className="italic text-gradient-gold">Lost the Room.</span>
      <br />
      <span className="italic text-gradient-gold">Now you\'re here.</span>
      </>
    }
    subheading="Communication coaching for web3 founders who know the technology — and need to own the narrative."
    intro="The whitepaper is always ready. The speaker rarely is. The crypto and web3 space is full of brilliant builders who struggle to translate technical conviction into investor confidence. Whether presenting at Token2049, pitching to a VC or appearing on a panel, how you communicate determines whether you're taken seriously."
    problems={[
      "Presenting at Token2049, Consensus or a major conference",
      "Pitching to crypto-native or institutional investors",
      "Appear on panels and want to command them",
      "Technical expertise doesn't translate to non-technical audience",
      "Building profile as a web3 thought leader",
      "Want to speak with conviction about your project",
    ]}
    workOn={[
      "Conference and keynote preparation",
      "Investor pitch coaching: crypto and institutional",
      "Panel and moderator skills",
      "Translating technical complexity into narrative",
      "Personal brand and thought leadership",
      "Handling tough questions and sceptical audiences",
    ]}
    closingHeading="Own the narrative, not just the technology."
    closing="Bespoke coaching for web3 founders, executives and thought leaders."
    ctaLabel="Book a Session"
  />
);

export default CryptoBlockchain;
