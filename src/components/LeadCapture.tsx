'use client'

import { useState, useEffect } from 'react'
import { X, Sparkles, ArrowRight, CheckCircle2, Zap, MessageCircle, Calendar, Gift } from 'lucide-react'

type WidgetState = 'minimized' | 'expanded' | 'form' | 'success' | 'quiz'

interface QuizAnswer {
  question: number
  answer: string
}

export function LeadCapture() {
  const [state, setState] = useState<WidgetState>('minimized')
  const [showPulse, setShowPulse] = useState(true)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [quizStep, setQuizStep] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasInteracted && state === 'minimized') {
        setShowExitIntent(true)
      }
    }
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasInteracted, state])

  // Auto-expand after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (state === 'minimized' && !hasInteracted) {
        setShowPulse(true)
      }
    }, 10000)
    return () => clearTimeout(timer)
  }, [state, hasInteracted])

  const quizQuestions = [
    {
      question: "What's your biggest time drain?",
      options: [
        { label: 'Manual data entry', icon: '📝', value: 'data_entry' },
        { label: 'Follow-up emails', icon: '📧', value: 'emails' },
        { label: 'Lead management', icon: '👥', value: 'leads' },
        { label: 'Scheduling', icon: '📅', value: 'scheduling' },
      ]
    },
    {
      question: "How many hours/week on repetitive tasks?",
      options: [
        { label: '1-5 hours', icon: '⏰', value: '1-5' },
        { label: '5-10 hours', icon: '⏰', value: '5-10' },
        { label: '10-20 hours', icon: '⏰', value: '10-20' },
        { label: '20+ hours', icon: '🔥', value: '20+' },
      ]
    },
    {
      question: "What's your team size?",
      options: [
        { label: 'Just me', icon: '👤', value: 'solo' },
        { label: '2-5 people', icon: '👥', value: 'small' },
        { label: '6-20 people', icon: '🏢', value: 'medium' },
        { label: '20+ people', icon: '🏛️', value: 'large' },
      ]
    }
  ]

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = [...quizAnswers, { question: quizStep, answer }]
    setQuizAnswers(newAnswers)

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1)
    } else {
      setState('form')
    }
  }

  const calculateSavings = () => {
    const hoursAnswer = quizAnswers.find(a => a.question === 1)?.answer
    const hourMap: Record<string, number> = {
      '1-5': 3,
      '5-10': 7.5,
      '10-20': 15,
      '20+': 25
    }
    const hours = hourMap[hoursAnswer || '5-10'] || 7.5
    const weeklySavings = hours * 0.8 // 80% automation
    const yearlySavings = weeklySavings * 52
    const moneySaved = yearlySavings * 50 // $50/hour value
    return { weeklySavings: Math.round(weeklySavings), yearlySavings: Math.round(yearlySavings), moneySaved: Math.round(moneySaved) }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'https://nioctibinu.online/webhook/opbros-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'quiz_lead',
          source: 'opbros-widget',
          data: {
            ...formData,
            quizAnswers,
            savings: calculateSavings(),
            timestamp: new Date().toISOString(),
          },
        }),
      })
      setState('success')
      setHasInteracted(true)
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInteraction = () => {
    setHasInteracted(true)
    setShowPulse(false)
  }

  // Exit Intent Popup
  if (showExitIntent) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
        <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-scaleIn">
          <button
            onClick={() => { setShowExitIntent(false); setHasInteracted(true); }}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#fbbc04] rounded-2xl flex items-center justify-center">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Wait! Free Gift Inside</h3>
            <p className="text-gray-600 mb-6">
              Get a personalized automation roadmap worth $500 — completely free.
            </p>

            <form onSubmit={(e) => {
              e.preventDefault()
              const email = (e.target as any).email.value
              fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'https://nioctibinu.online/webhook/opbros-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  action: 'exit_intent_lead',
                  source: 'opbros-exit-popup',
                  data: { email, timestamp: new Date().toISOString() },
                }),
              })
              setShowExitIntent(false)
              setHasInteracted(true)
            }}>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl mb-3 focus:outline-none focus:border-[#4285f4] transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#4285f4] text-white rounded-xl font-medium hover:bg-[#3367d6] transition-colors"
              >
                Get My Free Roadmap
              </button>
            </form>

            <p className="text-xs text-gray-400 mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Floating Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Minimized State - Animated Button */}
        {state === 'minimized' && (
          <button
            onClick={() => { setState('expanded'); handleInteraction(); }}
            className="relative group"
          >
            {/* Pulse animation */}
            {showPulse && (
              <>
                <span className="absolute inset-0 rounded-full bg-[#4285f4] animate-ping opacity-30" />
                <span className="absolute inset-0 rounded-full bg-[#4285f4] animate-pulse opacity-20 scale-125" />
              </>
            )}

            <div className="relative flex items-center gap-3 px-5 py-3 bg-[#4285f4] text-white rounded-full shadow-lg shadow-[#4285f4]/30 hover:shadow-xl hover:shadow-[#4285f4]/40 transition-all duration-300 group-hover:scale-105">
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Free Audit</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#34a853] rounded-full border-2 border-white" />
            </div>
          </button>
        )}

        {/* Expanded State - Quick Actions */}
        {state === 'expanded' && (
          <div className="bg-white rounded-3xl shadow-2xl p-6 w-80 animate-scaleIn">
            <button
              onClick={() => setState('minimized')}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-[#4285f4] to-[#34a853] rounded-2xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">How can we help?</h3>
              <p className="text-sm text-gray-500">Choose an option below</p>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => setState('quiz')}
                className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-[#4285f4] hover:bg-[#4285f4]/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#4285f4]/10 flex items-center justify-center group-hover:bg-[#4285f4] transition-colors">
                  <Sparkles className="w-5 h-5 text-[#4285f4] group-hover:text-white transition-colors" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Calculate Savings</p>
                  <p className="text-xs text-gray-500">See how much you can save</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-[#4285f4] transition-colors" />
              </button>

              <a
                href="https://calendly.com/theopbros-ai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-[#34a853] hover:bg-[#34a853]/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#34a853]/10 flex items-center justify-center group-hover:bg-[#34a853] transition-colors">
                  <Calendar className="w-5 h-5 text-[#34a853] group-hover:text-white transition-colors" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Book a Call</p>
                  <p className="text-xs text-gray-500">30-min free consultation</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-[#34a853] transition-colors" />
              </a>

              <button
                onClick={() => setState('form')}
                className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-[#ea4335] hover:bg-[#ea4335]/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#ea4335]/10 flex items-center justify-center group-hover:bg-[#ea4335] transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#ea4335] group-hover:text-white transition-colors" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Quick Message</p>
                  <p className="text-xs text-gray-500">We reply within 1 hour</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-[#ea4335] transition-colors" />
              </button>
            </div>
          </div>
        )}

        {/* Quiz State */}
        {state === 'quiz' && (
          <div className="bg-white rounded-3xl shadow-2xl p-6 w-80 animate-scaleIn">
            <button
              onClick={() => { setState('expanded'); setQuizStep(0); setQuizAnswers([]); }}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span>Question {quizStep + 1} of {quizQuestions.length}</span>
                <span>{Math.round(((quizStep + 1) / quizQuestions.length) * 100)}%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#4285f4] to-[#34a853] transition-all duration-500"
                  style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {quizQuestions[quizStep].question}
            </h3>

            <div className="space-y-2">
              {quizQuestions[quizStep].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleQuizAnswer(option.value)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-[#4285f4] hover:bg-[#4285f4]/5 transition-all text-left"
                >
                  <span className="text-2xl">{option.icon}</span>
                  <span className="font-medium text-gray-700">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Form State */}
        {state === 'form' && (
          <div className="bg-white rounded-3xl shadow-2xl p-6 w-80 animate-scaleIn">
            <button
              onClick={() => setState('expanded')}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>

            {/* Show savings if from quiz */}
            {quizAnswers.length > 0 && (
              <div className="mb-6 p-4 bg-gradient-to-br from-[#34a853]/10 to-[#4285f4]/10 rounded-2xl">
                <p className="text-sm text-gray-600 mb-1">Your potential savings:</p>
                <p className="text-3xl font-bold text-[#34a853]">
                  ${calculateSavings().moneySaved.toLocaleString()}/year
                </p>
                <p className="text-xs text-gray-500">{calculateSavings().weeklySavings} hours saved weekly</p>
              </div>
            )}

            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {quizAnswers.length > 0 ? 'Get Your Custom Plan' : 'Quick Message'}
            </h3>
            <p className="text-sm text-gray-500 mb-4">We'll reply within 1 hour</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4285f4] transition-colors"
              />
              <input
                type="email"
                required
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4285f4] transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4285f4] transition-colors"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#4285f4] text-white rounded-xl font-medium hover:bg-[#3367d6] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Get Free Audit'}
              </button>
            </form>
          </div>
        )}

        {/* Success State */}
        {state === 'success' && (
          <div className="bg-white rounded-3xl shadow-2xl p-6 w-80 animate-scaleIn text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#34a853] rounded-2xl flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">You're In!</h3>
            <p className="text-gray-600 mb-4">
              We'll send your personalized automation plan within 24 hours.
            </p>
            <button
              onClick={() => setState('minimized')}
              className="text-sm text-[#4285f4] hover:underline"
            >
              Close
            </button>
          </div>
        )}
      </div>

      {/* Styles for animations */}
      <style jsx global>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-scaleIn { animation: scaleIn 0.2s ease-out; }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
      `}</style>
    </>
  )
}
