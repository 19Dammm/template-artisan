// Lancé par "npm run build", après les deux builds Vite.
// Écrit le contenu de chaque page dans son fichier dist/*.html : Google le lit sans exécuter JavaScript.
// Crée aussi un fichier par article du blog (dist/blog-<slug>.html), à partir de site.articles,
// puis sitemap.xml (la liste des pages pour Google) et robots.txt (qui indique où est le sitemap).
import fs from "node:fs";
import { render, site } from "./dist-ssr/entry-server.js";

const attr = (s) => s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

// Titre et description de l'article : onglet, résultat Google, partage sur les réseaux
const head = (html, titre, description) =>
  html
    .replace(/<title>[^<]*<\/title>/, () => `<title>${attr(titre)}</title>`)
    .replace(/(name="description"\s+content=")[^"]*/, (_, debut) => debut + attr(description))
    .replace(/(property="og:title" content=")[^"]*/, (_, debut) => debut + attr(titre))
    .replace(/(property="og:description" content=")[^"]*/, (_, debut) => debut + attr(description));

const fill = (fichier, html, article) => {
  if (!html.includes('<div id="root"></div>')) throw new Error(fichier + ' : <div id="root"></div> introuvable');
  const page = html.match(/data-page="([^"]+)"/)[1];
  const contenu = render(page, article);
  if (contenu.length < 1000) throw new Error(fichier + " : page presque vide après rendu");
  fs.writeFileSync("dist/" + fichier, html.replace('<div id="root"></div>', () => `<div id="root">${contenu}</div>`));
  console.log("  pré-rendu :", fichier);
};

for (const fichier of fs.readdirSync("dist").filter((f) => f.endsWith(".html"))) {
  const html = fs.readFileSync("dist/" + fichier, "utf8");
  fill(fichier, html);
  if (fichier === "blog.html")
    for (const a of site.articles) fill(`blog-${a.slug}.html`, head(html, `${a.titre} — ${site.nom}`, a.resume), a.slug);
}

// Adresses complètes à partir de site.url ; l'accueil est l'adresse du site elle-même
const pages = fs.readdirSync("dist").filter((f) => f.endsWith(".html"));
const adresse = (f) => site.url + (f === "index.html" ? "" : f);
fs.writeFileSync(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((f) => `  <url><loc>${attr(adresse(f))}</loc></url>`).join("\n")}
</urlset>
`
);
fs.writeFileSync("dist/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${site.url}sitemap.xml\n`);
console.log("  sitemap.xml :", pages.length, "pages ; robots.txt");

fs.rmSync("dist-ssr", { recursive: true, force: true }); // build intermédiaire, plus utile
