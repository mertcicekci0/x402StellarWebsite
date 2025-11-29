"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, ExternalLink } from "lucide-react"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Real Use Cases", href: "#use-cases" },
  { name: "Start Building", href: "#features" },
  { name: "Community", href: "#community" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-10 w-10 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105">
              <div className="relative w-full h-full">
                <Image
                  src="/logo.png"
                  alt="@402-stellar"
                  fill
                  sizes="40px"
                  className="object-contain"
                  priority
                />
              </div>
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-stellar-gold/50 -z-10 rounded-full" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#docs"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Dev Docs
            </Link>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Search className="h-5 w-5" />
            </Button>
            <Button className="bg-stellar-navy hover:bg-stellar-navy/90 text-white">Launch Dashboard</Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-border">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full bg-stellar-navy hover:bg-stellar-navy/90 text-white">Launch Dashboard</Button>
          </div>
        </div>
      )}
    </header>
  )
}
