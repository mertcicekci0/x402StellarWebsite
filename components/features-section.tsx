import { Zap, CircleDollarSign, Code } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Instant Settlement",
    description: "Transactions finalize in 3-5 seconds on the Stellar network. No waiting, no friction.",
  },
  {
    icon: CircleDollarSign,
    title: "Near-Zero Fees",
    description: "Average transaction costs less than $0.0001. Perfect for micropayments at any scale.",
  },
  {
    icon: Code,
    title: "Developer First",
    description: "Clean APIs, comprehensive SDKs, and extensive documentation to get you shipping fast.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-stellar-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-balance">Why @402-stellar?</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto text-pretty">
            Built on Stellar's proven infrastructure for real-world financial applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-stellar-gold/20 flex items-center justify-center mb-6 group-hover:bg-stellar-gold/30 transition-colors">
                <feature.icon className="h-6 w-6 text-stellar-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
