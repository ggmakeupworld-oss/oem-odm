import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Glowgavin Overseas Pvt Ltd | OEM & ODM Cosmetics Manufacturer',
  description: 'Glowgavin Overseas Pvt Ltd (ggmakeupworld.com) is a leading OEM & ODM cosmetics manufacturer offering premium makeup, skincare, and beauty solutions for global brands.',
  
  keywords: [
    'Glowgavin Overseas Pvt Ltd',
    'ggmakeupworld',
    'OEM cosmetics manufacturer',
    'ODM cosmetics supplier',
    'private label makeup',
    'cosmetics manufacturer India',
    'beauty products supplier',
    'skincare manufacturer',
    'makeup wholesale',
    'custom cosmetic products'
  ],

  authors: [{ name: 'Glowgavin Overseas Pvt Ltd' }],
  creator: 'Glowgavin Overseas Pvt Ltd',
  publisher: 'Glowgavin Overseas Pvt Ltd',

  metadataBase: new URL('https://ggmakeupworld.com'),

  openGraph: {
    title: 'Glowgavin Overseas Pvt Ltd | OEM & ODM Cosmetics',
    description: 'Premium OEM & ODM cosmetics manufacturer. Build your beauty brand with high-quality makeup & skincare solutions.',
    url: 'https://ggmakeupworld.com',
    siteName: 'Glowgavin Overseas Pvt Ltd',
    images: [
      {
        url: '/logo_180x180.png',
        width: 1200,
        height: 630,
        alt: 'Glowgavin Overseas Pvt Ltd - Cosmetics Manufacturer',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Glowgavin Overseas Pvt Ltd | OEM & ODM Cosmetics',
    description: 'Trusted OEM & ODM partner for premium cosmetics and skincare manufacturing.',
    images: ['/logo_180x180.png'],
  },

  icons: {
    icon: [
      { url: '/logo_32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo_16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    apple: [
      { url: '/logo_180x180.png', sizes: '180x180', type: 'image/png' }
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://ggmakeupworld.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
