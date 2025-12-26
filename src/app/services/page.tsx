import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, Zap, Bot, Cpu, HeadphonesIcon, Check, Sparkles } from 'lucide-react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { AntigravityBackground } from '../../components/AntigravityBackground'

export const metadata: Metadata = {
  title: 'AI Automation Services Sydney | OpBros.Automation',
  description: 'Custom workflow automation, AI integration, and full system builds for Sydney businesses. n8n specialists.',
}

const services = [
  {
    id: 'workflow-automation',
    icon: Zap,
    name: 'Workflow Automation',
    description: 'Custom n8n workflows that connect your tools, sync your data, and eliminate manual work.',
    priceRange: '$500 - $2,000',
    delivery: '1-2 weeks',
    color: '#4285f4',
    features: [
      'Custom n8n workflow design',
      'Integration with your existing tools',
      'Data synchronization between apps',
      'Automated notifications and alerts',
      'Error handling and monitoring',
      'Documentation and training',
    ],
    useCases: [
      'Lead capture and CRM updates',
      'Invoice generation and sending',
      'Report compilation and distribution',
      'Task creation from emails',
      'Data backup and archiving',
    ],
  },
  {
    id: 'ai-integration',
    icon: Bot,
    name: 'AI Integration',
    description: 'Add intelligence to your workflows with GPT, Claude, and custom AI agents.',
    priceRange: '$2,000 - $5,000',
    delivery: '2-4 weeks',
    color: '#ea4335',
    features: [
      'AI-powered decision making',
      'Natural language processing',
      'Content generation automation',
      'Intelligent lead scoring',
      'Chatbot development',
      'Custom AI agent creation',
    ],
    useCases: [
      'Automated customer support',
      'AI-generated content',
      'Smart email responses',
      'Document analysis and extraction',
      'Predictive analytics',
    ],
  },
  {
    id: 'full-system-build',
    icon: Cpu,
    name: 'Full System Build',
    description: 'End-to-end automation architecture for your entire operation.',
    priceRange: '$5,000 - $20,000',
    delivery: '4-8 weeks',
    color: '#34a853',
    features: [
      'Complete process analysis',
      'Custom system architecture',
      'Multiple integrated workflows',
      'Dashboard and reporting',
      'Team training program',
      'Ongoing support included',
    ],
    useCases: [
      'Customer journey automation',
      'Operations management system',
      'Sales and marketing automation',
      'HR and onboarding processes',
      'Financial tracking and reporting',
    ],
  },
  {
    id: 'support-retainer',
    icon: HeadphonesIcon,
    name: 'Support Retainer',
    description: 'Ongoing maintenance, optimization, and support for your automation systems.',
    priceRange: '$500 - $2,000/month',
    delivery: 'Ongoing',
    color: '#fbbc04',
    features: [
      '24/7 monitoring',
      'Bug fixes and maintenance',
      'Performance optimization',
      'New feature development',
      'Priority support',
      'Monthly reporting',
    ],
    tiers: [
      { name: 'Basic', price: '$500/mo', hours: '5 hours' },
      { name: 'Standard', price: '$1,000/mo', hours: '10 hours' },
      { name: 'Premium', price: '$2,000/mo', hours: '20 hours' },
    ],
  },
]

const techStack = [
  { name: 'n8n', description: 'Workflow automation' },
  { name: 'OpenAI GPT', description: 'Language models' },
  { name: 'Claude AI', description: 'AI assistant' },
  { name: 'Google Workspace', description: 'Productivity suite' },
  { name: 'Slack', description: 'Communication' },
  { name: 'HubSpot', description: 'CRM & marketing' },
  { name: 'Stripe', description: 'Payments' },
  { name: 'Supabase', description: 'Database' },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Header />
      <AntigravityBackground />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 relative">
        <div className="absolute inset-0 mesh-gradient opacity-40" />

        {/* Floating orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#4285f4]/20 to-transparent blur-3xl top-20 -left-36 animate-drift" />
          <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-[#ea4335]/20 to-transparent blur-3xl top-40 -right-32 animate-drift delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/50 shadow-lg mb-8 animate-hover-bob">
            <Sparkles className="w-4 h-4 text-[#4285f4]" />
            <span className="text-sm font-medium text-gray-700">Our Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            What We <span className="google-gradient-text">Build</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeInUp delay-200">
            Custom automation systems powered by n8n and AI that run your operations 24/7,
            so you can focus on growing your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 stagger-children">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="floating-card bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm relative overflow-hidden"
                >
                  {/* Color accent bar */}
                  <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: service.color }} />

                  <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {/* Service Info */}
                    <div className="md:col-span-1">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 animate-hover-bob"
                        style={{ backgroundColor: `${service.color}15`, animationDelay: `${index * 0.2}s` }}
                      >
                        <IconComponent className="w-8 h-8" style={{ color: service.color }} />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{service.name}</h2>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <div className="space-y-2">
                        <p className="text-3xl font-bold" style={{ color: service.color }}>{service.priceRange}</p>
                        <p className="text-sm text-gray-500">Delivery: {service.delivery}</p>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full font-medium text-white transition-all hover:shadow-lg hover:scale-105"
                        style={{ backgroundColor: service.color }}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Features */}
                    <div className="md:col-span-1">
                      <h3 className="font-semibold text-gray-900 mb-4">What's Included</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{ backgroundColor: `${service.color}15` }}
                            >
                              <Check className="w-3 h-3" style={{ color: service.color }} />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use Cases or Tiers */}
                    <div className="md:col-span-1">
                      {service.useCases ? (
                        <>
                          <h3 className="font-semibold text-gray-900 mb-4">Use Cases</h3>
                          <ul className="space-y-3">
                            {service.useCases.map((useCase, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: service.color }} />
                                {useCase}
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : service.tiers ? (
                        <>
                          <h3 className="font-semibold text-gray-900 mb-4">Pricing Tiers</h3>
                          <div className="space-y-3">
                            {service.tiers.map((tier, i) => (
                              <div
                                key={i}
                                className="p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all cursor-pointer"
                              >
                                <p className="font-semibold text-gray-900">{tier.name}</p>
                                <p className="text-sm text-gray-500">{tier.price} • {tier.hours}</p>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-[#34a853]/10 to-transparent blur-3xl -top-48 -right-48 animate-morph" />
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-[#fbbc04]/10 to-transparent blur-3xl -bottom-40 -left-40 animate-morph delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
            <p className="text-gray-600">We use the best tools in the industry to build reliable, scalable automation.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children">
            {techStack.map((tech, i) => {
              const colors = ['#4285f4', '#ea4335', '#fbbc04', '#34a853']
              const color = colors[i % 4]
              return (
                <div
                  key={tech.name}
                  className="floating-card bg-white rounded-2xl p-6 text-center border border-gray-100"
                >
                  <div
                    className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center text-white font-bold text-lg animate-hover-bob"
                    style={{ backgroundColor: color, animationDelay: `${i * 0.1}s` }}
                  >
                    {tech.name[0]}
                  </div>
                  <p className="font-semibold text-gray-900 mb-1">{tech.name}</p>
                  <p className="text-xs text-gray-500">{tech.description}</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Not Sure Which Service?</h2>
          <p className="text-white/80 text-lg mb-10">
            Book a free discovery call. We'll analyze your processes and recommend the right solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4285f4] rounded-full font-medium hover:shadow-2xl hover:scale-105 transition-all group"
            >
              Get Your Free Audit
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 text-white border-2 border-white/30 rounded-full font-medium hover:bg-white/30 transition-all"
            >
              Calculate ROI
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
