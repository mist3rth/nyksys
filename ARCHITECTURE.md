# 🏗️ ARCHITECTURE — Nyksys

## 1. Stack Technique
- **Framework :** React 19 + TypeScript (Strict).
- **Bundler :** Vite 6 + Tailwind CSS v4.
- **Animations :** Lenis (smooth scroll), GSAP, Motion.
- **Déploiement :** Vercel (Edge Network).

## 2. Infrastructure & Déploiement Vercel

### 2.1 Configuration des Headers de Sécurité (`vercel.json`)
Pour obtenir la note **A / A+** sur [securityheaders.com](https://securityheaders.com/), les en-têtes suivants sont appliqués globalement :
- **CSP (Content-Security-Policy) :**
  - `default-src 'self'`
  - `script-src 'self' 'unsafe-inline'`
  - `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`
  - `font-src 'self' data: https://fonts.gstatic.com`
  - `img-src 'self' data: blob: https://images.unsplash.com https://nyksys.fr`
  - `connect-src 'self'`
  - `frame-ancestors 'none'`
  - `object-src 'none'`
  - `base-uri 'self'`
  - `form-action 'self'`
  - `upgrade-insecure-requests`
- **HSTS :** `max-age=63072000; includeSubDomains; preload`
- **X-Content-Type-Options :** `nosniff`
- **X-Frame-Options :** `DENY`
- **Referrer-Policy :** `strict-origin-when-cross-origin`
- **Permissions-Policy :** `camera=(), microphone=(), geolocation=(), payment=(), usb=(), display-capture=(), accelerometer=(), gyroscope=(), magnetometer=(), xr-spatial-tracking=()`
- **X-XSS-Protection :** `1; mode=block`
- **cleanUrls :** `true` (résolution directe des fichiers statiques sans extension ni trailing slash).

### 2.2 Stratégie de Rendu SSG (Static Site Generation)
- **Pipeline de build :**
  1. `vite build` : Génération du bundle client minifié et du template HTML de base.
  2. `vite build --ssr src/entry-server.tsx --outDir dist/server` : Compilation ultra-rapide (200ms) du composant racine sous forme de module serveur Node.
  3. `node scripts/prerender.mjs` : Script Node natif sans navigateur headless (zéro Puppeteer) qui exécute `renderToString` pour chaque route publique, injecte le code HTML sémantique et les balises Helmet dans `<div id="root">`, écrit les fichiers statiques (`dist/index.html`, `dist/projets/index.html`, `dist/a-propos/index.html`, etc.) et supprime le dossier temporaire `dist/server`.
  4. `src/main.tsx` : Utilise `hydrateRoot` si le DOM contient déjà des nœuds pré-rendus, assurant une hydratation instantanée sans scintillement.

### 2.3 Structure des URLs & Localisation SEO
- `/` : Accueil (Hero, Intro, Immersion, Projets à la une, Services, Témoignages, FAQ, CTA, Footer)
- `/projets` : Galerie complète des réalisations d'exception
- `/projets/:slug` : Pages détaillées des résidences (`oakroom-residence`, `ellhmart-penthouse`, `kyoto-sanctuary`, `foundry-loft`)
- `/a-propos` : Histoire, chiffres clés, savoir-faire et équipe Nyksys
- `/services` : Savoir-faire, space planning, ébénisterie et architecture
- `/contact` : Formulaire de contact et coordonnées Place Vendôme
- *Rétrocompatibilité :* `/about` et `/projects` sont pré-rendues et redirigées pour assurer la continuité des liens externes.
