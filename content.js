/*
  ─────────────────────────────────────────────────────────────
  CONTENT.JS — everything on the site lives here.
  To update your portfolio, edit the values below and save.
  You never need to touch index.html, style.css, or script.js
  for a text/link/project change.
  ─────────────────────────────────────────────────────────────
*/

const SITE = {

  // ── HERO ────────────────────────────────────────────────
  name: "Huda Imran",
  positioning: "Strategy, Brand & Growth Professional \u00B7 WEF Global Shaper (Sharjah Hub) Vice Curator",
  tagline: "Strategy. Data. Events. Brand. I build brand identities, marketing systems, partnership pipelines, community events, and data-driven strategies that hold up under scrutiny.",
  location: "Ajman / Dubai, United Arab Emirates",
  availability: "Open to strategy, brand & growth work",

  // ── ABOUT ───────────────────────────────────────────────
  about: `I've never stayed in one lane, and that's been the point. As a strategy and
    marketing professional with 3+ years across startups, education, and media, I build
    brand identities, marketing systems, partnership pipelines, community events, and
    data-driven strategies. I've hosted live sessions and exhibitions, led multi-stakeholder
    projects, and designed visual systems that made organisations look and feel like
    themselves. My foundation is a BSc in Creative Computing, an ongoing MSc in Data
    Analytics, and a genuine belief that strategy should be rigorous and beautifully
    communicated.`,

  philosophy: "The best strategies are both rigorously built and beautifully communicated.",

  credentials: [
    { label: "MSc Data Analytics", detail: "Walsh College \u2014 in progress" },
    { label: "BSc (Hons) Creative Computing", detail: "Bath Spa \u2014 Gold Medallist, Student Council President" },
    { label: "Lean Six Sigma", detail: "Yellow & White Belt" },
    { label: "WEF Global Shaper", detail: "Vice Curator, Sharjah Hub" },
    { label: "Aspire Leaders Program", detail: "Aspire Institute, 2026" }
  ],

  // ── STATS (Experience section) ─────────────────────────
  stats: [
    { value: "140+", label: "leads generated in 1 week" },
    { value: "3\u00D7", label: "engagement growth on campaigns" },
    { value: "15", label: "partnership contracts in 9 months" },
    { value: "2,000+", label: "LinkedIn followers \u2014 20,000+ total social reach" }
  ],

  // ── EXPERIENCE (career timeline) ────────────────────────
  experience: [
    {
      title: "RendrVision",
      tag: "Business & Social Media Strategist, Freelance \u00B7 Dec 2025 \u2013 Present",
      description: "Directing creative strategy across branding, social, multimedia design, and paid lead-gen \u2014 coordinating up to 6 concurrent projects and advising on pricing and proposals."
    },
    {
      title: "NexGen Dubai",
      tag: "Marketing & Business Development Executive \u00B7 Oct 2024 \u2013 Nov 2025",
      description: "Sole marketing lead \u2014 designed the brand identity, ran paid social to 3\u00D7 engagement, built the WordPress/SEO site, and secured 15 university partnership contracts in 9 months."
    },
    {
      title: "Travels Dubai",
      tag: "Social Media Business Strategist & Lead Host \u00B7 Dec 2024 \u2013 Nov 2025",
      description: "On-screen lead host and account manager \u2014 grew the brand's digital community past 20,000 followers and represented it at major industry expos."
    }
  ],

  // ── SERVICES ────────────────────────────────────────────
  serviceCategories: ["Strategy & Marketing", "Brand & Creative", "Content & Platforms", "Systems & Operations", "Retainers"],

  services: {
    "Strategy & Marketing": [
      { title: "Social Media Strategy", description: "Platform audit, positioning, and a 90-day content system across Instagram, TikTok, LinkedIn, and YouTube \u2014 with competitor analysis and monthly reviews." },
      { title: "Startup Marketing Consulting", description: "Go-to-market strategy, channel selection, budget allocation, and a KPI framework, with monthly strategy advisory." },
      { title: "Founder Personal Branding", description: "Full LinkedIn profile rewrite, content strategy, your first 30 days ghostwritten, and outreach messaging templates." },
      { title: "LinkedIn Lead Generation", description: "ICP definition, outbound pipelines, prospect list building, connection/DM copywriting, and campaign reporting." },
      { title: "Meta Ads Setup & Management", description: "Campaign strategy, targeting, creative for up to 3 ad sets, pixel setup, A/B testing, and weekly reports." },
      { title: "Partnership Outreach Management", description: "Prospect research, outreach sequences, negotiation support, pipeline tracking, and monthly summaries." }
    ],
    "Brand & Creative": [
      { title: "Brand Identity Package", description: "3 logo concepts, colour palette, typography system, templates, a brand voice guide, and final files in PNG, SVG, and PDF." },
      { title: "Branding Kit", description: "Up to 10 editable social templates (Canva or Figma) in consistent colours and fonts." },
      { title: "Website + Branding Bundle", description: "Brand identity plus a WordPress build (up to 6 pages), on-page SEO, and mobile-responsive design." },
      { title: "Pitch Deck Design", description: "Investor-ready decks up to 15 slides \u2014 narrative structure, slide flow, and design in Figma or PowerPoint." },
      { title: "Presentation Design", description: "Clean-up or redesign for up to 20 slides \u2014 consistent visual themes, custom icons, and data visualisation." }
    ],
    "Content & Platforms": [
      { title: "Content Strategy", description: "Platform-specific plans, content pillars, format breakdowns, briefing systems, and a brand voice guide." },
      { title: "YouTube & Reels Strategy + Scripting", description: "Channel positioning, 4\u20138 videos a month, full scripts, hook writing, and SEO titles/descriptions." },
      { title: "Community & Event Marketing", description: "Event marketing strategy, pre/during/post content calendars, and exhibition representation." }
    ],
    "Systems & Operations": [
      { title: "Notion / Project Workflow Setup", description: "Custom workspace, CRM, task management, SOPs, and an onboarding guide." },
      { title: "Marketing Performance Dashboard", description: "Tableau or Looker Studio build connecting web, social, and ads data, with automated reporting." }
    ],
    "Retainers": [
      { title: "Starter \u2014 Social Media Management", description: "1\u20132 platforms, 12 posts a month, caption copywriting, scheduling, community management, monthly report." },
      { title: "Growth \u2014 Strategy + Content + Reporting", description: "Multi-platform execution, 20+ posts a month, Meta ads management, monthly reviews and bi-weekly check-ins." },
      { title: "Full Stack \u2014 Marketing Operations", description: "An outsourced marketing department \u2014 strategy, content, ads, and partnerships, with a priority Slack channel." }
    ]
  },

  // ── DESIGN WORK ─────────────────────────────────────────
  // Only non-NDA / shareable projects go here.
  design: [
    {
      title: "Dar Al Asjad Publishing",
      tag: "Brand identity \u00B7 Bilingual logotype",
      description: "Full identity system for an Arabic\u2013English publishing house \u2014 bilingual logotype, a calligraphic quill mark, and lockups for both scripts.",
      image: "assets/asjad-logo.png",
      imageAlt: "Dar Al Asjad Publishing bilingual logo, Arabic calligraphy with a quill mark above English wordmark"
    },
    {
      title: "Fidelio",
      tag: "Brand identity \u00B7 Logo system",
      description: "Logo and visual identity design for Fidelio, built around a bold monogram mark and a confident, high-contrast colour system.",
      image: "assets/fidelio-logo.png",
      imageAlt: "Fidelio logo, white and coral F monogram on navy"
    },
    {
      title: "No Cap with MH",
      tag: "Podcast branding \u00B7 Social content",
      description: "Episode branding and social content system for a podcast \u2014 cover templates, typography, and a consistent on-air identity across releases.",
      image: "assets/nocap-meet.jpg",
      imageAlt: "No Cap with MH podcast episode cover artwork"
    },
    {
      title: "RendrVision",
      tag: "Studio brand",
      description: "My own studio identity \u2014 a mark built from a single continuous line, doubling as both the initials and a forward-motion arrow.",
      image: "assets/rendrvision-logo.png",
      imageAlt: "RendrVision logo mark, RV formed from a continuous line"
    }
    // ↑ Add more here — copy one of the blocks above, update title/tag/description,
    // and drop the image file into /assets. Send me the files + names and I'll slot
    // in as many as you've got.
  ],

  // ── COMMUNITY ────────────────────────────────────────────
  community: [
    {
      title: "Global Shapers Community \u2014 Sharjah Hub",
      tag: "Vice Curator \u00B7 Jul 2026 \u2013 Present",
      description: "Part of the World Economic Forum's global youth network. Previously Incoming Vice Curator & Impact Officer (Mar\u2013Jun 2026)."
    },
    {
      title: "Pakistan Youth Forum Dubai",
      tag: "Marketing & Community Engagement \u00B7 Sept 2023 \u2013 May 2025",
      description: "Led communications across 500+ volunteers and partner organisations. Supported Pink Tea Party (breast cancer awareness), PYF Fitness Fiesta, membership drives, and PAD FutureFest \u2014 received a Certificate of Appreciation."
    }
  ],

  // ── CREATOR SPOTLIGHT — @lookitshuda ─────────────────────
  creator: {
    handle: "@lookitshuda",
    positioning: "UGC Creator \u00B7 Beauty & Lifestyle \u00B7 Ajman, UAE",
    tagline: "Real reviews. Bright energy. Content that converts.",
    pillars: ["Beauty", "Skincare", "Modestwear", "Lifestyle", "UGC", "Reviews"],
    stats: [
      { value: "37.5K", label: "TikTok total views" },
      { value: "32.5K", label: "Instagram views (90 days)" },
      { value: "80\u201383%", label: "female audience" },
      { value: "48.7%", label: "audience aged 18\u201324" }
    ],
    brands: ["Thome", "Celimax \u00D7 YesStyle", "HaruHaruWonder", "Celimax MENA"],
    packages: [
      { title: "Starter", description: "1 UGC video (TikTok or Reel), product demo or review format, on-screen text and captions, 1 revision round, 30-day usage rights." },
      { title: "Growth", description: "2 UGC videos (TikTok and Reel), story integration, written caption copy, 2 revision rounds, 60-day usage rights, performance report." },
      { title: "Ambassador", description: "3+ videos a month across TikTok, Reels, and Stories, creative strategy input, unlimited revisions, full usage rights, monthly performance deck." }
    ],
    portfolio: "beacons.ai/lookitshuda"
  },

  // ── CONTACT — replace every value below with your real ones ─
  contact: {
    email: "workaholichuda@gmail.com",
    phone: "+971 55 894 7181",
    linkedin: "https://linkedin.com/in/hudairr",
    telegram: "https://t.me/your-username",
    creatorEmail: "lookitshuda@gmail.com",
    instagram: "https://instagram.com/lookitshuda",
    tiktok: "https://tiktok.com/@lookitshuda"
  }
};
