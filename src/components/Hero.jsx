import { site } from "../site.js";
import { ouvert, telNow, telNowHref } from "../phone.js";
import Photo from "./Photo.jsx";

// Deux mises en page, au choix dans site.js (heroStyle) :
//  "ambiance" : photo plein cadre et texte blanc par-dessus
//  "artisan"  : texte à gauche, vraie photo de l'artisan à droite avec sa disponibilité
// Le contenu (h1 → sous-titre → 2 boutons → note) est le même dans les deux cas.
function Content() {
  return (
    <>
      <p className="kicker hero-metier">
        {site.metier} {site.villeAvecPreposition}
      </p>
      <h1>
        Plombier &  Chauffagiste,
        <br />
        tout coule de source.
      </h1>
      <p className="hero-sub">
        Dépannage en {site.delaiIntervention} en moyenne, devis gratuit et prix annoncé avant d'intervenir. Plomberie et
        chauffage {site.villeAvecPreposition} et alentours.
      </p>
      <div className="hero-banner-actions">
        <a className="btn hero-btn hero-btn-primary" href={telNowHref}>
          Appeler le {telNow}
          <svg className="chevron" viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 6 6 6-6 6" />
          </svg>
        </a>
        <a className="btn hero-btn hero-btn-secondary" href="#besoin">
          Décrire mon besoin
        </a>
      </div>
      <p className="hero-proof">
        <span className="stars" aria-hidden="true">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <use href="#i-star" />
          </svg>
        </span>
        <strong>{site.note}/5</strong>&nbsp;· {site.nbAvis} avis {site.sourceAvis} · Artisan depuis {site.depuis}
      </p>
      <p className="hero-zone">Intervention à {site.communes.slice(0, 3).join(", ")} et alentours</p>
    </>
  );
}

export default function Hero() {
  if (site.heroStyle === "artisan")
    return (
      <section className="hero-artisan" id="top">
        <div className="container hero-artisan-grid">
          <div className="hero-artisan-text">
            <Content />
          </div>
          <figure className="hero-artisan-photo">
            <Photo src={site.photoArtisan.src} alt={site.photoArtisan.alt} fetchPriority="high" label="Photo de l'artisan au travail ou devant son utilitaire" />
            {/* Calculé sur les horaires de site.js : ne promet pas une dispo le dimanche soir */}
            <p className={"hero-badge" + (ouvert ? "" : " is-closed")}>
              <span className="status-dot" aria-hidden="true"></span>
              <span>
                <strong>{ouvert ? "Disponible maintenant" : "Ligne urgences ouverte"}</strong>
                <small>{ouvert ? `Intervention en ${site.delaiIntervention} en moyenne` : site.telephoneUrgence}</small>
              </span>
            </p>
          </figure>
        </div>
      </section>
    );

  return (
    <section className="hero-banner" id="top">
      <Photo className="hero-bg" src={site.photoAccueil.src} alt="" fetchPriority="high" label="Photo d'ambiance (paysage, large)" />
      <div className="container hero-banner-inner">
        <Content />
      </div>
    </section>
  );
}
