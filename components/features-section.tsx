"use client"

import { useState } from "react"
import { IDEWindow } from "@/components/ui/ide-window"
import { cn } from "@/lib/utils"

export function FeaturesSection() {
  const [activeTab1, setActiveTab1] = useState("app.ts")
  const [activeTab2, setActiveTab2] = useState("config.ts")

  return (
    <section id="features" className="py-24 sm:py-32 bg-[#F9F9F9] text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black mb-6">
            Express middleware for <br className="hidden sm:block" />
            instant payments.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Protect your API routes with x402-stellar-express. 
            Monetize your data, AI models, and content with just a few lines of code.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 h-[500px]">
          
          {/* Feature 1: Quick Start */}
          <div className="group relative bg-white rounded-2xl p-2 border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
            <div className="bg-[#F8F9FA] rounded-xl overflow-hidden mb-6 relative flex-grow">
               <IDEWindow 
                 tabs={["app.ts", "client.tsx"]}
                 activeTab={activeTab1} 
                 onTabChange={setActiveTab1}
                 className="h-full border-none shadow-none bg-transparent"
               >
                 {activeTab1 === "app.ts" ? (
                   <div className="text-xs sm:text-sm text-gray-800 overflow-x-auto font-mono leading-relaxed p-2 animate-in fade-in duration-300">
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">1</span><div className="whitespace-pre"><span className="text-purple-600">import</span> express <span className="text-purple-600">from</span> <span className="text-green-600">"express"</span>;</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">2</span><div className="whitespace-pre"><span className="text-purple-600">import</span> {"{ paymentMiddleware }"} <span className="text-purple-600">from</span> <span className="text-green-600">"x402-stellar-express"</span>;</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">3</span><div className="whitespace-pre"></div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">4</span><div className="whitespace-pre"><span className="text-purple-600">const</span> app = <span className="text-blue-600">express</span>();</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">5</span><div className="whitespace-pre"></div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">6</span><div className="whitespace-pre"><span className="text-gray-400">// Protect routes with payments</span></div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">7</span><div className="whitespace-pre">app.<span className="text-blue-600">use</span>(</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">8</span><div className="whitespace-pre">{"  "}<span className="text-blue-600">paymentMiddleware</span>({"{"}</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">9</span><div className="whitespace-pre">{"    "}payTo: <span className="text-green-600">"GXXXX..."</span>,</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">10</span><div className="whitespace-pre">{"    "}routes: {"{"}</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">11</span><div className="whitespace-pre">{"      "}<span className="text-green-600">"/api/premium/*"</span>: {"{ price: "}<span className="text-green-600">"1.00"</span>{" }"},</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">12</span><div className="whitespace-pre">{"      "}<span className="text-green-600">"/api/data"</span>: {"{ price: "}<span className="text-green-600">"0.50"</span>{" }"},</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">13</span><div className="whitespace-pre">{"    "}{"}"},</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">14</span><div className="whitespace-pre">{"  "}{"}"})</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">15</span><div className="whitespace-pre">);</div></div>
                   </div>
                 ) : (
                   <div className="text-xs sm:text-sm text-gray-800 overflow-x-auto font-mono leading-relaxed p-2 animate-in fade-in duration-300">
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">1</span><div className="whitespace-pre"><span className="text-purple-600">import</span> {"{ Paywall }"} <span className="text-purple-600">from</span> <span className="text-green-600">"@x402/react"</span>;</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">2</span><div className="whitespace-pre"></div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">3</span><div className="whitespace-pre"><span className="text-purple-600">export</span> <span className="text-purple-600">default</span> <span className="text-purple-600">function</span> <span className="text-blue-600">App</span>() {"{"}</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">4</span><div className="whitespace-pre">{"  "}<span className="text-purple-600">return</span> (</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">5</span><div className="whitespace-pre">{"    "}&lt;<span className="text-yellow-600">Paywall</span></div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">6</span><div className="whitespace-pre">{"      "}url=<span className="text-green-600">"https://api.myapp.com/premium"</span></div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">7</span><div className="whitespace-pre">{"      "}onSuccess={"{"}(<span className="text-blue-600">data</span>) =&gt; <span className="text-purple-600">console</span>.log(data){"}"}</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">8</span><div className="whitespace-pre">{"    "}&gt;</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">9</span><div className="whitespace-pre">{"      "}&lt;<span className="text-blue-600">PremiumContent</span> /&gt;</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">10</span><div className="whitespace-pre">{"    "}&lt;/<span className="text-yellow-600">Paywall</span>&gt;</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">11</span><div className="whitespace-pre">{"  "});</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">12</span><div className="whitespace-pre">{"}"}</div></div>
                   </div>
                 )}
               </IDEWindow>
            </div>
            <div className="px-4 pb-6">
              <h3 className="text-lg font-semibold mb-2">Easy Integration</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {activeTab1 === "app.ts" 
                  ? "Add payment protection to any Express route with a single middleware. Configure prices per route or pattern."
                  : "Consume protected routes easily on the frontend using our React SDK components."}
              </p>
                </div>
              </div>
              
          {/* Feature 2: Full Configuration */}
          <div className="group relative bg-white rounded-2xl p-2 border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
            <div className="bg-[#F8F9FA] rounded-xl overflow-hidden mb-6 relative flex-grow">
               <IDEWindow 
                 tabs={["config.ts", "assets.ts"]}
                 activeTab={activeTab2}
                 onTabChange={setActiveTab2}
                 className="h-full border-none shadow-none bg-transparent"
               >
                 {activeTab2 === "config.ts" ? (
                   <div className="text-xs sm:text-sm text-gray-800 overflow-x-auto font-mono leading-relaxed p-2 animate-in fade-in duration-300">
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">1</span><div className="whitespace-pre"><span className="text-blue-600">paymentMiddleware</span>({"{"}</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">2</span><div className="whitespace-pre">{"  "}payTo: <span className="text-green-600">"GXXXX..."</span>,</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">3</span><div className="whitespace-pre">{"  "}routes: {"{"}</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">4</span><div className="whitespace-pre">{"    "}<span className="text-green-600">"/api/premium/*"</span>: {"{"}</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">5</span><div className="whitespace-pre">{"      "}price: <span className="text-green-600">"1.00"</span>,</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">6</span><div className="whitespace-pre">{"      "}asset: <span className="text-green-600">"native"</span>,</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">7</span><div className="whitespace-pre">{"      "}description: <span className="text-green-600">"Premium API"</span>,</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">8</span><div className="whitespace-pre">{"      "}maxTimeoutSeconds: <span className="text-blue-600">300</span></div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">9</span><div className="whitespace-pre">{"    "}{"}"}</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">10</span><div className="whitespace-pre">{"  "}{"}"},</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">11</span><div className="whitespace-pre">{"  "}network: <span className="text-green-600">"stellar-testnet"</span></div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">12</span><div className="whitespace-pre">{"}"})</div></div>
                   </div>
                 ) : (
                   <div className="text-xs sm:text-sm text-gray-800 overflow-x-auto font-mono leading-relaxed p-2 animate-in fade-in duration-300">
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">1</span><div className="whitespace-pre"><span className="text-gray-400">// Accept USDC on Stellar</span></div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">2</span><div className="whitespace-pre"><span className="text-blue-600">paymentMiddleware</span>({"{"}</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">3</span><div className="whitespace-pre">{"  "}payTo: <span className="text-green-600">"GXXXX..."</span>,</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">4</span><div className="whitespace-pre">{"  "}routes: {"{"}</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">5</span><div className="whitespace-pre">{"    "}<span className="text-green-600">"/api/pro"</span>: {"{"}</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">6</span><div className="whitespace-pre">{"      "}price: <span className="text-green-600">"5.00"</span>, <span className="text-gray-400">// 5 USDC</span></div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">7</span><div className="whitespace-pre">{"      "}asset: <span className="text-green-600">"USDC:GBBD...776"</span>,</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">8</span><div className="whitespace-pre">{"      "}description: <span className="text-green-600">"Pro Plan Month"</span></div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">9</span><div className="whitespace-pre">{"    "}{"}"}</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">10</span><div className="whitespace-pre">{"  "}{"}"}</div></div>
                     <div className="flex"><span className="w-6 text-gray-300 select-none inline-block text-right pr-2">11</span><div className="whitespace-pre">{"}"})</div></div>
                   </div>
                 )}
               </IDEWindow>
              </div>
            <div className="px-4 pb-6">
              <h3 className="text-lg font-semibold mb-2">Flexible Configuration</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {activeTab2 === "config.ts"
                  ? "Customize assets, networks, timeouts, and more. Configure extensive options to fit your business model."
                  : "Support any Stellar asset including USDC, EURC, or your own custom tokens."}
              </p>
            </div>
        </div>

        </div>
      </div>
    </section>
  )
}
