import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, Target, Zap, Users, Shield, Sparkles } from 'lucide-react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { AntigravityBackground } from '../../components/AntigravityBackground'

export const metadata: Metadata = {
  title: 'About | OpBros.Automation Sydney',
  description: 'Learn about OpBros.Automation - Sydney\'s AI automation agency helping businesses eliminate manual work.',
}

const values = [
  {
    icon: Target,
    title: 'ROI-Focused',
    description: 'Every system we build is designed to deliver measurable return on investment within 30 days.',
    color: '#4285f4',
  },
  {
    icon: Zap,
    title: 'Speed to Value',
    description: 'We move fast. Most projects go from discovery to production in 2-4 weeks.',
    color: '#fbbc04',
  },
  {
    icon: Users,
    title: 'Partner, Not Vendor',
    description: 'We work alongside you, understanding your business deeply before building anything.',
    color: '#34a853',
  },
  {
    icon: Shield,
    title: 'Reliability First',
    description: 'Our systems are built to run 24/7 with robust error handling and monitoring.',
    color: '#ea4335',
  },
]

const timeline = [
  {
    year: '2024',
    title: 'Built for Clean Up Bros',
    description: 'We automated the entire customer journey for a Sydney cleaning business, saving 80% of admin time.',
    color: '#4285f4',
  },
  {
    year: '2025',
    title: 'OpBros.Automation Launches',
    description: 'Sam founded OpBros.Automation, turning proven systems into a service for other businesses.',
    color: '#34a853',
  },
  {
    year: 'Now',
    title: 'Scaling Impact',
    description: 'Building automation systems for service businesses across Australia and beyond.',
    color: '#ea4335',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Header />
      <AntigravityBackground />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20 relative">
        <div className="absolute inset-0 mesh-gradient opacity-40" />

        {/* Floating orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-[#4285f4]/20 to-transparent blur-3xl top-20 -left-40 animate-drift" />
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#34a853]/20 to-transparent blur-3xl top-60 -right-36 animate-drift delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/50 shadow-lg mb-8 animate-hover-bob">
              <Sparkles className="w-4 h-4 text-[#4285f4]" />
              <span className="text-sm font-medium text-gray-700">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fadeInUp">
              Built by Operators,<br />
              <span className="google-gradient-text">for Operators.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fadeInUp delay-200">
              We're not consultants who've never run a business. We're operators who built automation
              systems for our own companies first — and saw the results ourselves.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="animate-fadeInUp">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">The Origin Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  It started with a cleaning business. Clean Up Bros was growing fast,
                  but admin work was drowning the team. Hours spent on quote follow-ups,
                  manual data entry, and chasing customers.
                </p>
                <p>
                  We built a system using n8n and AI that automated the entire customer journey.
                  Quote requests were processed instantly. Follow-ups happened automatically.
                  Customers were booked without human intervention.
                </p>
                <p>
                  <strong className="text-gray-900">The result? 80% time savings.</strong> The team went from
                  firefighting to focusing on what matters: delivering great service and growing the business.
                </p>
                <p>
                  We realized other service businesses faced the same challenges. That's why we
                  launched OpBros.Automation — to bring the same systems to others.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="floating-card bg-gray-50 rounded-3xl p-8 md:p-10">
              <h3 className="text-xl font-bold text-gray-900 mb-8">Our Journey</h3>
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-sm animate-hover-bob group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: item.color, animationDelay: `${i * 0.2}s` }}
                      >
                        {item.year}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-[#fbbc04]/10 to-transparent blur-3xl -top-48 -right-48 animate-morph" />
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-[#ea4335]/10 to-transparent blur-3xl -bottom-40 -left-40 animate-morph delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Believe</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we build.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {values.map((value, i) => {
              const IconComponent = value.icon
              return (
                <div key={i} className="floating-card bg-white rounded-2xl p-6 border border-gray-100">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 animate-hover-bob"
                    style={{ backgroundColor: `${value.color}15`, animationDelay: `${i * 0.15}s` }}
                  >
                    <IconComponent className="w-7 h-7" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-gray-600">The people behind OpBros.Automation</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="card-antigravity bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-28 h-28 mx-auto mb-6 bg-gradient-to-br from-[#4285f4] to-[#34a853] rounded-2xl flex items-center justify-center text-white text-4xl font-bold animate-hover-bob">
                S
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Sam</h3>
              <p className="text-[#4285f4] font-medium mb-4">Head Developer</p>
              <p className="text-gray-600 mb-6">
                Technical lead with expertise in n8n, AI integration, and full-stack development.
                Based in Liverpool, Sydney.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <a href="mailto:theopbros.ai@gmail.com" className="text-[#4285f4] hover:underline font-medium">
                  theopbros.ai@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why n8n */}
      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why We Use n8n</h2>
          <p className="text-gray-600 text-lg mb-10">
            n8n is the most powerful workflow automation platform available. Unlike Zapier or Make,
            it's fully customizable, self-hostable, and designed for complex business processes.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { icon: Zap, color: '#4285f4', title: 'Unlimited Flexibility', desc: 'Build any workflow you can imagine, with custom code when needed.' },
              { icon: Shield, color: '#34a853', title: 'Self-Hostable', desc: 'Keep your data on your own servers for maximum security and control.' },
              { icon: Target, color: '#fbbc04', title: 'Fair Pricing', desc: 'No per-task fees. Run as many workflows as you need.' },
            ].map((item, i) => (
              <div key={i} className="floating-card bg-white p-6 rounded-2xl border border-gray-100">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 animate-hover-bob"
                  style={{ backgroundColor: `${item.color}15`, animationDelay: `${i * 0.1}s` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#4285f4] to-[#3367d6] relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-64 h-64 rounded-full bg-white/10 blur-3xl -top-32 -left-32 animate-drift" />
          <div className="absolute w-48 h-48 rounded-full bg-white/10 blur-3xl -bottom-24 -right-24 animate-drift delay-1000" />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-white/80 text-lg mb-10">
            Let's have a conversation about your business and see how automation can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4285f4] rounded-full font-medium hover:shadow-2xl hover:scale-105 transition-all group"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
