"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Copy, Check, ExternalLink } from "lucide-react"

interface PaymentDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function PaymentDialog({ isOpen, onClose }: PaymentDialogProps) {
  const [copied, setCopied] = useState(false)
  const walletAddress = "GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  const displayAddress = `${walletAddress.slice(0, 8)}...${walletAddress.slice(-8)}`
  const amount = "0.01"
  const network = "Stellar"

  const copyAddress = async () => {
    await navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-border">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-stellar-navy mb-2 text-center">
          Payment Required
        </h2>

        {/* Description */}
        <p className="text-sm text-muted-foreground text-center mb-6">
          Access to protected content. To access this content, please pay {amount} XLM.
        </p>

        {/* Help link */}
        <p className="text-xs text-muted-foreground text-center mb-6">
          Need Stellar XLM?{" "}
          <a
            href="https://www.stellar.org/lumens"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stellar-navy hover:text-stellar-gold inline-flex items-center gap-1 transition-colors"
          >
            Get some here
            <ExternalLink className="h-3 w-3" />
          </a>
        </p>

        {/* Identity/Avatar */}
        <div className="flex items-center justify-center gap-3 mb-6 p-3 rounded-lg bg-muted/30">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-stellar-gold via-stellar-cyan to-stellar-gold flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">@</span>
          </div>
          <span className="text-sm font-semibold text-foreground">@402-stellar</span>
        </div>

        {/* Payment Details */}
        <div className="space-y-3 mb-6 p-4 rounded-xl bg-muted/50 border border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Wallet:</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-mono text-foreground">{displayAddress}</span>
              <button
                onClick={copyAddress}
                className="p-1.5 rounded-lg hover:bg-background transition-colors"
                aria-label="Copy wallet address"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-stellar-gold" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Available balance:</span>
            <span className="text-sm font-medium text-foreground">••••• XLM</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Amount:</span>
            <span className="text-sm font-semibold text-stellar-navy">{amount} XLM</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Network:</span>
            <span className="text-sm font-medium text-foreground">{network}</span>
          </div>
        </div>

        {/* Pay button */}
        <Button
          onClick={() => {
            // Handle payment logic here
            console.log("Payment initiated")
          }}
          className="w-full bg-stellar-navy hover:bg-stellar-navy/90 text-white h-12 font-semibold"
          size="lg"
        >
          Pay now
        </Button>
      </div>
    </div>
  )
}

