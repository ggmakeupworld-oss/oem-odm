import { CareersHero } from "@/components/careers/careers-hero"
import { CareersContent } from "@/components/careers/careers-content"

export const metadata = {
  title: "Careers | Glowgavin Overseas Pvt Ltd - Join Our Team",
  description: "Explore career opportunities at Glowgavin Overseas. Join our team of cosmetics manufacturing professionals and build your future with us.",
}

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersContent />
    </>
  )
}
