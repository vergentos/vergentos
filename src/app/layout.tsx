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
  '@type': 'ProfessionalService',
  name: 'AI Web Designers',
  alternateName: 'aiwebdesigners.co.uk',
  description: 'Bristol web design consultancy specialising in Next.js development, AI automation, and bespoke digital solutions for ambitious UK businesses.',
  url: 'https://aiwebdesigners.co.uk',
  logo: 'https://aiwebdesigners.co.uk/images/og-image.png',
  image: 'https://aiwebdesigners.co.uk/images/og-image.png',
  telephone: '+441173326021',
  email: 'hello@aiwebdesigners.co.uk',
  foundingDate: '2003',
  founder: {
    '@type': 'Person',
    name: 'Duncan Maund',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12 Whiteladies Road',
    addressLocality: 'Bristol',
    addressRegion: 'Bristol',
    postalCode: 'BS8 1PD',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.4545,
    longitude: -2.5879,
  },
  areaServed: [
    { '@type': 'City', name: 'Bristol' },
    { '@type': 'City', name: 'Bath' },
    { '@type': 'AdministrativeArea', name: 'Somerset' },
    { '@type': 'Country', name: 'United Kingdom' },
  ],
  serviceType: [
    'Next.js Development',
    'React Development',
    'SaaS Development',
    'Sage 50 API Integration',
    'AI Implementation',
    'Web Design',
    'E-commerce Development',
  ],
  priceRange: '££££',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:30',
  },
  sameAs: [
    'https://www.instagram.com/mediatopiauk/',
    'https://www.facebook.com/mediatopiainternational',
    'https://www.linkedin.com/in/duncanmaund/',
    'https://github.com/mediatopiauk',
    'https://x.com/mediatweetia',
    'https://clutch.co/profile/mediatopia',
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
        {/* Google Analytics Tracking Component */}
        <GoogleAnalytics gaId="G-0S0YYNHZML" />
      </body>
    </html>
  );
}
