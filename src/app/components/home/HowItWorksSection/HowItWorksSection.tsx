import { FeatureBox } from "../../common/feature-box"
import LinkIcon from "@/utils/icons/LinkIcon"
import NetworkIcon from "@/utils/icons/NetworkIcon"
import ReverseIcon from "@/utils/icons/ReverseIcon"

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureBox
            icon={<LinkIcon/>}
            title="Link Your Loan"
            description="Connect your loan with a supported lender to check eligibility for Recovery Mode."
          />

          <FeatureBox
            icon={<NetworkIcon/>}
            title="Share Your Situation"
            description="Tell us your income and essential living expenses. No credit checks. No shame."
          />

          <FeatureBox
            icon={<ReverseIcon/>}
            title="Choose a Recovery Plan"
            description="Select a lender-approved plan to reduce your monthly payment for 3-12 months, all while staying in good standing."
          />
        </div>
      </div>
    </section>
  )
}
