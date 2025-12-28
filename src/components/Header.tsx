'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, Sparkles, Phone } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setActiveLink(window.location.pathname)
  }, [])

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/calculator', label: 'ROI Calculator' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="OpBros.Automation"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="font-bold text-xl tracking-tight">
            OpBros<span className="text-gray-400 font-light">.online</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeLink === link.href
                  ? 'text-[#4285f4] bg-[#4285f4]/10'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Phone + CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+61256553786"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#4285f4] transition-colors"
          >
            <Phone className="w-4 h-4" />
            (02) 5655 3786
          </a>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-[#4285f4] text-white rounded-full font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#4285f4]/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Free Audit
            </span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>
      </nav>

      {/* Mobile Navigation - Slide down animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium py-3 px-4 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-100 space-y-2">
              <a
                href="tel:+61256553786"
                className="flex items-center justify-center gap-2 w-full py-3 text-gray-700 bg-gray-50 rounded-xl font-medium"
              >
                <Phone className="w-4 h-4" />
                (02) 5655 3786
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#4285f4] text-white rounded-xl font-medium"
              >
                <Sparkles className="w-4 h-4" />
                Get Free Audit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
