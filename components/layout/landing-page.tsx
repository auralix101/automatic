<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Insta Auto - AI-Powered Instagram Automation</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700;800&amp;family=Geist:wght@400;500;600&amp;family=JetBrains+Mono:wght@700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-container-lowest": "#0e0e10",
                        "surface-card": "#111114",
                        "primary-fixed-dim": "#a4d706",
                        "surface-container-high": "#2a2a2c",
                        "outline-variant": "#434935",
                        "inverse-primary": "#4d6700",
                        "secondary-container": "#422db2",
                        "inverse-surface": "#e5e1e4",
                        "tertiary-fixed": "#dce1ff",
                        "on-tertiary-fixed": "#001551",
                        "on-error-container": "#ffdad6",
                        "on-primary-fixed": "#151f00",
                        "on-tertiary-container": "#2256e7",
                        "on-tertiary": "#002681",
                        "tertiary": "#ffffff",
                        "surface-dim": "#131315",
                        "accent-pink": "#fd5949",
                        "surface-bright": "#39393b",
                        "on-secondary-fixed-variant": "#422db2",
                        "surface-container-low": "#1c1b1d",
                        "on-primary-container": "#526d00",
                        "text-muted": "#737380",
                        "on-surface-variant": "#c4c9ae",
                        "on-secondary-container": "#b4abff",
                        "secondary-fixed": "#e4dfff",
                        "tertiary-container": "#dce1ff",
                        "inverse-on-surface": "#313032",
                        "error-container": "#93000a",
                        "surface-container": "#201f21",
                        "surface-tint": "#a4d706",
                        "on-surface": "#e5e1e4",
                        "on-error": "#690005",
                        "surface-variant": "#353437",
                        "border-glass": "rgba(244, 242, 236, 0.1)",
                        "surface": "#131315",
                        "on-tertiary-fixed-variant": "#0039b4",
                        "background": "#131315",
                        "error": "#ffb4ab",
                        "secondary": "#c7bfff",
                        "on-primary-fixed-variant": "#394d00",
                        "primary": "#ffffff",
                        "surface-container-highest": "#353437",
                        "on-secondary": "#2a039d",
                        "primary-fixed": "#bff434",
                        "on-secondary-fixed": "#170065",
                        "outline": "#8d937b",
                        "secondary-fixed-dim": "#c7bfff",
                        "tertiary-fixed-dim": "#b7c4ff",
                        "primary-container": "#bff434",
                        "on-primary": "#263500",
                        "on-background": "#e5e1e4",
                        "text-primary": "#f4f2ec"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "gutter": "24px",
                        "margin-mobile": "20px",
                        "unit": "4px",
                        "margin-desktop": "40px",
                        "section-gap": "96px"
                    },
                    "fontFamily": {
                        "label-mono": ["JetBrains Mono"],
                        "display-hero-mobile": ["Epilogue"],
                        "display-hero": ["Epilogue"],
                        "body-base": ["Geist"],
                        "headline-lg": ["Epilogue"]
                    },
                    "fontSize": {
                        "label-mono": ["11px", { "lineHeight": "16px", "letterSpacing": "0.08em", "fontWeight": "700" }],
                        "display-hero-mobile": ["48px", { "lineHeight": "1.0", "letterSpacing": "-0.02em", "fontWeight": "500" }],
                        "display-hero": ["83px", { "lineHeight": "0.98", "letterSpacing": "-0.02em", "fontWeight": "500" }],
                        "body-base": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
                        "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "500" }]
                    }
                }
            }
        }
    </script>
<style>
        body {
            background-color: #0a0a0c;
            color: #f4f2ec;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.045'/%3E%3C/svg%3E");
            overflow-x: hidden;
        }

        /* Ambient Glows */
        .ambient-glow-primary {
            position: absolute;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(164, 215, 6, 0.15) 0%, rgba(0,0,0,0) 70%);
            border-radius: 50%;
            filter: blur(150px);
            z-index: -1;
            pointer-events: none;
        }
        
        .ambient-glow-secondary {
            position: absolute;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(199, 191, 255, 0.1) 0%, rgba(0,0,0,0) 70%);
            border-radius: 50%;
            filter: blur(150px);
            z-index: -1;
            pointer-events: none;
        }

        /* Glass Surface */
        .glass-panel {
            background: rgba(17, 17, 20, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(244, 242, 236, 0.1);
            border-top: 1px solid rgba(255, 255, 255, 0.15); /* Light source hit */
        }

        /* Kinetic Hover & 3D Lift */
        .kinetic-hover {
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
        }
        .kinetic-hover:hover {
            transform: translateY(-4px);
            box-shadow: 0 15px 30px -10px rgba(164, 215, 6, 0.3);
        }

        /* Primary Button */
        .btn-kinetic {
            background-color: #a4d706;
            color: #151f00;
            border-radius: 9999px;
            padding: 12px 32px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
            box-shadow: 0 4px 14px rgba(164, 215, 6, 0.2);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        .btn-kinetic:hover {
            transform: scale(1.05) translateY(-2px);
            box-shadow: 0 8px 24px rgba(164, 215, 6, 0.4);
        }
        .btn-kinetic:active {
            transform: scale(0.95);
        }

        /* Typography Utilities */
        .text-gradient-lime {
            background: linear-gradient(135deg, #bff434 0%, #a4d706 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
        }

        /* Pulse Indicator */
        .pulse-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #a4d706;
            position: relative;
        }
        .pulse-dot::after {
            content: '';
            position: absolute;
            top: -4px;
            left: -4px;
            right: -4px;
            bottom: -4px;
            border-radius: 50%;
            border: 2px solid #a4d706;
            animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
            opacity: 0;
        }
        @keyframes pulse-ring {
            0% { transform: scale(0.5); opacity: 1; }
            100% { transform: scale(1.5); opacity: 0; }
        }

        /* Status Chip */
        .status-chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 4px 12px;
            background: rgba(164, 215, 6, 0.1);
            border: 1px solid rgba(164, 215, 6, 0.2);
            border-radius: 9999px;
        }

        /* Floating Animation */
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
    </style>
</head>
<body class="antialiased font-body-base text-body-base selection:bg-primary-fixed selection:text-on-primary-fixed flex flex-col min-h-screen">
<!-- TopNavBar (Shared Component) -->
<nav class="w-full sticky top-0 z-40 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_2px_4px_rgba(0,0,0,0.5),0_20px_40px_rgba(0,0,0,0.3)]">
<div class="max-w-[1152px] mx-auto flex justify-between items-center px-gutter py-4 w-full">
<div class="flex items-center gap-4">
<a class="font-headline-lg text-headline-lg font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent flex items-center gap-2 active:scale-95 transition-transform" href="#">
<span class="material-symbols-outlined text-primary-fixed" style="font-variation-settings: 'FILL' 1;">generating_tokens</span>
                    Insta Auto
                </a>
</div>
<div class="hidden md:flex items-center gap-8">
<!-- Navigation Tabs (Simulated from SideNav intent) -->
<a class="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors duration-200" href="#features">Features</a>
<a class="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors duration-200" href="#how-it-works">Engine</a>
<a class="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors duration-200" href="#pricing">Pricing</a>
</div>
<div class="flex items-center gap-4">
<button aria-label="Notifications" class="text-on-surface-variant hover:text-primary transition-colors duration-200 active:scale-95 transition-transform">
<span class="material-symbols-outlined">notifications</span>
</button>
<button aria-label="Help" class="text-on-surface-variant hover:text-primary transition-colors duration-200 active:scale-95 transition-transform">
<span class="material-symbols-outlined">help</span>
</button>
<div class="w-8 h-8 rounded-full bg-surface-variant border border-border-glass overflow-hidden ml-2">
<img alt="User profile avatar" class="w-full h-full object-cover" data-alt="A macro shot of a sleek, dark obsidian user avatar placeholder with a subtle iridescent purple and green sheen, set against a pitch black background, symbolizing premium digital identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7zZIbV4mEXeJg_1fZ6N9svdLwoJvcpb39b7rrrCSuowNOih7xPqDkTFr7htqFUPLit7B6iyVGqwsORGCD90fAX_MHb4SJd9V6fdN-KngXGTe1kmM44C2lmvmO7v33vlexjZNW8VRakUoca5tkGfb1ZiuUBYjH6lLJQTbslxg_XrFyKimwansMyUCCACznDtlTc0jOE2LoXyhRxR8xdtB6cyV1ehk8DRh6CcSpNKesLbYArXdKw1_w"/>
</div>
</div>
</div>
</nav>
<main class="flex-grow flex flex-col items-center relative">
<div class="ambient-glow-primary top-[10%] left-[20%]"></div>
<div class="ambient-glow-secondary top-[40%] right-[10%]"></div>
<!-- HERO SECTION -->
<section class="w-full max-w-[1152px] px-gutter pt-32 pb-section-gap relative flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
<div class="flex-1 flex flex-col items-start space-y-8 max-w-2xl">
<div class="status-chip font-label-mono text-label-mono text-primary-fixed">
<div class="pulse-dot"></div>
<span>AI-Powered Instagram Automation</span>
</div>
<h1 class="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-primary max-w-3xl leading-tight">
                    Automate your <br/>
<span class="text-gradient-lime italic">Instagram Growth.</span>
</h1>
<p class="font-body-base text-body-base text-on-surface-variant max-w-xl text-lg">
                    Insta Auto merges high-performance automation utility with self-hosted freedom. Turn comments into conversions seamlessly.
                </p>
<div class="flex items-center gap-6 pt-4">
<button class="btn-kinetic">
                        Get Started
                        <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<a class="font-label-mono text-label-mono text-on-surface-variant hover:text-primary-fixed transition-colors flex items-center gap-2" href="#">
<span class="material-symbols-outlined text-[16px]">play_circle</span>
                        View Telemetry
                    </a>
</div>
</div>
<!-- Central 3D Rotating AI Core Placeholder -->
<div class="flex-1 relative w-full h-[500px] flex justify-center items-center">
<!-- Abstract Representation of Holographic Core -->
<div class="absolute inset-0 flex items-center justify-center animate-float">
<div class="w-64 h-64 rounded-full border border-primary-fixed/30 absolute animate-[spin_10s_linear_infinite]" style="transform: rotateX(60deg) rotateY(20deg);"></div>
<div class="w-80 h-80 rounded-full border border-secondary-container/40 absolute animate-[spin_15s_linear_infinite_reverse]" style="transform: rotateX(40deg) rotateY(70deg);"></div>
<div class="w-48 h-48 bg-surface-card rounded-full shadow-[0_0_80px_rgba(164,215,6,0.2)] border border-primary-fixed/20 backdrop-blur-3xl flex items-center justify-center z-10">
<span class="material-symbols-outlined text-6xl text-primary-fixed" style="font-variation-settings: 'FILL' 1;">model_training</span>
</div>
</div>
<!-- Shaders/3D would go here if assets were available, using placeholder aesthetic for now -->
</div>
</section>
<!-- FEATURES BENTO GRID -->
<section class="w-full max-w-[1152px] px-gutter py-section-gap z-10" id="features">
<div class="mb-16">
<h2 class="font-headline-lg text-headline-lg text-primary mb-4">Powerful Automation Features</h2>
<p class="text-on-surface-variant max-w-2xl">Tactile, responsive modules designed for maximum displacement within the digital ecosystem.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
<!-- Comment-to-DM (Spans 8 cols) -->
<div class="glass-panel kinetic-hover rounded-2xl col-span-1 md:col-span-8 p-8 flex flex-col justify-between overflow-hidden relative group">
<div class="absolute top-0 right-0 w-64 h-64 bg-secondary-container/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-primary-fixed/20 transition-colors duration-500"></div>
<div class="z-10">
<div class="w-12 h-12 rounded-xl bg-surface/50 border border-border-glass flex items-center justify-center mb-6">
<span class="material-symbols-outlined text-primary-fixed" style="font-variation-settings: 'FILL' 1;">forum</span>
</div>
<h3 class="font-headline-lg text-[24px] text-primary mb-2">Auto Reply to Comments</h3>
<p class="text-on-surface-variant max-w-md">Automatically reply to comments and send personalized direct messages to your audience.</p>
</div>
<div class="z-10 flex items-end justify-end">
<div class="bg-surface-dim/80 backdrop-blur-md border border-border-glass rounded-lg p-4 flex items-center gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
<img alt="User avatar" class="w-8 h-8 rounded-full object-cover" data-alt="A close up of a glossy dark glass UI notification card glowing with a subtle neon lime edge, floating in a deep black space, symbolizing a received direct message." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbSUGPXfIs3ZnTcp3tcfLZw8PyxxklZdkG_O7OG-lJAv_zE20aSMv94kKHvWCW7fCR5yyKdyG69OA6CELIySzHkLlccV3WPz8-LBoHMfYR4SoJ8M5ez6paldDMg58N35VmticL3vtMqDOrPGsVCKOZNMYLYdAjsKpvitUmSM3j-nKoCahORanFZTbnDUCnM7K5VhEDOU3XM4ZzlKWdzLEaSOeFv8uFv1AUusH7-FNsJNMngdzNbuqh"/>
<div>
<p class="text-sm text-primary font-medium">"Send me the link"</p>
<p class="text-xs text-primary-fixed">Automated Reply Sent</p>
</div>
</div>
</div>
</div>
<!-- AI Humanizer (Spans 4 cols) -->
<div class="glass-panel kinetic-hover rounded-2xl col-span-1 md:col-span-4 p-8 flex flex-col justify-between group">
<div class="z-10">
<div class="w-12 h-12 rounded-xl bg-surface/50 border border-border-glass flex items-center justify-center mb-6">
<span class="material-symbols-outlined text-secondary-fixed" style="font-variation-settings: 'FILL' 1;">psychology</span>
</div>
<h3 class="font-headline-lg text-[24px] text-primary mb-2">Self-Hosted</h3>
<p class="text-on-surface-variant">Deploy Insta Auto on your own servers for maximum privacy and control over your data.</p>
</div>
<div class="mt-8 flex items-center justify-between border-t border-border-glass pt-4">
<span class="font-label-mono text-label-mono text-text-muted">PRIVACY SCORE</span>
<span class="font-label-mono text-label-mono text-primary-fixed">100%</span>
</div>
</div>
<!-- Metrics (Spans 4 cols) -->
<div class="glass-panel kinetic-hover rounded-2xl col-span-1 md:col-span-4 p-8 flex flex-col justify-center items-center text-center">
<span class="material-symbols-outlined text-4xl text-primary-fixed mb-4">monitoring</span>
<h4 class="font-display-hero-mobile text-[48px] text-primary mb-2">2.4M</h4>
<p class="font-label-mono text-label-mono text-on-surface-variant tracking-widest uppercase">Comments Processed</p>
</div>
<!-- Flow Builder (Spans 8 cols) -->
<div class="glass-panel kinetic-hover rounded-2xl col-span-1 md:col-span-8 p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
<div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div class="flex-1 z-10">
<h3 class="font-headline-lg text-[24px] text-primary mb-2">Visual Automation Flow</h3>
<p class="text-on-surface-variant mb-6">Build complex Instagram automation pathways using a tactile, drag-and-drop node interface.</p>
<button class="font-label-mono text-label-mono text-primary hover:text-primary-fixed transition-colors flex items-center gap-2 border border-border-glass rounded-full px-6 py-2 bg-surface/50 hover:bg-surface-container-high">
                            Open Matrix
                        </button>
</div>
<div class="flex-1 z-10 w-full h-full relative min-h-[150px]">
<!-- Abstract Node Representation -->
<div class="absolute right-10 top-1/2 -translate-y-1/2 flex items-center gap-4">
<div class="w-12 h-12 rounded-lg bg-surface-card border border-primary-fixed/50 flex items-center justify-center shadow-[0_0_15px_rgba(164,215,6,0.2)]">
<span class="material-symbols-outlined text-primary-fixed">input</span>
</div>
<div class="h-0.5 w-12 bg-primary-fixed/30 relative">
<div class="absolute inset-0 bg-primary-fixed blur-[2px] opacity-50"></div>
</div>
<div class="w-12 h-12 rounded-lg bg-secondary-container/20 border border-secondary-fixed/50 flex items-center justify-center">
<span class="material-symbols-outlined text-secondary-fixed">hub</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- CTA SECTION -->
<section class="w-full max-w-[1152px] px-gutter py-section-gap z-10">
<div class="glass-panel rounded-3xl p-16 flex flex-col items-center text-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-b from-primary-fixed/5 to-transparent pointer-events-none"></div>
<span class="material-symbols-outlined text-6xl text-primary-fixed mb-6" style="font-variation-settings: 'FILL' 1;">rocket_launch</span>
<h2 class="font-display-hero-mobile md:font-display-hero text-[48px] md:text-[64px] text-primary mb-6">
                    Ready to automate your <span class="text-gradient-lime">Instagram</span>?
                </h2>
<p class="text-on-surface-variant max-w-xl mx-auto mb-10 text-lg">
                    Deploy your first Instagram automation flow in under 60 seconds. High-performance utility awaits.
                </p>
<button class="btn-kinetic px-8 py-4 text-[13px]">
                    Get Started
                    <span class="material-symbols-outlined">terminal</span>
</button>
</div>
</section>
</main>
<!-- Simple Footer -->
<footer class="w-full border-t border-border-glass py-8 z-10 bg-surface/50 backdrop-blur-lg">
<div class="max-w-[1152px] mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-4">
<div class="font-label-mono text-label-mono text-text-muted">
                © 2024 Insta Auto. All rights reserved.
            </div>
<div class="flex gap-6">
<a class="font-label-mono text-label-mono text-text-muted hover:text-primary transition-colors" href="#">Privacy</a>
<a class="font-label-mono text-label-mono text-text-muted hover:text-primary transition-colors" href="#">Terms</a>
<a class="font-label-mono text-label-mono text-text-muted hover:text-primary transition-colors" href="#">System Status</a>
</div>
</div>
</footer>
</body></html>
