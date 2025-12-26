'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { AntigravityBackground } from '../../components/AntigravityBackground'
import { Calculator, DollarSign, Clock, TrendingUp, ArrowRight, CheckCircle2, Sparkles, Zap } from 'lucide-react'

export default function CalculatorPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    hoursPerWeek: 10,
    hourlyRate: 50,
    teamSize: 1,
    tasks: [] as string[],
    email: '',
    name: '',
  })
  const [showResults, setShowResults] = useState(false)

  const automationTasks = [
    { id: 'data-entry', label: 'Data Entry', savings: 90 },
    { id: 'emails', label: 'Email Follow-ups', savings: 85 },
    { id: 'reports', label: 'Report Generation', savings: 95 },
    { id: 'scheduling', label: 'Scheduling & Calendar', savings: 80 },
    { id: 'invoicing', label: 'Invoicing & Billing', savings: 90 },
    { id: 'lead-management', label: 'Lead Management', savings: 75 },
    { id: 'social-media', label: 'Social Media Posting', savings: 85 },
    { id: 'customer-support', label: 'Customer Support', savings: 70 },
  ]

  const calculateSavings = () => {
    const weeklyHours = formData.hoursPerWeek * formData.teamSize
    const avgSavingsPercent = formData.tasks.length > 0
      ? formData.tasks.reduce((acc, taskId) => {
          const task = automationTasks.find(t => t.id === taskId)
          return acc + (task?.savings || 0)
        }, 0) / formData.tasks.length
      : 80

    const hoursSavedWeekly = (weeklyHours * avgSavingsPercent) / 100
    const hoursSavedYearly = hoursSavedWeekly * 52
    const moneySavedYearly = hoursSavedYearly * formData.hourlyRate
    const roiMultiple = moneySavedYearly / 2000 // Assuming $2000 average project cost

    return {
      hoursSavedWeekly: Math.round(hoursSavedWeekly),
      hoursSavedYearly: Math.round(hoursSavedYearly),
      moneySavedYearly: Math.round(moneySavedYearly),
      roiMultiple: roiMultiple.toFixed(1),
      paybackDays: Math.round(30 / roiMultiple),
    }
  }

  const handleSubmit = async () => {
    const savings = calculateSavings()

    try {
      await fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'https://nioctibinu.online/webhook/opbros-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'roi_calculator',
          source: 'opbros-calculator',
          data: {
            ...formData,
            savings,
            timestamp: new Date().toISOString(),
          },
        }),
      })
    } catch (error) {
      console.error('Submission error:', error)
    }

    setShowResults(true)
  }

  const savings = calculateSavings()

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Header />
      <AntigravityBackground />

      {/* Hero with antigravity background */}
      <section className="pt-32 md:pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />

        {/* Floating orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-[#34a853]/20 to-transparent blur-3xl top-20 -left-40 animate-drift" />
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#4285f4]/20 to-transparent blur-3xl top-40 -right-36 animate-drift delay-1000" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/50 shadow-lg mb-8 animate-hover-bob">
            <Calculator className="w-4 h-4 text-[#34a853]" />
            <span className="text-sm font-medium text-gray-700">ROI Calculator</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            How Much Can You <span className="google-gradient-text">Save?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeInUp delay-200">
            Calculate your potential savings from automation in under 60 seconds.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          {!showResults ? (
            <div className="floating-card bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              {/* Progress */}
              <div className="mb-10">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Step {step} of 3</span>
                  <span>{Math.round((step / 3) * 100)}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#4285f4] via-[#34a853] to-[#fbbc04] transition-all duration-500"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              </div>

              {/* Step 1: Hours & Rate */}
              {step === 1 && (
                <div className="space-y-8 animate-fadeInUp">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us about your time</h2>
                    <p className="text-gray-600">How much time do you spend on repetitive tasks?</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Hours per week on manual/repetitive tasks
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="1"
                        max="40"
                        value={formData.hoursPerWeek}
                        onChange={(e) => setFormData({ ...formData, hoursPerWeek: parseInt(e.target.value) })}
                        className="flex-1 h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#4285f4]"
                      />
                      <div className="w-20 text-center">
                        <span className="text-3xl font-bold text-[#4285f4]">{formData.hoursPerWeek}</span>
                        <span className="text-gray-500 text-sm block">hours</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      What's your (or your team's) hourly value?
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="20"
                        max="200"
                        step="5"
                        value={formData.hourlyRate}
                        onChange={(e) => setFormData({ ...formData, hourlyRate: parseInt(e.target.value) })}
                        className="flex-1 h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#34a853]"
                      />
                      <div className="w-24 text-center">
                        <span className="text-3xl font-bold text-[#34a853]">${formData.hourlyRate}</span>
                        <span className="text-gray-500 text-sm block">/hour</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Team size (people doing these tasks)
                    </label>
                    <div className="flex gap-3">
                      {[1, 2, 3, 5, 10].map((size) => (
                        <button
                          key={size}
                          onClick={() => setFormData({ ...formData, teamSize: size })}
                          className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                            formData.teamSize === size
                              ? 'bg-[#4285f4] text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {size === 10 ? '10+' : size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-[#4285f4] text-white rounded-xl font-medium hover:bg-[#3367d6] transition-colors flex items-center justify-center gap-2"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Step 2: Tasks */}
              {step === 2 && (
                <div className="space-y-8 animate-fadeInUp">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">What tasks do you want to automate?</h2>
                    <p className="text-gray-600">Select all that apply</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {automationTasks.map((task) => (
                      <button
                        key={task.id}
                        onClick={() => {
                          const tasks = formData.tasks.includes(task.id)
                            ? formData.tasks.filter(t => t !== task.id)
                            : [...formData.tasks, task.id]
                          setFormData({ ...formData, tasks })
                        }}
                        className={`p-4 rounded-xl border-2 transition-all text-left ${
                          formData.tasks.includes(task.id)
                            ? 'border-[#4285f4] bg-[#4285f4]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            formData.tasks.includes(task.id)
                              ? 'border-[#4285f4] bg-[#4285f4]'
                              : 'border-gray-300'
                          }`}>
                            {formData.tasks.includes(task.id) && (
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <span className="font-medium text-gray-900">{task.label}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 ml-8">Up to {task.savings}% automatable</p>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-4 border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 py-4 bg-[#4285f4] text-white rounded-xl font-medium hover:bg-[#3367d6] transition-colors flex items-center justify-center gap-2"
                    >
                      See Results
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact */}
              {step === 3 && (
                <div className="space-y-8 animate-fadeInUp">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Where should we send your results?</h2>
                    <p className="text-gray-600">Get a personalized automation roadmap</p>
                  </div>

                  {/* Preview */}
                  <div className="bg-gradient-to-br from-[#4285f4]/10 to-[#34a853]/10 rounded-2xl p-6">
                    <p className="text-sm text-gray-600 mb-2">Your estimated annual savings:</p>
                    <p className="text-4xl font-bold text-[#34a853]">${savings.moneySavedYearly.toLocaleString()}</p>
                    <p className="text-sm text-gray-500 mt-1">{savings.hoursSavedYearly} hours saved per year</p>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4285f4] transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4285f4] transition-colors"
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 py-4 border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="flex-1 py-4 bg-[#34a853] text-white rounded-xl font-medium hover:bg-[#2d9249] transition-colors flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      Get My Results
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Results */
            <div className="animate-fadeInUp">
              <div className="card-antigravity bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#34a853] rounded-2xl flex items-center justify-center animate-hover-bob">
                  <TrendingUp className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Your Automation Potential</h2>
                <p className="text-gray-400">Based on your inputs, here's what you could save</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8 stagger-children">
                <div className="floating-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                  <Clock className="w-8 h-8 mx-auto mb-3 text-[#4285f4] animate-hover-bob" />
                  <p className="text-4xl font-bold text-gray-900">{savings.hoursSavedWeekly}</p>
                  <p className="text-gray-500">Hours saved/week</p>
                </div>
                <div className="floating-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                  <DollarSign className="w-8 h-8 mx-auto mb-3 text-[#34a853] animate-hover-bob" style={{ animationDelay: '0.15s' }} />
                  <p className="text-4xl font-bold text-gray-900">${savings.moneySavedYearly.toLocaleString()}</p>
                  <p className="text-gray-500">Saved per year</p>
                </div>
                <div className="floating-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                  <Zap className="w-8 h-8 mx-auto mb-3 text-[#fbbc04] animate-hover-bob" style={{ animationDelay: '0.3s' }} />
                  <p className="text-4xl font-bold text-gray-900">{savings.roiMultiple}x</p>
                  <p className="text-gray-500">ROI on automation</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#4285f4] to-[#3367d6] rounded-2xl p-8 text-center text-white relative overflow-hidden">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Saving?</h3>
                <p className="text-white/80 mb-6">
                  Book a free consultation to get your personalized automation roadmap.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4285f4] rounded-full font-medium hover:bg-gray-100 transition-colors group"
                >
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          )}
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
      `}</style>
    </main>
  )
}
