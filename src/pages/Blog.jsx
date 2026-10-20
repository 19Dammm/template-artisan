import { useEffect } from "react";
import { site } from "../site.js";
import Photo from "../components/Photo.jsx";
import PageHero from "../components/PageHero.jsx";
import { CtaBand } from "../components/Sections.jsx";

const dateFr = (d) => new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

// Liste des articles (blog.html), ou un article (blog-<slug>.html, fichier créé au build par prerender.mjs)
export default function Blog({ article: slug }) {
  const article = site.articles.find((a) => a.slug === slug);

  useEffect(() => {
    if (article) document.title = `${article.titre} — ${site.nom}`;
  }, [article]);

  if (article)
    return (
      <>
        <PageHero kicker="Blog" titre={article.titre} texte={dateFr(article.date)} photo={article.photo} />
        <section className="section">
          <div className="container article">
            {article.contenu.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>
              <a className="link-arrow" href="blog.html">
                Tous les articles
              </a>
            </p>
          </div>
        </section>
        <CtaBand />
      </>
    );

  return (
    <>
      <PageHero
        kicker="Blog"
        titre="Conseils d'artisan"
        texte="Entretien, dépannage, travaux : de quoi garder une installation en bonne santé."
        photo={site.photosPages.blog}
      />
      <section className="section">
        <div className="container blog-grid">
          {site.articles.map((a) => (
            <a className="blog-card" href={"blog-" + a.slug + ".html"} key={a.slug}>
              <Photo src={a.photo} alt="" loading="lazy" label="Photo de l'article" />
              <div className="blog-card-body">
                <p className="blog-date">{dateFr(a.date)}</p>
                <h2>{a.titre}</h2>
                <p>{a.resume}</p>
                <span className="link-arrow">Lire l'article</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
