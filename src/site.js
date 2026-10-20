// ============================================================
//  INFOS DE L'ENTREPRISE — le seul fichier à modifier pour un nouveau client.
//  Les valeurs entre [crochets] sont à remplacer par les vraies.
//  Icônes disponibles : voir src/components/Icons.jsx (i-drop, i-boiler, i-bath…)
// ============================================================

// PHOTOS : toutes vides pour l'instant. Un champ photo vide = un emplacement hachuré qui dit quoi y mettre.
// Pour en mettre une : "photos/chantier-1.jpg" (fichier dans public/photos, sans / au début) ou px(idPexels) → URL Pexels redimensionnée.
const px = (id, w = 900) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const site = {
  nom: "[Nom de l'entreprise]",
  initiale: "A", // lettre affichée dans le logo
  artisan: "[Prénom Nom]", // la personne qui intervient : affichée dans "Votre artisan" sur l'accueil
  metier: "[Plombier-chauffagiste]",
  activite: "[Plomberie · Chauffage]", // sous le nom, dans l'en-tête
  ville: "[Ville]",
  villeAvecPreposition: "[à Ville]", // pour les phrases : "plombier à Ville"
  depuis: "[xxxx]", // année de création, ex. "2012" : affichée "Artisan depuis 2012" (bandeau, haut de page, pied de page)
  promesse: "[Devis gratuit · Déplacement offert]", // court argument repris en haut de page

  // Ligne principale (heures ouvrées) — telephoneLien : format international, sans espaces
  telephone: "[01 00 00 00 00]",
  telephoneLien: "+33100000000",
  // Ligne urgences (soirs & week-ends)
  telephoneUrgence: "[06 00 00 00 00]",
  telephoneUrgenceLien: "+33600000000",

  email: "[contact@entreprise.fr]",
  adresse: "[Adresse, code postal, ville]",
  siret: "[000 000 000 00000]",

  // ---- Référencement Google (balisage généré au build par vite.config.js) et page Mentions légales ----
  adresseRue: "[Numéro et rue]", // adresse détaillée pour Google ; "adresse" ci-dessus est celle affichée sur le site
  codePostal: "[Code postal]",
  url: "[https://www.exemple.fr/]", // adresse du site une fois en ligne, avec le / final (sert aussi au sitemap et à robots.txt)
  image: "[URL d'une vraie photo]", // adresse complète d'une photo de l'artisan ou de l'utilitaire
  gammePrix: "[€€]",
  formeJuridique: "[EI / EURL / SARL…]",
  immatriculation: "[RCS ou Répertoire des métiers : ville et numéro]",
  tva: "[Numéro de TVA intracommunautaire]",
  directeurPublication: "[Prénom Nom]",
  hebergeur: "[Nom de l'hébergeur]",
  hebergeurCoordonnees: "[Adresse et téléphone de l'hébergeur]",
  conservationDonnees: "[X mois]", // durée de conservation des demandes envoyées par le formulaire

  // ---- Bloc confiance ----
  note: "[4,8]",
  nbAvis: "[XX]",
  sourceAvis: "[Google]",
  lienAvis: "#", // lien vers la fiche d'avis
  interventions: "[1 000]",
  delaiIntervention: "[1 h]", // délai moyen d'arrivée en urgence
  delaiDevis: "[48 h]", // délai d'envoi d'un devis pour des travaux
  qualifications: ["[Qualification / label]", "[Assurance décennale]", "[Devis gratuit]", "[Déplacement offert]"],

  // Horaires de la ligne principale : jour (0 = dimanche) → [heure début, heure fin]. Jour absent = fermé.
  horaires: { 1: [8, 19], 2: [8, 19], 3: [8, 19], 4: [8, 19], 5: [8, 19], 6: [9, 13] },
  horairesTexte: "[Lun – Ven : 8h – 19h · Sam : 9h – 13h]",

  communes: ["[Ville]", "[Commune voisine 1]", "[Commune voisine 2]", "[Commune voisine 3]", "[Commune voisine 4]"],

  // Envoi du formulaire de rappel : URL Formspree (https://formspree.io/f/xxxx).
  // Vide = ouvre l'application mail du visiteur avec la demande pré-remplie.
  formAction: "",

  // ---- Photos (exemples libres de droit Pexels / Unsplash, à remplacer par de vraies photos du client) ----
  // Haut de page d'accueil :
  //  "ambiance" = grande photo d'ambiance en fond, texte blanc par-dessus (photoAccueil)
  //  "artisan"  = texte à gauche, photo de l'artisan ou de son utilitaire à droite (photoArtisan).
  //               Seulement avec une VRAIE photo de l'artisan : avec une photo de banque d'images, garder "ambiance".
  heroStyle: "artisan", // Ambiance ou artisan, pour 

  // Photo de fond du haut de page (chaude, naturelle)
  photoAccueil: {
    src: "",
  },
  // Photos des deux cartes "Dépannage" / "Projets" et portrait de l'artisan (section "Pourquoi nous")
  photosBesoin: { urgence: "", projet: "" },
  // Haut des pages intérieures et images du "Comment ça marche" (une par étape, dans l'ordre)
  photosPages: { services: "", entreprise: "", contact: "", blog: "", mentions: "" },
  photosEtapes: ["", "", "", ""],
  photoArtisan: { src: "", alt: "Portrait de l'artisan dans son atelier" },

  citation: {
    texte: "[Une phrase de l'artisan sur sa façon de travailler.]",
    auteur: "[Prénom], [métier]",
  },

  // Avant / après d'un chantier (mêmes cadrages)
  realisation: {
    chantier: "[Type de chantier]",
    lieu: "[Ville]",
    duree: "[X jours]",
    travaux: "[Travaux réalisés]",
    avant: {
      src: "",
      alt: "Avant : salle de bain ancienne",
    },
    apres: {
      src: "",
      alt: "Après : salle de bain rénovée",
    },
    credit: "",
  },

  // ---- Choix du besoin (haut de page) : valeur = texte envoyé dans la demande ----
  problemes: {
    urgence: [
      { icone: "i-drop", titre: "Fuite d'eau", detail: "Goutte-à-goutte, tache au plafond" },
      { icone: "i-drain", titre: "Canalisation bouchée", detail: "Évier, douche qui s'écoule mal" },
      { icone: "i-wc", titre: "WC & chasse d'eau", detail: "Cuvette bouchée, réservoir qui coule", valeur: "WC bouché / chasse d'eau", service: "svc-debouchage" },
      { icone: "i-boiler", titre: "Chaudière en panne", detail: "Arrêt, mise en sécurité, bruit" },
      { icone: "i-tank", titre: "Plus d'eau chaude", detail: "Chauffe-eau, fuite au ballon" },
      { icone: "i-radiator", titre: "Radiateurs froids", detail: "Purge, désembouage, robinets" },
    ],
    projet: [
      { icone: "i-bath", titre: "Salle de bain", detail: "Rénovation, douche, sanitaires", valeur: "Rénovation salle de bain" },
      { icone: "i-boiler", titre: "Nouvelle chaudière", detail: "Remplacement, mise en service", valeur: "Remplacement de chaudière" },
      { icone: "i-tank", titre: "Nouveau chauffe-eau", detail: "Ballon électrique ou gaz" },
      { icone: "i-wrench", titre: "Entretien chaudière", detail: "Visite annuelle obligatoire" },
      { icone: "i-tap", titre: "Robinetterie", detail: "Mitigeur, évier, WC à remplacer", valeur: "Robinetterie / sanitaires" },
      { icone: "i-pipe", titre: "Tuyauterie", detail: "Plomb à remplacer, mise aux normes", valeur: "Tuyauterie / mise aux normes" },
    ],
  },

  // ---- Services et tarifs : mode "urgence" (Dépannage) ou "projet" (Travaux & entretien) ----
  // Les prix sont repris dans la demande (à côté de chaque problème) : un visiteur qui voit un prix appelle plus facilement.
  // prefixe vide = pas de prix, affiché en "Devis gratuit" (à éviter : mieux vaut une fourchette "à partir de")
  services: [
    { id: "svc-fuite", mode: "urgence", icone: "i-drop", titre: "Recherche & réparation de fuite", description: "Fuite apparente ou cachée, tache au plafond, compteur qui tourne : on localise et on répare.", prefixe: "à partir de", prix: "[XX] €", photo: "", demande: "Fuite d'eau" },
    { id: "svc-debouchage", mode: "urgence", icone: "i-wc", titre: "Débouchage canalisation & WC", description: "Évier, lavabo, douche, WC : débouchage sans abîmer vos tuyaux.", prefixe: "à partir de", prix: "[XX] €", photo: "", demande: "Canalisation bouchée" },
    { id: "svc-chaudiere", mode: "urgence", icone: "i-boiler", titre: "Dépannage chaudière", description: "Panne, mise en sécurité, pression qui chute : diagnostic et remise en route.", prefixe: "à partir de", prix: "[XX] €", photo: "", demande: "Chaudière en panne" },
    { id: "svc-eau-chaude", mode: "urgence", icone: "i-tank", titre: "Dépannage chauffe-eau", description: "Plus d'eau chaude, eau tiède, groupe de sécurité qui fuit.", prefixe: "à partir de", prix: "[XX] €", photo: "", demande: "Plus d'eau chaude" },
    { id: "svc-radiateurs", mode: "urgence", icone: "i-radiator", titre: "Radiateurs & chauffage", description: "Radiateurs froids ou bruyants, purge, désembouage, robinets thermostatiques.", prefixe: "à partir de", prix: "[XX] €", photo: "", demande: "Radiateurs froids" },
    { id: "svc-entretien", mode: "projet", icone: "i-wrench", titre: "Entretien annuel chaudière", description: "Visite obligatoire, nettoyage, contrôle de sécurité et attestation remise.", prefixe: "forfait", prix: "[XX] €", photo: "", demande: "Entretien chaudière" },
    { id: "svc-robinetterie", mode: "projet", icone: "i-tap", titre: "Robinetterie & sanitaires", description: "Remplacement de mitigeur, robinet, évier, WC ou mécanisme de chasse.", prefixe: "à partir de", prix: "[XX] €", photo: "", demande: "Robinetterie / sanitaires" },
    { id: "svc-chaudiere-neuve", mode: "projet", icone: "i-boiler", titre: "Remplacement de chaudière", description: "Conseil sur le modèle, dépose de l'ancienne, installation et mise en service.", prefixe: "à partir de", prix: "[X XXX] €", photo: "", demande: "Remplacement de chaudière" },
    { id: "svc-sdb", mode: "projet", icone: "i-bath", titre: "Rénovation salle de bain", description: "Douche, baignoire, meubles vasque : toute la plomberie de votre nouvelle salle de bain.", prefixe: "à partir de", prix: "[X XXX] €", photo: "", demande: "Rénovation salle de bain" },
    { id: "svc-tuyauterie", mode: "projet", icone: "i-pipe", titre: "Tuyauterie & mise aux normes", description: "Remplacement des tuyaux en plomb, reprise d'installation, mise aux normes.", prefixe: "à partir de", prix: "[XXX] €", photo: "", demande: "Tuyauterie / mise aux normes" },
  ],
  inclus: ["[Déplacement offert]", "Devis gratuit et écrit", "Prix confirmé avant de commencer", "[Majoration soirs & week-ends : à préciser]"],

  raisons: [
    { icone: "i-bolt", titre: "Réactif", texte: "Intervention rapide en urgence, et une ligne dédiée les soirs et week-ends." },
    { icone: "i-award", titre: "[Expertise]", texte: "[Qualification ou spécialité de l'artisan, ex. technicien agréé d'une marque de chaudières.]" },
    { icone: "i-pipe", titre: "Toutes les installations", texte: "[Types d'installations traitées : cuivre, PER, multicouche…]" },
    { icone: "i-euro", titre: "Prix clairs", texte: "Prix annoncé et devis écrit avant de commencer. Pas de mauvaise surprise sur la facture." },
    { icone: "i-chat", titre: "Conseils de pro", texte: "On vous explique la panne et les solutions, pour décider en connaissance de cause." },
    { icone: "i-building", titre: "Particuliers & pros", texte: "Appartements, maisons, commerces : on s'adapte à votre situation." },
  ],

  garanties: [
    { icone: "i-doc", titre: "Devis gratuit", texte: "Un devis écrit et réellement gratuit, avant toute intervention." },
    { icone: "i-map", titre: "[Déplacement offert]", texte: "[Conditions de déplacement dans la zone d'intervention.]" },
    { icone: "i-award", titre: "[Qualifications]", texte: "[Labels, qualifications et formations du professionnel.]" },
    { icone: "i-time", titre: "Délais respectés", texte: "Le respect des engagements et des délais annoncés." },
    { icone: "i-shield", titre: "[Assurance décennale]", texte: "[Nom de l'assureur et numéro de contrat, disponibles sur demande.]" },
    { icone: "i-seal", titre: "[Garantie travaux]", texte: "[Pièces et main-d'œuvre garanties X mois.]" },
  ],

  // ---- Réalisations : quelques chantiers dans chaque domaine (service = id d'un service ci-dessus) ----
  // Affichées sur l'accueil et sous chaque série de services. 3-4 dépannages + 1-2 entretiens/travaux suffisent. VRAIES photos du client.
  realisations: [
    { service: "svc-fuite", titre: "[Fuite sous évier réparée]", lieu: "[Commune]", detail: "[Un samedi matin, réparé en 45 min]", photo: "" },
    { service: "svc-debouchage", titre: "[Évacuation de douche débouchée]", lieu: "[Commune]", detail: "[Un soir de semaine, en 30 min]", photo: "" },
    { service: "svc-chaudiere", titre: "[Chaudière remise en route]", lieu: "[Commune]", detail: "[Pression rétablie, pièce changée le jour même]", photo: "" },
    { service: "svc-entretien", titre: "[Entretien annuel et attestation]", lieu: "[Commune]", detail: "[Contrat d'entretien depuis 3 ans]", photo: "" },
  ],

  // À remplacer par de vrais avis copiés depuis la fiche Google / PagesJaunes
  avis: [
    { texte: "[Texte d'un vrai avis client, 2 à 4 lignes.]", auteur: "[Prénom N.]", commune: "[Commune]", sujet: "[Type d'intervention]", photo: "" },
    { texte: "[Texte d'un vrai avis client, 2 à 4 lignes.]", auteur: "[Prénom N.]", commune: "[Commune]", sujet: "[Type d'intervention]", photo: "" },
    { texte: "[Texte d'un vrai avis client, 2 à 4 lignes.]", auteur: "[Prénom N.]", commune: "[Commune]", sujet: "[Type d'intervention]", photo: "" },
  ],

  // Questions fréquentes (accueil et page Contact). Les valeurs entre crochets sont aussi à remplir ici.
  faq: [
    { question: "Le devis est-il vraiment gratuit ?", reponse: "Oui. Pour les dépannages, le prix vous est annoncé avant que nous intervenions. Pour les travaux, nous vous remettons un devis écrit et gratuit, sous [48 h], sans engagement." },
    { question: "Le déplacement est-il facturé ?", reponse: "[Non, le déplacement est offert à [Ville] et dans les communes voisines.] Si votre adresse est plus éloignée, nous vous le disons au téléphone, avant de venir." },
    { question: "Intervenez-vous le soir et le week-end ?", reponse: "Oui, pour les urgences : appelez le [06 00 00 00 00]. [Une majoration peut s'appliquer, elle vous est annoncée avant l'intervention.]" },
    { question: "Sur quelles marques de chaudière intervenez-vous ?", reponse: "[Sur toutes les grandes marques.] Si vous n'êtes pas sûr, décrivez-nous votre panne ou envoyez-nous une photo de la plaque de l'appareil." },
    { question: "Combien de temps faut-il pour que vous veniez ?", reponse: "En urgence, en [1 h] en moyenne à [Ville] et alentours. Pour des travaux, nous convenons d'un rendez-vous qui vous arrange, en général sous [48 h]." },
  ],

  // ---- Blog : articles d'exemple, à relire et adapter par l'artisan ----
  // slug = nom dans l'adresse (blog-slug.html) ; contenu = un paragraphe par ligne
  articles: [
    {
      slug: "fuite-eau-bons-reflexes",
      titre: "Fuite d'eau : les bons réflexes en attendant le plombier",
      date: "2026-01-12",
      photo: "",
      resume: "Couper l'eau, protéger l'électricité, prendre des photos : ce qu'il faut faire dans les premières minutes.",
      contenu: [
        "Le premier geste est de couper l'arrivée d'eau : le robinet d'arrêt se trouve en général près du compteur, sous l'évier ou dans un placard technique.",
        "Si l'eau approche des prises ou d'un tableau électrique, coupez le disjoncteur général avant de toucher à quoi que ce soit.",
        "Épongez ce que vous pouvez et prenez des photos des dégâts : elles serviront pour votre assurance et nous aideront à préparer l'intervention.",
        "En appartement, prévenez votre voisin du dessous et le syndic. Puis appelez-nous : on vous dit au téléphone si l'intervention est urgente.",
      ],
    },
    {
      slug: "entretien-chaudiere",
      titre: "Entretien de chaudière : pourquoi chaque année ?",
      date: "2026-02-03",
      photo: "",
      resume: "Une obligation pour les chaudières gaz, fioul et bois, mais surtout moins de pannes et une facture plus légère.",
      contenu: [
        "L'entretien annuel est obligatoire pour les chaudières gaz, fioul, bois ou charbon de 4 à 400 kW. Une attestation vous est remise à la fin de la visite.",
        "Le technicien nettoie le corps de chauffe et le brûleur, contrôle les organes de sécurité et mesure le taux de monoxyde de carbone.",
        "Une chaudière bien réglée consomme moins et tombe moins souvent en panne, surtout au premier jour de froid.",
        "[Préciser ici le prix du forfait entretien et la possibilité d'un contrat annuel.]",
      ],
    },
    {
      slug: "remplacer-chauffe-eau",
      titre: "Chauffe-eau : quand faut-il le remplacer ?",
      date: "2026-03-10",
      photo: "",
      resume: "Eau tiède, bruits, traces de rouille : les signes qui doivent alerter, et ce qu'on peut encore réparer.",
      contenu: [
        "Un chauffe-eau électrique dure en moyenne 10 à 15 ans, selon la dureté de l'eau et l'entretien.",
        "Eau qui chauffe moins, bruits de crépitement, eau rouillée ou fuite au pied du ballon : ce sont des signes d'usure à faire vérifier.",
        "Souvent, une pièce suffit (résistance, thermostat, groupe de sécurité). Quand la cuve elle-même fuit, il faut remplacer l'appareil.",
        "[Préciser ici les modèles posés et le délai habituel de remplacement.]",
      ],
    },
  ],

  // Logos : remplacer par des images dans src/components/Brands.jsx si besoin
  marques: ["[Marque 1]", "[Marque 2]", "[Marque 3]", "[Marque 4]", "[Marque 5]", "[Marque 6]"],
};
