import { PressHero } from "@/components/press/press-hero"
import { PressContent } from "@/components/press/press-content"

export const metadata = {
  title: "Press & Media | Glowgavin Overseas Pvt Ltd",
  description: "Latest news, press releases, and media resources from Glowgavin Overseas. Download our media kit and contact our press team for inquiries.",
}

export default function PressPage() {
  return (
    <>
      <PressHero />
      <PressContent />
    </>
  )
}
