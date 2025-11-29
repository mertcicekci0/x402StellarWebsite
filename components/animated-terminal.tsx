"use client"

import { useState, useEffect } from "react"

interface AnimatedTerminalProps {
  onComplete?: () => void
}

export function AnimatedTerminal({ onComplete }: AnimatedTerminalProps) {
  const [step, setStep] = useState<"typing" | "installing" | "complete">("typing")
  const [commandText, setCommandText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  const fullCommand = "npm install @402-stellar"

  // Modern, minimal npm install output
  const npmOutput = `npm install @402-stellar

  ╭─ Installing dependencies ────────────────────────╮
  │                                                   │
  │  ✓ @stellar/sdk@11.2.0                          │
  │  ✓ @stellar/base@11.2.0                         │
  │  ✓ axios@1.6.0                                  │
  │  ✓ crypto-js@4.2.0                              │
  │                                                   │
  │  added 127 packages in 2s                        │
  │                                                   │
  ╰───────────────────────────────────────────────────╯

  ✨ @402-stellar installed successfully!

  Start building internet-native payments
  with Stellar blockchain integration.
`

  useEffect(() => {
    // Step 1: Type command
    if (step === "typing") {
      let charIndex = 0
      const typingInterval = setInterval(() => {
        if (charIndex < fullCommand.length) {
          setCommandText(fullCommand.slice(0, charIndex + 1))
          charIndex++
        } else {
          clearInterval(typingInterval)
          setTimeout(() => {
            setShowCursor(false)
            setStep("installing")
          }, 500)
        }
      }, 50)

      return () => clearInterval(typingInterval)
    }

    // Step 2: Installing
    if (step === "installing") {
      const installingTimer = setTimeout(() => {
        setStep("complete")
        onComplete?.()
      }, 2500)

      return () => clearTimeout(installingTimer)
    }
  }, [step, fullCommand, onComplete])

  // Cursor blink
  useEffect(() => {
    if (step === "complete" || step === "installing") return

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [step])

  return (
    <div className={`bg-black rounded-lg border border-gray-800 overflow-hidden font-mono shadow-2xl transition-all duration-700 ease-in-out ${
      step === "complete" ? "scale-[1.01]" : "scale-100"
    }`}>
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border-b border-gray-800">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="ml-3 text-xs text-gray-500">terminal</span>
      </div>

      {/* Terminal content */}
      <div className={`p-6 text-sm transition-all duration-700 ease-in-out ${
        step === "complete" ? "min-h-[450px]" : step === "installing" ? "min-h-[80px]" : "min-h-[60px]"
      }`}>
        {/* Command line */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#d4a853]">$</span>
          <span className="text-gray-300">{commandText}</span>
          {step === "typing" && showCursor && (
            <span className="inline-block w-2 h-4 bg-[#d4a853] animate-pulse"></span>
          )}
        </div>

        {/* Installing message */}
        {step === "installing" && (
          <div className="text-gray-500 text-xs mb-3 animate-fade-in">
            <span className="inline-block animate-pulse">Installing packages...</span>
          </div>
        )}

        {/* npm install output - appears directly after installing with smooth animation */}
        {step === "complete" && (
          <div className="text-gray-300 text-xs font-mono leading-relaxed animate-fade-in opacity-0" style={{ animation: 'fade-in 0.8s ease-out 0.2s forwards' }}>
            <pre className="whitespace-pre-wrap">
              <span className="text-gray-500">npm install @402-stellar</span>
              <br /><br />
              <span className="text-gray-400">  ╭─ Installing dependencies ────────────────────────╮</span>
              <br />
              <span className="text-gray-400">  │                                                   │</span>
              <br />
              <span className="text-gray-400">  │ </span>
              <span className="text-green-400">✓</span>
              <span className="text-gray-300"> @stellar/sdk@11.2.0</span>
              <span className="text-gray-400">                          │</span>
              <br />
              <span className="text-gray-400">  │ </span>
              <span className="text-green-400">✓</span>
              <span className="text-gray-300"> @stellar/base@11.2.0</span>
              <span className="text-gray-400">                         │</span>
              <br />
              <span className="text-gray-400">  │ </span>
              <span className="text-green-400">✓</span>
              <span className="text-gray-300"> axios@1.6.0</span>
              <span className="text-gray-400">                                  │</span>
              <br />
              <span className="text-gray-400">  │ </span>
              <span className="text-green-400">✓</span>
              <span className="text-gray-300"> crypto-js@4.2.0</span>
              <span className="text-gray-400">                              │</span>
              <br />
              <span className="text-gray-400">  │                                                   │</span>
              <br />
              <span className="text-gray-400">  │ </span>
              <span className="text-gray-500">added 127 packages in 2s</span>
              <span className="text-gray-400">                        │</span>
              <br />
              <span className="text-gray-400">  │                                                   │</span>
              <br />
              <span className="text-gray-400">  ╰───────────────────────────────────────────────────╯</span>
              <br /><br />
              <span className="text-[#d4a853]">  ✨</span>
              <span className="text-gray-300"> @402-stellar installed successfully!</span>
              <br /><br />
              <span className="text-gray-400">  Start building internet-native payments</span>
              <br />
              <span className="text-gray-400">  with Stellar blockchain integration.</span>
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
