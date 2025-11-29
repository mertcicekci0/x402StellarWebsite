import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { FeaturesSection } from "@/components/features-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <LogoMarquee />
        <FeaturesSection />
        <UseCasesSection />
      </main>
      <Footer />
    </div>
  )
}
