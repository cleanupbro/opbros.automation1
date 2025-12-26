import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, ArrowLeft, Clock, TrendingUp, Users, Zap, Bot, CheckCircle2 } from 'lucide-react'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'

export const metadata: Metadata = {
  title: 'Clean Up Bros Case Study | OpBros.Automation',
  description: 'How we helped a Sydney cleaning business save 80% admin time with automation.',
}

export default function CleanUpBrosCaseStudy() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40 bg-black text-white">
        <div className="container-wide">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-accent uppercase tracking-wider">Case Study</span>
              <h1 className="heading-1 mt-4 mb-6">Clean Up Bros</h1>
              <p className="text-xl text-neutral-400 mb-4">
                Cleaning Services • Sydney, Australia
              </p>
              <p className="text-neutral-300 text-lg">
                How we automated the entire customer journey — from quote request to booking confirmation — saving 80% of admin time.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/5 rounded-2xl">
                <Clock className="w-8 h-8 mx-auto mb-3 text-accent" />
                <p className="text-4xl font-bold">80%</p>
                <p className="text-sm text-neutral-400">Time Saved</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl">
                <TrendingUp className="w-8 h-8 mx-auto mb-3 text-accent" />
                <p className="text-4xl font-bold">24/7</p>
                <p className="text-sm text-neutral-400">Response Time</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl">
                <Users className="w-8 h-8 mx-auto mb-3 text-accent" />
                <p className="text-4xl font-bold">500+</p>
                <p className="text-sm text-neutral-400">Leads Processed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-2 mb-6">The Challenge</h2>
              <div className="space-y-4 text-[#86868b] text-lg">
                <p>
                  Clean Up Bros was growing fast — but their success was creating a problem. Every new lead meant:
                </p>
                <ul className="space-y-3 text-black">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Manual quote calculations taking 15-20 minutes each</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Follow-up emails sent manually (often delayed or forgotten)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>No visibility into lead status or pipeline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Customer data scattered across emails, spreadsheets, and notes</span>
                  </li>
                </ul>
                <p>
                  The team was spending more time on admin than actual cleaning. Leads were slipping through the cracks.
                </p>
              </div>
            </div>

            <div className="bg-[#F5F5F7] rounded-3xl p-8 md:p-12">
              <h3 className="font-semibold mb-6">Before Automation</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                  <span className="text-[#86868b]">Quote response time</span>
                  <span className="font-semibold text-red-500">2-24 hours</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                  <span className="text-[#86868b]">Admin time per lead</span>
                  <span className="font-semibold text-red-500">20+ minutes</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                  <span className="text-[#86868b]">Lead follow-up rate</span>
                  <span className="font-semibold text-red-500">~60%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-[#86868b]">Data accuracy</span>
                  <span className="font-semibold text-red-500">Inconsistent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-[#F5F5F7]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">The Solution</h2>
            <p className="text-[#86868b] text-lg max-w-2xl mx-auto">
              We built an end-to-end automation system using n8n and AI that handles the entire customer journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <Zap className="w-10 h-10 mb-4 text-accent" />
              <h3 className="heading-3 mb-3">Instant Quote Generation</h3>
              <p className="text-[#86868b] text-sm">
                Customers submit a form. The system calculates pricing instantly based on property details and sends a professional quote within seconds.
              </p>
            </div>

            <div className="card">
              <Bot className="w-10 h-10 mb-4 text-accent" />
              <h3 className="heading-3 mb-3">AI-Powered Responses</h3>
              <p className="text-[#86868b] text-sm">
                Claude AI drafts personalized responses to customer inquiries, handling common questions automatically.
              </p>
            </div>

            <div className="card">
              <TrendingUp className="w-10 h-10 mb-4 text-accent" />
              <h3 className="heading-3 mb-3">Smart Follow-Up Sequences</h3>
              <p className="text-[#86868b] text-sm">
                Automated follow-up emails and SMS at optimal times. No lead gets forgotten.
              </p>
            </div>

            <div className="card">
              <Users className="w-10 h-10 mb-4 text-accent" />
              <h3 className="heading-3 mb-3">Centralized CRM</h3>
              <p className="text-[#86868b] text-sm">
                All customer data in one place. Lead status, communication history, and booking details — accessible by the whole team.
              </p>
            </div>

            <div className="card">
              <Clock className="w-10 h-10 mb-4 text-accent" />
              <h3 className="heading-3 mb-3">Booking Automation</h3>
              <p className="text-[#86868b] text-sm">
                When a customer confirms, the system creates calendar events, assigns teams, and sends confirmation emails automatically.
              </p>
            </div>

            <div className="card">
              <CheckCircle2 className="w-10 h-10 mb-4 text-accent" />
              <h3 className="heading-3 mb-3">Real-Time Notifications</h3>
              <p className="text-[#86868b] text-sm">
                Telegram alerts for new leads, bookings, and important events. The team stays informed without checking dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-black text-white rounded-3xl p-8 md:p-12">
              <h3 className="font-semibold mb-6">After Automation</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                  <span className="text-neutral-400">Quote response time</span>
                  <span className="font-semibold text-green-400">Under 60 seconds</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                  <span className="text-neutral-400">Admin time per lead</span>
                  <span className="font-semibold text-green-400">2 minutes</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                  <span className="text-neutral-400">Lead follow-up rate</span>
                  <span className="font-semibold text-green-400">100%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-neutral-400">Data accuracy</span>
                  <span className="font-semibold text-green-400">Consistent</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="heading-2 mb-6">The Results</h2>
              <div className="space-y-4 text-[#86868b] text-lg">
                <p>
                  The transformation was immediate. Within the first week:
                </p>
                <ul className="space-y-3 text-black">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>80% reduction</strong> in time spent on admin tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>100% follow-up rate</strong> — no lead is ever missed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>24/7 responsiveness</strong> — even at midnight</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Better customer experience</strong> — instant, professional responses</span>
                  </li>
                </ul>
                <p>
                  The team now focuses on what they do best: delivering exceptional cleaning services. The system handles everything else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-[#F5F5F7]">
        <div className="container-narrow text-center">
          <blockquote className="text-2xl md:text-3xl font-medium mb-6">
            "We went from drowning in admin work to running a smooth operation. The automation pays for itself every single week."
          </blockquote>
          <p className="text-[#86868b]">— Clean Up Bros Team</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black text-white">
        <div className="container-narrow text-center">
          <h2 className="heading-2 mb-6">Want Similar Results?</h2>
          <p className="text-neutral-400 text-lg mb-10">
            Let's discuss how we can automate your business operations.
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
