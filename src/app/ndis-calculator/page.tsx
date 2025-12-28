'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { AntigravityBackground } from '../../components/AntigravityBackground'
import {
  Calculator, DollarSign, Clock, TrendingUp, ArrowRight, CheckCircle2,
  Sparkles, Zap, Users, FileText, Calendar, Shield, Mail, Phone,
  ChevronRight, Star, Building2
} from 'lucide-react'

type Tier = {
  id: string
  name: string
  price: number
  color: string
  features: string[]
  bestFor: string
}

const tiers: Tier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 4500,
    color: '#4285f4',
    bestFor: 'New providers wanting a lean, scalable base',
    features: [
      '5-page responsive website',
      'WCAG 2.1 AA accessibility',
      'Lead capture + CRM integration',
      'Booking calendar sync',
      '2 automated workflows',
      '60 days monitoring + support'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 8500,
    color: '#34a853',
    bestFor: 'Providers ready to scale with automation',
    features: [
      'Everything in Starter, plus:',
      'AI FAQ chatbot (24/7)',
      'Multi-step lead scoring',
      'SMS follow-ups & reminders',
      'Basic compliance dashboard',
      'KPI tracking dashboard',
      '60 days premium support'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 13500,
    color: '#ea4335',
    bestFor: 'Hands-off operations at scale',
    features: [
      'Everything in Growth, plus:',
      'Full participant intake workflow',
      'Compliance automation',
      'Custom CRM pipeline',
      'Xero/QuickBooks invoicing',
      'Advanced reporting',
      '90 days strategic support'
    ]
  }
]

export default function NDISCalculatorPage() {
  const [selectedTier, setSelectedTier] = useState<Tier>(tiers[1]) // Default to Growth
  const [formData, setFormData] = useState({
    adminHours: 15,
    hourlyWage: 40,
    newLeadsPerMonth: 5,
    participantValue: 2400,
    hoursSavedPercent: 70,
  })
  const [showResults, setShowResults] = useState(true)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [leadData, setLeadData] = useState({ name: '', email: '', phone: '', company: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Calculations
  const hoursSavedWeekly = formData.adminHours * (formData.hoursSavedPercent / 100)
  const annualLaborSavings = hoursSavedWeekly * 52 * formData.hourlyWage
  const newRevenueYearly = formData.newLeadsPerMonth * 12 * formData.participantValue
  const totalValue = annualLaborSavings + newRevenueYearly
  const netProfit = totalValue - selectedTier.price
  const roiPercent = Math.round((netProfit / selectedTier.price) * 100)
  const monthlyValue = totalValue / 12
  const breakEvenMonths = Math.ceil(selectedTier.price / monthlyValue)

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      await fetch('https://nioctibinu.online/webhook/opbros-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'ndis_calculator',
          source: 'opbros-ndis-calculator',
          data: {
            ...leadData,
            tier: selectedTier.name,
            tierPrice: selectedTier.price,
            metrics: formData,
            results: {
              annualLaborSavings,
              newRevenueYearly,
              totalValue,
              netProfit,
              roiPercent,
              breakEvenMonths
            },
            timestamp: new Date().toISOString(),
          },
        }),
      })
      setSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Header />
      <AntigravityBackground />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-[#34a853]/20 to-transparent blur-3xl top-20 -left-40 animate-drift" />
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#4285f4]/20 to-transparent blur-3xl top-40 -right-36 animate-drift delay-1000" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/50 shadow-lg mb-8 animate-hover-bob">
            <Building2 className="w-4 h-4 text-[#34a853]" />
            <span className="text-sm font-medium text-gray-700">NDIS Provider Automation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            Calculate Your <span className="google-gradient-text">ROI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeInUp delay-200">
            See exactly how much time and money you'll save with NDIS automation.
            <span className="font-semibold text-gray-900"> Real numbers. No fluff.</span>
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-8 md:py-16 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">

          {/* Tier Selection */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">1. Select Your Service Tier</h2>
            <p className="text-gray-600 text-center mb-8">Choose the level that fits your growth stage</p>

            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier)}
                  className={`relative p-6 rounded-3xl border-2 transition-all duration-300 text-left group ${
                    selectedTier.id === tier.id
                      ? 'border-transparent shadow-xl scale-[1.02]'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                  }`}
                  style={{
                    background: selectedTier.id === tier.id
                      ? `linear-gradient(135deg, ${tier.color}10, ${tier.color}05)`
                      : 'white',
                    borderColor: selectedTier.id === tier.id ? tier.color : undefined
                  }}
                >
                  {tier.id === 'growth' && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#34a853] text-white text-xs font-bold rounded-full">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                    {selectedTier.id === tier.id && (
                      <CheckCircle2 className="w-6 h-6" style={{ color: tier.color }} />
                    )}
                  </div>

                  <p className="text-4xl font-bold mb-2" style={{ color: tier.color }}>
                    ${tier.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">{tier.bestFor}</p>

                  <ul className="space-y-2">
                    {tier.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: tier.color }} />
                        {feature}
                      </li>
                    ))}
                    {tier.features.length > 4 && (
                      <li className="text-sm font-medium" style={{ color: tier.color }}>
                        + {tier.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </button>
              ))}
            </div>
          </div>

          {/* Input Sliders */}
          <div className="floating-card bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">2. Your Business Metrics</h2>
            <p className="text-gray-600 mb-8">Adjust these to match your situation</p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Admin Hours */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-700">Admin Hours Per Week (Before)</label>
                  <span className="text-2xl font-bold text-[#4285f4]">{formData.adminHours}</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={formData.adminHours}
                  onChange={(e) => setFormData({ ...formData, adminHours: parseInt(e.target.value) })}
                  className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#4285f4]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>5 hrs</span>
                  <span>30 hrs</span>
                </div>
              </div>

              {/* Hourly Wage */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-700">Hourly Wage Cost</label>
                  <span className="text-2xl font-bold text-[#34a853]">${formData.hourlyWage}</span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="80"
                  step="5"
                  value={formData.hourlyWage}
                  onChange={(e) => setFormData({ ...formData, hourlyWage: parseInt(e.target.value) })}
                  className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#34a853]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$25/hr</span>
                  <span>$80/hr</span>
                </div>
              </div>

              {/* New Leads */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-700">Expected New Leads/Month</label>
                  <span className="text-2xl font-bold text-[#ea4335]">{formData.newLeadsPerMonth}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={formData.newLeadsPerMonth}
                  onChange={(e) => setFormData({ ...formData, newLeadsPerMonth: parseInt(e.target.value) })}
                  className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#ea4335]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0</span>
                  <span>20/month</span>
                </div>
              </div>

              {/* Participant Value */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-700">Avg Participant Value (12 wks)</label>
                  <span className="text-2xl font-bold text-[#fbbc04]">${formData.participantValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="8000"
                  step="200"
                  value={formData.participantValue}
                  onChange={(e) => setFormData({ ...formData, participantValue: parseInt(e.target.value) })}
                  className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#fbbc04]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$1,000</span>
                  <span>$8,000</span>
                </div>
              </div>

              {/* Hours Saved */}
              <div className="md:col-span-2">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-700">Admin Hours Reduced (After Automation)</label>
                  <span className="text-2xl font-bold text-[#4285f4]">{formData.hoursSavedPercent}%</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="90"
                  step="5"
                  value={formData.hoursSavedPercent}
                  onChange={(e) => setFormData({ ...formData, hoursSavedPercent: parseInt(e.target.value) })}
                  className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#4285f4]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>30% (Conservative)</span>
                  <span>90% (Aggressive)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">3. Your ROI Results</h2>
            <p className="text-gray-600 text-center mb-8">Based on your inputs, here's what you could achieve</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Labor Savings */}
              <div className="floating-card bg-gradient-to-br from-[#34a853]/10 to-[#34a853]/5 rounded-3xl p-6 border border-[#34a853]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#34a853] flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-gray-600">Annual Labor Savings</div>
                </div>
                <p className="text-4xl font-bold text-[#34a853]">${Math.round(annualLaborSavings).toLocaleString()}</p>
                <p className="text-sm text-gray-500 mt-2">{Math.round(hoursSavedWeekly)} hours saved per week</p>
              </div>

              {/* New Revenue */}
              <div className="floating-card bg-gradient-to-br from-[#4285f4]/10 to-[#4285f4]/5 rounded-3xl p-6 border border-[#4285f4]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4285f4] flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-gray-600">New Annual Revenue</div>
                </div>
                <p className="text-4xl font-bold text-[#4285f4]">${Math.round(newRevenueYearly).toLocaleString()}</p>
                <p className="text-sm text-gray-500 mt-2">From {formData.newLeadsPerMonth * 12} new participants/year</p>
              </div>

              {/* Total Value */}
              <div className="floating-card bg-gradient-to-br from-[#fbbc04]/10 to-[#ea4335]/10 rounded-3xl p-6 border border-[#fbbc04]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fbbc04] to-[#ea4335] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-gray-600">Total Year 1 Value</div>
                </div>
                <p className="text-4xl font-bold bg-gradient-to-r from-[#fbbc04] to-[#ea4335] bg-clip-text text-transparent">
                  ${Math.round(totalValue).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mt-2">Combined savings + revenue</p>
              </div>
            </div>

            {/* ROI Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-gray-100 text-center shadow-sm">
                <p className="text-3xl font-bold text-[#34a853]">{roiPercent}%</p>
                <p className="text-sm text-gray-500">Year 1 ROI</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100 text-center shadow-sm">
                <p className="text-3xl font-bold text-[#4285f4]">{breakEvenMonths} mo</p>
                <p className="text-sm text-gray-500">Break-Even</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100 text-center shadow-sm">
                <p className="text-3xl font-bold text-[#ea4335]">${Math.round(netProfit).toLocaleString()}</p>
                <p className="text-sm text-gray-500">Net Profit Y1</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100 text-center shadow-sm">
                <p className="text-3xl font-bold text-[#fbbc04]">{Math.round(totalValue / selectedTier.price)}x</p>
                <p className="text-sm text-gray-500">Return Multiple</p>
              </div>
            </div>
          </div>

          {/* Investment Summary */}
          <div className="floating-card bg-gray-900 rounded-3xl p-8 md:p-10 text-white mb-12">
            <h3 className="text-2xl font-bold mb-6">Investment Summary: {selectedTier.name} Tier</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-400">Total Investment</span>
                  <span className="text-2xl font-bold">${selectedTier.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-400">Upfront Payment (25%)</span>
                  <span className="font-semibold">${Math.round(selectedTier.price * 0.25).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-400">Final Payment (Day 60)</span>
                  <span className="font-semibold">${Math.round(selectedTier.price * 0.75).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-400">Payback Period</span>
                  <span className="font-semibold text-[#34a853]">~{breakEvenMonths} months</span>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#34a853]" />
                  What's Included
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#34a853]" />
                    60-90 days of weekly support
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#34a853]" />
                    Performance monitoring
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#34a853]" />
                    Bug fixes included
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#34a853]" />
                    Weekly optimisation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#34a853]" />
                    You own everything
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          {!showLeadForm && !submitted && (
            <div className="text-center">
              <button
                onClick={() => setShowLeadForm(true)}
                className="inline-flex items-center justify-center px-10 py-5 bg-[#4285f4] text-white rounded-full font-medium text-lg hover:shadow-2xl hover:shadow-[#4285f4]/30 hover:scale-105 transition-all group"
              >
                <Mail className="w-5 h-5 mr-3" />
                Get These Results Emailed
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-gray-500 text-sm mt-4">Plus a personalized automation roadmap</p>
            </div>
          )}

          {/* Lead Form */}
          {showLeadForm && !submitted && (
            <div className="max-w-lg mx-auto floating-card bg-white rounded-3xl p-8 shadow-xl border border-gray-100 animate-fadeInUp">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#4285f4] to-[#34a853] rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Get Your Results</h3>
                <p className="text-gray-600">We'll email your personalized ROI report</p>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  value={leadData.name}
                  onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4285f4] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={leadData.email}
                  onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4285f4] transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  value={leadData.phone}
                  onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4285f4] transition-colors"
                />
                <input
                  type="text"
                  placeholder="Company name"
                  value={leadData.company}
                  onChange={(e) => setLeadData({ ...leadData, company: e.target.value })}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4285f4] transition-colors"
                />
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !leadData.email}
                  className="w-full py-4 bg-[#34a853] text-white rounded-xl font-medium hover:bg-[#2d9249] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Send My ROI Report
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Success State */}
          {submitted && (
            <div className="max-w-lg mx-auto text-center floating-card bg-gradient-to-br from-[#34a853]/10 to-[#4285f4]/10 rounded-3xl p-10 border border-[#34a853]/20 animate-fadeInUp">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#34a853] rounded-2xl flex items-center justify-center animate-hover-bob">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Check Your Inbox!</h3>
              <p className="text-gray-600 mb-6">
                We've sent your personalized ROI report. Check your email for next steps.
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
                <a
                  href="tel:0451449770"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </a>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why NDIS Providers Choose OpBros</h2>
            <p className="text-gray-600">We're not just another web agency. We build automation that delivers ROI.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: 'ROI-Based Pricing',
                desc: 'You pay 25% upfront, 75% after 60 days when it\'s working.',
                color: '#34a853'
              },
              {
                icon: Shield,
                title: 'NDIS Compliant',
                desc: 'WCAG 2.1 AA accessibility, secure data, audit trails built in.',
                color: '#4285f4'
              },
              {
                icon: Users,
                title: '60-Day Support',
                desc: 'We monitor, optimize, and fix issues. You\'re never abandoned.',
                color: '#ea4335'
              }
            ].map((item, i) => (
              <div key={i} className="floating-card bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-12 bg-gradient-to-br from-[#4285f4] to-[#3367d6] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-64 h-64 rounded-full bg-white/10 blur-3xl -top-32 -left-32 animate-drift" />
          <div className="absolute w-48 h-48 rounded-full bg-white/10 blur-3xl -bottom-24 -right-24 animate-drift delay-1000" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your NDIS Operations?</h2>
          <p className="text-white/80 text-lg mb-6">
            Let's discuss how automation can save you 10+ hours per week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/theopbros-ai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4285f4] rounded-full font-medium hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Strategy Call
            </a>
            <a
              href="tel:0451449770"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 text-white border-2 border-white/30 rounded-full font-medium hover:bg-white/30 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              0451 449 770
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: currentColor;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.5s ease-out; }
      `}</style>
    </main>
  )
}
