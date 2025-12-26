'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Linkedin, Mail, Phone, MapPin, ArrowRight, CheckCircle2, Zap, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'https://nioctibinu.online/webhook/opbros-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'newsletter_signup',
          source: 'opbros-footer',
          data: { email, timestamp: new Date().toISOString() },
        }),
      })
      setSubscribed(true)
      setEmail('')
    } catch (error) {
      console.error('Newsletter signup error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#4285f4] rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Get Automation Tips</h3>
              </div>
              <p className="text-gray-400">
                Weekly insights on automating your business. No spam, unsubscribe anytime.
              </p>
            </div>

            <div>
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 bg-[#34a853]/20 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-[#34a853]" />
                  <span className="text-[#34a853] font-medium">You're subscribed! Check your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4285f4] transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-[#4285f4] text-white rounded-xl font-medium hover:bg-[#3367d6] transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    {isSubmitting ? 'Joining...' : (
                      <>
                        Subscribe
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-bold text-2xl">
                <span className="text-[#4285f4]">O</span>
                <span className="text-[#ea4335]">p</span>
                <span className="text-[#fbbc04]">B</span>
                <span className="text-[#4285f4]">r</span>
                <span className="text-[#34a853]">o</span>
                <span className="text-[#ea4335]">s</span>
                <span className="text-gray-400 font-light">.ai</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              AI-powered automation systems that eliminate manual work and deliver measurable ROI within 30 days.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:theopbros.ai@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-[#4285f4] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                theopbros.ai@gmail.com
              </a>
              <a href="tel:0451449770" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-[#34a853] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                0451 449 770
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                Sydney, Australia
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Integration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Full System Build
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/cleanupbros/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/OpBrosAi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} OpBros.Automation. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://x.com/OpBrosAi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/cleanupbros/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:theopbros.ai@gmail.com"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#4285f4] transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
