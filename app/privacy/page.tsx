import { Metadata } from "next"
import { PrivacyHero } from "@/components/privacy/privacy-hero"
import { PrivacyContent } from "@/components/privacy/privacy-content"

export const metadata: Metadata = {
  title: "Privacy Policy | Glowgavin Overseas",
  description: "Learn about how Glowgavin Overseas collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <main>
      <PrivacyHero />
      <PrivacyContent />
    </main>
  )
}
