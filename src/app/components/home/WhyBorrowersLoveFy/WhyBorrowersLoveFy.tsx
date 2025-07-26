import Image from "next/image"
import VerifiedIcon from "@/utils/icons/VerifiedIcon"

const benefits = [
  "Support from financial coaches",
  "Simple, judgment-free onboarding",
  "No late fees, no collection calls",
  "Extension options available",
  "Protect your credit",
]

export function WhyBorrowersLoveFy() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/home-images/fy-why-love-fynancr.png" alt="Professional team" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r bg-[#052f58] opacity-80 z-10" />
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 flex items-center justify-center flex-col">
        <div className="text-center mb-12 md:mb-12 mt-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Why Borrowers Love Fynancr</h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="md:hidden space-y-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-4">
                 <VerifiedIcon />
                <p className="text-white text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <div className="flex space-x-10 items-start mb-8">
              <div className="flex items-center space-x-2">
                <VerifiedIcon />
                <p className="text-white text-lg font-medium">No late fees, no collection calls</p>
              </div>

              <div className="flex items-center space-x-2">
                <VerifiedIcon />
                <p className="text-white text-lg font-medium">Protect your credit</p>
              </div>

              <div className="flex items-center space-x-2">
                <VerifiedIcon />
                <p className="text-white text-lg font-medium">Support from financial coaches</p>
              </div>
            </div>
            <div className="flex justify-center space-x-10">
              <div className="flex items-center space-x-4">
                <VerifiedIcon />
                <p className="text-white text-lg font-medium">Simple, judgment-free onboarding</p>
              </div>

              <div className="flex items-center space-x-4">
                <VerifiedIcon />
                <p className="text-white text-lg font-medium">Extension options available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
