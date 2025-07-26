"use client";

import { useEffect, useState } from "react";
import { Header } from "../common/header";
import { BuiltWithLendersSection } from "./BuiltWithLendersSection/BuiltWithLendersSection";
import { HeroSection } from "./HeroSection/HeroSection";
import { HowItWorksSection } from "./HowItWorksSection/HowItWorksSection";
import { SafePrivateSection } from "./SafePrivateSection/SafePrivateSection";
import { WhyBorrowersLoveFy } from "./WhyBorrowersLoveFy/WhyBorrowersLoveFy";
import { WhoWeHelpSection } from "./WhoWeHelpSection/WhoWeHelpSection";
import { EarlyAccessSection } from "./EarlyAccessSection/EarlyAccessSection";
import { Footer } from "../common/footer";

interface HomePageProps {
  headerVariant?: "transparent" | "solid";
}

export function HomePage({ headerVariant = "transparent" }: HomePageProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const currentHeaderVariant = isScrolled ? "solid" : headerVariant;
  return (
    <div className="min-h-screen">
      <Header variant={currentHeaderVariant} />
      <HeroSection />
      <HowItWorksSection />
      <WhyBorrowersLoveFy />
      <BuiltWithLendersSection />
      <SafePrivateSection />
      <WhoWeHelpSection />
      <EarlyAccessSection />
      <Footer />
    </div>
  );
}
