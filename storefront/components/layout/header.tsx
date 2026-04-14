'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { ShoppingBag, User, Menu, X, LogIn, Zap } from 'lucide-react'
import { useCart } from '@/hooks/use-cart'
import { useAuth } from '@/hooks/use-auth'
import CartDrawer from '@/components/cart/cart-drawer'

export default function Header() {
  const { itemCount } = useCart()
  const { isLoggedIn } = useAuth()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileMenuCloseRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      mobileMenuCloseRef.current?.focus()
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  const handleMobileMenuKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !mobileMenuRef.current) return
    const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus()
    }
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/96 backdrop-blur-md border-b border-gray-100 shadow-sm'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between gap-4">

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 lg:hidden hover:opacity-70 transition-opacity"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Sealix Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#2e9e63]">
                <Zap className="h-4 w-4 text-white fill-white" />
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-[#181e25]">
                Sealix
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#product" className="text-sm font-medium text-gray-600 hover:text-[#2e9e63] transition-colors">
                Shop
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-600 hover:text-[#2e9e63] transition-colors">
                Benefits
              </a>
              <a href="#reviews" className="text-sm font-medium text-gray-600 hover:text-[#2e9e63] transition-colors">
                Reviews
              </a>
              <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-[#2e9e63] transition-colors">
                FAQ
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <Link
                href={isLoggedIn ? '/account' : '/auth/login'}
                className="p-2.5 hover:opacity-70 transition-opacity hidden sm:block"
                aria-label={isLoggedIn ? 'Account' : 'Sign in'}
              >
                {isLoggedIn ? <User className="h-5 w-5" /> : <LogIn className="h-5 w-5" />}
              </Link>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 hover:opacity-70 transition-opacity"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#2e9e63] text-[10px] font-bold text-white">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Desktop CTA */}
              <a
                href="#product"
                className="hidden lg:inline-flex items-center gap-1.5 ml-2 bg-[#2e9e63] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#1f7347] transition-colors"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            ref={mobileMenuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onKeyDown={handleMobileMenuKeyDown}
            className="absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-white animate-slide-in-right"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#2e9e63]">
                  <Zap className="h-3.5 w-3.5 text-white fill-white" />
                </div>
                <span className="font-heading text-xl font-bold text-[#181e25]">Sealix</span>
              </div>
              <button
                ref={mobileMenuCloseRef}
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:opacity-70"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="p-4 space-y-1">
              {[
                { label: 'Shop', href: '#product' },
                { label: 'Benefits', href: '#benefits' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'FAQ', href: '#faq' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium border-b border-gray-100 text-gray-800 hover:text-[#2e9e63] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#product"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center bg-[#2e9e63] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1f7347] transition-colors"
                >
                  Get Yours Now
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
