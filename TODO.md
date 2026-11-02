# 📝 TODO — Nyksys

## 🔒 Sécurité & Headers HTTP
- [x] Définir les en-têtes HTTP requis pour la note A/A+ sur securityheaders.com
- [x] Configurer `vercel.json` avec CSP, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, X-XSS-Protection et cleanUrls
- [x] Valider le déploiement sur Vercel et vérifier les en-têtes de sécurité en production

## ⚡ Rendu & SEO (BMAD)
- [x] Remplacer le script de prerender Puppeteer défaillant par un véritable SSG ultra-rapide et déterministe (Node / `react-dom/server`)
- [x] Rendre en SSG toutes les routes publiques (`/`, `/services`, `/a-propos`, `/contact`, `/projets`, et chaque projet individuel)
- [x] Conserver les routes rétrocompatibles (`/about`, `/projects`)
- [x] Traduire les URLs en français (`/projets`, `/a-propos`) pour un meilleur référencement
- [x] Traduire la section Équipe de la page À propos (« Les esprits derrière Nyksys »)
- [x] Valider que le contenu sémantique complet (Hn, textes, JSON-LD) est généré dans le HTML brut (`dist/*/index.html`)
- [x] Générer `sitemap.xml` complet avec toutes les routes françaises
- [x] Générer `robots.txt` avec référence vers le sitemap
- [x] Générer `llms.txt` standard (GEO / IA search engines)

## 📱 Ergonomie & Responsive Hauteur (Viewport Height)
- [x] Supprimer les `min-h-[720px]` rigides qui provoquaient l'écrasement de la phrase inférieure sur fenêtres compactes
- [x] Implémenter des règles de mise à l'échelle typographique adaptatives en hauteur (`@media (max-height: 820px)`, `700px`, `580px`)
- [x] Harmoniser tous les heros (`HeroSection`, `AboutHeroSection`, `ProjectsHeroSection`, `ContactHeroSection`, `ProjectHeroSection`)

## ♿ Accessibilité (A11Y)
- [x] Navigation au clavier et lien d'évitement (`Skip to main content`)
- [x] Support des attributs aria-label et rôles sémantiques
- [ ] Audit contraste des couleurs et conformité WCAG AA
