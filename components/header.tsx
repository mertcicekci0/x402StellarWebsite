"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Read The Docs", href: "/docs" },
  { name: "View Ecosystem", href: "/ecosystem" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
               <div className="relative w-32 h-10">
                <Image
                  src="/logo.png"
                  alt="@402-stellar"
                  fill
                  className="object-contain object-left scale-125"
                />
              </div>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-600 hover:text-black transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* GitHub Dropdown - Simplified */}
            <div className="relative group">
               <button className="text-sm text-gray-600 hover:text-black font-medium transition-colors flex items-center gap-2">
                 <Github className="w-4 h-4" />
                 <span>GitHub</span>
               </button>
               
               <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg border border-black/5 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                  <div className="p-1">
                    <Link
                      href="https://github.com/mertkaradayi/stellar-x402"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      x402 Protocol
                    </Link>
                    <Link
                      href="https://github.com/mertcicekci0/stellar-x402-portal"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      x402 Portal
                    </Link>
                  </div>
               </div>
            </div>

            <Button 
              asChild 
              variant="default" 
              size="sm" 
              className="bg-black text-white hover:bg-gray-800 rounded-full px-5 h-9 text-sm font-medium"
            >
              <Link href="https://stellar-x402-examples-server-example-production.up.railway.app/" target="_blank">
                Try it Out
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-black p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-black hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100">
               <Link
                  href="https://github.com/mertkaradayi/stellar-x402"
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-3 text-base font-medium text-gray-600 hover:text-black hover:bg-gray-50 rounded-md"
                >
                  <Github className="w-5 h-5" />
                  x402 Protocol
                </Link>
                <Link
                  href="https://github.com/mertcicekci0/stellar-x402-portal"
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-3 text-base font-medium text-gray-600 hover:text-black hover:bg-gray-50 rounded-md"
                >
                  <Github className="w-5 h-5" />
                  x402 Portal
                </Link>
                <div className="mt-4 px-3">
                  <Button 
                    asChild 
                    className="w-full bg-black text-white hover:bg-gray-800 rounded-full h-10"
                  >
                    <Link href="https://stellar-x402-examples-server-example-production.up.railway.app/" target="_blank">
                      Try it Out
                    </Link>
                  </Button>
                </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
