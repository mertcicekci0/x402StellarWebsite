"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check, ArrowRight } from "lucide-react"
import { PaymentDialog } from "@/components/payment-dialog"

export function HeroSection() {
  const [copied, setCopied] = useState(false)
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false)
  const installCommand = "npm install @402-stellar"

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Subtle golden gradient background similar to Stellar */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 via-amber-100/40 to-white" />

      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(26, 31, 54, 0.15) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stellar-navy/5 border border-stellar-navy/10 mb-12">
          <span className="text-xs font-medium text-stellar-navy">Built on Stellar</span>
          <span className="h-1 w-1 rounded-full bg-stellar-gold" />
          <span className="text-xs text-muted-foreground">402 Protocol</span>
        </div>

        {/* Premium Text Logo */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative group">
            {/* Glow effect behind text */}
            <div className="absolute inset-0 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-stellar-gold via-stellar-cyan to-stellar-gold" />
            
            {/* Premium text with effects */}
            <h1 
              className="relative font-space-grotesk text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-stellar-navy select-none transform transition-all duration-500 group-hover:scale-[1.02]"
              style={{
                letterSpacing: '-0.03em',
                lineHeight: '1.1',
                textShadow: '0 2px 20px rgba(26, 31, 54, 0.08), 0 4px 40px rgba(212, 168, 83, 0.12), 0 8px 60px rgba(26, 31, 54, 0.05)',
              }}
            >
              <span className="relative inline-block">
                @402-stellar
              </span>
              
              {/* Subtle gradient overlay on hover */}
              <span 
                className="absolute inset-0 bg-gradient-to-r from-stellar-gold/30 via-stellar-cyan/20 to-stellar-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.03em',
                }}
              >
                @402-stellar
              </span>
            </h1>
          </div>
        </div>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty">
          An open protocol for internet-native payments on Stellar ecosystem
        </p>

        {/* Install command block */}
        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-stellar-navy text-white font-mono text-sm sm:text-base mb-8 shadow-lg">
          <span className="text-stellar-gold">$</span>
          <code>{installCommand}</code>
          <button
            onClick={copyToClipboard}
            className="ml-2 p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Copy install command"
          >
            {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-white/70" />}
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => setPaymentDialogOpen(true)}
            className="bg-stellar-gold hover:bg-stellar-gold/90 text-stellar-navy font-semibold px-8 h-12"
          >
            Try It Out
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-stellar-navy/20 text-stellar-navy hover:bg-stellar-navy/5 px-8 h-12 bg-transparent"
            asChild
          >
            <a href="/docs">Read the Docs</a>
          </Button>
        </div>
      </div>

      {/* Payment Dialog */}
      <PaymentDialog 
        isOpen={paymentDialogOpen} 
        onClose={() => setPaymentDialogOpen(false)} 
      />
    </section>
  )
}
