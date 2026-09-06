export interface ProjectDetail {
  slug: string;
  titleLine1: string;
  titleLine2: string;
  fullTitle: string;
  heroImage: string;
  altText: string;
  infoText: string;
  date: string;
  status: string;
  location: string;
  size: string;
  client: string;
  sector: string;
  highlightImage: string;
  galleryPair1: {
    left: string;
    right: string;
    altLeft?: string;
    altRight?: string;
  };
  galleryPair2: {
    left: string;
    right: string;
    altLeft?: string;
    altRight?: string;
  };
  wideAccentImage?: string;
  nextProjectSlug: string;
}

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    slug: 'oakroom-residence',
    titleLine1: 'Oakroom',
    titleLine2: 'Residence',
    fullTitle: 'Oakroom Residence',
    heroImage: '/oakroom-residence.webp',
    altText: 'Oakroom Residence - Salon panoramique en bois de chêne et vue sur mer',
    infoText:
      "Oakroom Residence explore l'harmonie entre matières brutes nobles et art de vivre contemporain. Conçu pour un client privé en quête d'un luxe discret, l'espace associe finitions en chêne chaleureux, surfaces minérales adoucies et mise en lumière subtilement étagée. Chaque volume a été rigoureusement composé pour sublimer la fluidité, le confort et la continuité visuelle, offrant une demeure à la fois ancrée et aérienne.",
    date: '2026',
    status: 'Livré',
    location: 'Lagos, Nigeria',
    size: '420m²',
    client: 'Privé',
    sector: "Résidentiel d'Exception",
    highlightImage: '/oakroom-large.webp',
    galleryPair1: {
      left: '/p1-salon.webp',
      right: '/p1cuisinne.webp',
      altLeft: 'Oakroom Residence - Salon baigné de lumière naturelle et mobilier sur mesure',
      altRight: 'Oakroom Residence - Cuisine et finitions raffinées en bois et travertin',
    },
    galleryPair2: {
      left: '/p1-room.webp',
      right: '/p1-decor.webp',
      altLeft: 'Oakroom Residence - Chambre parentale avec tête de lit sculpturale et textures douces',
      altRight: 'Oakroom Residence - Détail de décoration d’exception et finitions soignées',
    },
    wideAccentImage: '/fullwidth-architecture.webp',
    nextProjectSlug: 'ellhmart-penthouse',
  },
  {
    slug: 'ellhmart-penthouse',
    titleLine1: 'Ellhmart',
    titleLine2: 'Penthouse',
    fullTitle: 'Ellhmart Penthouse',
    heroImage: '/ellhmart-penthouse.webp',
    altText: 'Ellhmart Penthouse - Salon sculptural et boiseries nobles',
    infoText:
      'Perché au-dessus de la métropole, Ellhmart Penthouse réinvente les codes du luxe vertical à travers des volumes généreux, des boiseries chaleureuses et un jeu d’éclairages feutrés. Chaque perspective a été dessinée pour cadrer les panoramas urbains tout en offrant un cocon intime et raffiné, alliant marbre sculpté, velours texturé et laiton brossé.',
    date: '2025',
    status: 'Livré',
    location: 'Genève, Suisse',
    size: '380m²',
    client: 'Famille Ellhmart',
    sector: 'Penthouse d’Exception',
    highlightImage: '/p2-vue.webp',
    galleryPair1: {
      left: '/p2-cuisine.webp',
      right: '/p2-decor.webp',
      altLeft: 'Cuisine haut de gamme avec îlot sculptural et finitions noyer',
      altRight: 'Détails décoratifs et agencement sur mesure',
    },
    galleryPair2: {
      left: '/p2-room.webp',
      right: '/p2-sdb.webp',
      altLeft: 'Master suite avec perspective soignée et ambiance feutrée',
      altRight: 'Salle de bain raffinée alliant marbre et robinetterie d’exception',
    },
    wideAccentImage: '/fullwidth-second.webp',
    nextProjectSlug: 'kyoto-sanctuary',
  },
  {
    slug: 'kyoto-sanctuary',
    titleLine1: 'Kyoto',
    titleLine2: 'Sanctuary',
    fullTitle: 'Kyoto Sanctuary',
    heroImage: '/kyoto.webp',
    altText: 'Kyoto Sanctuary - Sérénité et architecture japonaise contemporaine',
    infoText:
      'Inspiré par la pureté de l’esthétique wabi-sabi et la rigueur de l’architecture contemporaine, Kyoto Sanctuary marie micro-ciment lissé, cloisons en chêne clair et lumière zénithale. Une composition dépouillée où chaque vide invite à la quiétude, créant une transition douce entre les pièces de vie et les jardins intérieurs.',
    date: '2025',
    status: 'Livré',
    location: 'Kyoto, Japon',
    size: '290m²',
    client: 'Résidence Privée',
    sector: 'Pavillon Zen',
    highlightImage: '/p3-large.webp',
    galleryPair1: {
      left: '/p3-room.webp',
      right: '/p3-desk.webp',
      altLeft: 'Espace de vie épuré avec menuiseries sur mesure en bois naturel',
      altRight: 'Bureau et espace de contemplation aux lignes zen',
    },
    galleryPair2: {
      left: '/p3-decor.webp',
      right: '/p3-ambiance.webp',
      altLeft: 'Détails d’artisanat et matériaux minéraux wabi-sabi',
      altRight: 'Perspective architecturale lumineuse et ouverture sur l’extérieur',
    },
    wideAccentImage: '/fullwidth-third.webp',
    nextProjectSlug: 'foundry-loft',
  },
  {
    slug: 'foundry-loft',
    titleLine1: 'Foundry',
    titleLine2: 'Loft',
    fullTitle: 'Foundry Loft',
    heroImage: '/foundry-loft.webp',
    altText: 'Foundry Loft - Volumes monumentaux et finitions industrielles raffinées',
    infoText:
      'Réhabilitation d’une ancienne fonderie industrielle en un loft d’artiste d’exception. Préservation des structures en acier noirci et des briques apparentes d’origine, sublimées par des menuiseries sur mesure en noyer massif, de hauts plafonds cathédrale et un agencement d’espaces fluides baignés de lumière.',
    date: '2024',
    status: 'Livré',
    location: 'Brooklyn, New York',
    size: '450m²',
    client: 'Atelier & Collection',
    sector: 'Loft Industriel & Galerie',
    highlightImage: '/p4-large.webp',
    galleryPair1: {
      left: '/p4-cuisine.webp',
      right: '/p4-rom.webp',
      altLeft: 'Cuisine d’atelier ouverte avec îlot central et finitions industrielles',
      altRight: 'Chambre et suite loft baignée de lumière naturelle',
    },
    galleryPair2: {
      left: '/p4-sdb.webp',
      right: '/p4-roof.webp',
      altLeft: 'Salle de bain contemporaine avec verrière et béton ciré',
      altRight: 'Rooftop et terrasse avec vue panoramique urbaine',
    },
    wideAccentImage: '/fullwidth-architecture.webp',
    nextProjectSlug: 'oakroom-residence',
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  if (!slug) return undefined;
  const clean = slug
    .toLowerCase()
    .replace(/^#\/?/, '')
    .replace(/^\/?projects\/?/, '')
    .replace(/^\//, '')
    .trim();

  // Direct match
  const direct = PROJECTS_DATA.find((p) => p.slug === clean);
  if (direct) return direct;

  // Alias matches
  if (clean.includes('oakroom')) return PROJECTS_DATA.find((p) => p.slug === 'oakroom-residence');
  if (clean.includes('elhmart') || clean.includes('ellhmart')) return PROJECTS_DATA.find((p) => p.slug === 'ellhmart-penthouse');
  if (clean.includes('kyoto')) return PROJECTS_DATA.find((p) => p.slug === 'kyoto-sanctuary');
  if (clean.includes('foundry')) return PROJECTS_DATA.find((p) => p.slug === 'foundry-loft');

  return undefined;
}
