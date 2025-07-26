"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function EarlyAccessSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Email submitted:", email);

    setIsSubmitting(false);
    setEmail("");

    alert("Thank you! You've been added to our early access list.");
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10">
        <div className="bg-[#0C133B] rounded-t-3xl px-8 py-12 md:px-12 md:py-16 min-h-[60vh]">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-white text-lg mb-4">
                Ready to get started?
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Join the Early Access List. Be the first to try Recovery Mode.
              </h2>
              <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
                Enter your email to get access as soon as we launch.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 max-w-md mx-auto"
              >
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-left text-white text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="bg-[#77AFF0] cursor-pointer hover:bg-[#77AFF0]/90 text-white px-6 sm:px-8 py-6 sm:py-6 text-base sm:text-lg font-semibold rounded-lg group transition-all duration-200 hover:shadow-lg w-full"
                >
                  {isSubmitting ? "Submitting..." : "Get Early Access"}
                  {!isSubmitting && (
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
