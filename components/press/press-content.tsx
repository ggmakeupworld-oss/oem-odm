import { Download, Mail, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

const pressReleases = [
  {
    date: "March 15, 2026",
    title: "Glowgavin Overseas Expands Manufacturing Capacity with New State-of-the-Art Facility",
    excerpt: "The company announces a major expansion of its manufacturing capabilities, adding 50,000 square feet of production space to meet growing global demand for OEM and ODM cosmetics.",
    link: "#"
  },
  {
    date: "February 8, 2026",
    title: "Glowgavin Overseas Achieves ISO 22716:2024 Certification for Cosmetics GMP",
    excerpt: "Demonstrating our commitment to quality, Glowgavin Overseas successfully obtains the latest ISO certification for Good Manufacturing Practices in the cosmetics industry.",
    link: "#"
  },
  {
    date: "January 20, 2026",
    title: "Glowgavin Partners with Leading European Beauty Brands for Sustainable Cosmetics Line",
    excerpt: "A new partnership initiative focuses on developing eco-friendly cosmetic formulations using sustainable ingredients and recyclable packaging solutions.",
    link: "#"
  },
  {
    date: "December 5, 2025",
    title: "Glowgavin Overseas Launches Innovative Vegan Formulation Lab",
    excerpt: "The company unveils a dedicated research facility for developing 100% vegan and cruelty-free cosmetic formulations to meet the growing demand for ethical beauty products.",
    link: "#"
  },
  {
    date: "October 18, 2025",
    title: "Glowgavin Overseas Recognized at India Beauty Industry Awards",
    excerpt: "The company receives the 'Excellence in OEM Manufacturing' award at the prestigious India Beauty Industry Awards ceremony in Mumbai.",
    link: "#"
  },
]

const mediaKitItems = [
  {
    title: "Company Logo Pack",
    description: "High-resolution logos in various formats (PNG, SVG, EPS)",
    fileSize: "2.4 MB"
  },
  {
    title: "Brand Guidelines",
    description: "Complete brand identity guide including colors, typography, and usage",
    fileSize: "8.1 MB"
  },
  {
    title: "Company Fact Sheet",
    description: "Key facts, figures, and milestones about Glowgavin Overseas",
    fileSize: "1.2 MB"
  },
  {
    title: "Executive Photos",
    description: "Professional photos of leadership team for media use",
    fileSize: "15.6 MB"
  },
  {
    title: "Product Photography",
    description: "High-quality images of our manufacturing facilities and products",
    fileSize: "24.3 MB"
  },
]

const newsFeatures = [
  {
    publication: "Beauty Industry Today",
    title: "The Rise of Indian OEM Cosmetics: How Glowgavin is Leading the Way",
    date: "March 2026"
  },
  {
    publication: "Cosmetics Business",
    title: "Interview: Sustainable Manufacturing Practices in Modern Cosmetics",
    date: "February 2026"
  },
  {
    publication: "The Economic Times",
    title: "Make in India: Cosmetics Sector Sees Surge in Export Orders",
    date: "January 2026"
  },
  {
    publication: "Beauty Packaging Magazine",
    title: "Innovation in Private Label: Meeting Brand Demands in 2026",
    date: "December 2025"
  },
]

export function PressContent() {
  return (
    <>
      {/* Press Releases Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Press Releases
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Official announcements and news from Glowgavin Overseas Pvt Ltd.
          </p>
          
          <div className="mt-12 space-y-8">
            {pressReleases.map((release, index) => (
              <article 
                key={index} 
                className="border-b border-border pb-8 last:border-b-0 last:pb-0"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {release.date}
                </div>
                <h3 className="mt-2 font-serif text-xl font-bold text-foreground md:text-2xl">
                  <Link href={release.link} className="transition-colors hover:text-primary">
                    {release.title}
                  </Link>
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {release.excerpt}
                </p>
                <Link 
                  href={release.link}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Read Full Release
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* In The News Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-serif text-3xl font-bold text-secondary-foreground md:text-4xl">
            In The News
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Recent media coverage and features about Glowgavin Overseas.
          </p>
          
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {newsFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <p className="text-sm font-medium text-primary">{feature.publication}</p>
                <h3 className="mt-2 font-serif text-lg font-bold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Media Kit
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Download official brand assets and resources for media use.
          </p>
          
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mediaKitItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {item.fileSize}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link
              href="/contact?subject=Media Kit Request"
              className="inline-block bg-primary px-8 py-3 text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request Full Media Kit
            </Link>
          </div>
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-secondary-foreground md:text-4xl">
            Media Contact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            For press inquiries, interview requests, or additional information, please contact our media relations team.
          </p>
          
          <div className="mt-8 inline-flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-card-foreground">
                Media Relations
              </p>
              <a 
                href="mailto:press@ggmakeupworld.com" 
                className="mt-1 text-primary transition-colors hover:text-primary/80"
              >
                press@ggmakeupworld.com
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              We typically respond to media inquiries within 24-48 hours.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
