import { TermsHero } from "@/components/terms/terms-hero"
import { TermsContent } from "@/components/terms/terms-content"

export const metadata = {
  title: "Terms & Conditions | Glowgavin Overseas Pvt Ltd",
  description: "Read the Terms and Conditions for using Glowgavin Overseas OEM & ODM cosmetics manufacturing services. Understand our policies on orders, payments, quality, and more.",
}

export default function TermsPage() {
  return (
    <>
      <TermsHero />
      <TermsContent />
    </>
  )
}
