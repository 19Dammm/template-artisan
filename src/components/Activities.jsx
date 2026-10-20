import { site } from "../site.js";
import Photo from "./Photo.jsx";
import { telNowHref } from "../phone.js";
import { Icon } from "./Icons.jsx";

const links = (mode) =>
  site.services
    .filter((s) => s.mode === mode)
    .map((s) => (
      <li key={s.id}>
        <a href={"#" + s.id}>{s.titre}</a>
      </li>
    ));

export default function Activities({ openPicker }) {
  return (
    <section className="section section-white" id="activites">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Activités</p>
          <h2>
            Deux besoins, <em>deux réponses</em>
          </h2>
          <p className="section-intro">
            Un dépannage qui ne peut pas attendre, ou des travaux à préparer&nbsp;: on ne vous répond pas de la même
            façon.
          </p>
        </div>

        <div className="needs">
          <article className="need need-urgent" id="urgence">
            <Photo className="need-photo" src={site.photosBesoin.urgence} alt="" loading="lazy" label="Photo : un dépannage en cours" />
            <p className="need-tag">
              <span className="mode-dot" aria-hidden="true"></span> Dépannage &amp; urgence
            </p>
            <h3>Fuite, panne, canalisation bouchée&nbsp;?</h3>
            <p>
              Intervention rapide {site.villeAvecPreposition} et alentours, en {site.delaiIntervention} en moyenne.
              Soirs et week-ends, la ligne urgences répond. Prix annoncé avant d'intervenir.
            </p>
            <ul className="need-links">{links("urgence")}</ul>
            <div className="need-actions">
              <a className="btn btn-call" href={telNowHref}>
                <Icon name="i-phone" className="icon" />
                Appeler maintenant
              </a>
              <button type="button" className="link-arrow" onClick={() => openPicker("urgence")}>
                Être rappelé
              </button>
            </div>
          </article>

          <article className="need" id="projets">
            <Photo className="need-photo" src={site.photosBesoin.projet} alt="" loading="lazy" label="Photo : un chantier terminé" />
            <p className="need-tag">Projets &amp; travaux</p>
            <h3>Salle de bain, chaudière neuve, chauffe-eau&nbsp;?</h3>
            <p>
              Devis gratuit sous {site.delaiDevis} et conseils de professionnel, de l'étude à la mise en service. Pour
              les particuliers comme pour les professionnels.
            </p>
            <ul className="need-links">{links("projet")}</ul>
            <div className="need-actions">
              <button type="button" className="btn btn-primary" onClick={() => openPicker("projet")}>
                Demander mon devis gratuit
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
