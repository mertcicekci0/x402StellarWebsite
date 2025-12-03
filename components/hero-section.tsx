"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section className="relative min-h-fit sm:min-h-screen bg-white overflow-hidden">
      {/* Video Background - Right Side, Vertically Centered, Masked, Huge, Interactive */}
      <div className="hidden md:block absolute bottom-20 md:bottom-auto md:top-1/2 left-1/2 md:left-auto right-auto md:right-[-40%] transform -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 w-[90vw] md:w-[120vw] h-[40vh] md:h-[150vh] z-10 opacity-100 pointer-events-none md:pointer-events-auto">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain md:object-contain scale-[1.8] md:scale-100 mix-blend-multiply [mask-image:radial-gradient(circle,black_40%,transparent_65%)] transition-all duration-700 ease-out hover:scale-105 cursor-pointer"
          onMouseEnter={() => videoRef.current?.pause()}
          onMouseLeave={() => videoRef.current?.play()}
        >
          <source src="/landingvideo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content Container */}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-32 sm:pb-32 pointer-events-none">
        <div className="max-w-4xl text-left min-h-[auto] sm:min-h-[80vh] flex flex-col justify-center pointer-events-auto">
          {/* Text Content */}
          <div className="space-y-8 sm:space-y-10">
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium text-black leading-[0.95] tracking-tighter">
              <span className="block">Stellar x402</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-500 max-w-xl leading-relaxed font-light">
              @402-stellar is built to empower builders, creators, and people everywhere to build apps, grow businesses, create what they love, and earn onchain.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
              <Button
                size="lg"
                asChild
                className="bg-black hover:bg-gray-800 text-white font-medium px-8 h-14 rounded-full text-base transition-all hover:scale-105 hover:shadow-lg"
              >
                <a href="https://stellar-x402-examples-server-example-production.up.railway.app/" target="_blank" rel="noopener noreferrer">
                  Try it Out
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-200 text-black hover:bg-gray-50 hover:border-gray-300 px-8 h-14 rounded-full text-base bg-white transition-all"
                  asChild
                >
                  <a href="/docs">Read the Docs</a>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-gray-600 hover:text-black hover:bg-transparent px-6 h-14 rounded-full text-base"
                  asChild
                >
                  <Link href="/ecosystem">View Ecosystem</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
