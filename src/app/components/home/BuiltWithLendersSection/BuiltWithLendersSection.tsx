import { ContentSection } from "@/app/components/common/content-section"

export function BuiltWithLendersSection() {
  return (
    <ContentSection
      heading="Built with Lenders, Not Against Them."
      subheading="Fynancr isn't a band-aid solution."
      paragraphs={[
        "We're a pre-default partner.",
        "Our platform works with lenders to offer real payment relief, backed by transparency and data.",
      ]}
      imageSrc="/home-images/fy-built-with.png"
      imageAlt="Business professionals shaking hands in office meeting"
      imagePosition="right"
    />
  )
}
