# 📋 PRD — Nyksys Architecture d'Intérieur

## 1. Vision du Produit
Nyksys est une vitrine web haut de gamme pour un studio d'architecture d'intérieur de prestige (Paris, Genève, New York).
L'expérience utilisateur doit refléter le luxe, le raffinement, la fluidité des animations (Lenis, GSAP, Motion) et l'intemporalité des espaces conçus.

## 2. Objectifs & Exigences Clés

### 2.1 Sécurité (Grade A / A+)
- **SecurityHeaders.com :** Atteindre la note maximale **A** (voire **A+**).
- Implémentation stricte des headers HTTP :
  - `Content-Security-Policy` (CSP)
  - `Strict-Transport-Security` (HSTS avec preload)
  - `X-Content-Type-Options` (nosniff)
  - `X-Frame-Options` (DENY)
  - `Referrer-Policy` (strict-origin-when-cross-origin)
  - `Permissions-Policy` (désactivation des API sensibles : camera, micro, géolocalisation)

### 2.2 Performance & Rendu (Règle BMAD SEO)
- **SSG / Prerendering :** Rendu statique de toutes les routes publiques (`/`, `/services`, `/about`, `/contact`, `/projects`, `/projects/:slug`).
- Aucun contenu vide au premier chargement (« Afficher la source » doit contenir le texte complet et les balises Hn).
- Métriques Web Vitals : LCP < 2.5s, CLS < 0.1, FID/INP optimisé.

### 2.3 Accessibilité & SEO
- WCAG AA : Support clavier complet, focus visible, lien d'évitement (`Skip to main content`).
- Données structurées Schema.org (`InteriorDesignStudio`, `WebSite`).
- Balises Open Graph et Twitter Cards complètes.
