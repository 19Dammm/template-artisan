import { site } from "../site.js";
import Photo from "./Photo.jsx";
import { Stars } from "./Icons.jsx";

export default function Reviews() {
  return (
    <section className="section" id="avis">
      <div className="container">
        <div className="reviews-block">
        <div className="section-head">
          <p className="kicker">Avis clients</p>
          <h2>
            Ce que nos voisins <em>en disent</em>
          </h2>
        </div>

        <div className="reviews-layout">
          <div className="reviews-summary">
            <p className="reviews-score">
              {site.note}
              <small>/5</small>
            </p>
            <Stars className="stars stars-lg" />
            <p className="reviews-count">
              {site.nbAvis} avis sur {site.sourceAvis}
            </p>
            <a className="btn btn-outline" href={site.lienAvis}>
              Voir tous les avis
            </a>
          </div>

          <div className="reviews">
            {site.avis.map((a, i) => (
              <figure className="review" key={i}>
                <Photo className="review-photo" src={a.photo} alt={"Chantier : " + a.sujet} loading="lazy" label="Photo du chantier de ce client" />
                <Stars />
                <blockquote>{a.texte}</blockquote>
                <figcaption>
                  <strong>{a.auteur}</strong> · {a.commune} · {a.sujet}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

// Un avis mis en avant, glissé entre deux séries de cartes (page Services)
export function ReviewQuote({ a }) {
  return (
    <figure className="review-quote">
      <Stars />
      <blockquote>«&nbsp;{a.texte}&nbsp;»</blockquote>
      <figcaption>
        <strong>{a.auteur}</strong> · {a.commune} · {a.sujet}
      </figcaption>
    </figure>
  );
}
