import Link from "next/link"
import Logo from "@/utils/Logo"
import TwitterIcon from "@/utils/icons/TwitterIcon"
import InstagramIcon from "@/utils/icons/InstgramIcon"
import YouTubeIcon from "@/utils/icons/YouTubeIcon"
import FacebookIcon from "@/utils/icons/FaceBookIcon"
import FramerIcon from "@/utils/icons/FramerIcon"

const footerLinks = {
  products: [
    { name: "For Personal", href: "/personal" },
    { name: "For Businesses", href: "/businesses" },
    { name: "Multi-currency account", href: "/multi-currency" },
    { name: "Payment card", href: "/payment-card" },
    { name: "Country coverage", href: "/coverage" },
  ],
  company: [
    { name: "About us", href: "/about" },
    { name: "Customer stories", href: "/stories" },
    { name: "Press", href: "/press" },
    { name: "Careers", href: "/careers" },
    { name: "Contact us", href: "/contact" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Help centre", href: "/help" },
    { name: "Developers", href: "/developers" },
    { name: "Terms and privacy", href: "/terms" },
  ],
}

const socialLinks = [
  { name: "Facebook", href: "#", icon: <FacebookIcon/> },
  { name: "Twitter", href: "#", icon: <TwitterIcon/> },
  { name: "Instagram", href: "#", icon: <InstagramIcon/> },
  { name: "YouTube", href: "#", icon: <YouTubeIcon/> },
]

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 sm:px-10 md:px-15 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
             <Logo variant="White"/>
            </Link>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-[#77AFF0] font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-[#77AFF0] font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-[#77AFF0] font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4 text-sm text-white order-2 md:order-1">
              <span>Copyright © Paymill 2023</span>
              <span>•</span>
              <FramerIcon/>
              <span>Made in Framer</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 order-1 md:order-2 mb-4 md:mb-0">
              {socialLinks.map((social) => {
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
