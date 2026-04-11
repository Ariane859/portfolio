Create a complete, responsive portfolio landing page for a Fullstack Developer.
The design must feel editorial, technical, and premium — NOT a generic template.
Use Figma's auto layout and component features throughout.

━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN DIRECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━

Aesthetic: Editorial dark tech — think a high-end developer magazine,
serious and refined. The feeling is: precision, craft, intelligence.

Color Palette:
- Background primary: #0E0E0E
- Background surface (cards): #161616
- Background elevated: #1F1F1F
- Text primary: #F2EDE4 (warm cream white)
- Text secondary: #8C8880
- Accent: #C49A3C (warm amber gold — NOT electric blue, NOT purple)
- Accent light (hover state): #D4AA52
- Border/divider: #2A2A2A
- Success/Online indicator: #6B9E6B (muted sage green)

Typography:
- Display headings (H1, H2): "Syne" Bold or ExtraBold — large, confident,
  tracking slightly negative
- Body text: "DM Mono" Regular 15px — gives a technical, code-adjacent feel
- Labels & nav: "DM Mono" Medium, letter-spacing 0.08em, uppercase for
  section labels only
- All font sizes in rem, base 16px
- H1: 72px / line-height 1.05
- H2: 48px / line-height 1.1
- H3: 28px / line-height 1.2
- Body: 16px / line-height 1.7
- Small/Label: 12px uppercase tracked

Visual signature elements:
- A thin horizontal amber line (#C49A3C, 1px) as a recurring divider motif
- Section labels prefixed with a 2-digit index: "01 — About", "02 — Stack", etc.
  (use an en dash, not an em dash)
- A subtle noise/grain texture overlay on the background (3–5% opacity)
- Hover interactions: amber underline slides in from left on nav links
- Cards lift with a very subtle border highlight on hover (#2F2F2F to #3A3A3A)
- One large decorative typographic element per section (faint, oversized
  background text in #1A1A1A, e.g. "FULLSTACK" behind the hero)

━━━━━━━━━━━━━━━━━━━━━━━━━━
LAYOUT — RESPONSIVE BREAKPOINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━

Desktop: 1440px wide, 80px horizontal padding, max content width 1280px
Tablet: 768px wide, 40px horizontal padding — 2 columns where desktop uses 3
Mobile: 375px wide, 20px horizontal padding — single column, stacked

Use Figma auto layout on every section and component.
Define a 12-column grid for desktop, 8-column for tablet, 4-column for mobile.

━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 01 — NAVIGATION
━━━━━━━━━━━━━━━━━━━━━━━━━━

Sticky top bar, 80px height, background #0E0E0E with 1px bottom border #2A2A2A.
Slight blur/frosted glass effect (backdrop-filter: blur(12px), 92% opacity bg).

Left: Logo — "[YN]" in Syne ExtraBold 22px, amber colored. Below it in DM Mono
12px: "Fullstack Developer"

Center: Navigation links in DM Mono 13px, letter-spacing 0.06em — "Accueil"
"Stack" "Projets" "Services" "À Propos" "Contact"
Active state: amber underline 2px, color #F2EDE4
Hover state: color shifts to #C49A3C, underline slides in from left

Right: A pill CTA button — "Discutons" — outlined, border #C49A3C, text #C49A3C,
hover fills with amber, text becomes #0E0E0E. Border-radius 2px (sharp-ish).

Mobile nav: hamburger icon (3 lines, 1px weight, amber), opens a full-height
overlay drawer with links stacked vertically, large font.

━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 02 — HERO
━━━━━━━━━━━━━━━━━━━━━━━━━━

Full viewport height (100vh). Two-column layout desktop: 55% text left,
45% visual right.

Left column content (vertically centered, slight top offset):

  Small label in DM Mono 12px uppercase tracked, amber color:
  "Disponible pour missions — 2025"
  Followed by a 1px amber horizontal line, 40px wide.

  Main heading in Syne ExtraBold, 72px, warm cream:
  "Je construis
  des produits
  web complets."

  Subheading in DM Mono 16px, secondary text color, max-width 420px:
  "Du backend à l'interface, je conçois des applications robustes,
  scalables et pensées pour l'expérience utilisateur. Chaque ligne
  de code a un but."

  Two CTAs in a horizontal flex row, gap 16px:
  - Primary: filled button, bg #C49A3C, text #0E0E0E, "Voir mes projets",
    border-radius 2px, padding 14px 28px, Syne Medium 14px
  - Secondary: text link with arrow icon, color #F2EDE4, "En savoir plus →"

  Below CTAs, a row of 3 minimal stats separated by 1px vertical dividers:
  "12+ Projets livrés" | "4 ans d'expérience" | "Frontend + Backend"
  Each in DM Mono, label in secondary color 11px, number in Syne Bold 28px
  amber.

Right column: A dark card (#161616) with 1px border #2A2A2A, border-radius 8px.
Inside: a mock code editor snippet (3 lines of styled pseudo-code showing a
fullstack function, syntax-highlighted with amber for keywords, muted green for
strings, cream for variables). Below the card, floating tech badges in small
pills: "React" "Node.js" "PostgreSQL" "TypeScript" — dark bg, amber text, 1px
border.

Background: the word "FULLSTACK" in Syne ExtraBold at 200px+, color #151515,
positioned behind the text, slightly rotated -3deg, overflowing the right edge.

━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 03 — STACK TECHNIQUE
━━━━━━━━━━━━━━━━━━━━━━━━━━

Section label top: "02 — Stack" in DM Mono uppercase amber 12px.

Heading: "L'outillage qui fait tourner mes projets." Syne Bold 48px.

Two sub-columns side by side, each with a title:

  FRONTEND                         BACKEND & INFRA
  React / Next.js                  Node.js / Express
  TypeScript                       Python / FastAPI
  Tailwind CSS                     PostgreSQL / MongoDB
  Framer Motion                    Docker / Linux
  Figma                            REST API / GraphQL

Each skill item is a row: small square icon placeholder (amber outlined), skill
name in DM Mono 15px cream, then a progress bar — thin 2px line, background
#2A2A2A, fill #C49A3C, width reflects proficiency (vary realistically).

Below the two columns: a horizontal scrolling marquee strip (infinite loop) with
tech logos/names on a #161616 band, separated by amber diamond separators.
Text in DM Mono 13px secondary color.

━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 04 — SERVICES
━━━━━━━━━━━━━━━━━━━━━━━━━━

Section label: "03 — Services"

Heading: "Ce que je peux construire pour vous." Syne Bold 48px.

Three cards in a 3-column grid (2 on tablet, 1 on mobile).
Each card: bg #161616, 1px border #2A2A2A, border-radius 8px, padding 32px.
Top of card: a large amber number "01" "02" "03" in Syne ExtraBold 56px, opacity
0.3, positioned top-right.

Card 01 — Développement Web Fullstack
"De la base de données à l'interface : je prends en charge l'ensemble
du cycle de développement de votre application."
Tags below: "React" "Node.js" "SQL"

Card 02 — Conception d'API & Architecture
"Des API RESTful ou GraphQL bien documentées, performantes et pensées
pour évoluer avec votre produit."
Tags below: "REST" "GraphQL" "PostgreSQL"

Card 03 — Intégration UI et Optimisation
"Transformer vos maquettes en interfaces pixel-perfect, rapides et
accessibles, avec une attention particulière aux performances."
Tags below: "Next.js" "TypeScript" "Figma"

Each card has a bottom link: "En savoir plus" with a right arrow, amber color,
appears on hover with an underline slide-in animation.

━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 05 — PROJETS
━━━━━━━━━━━━━━━━━━━━━━━━━━

Section label: "04 — Projets"

Heading: "Des produits qui fonctionnent en production." Syne Bold 48px.

Filter tabs row: "Tous" "Frontend" "Fullstack" "API" — pill tabs, active state
amber bg, inactive #1F1F1F with 1px border. DM Mono 13px.

Project cards grid: 2 columns desktop, 1 on mobile. 3 cards minimum.

Each project card structure:
- Top: image placeholder zone, 16:9 ratio, bg #1F1F1F with a subtle
  diagonal grid pattern overlay — shows project category label top-left
  in DM Mono 11px amber uppercase
- Middle: project title in Syne Bold 22px, 1-line description in DM Mono
  14px secondary
- Tech stack tags: small pills dark bg amber text 11px
- Bottom row: "Voir le projet →" link amber | "GitHub" link secondary
- Entire card lifts 4px on hover with box-shadow: 0 8px 32px rgba(0,0,0,0.4)
  and border color shifts to #3A3A3A

Project titles and descriptions:
Project 1: "Plateforme SaaS de gestion RH" — "Application fullstack avec
dashboard analytique, authentification JWT et rôles granulaires."
Stack: React, Node.js, PostgreSQL, Docker

Project 2: "API e-commerce haute performance" — "Architecture RESTful avec
cache Redis, paiement Stripe intégré et documentation Swagger."
Stack: Express, MongoDB, Redis, Stripe

Project 3: "Application mobile cross-platform" — "Interface React Native
connectée à un backend GraphQL, déployée sur iOS et Android."
Stack: React Native, GraphQL, TypeScript

━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 06 — PROCESSUS
━━━━━━━━━━━━━━━━━━━━━━━━━━

Section label: "05 — Process"

Heading: "Comment je travaille." Syne Bold 48px.

A horizontal stepped timeline on desktop (vertical on mobile).
4 steps connected by a dashed amber line.

Step 01 — Découverte
"Comprendre votre métier, vos contraintes techniques et vos objectifs
avant d'écrire la première ligne de code."

Step 02 — Architecture
"Concevoir une structure solide : choix technologiques, schéma de base
de données, découpage des composants."

Step 03 — Développement
"Itérations courtes, code documenté, tests réguliers et communication
continue sur l'avancement."

Step 04 — Livraison
"Déploiement, documentation technique, passation propre et suivi
post-lancement si nécessaire."

Each step: number in Syne ExtraBold 40px amber, title in Syne Bold 18px,
description in DM Mono 14px secondary.

━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 07 — À PROPOS
━━━━━━━━━━━━━━━━━━━━━━━━━━

Section label: "06 — À Propos"

Two-column layout: 40% image left, 60% text right.

Left: Image placeholder — rounded rectangle, 1px border amber, with a corner
label badge "#disponible" in DM Mono 11px, amber bg, dark text, border-radius
4px.

Right content:
Small amber label: "La personne derrière le code"
Heading Syne Bold 40px: "Développeuse Fullstack, passionnée par
les systèmes bien conçus."

Body DM Mono 15px (2 paragraphs):
"Je m'appelle [Prénom]. Je développe des applications web complètes depuis
4 ans, avec une approche centrée sur la qualité du code, la robustesse
des architectures et la valeur délivrée à l'utilisateur final."

"J'aime autant concevoir une API propre que peaufiner une interface.
Ce qui me motive : résoudre des problèmes réels avec des outils
bien choisis."

Below text: two metrics side by side in the stats style from the hero,
then a row of 3 social links: GitHub (icon + "GitHub") LinkedIn (icon +
"LinkedIn") and a CV download button: "Télécharger mon CV" — outlined
amber, with a download icon.

━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 08 — CONTACT CTA
━━━━━━━━━━━━━━━━━━━━━━━━━━

Full-width dark section, bg #161616, 1px top border #2A2A2A.
Centered content, generous vertical padding (120px top/bottom).

Oversize heading Syne ExtraBold 64px (centered):
"Un projet en tête ?"

Subtext DM Mono 16px secondary, max-width 480px centered:
"Je suis disponible pour des missions freelance ou des opportunités
en CDI. Parlons de ce que vous construisez."

CTA button: large, amber filled, dark text, Syne Medium 16px,
padding 18px 40px, border-radius 2px: "M'écrire un message"

Below the button: email address in DM Mono 14px amber, underline on hover.
And a subtle note in DM Mono 12px secondary:
"Réponse sous 24 heures en général."

━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 09 — FOOTER
━━━━━━━━━━━━━━━━━━━━━━━━━━

Minimal. bg #0E0E0E, 1px top border #2A2A2A, padding 32px 80px.
Three-column layout on desktop, stacked on mobile:

Left: Logo "[YN]" amber, tagline in DM Mono 12px secondary.
Center: Nav links in DM Mono 12px secondary, horizontal row.
Right: Social icons (GitHub, LinkedIn) + "Fait avec précision en 2025"
in DM Mono 11px secondary.

━━━━━━━━━━━━━━━━━━━━━━━━━━
MICRO-INTERACTIONS & ANIMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━

- Hero text: staggered fade-up on page load (each line 80ms delay)
- Nav: hide on scroll down, reappear on scroll up
- Section headings: slide up + fade in when entering viewport
- Project cards: subtle scale 1.01 on hover
- Buttons: background color transitions 200ms ease
- Amber accent line divider: animate width from 0 to full on scroll entry
- Cursor: custom cursor — small amber circle + standard pointer,
  enlarges on hover over links

━━━━━━━━━━━━━━━━━━━━━━━━━━
FIGMA COMPONENT STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━

Organize all elements into a component library:
- Component/Button (variants: primary, secondary, ghost, icon)
- Component/Card (variants: project, service, stat)
- Component/Nav (states: default, scrolled, mobile-open)
- Component/Tag (tech badge)
- Component/SectionLabel
- Component/ProgressBar
- Component/StepItem

Use local Figma variables for the full color system, spacing tokens
(4px base grid), and typography styles.

Create 3 frames: Desktop 1440px, Tablet 768px, Mobile 375px.
All frames use auto layout and respond correctly via min/max width
constraints on components.

Export-ready: all icons from Lucide or Phosphor icon set, all images
use placeholder fills with the correct aspect ratio and a label.