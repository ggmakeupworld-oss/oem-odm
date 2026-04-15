const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using the services provided by Glowgavin Overseas Pvt Ltd ("Company," "we," "us," or "our"), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, users, and partners who access or use our OEM and ODM cosmetics manufacturing services.`
  },
  {
    title: "2. Services Description",
    content: `Glowgavin Overseas Pvt Ltd provides OEM (Original Equipment Manufacturer) and ODM (Original Design Manufacturer) services for cosmetics and beauty products. Our services include but are not limited to:

- Custom formulation development
- Product manufacturing and packaging
- Quality control and testing
- Regulatory compliance assistance
- Private label and white label solutions

The specific terms of each service engagement will be detailed in separate agreements or purchase orders.`
  },
  {
    title: "3. Orders and Payments",
    content: `3.1 Order Placement: All orders must be placed in writing through official channels and are subject to our acceptance and confirmation.

3.2 Minimum Order Quantities: Orders are subject to our minimum order quantity (MOQ) requirements, which vary by product type and specification.

3.3 Pricing: Prices are quoted based on current market conditions and are subject to change. Confirmed prices in accepted quotations will be honored for the validity period stated.

3.4 Payment Terms: Unless otherwise agreed in writing, we require a deposit of 30-50% upon order confirmation, with the balance due before shipment. All payments must be made in the agreed currency.

3.5 Taxes and Duties: Prices do not include applicable taxes, customs duties, or import fees unless explicitly stated. The buyer is responsible for all such charges.`
  },
  {
    title: "4. Production and Delivery",
    content: `4.1 Production Timeline: Production timelines provided are estimates based on standard conditions. Actual timelines may vary based on order complexity, raw material availability, and other factors.

4.2 Sample Approval: Mass production will only commence after written approval of samples by the client. Changes requested after sample approval may result in additional charges and timeline extensions.

4.3 Delivery: Unless otherwise agreed, delivery terms are Ex-Works (EXW) from our facility. Risk of loss transfers to the buyer upon delivery to the carrier.

4.4 Delays: We are not liable for delays caused by factors beyond our reasonable control, including but not limited to natural disasters, supply chain disruptions, or regulatory changes.`
  },
  {
    title: "5. Quality Assurance",
    content: `5.1 Standards: All products are manufactured in accordance with applicable quality standards including ISO 22716 (GMP for Cosmetics) and relevant regulatory requirements.

5.2 Inspection: Buyers may inspect products upon delivery. Claims for defects must be made in writing within 14 days of receipt.

5.3 Warranty: We warrant that products will conform to agreed specifications at the time of delivery. Our warranty does not cover damage caused by improper storage, handling, or use.

5.4 Liability Limit: Our maximum liability for any claim shall not exceed the purchase price of the affected products.`
  },
  {
    title: "6. Intellectual Property",
    content: `6.1 Client IP: Any formulations, designs, or specifications provided by the client remain the client's intellectual property. We will not use client IP for other clients without written permission.

6.2 Company IP: Formulations, processes, and designs developed by us remain our intellectual property unless explicitly transferred through written agreement.

6.3 Confidentiality: Both parties agree to maintain confidentiality of proprietary information shared during the business relationship.`
  },
  {
    title: "7. Regulatory Compliance",
    content: `7.1 Manufacturing Compliance: We ensure our manufacturing processes comply with applicable regulations in our country of operation.

7.2 Product Registration: The client is responsible for ensuring products meet regulatory requirements and obtaining necessary registrations in their target markets.

7.3 Documentation: We will provide necessary documentation to support product registration, including Certificates of Analysis, Safety Data Sheets, and compliance certificates as applicable.`
  },
  {
    title: "8. Limitation of Liability",
    content: `To the maximum extent permitted by law, Glowgavin Overseas Pvt Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, or business opportunities, arising from or related to our services.

Our total liability for any claims arising from our services shall not exceed the total amount paid by the client for the specific products or services giving rise to the claim.`
  },
  {
    title: "9. Termination",
    content: `9.1 Either party may terminate the business relationship with 30 days written notice for any reason.

9.2 We reserve the right to immediately terminate services if the client breaches these terms, fails to make payments when due, or engages in activities we deem harmful to our business or reputation.

9.3 Upon termination, the client remains responsible for all outstanding payments and obligations incurred prior to termination.`
  },
  {
    title: "10. Dispute Resolution",
    content: `10.1 Governing Law: These terms shall be governed by and construed in accordance with the laws of India.

10.2 Negotiation: Parties agree to attempt to resolve any disputes through good faith negotiation before pursuing other remedies.

10.3 Arbitration: If disputes cannot be resolved through negotiation, they shall be submitted to binding arbitration in accordance with the rules of the Indian Council of Arbitration, with proceedings conducted in English in New Delhi, India.`
  },
  {
    title: "11. Modifications",
    content: `We reserve the right to modify these Terms and Conditions at any time. Changes will be effective upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified terms.

For existing contracts, the terms in effect at the time of contract signing shall apply unless both parties agree to adopt updated terms.`
  },
  {
    title: "12. Contact Information",
    content: `For questions regarding these Terms and Conditions, please contact us:

Glowgavin Overseas Pvt Ltd
Email: info@ggmakeupworld.com
Website: www.ggmakeupworld.com

We are committed to addressing your concerns promptly and professionally.`
  },
]

export function TermsContent() {
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
            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>
        </div>
      </div>
    </section>
  )
}
