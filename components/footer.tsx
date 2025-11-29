import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Pricing", href: "#pricing" },
    { name: "Changelog", href: "#changelog" },
  ],
  developers: [
    { name: "Documentation", href: "#docs" },
    { name: "API Reference", href: "#api" },
    { name: "SDKs", href: "#sdks" },
    { name: "Examples", href: "#examples" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
  ],
}

export function Footer() {
  return (
    <footer id="community" className="bg-white text-black py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand - Spans 2 columns on desktop for better spacing */}
          <div className="col-span-2 md:col-span-2 pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-32 h-12">
                <Image
                  src="/logo.png"
                  alt="x402 Logo"
                  fill
                  className="object-contain opacity-90 scale-125 origin-left"
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed font-light max-w-xs">
              An open protocol for internet-native payments. Built to empower builders on the Stellar Network.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium mb-6 text-black text-sm tracking-wide">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-black transition-colors font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-black text-sm tracking-wide">Developers</h4>
            <ul className="space-y-3">
              {footerLinks.developers.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-black transition-colors font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-black text-sm tracking-wide">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-black transition-colors font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-black text-sm tracking-wide">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-black transition-colors font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-light">© {new Date().getFullYear()} x402 Protocol. All rights reserved.</p>
          <p className="text-xs text-gray-400 font-light flex items-center gap-1">
            Built on Stellar
          </p>
        </div>
      </div>
    </footer>
  )
}
