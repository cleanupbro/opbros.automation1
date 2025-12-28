import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LeadCapture } from '../components/LeadCapture'
import { ChatWidget } from '../components/ChatWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Automation Sydney | OpBros.Automation | Liverpool NSW',
  description: 'Sydney\'s #1 AI automation agency. We build AI-powered workflow automation systems for businesses in Sydney, Liverpool, and Western Sydney. 30-day ROI guarantee.',
  keywords: [
    'AI automation Sydney',
    'business automation Sydney',
    'workflow automation NSW',
    'n8n automation Australia',
    'AI integration Sydney',
    'automation agency Liverpool',
    'Western Sydney automation',
    'AI consulting Sydney',
    'process automation Australia',
    'business AI Sydney',
    'automation specialists NSW',
    'AI workflow Sydney',
  ],
  authors: [{ name: 'OpBros.Automation' }],
  creator: 'OpBros.Automation',
  publisher: 'OpBros.Automation',
  metadataBase: new URL('https://www.opbros.online'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'AI Automation Sydney | OpBros.Automation | Stop Hiring. Start Automating.',
    description: 'Sydney\'s leading AI automation agency. Eliminate manual work with custom AI workflows. 80% time saved. 30-day ROI guarantee. Liverpool & Western Sydney.',
    type: 'website',
    siteName: 'OpBros.Automation',
    locale: 'en_AU',
    url: 'https://www.opbros.online',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OpBros.Automation - Stop Hiring. Start Automating.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Sydney | OpBros.Automation',
    description: 'Sydney\'s #1 AI automation agency. 80% time saved. 30-day ROI guarantee.',
    creator: '@OpBrosAi',
    site: '@OpBrosAi',
    images: ['/og-image.png'],
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
  // verification: {
  //   google: 'ADD-YOUR-GOOGLE-VERIFICATION-CODE',
  // },
}

// JSON-LD Schema for Local Business SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.opbros.online/#business',
      name: 'OpBros.Automation',
      alternateName: 'OpBros AI',
      description: 'AI-powered workflow automation agency in Sydney. We build custom automation systems that eliminate manual work and deliver measurable ROI within 30 days.',
      url: 'https://www.opbros.online',
      telephone: '+61451449770',
      email: 'theopbros.ai@gmail.com',
      priceRange: '$500-$15000',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Liverpool',
        addressLocality: 'Liverpool',
        addressRegion: 'NSW',
        postalCode: '2170',
        addressCountry: 'AU',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -33.9209,
        longitude: 150.9234,
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Sydney',
        },
        {
          '@type': 'City',
          name: 'Liverpool',
        },
        {
          '@type': 'State',
          name: 'New South Wales',
        },
        {
          '@type': 'Country',
          name: 'Australia',
        },
      ],
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: -33.8688,
          longitude: 151.2093,
        },
        geoRadius: '100000',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      sameAs: [
        'https://x.com/OpBrosAi',
        'https://www.linkedin.com/in/cleanupbros/',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '12',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.opbros.online/#organization',
      name: 'OpBros.Automation',
      url: 'https://www.opbros.online',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.opbros.online/logo.png',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+61451449770',
        contactType: 'sales',
        areaServed: 'AU',
        availableLanguage: 'English',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.opbros.online/#website',
      url: 'https://www.opbros.online',
      name: 'OpBros.Automation',
      publisher: {
        '@id': 'https://www.opbros.online/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.opbros.online/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.opbros.online/#automation-service',
      name: 'AI Workflow Automation',
      provider: {
        '@id': 'https://www.opbros.online/#business',
      },
      description: 'Custom AI-powered workflow automation systems that eliminate manual work and integrate with your existing tools.',
      areaServed: {
        '@type': 'City',
        name: 'Sydney',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Automation Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Starter Automation Package',
              description: '1-2 custom workflows with tool integrations',
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '500',
              priceCurrency: 'AUD',
              minPrice: '500',
              maxPrice: '1500',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Growth Automation Package',
              description: '3-5 integrated workflows with AI features',
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '2000',
              priceCurrency: 'AUD',
              minPrice: '2000',
              maxPrice: '5000',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Scale Automation Package',
              description: 'Full system architecture with multiple AI integrations',
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '5000',
              priceCurrency: 'AUD',
              minPrice: '5000',
              maxPrice: '15000',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.opbros.online/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is AI automation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI automation uses artificial intelligence to automate repetitive business tasks, reducing manual work by up to 80%. This includes data entry, customer inquiries, scheduling, and more.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to see ROI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most clients see measurable ROI within 30 days. Our automation systems save an average of 20+ hours per week on manual tasks.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with businesses in Sydney?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! We are based in Liverpool, Sydney and work with businesses throughout Sydney, Western Sydney, and all of NSW. We also work with clients across Australia remotely.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="geo.region" content="AU-NSW" />
        <meta name="geo.placename" content="Liverpool, Sydney" />
        <meta name="geo.position" content="-33.9209;150.9234" />
        <meta name="ICBM" content="-33.9209, 150.9234" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
        <ChatWidget />
        <LeadCapture />
      </body>
    </html>
  )
}
