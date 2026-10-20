import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { site } from "./src/site.js";

// Une page HTML par rubrique (voir data-page dans chaque fichier et src/main.jsx)
const PAGES = ["index", "services", "entreprise", "contact", "blog", "mentions-legales"];

// Balisage "entreprise locale" (schema.org) pour Google, construit depuis site.js.
// Écrit dans le HTML à la place de <!-- donnees-structurees --> : Google le lit sans avoir à exécuter React.
const JOURS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const hh = (h) => String(Math.floor(h)).padStart(2, "0") + ":" + String(Math.round((h % 1) * 60)).padStart(2, "0");

function entrepriseLocale(description) {
  // Jours aux mêmes horaires regroupés : lundi-vendredi 08:00-19:00, samedi 09:00-13:00
  const plages = {};
  for (const [jour, [debut, fin]] of Object.entries(site.horaires)) {
    plages[debut + "-" + fin] ||= { "@type": "OpeningHoursSpecification", dayOfWeek: [], opens: hh(debut), closes: hh(fin) };
    plages[debut + "-" + fin].dayOfWeek.push(JOURS[jour]);
  }
  // Pas d'aggregateRating tant qu'il n'y a pas de vrais avis : Google pénalise les notes inventées
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: site.nom,
    description,
    telephone: site.telephone,
    email: site.email,
    url: site.url,
    image: site.image,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.adresseRue,
      postalCode: site.codePostal,
      addressLocality: site.ville,
      addressCountry: "FR",
    },
    areaServed: site.communes.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: Object.values(plages),
    priceRange: site.gammePrix,
    foundingDate: site.depuis,
  };
}

const donneesStructurees = {
  name: "donnees-structurees",
  transformIndexHtml(html) {
    if (!html.includes("<!-- donnees-structurees -->")) return html;
    const description = html.match(/name="description"\s+content="([^"]*)"/)[1];
    const json = JSON.stringify(entrepriseLocale(description), null, 2).replaceAll("<", "\\u003c");
    return html.replace("<!-- donnees-structurees -->", `<script type="application/ld+json">\n${json}\n    </script>`);
  },
};

// En dev, blog-<slug>.html n'existe pas (créé au build) : on sert blog.html, qui lit le slug dans l'adresse
const articlesEnDev = {
  name: "articles-en-dev",
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (/^\/blog-[\w-]+\.html/.test(req.url)) req.url = "/blog.html";
      next();
    });
  },
};

export default defineConfig({
  base: "./", // liens relatifs : le site fonctionne aussi dans un sous-dossier
  plugins: [react(), donneesStructurees, articlesEnDev],
  build: {
    rollupOptions: {
      input: Object.fromEntries(PAGES.map((p) => [p, fileURLToPath(new URL(p + ".html", import.meta.url))])),
    },
  },
});
