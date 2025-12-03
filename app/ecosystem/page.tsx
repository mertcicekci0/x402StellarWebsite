"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ExternalLink, Search, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const categories = [
  "All Projects",
  "Client-Side Integrations",
  "Services/Endpoints",
  "Infrastructure & Tooling",
  "Learning & Community Resources",
  "Facilitators"
]

const projects = [
  {
    title: "1Shot API",
    category: "Infrastructure & Tooling",
    description: "A general purpose facilitator to monetize any n8n workflow with your favorite ERC-20 token.",
    logo: "/code.png", // Using existing placeholder
    link: "#",
    color: "bg-cyan-50 text-cyan-700"
  },
  {
    title: "402104",
    category: "Infrastructure & Tooling",
    description: "Generate expirable, paywalled links to private ANS-104 DataItems on Arweave. Compatible with both S3 and ANS-104 data standards.",
    logo: "/locked.png", // Using existing placeholder
    link: "#",
    color: "bg-yellow-50 text-yellow-700"
  },
  {
    title: "AEON",
    category: "Services/Endpoints",
    description: "The omnichain settlement layer that enables AI agents to seamlessly pay millions of real-world merchants across SEA, LATAM, and Africa – powered by x402 and USDC.",
    logo: "/dollars.png", // Using existing placeholder
    link: "#",
    color: "bg-green-50 text-green-700"
  }
]

export default function EcosystemPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === "All Projects" || project.category === activeCategory
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/10 mb-4">
             <span className="text-xs font-medium text-black">Ecosystem</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black">
            Explore the <span className="text-[#d4a853]">x402 Ecosystem</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover innovative projects, tools, and applications built by our growing community of partners and developers leveraging x402 technology.
          </p>
          
          <div className="pt-4">
             <Button asChild className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-6">
                <a 
                  href="https://github.com/mertkaradayi/stellar-x402/issues/new?labels=ecosystem&template=project_submission.md" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Submit your project
                </a>
             </Button>
          </div>
        </div>

        {/* Filter & Search */}
        <div className="space-y-8 mb-16">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-black text-white shadow-lg shadow-black/20 scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="max-w-md mx-auto relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-black transition-colors" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white border border-black/5 rounded-3xl p-8 hover:border-black/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${project.color} mb-4`}>
                  <div className="relative w-8 h-8">
                    <Image
                      src={project.logo}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-black/5">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#d4a853] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-8 h-20 overflow-hidden">
                {project.description}
              </p>
              
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#d4a853] transition-colors border-b border-black/10 pb-0.5 hover:border-[#d4a853]"
              >
                Visit website <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <div className="text-gray-400 mb-2">No projects found matching your criteria.</div>
            <button 
              onClick={() => {setActiveCategory("All Projects"); setSearchQuery("")}}
              className="text-black font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}
