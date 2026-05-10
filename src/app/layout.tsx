import { GoogleAnalytics } from '@next/third-parties/google'
import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import Footer from '@/components/shared/footer/Footer';
import MobileActionSheet from '@/components/shared/MobileActionSheet';
import Navbar from '@/components/shared/navbar/Navbar';
import { interTight } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  ...generateMetadata(),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vergentos',
  alternateName: 'vergentos.com',
  description: 'SaaS development agency building bespoke platforms, AI tools, and data dashboards for modern founders. Custom SaaS engineering, AI integration, and dashboard design for ambitious teams.',
  url: 'https://www.vergentos.com',
  logo: 'https://www.vergentos.com/images/og-image.png',
  image: 'https://www.vergentos.com/images/og-image.png',
  email: 'hello@vergentos.com',
  areaServed: 'Worldwide',
  knowsAbout: [
    'SaaS Development',
    'SaaS MVP Development',
    'Custom SaaS Platforms',
    'AI Integration',
    'AI Agents',
    'AI Automation',
    'Next.js Development',
    'React Development',
    'Dashboard Design',
    'Data Visualisation',
    'API Engineering',
    'Web Application Engineering',
    'Custom Software Development',
  ],
  serviceType: [
    'SaaS Development',
    'AI Development',
    'Dashboard Design',
    'Next.js Development',
    'API Integration',
    'Custom Software Engineering',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${interTight.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense>
            <SmoothScrollProvider>
              <Navbar />
              {children}
              <Footer />
              <MobileActionSheet />
            </SmoothScrollProvider>
          </Suspense>
        </ThemeProvider>
        {/* Google Analytics — TODO: replace G-0S0YYNHZML with new Vergentos GA4 property */}
        <GoogleAnalytics gaId="G-0S0YYNHZML" />
      </body>
    </html>
  );
}
