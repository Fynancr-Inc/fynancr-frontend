import { ContentSection } from "../../common/content-section";


export function SafePrivateSection() {
  return (
    <ContentSection
      heading="Safe. Private. Secure."
      subheading="Your privacy is our priority."
      paragraphs={[
        "We use bank-grade encryption and integrations like Plaid to verify only what’s necessary.",
      ]}
      imageSrc="/home-images/fy-private-safe.png"
      imageAlt="Business professionals shaking hands in office meeting"
      imagePosition="left"
    />
  )
}
