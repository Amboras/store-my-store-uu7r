'use client'

import Link from 'next/link'
import { Zap } from 'lucide-react'
import { clearConsent } from '@/lib/cookie-consent'
import { usePolicies } from '@/hooks/use-policies'

export default function Footer() {
  const { policies } = usePolicies()

  const policyLinks: { label: string; href: string }[] = []
  if (policies?.privacy_policy) policyLinks.push({ label: 'Privacy Policy', href: '/privacy' })
  if (policies?.terms_of_service) policyLinks.push({ label: 'Terms of Service', href: '/terms' })
  if (policies?.refund_policy) policyLinks.push({ label: 'Refund Policy', href: '/refund-policy' })

  return (
    <footer className="bg-[#181e25] text-gray-300">
      <div className="container-custom py-14">

        {/* Top grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 group mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#2e9e63]">
                <Zap className="h-4 w-4 text-white fill-white" />
              </div>
              <span className="font-heading text-2xl font-bold text-white">Sealix</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Keep your food fresh with a single swipe. The smart, portable bag sealer trusted by 2,400+ households across Europe.
            </p>
            <div className="mt-6 flex gap-3">
              {['FB', 'IG', 'TK'].map((s) => (
                <div key={s} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#2e9e63] transition-colors flex items-center justify-center text-xs font-bold text-white cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-5">Product</h3>
            <ul className="space-y-3">
              {[
                { label: 'Sealix Mini Sealer', href: '#product' },
                { label: 'How It Works', href: '#benefits' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Shop All', href: '/products' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-[#2e9e63] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-5">Support</h3>
            <ul className="space-y-3">
              {[
                { label: 'FAQ', href: '/faq' },
                { label: 'Shipping & Delivery', href: '/shipping' },
                { label: 'Returns & Refunds', href: '/shipping' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#2e9e63] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-5">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-[#2e9e63] transition-colors">
                  About Sealix
                </Link>
              </li>
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#2e9e63] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter micro-cta */}
            <div className="mt-8">
              <p className="text-xs text-gray-400 mb-3">Get 10% off your first order:</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#2e9e63] transition-colors min-w-0"
                />
                <button
                  type="submit"
                  className="bg-[#2e9e63] text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-[#1f7347] transition-colors flex-shrink-0"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Sealix. All rights reserved. Designed for freshness lovers.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                clearConsent()
                window.dispatchEvent(new Event('manage-cookies'))
              }}
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Manage Cookies
            </button>
            <span className="text-xs text-gray-600">Powered by Amboras</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
