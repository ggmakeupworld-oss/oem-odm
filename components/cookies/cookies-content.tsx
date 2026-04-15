const sections = [
  {
    title: "1. What Are Cookies?",
    content: `Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.

Cookies allow a website to recognize your device and remember information about your visit, such as your preferences, settings, and how you use the site. This helps improve your browsing experience and allows us to enhance our website.`
  },
  {
    title: "2. How We Use Cookies",
    content: `Glowgavin Overseas Pvt Ltd uses cookies and similar technologies on our website for several purposes:

Website Functionality: To ensure our website works properly and provides you with the features and services you expect.

Performance and Analytics: To understand how visitors interact with our website, which pages are most popular, and how we can improve user experience.

Preferences: To remember your settings and preferences, such as language selection and display options.

Security: To help maintain the security of our website and protect against fraudulent activity.`
  },
  {
    title: "3. Types of Cookies We Use",
    content: `We use the following categories of cookies on our website:

Essential Cookies
These cookies are necessary for the website to function properly. They enable core functionality such as page navigation, secure areas access, and form submissions. The website cannot function properly without these cookies.
- Session management
- Security features
- Load balancing

Performance Cookies
These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the way our website works.
- Page visit statistics
- Traffic sources
- Error tracking

Functional Cookies
These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
- Language preferences
- Region settings
- Personalized content

Marketing Cookies
These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant advertisements on other sites.
- Advertising targeting
- Campaign effectiveness
- Social media integration`
  },
  {
    title: "4. Third-Party Cookies",
    content: `Some cookies on our website are placed by third-party services that appear on our pages. We do not control these third-party cookies, and their use is governed by the privacy policies of those third parties.

Third-party services we may use include:

Analytics Services:
- Google Analytics for website traffic analysis
- Performance monitoring tools

Social Media:
- LinkedIn, Facebook, and other social media platforms
- Share buttons and embedded content

These third parties may use cookies to track your activities across different websites to deliver targeted advertising or content.`
  },
  {
    title: "5. Cookie Duration",
    content: `Cookies can remain on your device for different periods of time:

Session Cookies
These are temporary cookies that expire when you close your browser. They are used to maintain your session while you navigate our website.

Persistent Cookies
These cookies remain on your device for a set period or until you delete them. They are used to remember your preferences and settings for future visits.

The specific duration of each cookie varies based on its purpose. Essential cookies typically last for the duration of your session, while preference cookies may last for up to one year.`
  },
  {
    title: "6. Managing Your Cookie Preferences",
    content: `You have several options for managing cookies:

Browser Settings
Most web browsers allow you to control cookies through their settings. You can usually find these options in the "Privacy" or "Security" section of your browser. Common options include:
- Blocking all cookies
- Accepting only first-party cookies
- Deleting cookies when you close your browser
- Receiving notifications when cookies are set

Please note that blocking or deleting cookies may affect your experience on our website and limit certain functionality.

Opt-Out Links
For certain third-party cookies, you can opt out directly through their platforms:
- Google Analytics: tools.google.com/dlpage/gaoptout
- Network Advertising Initiative: optout.networkadvertising.org

Browser-Specific Instructions:
- Chrome: Settings > Privacy and Security > Cookies
- Firefox: Options > Privacy & Security > Cookies
- Safari: Preferences > Privacy > Cookies
- Edge: Settings > Privacy & Security > Cookies`
  },
  {
    title: "7. Do Not Track Signals",
    content: `Some browsers offer a "Do Not Track" (DNT) feature that sends a signal to websites indicating that you do not wish to be tracked. Currently, there is no universal standard for how websites should respond to DNT signals.

Our website does not currently respond to DNT signals. However, you can manage your cookie preferences using the methods described in this policy.`
  },
  {
    title: "8. Cookies and Personal Data",
    content: `Some cookies may collect personal data or information that can be linked to you as an individual. Where this occurs, the collection and processing of such data is governed by our Privacy Policy.

We are committed to protecting your privacy and only collect information necessary for the purposes described in this Cookie Policy and our Privacy Policy.`
  },
  {
    title: "9. Updates to This Policy",
    content: `We may update this Cookie Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. When we make changes, we will update the "Last updated" date at the top of this policy.

We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.`
  },
  {
    title: "10. Contact Us",
    content: `If you have any questions about our use of cookies or this Cookie Policy, please contact us:

Glowgavin Overseas Pvt Ltd
Email: privacy@ggmakeupworld.com
Website: www.ggmakeupworld.com

We are happy to provide additional information or address any concerns you may have regarding our cookie practices.`
  },
]

export function CookiesContent() {
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
            By continuing to use our website, you consent to the use of cookies as described in this Cookie Policy.
          </p>
        </div>
      </div>
    </section>
  )
}
