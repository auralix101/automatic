"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Zap, MessageCircle, ArrowUpRight,
  AtSign, Brain, Inbox, Lock, Terminal, CheckCheck,
} from "lucide-react"

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
      <circle cx="12" cy="12" r="10" fill="#2AABEE" />
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

export function LandingPage() {
  const router = useRouter()
  const heroRef = useRef<HTMLDivElement>(null)
  const [spot, setSpot] = useState({ x: 50, y: 30 })
  const [dmStep, setDmStep] = useState(0)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      setSpot({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      })
    }
    el.addEventListener("mousemove", onMove)
    return () => el.removeEventListener("mousemove", onMove)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setDmStep((s) => (s + 1) % 5), 1800)
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

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#f4f2ec] selection:bg-[#c9ff3f] selection:text-black overflow-x-hidden antialiased relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;1,9..144,500&family=Space+Mono:wght@400;700&display=swap');
        .font-display { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
        .font-mono-ui { font-family: 'Space Mono', ui-monospace, monospace; }

        :root {
          --lime: #c9ff3f;
          --violet: #8b7cff;
          --ink: #0a0a0c;
          --paper: #f4f2ec;
        }

        @keyframes fade-up { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fade-up 1s cubic-bezier(.16,.8,.24,1) both; }

        @keyframes drift {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(6%, -5%) scale(1.1); }
        }
        .blob { animation: drift 20s ease-in-out infinite; }
        .blob-rev { animation: drift 28s ease-in-out infinite reverse; }

        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ticker-track { animation: ticker 34s linear infinite; }

        @keyframes blink-caret { 50% { opacity: 0; } }
        .caret { animation: blink-caret 1s step-end infinite; }

        @keyframes pop-in {
          from { opacity: 0; transform: translateY(10px) scale(.92); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .pop-in { animation: pop-in .45s cubic-bezier(.2,.8,.3,1) both; }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201,255,63,0.5); }
          50% { box-shadow: 0 0 0 8px rgba(201,255,63,0); }
        }
        .glow-pulse { animation: glow-pulse 2.2s ease-out infinite; }

        .grain::before {
          content: ""; position: fixed; inset: 0; z-index: 5; pointer-events: none; opacity: .045; mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .panel {
          background: rgba(244,242,236,0.03);
          border: 1px solid rgba(244,242,236,0.1);
        }
        .panel-solid { background: #111114; border: 1px solid rgba(244,242,236,0.1); }

        .lime-btn {
          background: var(--lime);
          color: #0a0a0c;
          transition: transform .35s cubic-bezier(.2,.8,.3,1), box-shadow .35s ease;
        }
        .lime-btn:hover { transform: translateY(-2px); box-shadow: 0 14px 40px -10px rgba(201,255,63,0.55); }
        .lime-btn:active { transform: translateY(0); }

        .bento-item {
          transition: border-color .4s ease, background .4s ease, transform .4s cubic-bezier(.2,.8,.3,1);
        }
        .bento-item:hover {
          border-color: rgba(201,255,63,0.35);
          background: rgba(201,255,63,0.045);
          transform: translateY(-3px);
        }

        .num-tab { transition: color .3s ease, border-color .3s ease; }

        .rule { background: linear-gradient(90deg, transparent, rgba(244,242,236,0.18), transparent); }

        .chip {
          transition: border-color .3s ease, color .3s ease, transform .3s ease;
        }
        .chip:hover { border-color: rgba(201,255,63,0.5); color: var(--lime); transform: translateY(-1px); }

        .logo-glow { transition: filter .35s ease, transform .35s ease; }
        .logo-glow-ig:hover { filter: drop-shadow(0 0 10px rgba(214,36,159,0.85)) drop-shadow(0 0 18px rgba(253,88,73,0.6)); transform: scale(1.12); }
        .logo-glow-yt:hover { filter: drop-shadow(0 0 12px rgba(255,0,0,0.75)); transform: scale(1.12); }
        .logo-glow-tg:hover { filter: drop-shadow(0 0 12px rgba(42,171,238,0.8)); transform: scale(1.12); }
        .chip-icon:hover .logo-glow { filter: drop-shadow(0 0 10px currentColor); }

        @media (prefers-reduced-motion: reduce) {
          .blob, .blob-rev, .ticker-track, .fade-up, .caret, .pop-in, .glow-pulse { animation: none !important; }
        }
      `}</style>

      <div className="grain" />

      {/* Ambient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="blob absolute -top-56 left-1/3 w-[50rem] h-[50rem] rounded-full bg-[#c9ff3f]/[0.07] blur-[150px]" />
        <div className="blob-rev absolute bottom-0 -left-40 w-[40rem] h-[40rem] rounded-full bg-[#8b7cff]/[0.10] blur-[140px]" />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-5 md:px-10 h-16 border-b border-white/[0.07] bg-[#0a0a0c]/80 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[var(--lime)] flex items-center justify-center rounded-[4px]">
            <Zap className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
          </div>
          <span className="font-mono-ui text-[11px] font-bold tracking-[0.08em]">INSTA AUTO BY SHAHROZ MALIK</span>
        </div>
        <div className="flex items-center gap-1.5">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 font-mono-ui text-[11px] text-neutral-400 border border-white/10 rounded-full px-3 py-1.5">
            <InstagramLogo className="logo-glow logo-glow-ig w-3.5 h-3.5" /> IG
          </a>
          <a href={YOUTUBE_URL} target="_blank" rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 font-mono-ui text-[11px] text-neutral-400 border border-white/10 rounded-full px-3 py-1.5">
            <YoutubeLogo className="logo-glow logo-glow-yt w-3.5 h-3.5" /> YT
          </a>
          {process.env.NODE_ENV === "development" && (
            <button onClick={handleTestLogin}
              className="font-mono-ui text-[11px] font-bold text-[var(--lime)] border border-[var(--lime)]/30 rounded-full px-3.5 py-1.5 hover:bg-[var(--lime)]/10 transition-colors">
              Dev Login
            </button>
          )}
          <button onClick={handleLogin}
            className="lime-btn font-mono-ui text-[11px] font-bold rounded-full px-4 py-1.5">
            Log in
          </button>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10">
        <section ref={heroRef} className="relative px-5 md:px-10 pt-14 md:pt-24 pb-20 max-w-6xl mx-auto grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-70"
            style={{ background: `radial-gradient(560px circle at ${spot.x}% ${spot.y}%, rgba(201,255,63,0.06), transparent 60%)` }}
          />

          <div>
            <div className="fade-up flex items-center gap-2 mb-7" style={{ animationDelay: "0ms" }}>
              <span className="font-mono-ui text-[10px] tracking-[0.2em] uppercase text-neutral-500 border border-white/10 rounded-full px-3 py-1">
                Self-hosted
              </span>
              <span className="font-mono-ui text-[10px] tracking-[0.2em] uppercase text-neutral-500 border border-white/10 rounded-full px-3 py-1">
                $0/mo
              </span>
              <span className="font-mono-ui text-[10px] tracking-[0.2em] uppercase text-[var(--lime)] border border-[var(--lime)]/30 rounded-full px-3 py-1">
                Open source
              </span>
            </div>

            <h1 className="fade-up font-display font-medium text-[13vw] md:text-[5.2rem] leading-[0.98] tracking-tight" style={{ animationDelay: "100ms" }}>
              Reply to every DM
              <br />
              <span className="italic text-[var(--lime)]">before you finish</span>
              <br />
              your coffee.
            </h1>

            <p className="fade-up mt-7 text-neutral-400 text-base md:text-lg max-w-lg leading-relaxed" style={{ animationDelay: "180ms" }}>
              Comment-to-DM funnels, keyword triggers, story reactions, AI replies, a live inbox,
              and Reels scheduling — the open-source ManyChat alternative. Your data lives in your own Supabase, not ours.
            </p>

            <div className="fade-up mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "260ms" }}>
              <button onClick={handleLogin}
                className="lime-btn glow-pulse group flex items-center gap-2 font-mono-ui text-sm font-bold px-6 py-3.5 rounded-full">
                <InstagramLogo className="w-4 h-4" />
                Connect Instagram
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </button>
              {process.env.NODE_ENV === "development" && (
                <button onClick={handleTestLogin}
                  className="chip flex items-center gap-2 font-mono-ui text-sm font-bold text-neutral-300 border border-white/15 px-6 py-3.5 rounded-full">
                  <Terminal className="w-4 h-4" />
                  Dev Login
                </button>
              )}
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer"
                className="chip flex items-center gap-2 font-mono-ui text-sm text-neutral-300 border border-white/15 px-6 py-3.5 rounded-full">
                <TelegramLogo className="logo-glow logo-glow-tg w-4 h-4" />
                Telegram support
              </a>
            </div>
          </div>

          {/* Signature element: live animated DM mockup */}
          <div className="fade-up relative" style={{ animationDelay: "220ms" }}>
            <div className="panel-solid rounded-[22px] p-5 shadow-2xl shadow-black/60 max-w-sm mx-auto">
              <div className="flex items-center gap-2.5 pb-4 border-b border-white/[0.08]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--lime)] to-[var(--violet)]" />
                <div>
                  <p className="text-[13px] font-semibold">creator.studio</p>
                  <p className="text-[10px] text-neutral-500 font-mono-ui">automation active</p>
                </div>
                <span className="ml-auto relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--lime)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--lime)]" />
                </span>
              </div>

              <div className="pt-4 space-y-2.5 min-h-[220px]">
                {dmStep >= 0 && (
                  <div className="pop-in flex justify-end">
                    <div className="bg-white/[0.08] rounded-2xl rounded-tr-sm px-3.5 py-2 text-[12.5px] max-w-[75%]">
                      commented "PRICE" on your reel 🔥
                    </div>
                  </div>
                )}
                {dmStep >= 1 && (
                  <div className="pop-in flex justify-start">
                    <div className="bg-[var(--lime)]/15 border border-[var(--lime)]/25 rounded-2xl rounded-tl-sm px-3.5 py-2 text-[12.5px] max-w-[80%]">
                      Sent you the price list in your DMs ✅
                    </div>
                  </div>
                )}
                {dmStep >= 2 && (
                  <div className="pop-in flex justify-start">
                    <div className="bg-white/[0.06] border border-white/10 rounded-2xl rounded-tl-sm px-3.5 py-2 text-[12.5px] max-w-[85%]">
                      Hey! Here's our full lineup + bundle pricing 📎
                    </div>
                  </div>
                )}
                {dmStep >= 3 && (
                  <div className="pop-in flex justify-end">
                    <div className="bg-white/[0.08] rounded-2xl rounded-tr-sm px-3.5 py-2 text-[12.5px] max-w-[75%]">
                      perfect, do you ship to Lahore?
                    </div>
                  </div>
                )}
                {dmStep >= 4 && (
                  <div className="pop-in flex justify-start items-center gap-1.5">
                    <div className="bg-white/[0.06] border border-white/10 rounded-2xl rounded-tl-sm px-3.5 py-2 text-[12.5px] max-w-[80%] flex items-center gap-1">
                      Yes — nationwide<span className="caret">|</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between font-mono-ui text-[10px] text-neutral-500">
                <span className="flex items-center gap-1"><CheckCheck className="w-3 h-3 text-[var(--lime)]" /> auto-replied in 0.4s</span>
                <span>AI + rules</span>
              </div>
            </div>
          </div>
        </section>

        {/* Ticker */}
        <div className="relative border-y border-white/[0.08] py-3 overflow-hidden bg-white/[0.02]">
          <div className="ticker-track flex whitespace-nowrap font-mono-ui text-[11px] uppercase tracking-[0.2em] text-neutral-500 gap-8 w-max">
            {Array.from({ length: 2 }).map((_, copy) => (
              <div key={copy} className="flex gap-8">
                {["comment → DM", "keyword triggers", "story reactions", "AI auto-reply", "live inbox", "ice breakers", "follow gate", "quick replies", "media attachments", "public + private replies"].map((t) => (
                  <span key={t} className="flex items-center gap-8">
                    {t} <span className="text-[var(--lime)]">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bento features */}
        <section className="px-5 md:px-10 py-20 max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10 gap-6">
            <h2 className="font-display font-medium text-3xl md:text-5xl max-w-lg leading-[1.05]">
              Everything the paid tools do. None of the invoice.
            </h2>
            <div className="rule hidden md:block h-px flex-1 mb-3" />
          </div>

          <div className="grid md:grid-cols-6 gap-3">
            <Bento span="md:col-span-3 md:row-span-2" icon={<Brain className="w-5 h-5" />} title="AI auto-reply"
              desc="Feed it your account context — niche, products, tone — and let AI handle unmatched DMs like a human would, 24/7." big />
            <Bento span="md:col-span-3" icon={<MessageCircle className="w-5 h-5" />} title="Comment → DM funnels"
              desc="Keyword or reply-all triggers on any post. DM only, public reply only, or both." />
            <Bento span="md:col-span-3" icon={<Inbox className="w-5 h-5" />} title="Live inbox"
              desc="Every conversation in one dashboard. Jump in manually anytime." />
            <Bento span="md:col-span-2" icon={<AtSign className="w-5 h-5" />} title="Story triggers"
              desc="React to mentions, emoji reactions, replies." />
            <Bento span="md:col-span-2" icon={<Lock className="w-5 h-5" />} title="Follow gate"
              desc="Lock content behind a follow, one tap to unlock." />
            <Bento span="md:col-span-2" icon={<Terminal className="w-5 h-5" />} title="Self-hosted"
              desc="Next.js + Supabase. Own your data and tokens." />
          </div>
        </section>

        {/* Community */}
        <section className="px-5 md:px-10 pb-24 max-w-6xl mx-auto">
          <div className="relative rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 panel-solid overflow-hidden">
            <div className="blob pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[var(--lime)]/10 blur-[90px]" />
            <div className="relative">
              <h3 className="font-display font-medium text-3xl md:text-4xl mb-2">Built in the open.</h3>
              <p className="text-neutral-500 text-sm max-w-md">
                Questions, bugs, feature requests — the Telegram chat is where it all happens.
                Follow along on Instagram and YouTube too.
              </p>
            </div>
            <div className="relative flex flex-wrap items-center gap-3">
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer"
                className="chip flex items-center gap-2 border border-white/15 text-white font-mono-ui text-xs font-bold px-5 py-3 rounded-full">
                <TelegramLogo className="logo-glow logo-glow-tg w-3.5 h-3.5" /> Join Telegram
              </a>
              <a href={YOUTUBE_URL} target="_blank" rel="noreferrer"
                className="chip flex items-center gap-2 border border-white/15 text-neutral-300 font-mono-ui text-xs font-bold px-5 py-3 rounded-full">
                <YoutubeLogo className="logo-glow logo-glow-yt w-3.5 h-3.5" /> Subscribe
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
                className="chip flex items-center gap-2 border border-white/15 text-neutral-300 font-mono-ui text-xs font-bold px-5 py-3 rounded-full">
                <InstagramLogo className="logo-glow logo-glow-ig w-3.5 h-3.5" /> Follow
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.08] px-5 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono-ui text-[11px] text-neutral-600">
          INSTA AUTO BY SHAHROZ MALIK — Instagram automation.
        </span>
        <div className="flex items-center gap-5 font-mono-ui text-[11px] text-neutral-500">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-[var(--lime)] transition-colors">Instagram</a>
          <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="hover:text-[var(--lime)] transition-colors">YouTube</a>
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-[var(--lime)] transition-colors">Telegram support</a>
        </div>
      </footer>
    </div>
  )
}

function Bento({ icon, title, desc, span, big }: { icon: React.ReactNode; title: string; desc: string; span: string; big?: boolean }) {
  return (
    <div className={`bento-item panel rounded-2xl p-6 flex flex-col ${span} ${big ? "justify-between" : ""}`}>
      <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[var(--lime)] mb-4">
        {icon}
      </div>
      <div>
        <h3 className={`font-display font-medium ${big ? "text-2xl mb-2" : "text-base mb-1.5"}`}>{title}</h3>
        <p className={`text-neutral-500 leading-relaxed ${big ? "text-sm" : "text-[12.5px]"}`}>{desc}</p>
      </div>
    </div>
  )
}
