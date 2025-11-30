"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <div className="space-y-8">
      <Accordion type="single" collapsible className="w-full">
        {/* General */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-black mb-4">General</h3>
          <AccordionItem value="what-is-x402">
            <AccordionTrigger className="text-left">What is x402 in a single sentence?</AccordionTrigger>
            <AccordionContent>
              x402 is an open‑source protocol that turns the dormant HTTP 402 Payment Required status code into a fully‑featured, on‑chain payment layer for APIs, websites, and autonomous agents.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="is-cdp-product">
            <AccordionTrigger className="text-left">Is x402 a proprietary product?</AccordionTrigger>
            <AccordionContent>
              No. It is an open protocol (Apache-2.0 license). This implementation is built specifically for the Stellar network and is open source for the community.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="why-not-traditional">
            <AccordionTrigger className="text-left">Why not use traditional payment rails or API keys?</AccordionTrigger>
            <AccordionContent>
              Traditional rails require credit‑card networks, user accounts, and multi‑step UI flows. x402 removes those dependencies, enabling programmatic, HTTP-native payments (perfect for AI agents) while dropping fees to near‑zero and settling in 2-5 seconds on Stellar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="crypto-native-only">
            <AccordionTrigger className="text-left">Is x402 only for crypto‑native projects?</AccordionTrigger>
            <AccordionContent>
              No. Any web API or content provider—crypto or web2—can integrate x402 if it wants a lower‑cost, friction‑free payment path for small or usage‑based transactions.
            </AccordionContent>
          </AccordionItem>
        </div>

        {/* Language & Framework Support */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-black mb-4">Language & Framework Support</h3>
          <AccordionItem value="languages">
            <AccordionTrigger className="text-left">What languages and frameworks are supported?</AccordionTrigger>
            <AccordionContent>
              TypeScript (Node.js) is the reference implementation for this Stellar version. However, since x402 is an open protocol based on HTTP and XDR, it can be implemented in any language supported by Stellar (Go, Python, Java, Rust, etc.).
            </AccordionContent>
          </AccordionItem>
        </div>

        {/* Facilitators */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-black mb-4">Facilitators</h3>
          <AccordionItem value="who-runs-facilitators">
            <AccordionTrigger className="text-left">Who runs facilitators?</AccordionTrigger>
            <AccordionContent>
              Anyone can run a facilitator. This implementation includes a fully open-source facilitator package that you can deploy yourself. It handles payment verification and settlement on the Stellar network.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="malicious-facilitator">
            <AccordionTrigger className="text-left">What stops a malicious facilitator from stealing funds?</AccordionTrigger>
            <AccordionContent>
              Every payment payload is a signed Stellar transaction. The transaction specifies the destination and amount, signed by the user's key. A facilitator cannot modify these fields without invalidating the signature, making it impossible to steal funds.
            </AccordionContent>
          </AccordionItem>
        </div>

        {/* Pricing & Schemes */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-black mb-4">Pricing & Schemes</h3>
          <AccordionItem value="pricing-endpoint">
            <AccordionTrigger className="text-left">How should I price my endpoint?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">Common patterns are:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Flat per‑call (e.g., 1 XLM per request)</li>
                <li>Tiered (/basic vs /pro endpoints with different prices)</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </div>

        {/* Assets, Networks & Fees */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-black mb-4">Assets, Networks & Fees</h3>
          <AccordionItem value="assets-networks">
            <AccordionTrigger className="text-left">Which assets and networks are supported today?</AccordionTrigger>
            <AccordionContent>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2">Network</th>
                      <th className="px-4 py-2">Asset</th>
                      <th className="px-4 py-2">Fees</th>
                      <th className="px-4 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-2">Stellar Testnet</td>
                      <td className="px-4 py-2">Native XLM</td>
                      <td className="px-4 py-2">Fee-bump supported</td>
                      <td className="px-4 py-2 text-green-600">Live</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2">Stellar Mainnet</td>
                      <td className="px-4 py-2">Native XLM</td>
                      <td className="px-4 py-2">Fee-bump supported</td>
                      <td className="px-4 py-2 text-yellow-600">Coming Soon</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Gas (transaction fees) can be sponsored by the facilitator via Stellar's fee-bump mechanism.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="fiat-offramps">
            <AccordionTrigger className="text-left">Does x402 support fiat off‑ramps?</AccordionTrigger>
            <AccordionContent>
              Not natively in the protocol. However, Stellar has a rich ecosystem of anchors. You can easily move earned XLM/USDC to fiat using existing Stellar anchors and off-ramps.
            </AccordionContent>
          </AccordionItem>
        </div>

        {/* Security */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-black mb-4">Security</h3>
          <AccordionItem value="private-key-exposure">
            <AccordionTrigger className="text-left">Do I have to expose my private key to my backend?</AccordionTrigger>
            <AccordionContent>
              <p>No. The recommended pattern is:</p>
              <ul className="list-disc pl-4 mt-2 space-y-1">
                <li><strong>Buyers (Clients):</strong> Sign locally using Freighter wallet or a local keypair.</li>
                <li><strong>Sellers (Servers):</strong> Never hold the buyer's key; they only verify signatures/transactions.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="refunds">
            <AccordionTrigger className="text-left">How do refunds work?</AccordionTrigger>
            <AccordionContent>
              The current scheme is a push payment—irreversible once executed on the Stellar ledger. Refunds must be handled via business logic (Seller sending a payment back to the Buyer).
            </AccordionContent>
          </AccordionItem>
        </div>

        {/* Usage by AI Agents */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-black mb-4">Usage by AI Agents</h3>
          <AccordionItem value="agent-payment">
            <AccordionTrigger className="text-left">How does an agent know what to pay?</AccordionTrigger>
            <AccordionContent>
              <p>Agents follow the same flow as humans:</p>
              <ol className="list-decimal pl-4 mt-2 space-y-1">
                <li>Make a request.</li>
                <li>Parse the 402 JSON (accepts array) to find the Stellar network option.</li>
                <li>Construct and sign a Stellar transaction payload.</li>
                <li>Retry the request with the X‑PAYMENT header.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </div>

        {/* Troubleshooting */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-black mb-4">Troubleshooting</h3>
          <AccordionItem value="troubleshooting-402">
            <AccordionTrigger className="text-left">I keep getting 402 Payment Required, even after attaching X‑PAYMENT. Why?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-4 space-y-1">
                <li>Signature is invalid (transaction modified).</li>
                <li>Payment amount is less than required.</li>
                <li>Transaction expired (ledger sequence passed).</li>
                <li>Insufficient balance in the source account.</li>
              </ul>
              <p className="mt-2">Check the facilitator logs or the error field in the response.</p>
            </AccordionContent>
          </AccordionItem>
        </div>
      </Accordion>
    </div>
  )
}

