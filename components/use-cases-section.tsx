import { Building2, Smartphone, Shield } from "lucide-react"

const useCases = [
  {
    icon: Building2,
    title: "API Monetization",
    description: "Charge per-request for your APIs without complex subscription models. Pay-per-use made simple.",
  },
  {
    icon: Smartphone,
    title: "Content Access",
    description: "Gate premium content, articles, or media with instant micropayments. No accounts required.",
  },
  {
    icon: Shield,
    title: "Enterprise Solutions",
    description: "Deploy permissioned payment rails for B2B integrations with full audit trails.",
  },
]

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-stellar-navy mb-4 text-balance">Real Use Cases</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how developers are using @402-stellar to build the future of web monetization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-border hover:border-stellar-gold/30 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center mb-6">
                <useCase.icon className="h-8 w-8 text-stellar-navy" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-stellar-navy mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
