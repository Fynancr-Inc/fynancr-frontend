import Image from "next/image";
import VerifiedIcon from "@/utils/icons/VerifiedIcon";

const helpItems = [
  "Facing sudden income drops",
  "Managing tight household budgets",
  "Wanting to avoid default or garnishment",
  "Who need time to get back on track — without ruining their credit",
];

export function WhoWeHelpSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home-images/fy-who-we-help.png"
          alt="Couple looking at tablet together planning finances"
          fill
          className="object-cover"
        />
      </div>

      {/* White gradient only on content side */}
      <div className="absolute left-0 top-0 bottom-0 w-full md:w-1/2 bg-gradient-to-r from-white to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-20">
        <div className="max-w-2xl">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Who We Help
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                Fynancr is built for borrowers:
              </h3>
            </div>

          <div className="space-y-2">
            {helpItems.map((benefit, index) => (
              <div key={index} className="flex items-center justify-start space-x-4">
                <div className="w-[50px]">
                 <VerifiedIcon fillColor="#5A73FF" />
                </div>
                <p className="text-black text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
