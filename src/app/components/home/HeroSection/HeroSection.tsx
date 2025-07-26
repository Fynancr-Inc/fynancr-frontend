import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-[80vh] md:h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home-images/fy-home-header.png"
          alt="Professional working at desk"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute left-0 top-0 h-full md:w-[60%] w-full bg-gradient-to-r from-black/80 via-black/60 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-2xl p-6 sm:px-10 md:px-15">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Prevent Default
            <br />
            Before It Happens.
            <br />
            Dignified relief.
            <br />
            Real results.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white mb-8 leading-relaxed max-w-lg">
            Fynancr helps borrowers lower monthly loan payments before they fall behind with lender-approved Recovery
            Mode plans designed to keep everyone on track.
          </p>

          <Button
            size="lg"
            className="bg-[#77AFF0] cursor-pointer hover:bg-[#77AFF0]/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg group transition-all duration-200 hover:shadow-lg w-full sm:w-auto"
          >
            Get Early Access
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
