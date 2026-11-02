# 📝 TODO — Nyksys

## 🔒 Sécurité & Headers HTTP
- [x] Définir les en-têtes HTTP requis pour la note A/A+ sur securityheaders.com
- [x] Configurer `vercel.json` avec CSP, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, X-XSS-Protection et cleanUrls
- [ ] Valider le déploiement sur Vercel et vérifier le score sur https://securityheaders.com/

## ⚡ Rendu & SEO (BMAD)
- [x] Remplacer le script de prerender Puppeteer défaillant par un véritable SSG ultra-rapide et déterministe (Node / `react-dom/server`)
- [x] Rendre en SSG toutes les routes publiques (`/`, `/services`, `/a-propos`, `/contact`, `/projets`, et chaque projet individuel)
- [x] Conserver les routes rétrocompatibles (`/about`, `/projects`)
- [x] Traduire les URLs en français (`/projets`, `/a-propos`) pour un meilleur référencement
- [x] Traduire la section Équipe de la page À propos (« Les esprits derrière Nyksys »)
- [x] Valider que le contenu sémantique complet (Hn, textes, JSON-LD) est généré dans le HTML brut (`dist/*/index.html`)

## ♿ Accessibilité (A11Y)
- [x] Navigation au clavier et lien d'évitement (`Skip to main content`)
- [x] Support des attributs aria-label et rôles sémantiques
- [ ] Audit contraste des couleurs et conformité WCAG AA
