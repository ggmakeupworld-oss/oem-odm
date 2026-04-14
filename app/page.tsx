import { HeroSection } from "@/components/home/hero-section";
import { CollectionsSection } from "@/components/home/collections-section";
import { FeaturesSection } from "@/components/home/features-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CtaSection } from "@/components/home/cta-section";
import Script from "next/script";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CollectionsSection />
      <TestimonialsSection />
      <CtaSection />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Glowgavin Overseas Pvt Ltd",
            url: "https://ggmakeupworld.com",
            logo: "https://ggmakeupworld.com/logo_180x180.png",
            sameAs: [],
            description:
              "OEM & ODM cosmetics manufacturer offering private label makeup and skincare solutions.",
          }),
        }}
      />
    </>
  );
}
