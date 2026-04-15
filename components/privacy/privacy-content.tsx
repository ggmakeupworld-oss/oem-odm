const sections = [
  {
    title: "1. Introduction",
    content: `Glowgavin Overseas Pvt Ltd ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, engage with our services, or communicate with us.

Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our website or use our services.`
  },
  {
    title: "2. Information We Collect",
    content: `We collect information that you provide directly to us and information that is collected automatically:

Personal Information:
- Name and contact details (email address, phone number, mailing address)
- Company name and job title
- Business registration details for B2B transactions
- Payment and billing information
- Communication preferences

Business Information:
- Product requirements and specifications
- Order history and transaction records
- Correspondence and communication records

Automatically Collected Information:
- IP address and device information
- Browser type and operating system
- Pages visited and time spent on our website
- Referring website addresses
- Cookies and similar tracking technologies`
  },
  {
    title: "3. How We Use Your Information",
    content: `We use the information we collect for the following purposes:

Service Delivery:
- Process orders and manage business relationships
- Provide quotes and product information
- Fulfill manufacturing and delivery obligations
- Provide customer support and respond to inquiries

Business Operations:
- Improve our products and services
- Conduct research and analysis
- Manage our internal business processes
- Comply with legal and regulatory requirements

Communication:
- Send order confirmations and updates
- Provide technical and product information
- Send marketing communications (with your consent)
- Notify you of changes to our services or policies`
  },
  {
    title: "4. Information Sharing and Disclosure",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:

Service Providers: We may share information with trusted third-party service providers who assist us in operating our business, including:
- Payment processors
- Shipping and logistics partners
- IT and cloud service providers
- Legal and accounting professionals

Legal Requirements: We may disclose information when required by law or in response to valid legal processes, such as court orders or government requests.

Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.

Consent: We may share your information with your consent or at your direction.`
  },
  {
    title: "5. Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

- Secure Socket Layer (SSL) encryption for data transmission
- Secure storage systems with access controls
- Regular security assessments and updates
- Employee training on data protection practices
- Physical security measures at our facilities

While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your information to the best of our ability.`
  },
  {
    title: "6. Cookies and Tracking Technologies",
    content: `We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:

- Remember your preferences and settings
- Understand how you use our website
- Improve website functionality and performance
- Provide relevant content and recommendations

You can control cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.

For more details about our use of cookies, please see our Cookie Policy.`
  },
  {
    title: "7. Your Rights and Choices",
    content: `Depending on your location, you may have the following rights regarding your personal information:

Access: Request access to the personal information we hold about you.

Correction: Request correction of inaccurate or incomplete information.

Deletion: Request deletion of your personal information, subject to legal retention requirements.

Opt-out: Opt out of marketing communications at any time.

Data Portability: Request a copy of your data in a portable format.

To exercise these rights, please contact us using the information provided below. We will respond to your request within the timeframe required by applicable law.`
  },
  {
    title: "8. International Data Transfers",
    content: `As a global business, we may transfer your information to countries other than your country of residence. When we transfer personal information internationally, we ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.

These safeguards may include:
- Standard contractual clauses approved by relevant authorities
- Certification schemes and binding corporate rules
- Consent for specific transfers where appropriate`
  },
  {
    title: "9. Data Retention",
    content: `We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including:

- Duration of our business relationship
- Compliance with legal, accounting, and regulatory requirements
- Resolution of disputes and enforcement of agreements
- Legitimate business purposes such as record-keeping

When we no longer need your personal information, we will securely delete or anonymize it in accordance with our data retention policies.`
  },
  {
    title: "10. Children&apos;s Privacy",
    content: `Our services are intended for business use and are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately so we can take appropriate action.`
  },
  {
    title: "11. Third-Party Links",
    content: `Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party websites you visit.

This Privacy Policy applies only to information collected through our website and services.`
  },
  {
    title: "12. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website with a new effective date.

We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.`
  },
  {
    title: "13. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:

Glowgavin Overseas Pvt Ltd
Email: privacy@ggmakeupworld.com
Website: www.ggmakeupworld.com

We are committed to resolving any concerns you may have about our collection and use of your personal information.`
  },
]

export function PrivacyContent() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="prose prose-lg max-w-none">
          {sections.map((section, index) => (
            <div key={index} className="mb-10 last:mb-0">
              <h2 className="mb-4 font-serif text-xl font-bold text-foreground md:text-2xl">
                {section.title}
              </h2>
              <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            By using our website and services, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  )
}
