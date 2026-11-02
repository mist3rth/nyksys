# 📝 TODO — Nyksys

## 🔒 Sécurité & Headers HTTP
- [x] Définir les en-têtes HTTP requis pour la note A/A+ sur securityheaders.com
- [x] Configurer `vercel.json` avec CSP, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy
- [ ] Valider le déploiement sur Vercel et vérifier le score sur https://securityheaders.com/

## ⚡ Rendu & SEO (BMAD)
- [ ] Remplacer le script de prerender Puppeteer défaillant par un véritable pré-rendu statique SSG (Node / `react-dom/server`)
- [ ] Générer le HTML statique pour chaque route publique (`/`, `/services`, `/about`, `/contact`, `/projects`, projets individuels)
- [ ] Vérifier que le contenu textuel et sémantique (Hn) est visible au « Afficher la source » (Ctrl+U)

## ♿ Accessibilité (A11Y)
- [x] Navigation au clavier et lien d'évitement (`Skip to main content`)
- [ ] Audit contraste des couleurs et conformité WCAG AA
