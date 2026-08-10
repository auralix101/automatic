"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Zap, MessageCircle, Sparkles, ArrowUpRight, Instagram, Youtube,
  Send, AtSign, Brain, Inbox, Lock, Terminal,
} from "lucide-react"

const TELEGRAM_URL = "https://t.me/Auralix_studio"
const INSTAGRAM_URL = "https://www.instagram.com/shahroz_ai/"
const YOUTUBE_URL = "https://youtube.com/@auralixstudio?si=Qu_T0fePl9WLf1vj"

export function LandingPage() {
  const router = useRouter()
  const heroRef = useRef<HTMLDivElement>(null)
  const [spot, setSpot] = useState({ x: 50, y: 30 })

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
    <div className="min-h-screen bg-[#050507] text-[#ededed] selection:bg-[#ffe14d] selection:text-black overflow-x-hidden antialiased relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;700&display=swap');
        .font-serif-display { font-family: 'Instrument Serif', Georgia, serif; }
        .font-mono-ui { font-family: 'JetBrains Mono', ui-monospace, monospace; }

        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 30s linear infinite; }

        @keyframes fade-up { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fade-up .8s cubic-bezier(.2,.7,.2,1) both; }

        @keyframes drift {
          0%, 100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(4%, -6%) scale(1.08); }
          66% { transform: translate(-3%, 4%) scale(0.96); }
        }
        .blob { animation: drift 18s ease-in-out infinite; }
        .blob-slow { animation: drift 26s ease-in-out infinite reverse; }

        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .text-shimmer {
          background: linear-gradient(90deg, #ffe14d 0%, #fff7cf 25%, #ffe14d 50%, #fff7cf 75%, #ffe14d 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 6s linear infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px 0px rgba(255,225,77,0.35), 0 0 0px 0px rgba(255,225,77,0); }
          50% { box-shadow: 0 0 40px 6px rgba(255,225,77,0.55), 0 0 0px 0px rgba(255,225,77,0); }
        }
        .glow-btn { animation: pulse-glow 3.2s ease-in-out infinite; }

        .grain::before {
          content: ""; position: fixed; inset: 0; z-index: 5; pointer-events: none; opacity: .035; mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .glass {
          background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015));
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.09);
        }

        .card-hover {
          position: relative;
          transition: transform .35s cubic-bezier(.2,.7,.2,1), border-color .35s ease, background .35s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          border-color: rgba(255,225,77,0.35);
          background: linear-gradient(180deg, rgba(255,225,77,0.06), rgba(255,255,255,0.015));
        }
        .card-hover::after {
          content: "";
          position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
          opacity: 0; transition: opacity .35s ease;
          box-shadow: 0 0 40px 4px rgba(255,225,77,0.15);
        }
        .card-hover:hover::after { opacity: 1; }

        .btn-shine { position: relative; overflow: hidden; }
        .btn-shine::before {
          content: "";
          position: absolute; top: 0; left: -60%; width: 40%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
          transform: skewX(-20deg);
          transition: left .6s ease;
        }
        .btn-shine:hover::before { left: 130%; }

        .border-beam { position: relative; }
        .border-beam::before {
          content: "";
          position: absolute; inset: -1px; border-radius: inherit; padding: 1px;
          background: conic-gradient(from 0deg, transparent 0%, rgba(255,225,77,0.9) 8%, transparent 18%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          animation: spin 5s linear infinite;
          opacity: 0.6;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        @media (prefers-reduced-motion: reduce) {
          .blob, .blob-slow, .text-shimmer, .glow-btn, .fade-up, .marquee-track, .border-beam::before { animation: none !important; }
        }
      `}</style>

      <div className="grain" />

      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="blob absolute -top-40 -left-20 w-[42rem] h-[42rem] rounded-full bg-[#ffe14d]/[0.10] blur-[120px]" />
        <div className="blob-slow absolute top-1/3 -right-32 w-[38rem] h-[38rem] rounded-full bg-[#2AABEE]/[0.10] blur-[120px]" />
        <div className="blob absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-[#ff5f9e]/[0.06] blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-5 md:px-10 h-16 glass">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-[#ffe14d] text-black flex items-center justify-center rounded-[6px] shadow-[0_0_18px_rgba(255,225,77,0.55)]">
            <Zap className="w-3.5 h-3.5" strokeWidth={2.5} />
          </div>
          <span className="font-mono-ui text-sm font-bold tracking-tight">insta auto by shahroz malik</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 font-mono-ui text-xs text-neutral-400 hover:text-white border border-white/10 hover:border-[#ffe14d]/50 rounded-full px-3.5 py-1.5 transition-all hover:shadow-[0_0_16px_rgba(255,225,77,0.25)]"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
          <a
            href={YOUTUBE_URL} target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 font-mono-ui text-xs text-neutral-400 hover:text-white border border-white/10 hover:border-[#ff4d4d]/50 rounded-full px-3.5 py-1.5 transition-all hover:shadow-[0_0_16px_rgba(255,77,77,0.25)]"
          >
            <Youtube className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">YouTube</span>
          </a>
          {process.env.NODE_ENV === "development" && (
            <button
              onClick={handleTestLogin}
              className="font-mono-ui text-xs font-bold text-[#ffe14d] border border-[#ffe14d]/30 rounded-full px-4 py-1.5 hover:bg-[#ffe14d]/10 transition-colors"
            >
              Dev Login
            </button>
          )}
          <button
            onClick={handleLogin}
            className="btn-shine font-mono-ui text-xs font-bold bg-white text-black rounded-full px-4 py-1.5 hover:bg-[#ffe14d] transition-colors"
          >
            Log in
          </button>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10">
        <section
          ref={heroRef}
          className="relative px-5 md:px-10 pt-16 md:pt-28 pb-16 max-w-6xl mx-auto"
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-70 transition-[background] duration-300"
            style={{
              background: `radial-gradient(600px circle at ${spot.x}% ${spot.y}%, rgba(255,225,77,0.08), transparent 60%)`,
            }}
          />

          <div className="fade-up" style={{ animationDelay: "0ms" }}>
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffe14d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffe14d]" />
              </span>
              Instagram automation // self-hosted // no monthly fees
            </p>
          </div>

          <h1 className="fade-up font-serif-display text-[15vw] md:text-[7.5rem] leading-[0.95] tracking-tight" style={{ animationDelay: "80ms" }}>
            Your DMs,
            <br />
            <span className="italic text-shimmer">on autopilot.</span>
          </h1>

          <div className="fade-up mt-10 flex flex-col md:flex-row md:items-end gap-8 md:gap-16" style={{ animationDelay: "160ms" }}>
            <p className="text-neutral-400 text-base md:text-lg max-w-md leading-relaxed">
              Comment-to-DM funnels, keyword triggers, story reactions, AI replies, a live inbox,
              and Reels scheduling. The open-source ManyChat alternative — your data stays in your own Supabase.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleLogin}
                className="glow-btn btn-shine group flex items-center gap-2 bg-[#ffe14d] text-black font-mono-ui text-sm font-bold px-7 py-4 rounded-full hover:scale-[1.04] active:scale-[0.98] transition-transform"
              >
                Connect Instagram
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </button>
              {process.env.NODE_ENV === "development" && (
                <button
                  onClick={handleTestLogin}
                  className="group flex items-center gap-2 font-mono-ui text-sm font-bold text-[#ffe14d] border border-[#ffe14d]/25 px-7 py-4 rounded-full hover:bg-[#ffe14d]/10 active:scale-[0.98] transition-all"
                >
                  <Terminal className="w-4 h-4" />
                  Dev Login
                </button>
              )}
              <a
                href={TELEGRAM_URL} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 font-mono-ui text-sm text-neutral-300 border border-white/15 px-6 py-4 rounded-full hover:border-[#2AABEE]/60 hover:text-[#2AABEE] transition-all hover:shadow-[0_0_20px_rgba(42,171,238,0.25)]"
              >
                <Send className="w-4 h-4" />
                Telegram support
              </a>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="relative border-y border-white/[0.08] py-3 overflow-hidden glass">
          <div className="marquee-track flex whitespace-nowrap font-mono-ui text-xs uppercase tracking-[0.2em] text-neutral-500 gap-8 w-max">
            {Array.from({ length: 2 }).map((_, copy) => (
              <div key={copy} className="flex gap-8">
                {["comment → DM", "keyword triggers", "story reactions", "AI auto-reply", "live inbox", "ice breakers", "follow gate", "quick replies", "media attachments", "public + private replies"].map((t) => (
                  <span key={t} className="flex items-center gap-8">
                    {t} <span className="text-[#ffe14d] drop-shadow-[0_0_6px_rgba(255,225,77,0.8)]">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Feature grid */}
        <section className="px-5 md:px-10 py-20 max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="font-serif-display text-4xl md:text-5xl">
              Everything the paid tools do.
            </h2>
            <span className="hidden md:block font-mono-ui text-xs text-neutral-500 border border-white/10 rounded-full px-3 py-1">$0/month</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Feature icon={<MessageCircle className="w-4 h-4" />} title="Comment → DM funnels"
              desc="Keyword or reply-all triggers on any post. Choose DM only, public reply only, or both — with your own rotating public replies." />
            <Feature icon={<Send className="w-4 h-4" />} title="DM keyword automation"
              desc="Auto-respond to DMs with text, media, or rich cards with buttons. Quick-reply chips guide people through your funnel." />
            <Feature icon={<AtSign className="w-4 h-4" />} title="Story triggers"
              desc="React to story mentions, emoji reactions, and story replies. Filter by emoji or keyword." />
            <Feature icon={<Brain className="w-4 h-4" />} title="AI auto-reply"
              desc="Feed it your account context — niche, products, tone — and let AI handle unmatched DMs like a human." />
            <Feature icon={<Inbox className="w-4 h-4" />} title="Live inbox"
              desc="Every conversation in one dashboard. Jump in manually anytime, fire quick responses from your saved automations." />
            <Feature icon={<Lock className="w-4 h-4" />} title="Follow gate"
              desc="Lock content behind a follow. Non-followers get a follow prompt; one tap later they unlock the goods." />
            <Feature icon={<Sparkles className="w-4 h-4" />} title="Human-like sending"
              desc="Optional typing indicators and randomized delays so replies land natural, not botty." />
            <Feature icon={<Terminal className="w-4 h-4" />} title="Self-hosted & hackable"
              desc="Next.js + Supabase. Deploy on free tiers. Read every line, fork it, own your data and your tokens." />
          </div>
        </section>

        {/* Community strip */}
        <section className="px-5 md:px-10 pb-24 max-w-6xl mx-auto">
          <div className="border-beam relative rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 glass overflow-hidden">
            <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#ffe14d]/10 blur-[80px]" />
            <div className="relative">
              <h3 className="font-serif-display text-3xl md:text-4xl mb-2">Built in the open.</h3>
              <p className="text-neutral-500 text-sm max-w-md">
                Questions, bugs, feature requests — the Telegram chat is where it all happens.
                Follow along on Instagram and YouTube too.
              </p>
            </div>
            <div className="relative flex flex-wrap items-center gap-3">
              <a
                href={TELEGRAM_URL} target="_blank" rel="noreferrer"
                className="btn-shine flex items-center gap-2 bg-[#2AABEE] text-white font-mono-ui text-xs font-bold px-5 py-3 rounded-full hover:brightness-110 transition-all hover:shadow-[0_0_24px_rgba(42,171,238,0.45)]"
              >
                <Send className="w-3.5 h-3.5" /> Join Telegram
              </a>
              <a
                href={YOUTUBE_URL} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 border border-white/15 text-neutral-300 font-mono-ui text-xs font-bold px-5 py-3 rounded-full hover:border-[#ff4d4d]/50 transition-all hover:shadow-[0_0_20px_rgba(255,77,77,0.25)]"
              >
                <Youtube className="w-3.5 h-3.5 text-[#ff4d4d]" /> Subscribe on YouTube
              </a>
              <a
                href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 border border-white/15 text-neutral-300 font-mono-ui text-xs font-bold px-5 py-3 rounded-full hover:border-[#ffe14d]/50 transition-all hover:shadow-[0_0_20px_rgba(255,225,77,0.3)]"
              >
                <Instagram className="w-3.5 h-3.5 text-[#ffe14d]" /> Follow on Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.08] px-5 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 glass">
        <span className="font-mono-ui text-[11px] text-neutral-600">
          insta auto by shahroz malik — Instagram automation.
        </span>
        <div className="flex items-center gap-5 font-mono-ui text-[11px] text-neutral-500">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-[#ffe14d] transition-colors">Instagram</a>
          <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="hover:text-[#ff4d4d] transition-colors">YouTube</a>
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-[#2AABEE] transition-colors">Telegram support</a>
        </div>
      </footer>
    </div>
  )
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="card-hover glass rounded-2xl p-7">
      <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-neutral-500 group-hover:text-[#ffe14d] transition-colors mb-5">
        {icon}
      </div>
      <h3 className="font-mono-ui text-sm font-bold text-white mb-2">{title}</h3>
      <p className="text-[13px] text-neutral-500 leading-relaxed">{desc}</p>
    </div>
  )
}
