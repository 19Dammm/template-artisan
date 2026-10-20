import { site } from "../site.js";
import Photo from "./Photo.jsx";

// Accueil : à qui on s'adresse. Court ; le détail est sur la page "L'artisan".
export default function Artisan() {
  return (
    <section className="section section-artisan" id="artisan">
      <div className="container">
        <div className="artisan-card">
          <Photo className="artisan-photo" src={site.photoArtisan.src} alt={site.photoArtisan.alt} loading="lazy" label="Portrait" />
          <div>
            <p className="kicker">Votre artisan</p>
            <h2>
              {site.artisan}, <em>artisan depuis {site.depuis}</em>
            </h2>
            <blockquote className="artisan-quote">«&nbsp;{site.citation.texte}&nbsp;»</blockquote>
            <a className="link-arrow" href="entreprise.html">
              Découvrir l'artisan et ses engagements
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
