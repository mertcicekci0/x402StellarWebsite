"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { PaymentDialog } from "@/components/payment-dialog"
import { DitherArtCanvas } from "@/components/dither-art-canvas"
import { AnimatedTerminal } from "@/components/animated-terminal"

export function HeroSection() {
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false)
  const [terminalComplete, setTerminalComplete] = useState(false)

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Dither Art Background - Interactive */}
      <div className="absolute inset-0 w-full h-full">
        <DitherArtCanvas className="w-full h-full" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/10">
              <span className="text-xs font-medium text-black">Built on Stellar</span>
              <span className="h-1 w-1 rounded-full bg-[#d4a853]" />
              <span className="text-xs text-gray-600">402 Protocol</span>
            </div>

            {/* Main Headline - Base.org style */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-tight tracking-tight">
              <span className="block">An open protocol</span>
              <span className="block">for internet-native</span>
              <span className="block">payments</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed">
              @402-stellar is built to empower builders, creators, and people everywhere to build apps, grow businesses, create what they love, and earn onchain.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => setPaymentDialogOpen(true)}
                className="bg-black hover:bg-black/90 text-white font-medium px-8 h-12 rounded-none"
              >
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black/20 text-black hover:bg-black/5 px-8 h-12 rounded-none bg-transparent"
                asChild
              >
                <a href="/docs">Read the Docs</a>
              </Button>
            </div>
          </div>

          {/* Right Column - Terminal */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-2xl">
              <AnimatedTerminal onComplete={() => setTerminalComplete(true)} />
            </div>
          </div>
        </div>

        {/* Bottom Section - Feature Cards (Base.org style) */}
        {terminalComplete && (
          <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-1000">
            {[
              {
                title: "Protocol",
                description: "Open standard for payments",
                color: "gold",
              },
              {
                title: "Stellar",
                description: "Built on Stellar network",
                color: "gray",
              },
              {
                title: "Payments",
                description: "Internet-native transactions",
                color: "white",
              },
              {
                title: "Build",
                description: "Developer-first tools",
                color: "gold",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-black/10 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-black mb-2">{feature.title}</div>
                <div className="text-sm text-gray-600">{feature.description}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Payment Dialog */}
      <PaymentDialog
        isOpen={paymentDialogOpen}
        onClose={() => setPaymentDialogOpen(false)}
      />
    </section>
  )
}
