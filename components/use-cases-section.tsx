"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const useCases = [
  {
    category: "API MONETIZATION",
    title: "API Monetization",
    description: "Charge per-request for your APIs without complex subscription models. Pay-per-use made simple.",
    icon: "/settings.png",
  },
  {
    category: "CONTENT ACCESS",
    title: "Content Access and Subscription Mechanism",
    description: "Gate premium content, articles, or media with instant micropayments. No accounts required. Seamless subscription management.",
    icon: "/security.png",
  },
  {
    category: "SECURITY LAYER",
    title: "Enterprise Solutions",
    description: "Deploy permissioned payment rails for B2B integrations with full audit trails and enterprise-grade security.",
    icon: "/locked.png",
  },
]

function UseCaseCard({ useCase, index }: { useCase: typeof useCases[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group relative p-12 sm:p-14 rounded-2xl bg-white border border-black/10 hover:border-black/20 transition-all duration-500 overflow-hidden ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Wavy vertical lines background with distortion effect */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 3px,
            rgba(0, 0, 0, 0.05) 3px,
            rgba(0, 0, 0, 0.05) 6px
          )`,
          maskImage: 'radial-gradient(ellipse 80% 60% at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at center, black 30%, transparent 80%)',
          transform: 'perspective(1000px) rotateY(0deg)',
        }}
      />
      
      {/* Enhanced glow around icon area - Ultra Soft */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-64 h-64 bg-slate-200/30 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-48 bg-sky-100/40 rounded-full blur-2xl opacity-40" />
      
      {/* Icon container - much larger with animation */}
      <div className="relative flex items-center justify-center mb-8 h-40 sm:h-48">
        <div
          className={`relative w-40 h-40 sm:w-48 sm:h-48 drop-shadow-[0_0_20px_rgba(0,0,0,0.05)] transition-all duration-500 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_0_30px_rgba(0,0,0,0.08)] ${
            isVisible
              ? "opacity-100 scale-100 rotate-0 animate-pulse-slow"
              : "opacity-0 scale-75 rotate-12"
          }`}
          style={{
            transitionDelay: `${index * 150 + 200}ms`,
          }}
        >
          <Image
            src={useCase.icon}
            alt={useCase.title}
            width={192}
            height={192}
            className="object-contain w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
            priority
          />
        </div>
      </div>
      
      {/* Category label */}
      <div
        className={`text-center mb-5 transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
        style={{
          transitionDelay: `${index * 150 + 400}ms`,
        }}
      >
        <span className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
          {useCase.category}
        </span>
      </div>
      
      {/* Title */}
      <h3
        className={`text-2xl sm:text-3xl font-bold mb-5 text-center text-black transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
        style={{
          transitionDelay: `${index * 150 + 500}ms`,
        }}
      >
        {useCase.title}
      </h3>
      
      {/* Description */}
      <p
        className={`text-gray-600 leading-relaxed text-center text-sm max-w-sm mx-auto transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
        style={{
          transitionDelay: `${index * 150 + 600}ms`,
        }}
      >
        {useCase.description}
      </p>
    </div>
  )
}

export function UseCasesSection() {
  const [titleVisible, setTitleVisible] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(true)
          }
        })
      },
      {
        threshold: 0.3,
      }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current)
      }
    }
  }, [])

  return (
    <section id="use-cases" className="relative py-24 bg-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-700 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-black mb-6">Real Use Case Ideas</h2>
          <p className="text-lg sm:text-xl font-light text-gray-500 max-w-2xl mx-auto leading-relaxed">
            See how developers are using <span className="text-black font-normal">@402-stellar</span> to build the future of web monetization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
