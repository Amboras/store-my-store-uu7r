'use client'

import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Shield,
  RotateCcw,
  Truck,
  Zap,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Battery,
  Wallet,
  Package,
  ThumbsUp,
  Clock,
  BadgeCheck,
  Lock,
} from 'lucide-react'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const BENEFITS = [
  {
    icon: <CheckCircle2 className="h-6 w-6 text-[#2e9e63]" />,
    title: 'Keeps Food Fresh Longer',
    desc: 'An airtight seal locks out moisture and oxygen — your snacks stay crispy for days.',
  },
  {
    icon: <Wallet className="h-6 w-6 text-[#2e9e63]" />,
    title: 'Saves You Money',
    desc: 'Stop throwing away stale food. One seal pays for the product in the first week.',
  },
  {
    icon: <Package className="h-6 w-6 text-[#2e9e63]" />,
    title: 'Works on Any Plastic Bag',
    desc: 'Chips, pasta, cereals, frozen food, pet food — if it\'s a plastic bag, Sealix seals it.',
  },
  {
    icon: <Zap className="h-6 w-6 text-[#2e9e63]" />,
    title: 'Compact & Portable',
    desc: 'Fits in a drawer, bag, or pocket. Lightweight enough to take to work or travel.',
  },
  {
    icon: <Battery className="h-6 w-6 text-[#2e9e63]" />,
    title: 'USB Rechargeable',
    desc: 'No batteries needed. Charge via USB once and it lasts for hundreds of seals.',
  },
  {
    icon: <ThumbsUp className="h-6 w-6 text-[#2e9e63]" />,
    title: 'Dead Simple to Use',
    desc: 'Press the button, slide across the bag slowly. Done. No learning curve.',
  },
]

const REVIEWS = [
  {
    name: 'Maria S.',
    location: 'Lisbon, Portugal',
    rating: 5,
    date: '2 days ago',
    text: "I honestly didn't expect it to work this well. I've tried clip things before and they always fall off. This actually seals the bag and my cereals have stayed fresh for over a week. Super happy with it.",
    verified: true,
    avatar: 'M',
  },
  {
    name: 'Thomas B.',
    location: 'Berlin, Germany',
    rating: 5,
    date: '5 days ago',
    text: "My wife bought one and I laughed at her. Now I use it more than she does. The USB charging is genius — no batteries ever. Tiny, fast, and it just works.",
    verified: true,
    avatar: 'T',
  },
  {
    name: 'Sofia R.',
    location: 'Madrid, Spain',
    rating: 5,
    date: '1 week ago',
    text: "I used to use rubber bands and clips. This is on a completely different level. My chips bag stays sealed all week. Already ordered one for my mom.",
    verified: true,
    avatar: 'S',
  },
  {
    name: 'James K.',
    location: 'London, UK',
    rating: 5,
    date: '1 week ago',
    text: "Brilliant little gadget. I work from home and snack all day — half my food was going stale. With Sealix everything lasts. Worth every penny.",
    verified: true,
    avatar: 'J',
  },
  {
    name: 'Léa D.',
    location: 'Paris, France',
    rating: 4,
    date: '2 weeks ago',
    text: "Looks premium, works perfectly. Charging takes less than an hour and the battery lasts ages. Shipping was fast too — arrived in 8 days.",
    verified: true,
    avatar: 'L',
  },
  {
    name: 'Carlos M.',
    location: 'Porto, Portugal',
    rating: 5,
    date: '2 weeks ago',
    text: "I was sceptical but the price was low so I tried it. Wow. It actually melts the bag closed perfectly. I\'ve used it every single day since it arrived.",
    verified: true,
    avatar: 'C',
  },
]

const FAQS = [
  {
    q: 'How long does shipping take?',
    a: 'We ship across Europe in 7–12 business days. All orders include a tracking number sent by email. Most customers receive their order within 9 days.',
  },
  {
    q: 'How do I use the Sealix Mini Sealer?',
    a: 'Press the power button once, then slowly slide the sealer along the top of any plastic bag with gentle pressure. The heat element seals the bag in one smooth motion. It takes about 2 seconds per seal.',
  },
  {
    q: 'What bags does it work on?',
    a: 'It works on almost all standard plastic food bags — chips, cereal, pasta, frozen food, pet food, coffee, and more. It is not suitable for thick zip-lock bags or paper packaging.',
  },
  {
    q: 'How do I charge it?',
    a: 'Connect the included USB-C cable to any USB charger, power bank, or laptop. A full charge takes about 45 minutes and gives you hundreds of seals.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer a 30-day money-back guarantee. If you are not happy for any reason, contact us and we will issue a full refund — no questions asked.',
  },
  {
    q: 'Is it safe to use around food?',
    a: 'Yes. The sealing tip is food-safe. It only heats the plastic on the bag, not the food itself. The device cools down within seconds after use.',
  },
]

/* ─────────────────────────────────────────────
   SMALL COMPONENTS
───────────────────────────────────────────── */

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        {open
          ? <ChevronUp className="h-5 w-5 text-[#2e9e63] flex-shrink-0" />
          : <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   TICKER STRIP
───────────────────────────────────────────── */

const tickerItems = [
  '🔥 Limited Stock Available',
  '⚡ USB Rechargeable',
  '✅ 30-Day Money-Back Guarantee',
  '🚚 Free Shipping to Europe',
  '⭐ 4.9 / 5 from 2,400+ Reviews',
  '🔒 Secure Checkout',
  '🎉 50% Off Today Only',
]

function Ticker() {
  const doubled = [...tickerItems, ...tickerItems]
  return (
    <div className="overflow-hidden bg-[#181e25] text-white py-2.5 select-none">
      <div className="flex gap-12 animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="text-sm font-medium flex-shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   TRUST BADGES
───────────────────────────────────────────── */

function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
      {[
        { icon: <Lock className="h-4 w-4" />, label: 'Secure Checkout' },
        { icon: <BadgeCheck className="h-4 w-4" />, label: '30-Day Guarantee' },
        { icon: <Truck className="h-4 w-4" />, label: 'Free Shipping' },
        { icon: <Shield className="h-4 w-4" />, label: 'SSL Encrypted' },
      ].map((b) => (
        <div
          key={b.label}
          className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full"
        >
          <span className="text-[#2e9e63]">{b.icon}</span>
          {b.label}
        </div>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────
   PRODUCT ILLUSTRATION  (SVG placeholder)
───────────────────────────────────────────── */

function ProductVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#d6f0e3] via-[#f0faf5] to-white" />

      {/* Device body */}
      <div className="relative z-10 flex flex-col items-center gap-4 py-10">
        {/* Sealer device illustration */}
        <div className="relative">
          {/* Main body */}
          <div className="w-20 h-56 bg-gradient-to-b from-gray-100 to-gray-200 rounded-3xl shadow-2xl border border-gray-300 flex flex-col items-center justify-between py-5">
            {/* Power button */}
            <div className="w-10 h-10 rounded-full bg-[#2e9e63] flex items-center justify-center shadow-lg animate-pulse-green">
              <Zap className="h-5 w-5 text-white fill-white" />
            </div>
            {/* USB port */}
            <div className="w-6 h-2 bg-gray-400 rounded-full" />
          </div>
          {/* Green heating strip */}
          <div className="absolute bottom-14 left-0 right-0 h-2 bg-[#2e9e63] rounded-full shadow-lg" />
          {/* LED indicator */}
          <div className="absolute top-16 right-2 w-2 h-2 rounded-full bg-[#2e9e63] animate-pulse" />
        </div>

        {/* Bag being sealed */}
        <div className="flex flex-col items-center gap-0">
          {/* Sealed top portion */}
          <div className="w-36 h-3 bg-gradient-to-r from-gray-300 via-[#2e9e63]/40 to-gray-300 rounded-t-lg border border-gray-300" />
          {/* Bag body */}
          <div className="w-36 h-24 bg-gradient-to-b from-amber-50 to-amber-100 border-x border-b border-gray-300 rounded-b-2xl flex items-center justify-center overflow-hidden">
            {/* Chip silhouettes */}
            <div className="flex flex-wrap gap-1 px-3 justify-center">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="w-5 h-3 bg-amber-300/70 rounded-full transform"
                  style={{ transform: `rotate(${(i * 17) % 40 - 20}deg)` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Seal indicator */}
        <div className="flex items-center gap-1.5 bg-[#2e9e63] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow">
          <CheckCircle2 className="h-3.5 w-3.5" /> Sealed!
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   PROBLEM ILLUSTRATION
───────────────────────────────────────────── */

function ProblemCard({
  emoji, title, desc,
}: { emoji: string; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 p-6 bg-red-50 border border-red-100 rounded-2xl">
      <span className="text-4xl">{emoji}</span>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  )
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */

export default function HomePage() {
  const [qty, setQty] = useState(1)

  const ORIGINAL = 29.99
  const SALE = 14.99
  const saving = ((ORIGINAL - SALE) / ORIGINAL * 100).toFixed(0)

  return (
    <>
      {/* ── TICKER ── */}
      <Ticker />

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-white via-[#f0faf5] to-white overflow-hidden">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">

          {/* Copy */}
          <div className="space-y-7 animate-fade-in-up order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#d6f0e3] text-[#1f7347] text-sm font-semibold px-4 py-1.5 rounded-full">
              <Zap className="h-4 w-4 fill-[#2e9e63] text-[#2e9e63]" />
              USB Rechargeable · Ships to Europe
            </div>

            <h1 className="font-heading font-bold text-[#181e25] leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
              Keep Your Food{' '}
              <span className="text-[#2e9e63]">Fresh in Seconds</span>
            </h1>

            <p className="text-lg text-gray-500 max-w-md leading-relaxed">
              Seal any bag instantly and stop wasting food. The Sealix Mini Sealer creates an airtight heat seal in one swipe — no clips, no rubber bands, no stale chips ever again.
            </p>

            {/* Social proof snippet */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['M', 'T', 'S', 'J'].map((l) => (
                  <div key={l} className="w-8 h-8 rounded-full bg-[#2e9e63] border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <StarRow />
                <p className="text-sm text-gray-500 mt-0.5">2,400+ happy customers</p>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <a
                href="#product"
                className="btn-sealix w-full sm:w-auto text-lg px-10 py-4"
              >
                Get Yours Now
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="text-sm text-gray-400 flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-red-400" />
                <span className="text-red-500 font-semibold">Only 47 left in stock</span>
                &nbsp;— order in the next 2 hours for fastest dispatch
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 animate-fade-in flex justify-center">
            <ProductVisual className="w-full max-w-sm h-96 lg:h-[480px]" />
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="border-y border-gray-100 bg-white py-5">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Truck className="h-5 w-5 text-[#2e9e63]" />, title: 'Free EU Shipping', sub: 'Every order' },
              { icon: <RotateCcw className="h-5 w-5 text-[#2e9e63]" />, title: '30-Day Returns', sub: 'No questions asked' },
              { icon: <Shield className="h-5 w-5 text-[#2e9e63]" />, title: 'Secure Checkout', sub: '256-bit SSL' },
              { icon: <BadgeCheck className="h-5 w-5 text-[#2e9e63]" />, title: 'Quality Guarantee', sub: 'Tested & approved' },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 rounded-xl bg-[#d6f0e3] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM SECTION ── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-500 text-sm font-semibold px-4 py-1.5 rounded-full">
              <AlertTriangle className="h-4 w-4" /> Sound familiar?
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-[#181e25]">
              Open Bags Are Costing You Money
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Every unsealed bag is food that goes stale, gets thrown away, and turns into wasted cash. It happens to everyone — every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <ProblemCard
              emoji="😩"
              title="Stale Chips & Cereals"
              desc="You open a bag, eat some, close it badly. Next day: completely stale. Thrown away."
            />
            <ProblemCard
              emoji="💸"
              title="Food Waste = Wasted Money"
              desc="The average European wastes €300+ on food per year. Most of it is preventable."
            />
            <ProblemCard
              emoji="🤯"
              title="Clips & Rubber Bands Don't Work"
              desc="They fall off, leave air in, and never actually keep food fresh. You know it."
            />
          </div>

          <p className="text-center text-gray-400 mt-10 text-base">
            There has to be a better way. And there is.
          </p>
        </div>
      </section>

      {/* ── SOLUTION SECTION ── */}
      <section className="py-20 bg-gradient-to-br from-[#f0faf5] to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

            {/* Visual */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-xs">
                <div className="aspect-square bg-white rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden">
                  <ProductVisual className="w-full h-full" />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-[#2e9e63] text-white text-xs font-bold px-3 py-2 rounded-2xl shadow-lg">
                  ✨ Heat Seal Tech
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white border border-gray-200 text-gray-800 text-xs font-semibold px-3 py-2 rounded-2xl shadow-lg flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#2e9e63]" /> Takes 2 seconds
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#d6f0e3] text-[#1f7347] text-sm font-semibold px-4 py-1.5 rounded-full">
                <CheckCircle2 className="h-4 w-4" /> The Solution
              </div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-[#181e25]">
                Meet the Sealix Mini Sealer
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                A handheld heat sealer the size of a pen. Press the button, slide across the bag, and it creates a permanent airtight seal in under 2 seconds. No refills, no batteries, no fuss.
              </p>

              <ul className="space-y-3">
                {[
                  'Airtight heat seal — no clips or folds needed',
                  'Works on chips, cereals, coffee, pet food & more',
                  'Charges once via USB-C, lasts hundreds of seals',
                  'Compact enough to live in your kitchen drawer',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-[#2e9e63] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <a href="#product" className="btn-sealix inline-flex">
                Get Yours Now — 50% Off
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-14 space-y-3">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-[#181e25]">
              Everything You Get with Sealix
            </h2>
            <p className="text-gray-500 text-lg">
              Six reasons thousands of homes across Europe now have one in every kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-2xl border border-gray-100 bg-[#f9fffe] hover:border-[#2e9e63]/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-[#d6f0e3] flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-[#f0faf5]">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-14 space-y-3">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-[#181e25]">
              How It Works in 3 Steps
            </h2>
            <p className="text-gray-500 text-lg">No manual. No learning curve. Just seal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: '🔋', title: 'Charge It Once', desc: 'Plug in via USB-C. Fully charged in 45 minutes. Ready for hundreds of seals.' },
              { step: '02', icon: '▶️', title: 'Press the Button', desc: 'One press powers on the heat element. A small green light confirms it\'s ready.' },
              { step: '03', icon: '✅', title: 'Slide & Seal', desc: 'Slowly glide the sealer across the top of any plastic bag. Done. Airtight in 2 seconds.' },
            ].map((item) => (
              <div key={item.step} className="relative text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg border border-[#2e9e63]/20 flex items-center justify-center text-3xl mx-auto">
                    {item.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#2e9e63] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-14 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <StarRow />
              <span className="font-bold text-xl text-gray-900">4.9 / 5</span>
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-[#181e25]">
              Real People. Real Results.
            </h2>
            <p className="text-gray-500 text-lg">Over 2,400 customers across Europe trust Sealix in their kitchen.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="p-6 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#2e9e63] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {r.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{r.name}</p>
                      <p className="text-xs text-gray-400">{r.location}</p>
                    </div>
                  </div>
                  {r.verified && (
                    <span className="text-[10px] font-semibold text-[#2e9e63] bg-[#d6f0e3] px-2 py-0.5 rounded-full flex-shrink-0">
                      ✓ Verified
                    </span>
                  )}
                </div>
                <StarRow count={r.rating} />
                <p className="text-sm text-gray-600 leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                <p className="text-xs text-gray-400">{r.date}</p>
              </div>
            ))}
          </div>

          {/* Selling fast badge */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-red-50 border border-red-200 rounded-2xl px-6 py-4">
              <span className="text-2xl">🔥</span>
              <div>
                <p className="font-bold text-red-600">Selling Fast!</p>
                <p className="text-sm text-red-500">23 people are viewing this product right now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT / BUY SECTION ── */}
      <section id="product" className="py-20 bg-gradient-to-br from-[#f0faf5] to-white">
        <div className="container-custom max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Product visual */}
            <div className="sticky top-24">
              <div className="aspect-square bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex items-center justify-center">
                <ProductVisual className="w-full h-full" />
              </div>
              {/* Image thumbnails placeholder */}
              <div className="flex gap-3 mt-4 justify-center">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-16 h-16 rounded-xl border-2 bg-gray-50 flex items-center justify-center cursor-pointer transition-colors ${i === 1 ? 'border-[#2e9e63]' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <Zap className={`h-6 w-6 ${i === 1 ? 'text-[#2e9e63]' : 'text-gray-300'}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Purchase panel */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <p className="text-sm font-semibold text-[#2e9e63] uppercase tracking-widest mb-2">Sealix</p>
                <h2 className="font-heading font-bold text-3xl text-[#181e25]">Sealix Mini Sealer</h2>
                <p className="text-gray-500 mt-2">Portable USB Heat Bag Sealer — White / Silver</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <StarRow />
                <span className="text-sm font-semibold text-gray-700">4.9</span>
                <span className="text-sm text-gray-400">(2,417 reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-[#181e25]">€{SALE.toFixed(2)}</span>
                <span className="text-xl text-gray-400 line-through">€{ORIGINAL.toFixed(2)}</span>
                <span className="text-sm font-bold bg-red-500 text-white px-2.5 py-1 rounded-full">
                  -{saving}% OFF
                </span>
              </div>
              <p className="text-sm text-[#2e9e63] font-semibold -mt-3">
                You save €{(ORIGINAL - SALE).toFixed(2)} today!
              </p>

              {/* Stock urgency */}
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 flex items-center gap-3">
                <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0" />
                <p className="text-sm text-red-600 font-medium">
                  Only <span className="font-bold">47 units</span> remaining at this price. Sale ends soon.
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                The Sealix Mini Sealer creates a perfect airtight heat seal on any plastic bag in 2 seconds. USB rechargeable, compact enough to fit in a kitchen drawer, and powerful enough to seal chips, coffee, cereals, pet food, and more. Stop wasting food. Start saving money.
              </p>

              {/* Bullets */}
              <ul className="space-y-2.5">
                {[
                  'Creates permanent airtight seal in 2 seconds',
                  'Works on any standard plastic food bag',
                  'USB-C rechargeable — no batteries needed',
                  'Compact & lightweight (fits in any drawer)',
                  'Food-safe heat element',
                  'LED power indicator',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-[#2e9e63] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors text-lg font-medium"
                  >
                    −
                  </button>
                  <span className="w-10 text-center text-sm font-semibold">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors text-lg font-medium"
                  >
                    +
                  </button>
                </div>
                {qty >= 2 && (
                  <span className="text-xs text-[#2e9e63] font-semibold bg-[#d6f0e3] px-2 py-1 rounded-full">
                    🎁 Buy 2, great gift idea!
                  </span>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="/products"
                  className="btn-sealix w-full text-lg py-4 justify-center"
                >
                  <ShoppingBagIcon />
                  Buy Now — €{(SALE * qty).toFixed(2)}
                </a>
                <a
                  href="/products"
                  className="btn-sealix-outline w-full text-base py-3.5 justify-center"
                >
                  Add to Cart
                </a>
              </div>

              {/* Trust badges */}
              <TrustBadges />

              {/* Shipping info */}
              <div className="bg-gray-50 rounded-2xl p-4 space-y-2.5">
                {[
                  { icon: <Truck className="h-4 w-4 text-[#2e9e63]" />, text: 'Free shipping to all EU countries' },
                  { icon: <Clock className="h-4 w-4 text-[#2e9e63]" />, text: 'Estimated delivery: 7–12 business days' },
                  { icon: <RotateCcw className="h-4 w-4 text-[#2e9e63]" />, text: '30-day money-back guarantee' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5 text-sm text-gray-600">
                    {item.icon}
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-[#181e25]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg">Everything you need to know before you order.</p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-400 text-sm">
              Still have a question?{' '}
              <a href="/contact" className="text-[#2e9e63] font-semibold hover:underline">
                Contact us
              </a>{' '}
              and we reply within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-[#181e25] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2e9e63] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#2e9e63] rounded-full blur-3xl" />
        </div>

        <div className="container-custom max-w-2xl text-center relative z-10 space-y-7">
          <div className="inline-flex items-center gap-2 bg-[#2e9e63]/20 text-[#6edba8] text-sm font-semibold px-4 py-1.5 rounded-full">
            🔥 Limited Time — 50% Off
          </div>
          <h2 className="font-heading font-bold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Stop Wasting Food. Start Saving Money.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Join 2,400+ customers across Europe who already use Sealix every day. At €14.99, it pays for itself in the first week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#product" className="btn-sealix text-lg px-10 py-4">
              Get Yours Now — €14.99
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            {[
              '✅ 30-Day Guarantee',
              '🚚 Free EU Shipping',
              '🔒 Secure Checkout',
            ].map((item) => (
              <span key={item} className="text-sm text-gray-400">{item}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* Inline icon to avoid lucide SSR issues in btn */
function ShoppingBagIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}
