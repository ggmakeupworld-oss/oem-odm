"use client"

import { ArrowLeft } from "lucide-react"

export function BackButton() {
  return (
    <button 
      onClick={() => window.history.back()}
      className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Go back to previous page
    </button>
  )
}
