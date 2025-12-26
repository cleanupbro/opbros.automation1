'use client'

import { useState } from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { AntigravityBackground } from '../../components/AntigravityBackground'
import { Send, CheckCircle2, Mail, Phone, MapPin, ArrowRight, ArrowLeft, Sparkles, Calendar, MessageCircle, Zap } from 'lucide-react'

type FormStep = 'type' | 'details' | 'contact' | 'success'

interface FormData {
  inquiryType: string
  projectDescription: string
  timeline: string
  budget: string
  name: string
  email: string
  phone: string
  company: string
}

export default function ContactPage() {
  const [step, setStep] = useState<FormStep>('type')
  const [formData, setFormData] = useState<FormData>({
    inquiryType: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    company: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const inquiryTypes = [
    { id: 'automation', label: 'Workflow Automation', icon: Zap, description: 'Connect tools & eliminate manual work', color: '#4285f4' },
    { id: 'ai', label: 'AI Integration', icon: Sparkles, description: 'Add AI to your business processes', color: '#ea4335' },
    { id: 'full-system', label: 'Full System Build', icon: MessageCircle, description: 'End-to-end automation solution', color: '#34a853' },
    { id: 'consultation', label: 'Free Consultation', icon: Calendar, description: 'Discuss your automation needs', color: '#fbbc04' },
  ]

  const timelines = [
    { id: 'asap', label: 'ASAP', description: 'Start immediately' },
    { id: '1-2-weeks', label: '1-2 Weeks', description: 'Starting soon' },
    { id: '1-month', label: 'Within a Month', description: 'Planning ahead' },
    { id: 'exploring', label: 'Just Exploring', description: 'Research phase' },
  ]

  const budgets = [
    { id: 'starter', label: '$500 - $2,000', description: 'Single workflow' },
    { id: 'growth', label: '$2,000 - $5,000', description: 'Multiple workflows' },
    { id: 'scale', label: '$5,000 - $10,000', description: 'Full system' },
    { id: 'enterprise', label: '$10,000+', description: 'Enterprise solution' },
  ]

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      await fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'https://nioctibinu.online/webhook/opbros-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'contact_form',
          source: 'opbros-contact-page',
          data: {
            ...formData,
            timestamp: new Date().toISOString(),
          },
        }),
      })
      setStep('success')
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getProgress = () => {
    switch (step) {
      case 'type': return 25
      case 'details': return 50
      case 'contact': return 75
      case 'success': return 100
    }
  }

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Header />
      <AntigravityBackground />

      <section className="pt-32 md:pt-40 pb-20 relative">
        <div className="absolute inset-0 mesh-gradient opacity-40" />

        {/* Floating orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#4285f4]/20 to-transparent blur-3xl top-20 -left-36 animate-drift" />
          <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-[#34a853]/20 to-transparent blur-3xl top-60 -right-32 animate-drift delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Form */}
            <div>
              {/* Progress Bar */}
              {step !== 'success' && (
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Step {step === 'type' ? 1 : step === 'details' ? 2 : 3} of 3</span>
                    <span>{getProgress()}% complete</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#4285f4] to-[#34a853] transition-all duration-500"
                      style={{ width: `${getProgress()}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Step 1: Inquiry Type */}
              {step === 'type' && (
                <div className="animate-fadeIn">
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Let's Build Something</h1>
                  <p className="text-gray-600 text-lg mb-8">What can we help you with?</p>

                  <div className="space-y-3">
                    {inquiryTypes.map((type) => {
                      const IconComponent = type.icon
                      return (
                        <button
                          key={type.id}
                          onClick={() => {
                            setFormData({ ...formData, inquiryType: type.id })
                            setStep('details')
                          }}
                          className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-200 text-left group hover:border-[${type.color}] hover:bg-gray-50`}
                          style={{ borderColor: formData.inquiryType === type.id ? type.color : '#e5e7eb' }}
                        >
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                            style={{ backgroundColor: `${type.color}15` }}
                          >
                            <IconComponent className="w-6 h-6" style={{ color: type.color }} />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">{type.label}</p>
                            <p className="text-sm text-gray-500">{type.description}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 transition-all" />
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {step === 'details' && (
                <div className="animate-fadeIn">
                  <button
                    onClick={() => setStep('type')}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>

                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Tell Us More</h2>
                  <p className="text-gray-600 mb-8">Help us understand your project better.</p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What do you want to automate?
                      </label>
                      <textarea
                        rows={4}
                        value={formData.projectDescription}
                        onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4285f4] transition-colors resize-none"
                        placeholder="Describe your current process and what you'd like to improve..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Timeline</label>
                      <div className="grid grid-cols-2 gap-3">
                        {timelines.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => setFormData({ ...formData, timeline: t.id })}
                            className={`p-3 rounded-xl border-2 transition-all duration-200 text-left ${
                              formData.timeline === t.id
                                ? 'border-[#4285f4] bg-[#4285f4]/5'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <p className="font-medium text-gray-900">{t.label}</p>
                            <p className="text-xs text-gray-500">{t.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Budget Range</label>
                      <div className="grid grid-cols-2 gap-3">
                        {budgets.map((b) => (
                          <button
                            key={b.id}
                            onClick={() => setFormData({ ...formData, budget: b.id })}
                            className={`p-3 rounded-xl border-2 transition-all duration-200 text-left ${
                              formData.budget === b.id
                                ? 'border-[#34a853] bg-[#34a853]/5'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <p className="font-medium text-gray-900">{b.label}</p>
                            <p className="text-xs text-gray-500">{b.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setStep('contact')}
                      className="w-full py-4 bg-[#4285f4] text-white rounded-xl font-medium hover:bg-[#3367d6] transition-colors flex items-center justify-center gap-2"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {step === 'contact' && (
                <div className="animate-fadeIn">
                  <button
                    onClick={() => setStep('details')}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>

                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Your Details</h2>
                  <p className="text-gray-600 mb-8">How can we reach you?</p>

                  <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4285f4] transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4285f4] transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4285f4] transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4285f4] transition-colors"
                        placeholder="0451 449 770"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#34a853] text-white rounded-xl font-medium hover:bg-[#2d9249] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Submit Request
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}

              {/* Success */}
              {step === 'success' && (
                <div className="animate-fadeIn text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#34a853] rounded-2xl flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">You're All Set!</h2>
                  <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                    We've received your request and will get back to you within 24 hours.
                    Check your email for a confirmation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://calendly.com/theopbros-ai/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#4285f4] text-white rounded-xl font-medium hover:bg-[#3367d6] transition-colors"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book a Call Now
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Right - Contact Info */}
            <div className="lg:sticky lg:top-32 h-fit">
              <div className="card-antigravity bg-gray-900 text-white rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6">Other Ways to Reach Us</h3>

                <div className="space-y-6">
                  <a href="mailto:theopbros.ai@gmail.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-[#4285f4] rounded-lg flex items-center justify-center flex-shrink-0 animate-hover-bob">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-400 group-hover:text-white transition-colors">
                        theopbros.ai@gmail.com
                      </p>
                    </div>
                  </a>

                  <a href="tel:0451449770" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-[#34a853] rounded-lg flex items-center justify-center flex-shrink-0 animate-hover-bob" style={{ animationDelay: '0.15s' }}>
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-400 group-hover:text-white transition-colors">
                        0451 449 770
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#ea4335] rounded-lg flex items-center justify-center flex-shrink-0 animate-hover-bob" style={{ animationDelay: '0.3s' }}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-400">Sydney, Australia</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h4 className="font-medium mb-3">Response Time</h4>
                  <p className="text-gray-400 text-sm">
                    We typically respond within 24 hours during business days.
                    For urgent inquiries, call us directly.
                  </p>
                </div>
              </div>

              {/* Calendly CTA */}
              <div className="mt-6 floating-card bg-gradient-to-br from-[#4285f4] to-[#3367d6] rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute w-32 h-32 rounded-full bg-white/10 blur-2xl -top-16 -right-16 animate-drift" />
                </div>
                <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2">Skip the Form</h3>
                <p className="text-white/80 text-sm mb-4">
                  Book a free 30-minute strategy call directly with our team.
                </p>
                <a
                  href="https://calendly.com/theopbros-ai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-white text-[#4285f4] rounded-xl font-medium hover:bg-gray-100 hover:scale-105 transition-all gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Free Discovery Call
                </a>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-6 floating-card bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Frequently Asked</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900">How long does a typical project take?</p>
                    <p className="text-sm text-gray-600">1-4 weeks depending on complexity.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Do you offer ongoing support?</p>
                    <p className="text-sm text-gray-600">Yes! We offer support retainers from $500/month.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">What if I'm not sure what I need?</p>
                    <p className="text-sm text-gray-600">Book a free consultation — we'll figure it out together.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </main>
  )
}
