"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/components/libs/utils"
import Logo from "@/utils/Logo"

interface HeaderProps {
  variant?: "transparent" | "solid"
  className?: string
}

export function Header({ variant = "transparent", className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          variant === "transparent" ? "bg-transparent sm:px-10 md:px-15" : "bg-white/95 backdrop-blur-sm border-b border-gray-200",
          className,
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={cn(
                "md:hidden p-2 rounded-md transition-colors",
                variant === "transparent" ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100",
              )}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
             <Logo />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/how-it-works"
                className={cn(
                  "text-sm font-medium hover:opacity-80 transition-opacity",
                  variant === "transparent" ? "text-white" : "text-gray-700",
                )}
              >
                How It Works
              </Link>
              <Link
                href="/why-borrowers"
                className={cn(
                  "text-sm font-medium hover:opacity-80 transition-opacity",
                  variant === "transparent" ? "text-white" : "text-gray-700",
                )}
              >
                Why Borrowers
              </Link>
              <Link
                href="/who-we-help"
                className={cn(
                  "text-sm font-medium hover:opacity-80 transition-opacity",
                  variant === "transparent" ? "text-white" : "text-gray-700",
                )}
              >
                Who We Help
              </Link>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "text-sm font-medium bg-[#77AFF0]",
                  variant === "transparent" ? "text-white hover:bg-[#77AFF0]/90" : "text-gray-700 hover:bg-gray-100",
                )}
              >
                Log In
              </Button>
              <Button
                size="sm"
                className="bg-white hover:bg-white/90 text-black px-4 py-2 rounded-md text-sm font-medium"
              >
                Register
              </Button>
            </div>

            {/* Mobile Register Button */}
            <div className="md:hidden">
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={toggleMobileMenu} />
          <div
            className={cn(
              "fixed top-0 left-0 h-full w-80 max-w-[80vw] transform transition-transform duration-300 ease-in-out",
              variant === "transparent" ? "bg-gray-900" : "bg-white",
            )}
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <nav className="flex flex-col space-y-6">
                <Link
                  href="/how-it-works"
                  className={cn(
                    "text-lg font-medium hover:opacity-80 transition-opacity",
                    variant === "transparent" ? "text-white" : "text-gray-700",
                  )}
                  onClick={toggleMobileMenu}
                >
                  How It Works
                </Link>
                <Link
                  href="/why-borrowers"
                  className={cn(
                    "text-lg font-medium hover:opacity-80 transition-opacity",
                    variant === "transparent" ? "text-white" : "text-gray-700",
                  )}
                  onClick={toggleMobileMenu}
                >
                  Why Borrowers
                </Link>
                <Link
                  href="/who-we-help"
                  className={cn(
                    "text-lg font-medium hover:opacity-80 transition-opacity",
                    variant === "transparent" ? "text-white" : "text-gray-700",
                  )}
                  onClick={toggleMobileMenu}
                >
                  Who We Help
                </Link>
              </nav>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col space-y-4">
                  <Button
                    variant="ghost"
                    className={cn(
                      "justify-start text-lg font-medium",
                      variant === "transparent" ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100",
                    )}
                    onClick={toggleMobileMenu}
                  >
                    Log In
                  </Button>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white justify-start text-lg font-medium"
                    onClick={toggleMobileMenu}
                  >
                    Register
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
