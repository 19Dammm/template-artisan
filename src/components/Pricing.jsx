import { site } from "../site.js";
import { telNow, telNowHref } from "../phone.js";
import { Icon } from "./Icons.jsx";
import Photo from "./Photo.jsx";
import { ReviewQuote } from "./Reviews.jsx";
import { Works } from "./Realisations.jsx";

function Service({ s, openPicker }) {
  return (
    <article className="service" id={s.id}>
      <Photo className="service-photo" src={s.photo} alt="" loading="lazy" label={"Photo : " + s.titre.toLowerCase()} />
      <Icon name={s.icone} />
      <h4>{s.titre}</h4>
      <p>{s.description}</p>
      <div className="service-foot">
        {s.prefixe ? (
          <p className="price">
            <small>{s.prefixe}</small> {s.prix}
          </p>
        ) : (
          <p className="price price-quote">Devis gratuit</p>
        )}
        <button type="button" className="link-arrow" aria-label={"Demander : " + s.titre} onClick={() => openPicker(s.mode, s.demande)}>
          Demander
        </button>
      </div>
    </article>
  );
}

export default function Pricing({ openPicker }) {
  const list = (mode) => site.services.filter((s) => s.mode === mode).map((s) => <Service key={s.id} s={s} openPicker={openPicker} />);

  return (
    <section className="section section-tint" id="tarifs">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Tarifs</p>
          <h2>Nos services et leurs tarifs</h2>
          <p className="section-intro">
            Tarifs indicatifs TTC. Le prix exact vous est annoncé avant l'intervention, et les travaux font toujours
            l'objet d'un devis gratuit.
          </p>
        </div>

        <ul className="included-bar" aria-label="Toujours inclus">
          {site.inclus.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>

        <h3 className="services-group">
          <span className="mode-dot" aria-hidden="true"></span> Dépannage
        </h3>
        <div className="services">
          {list("urgence")}
          <article className="service service-cta">
            <h4>Une autre panne&nbsp;?</h4>
            <p>Décrivez-nous le problème, on vous dit tout de suite si on peut intervenir et à quel prix.</p>
            <a className="btn btn-call" href={telNowHref}>
              <Icon name="i-phone" className="icon" />
              {telNow}
            </a>
          </article>
        </div>
        <Works mode="urgence" />

        {site.avis[0] && <ReviewQuote a={site.avis[0]} />}

        <h3 className="services-group">Travaux &amp; entretien</h3>
        <div className="services">
          {list("projet")}
          <article className="service service-cta">
            <h4>Un autre projet&nbsp;?</h4>
            <p>Parlez-nous de votre projet, le devis est gratuit.</p>
            <button type="button" className="btn btn-light" onClick={() => openPicker("projet")}>
              Demander un devis
            </button>
          </article>
        </div>
        <Works mode="projet" />
      </div>
    </section>
  );
}
