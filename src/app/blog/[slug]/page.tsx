import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter } from 'lucide-react'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'

// Blog posts database
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
    content: `## The Hidden Cost of Manual Work\n\nEvery week, Sydney business owners lose 20+ hours to repetitive tasks that could be automated. Data entry, customer follow-ups, invoice processing, appointment scheduling – these tasks drain your time and energy.\n\n## Real Results from Local Businesses\n\nWe recently worked with Clean Up Bros, a commercial cleaning company in Liverpool, to automate their entire quote-to-invoice workflow:\n\n- **Before:** 3 hours to process each quote manually\n- **After:** 60 seconds with AI automation\n- **Result:** 80% time saved, zero errors\n\n## The Top 5 Tasks Sydney Businesses Should Automate\n\n### 1. Customer Inquiry Response\nAI chatbots can handle initial inquiries 24/7, qualifying leads while you sleep.\n\n### 2. Quote Generation\nAutomated quote systems calculate prices instantly based on customer inputs.\n\n### 3. Appointment Scheduling\nEliminate back-and-forth emails with automated booking systems.\n\n### 4. Invoice Processing\nFrom quote approval to invoice generation to payment tracking – all automated.\n\n### 5. Follow-up Sequences\nNever miss a follow-up with automated email and SMS sequences.\n\n## Getting Started\n\nReady to save 20+ hours every week? [Book a free automation audit](/contact) and we'll show you exactly what can be automated in your business.`,
    category: 'Case Studies',
    date: '2024-12-27',
    readTime: '5 min read',
    color: '#4285f4',
    author: { name: 'Sam K', role: 'Founder, OpBros.Automation' },
  },
  'complete-guide-to-workflow-automation-for-australian-smes': {
    title: 'The Complete Guide to Workflow Automation for Australian SMEs',
    excerpt: 'Everything you need to know about automating your business processes, from choosing the right tools to implementation strategies.',
    content: `## What is Workflow Automation?\n\nWorkflow automation is using technology to perform repetitive tasks and processes without human intervention. Instead of manually copying data from one system to another, sending follow-up emails, or generating reports, automation handles it for you.\n\n## Why Australian SMEs Need Automation Now\n\n- **Labor costs are rising** - Minimum wage increases make manual processes more expensive\n- **Customer expectations are higher** - People expect instant responses and 24/7 availability\n- **Competition is global** - You're competing with businesses worldwide who already use automation\n\n## Choosing the Right Automation Tools\n\n### Why We Use n8n\nAt OpBros, we build all our client systems on n8n because:\n- No per-task fees - pay once, run unlimited workflows\n- Self-hosted - your data stays in Australia\n- More powerful - can handle complex logic and integrations\n\n## Implementation Strategy\n\n### Phase 1: Quick Wins (Week 1-2)\n- Auto-reply to contact form submissions\n- Calendar booking links\n- Basic email sequences\n\n### Phase 2: Core Processes (Week 3-4)\n- Lead capture and qualification\n- Quote/proposal generation\n- Invoice creation and follow-up\n\n## Next Steps\n\nReady to start your automation journey? [Use our ROI calculator](/calculator) to see your potential savings, then book a discovery call.`,
    category: 'Guides',
    date: '2024-12-20',
    readTime: '8 min read',
    color: '#34a853',
    author: { name: 'Sam K', role: 'Founder, OpBros.Automation' },
  },
  'top-10-manual-tasks-you-should-automate-today': {
    title: 'Top 10 Manual Tasks You Should Automate Today',
    excerpt: 'Stop wasting time on repetitive work. Here are the 10 most common tasks that can be fully automated with AI.',
    content: `## The Automation Priority List\n\nNot all tasks are equal when it comes to automation potential. We've ranked the top 10 based on time saved, implementation difficulty, and ROI potential.\n\n### 1. Email Follow-ups (90% Automatable)\n**Time saved**: 5-10 hours/week\n\n### 2. Data Entry (95% Automatable)\n**Time saved**: 3-8 hours/week\n\n### 3. Invoice Generation (90% Automatable)\n**Time saved**: 2-5 hours/week\n\n### 4. Appointment Scheduling (85% Automatable)\n**Time saved**: 3-6 hours/week\n\n### 5. Lead Qualification (80% Automatable)\n**Time saved**: 2-4 hours/week\n\n### 6. Report Generation (95% Automatable)\n**Time saved**: 2-5 hours/week\n\n### 7. Social Media Posting (75% Automatable)\n**Time saved**: 3-5 hours/week\n\n### 8. Customer Onboarding (70% Automatable)\n**Time saved**: 2-4 hours/week\n\n### 9. Payment Reminders (95% Automatable)\n**Time saved**: 1-3 hours/week\n\n### 10. Review Collection (85% Automatable)\n**Time saved**: 1-2 hours/week\n\n## Total Potential: 24-52 hours/week saved\n\nThat's the equivalent of a full-time employee. Want to see which of these would have the biggest impact on your business? [Book a free automation audit](/contact).`,
    category: 'Tips',
    date: '2024-12-15',
    readTime: '4 min read',
    color: '#ea4335',
    author: { name: 'Sam K', role: 'Founder, OpBros.Automation' },
  },
  'n8n-vs-zapier-which-automation-tool-is-right-for-australian-businesses': {
    title: 'n8n vs Zapier: Which Automation Tool is Right for Australian Businesses?',
    excerpt: 'An honest comparison of the two leading automation platforms, with specific considerations for Australian businesses.',
    content: `## Quick Comparison\n\n| Feature | Zapier | n8n |\n|---------|--------|-----|\n| Pricing | Per-task (expensive) | One-time or self-hosted |\n| Ease of use | Very easy | Moderate learning curve |\n| Integrations | 5,000+ | 400+ (growing) |\n| Data hosting | US servers | Your choice (AU possible) |\n\n## Zapier: Pros and Cons\n\n### Pros\n- Easiest to learn\n- Most integrations\n- Reliable infrastructure\n\n### Cons\n- Expensive at scale ($49-299/mo)\n- Limited complex logic\n- US data hosting only\n\n## n8n: Pros and Cons\n\n### Pros\n- No per-task fees\n- Self-hosted option (Australian servers)\n- Complex logic support\n- Open source\n\n### Cons\n- Steeper learning curve\n- Fewer native integrations\n- Requires hosting\n\n## Why We Chose n8n\n\nAt OpBros, we build all client systems on n8n for cost efficiency, Australian data hosting, and unlimited capabilities.\n\n**Not sure which is right for you?** [Book a free consultation](/contact) and we'll analyze your specific needs.`,
    category: 'Comparisons',
    date: '2024-12-10',
    readTime: '6 min read',
    color: '#fbbc04',
    author: { name: 'Sam K', role: 'Founder, OpBros.Automation' },
  },
  'how-to-calculate-roi-on-business-automation': {
    title: 'How to Calculate ROI on Business Automation',
    excerpt: 'Learn the formula we use to guarantee 30-day ROI for our clients.',
    content: `## The ROI Formula for Automation\n\n**Annual Savings = (Hours Saved × Hourly Value × 52) - Implementation Cost**\n\n**ROI % = (Annual Savings / Implementation Cost) × 100**\n\n## Example: Quote Automation\n\n### Before\n- Time per quote: 45 minutes\n- Quotes per week: 20\n- Annual cost: **$39,000**\n\n### After Automation\n- Time per quote: 2 minutes\n- Annual cost: **$1,733**\n\n### ROI Calculation\n- Annual savings: **$37,267**\n- Implementation cost: $2,500\n- ROI: **1,391%**\n- Payback period: **25 days**\n\n## How We Guarantee 30-Day ROI\n\nAt OpBros, we structure projects to ensure clients see ROI within 30 days. We start with high-impact automations and measure results weekly.\n\n[Calculate Your Potential Savings →](/calculator)`,
    category: 'Guides',
    date: '2024-12-05',
    readTime: '5 min read',
    color: '#4285f4',
    author: { name: 'Sam K', role: 'Founder, OpBros.Automation' },
  },
  'ai-chatbots-for-small-business-complete-setup-guide': {
    title: 'AI Chatbots for Small Business: Complete Setup Guide',
    excerpt: 'Step-by-step guide to setting up an AI chatbot that handles customer inquiries 24/7.',
    content: `## Why Your Small Business Needs an AI Chatbot\n\n82% of customers expect an immediate response to sales questions. But as a small business owner, you can't be available 24/7. That's where AI chatbots come in.\n\n## What Modern AI Chatbots Can Do\n\n- Understand natural language\n- Answer complex questions\n- Qualify leads\n- Book appointments\n- Handle FAQs\n- Transfer to humans when needed\n\n## The OpBros Chatbot Stack\n\nWe build our client chatbots using:\n- **Gemini Flash** - Fast, intelligent AI from Google\n- **n8n** - Workflow automation to connect everything\n- **Your existing tools** - CRM, calendar, email\n\n## Setup Guide\n\n1. Define Your Bot's Purpose\n2. Train on Your Content\n3. Set Up Integrations\n4. Test Thoroughly\n5. Monitor and Improve\n\n## Real Example: NDIS Provider Chatbot\n\nResult: **70% of inquiries handled without staff involvement**, 24/7 availability.\n\nWant a chatbot that actually understands your business? [Book a free demo](/contact).`,
    category: 'Tutorials',
    date: '2024-12-01',
    readTime: '7 min read',
    color: '#34a853',
    author: { name: 'Sam K', role: 'Founder, OpBros.Automation' },
  },
  'ndis-automation-complete-provider-guide': {
    title: 'NDIS Automation: Complete Provider Guide',
    excerpt: 'How NDIS providers are using automation to reduce admin burden and improve compliance.',
    content: `## The NDIS Admin Challenge\n\nRunning an NDIS business means navigating:\n- Complex compliance requirements\n- Participant intake processes\n- Service agreements and documentation\n- Scheduling and rostering\n- Invoicing and payment tracking\n\nMost providers spend **15-20 hours per week** on admin alone.\n\n## How Automation Transforms NDIS Operations\n\n### 1. Participant Inquiry Response\nInstant acknowledgment, automated information packet, booking link for assessment.\n\n### 2. Intake Automation\nOnline forms auto-populate CRM, create participant folders, trigger welcome sequence.\n\n### 3. Invoice Generation\nSession completion → automatic invoice → payment reminder sequence.\n\n### 4. Compliance Tracking\nAutomated reminders, audit trail logging, compliance dashboards.\n\n## Our NDIS Automation Packages\n\n- **Starter ($4,500)** - 5-page accessible website, 2 workflows\n- **Growth ($8,500)** - + AI chatbot, SMS follow-up\n- **Premium ($13,500)** - + Full intake workflow, Xero integration\n\n[Calculate Your NDIS ROI →](/ndis-calculator)`,
    category: 'Guides',
    date: '2024-12-28',
    readTime: '6 min read',
    color: '#4285f4',
    author: { name: 'Sam K', role: 'Founder, OpBros.Automation' },
  },
  '5-signs-your-business-needs-automation': {
    title: '5 Signs Your Business Needs Automation',
    excerpt: 'Not sure if automation is right for you? Here are the warning signs.',
    content: `## Sign 1: You're Working IN the Business, Not ON It\n\nIf you spend most of your day on repetitive tasks instead of strategy and growth, you're stuck in operations mode.\n\n## Sign 2: Leads Are Falling Through the Cracks\n\nEver found an old inquiry you forgot to follow up on? Studies show responding within 5 minutes = 400% higher conversion.\n\n## Sign 3: You're Making Mistakes Due to Manual Processes\n\nHumans make errors when tired or rushed. Automated processes are consistent.\n\n## Sign 4: You Can't Scale Without Hiring\n\nIf handling more customers means hiring more staff, you have a scaling problem. Automated systems scale infinitely.\n\n## Sign 5: You're Losing to Competitors Who Move Faster\n\nIf your competitor responds faster and follows up more consistently, they're winning business that should be yours.\n\n## What to Do Next\n\nIf you recognized 2 or more signs, [calculate your potential savings](/calculator) and book a free consultation.`,
    category: 'Tips',
    date: '2024-12-26',
    readTime: '4 min read',
    color: '#ea4335',
    author: { name: 'Sam K', role: 'Founder, OpBros.Automation' },
  },
  'client-story-how-we-saved-30-hours-week': {
    title: 'Client Story: How We Saved 30 Hours/Week for a Sydney Trades Business',
    excerpt: 'A deep dive into how we transformed operations for a plumbing business.',
    content: `## The Client: Sydney Plumbing Co.\n\n**Team size**: 8 people\n**Challenge**: Drowning in admin, missing leads, delayed invoicing\n\n## The Problems We Found\n\n- Quote chaos (6 hour response time)\n- Scheduling nightmares (double-bookings weekly)\n- Invoice delays (days after job completion)\n- Lead leakage (no follow-up system)\n\n## The Solution We Built\n\n### Phase 1: Quote Automation\nResponse time dropped from 6 hours to 60 seconds.\n\n### Phase 2: Scheduling System\nDouble-bookings eliminated. Phone interruptions down 70%.\n\n### Phase 3: Invoice Automation\nInvoice time reduced from days to minutes.\n\n### Phase 4: Growth Automation\nGoogle reviews doubled. Repeat business up 25%.\n\n## The Numbers\n\n- Admin hours: 40 → 10 (-75%)\n- Quote response: 6 hours → 60 seconds (-99%)\n- Double-bookings: 4/month → 0 (-100%)\n\n## Your Business Could Be Next\n\n[Book a free consultation](/contact) and we'll show you what automation can do for your business.`,
    category: 'Case Studies',
    date: '2024-12-24',
    readTime: '5 min read',
    color: '#4285f4',
    author: { name: 'Sam K', role: 'Founder, OpBros.Automation' },
  },
  'ai-in-2025-what-sydney-businesses-need-to-know': {
    title: 'AI in 2025: What Sydney Businesses Need to Know',
    excerpt: 'The AI landscape is evolving rapidly. Here\'s what practical AI adoption looks like for Australian SMEs.',
    content: `## The State of AI in 2025\n\nAI has moved from hype to reality:\n- GPT-5 and Gemini 3 are mainstream\n- Agent-based AI can perform complex tasks\n- Costs have dropped dramatically\n- Integration is easier than ever\n\n## Practical AI Applications for SMEs\n\n### 1. Customer Service AI\nModern chatbots understand natural language, handle complex inquiries, and book appointments.\n\n### 2. Content Generation\nAI can create social media posts, email newsletters, and blog articles.\n\n### 3. Data Analysis\nAI excels at finding patterns in customer data and predicting demand.\n\n### 4. Process Automation with AI\nCombining AI with workflow automation makes systems 10x more powerful.\n\n## AI Adoption Roadmap\n\n1. Experiment (Month 1-2)\n2. Implement Quick Wins (Month 3-4)\n3. Integrate Deeply (Month 5-6)\n4. Optimize and Scale (Ongoing)\n\n## Get Started with AI\n\n[Book a free AI readiness assessment](/contact) and we'll help you identify the highest-impact opportunities.`,
    category: 'Guides',
    date: '2024-12-22',
    readTime: '6 min read',
    color: '#34a853',
    author: { name: 'Sam K', role: 'Founder, OpBros.Automation' },
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
