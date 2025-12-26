import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, Clock, TrendingUp, Users, Sparkles } from 'lucide-react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Case Studies | OpBros.Automation',
  description: 'See real results from our automation projects. Learn how we helped businesses save time and scale.',
}

const caseStudies = [
  {
    slug: 'clean-up-bros',
    company: 'Clean Up Bros',
    industry: 'Cleaning Services',
    location: 'Sydney, Australia',
    featured: true,
    metrics: [
      { label: 'Time Saved', value: '80%', icon: Clock },
      { label: 'Response Time', value: '24/7', icon: TrendingUp },
      { label: 'Leads Processed', value: '500+', icon: Users },
    ],
    challenge: 'Manual quote processing was taking hours daily. Leads were falling through the cracks.',
    solution: 'End-to-end customer journey automation with AI-powered responses and n8n workflows.',
    results: 'The team now focuses on service delivery while the system handles all customer communications automatically.',
    testimonial: {
      quote: 'We went from drowning in admin work to running a smooth operation. The automation pays for itself every week.',
      author: 'Clean Up Bros Team',
    },
  },
]

const upcomingCases = [
  {
    industry: 'Marketing Agency',
    description: 'Client onboarding and reporting automation',
    status: 'In Progress',
  },
  {
    industry: 'Real Estate',
    description: 'Lead follow-up and property matching',
    status: 'Coming Soon',
  },
  {
    industry: 'E-commerce',
    description: 'Order processing and customer support',
    status: 'Coming Soon',
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-wide text-center">
          <h1 className="heading-1 mb-6">Real Results</h1>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
            See how we've helped businesses eliminate manual work and scale their operations with automation.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="section-padding pt-0">
        <div className="container-wide">
          {caseStudies.filter(c => c.featured).map((study) => (
            <div key={study.slug} className="bg-black text-white rounded-3xl p-8 md:p-16">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left */}
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm mb-6">
                    <Sparkles className="w-4 h-4" />
                    Featured Case Study
                  </span>
                  <h2 className="heading-2 mb-2">{study.company}</h2>
                  <p className="text-neutral-400 mb-8">{study.industry} • {study.location}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    {study.metrics.map((metric, i) => {
                      const IconComponent = metric.icon
                      return (
                        <div key={i} className="text-center">
                          <IconComponent className="w-6 h-6 mx-auto mb-2 text-accent" />
                          <p className="text-3xl font-bold">{metric.value}</p>
                          <p className="text-sm text-neutral-400">{metric.label}</p>
                        </div>
                      )
                    })}
                  </div>

                  <Link href={`/case-studies/${study.slug}`} className="btn-ghost text-white">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right */}
                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold text-neutral-400 mb-2">The Challenge</h3>
                    <p>{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-400 mb-2">Our Solution</h3>
                    <p>{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-400 mb-2">The Results</h3>
                    <p>{study.results}</p>
                  </div>

                  {study.testimonial && (
                    <blockquote className="border-l-2 border-accent pl-6 mt-8">
                      <p className="text-neutral-300 italic mb-2">"{study.testimonial.quote}"</p>
                      <cite className="text-sm text-neutral-500">— {study.testimonial.author}</cite>
                    </blockquote>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Case Studies */}
      <section className="section-padding bg-[#F5F5F7]">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">More Success Stories Coming</h2>
            <p className="text-[#86868b]">We're currently working with businesses across industries.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingCases.map((item, i) => (
              <div key={i} className="card">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                  {item.status}
                </span>
                <h3 className="heading-3 mb-2">{item.industry}</h3>
                <p className="text-[#86868b] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Industries We Serve</h2>
            <p className="text-[#86868b]">Our automation systems work across service-based businesses.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Cleaning Services', 'Marketing Agencies', 'Real Estate', 'Healthcare', 'E-commerce'].map((industry) => (
              <div key={industry} className="bg-[#F5F5F7] rounded-2xl p-6 text-center">
                <p className="font-medium text-sm">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black text-white">
        <div className="container-narrow text-center">
          <h2 className="heading-2 mb-6">Want Similar Results?</h2>
          <p className="text-neutral-400 text-lg mb-10">
            Let's discuss how automation can transform your business operations.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-black hover:bg-neutral-200">
            Book Your Free Audit
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
