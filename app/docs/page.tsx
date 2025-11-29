"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Search, ChevronRight, Copy } from "lucide-react"
import Link from "next/link"

const navSections = [
  {
    title: "Welcome to x402",
    items: [
      { name: "x402 Landing Page", href: "/", external: false },
      { name: "GitBook Repo (open for contributions)", href: "https://github.com/402-labs/x402", external: true },
      { name: "Vercel x402 Starter Template", href: "https://github.com/402-labs/x402-starter", external: true },
      { name: "FAQ", href: "#faq", external: false },
    ],
  },
  {
    title: "GETTING STARTED",
    items: [
      { name: "Quickstart for Buyers", href: "https://x402.gitbook.io/x402/quickstart-for-buyers", external: true },
      { name: "Quickstart for Sellers", href: "https://x402.gitbook.io/x402/quickstart-for-sellers", external: true },
    ],
  },
  {
    title: "CORE CONCEPTS",
    items: [
      { name: "HTTP 402", href: "https://x402.gitbook.io/x402/core-concepts/http-402", external: true },
      { name: "Client / Server", href: "https://x402.gitbook.io/x402/core-concepts/client-server", external: true },
      { name: "Facilitator", href: "https://x402.gitbook.io/x402/core-concepts/facilitator", external: true },
      { name: "Wallet", href: "https://x402.gitbook.io/x402/core-concepts/wallet", external: true },
      { name: "Bazaar (Discovery Layer)", href: "https://x402.gitbook.io/x402/core-concepts/bazaar-discovery-layer", external: true },
      { name: "Network & Token Support", href: "https://x402.gitbook.io/x402/core-concepts/network-token-support", external: true },
    ],
  },
  {
    title: "GUIDES",
    items: [
      { name: "MCP Server with x402", href: "https://x402.gitbook.io/x402/guides/mcp-server-with-x402", external: true },
    ],
  },
]

const tocItems = [
  { id: "why-use-x402", title: "Why Use x402?" },
  { id: "who-is-x402-for", title: "Who is x402 for?" },
  { id: "what-can-you-build", title: "What Can You Build?" },
  { id: "how-does-it-work", title: "How Does It Work?" },
  { id: "roadmap", title: "Roadmap" },
  { id: "get-started", title: "Get Started" },
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          return {
            id: item.id,
            element,
            top: element.getBoundingClientRect().top,
          }
        }
        return null
      }).filter(Boolean) as Array<{ id: string; element: HTMLElement; top: number }>

      const current = sections.find((section) => section.top <= 100 && section.top >= -200)
      if (current) {
        setActiveSection(current.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Header with Search */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-stellar-navy flex items-center justify-center">
                <span className="text-white font-bold text-lg">X</span>
              </div>
              <span className="font-semibold text-lg text-stellar-navy">x402</span>
            </Link>
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-stellar-gold/50"
                />
                <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 hidden sm:flex items-center gap-1 px-2 py-1 text-xs font-mono bg-muted rounded border border-border">
                  ⌘K
                </kbd>
              </div>
            </div>
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex pt-16">
        {/* Left Sidebar Navigation */}
        <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-border bg-sidebar/50 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="p-6 space-y-8">
            {navSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground py-1.5 px-2 rounded-md hover:bg-sidebar-accent transition-colors group"
                        >
                          <span>{item.name}</span>
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground py-1.5 px-2 rounded-md hover:bg-sidebar-accent transition-colors"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="pt-8 border-t border-border">
              <a
                href="https://www.gitbook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
              >
                <span>Powered by GitBook</span>
              </a>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Title */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-stellar-navy">Welcome to x402</h1>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-muted-foreground leading-relaxed mb-6">
                This guide will help you understand x402, the open payment standard, and help you get started building or integrating services with x402.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                x402 is the <strong className="text-foreground">open payment standard</strong> that enables services to charge for access to their APIs and content directly over HTTP. It is built around the{" "}
                <code className="px-2 py-1 rounded bg-muted text-foreground font-mono text-sm border border-border">
                  HTTP 402 Payment Required
                </code>{" "}
                status code and allows clients to programmatically pay for resources without accounts, sessions, or credential management.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With x402, any web service can require payment before serving a response, using crypto-native payments for speed, privacy, and efficiency.
              </p>
            </div>

            {/* Contribution Note */}
            <div className="mb-12 p-4 rounded-lg border border-border bg-muted/30">
              <p className="text-sm text-muted-foreground mb-2">
                <strong className="text-foreground">Want to contribute to our docs?</strong> The{" "}
                <a href="https://github.com/402-labs/x402" target="_blank" rel="noopener noreferrer" className="text-stellar-navy hover:underline inline-flex items-center gap-1">
                  GitBook repo
                  <ExternalLink className="h-3 w-3" />
                </a>{" "}
                is open to PRs! Our only ask is that you keep these docs as a neutral resource, with no branded content other than linking out to other resources where appropriate.
              </p>
            </div>

            {/* Note about docs */}
            <div className="mb-12 p-4 rounded-lg border border-border bg-muted/30">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note about the docs:</strong> These docs are the credibly neutral source of truth for x402, as x402 is a completely open standard under the Apache-2.0 license. Coinbase Developer Platform is currently sponsoring{" "}
                <a href="https://x402.gitbook.io/x402" target="_blank" rel="noopener noreferrer" className="text-stellar-navy hover:underline inline-flex items-center gap-1">
                  AI-powered docs for users here
                  <ExternalLink className="h-3 w-3" />
                </a>
                , as we migrate to our own AI-powered solution on the main x402.org domain.
              </p>
            </div>

            {/* Why Use x402 */}
            <section id="why-use-x402" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-bold text-stellar-navy mb-6">Why Use x402?</h2>
              <p className="text-muted-foreground mb-6">
                x402 addresses key limitations of existing payment systems:
              </p>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-stellar-gold mt-1">•</span>
                  <span className="text-muted-foreground">High fees and friction with traditional credit cards and fiat payment processors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-stellar-gold mt-1">•</span>
                  <span className="text-muted-foreground">Incompatibility with machine-to-machine payments, such as AI agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-stellar-gold mt-1">•</span>
                  <span className="text-muted-foreground">Lack of support for micropayments, making it difficult to monetize usage-based services</span>
                </li>
              </ul>
            </section>

            {/* Who is x402 for */}
            <section id="who-is-x402-for" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-bold text-stellar-navy mb-6">Who is x402 for?</h2>
              <div className="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Sellers</h3>
                  <p className="text-sm text-muted-foreground">
                    Service providers who want to monetize their APIs or content. x402 enables direct, programmatic payments from clients with minimal setup.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Buyers</h3>
                  <p className="text-sm text-muted-foreground">
                    Human developers and AI agents seeking to access paid services without accounts or manual payment flows.
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Both sellers and buyers interact directly through HTTP requests, with payment handled transparently through the protocol.
              </p>
            </section>

            {/* What Can You Build */}
            <section id="what-can-you-build" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-bold text-stellar-navy mb-6">What Can You Build?</h2>
              <p className="text-muted-foreground mb-6">
                x402 enables a range of use cases, including:
              </p>
              <ul className="space-y-3 list-none">
                {[
                  "API services paid per request",
                  "AI agents that autonomously pay for API access",
                  "Paywalls for digital content",
                  "Microservices and tooling monetized via microtransactions",
                  "Proxy services that aggregate and resell API capabilities",
                ].map((useCase, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-stellar-gold mt-1">•</span>
                    <span className="text-muted-foreground">{useCase}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* How Does It Work */}
            <section id="how-does-it-work" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-bold text-stellar-navy mb-6">How Does It Work?</h2>
              <p className="text-muted-foreground mb-6">
                At a high level, the flow is simple:
              </p>
              <ol className="space-y-4 list-decimal list-inside">
                {[
                  "A buyer requests a resource from a server.",
                  "If payment is required, the server responds with HTTP 402 Payment Required, including payment instructions.",
                  "The buyer prepares and submits a payment payload.",
                  "The server verifies and settles the payment using an x402 facilitator's /verify and /settle endpoints.",
                  "If payment is valid, the server provides the requested resource.",
                ].map((step, index) => (
                  <li key={index} className="text-muted-foreground pl-2">
                    {step}
                  </li>
                ))}
              </ol>
              <p className="text-sm text-muted-foreground mt-6">
                For more detail, see:{" "}
                <a href="https://x402.gitbook.io/x402/core-concepts/client-server" target="_blank" rel="noopener noreferrer" className="text-stellar-navy hover:underline inline-flex items-center gap-1">
                  Client / Server
                  <ExternalLink className="h-3 w-3" />
                </a>
                ,{" "}
                <a href="https://x402.gitbook.io/x402/core-concepts/facilitator" target="_blank" rel="noopener noreferrer" className="text-stellar-navy hover:underline inline-flex items-center gap-1">
                  Facilitator
                  <ExternalLink className="h-3 w-3" />
                </a>
                ,{" "}
                <a href="https://x402.gitbook.io/x402/core-concepts/http-402" target="_blank" rel="noopener noreferrer" className="text-stellar-navy hover:underline inline-flex items-center gap-1">
                  HTTP 402
                  <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </section>

            {/* Roadmap */}
            <section id="roadmap" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-bold text-stellar-navy mb-6">Roadmap</h2>
              <p className="text-muted-foreground mb-6">
                x402 is designed as an open standard, and we're excited to build x402 alongside our community. Some items in the roadmap we're excited about include:
              </p>
              <ul className="space-y-3 list-none">
                {[
                  "Solutions guides and templates for proxy servers and tools to make an x402 integration as easy as possible",
                  "`exact` scheme support on Solana (SVM)",
                  "`upto` scheme EVM & SVM",
                  "easier semantics for arbitrary tokens using permit as an alt method to `transferWithAuthorization` (likely via `permit` and an up to scheme)",
                  "Arbitrary token support",
                  "Production-ready marketplace and reputation system for x402-compatible endpoints",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-stellar-cyan mt-1">•</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6">
                The goal is to make programmatic commerce accessible, permissionless, and developer-friendly.
              </p>
            </section>

            {/* Get Started */}
            <section id="get-started" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-bold text-stellar-navy mb-6">Get Started</h2>
              <p className="text-muted-foreground mb-6">
                Ready to build? Start here:
              </p>
              <ul className="space-y-2 list-none mb-6">
                <li>
                  <a
                    href="https://x402.gitbook.io/x402/quickstart-for-sellers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stellar-navy hover:underline inline-flex items-center gap-1"
                  >
                    Quickstart for Sellers
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x402.gitbook.io/x402/quickstart-for-buyers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stellar-navy hover:underline inline-flex items-center gap-1"
                  >
                    Quickstart for Buyers
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x402.gitbook.io/x402/core-concepts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stellar-navy hover:underline inline-flex items-center gap-1"
                  >
                    Explore Core Concepts
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/x402"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stellar-navy hover:underline inline-flex items-center gap-1"
                  >
                    Join our community on Discord
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </section>
          </article>
        </main>

        {/* Right Sidebar - On This Page */}
        <aside className="hidden xl:block w-64 flex-shrink-0 border-l border-border bg-sidebar/50 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-6">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">On this page</h3>
            <nav className="space-y-2">
              {tocItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left text-sm py-1.5 px-2 rounded-md transition-colors ${
                    activeSection === item.id
                      ? "text-stellar-navy font-medium bg-sidebar-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  )
}
