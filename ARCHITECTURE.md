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
- **Permissions-Policy :** `camera=(), microphone=(), geolocation=(), payment=(), usb=(), vr=(), interest-cohort=(), browsing-topics=()`
- **X-XSS-Protection :** `1; mode=block`

### 2.2 Stratégie de Rendu (SSG vs CSR)
- **Actuel :** CSR (SPA) avec script de fallback Puppeteer qui échoue sur conteneurs CI.
- **Cible :** Véritable Static Site Generation (SSG) sans dépendance navigateur (via `react-dom/server` ou SSG Vite dédié).
