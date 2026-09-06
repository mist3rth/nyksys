import { Project, ServiceItem } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'tribeca-penthouse',
    title: 'Le Penthouse Tribeca',
    category: 'Architecture Résidentielle',
    location: 'Tribeca, New York',
    year: '2025',
    area: '480 m²',
    coverImage: '/oakroom-residence.webp',
    galleryImages: [
      '/oakroom-residence.webp',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Un sanctuaire surélevé 60 étages au-dessus de Manhattan. Conçu autour de la chorégraphie de la lumière, de mobilier bas sur-mesure et de matières tactiles authentiques qui apaisent le rythme urbain.',
    materials: ['Laine Bouclée', 'Bronze Patiné', 'Chêne Blanc Massif', 'Travertin Adouci']
  },
  {
    id: 'villa-bellini',
    title: 'Villa Bellini',
    category: 'Restauration Historique & Intérieurs',
    location: 'Lac de Côme, Italie',
    year: '2024',
    area: '720 m²',
    coverImage: '/ellhmart-penthouse.webp',
    galleryImages: [
      '/ellhmart-penthouse.webp',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Préservation des fresques du XIXe siècle associée à une circulation contemporaine fluide, des îlots de cuisine monolithiques et des finitions en laiton brut.',
    materials: ['Terrazzo Vénitien Restauré', 'Marbre de Lasa', 'Laiton Brut Patiné', 'Lin Belge']
  },
  {
    id: 'kyoto-pavilion',
    title: 'Sanctuaire de Kyoto',
    category: 'Résidence Contemporaine',
    location: 'Higashiyama, Kyoto',
    year: '2024',
    area: '360 m²',
    coverImage: '/kyoto.webp',
    galleryImages: [
      '/kyoto.webp',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Une exploration des ombres, des proportions et du silence acoustique. Parements de cèdre brûlé (shou sugi ban), parois de rangement dissimulées et cadrages sur le jardin.',
    materials: ['Bois de Hinoki', 'Papier Washi Artisanal', 'Pierre de Basalte', 'Cèdre Brûlé']
  },
  {
    id: 'chelsea-loft',
    title: 'Loft Foundry Chelsea',
    category: 'Rénovation d’Exception',
    location: 'Chelsea, New York',
    year: '2023',
    area: '410 m²',
    coverImage: '/foundry-loft.webp',
    galleryImages: [
      '/foundry-loft.webp',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Transformation d’un ancien atelier de fonderie en un havre résidentiel chaleureux avec cloisons suspendues en acier noirci et îlots en stéatite.',
    materials: ['Acier Noirci', 'Pierre de Stéatite', 'Pin de Récupération', 'Calcaire Vieilli']
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    title: 'Architecture d’Intérieur Complète',
    subtitle: 'De la restructuration spatiale à la livraison clés en main',
    description: 'Nous orchestrons les modifications structurelles complexes, la chorégraphie des éclairages et plafonds, l’ingénierie acoustique et les transitions d’espaces sur-mesure.',
    deliverables: [
      'Étude spatiale architecturale & modélisation 3D',
      'Détails techniques d’exécution & dossiers d’autorisation',
      'Conception lumière & études acoustiques',
      'Direction des travaux et coordination des artisans d’art'
    ]
  },
  {
    number: '02',
    title: 'Ébénisterie & Mobilier Sur-Mesure',
    subtitle: 'Pièces d’artisanat uniques conçues exclusivement pour le lieu',
    description: 'Chaque résidence accueille nos assises signature, enfilades sculptées en bois massif, agencements invisibles et éléments minéraux façonnés sur mesure.',
    deliverables: [
      'Plans de calepinage & dessins d’ébénisterie d’art',
      'Sourcing direct en carrières et forêts sélectionnées',
      'Prototypage & validation ergonomique',
      'Finitions manuelles & installation soignée'
    ]
  },
  {
    number: '03',
    title: 'Conseil en Art & Objets Curatés',
    subtitle: 'Une sélection minutieuse d’œuvres pour parfaire l’harmonie du lieu',
    description: 'Collaboration avec des galeries internationales, céramistes et sculpteurs pour dénicher des pièces vintage historiques ou commander des œuvres in situ.',
    deliverables: [
      'Stratégie d’acquisition artistique & traçabilité',
      'Commandes d’œuvres d’art spécifiques au projet',
      'Curation de pièces de céramique, livres rares et textiles',
      'Éclairage muséographique des collections'
    ]
  },
  {
    number: '04',
    title: 'Stylisme & Livraison Clés en Main',
    subtitle: 'Un emménagement parfait jusque dans le moindre détail sensoriel',
    description: 'Un accompagnement complet où chaque coussin, scénario lumineux, ambiance sonore et objet est disposé avec minutie avant votre arrivée.',
    deliverables: [
      'Arts de la table, linge de maison et accessoires raffinés',
      'Calibrage personnalisé des ambiances domotiques et lumineuses',
      'Création d’une signature olfactive pour la maison',
      'Livret d’art de vivre et d’entretien du lieu'
    ]
  }
];
