import Link from "next/link"
import { Metadata } from "next"
import { Home, Search, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BackButton } from "@/components/ui/back-button"

export const metadata: Metadata = {
  title: "Page Not Found | Glowgavin Overseas",
  description: "The page you are looking for could not be found.",
}

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-background px-4">
      <div className="mx-auto max-w-2xl text-center">
        {/* Error Code */}
        <div className="relative mb-8">
          <span className="text-[150px] font-serif font-bold text-primary/10 leading-none md:text-[200px]">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-secondary p-6">
              <Search className="h-12 w-12 text-primary" />
            </div>
          </div>
        </div>

        {/* Message */}
        <h1 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          <span className="text-balance">Page Not Found</span>
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          We&apos;re sorry, but the page you are looking for doesn&apos;t exist or has been moved. 
          Please check the URL or navigate back to our homepage.
        </p>

        {/* Actions */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="min-w-[180px]">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-w-[180px]">
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="mt-16 border-t border-border pt-8">
          <p className="mb-6 text-sm font-medium text-foreground">
            Here are some helpful links instead:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <Link 
              href="/about" 
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Our Services
            </Link>
            <Link 
              href="/products" 
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Products
            </Link>
            <Link 
              href="/faq" 
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8">
          <BackButton />
        </div>
      </div>
    </main>
  )
}
