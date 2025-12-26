import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter } from 'lucide-react'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'

// This would normally come from a CMS or database
const blogPosts: Record<string, {
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
  color: string
  author: { name: string; role: string }
}> = {
  'how-ai-automation-saves-sydney-businesses-20-hours-weekly': {
    title: 'How AI Automation Saves Sydney Businesses 20+ Hours Weekly',
    excerpt: 'Discover the exact automation strategies that local Sydney businesses are using to reclaim their time and focus on growth.',
    content: `
## The Hidden Cost of Manual Work

Every week, Sydney business owners lose 20+ hours to repetitive tasks that could be automated. Data entry, customer follow-ups, invoice processing, appointment scheduling – these tasks drain your time and energy.

## Real Results from Local Businesses

We recently worked with Clean Up Bros, a commercial cleaning company in Liverpool, to automate their entire quote-to-invoice workflow:

- **Before:** 3 hours to process each quote manually
- **After:** 60 seconds with AI automation
- **Result:** 80% time saved, zero errors

## The Top 5 Tasks Sydney Businesses Should Automate

### 1. Customer Inquiry Response
AI chatbots can handle initial inquiries 24/7, qualifying leads while you sleep.

### 2. Quote Generation
Automated quote systems calculate prices instantly based on customer inputs.

### 3. Appointment Scheduling
Eliminate back-and-forth emails with automated booking systems.

### 4. Invoice Processing
From quote approval to invoice generation to payment tracking – all automated.

### 5. Follow-up Sequences
Never miss a follow-up with automated email and SMS sequences.

## Getting Started

Ready to save 20+ hours every week? [Book a free automation audit](/contact) and we'll show you exactly what can be automated in your business.
    `,
    category: 'Case Studies',
    date: '2024-12-27',
    readTime: '5 min read',
    color: '#4285f4',
    author: { name: 'OpBros Team', role: 'Automation Specialists' },
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return { title: 'Post Not Found | OpBros Blog' }
  }

  return {
    title: `${post.title} | OpBros Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-[#4285f4] font-medium hover:underline">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Article Header */}
      <article className="pt-32 md:pt-40">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium text-white"
              style={{ backgroundColor: post.color }}
            >
              {post.category}
            </span>
            <span className="text-sm text-gray-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString('en-AU', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="text-sm text-gray-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>

          <div className="flex items-center justify-between py-6 border-y border-gray-100">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: post.color }}
              >
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-500">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400 mr-2">Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://opbros.ai/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://opbros.ai/blog/${slug}`)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#0077B5] hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div
            className="prose prose-lg prose-gray max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-600 prose-p:leading-relaxed
              prose-li:text-gray-600
              prose-strong:text-gray-900
              prose-a:text-[#4285f4] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
          />
        </div>

        {/* CTA */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-gray-600 mb-8">
              Get a free automation audit and discover how much time you could save.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#4285f4] text-white rounded-full font-medium hover:bg-[#3367d6] transition-colors"
            >
              Book Your Free Audit
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
