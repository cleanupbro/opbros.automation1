import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, Check, Zap, Bot, Cpu, HeadphonesIcon, Sparkles } from 'lucide-react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { AntigravityBackground } from '../../components/AntigravityBackground'

export const metadata: Metadata = {
  title: 'Pricing | OpBros.Automation',
  description: 'Transparent pricing for automation, AI integration, frontend, and backend development services.',
}

const projectTiers = [
  {
    name: 'Starter',
    price: '$500',
    priceMax: '$1,500',
    description: 'Perfect for automating 1-2 specific processes',
    icon: Zap,
    color: '#4285f4',
    features: [
      '1-2 custom workflows',
      'Tool integrations (up to 5)',
      'Basic error handling',
      'Documentation',
      '2 weeks delivery',
      '30 days support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$2,000',
    priceMax: '$5,000',
    description: 'For businesses ready to scale with AI and automation',
    icon: Bot,
    color: '#34a853',
    features: [
      '3-5 integrated workflows',
      'AI-powered features',
      'Custom frontend/backend',
      'Dashboard & reporting',
      '4 weeks delivery',
      '60 days support',
    ],
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'Scale',
    price: '$5,000',
    priceMax: '$15,000',
    description: 'Complete system build for your entire operation',
    icon: Cpu,
    color: '#ea4335',
    features: [
      'Full system architecture',
      'Multiple AI integrations',
      'Custom web application',
      'Team training program',
      '8 weeks delivery',
      '90 days support',
    ],
    cta: 'Let\'s Talk',
    popular: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceMax: '',
    description: 'Large-scale projects with dedicated support',
    icon: HeadphonesIcon,
    color: '#fbbc04',
    features: [
      'Unlimited scope',
      'Dedicated team',
      'Priority support',
      'SLA guarantees',
      'Custom timeline',
      'Ongoing partnership',
    ],
    cta: 'Contact Us',
    popular: false,
  },
]

const retainerTiers = [
  {
    name: 'Basic',
    price: '$500',
    period: '/month',
    hours: '5 hours',
    color: '#4285f4',
    features: ['Monitoring & maintenance', 'Bug fixes', 'Email support'],
  },
  {
    name: 'Standard',
    price: '$1,000',
    period: '/month',
    hours: '10 hours',
    color: '#34a853',
    features: ['Everything in Basic', 'Performance optimization', 'New feature development'],
  },
  {
    name: 'Premium',
    price: '$2,000',
    period: '/month',
    hours: '20 hours',
    color: '#ea4335',
    features: ['Everything in Standard', 'Priority support', 'Dedicated Slack channel', 'Monthly strategy call'],
  },
]

const faqs = [
  {
    q: 'What\'s included in the project price?',
    a: 'Everything from discovery to deployment: analysis, design, development, testing, documentation, and training. No hidden fees.',
  },
  {
    q: 'How do you determine the final price?',
    a: 'After our discovery call, we provide a fixed quote based on scope and complexity. The price won\'t change unless you request additional features.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. We typically split payments: 50% upfront to start, 50% on completion. For larger projects, we can arrange milestone-based payments.',
  },
  {
    q: 'What if I need changes after the project is done?',
    a: 'Minor tweaks within 30 days are included. For ongoing changes, we recommend a retainer plan for continuous improvements.',
  },
  {
    q: 'Do you build custom web applications?',
    a: 'Yes! We build complete frontend and backend solutions using Next.js, React, and modern tech stacks — integrated with your automation systems.',
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Header />
      <AntigravityBackground />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 relative">
        <div className="absolute inset-0 mesh-gradient opacity-40" />

        {/* Floating orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#34a853]/20 to-transparent blur-3xl top-20 -left-36 animate-drift" />
          <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-[#fbbc04]/20 to-transparent blur-3xl top-40 -right-32 animate-drift delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/50 shadow-lg mb-8 animate-hover-bob">
            <Sparkles className="w-4 h-4 text-[#34a853]" />
            <span className="text-sm font-medium text-gray-700">Pricing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            Transparent <span className="google-gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeInUp delay-200">
            Fixed project pricing. No hourly billing surprises. Know exactly what you're paying before we start.
          </p>
        </div>
      </section>

      {/* Project Tiers */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">Project Packages</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {projectTiers.map((tier, index) => {
              const IconComponent = tier.icon
              return (
                <div
                  key={tier.name}
                  className={`floating-card rounded-3xl p-8 relative transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'bg-white border border-gray-100 shadow-sm'
                  }`}
                >
                  {tier.popular && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-white text-xs font-semibold rounded-full"
                      style={{ backgroundColor: tier.color }}
                    >
                      Most Popular
                    </span>
                  )}

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 animate-hover-bob"
                    style={{ backgroundColor: tier.popular ? `${tier.color}30` : `${tier.color}15`, animationDelay: `${index * 0.15}s` }}
                  >
                    <IconComponent className="w-6 h-6" style={{ color: tier.color }} />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    {tier.priceMax && (
                      <span className={`text-lg ${tier.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                        {' '}- {tier.priceMax}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm mb-6 ${tier.popular ? 'text-gray-400' : 'text-gray-600'}`}>
                    {tier.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: tier.popular ? `${tier.color}30` : `${tier.color}15` }}
                        >
                          <Check className="w-3 h-3" style={{ color: tier.color }} />
                        </div>
                        <span className={tier.popular ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block text-center py-3 px-6 rounded-xl font-medium transition-all ${
                      tier.popular
                        ? 'bg-white text-gray-900 hover:bg-gray-100'
                        : 'text-white hover:shadow-lg'
                    }`}
                    style={{ backgroundColor: tier.popular ? undefined : tier.color }}
                  >
                    {tier.cta}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Retainer Plans */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-[#4285f4]/10 to-transparent blur-3xl -top-48 -right-48 animate-morph" />
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-[#34a853]/10 to-transparent blur-3xl -bottom-40 -left-40 animate-morph delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Monthly Retainers</h2>
            <p className="text-gray-600">Ongoing support, maintenance, and continuous improvement.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto stagger-children">
            {retainerTiers.map((tier, i) => (
              <div key={tier.name} className="floating-card bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
                <div
                  className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center text-white font-bold text-xl animate-hover-bob"
                  style={{ backgroundColor: tier.color, animationDelay: `${i * 0.15}s` }}
                >
                  {tier.name[0]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-4xl font-bold text-gray-900 mb-1">
                  {tier.price}
                  <span className="text-base font-normal text-gray-500">{tier.period}</span>
                </p>
                <p className="text-sm text-gray-500 mb-6">{tier.hours} included</p>

                <ul className="space-y-3 text-left">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${tier.color}15` }}
                      >
                        <Check className="w-3 h-3" style={{ color: tier.color }} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {faqs.map((faq, i) => {
              const colors = ['#4285f4', '#ea4335', '#fbbc04', '#34a853', '#4285f4']
              return (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-3">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: colors[i] }}
                    >
                      {i + 1}
                    </span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 ml-9">{faq.a}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#4285f4] to-[#3367d6] relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-64 h-64 rounded-full bg-white/10 blur-3xl -top-32 -left-32 animate-drift" />
          <div className="absolute w-48 h-48 rounded-full bg-white/10 blur-3xl -bottom-24 -right-24 animate-drift delay-1000" />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white/80 text-lg mb-10">
            Book a free discovery call. We'll discuss your needs and provide a custom quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4285f4] rounded-full font-medium hover:shadow-2xl hover:scale-105 transition-all group"
          >
            Book Your Free Audit
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
