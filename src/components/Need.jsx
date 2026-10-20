import { site } from "../site.js";
import { telUrgenceHref } from "../phone.js";
import { Icon, Stars } from "./Icons.jsx";
import Picker from "./Picker.jsx";

// Section "Qu'est-ce qui vous amène ?" : accueil, bloc confiance et choix du besoin
export default function Need({ picker, setPicker }) {
  return (
    <section className="hero" id="besoin">
      <div className="container hero-grid">
        <div className="hero-intro">
          <p className="kicker">Votre demande</p>
          <h2 className="hero-title">Qu'est-ce qui vous amène&nbsp;?</h2>
          <p className="lead">
            Choisissez votre situation&nbsp;: on vous rappelle, on vous conseille, et on intervient avec un devis
            gratuit avant tous travaux.
          </p>
        </div>

        <aside className="hero-trust" aria-label="Pourquoi nous faire confiance">
          <a className="rating" href={site.lienAvis}>
            <span className="rating-score">
              {site.note}
              <small>/5</small>
            </span>
            <span className="rating-body">
              <Stars />
              <span className="rating-meta">
                {site.nbAvis} avis clients sur {site.sourceAvis}
              </span>
            </span>
            <span className="rating-link">Lire les avis →</span>
          </a>

          <dl className="facts">
            <div className="fact">
              <dt>Interventions réalisées</dt>
              <dd>{site.interventions}+</dd>
            </div>
            <div className="fact">
              <dt>Artisan du quartier</dt>
              <dd>Depuis {site.depuis}</dd>
            </div>
            <div className="fact">
              <dt>Délai en urgence</dt>
              <dd>{site.delaiIntervention}</dd>
            </div>
          </dl>

          <div className="dispo">
            <Icon name="i-clock" className="icon" />
            <div>
              <p className="dispo-title">Disponibilités</p>
              <p>{site.horairesTexte}</p>
              <p>
                Soirs, week-ends &amp; urgences :{" "}
                <a href={telUrgenceHref}>
                  <strong>{site.telephoneUrgence}</strong>
                </a>
              </p>
            </div>
          </div>

          <ul className="badges" aria-label="Qualifications et engagements">
            {site.qualifications.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </aside>

        <Picker state={picker} setState={setPicker} />
      </div>
    </section>
  );
}
