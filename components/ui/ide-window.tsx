import React from "react"
import { cn } from "@/lib/utils"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

interface IDEWindowProps {
  children: React.ReactNode
  className?: string
  tabs?: string[]
  activeTab?: string
  onTabChange?: (tab: string) => void
}

export function IDEWindow({ children, className, tabs = [], activeTab, onTabChange }: IDEWindowProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    // Get the text content from the children
    const text = document.getElementById(`code-content-${activeTab}`)?.innerText || ""
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("w-full rounded-xl overflow-hidden bg-[#F8F9FA] border border-black/5 shadow-sm flex flex-col", className)}>
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-black/5 select-none">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
            <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
            <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
          </div>
          
          {/* Tabs */}
          <div className="flex gap-1">
            {tabs.length > 0 ? (
              tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => onTabChange?.(tab)}
                  className={cn(
                    "px-3 py-1 rounded text-xs font-medium transition-all duration-200",
                    activeTab === tab
                      ? "bg-[#F8F9FA] text-black border border-black/5 shadow-sm"
                      : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                  )}
                >
                  {tab}
                </button>
              ))
            ) : activeTab ? (
               <div className="px-3 py-1 bg-[#F8F9FA] rounded text-xs font-medium text-gray-500 border border-black/5">
                 {activeTab}
               </div>
            ) : null}
          </div>
        </div>

        {/* Actions */}
        <button 
          onClick={handleCopy}
          className="p-1.5 text-gray-400 hover:text-black hover:bg-gray-100 rounded-md transition-colors"
          title="Copy code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
      
      {/* Content */}
      <div 
        id={`code-content-${activeTab}`}
        className="p-4 font-mono text-sm overflow-auto relative flex-grow custom-scrollbar"
      >
        {children}
      </div>
    </div>
  )
}
