import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, Calendar, Clock, Tag, Sparkles } from 'lucide-react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { AntigravityBackground } from '../../components/AntigravityBackground'

export const metadata: Metadata = {
  title: 'AI Automation Blog | Sydney Business Automation Tips | OpBros',
  description: 'Expert insights on AI automation, workflow optimization, and business efficiency for Sydney businesses. Learn how to automate your operations.',
  keywords: [
    'AI automation blog Sydney',
    'business automation tips',
    'workflow automation guide',
    'n8n tutorials Australia',
    'AI for business Sydney',
  ],
}

const blogPosts = [
  {
    slug: 'ndis-automation-complete-provider-guide',
    title: 'NDIS Automation: Complete Provider Guide',
    excerpt: 'How NDIS providers are using automation to reduce admin burden, improve compliance, and deliver better participant outcomes.',
    category: 'Guides',
    date: '2024-12-28',
    readTime: '6 min read',
    color: '#4285f4',
    featured: true,
  },
  {
    slug: 'how-ai-automation-saves-sydney-businesses-20-hours-weekly',
    title: 'How AI Automation Saves Sydney Businesses 20+ Hours Weekly',
    excerpt: 'Discover the exact automation strategies that local Sydney businesses are using to reclaim their time and focus on growth.',
    category: 'Case Studies',
    date: '2024-12-27',
    readTime: '5 min read',
    color: '#4285f4',
    featured: true,
  },
  {
    slug: '5-signs-your-business-needs-automation',
    title: '5 Signs Your Business Needs Automation',
    excerpt: 'Not sure if automation is right for you? Here are the warning signs that manual processes are holding your business back.',
    category: 'Tips',
    date: '2024-12-26',
    readTime: '4 min read',
    color: '#ea4335',
    featured: false,
  },
  {
    slug: 'client-story-how-we-saved-30-hours-week',
    title: 'Client Story: How We Saved 30 Hours/Week for a Sydney Trades Business',
    excerpt: 'A deep dive into how we transformed operations for a plumbing business, cutting admin time by 75%.',
    category: 'Case Studies',
    date: '2024-12-24',
    readTime: '5 min read',
    color: '#4285f4',
    featured: false,
  },
  {
    slug: 'ai-in-2025-what-sydney-businesses-need-to-know',
    title: 'AI in 2025: What Sydney Businesses Need to Know',
    excerpt: 'The AI landscape is evolving rapidly. Here\'s what practical AI adoption looks like for Australian SMEs.',
    category: 'Guides',
    date: '2024-12-22',
    readTime: '6 min read',
    color: '#34a853',
    featured: false,
  },
  {
    slug: 'complete-guide-to-workflow-automation-for-australian-smes',
    title: 'The Complete Guide to Workflow Automation for Australian SMEs',
    excerpt: 'Everything you need to know about automating your business processes, from choosing the right tools to implementation strategies.',
    category: 'Guides',
    date: '2024-12-20',
    readTime: '8 min read',
    color: '#34a853',
    featured: false,
  },
  {
    slug: 'top-10-manual-tasks-you-should-automate-today',
    title: 'Top 10 Manual Tasks You Should Automate Today',
    excerpt: 'Stop wasting time on repetitive work. Here are the 10 most common tasks that can be fully automated with AI.',
    category: 'Tips',
    date: '2024-12-15',
    readTime: '4 min read',
    color: '#ea4335',
    featured: false,
  },
  {
    slug: 'n8n-vs-zapier-which-automation-tool-is-right-for-australian-businesses',
    title: 'n8n vs Zapier: Which Automation Tool is Right for Australian Businesses?',
    excerpt: 'An honest comparison of the two leading automation platforms, with specific considerations for Australian businesses.',
    category: 'Comparisons',
    date: '2024-12-10',
    readTime: '6 min read',
    color: '#fbbc04',
    featured: false,
  },
  {
    slug: 'how-to-calculate-roi-on-business-automation',
    title: 'How to Calculate ROI on Business Automation',
    excerpt: 'Learn the formula we use to guarantee 30-day ROI for our clients, and how you can apply it to your automation projects.',
    category: 'Guides',
    date: '2024-12-05',
    readTime: '5 min read',
    color: '#4285f4',
    featured: false,
  },
  {
    slug: 'ai-chatbots-for-small-business-complete-setup-guide',
    title: 'AI Chatbots for Small Business: Complete Setup Guide',
    excerpt: 'Step-by-step guide to setting up an AI chatbot that handles customer inquiries 24/7 while you focus on growing your business.',
    category: 'Tutorials',
    date: '2024-12-01',
    readTime: '7 min read',
    color: '#34a853',
    featured: false,
  },
]

const categories = [
  { name: 'All', count: blogPosts.length },
  { name: 'Case Studies', count: 3, color: '#4285f4' },
  { name: 'Guides', count: 4, color: '#34a853' },
  { name: 'Tips', count: 2, color: '#ea4335' },
  { name: 'Comparisons', count: 1, color: '#fbbc04' },
  { name: 'Tutorials', count: 1, color: '#34a853' },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

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
            <span className="text-sm font-medium text-gray-700">AI Automation Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            Learn to <span className="google-gradient-text">Automate</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeInUp delay-200">
            Expert insights, tutorials, and case studies on AI automation for Sydney businesses.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category.name === 'All'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-60">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>

          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            {featuredPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group floating-card bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-50 relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundColor: post.color }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl font-bold animate-hover-bob"
                      style={{ backgroundColor: post.color, animationDelay: `${index * 0.2}s` }}
                    >
                      {post.title.charAt(0)}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: post.color }}
                    >
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4285f4] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-AU', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="text-[#4285f4] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-[#34a853]/10 to-transparent blur-3xl -top-48 -right-48 animate-morph" />
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-[#fbbc04]/10 to-transparent blur-3xl -bottom-40 -left-40 animate-morph delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group floating-card bg-white rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: post.color }}
                  />
                  <span className="text-sm text-gray-500">{post.category}</span>
                  <span className="text-sm text-gray-400">{post.readTime}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#4285f4] transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center text-sm text-gray-400">
                  <Calendar className="w-3 h-3 mr-1" />
                  {new Date(post.date).toLocaleDateString('en-AU', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-[#4285f4] to-[#3367d6] relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-64 h-64 rounded-full bg-white/10 blur-3xl -top-32 -left-32 animate-drift" />
          <div className="absolute w-48 h-48 rounded-full bg-white/10 blur-3xl -bottom-24 -right-24 animate-drift delay-1000" />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Get Weekly Automation Tips</h2>
          <p className="text-white/80 mb-8">
            Join 500+ Sydney business owners getting actionable automation advice every week.
          </p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-[#4285f4] rounded-xl font-medium hover:bg-gray-100 hover:scale-105 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
