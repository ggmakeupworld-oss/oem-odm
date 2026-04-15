import { Briefcase, Heart, TrendingUp, Users, Clock, MapPin } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement paths with training programs and mentorship."
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, wellness programs, and work-life balance initiatives."
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with a diverse, talented team in an inclusive and supportive environment."
  },
  {
    icon: Briefcase,
    title: "Competitive Package",
    description: "Attractive salary, performance bonuses, and comprehensive benefits package."
  },
]

const openPositions = [
  {
    title: "Senior R&D Chemist",
    department: "Research & Development",
    location: "New Delhi, India",
    type: "Full-time",
    description: "Lead formulation development for new cosmetic products, conduct stability testing, and collaborate with cross-functional teams."
  },
  {
    title: "Quality Control Manager",
    department: "Quality Assurance",
    location: "New Delhi, India",
    type: "Full-time",
    description: "Oversee quality control processes, ensure compliance with ISO standards, and manage the QC team."
  },
  {
    title: "Production Supervisor",
    department: "Manufacturing",
    location: "New Delhi, India",
    type: "Full-time",
    description: "Supervise daily production operations, optimize manufacturing processes, and ensure safety compliance."
  },
  {
    title: "Business Development Executive",
    department: "Sales & Marketing",
    location: "Mumbai, India",
    type: "Full-time",
    description: "Identify new business opportunities, build client relationships, and drive revenue growth in the cosmetics sector."
  },
  {
    title: "Supply Chain Coordinator",
    department: "Operations",
    location: "New Delhi, India",
    type: "Full-time",
    description: "Manage supplier relationships, coordinate logistics, and optimize inventory management processes."
  },
  {
    title: "Graphic Designer",
    department: "Creative",
    location: "Remote",
    type: "Full-time",
    description: "Design packaging, marketing materials, and brand assets for our clients' cosmetic products."
  },
]

const values = [
  {
    title: "Innovation",
    description: "We embrace creativity and continuously seek better solutions in cosmetics manufacturing."
  },
  {
    title: "Quality",
    description: "Excellence is non-negotiable. We maintain the highest standards in everything we do."
  },
  {
    title: "Integrity",
    description: "We build trust through transparency, honesty, and ethical business practices."
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and value diverse perspectives."
  },
]

export function CareersContent() {
  return (
    <>
      {/* Why Join Us Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Why Join Glowgavin?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We offer more than just a job. Join us and become part of a company that values your growth and well-being.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-secondary-foreground md:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              These core values guide our decisions and define who we are as a company.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="font-serif text-xl font-bold text-secondary-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Open Positions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Explore our current job openings and find the perfect role for you.
            </p>
          </div>
          
          <div className="mt-12 space-y-6">
            {openPositions.map((position, index) => (
              <div 
                key={index} 
                className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-card-foreground">
                      {position.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {position.department}
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      {position.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href={`/contact?subject=Job Application: ${encodeURIComponent(position.title)}`}
                      className="inline-block bg-primary px-6 py-3 text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-secondary-foreground md:text-4xl">
            Don&apos;t See the Right Role?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We&apos;re always looking for talented individuals. Send us your resume and 
            we&apos;ll keep you in mind for future opportunities.
          </p>
          <Link
            href="/contact?subject=General Application"
            className="mt-8 inline-block bg-primary px-8 py-4 text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Submit Your Resume
          </Link>
        </div>
      </section>
    </>
  )
}
