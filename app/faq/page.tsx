import { FAQHero } from "@/components/faq/faq-hero"
import { FAQContent } from "@/components/faq/faq-content"

export const metadata = {
  title: "FAQ | Glowgavin Overseas Pvt Ltd - OEM & ODM Cosmetics",
  description: "Find answers to frequently asked questions about Glowgavin Overseas OEM & ODM cosmetics manufacturing services, partnership process, quality standards, and more.",
}

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQContent />
    </>
  )
}
