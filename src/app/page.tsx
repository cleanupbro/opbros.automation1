import Link from 'next/link'
import { ArrowRight, Zap, Bot, Cpu, BarChart3, Clock, CheckCircle2, Sparkles, Star, Quote, Play, Users, TrendingUp, Heart, Building2, Shield, Award } from 'lucide-react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { AntigravityBackground } from '../components/AntigravityBackground'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white relative">
      <Header />

      {/* Antigravity Background - Interactive particles */}
      <AntigravityBackground />

      {/* ============================================
          HERO SECTION - ANTIGRAVITY THEME
          ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 mesh-gradient opacity-50" />

        {/* Floating orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-[#4285f4]/20 to-transparent blur-3xl top-20 -left-48 animate-drift" />
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-[#ea4335]/20 to-transparent blur-3xl top-40 -right-40 animate-drift delay-1000" />
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#34a853]/20 to-transparent blur-3xl bottom-20 left-1/4 animate-drift delay-2000" />
          <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-[#fbbc04]/20 to-transparent blur-3xl bottom-40 right-1/4 animate-drift" />
        </div>

        <div className="container-wide text-center relative z-10 py-20">
          {/* Floating badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/50 shadow-lg mb-8 animate-hover-bob">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34a853] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#34a853]"></span>
            </span>
            <span className="text-sm font-medium text-gray-700">Sydney's #1 AI Automation Agency</span>
          </div>

          {/* Main Headline with Google gradient */}
          <h1 className="heading-display mb-8 text-gray-900 animate-fadeInUp">
            Stop Hiring.<br />
            <span className="google-gradient-text">Start Automating.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeInUp delay-200">
            We build AI-powered automation systems that eliminate manual work
            and deliver <span className="font-semibold text-gray-900">measurable ROI within 30 days</span>.
          </p>

          {/* CTA Buttons with glow */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInUp delay-300">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#4285f4] text-white rounded-full font-medium text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#4285f4]/30 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Your Free Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-[#4285f4] blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
            </Link>
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur text-gray-900 border-2 border-gray-200 rounded-full font-medium text-lg transition-all duration-300 hover:border-[#4285f4] hover:bg-white hover:shadow-lg group"
            >
              <Play className="w-5 h-5 mr-2 text-[#4285f4]" />
              Calculate Your ROI
            </Link>
          </div>

          {/* Stats floating cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fadeInUp delay-500">
            {[
              { value: '80%', label: 'Time Saved', color: '#4285f4' },
              { value: '30', label: 'Day ROI', color: '#34a853' },
              { value: '24/7', label: 'Automation', color: '#ea4335' },
              { value: '100+', label: 'Workflows', color: '#fbbc04' },
            ].map((stat, i) => (
              <div
                key={i}
                className="floating-card glass-card rounded-2xl p-5 text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <p className="text-3xl md:text-4xl font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-[#4285f4] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ============================================
          PROBLEM/SOLUTION SECTION
          ============================================ */}
      <section className="section-padding relative">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ea4335]/10 text-[#ea4335] text-sm font-medium mb-4">
              <Clock className="w-4 h-4" />
              The Problem
            </div>
            <h2 className="heading-2 text-gray-900 mb-4">Sound Familiar?</h2>
            <p className="text-gray-600 text-lg">These problems cost you hours every day.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {[
              {
                icon: Clock,
                title: 'Drowning in Manual Work',
                desc: 'Hours lost to data entry, copy-pasting, and repetitive tasks.',
                color: '#ea4335',
              },
              {
                icon: Users,
                title: 'Missing Leads & Customers',
                desc: 'Slow response times mean lost opportunities to competitors.',
                color: '#fbbc04',
              },
              {
                icon: TrendingUp,
                title: 'Can\'t Scale Operations',
                desc: 'Growth means hiring more people instead of working smarter.',
                color: '#4285f4',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card-antigravity bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
              >
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

      {/* ============================================
          SERVICES SECTION
          ============================================ */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#4285f4]/10 to-transparent blur-3xl -top-64 -right-64 animate-morph" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#34a853]/10 to-transparent blur-3xl -bottom-64 -left-64 animate-morph delay-2000" />
        </div>

        <div className="container-wide relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#34a853]/10 text-[#34a853] text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Our Solutions
            </div>
            <h2 className="heading-2 text-gray-900 mb-4">What We Build</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Custom automation systems that transform how you work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Workflow Automation',
                desc: 'Connect your tools and eliminate manual data transfer. We build n8n workflows that run 24/7.',
                features: ['Tool Integration', 'Data Sync', 'Error Handling'],
                color: '#4285f4',
              },
              {
                icon: Bot,
                title: 'AI Integration',
                desc: 'Add AI superpowers to your business. Chatbots, content generation, smart routing.',
                features: ['AI Chatbots', 'Smart Automation', 'Content AI'],
                color: '#ea4335',
              },
              {
                icon: Cpu,
                title: 'Full System Build',
                desc: 'Complete end-to-end automation systems with custom dashboards and reporting.',
                features: ['Custom Dashboard', 'Full Integration', 'Training'],
                color: '#34a853',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="floating-card bg-white rounded-3xl p-8 border border-gray-100 shadow-sm group"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon className="w-8 h-8" style={{ color: service.color }} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: `${service.color}10`, color: service.color }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#4285f4] font-medium hover:gap-3 transition-all"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          CASE STUDY SECTION
          ============================================ */}
      <section className="section-padding relative">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4285f4]/10 text-[#4285f4] text-sm font-medium mb-4">
                <BarChart3 className="w-4 h-4" />
                Case Study
              </div>
              <h2 className="heading-2 text-gray-900 mb-6">
                Clean Up Bros: 80% Time Saved
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We automated the entire quote-to-invoice workflow for this Liverpool cleaning company.
                What used to take 3 hours now happens in 60 seconds.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: '3hrs → 60s', label: 'Quote Time', color: '#ea4335' },
                  { value: '80%', label: 'Time Saved', color: '#34a853' },
                  { value: '24/7', label: 'Response', color: '#4285f4' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-gray-50 rounded-2xl">
                    <p className="text-xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-[#4285f4] font-medium hover:gap-3 transition-all"
              >
                Read Full Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 relative overflow-hidden">
                {/* Floating elements inside */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute w-32 h-32 rounded-full bg-[#4285f4]/20 blur-2xl top-4 right-4 animate-drift" />
                  <div className="absolute w-24 h-24 rounded-full bg-[#34a853]/20 blur-2xl bottom-8 left-8 animate-drift delay-1000" />
                </div>

                <div className="relative z-10 text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#4285f4] to-[#34a853] rounded-2xl flex items-center justify-center animate-hover-bob">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-gray-400 mb-2">Automated Quote System</p>
                  <p className="text-5xl font-bold text-white mb-2">60 sec</p>
                  <p className="text-gray-500">Average response time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS SECTION
          ============================================ */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fbbc04]/10 text-[#fbbc04] text-sm font-medium mb-4">
              <Star className="w-4 h-4 fill-current" />
              Testimonials
            </div>
            <h2 className="heading-2 text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-gray-600 text-lg">Real results from Sydney businesses.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "OpBros automated our entire quote-to-invoice process. What used to take 3 hours now happens in 60 seconds.",
                name: "Shamal Krishna",
                role: "Founder",
                company: "Clean Up Bros",
                color: "#4285f4",
              },
              {
                quote: "Their AI integration saved us 20 hours per week on customer inquiries. The ROI was visible within the first week.",
                name: "Marcus Chen",
                role: "Operations Director",
                company: "TechFlow Solutions",
                color: "#34a853",
              },
              {
                quote: "Professional, fast, and they actually deliver. Our lead response went from 4 hours to 4 minutes.",
                name: "Sarah Williams",
                role: "CEO",
                company: "PropertyCare Sydney",
                color: "#ea4335",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="floating-card bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl" style={{ backgroundColor: testimonial.color }} />

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-[#fbbc04] text-[#fbbc04]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-gray-200 mb-4" />

                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: testimonial.color }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          NDIS PROVIDERS SECTION
          ============================================ */}
      <section className="section-padding relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#34a853]/10 to-transparent blur-3xl -top-64 -left-64 animate-morph" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#4285f4]/10 to-transparent blur-3xl -bottom-64 -right-64 animate-morph delay-2000" />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#34a853]/10 text-[#34a853] text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                NDIS Providers
              </div>
              <h2 className="heading-2 text-gray-900 mb-6">
                Built for <span className="google-gradient-text">NDIS Providers</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We understand the unique challenges of NDIS service delivery. Our automation systems help providers reduce admin burden, improve compliance, and focus on what matters most - participant outcomes.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { text: 'Automated participant intake & onboarding', color: '#4285f4' },
                  { text: 'Service agreement generation & tracking', color: '#34a853' },
                  { text: 'Compliance documentation automation', color: '#ea4335' },
                  { text: 'Rostering & scheduling automation', color: '#fbbc04' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <CheckCircle2 className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/ndis-calculator"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#34a853] text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all group"
                >
                  Calculate Your NDIS ROI
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/blog/ndis-automation-complete-provider-guide"
                  className="inline-flex items-center justify-center px-6 py-3 text-[#34a853] border-2 border-[#34a853]/30 rounded-full font-medium hover:bg-[#34a853]/10 transition-all"
                >
                  Read NDIS Guide
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#34a853] to-[#2d8f47] rounded-3xl p-8 relative overflow-hidden">
                {/* Floating elements inside */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute w-32 h-32 rounded-full bg-white/10 blur-2xl top-4 right-4 animate-drift" />
                  <div className="absolute w-24 h-24 rounded-full bg-white/10 blur-2xl bottom-8 left-8 animate-drift delay-1000" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center animate-hover-bob">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">NDIS Provider Results</p>
                      <p className="text-2xl font-bold text-white">1,851% ROI</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: '15hrs', label: 'Saved Weekly' },
                      { value: '$42K', label: 'Annual Savings' },
                      { value: '30', label: 'Day Payback' },
                      { value: '100%', label: 'Compliance' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className="text-white/70 text-sm">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-white/10 rounded-xl">
                    <p className="text-white/90 italic">
                      "OpBros reduced our admin time by 70%. Now we can focus on our participants."
                    </p>
                    <p className="text-white/60 text-sm mt-2">— NDIS Provider, Western Sydney</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          HOW IT WORKS SECTION
          ============================================ */}
      <section className="section-padding bg-gray-50 relative">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4285f4]/10 text-[#4285f4] text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Process
            </div>
            <h2 className="heading-2 text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">From discovery to launch in 2-4 weeks.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We analyze your processes and find automation opportunities.', color: '#4285f4' },
              { step: '02', title: 'Design', desc: 'We architect the perfect automation system for your needs.', color: '#ea4335' },
              { step: '03', title: 'Build', desc: 'We build, test, and refine your custom workflows.', color: '#fbbc04' },
              { step: '04', title: 'Launch', desc: 'We deploy, train your team, and provide support.', color: '#34a853' },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 transition-all group-hover:scale-110 group-hover:shadow-lg text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          TRUST & SOCIAL PROOF SECTION
          ============================================ */}
      <section className="py-16 relative overflow-hidden">
        <div className="container-wide">
          {/* Animated Counter Stats */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4285f4]/10 text-[#4285f4] text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Trusted by Sydney Businesses
            </div>
            <h2 className="heading-2 text-gray-900 mb-4">Real Results, Guaranteed</h2>
          </div>

          {/* Big Stats Counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '500+', label: 'Hours Saved', sublabel: 'For Sydney businesses', color: '#4285f4' },
              { value: '50+', label: 'Workflows Built', sublabel: 'Custom automation', color: '#34a853' },
              { value: '30', label: 'Day ROI', sublabel: 'Guaranteed', color: '#ea4335' },
              { value: '100%', label: 'Client Satisfaction', sublabel: 'No exceptions', color: '#fbbc04' },
            ].map((stat, i) => (
              <div
                key={i}
                className="floating-card bg-white rounded-3xl p-6 text-center border border-gray-100 shadow-sm"
              >
                <p className="text-4xl md:text-5xl font-bold mb-2" style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className="text-lg font-semibold text-gray-900">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.sublabel}</p>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {[
              { icon: Shield, text: '30-Day ROI Guarantee', color: '#34a853' },
              { icon: Building2, text: 'n8n Certified Partner', color: '#4285f4' },
              { icon: Award, text: 'Google Workspace Partner', color: '#ea4335' },
              { icon: Heart, text: 'NDIS Provider Specialists', color: '#fbbc04' },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-gray-50 border border-gray-100"
              >
                <badge.icon className="w-5 h-5" style={{ color: badge.color }} />
                <span className="text-sm font-medium text-gray-700">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Industries We Serve */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">Industries we serve</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'NDIS Providers',
                'Trades & Services',
                'Healthcare',
                'Real Estate',
                'E-commerce',
                'Professional Services',
              ].map((industry, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition-colors cursor-default"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA SECTION
          ============================================ */}
      <section className="section-padding bg-gradient-to-br from-[#4285f4] to-[#3367d6] relative overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-64 h-64 rounded-full bg-white/10 blur-3xl -top-32 -left-32 animate-drift" />
          <div className="absolute w-48 h-48 rounded-full bg-white/10 blur-3xl -bottom-24 -right-24 animate-drift delay-1000" />
          <div className="absolute w-32 h-32 rounded-full bg-white/20 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-breathe" />
        </div>

        <div className="container-narrow text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Book a free 30-minute discovery call. We'll analyze your processes
            and show you exactly what can be automated.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4285f4] rounded-full font-medium text-lg hover:shadow-2xl hover:scale-105 transition-all group"
            >
              Book Your Free Audit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 text-white border-2 border-white/30 rounded-full font-medium text-lg hover:bg-white/30 transition-all"
            >
              Calculate ROI First
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
