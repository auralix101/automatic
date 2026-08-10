"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowUpRight, ArrowRight, Brain, Inbox, Lock, Terminal, MessageCircle, AtSign } from "lucide-react"

const TELEGRAM_URL = "https://t.me/Auralix_studio"
const INSTAGRAM_URL = "https://www.instagram.com/shahroz_ai/"
const YOUTUBE_URL = "https://youtube.com/@auralixstudio?si=Qu_T0fePl9WLf1vj"

function InstagramLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <defs>
        <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-grad)" />
      <rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="17.15" cy="6.85" r="1.15" fill="#fff" />
    </svg>
  )
}

function YoutubeLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M23 12s0-3.4-.44-5.03a2.9 2.9 0 0 0-2.03-2.05C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.53.42A2.9 2.9 0 0 0 1.44 6.97C1 8.6 1 12 1 12s0 3.4.44 5.03a2.9 2.9 0 0 0 2.03 2.05C5.1 19.5 12 19.5 12 19.5s6.9 0 8.53-.42a2.9 2.9 0 0 0 2.03-2.05C23 15.4 23 12 23 12Z" fill="#FF0000" />
      <path d="M9.75 15.02V8.98L15.5 12l-5.75 3.02Z" fill="#fff" />
    </svg>
  )
}

function TelegramLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="10" fill="url(#tg-shade)" />
      <defs>
        <linearGradient id="tg-shade" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#37AEE2" />
          <stop offset="1" stopColor="#1E96C8" />
        </linearGradient>
      </defs>
      <path d="M5.6 11.86l11.05-4.26c.51-.2.96.12.79.9l-1.88 8.86c-.14.63-.51.78-1.03.49l-2.85-2.1-1.37 1.32c-.15.15-.28.28-.57.28l.2-2.88 5.24-4.74c.23-.2-.05-.32-.35-.12l-6.48 4.08-2.79-.87c-.6-.19-.61-.6.13-.9Z" fill="#fff" />
    </svg>
  )
}

const FEATURES = [
  { n: "01", icon: Brain, title: "AI auto-reply", desc: "Feed it your account context — niche, products, tone — and let AI handle unmatched DMs like a human would, around the clock." },
  { n: "02", icon: MessageCircle, title: "Comment → DM funnels", desc: "Keyword or reply-all triggers on any post. DM only, public reply only, or both — with rotating replies." },
  { n: "03", icon: AtSign, title: "Story triggers", desc: "React to mentions, emoji reactions, and story replies. Filter by emoji or keyword." },
  { n: "04", icon: Inbox, title: "Live inbox", desc: "Every conversation lands in one dashboard. Step in manually any time, fire saved responses in a tap." },
  { n: "05", icon: Lock, title: "Follow gate", desc: "Lock content behind a follow. Non-followers get a prompt, then unlock in one tap." },
  { n: "06", icon: Terminal, title: "Self-hosted", desc: "Built on Next.js and Supabase. Deploy on free tiers. Own your data and your tokens, forever." },
]

const LOG_LINES = [
  "trigger matched — keyword \"price\"",
  "comment reply sent · public",
  "DM dispatched · 0.4s",
  "story mention detected",
  "follow gate unlocked",
  "AI fallback engaged",
  "quick-reply chip tapped",
  "conversation handed to inbox",
]

export function LandingPage() {
  const router = useRouter()
  const heroRef = useRef<HTMLDivElement>(null)
  const [spot, setSpot] = useState({ x: 50, y: 30 })
  const [logIndex, setLogIndex] = useState(0)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      setSpot({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 })
    }
    el.addEventListener("mousemove", onMove)
    return () => el.removeEventListener("mousemove", onMove)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setLogIndex((i) => i + 1), 1400)
    return () => clearInterval(id)
  }, [])

  const handleLogin = () => {
    // Instagram Business Login (Instagram API with Instagram Login). client_id must be the
    // Instagram app ID from the Instagram product page, not the parent Meta app ID.
    window.location.href = `https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID}&redirect_uri=${process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI}&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments`
  }

  const handleTestLogin = () => {
    localStorage.setItem("ig_user_id", "9999999999")
    localStorage.setItem("ig_username", "test_creator")
    router.push("/dashboard")
  }

  const visibleLog = Array.from({ length: 6 }).map((_, i) => LOG_LINES[(logIndex - i + LOG_LINES.length * 10) % LOG_LINES.length])

  return (
    <div className="min-h-screen bg-[#141210] text-[#f2ede4] overflow-x-hidden antialiased relative selection:bg-[#d9a15b] selection:text-[#141210]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,340;0,9..144,480;0,9..144,600;1,9..144,480&family=Neue+Montreal:wght@400;500&family=Space+Mono:wght@400;700&display=swap');
        .font-display { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
        .font-mono-ui { font-family: 'Space Mono', ui-monospace, monospace; }
        .font-sans-ui { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; }

        :root {
          --copper: #d9a15b;
          --copper-soft: #e8c495;
          --ink: #141210;
          --line: rgba(242,237,228,0.12);
        }

        @keyframes fade-up { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fade-up 1.1s cubic-bezier(.16,.8,.24,1) both; }

        @keyframes rise-out {
          0% { opacity: 0; transform: translateY(14px); }
          10%, 85% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-14px); }
        }

        @keyframes log-in { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
        .log-line { animation: log-in .4s ease both; }

        @keyframes grain-shift { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-2%,-1%)} }
        .grain::before {
          content: ""; position: fixed; inset: -10%; z-index: 5; pointer-events: none; opacity: .05; mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E");
          animation: grain-shift 9s steps(2) infinite;
        }

        .hairline { background: var(--line); }

        .copper-btn {
          background: var(--copper);
          color: #1a1611;
          transition: transform .4s cubic-bezier(.16,.8,.24,1), box-shadow .4s ease, background .4s ease;
        }
        .copper-btn:hover { transform: translateY(-2px); box-shadow: 0 20px 50px -14px rgba(217,161,91,0.55); background: var(--copper-soft); }
        .copper-btn:active { transform: translateY(0); }

        .ghost-btn {
          border: 1px solid var(--line);
          transition: border-color .35s ease, background .35s ease, transform .35s ease;
        }
        .ghost-btn:hover { border-color: rgba(217,161,91,0.55); background: rgba(217,161,91,0.06); transform: translateY(-2px); }

        .feature-row { transition: background .4s ease, padding-left .4s cubic-bezier(.16,.8,.24,1); border-top: 1px solid var(--line); }
        .feature-row:last-child { border-bottom: 1px solid var(--line); }
        .feature-row:hover { background: rgba(217,161,91,0.045); padding-left: 12px; }
        .feature-num { transition: color .4s ease; }
        .feature-row:hover .feature-num { color: var(--copper); }
        .feature-arrow { transition: transform .4s cubic-bezier(.16,.8,.24,1), opacity .4s ease; opacity: 0; transform: translateX(-8px); }
        .feature-row:hover .feature-arrow { opacity: 1; transform: translateX(0); }

        .logo-glow { transition: filter .35s ease, transform .35s ease; }
        .logo-glow-ig:hover { filter: drop-shadow(0 0 10px rgba(214,36,159,0.8)) drop-shadow(0 0 16px rgba(253,88,73,0.55)); transform: scale(1.14) rotate(-4deg); }
        .logo-glow-yt:hover { filter: drop-shadow(0 0 12px rgba(255,0,0,0.7)); transform: scale(1.14) rotate(-4deg); }
        .logo-glow-tg:hover { filter: drop-shadow(0 0 12px rgba(42,171,238,0.75)); transform: scale(1.14) rotate(-4deg); }

        .panel { background: linear-gradient(180deg, rgba(242,237,228,0.05), rgba(242,237,228,0.015)); border: 1px solid var(--line); }

        .mono-tag { letter-spacing: 0.18em; }

        @keyframes dot-pulse { 0%,100%{opacity:1} 50%{opacity:.3} }
        .dot-pulse { animation: dot-pulse 1.6s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .fade-up, .log-line, .grain::before { animation: none !important; }
        }
      `}</style>

      <div className="grain" />

      {/* subtle vignette */}
      <div className="pointer-events-none fixed inset-0 -z-10" style={{ background: "radial-gradient(120% 80% at 50% -10%, rgba(217,161,91,0.08), transparent 55%)" }} />

      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 h-20 border-b border-[var(--line)] bg-[#141210]/85 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[var(--copper)]/50 flex items-center justify-center">
            <span className="font-display italic text-[15px] text-[var(--copper)]">i</span>
          </div>
          <span className="font-mono-ui text-[10.5px] font-bold mono-tag uppercase">Insta Auto by Shahroz Malik</span>
        </div>
        <div className="flex items-center gap-2">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hidden sm:flex p-1.5">
            <InstagramLogo className="logo-glow logo-glow-ig w-4 h-4" />
          </a>
          <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="hidden sm:flex p-1.5">
            <YoutubeLogo className="logo-glow logo-glow-yt w-4 h-4" />
          </a>
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="hidden sm:flex p-1.5">
            <TelegramLogo className="logo-glow logo-glow-tg w-4 h-4" />
          </a>
          <div className="w-px h-5 bg-[var(--line)] mx-1 hidden sm:block" />
          {process.env.NODE_ENV === "development" && (
            <button onClick={handleTestLogin} className="font-mono-ui text-[10.5px] font-bold text-[var(--copper)] border border-[var(--copper)]/30 rounded-full px-3.5 py-2 hover:bg-[var(--copper)]/10 transition-colors">
              Dev Login
            </button>
          )}
          <button onClick={handleLogin} className="copper-btn font-mono-ui text-[10.5px] font-bold rounded-full px-4 py-2">
            Log in
          </button>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10">
        <section ref={heroRef} className="relative px-6 md:px-12 pt-20 md:pt-28 pb-20 max-w-7xl mx-auto">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-60" style={{ background: `radial-gradient(600px circle at ${spot.x}% ${spot.y}%, rgba(217,161,91,0.08), transparent 60%)` }} />

          <div className="fade-up flex items-center gap-3 mb-9" style={{ animationDelay: "0ms" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--copper)] dot-pulse" />
            <p className="font-mono-ui text-[10.5px] mono-tag uppercase text-[#a89e8f]">Instagram automation, self-hosted — no monthly fee</p>
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end">
            <h1 className="fade-up font-display font-medium text-[11.5vw] md:text-[6.4rem] leading-[0.94] tracking-tight" style={{ animationDelay: "90ms" }}>
              The quiet engine
              <br />
              behind <span className="italic text-[var(--copper)]">every reply.</span>
            </h1>
          </div>

          <div className="fade-up mt-10 grid md:grid-cols-[1fr_auto] gap-10 items-start" style={{ animationDelay: "180ms" }}>
            <p className="text-[#b9ae9c] text-base md:text-lg max-w-lg leading-relaxed font-sans-ui">
              Comment-to-DM funnels, keyword triggers, story reactions, AI replies, a live inbox,
              and Reels scheduling — the open-source alternative to ManyChat. Your data stays in your own Supabase.
            </p>
            <div className="flex flex-wrap md:flex-col items-start gap-3">
              <button onClick={handleLogin} className="copper-btn group flex items-center gap-2 font-mono-ui text-sm font-bold px-6 py-3.5 rounded-full whitespace-nowrap">
                <InstagramLogo className="w-4 h-4" />
                Connect Instagram
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </button>
              {process.env.NODE_ENV === "development" && (
                <button onClick={handleTestLogin} className="ghost-btn flex items-center gap-2 font-mono-ui text-sm font-bold text-[#e8e2d6] px-6 py-3.5 rounded-full whitespace-nowrap">
                  Dev Login
                </button>
              )}
            </div>
          </div>

          {/* Stat strip */}
          <div className="fade-up mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)] rounded-2xl overflow-hidden" style={{ animationDelay: "260ms" }}>
            <Stat value="$0" label="per month" />
            <Stat value="0.4s" label="avg. reply time" />
            <Stat value="100%" label="your own Supabase" />
            <Stat value="MIT" label="license" />
          </div>
        </section>

        {/* Live activity panel + intro copy */}
        <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto grid md:grid-cols-[1fr_1fr] gap-6">
          <div className="panel rounded-2xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="font-mono-ui text-[10.5px] mono-tag uppercase text-[var(--copper)]">What it replaces</span>
              <h2 className="font-display font-medium text-3xl md:text-4xl mt-3 leading-[1.1]">
                Every automation a paid inbox tool sells you — running on infrastructure you own.
              </h2>
            </div>
            <p className="text-[#a89e8f] text-sm mt-8 max-w-md font-sans-ui">
              No seat limits, no message caps, no upsells. Fork it, extend it, deploy it on a free-tier
              Supabase project this afternoon.
            </p>
          </div>

          <div className="panel rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono-ui text-[10.5px] mono-tag uppercase text-[#a89e8f]">Live activity</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--copper)] dot-pulse" />
                <span className="font-mono-ui text-[10px] text-[#a89e8f]">streaming</span>
              </span>
            </div>
            <div className="space-y-0 font-mono-ui text-[12.5px]">
              {visibleLog.map((line, i) => (
                <div key={logIndex - i} className="log-line flex items-center gap-3 py-2.5 border-t border-[var(--line)] first:border-t-0">
                  <span className="text-[#6f6659]">{String(logIndex - i).padStart(4, "0")}</span>
                  <span className="text-[#d8d0c2]">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature index */}
        <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10 gap-6">
            <h2 className="font-display font-medium text-3xl md:text-5xl">Index of capability</h2>
            <span className="font-mono-ui text-[10.5px] mono-tag uppercase text-[#a89e8f] hidden md:block">06 modules</span>
          </div>

          <div>
            {FEATURES.map((f, i) => {
              const Icon = f.icon
              return (
                <div
                  key={f.n}
                  className="feature-row flex items-center gap-6 py-6 px-1 cursor-default"
                  onMouseEnter={() => setHoveredFeature(i)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <span className="feature-num font-mono-ui text-sm text-[#6f6659] w-8 shrink-0">{f.n}</span>
                  <Icon className="w-5 h-5 text-[var(--copper)] shrink-0" />
                  <div className="flex-1 grid md:grid-cols-[220px_1fr] gap-2 md:gap-8">
                    <h3 className="font-display text-xl md:text-2xl">{f.title}</h3>
                    <p className="text-[#a89e8f] text-sm leading-relaxed max-w-xl font-sans-ui">{f.desc}</p>
                  </div>
                  <ArrowRight className="feature-arrow w-4 h-4 text-[var(--copper)] shrink-0" />
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA band */}
        <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
          <div className="relative rounded-[28px] p-10 md:p-16 panel overflow-hidden text-center">
            <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(70% 100% at 50% 0%, rgba(217,161,91,0.1), transparent 70%)" }} />
            <p className="relative font-mono-ui text-[10.5px] mono-tag uppercase text-[var(--copper)] mb-5">Start free, today</p>
            <h2 className="relative font-display font-medium text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto">
              Your inbox deserves better than another subscription.
            </h2>
            <div className="relative mt-10 flex flex-wrap justify-center items-center gap-3">
              <button onClick={handleLogin} className="copper-btn group flex items-center gap-2 font-mono-ui text-sm font-bold px-7 py-4 rounded-full">
                Connect Instagram
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </button>
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="ghost-btn flex items-center gap-2 font-mono-ui text-sm text-[#e8e2d6] px-7 py-4 rounded-full">
                <TelegramLogo className="logo-glow logo-glow-tg w-4 h-4" />
                Talk to us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-[var(--line)] px-6 md:px-12 py-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-mono-ui text-[10.5px] text-[#6f6659] mono-tag uppercase text-center md:text-left">
          Insta Auto by Shahroz Malik — Instagram automation
        </span>
        <div className="flex items-center gap-5">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><InstagramLogo className="logo-glow logo-glow-ig w-4 h-4" /></a>
          <a href={YOUTUBE_URL} target="_blank" rel="noreferrer"><YoutubeLogo className="logo-glow logo-glow-yt w-4 h-4" /></a>
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer"><TelegramLogo className="logo-glow logo-glow-tg w-4 h-4" /></a>
        </div>
      </footer>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-[#141210] px-6 py-6">
      <p className="font-display font-medium text-2xl md:text-3xl text-[var(--copper)]">{value}</p>
      <p className="font-mono-ui text-[10px] mono-tag uppercase text-[#a89e8f] mt-1">{label}</p>
    </div>
  )
}
