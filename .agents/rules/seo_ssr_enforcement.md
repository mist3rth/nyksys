# RÈGLE ABSOLUE POUR TOUT PROJET WEB PUBLIC (SEO)

**INTERDICTION** d'utiliser un rendu purement client (CSR / SPA classique). 
Pour des raisons de référencement (SEO) et de performances, le projet **DOIT impérativement** utiliser une génération statique (SSG) ou du Server-Side Rendering (SSR) via des outils comme Next.js, Astro, ou vite-ssg.

L'IA ne doit pas initialiser ou configurer un projet en rendu purement client sans l'accord explicite de l'utilisateur pour un dashboard privé par exemple.
