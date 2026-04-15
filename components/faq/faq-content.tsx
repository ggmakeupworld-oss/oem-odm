"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqCategories = [
  {
    title: "OEM & ODM Services",
    faqs: [
      {
        question: "What is the difference between OEM and ODM services?",
        answer: "OEM (Original Equipment Manufacturer) means we manufacture products according to your exact specifications and formulations. ODM (Original Design Manufacturer) means we provide ready-made formulations and designs that you can brand as your own. We offer both services to cater to different brand needs and development stages."
      },
      {
        question: "What is the minimum order quantity (MOQ)?",
        answer: "Our MOQ varies depending on the product type and packaging requirements. Generally, our MOQ starts from 1,000 units for most cosmetic products. For new brands or testing purposes, we also offer smaller trial orders. Please contact us for specific MOQ details for your desired products."
      },
      {
        question: "Can you help develop custom formulations?",
        answer: "Yes, our experienced R&D team can develop custom formulations tailored to your specific requirements. We work closely with you to understand your brand vision, target market, and desired product attributes to create unique formulations that meet your needs."
      },
      {
        question: "What product categories do you manufacture?",
        answer: "We specialize in a wide range of cosmetic products including lip products (lipsticks, lip glosses, lip balms), eye products (eyeshadows, eyeliners, mascaras), face products (foundations, powders, blushes, highlighters), skincare, and more. Our facilities are equipped to handle various product types and formulations."
      },
    ]
  },
  {
    title: "Quality & Certifications",
    faqs: [
      {
        question: "What quality certifications do you hold?",
        answer: "We maintain strict quality standards and hold certifications including ISO 22716 (GMP for Cosmetics), ISO 9001 (Quality Management), and comply with FDA regulations, EU Cosmetic Regulations, and CGMP standards. Our products are tested for safety, stability, and efficacy."
      },
      {
        question: "Are your products cruelty-free?",
        answer: "Yes, we are committed to cruelty-free manufacturing. We do not test our products or ingredients on animals and can provide cruelty-free certifications upon request. We also offer vegan formulation options for brands seeking plant-based products."
      },
      {
        question: "How do you ensure product quality and safety?",
        answer: "We implement comprehensive quality control measures at every stage of production. This includes raw material testing, in-process quality checks, microbiological testing, stability testing, and final product inspection. Each batch undergoes rigorous testing before release."
      },
    ]
  },
  {
    title: "Partnership Process",
    faqs: [
      {
        question: "How do I start a partnership with Glowgavin?",
        answer: "Starting a partnership is easy. Simply contact us through our website or email with your requirements. Our team will schedule a consultation to understand your needs, discuss product options, and provide a customized quotation. We guide you through every step from concept to delivery."
      },
      {
        question: "What is the typical production timeline?",
        answer: "Production timelines vary based on product complexity and order quantity. Generally, sample development takes 2-4 weeks, and mass production takes 4-8 weeks after sample approval. Custom formulations may require additional time for R&D and testing. We provide detailed timelines during the quotation process."
      },
      {
        question: "Do you provide packaging solutions?",
        answer: "Yes, we offer comprehensive packaging solutions including stock packaging options and custom packaging design. Our team can help you select suitable packaging, design custom containers, and create attractive outer packaging that aligns with your brand identity."
      },
      {
        question: "Can you handle international shipping?",
        answer: "Absolutely. We have extensive experience in international logistics and export. We handle all necessary documentation, compliance requirements, and work with reliable shipping partners to ensure your products reach you safely and on time, anywhere in the world."
      },
    ]
  },
  {
    title: "Pricing & Payment",
    faqs: [
      {
        question: "How is pricing determined?",
        answer: "Pricing depends on several factors including product type, formulation complexity, packaging requirements, order quantity, and customization level. We provide detailed quotations after understanding your specific requirements. Volume discounts are available for larger orders."
      },
      {
        question: "What payment terms do you offer?",
        answer: "We typically require a 30-50% deposit to begin production, with the balance due before shipment. For established partnerships, we may offer flexible payment terms. We accept various payment methods including bank transfers and letters of credit for international orders."
      },
      {
        question: "Are samples available before bulk orders?",
        answer: "Yes, we strongly encourage sample evaluation before placing bulk orders. We can provide product samples for your review and testing. Sample costs vary depending on the product type and customization required, and may be refundable upon placing a bulk order."
      },
    ]
  },
]

export function FAQContent() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4">
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12 last:mb-0">
            <h2 className="mb-6 font-serif text-2xl font-bold text-foreground md:text-3xl">
              {category.title}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {category.faqs.map((faq, faqIndex) => (
                <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                  <AccordionTrigger className="text-left font-medium text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
        
        <div className="mt-16 rounded-lg bg-secondary p-8 text-center">
          <h3 className="font-serif text-xl font-bold text-secondary-foreground">
            Still have questions?
          </h3>
          <p className="mt-2 text-muted-foreground">
            Can&apos;t find the answer you&apos;re looking for? Please contact our friendly team.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-primary px-8 py-3 text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
