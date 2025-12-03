"use client"

import { useEffect, useState } from "react"
import { Check, Shield, Zap, Globe, Code, CreditCard, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

export function BentoGridSection() {
  return (
    <section className="py-24 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-black">
            Powerful primitives for <br />
            <span className="text-gray-500">programmable money.</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Visualizing how x402-stellar-express handles the heavy lifting of payment logic, verification, and settlement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: The 402 Flow */}
          <Card402Flow />
          
          {/* Card 2: Live Settlement */}
          <CardSettlement />
          
          {/* Card 3: Code Config */}
          <CardCodeConfig />

          {/* Card 4: Verification Shield */}
          <CardVerification />

          {/* Card 5: Asset Agnostic */}
          <CardAssets />

          {/* Card 6: Error Handling */}
          <CardErrorHandling />
        </div>
      </div>
    </section>
  )
}

function BentoCard({ children, className, title, description, icon: Icon }: { 
  children: React.ReactNode
  className?: string
  title: string
  description: string
  icon?: any
}) {
  return (
    <div className={cn("group relative flex flex-col overflow-hidden rounded-xl border border-black/5 bg-white p-6 hover:border-black/10 hover:shadow-sm transition-all", className)}>
      <div className="flex-grow relative min-h-[200px] flex items-center justify-center mb-6 bg-gray-50 rounded-lg overflow-hidden border border-black/5">
        {children}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          {Icon && <Icon className="w-4 h-4 text-gray-500" />}
          <h3 className="font-medium text-black">{title}</h3>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

function Card402Flow() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <BentoCard
      title="HTTP 402 Protocol"
      description="Standardized flow: Request ➔ 402 Challenge ➔ Payment ➔ Resource Access."
      icon={Globe}
    >
      <div className="flex items-center gap-3 text-sm font-mono">
        <div className={cn("px-3 py-1.5 rounded transition-all duration-500", step === 0 ? "bg-blue-100 text-blue-600 border border-blue-200 scale-110 shadow-sm" : "opacity-30 bg-gray-100 text-gray-400")}>
          GET
        </div>
        <div className="text-gray-300">➔</div>
        <div className={cn("px-3 py-1.5 rounded transition-all duration-500", step === 1 ? "bg-yellow-100 text-yellow-600 border border-yellow-200 scale-110 shadow-sm" : "opacity-30 bg-gray-100 text-gray-400")}>
          402
        </div>
        <div className="text-gray-300">➔</div>
        <div className={cn("px-3 py-1.5 rounded transition-all duration-500", step === 2 ? "bg-purple-100 text-purple-600 border border-purple-200 scale-110 shadow-sm" : "opacity-30 bg-gray-100 text-gray-400")}>
          PAY
        </div>
        <div className="text-gray-300">➔</div>
        <div className={cn("px-3 py-1.5 rounded transition-all duration-500", step === 3 ? "bg-green-100 text-green-600 border border-green-200 scale-110 shadow-sm" : "opacity-30 bg-gray-100 text-gray-400")}>
          200
        </div>
      </div>
    </BentoCard>
  )
}

function CardSettlement() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 1
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <BentoCard
      title="Instant Settlement"
      description="Payments settle on the Stellar network in 3-5 seconds with near-zero fees."
      icon={Zap}
    >
      <div className="w-full max-w-[200px] space-y-4">
        <div className="flex justify-between text-xs text-gray-500 font-mono">
          <span>Settling...</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden border border-black/5">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex gap-2 justify-center pt-2">
           {progress === 100 ? (
             <div className="flex items-center gap-1.5 text-green-600 text-xs animate-in fade-in slide-in-from-bottom-2 font-medium">
               <Check className="w-3 h-3" /> Confirmed
             </div>
           ) : (
             <div className="text-xs text-gray-400">Processing Transaction</div>
           )}
        </div>
      </div>
    </BentoCard>
  )
}

function CardCodeConfig() {
  return (
    <BentoCard
      title="Simple Configuration"
      description="Define routes, prices, and assets directly in your Express middleware."
      icon={Code}
    >
      <div className="w-full p-4 text-[10px] font-mono text-gray-600 leading-relaxed">
        <div><span className="text-purple-600">app</span>.use(</div>
        <div className="pl-2"><span className="text-blue-600">paymentMiddleware</span>({`{`}</div>
        <div className="pl-4">routes: {`{`}</div>
        <div className="pl-6 group cursor-pointer bg-yellow-50/50 rounded hover:bg-yellow-50 transition-colors px-1 -ml-1 w-fit">
           <span className="text-green-600">"/api/*"</span>: <span className="text-yellow-600">"1.00"</span>
           <span className="opacity-0 group-hover:opacity-100 ml-2 text-gray-400">// 1 XLM</span>
        </div>
        <div className="pl-4">{`}`},</div>
        <div className="pl-4">payTo: <span className="text-green-600">"G..."</span></div>
        <div className="pl-2">{`}`})</div>
        <div>)</div>
      </div>
      
      {/* Overlay gradient to make it look like it continues */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-50 to-transparent" />
    </BentoCard>
  )
}

function CardVerification() {
  const [status, setStatus] = useState<'idle' | 'checking' | 'verified'>('idle')

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus('checking')
      setTimeout(() => setStatus('verified'), 1500)
      setTimeout(() => setStatus('idle'), 3000)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <BentoCard
      title="Cryptographic Verification"
      description="Middleware automatically verifies transaction signatures and validity."
      icon={Shield}
    >
      <div className="relative">
        <Shield 
          className={cn(
            "w-16 h-16 transition-all duration-500",
            status === 'idle' && "text-gray-300",
            status === 'checking' && "text-blue-500 animate-pulse",
            status === 'verified' && "text-green-500"
          )} 
        />
        {status === 'verified' && (
          <div className="absolute inset-0 flex items-center justify-center animate-in zoom-in duration-300">
            <Check className="w-8 h-8 text-white drop-shadow-md" />
          </div>
        )}
      </div>
    </BentoCard>
  )
}

function CardAssets() {
  const [activeAsset, setActiveAsset] = useState(0)
  const assets = ["XLM", "USDC", "EURC"]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAsset((prev) => (prev + 1) % assets.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <BentoCard
      title="Multi-Asset Support"
      description="Accept payments in native XLM or any Stellar ecosystem token (USDC, EURC)."
      icon={CreditCard}
    >
      <div className="flex gap-3">
        {assets.map((asset, i) => (
          <div 
            key={asset}
            className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center border transition-all duration-500 text-xs font-bold shadow-sm",
              i === activeAsset 
                ? "border-black/10 bg-white text-black scale-110 shadow-md z-10" 
                : "border-transparent bg-gray-100 text-gray-400 scale-90"
            )}
          >
            {asset}
          </div>
        ))}
      </div>
    </BentoCard>
  )
}

function CardErrorHandling() {
  return (
    <BentoCard
      title="Automated Error Handling"
      description="Gracefully handles timeouts, insufficient funds, and network errors."
      icon={Lock}
    >
      <div className="relative w-full px-6">
        <div className="bg-red-50 border border-red-100 rounded-lg p-3 w-full transform transition-all hover:scale-105 cursor-default shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-[10px] font-mono text-red-600 font-medium">Error: Payment Required</span>
          </div>
          <div className="h-1 w-full bg-red-100 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-red-400" />
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-black/5 px-3 py-1 rounded-full text-[10px] text-gray-500 shadow-md font-medium">
          Auto-Retry
        </div>
      </div>
    </BentoCard>
  )
}
