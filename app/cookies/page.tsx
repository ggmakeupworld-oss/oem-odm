import { Metadata } from "next"
import { CookiesHero } from "@/components/cookies/cookies-hero"
import { CookiesContent } from "@/components/cookies/cookies-content"

export const metadata: Metadata = {
  title: "Cookie Policy | Glowgavin Overseas",
  description: "Learn about how Glowgavin Overseas uses cookies and similar technologies on our website.",
}

export default function CookiesPage() {
  return (
    <main>
      <CookiesHero />
      <CookiesContent />
    </main>
  )
}
