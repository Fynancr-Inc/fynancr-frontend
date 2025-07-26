import { cn } from "@/components/libs/utils";
import Image from "next/image";

interface ContentSectionProps {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  className?: string;
}

export function ContentSection({
  heading,
  subheading,
  paragraphs,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  className,
}: ContentSectionProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center",
              imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
            )}
          >
            <div
              className={cn(
                "space-y-6",
                imagePosition === "left" ? "lg:col-start-2" : "lg:col-start-1"
              )}
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {heading}
                </h2>
                {subheading && (
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                    {subheading}
                  </h3>
                )}
              </div>

              <div className="space-y-4">
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-gray-600 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div
              className={cn(
                "relative",
                imagePosition === "left" ? "lg:col-start-1" : "lg:col-start-2"
              )}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
