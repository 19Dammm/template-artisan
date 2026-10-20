// Petites sections sans logique : garanties, zone, FAQ, marques, bandeau d'appel, pied de page
import { useEffect, useState } from "react";
import { site } from "../site.js";
import { annee, telHref, telNow, telNowHref, telUrgenceHref } from "../phone.js";
import { Icon } from "./Icons.jsx";

export function Guarantees() {
  return (
    <section className="section section-white" id="garanties">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Garanties</p>
          <h2>
            Nos engagements, <em>noir sur blanc</em>
          </h2>
        </div>
        <div className="guarantees">
          {site.garanties.map((g) => (
            <div className="guarantee" key={g.titre}>
              <Icon name={g.icone} />
              <h3>{g.titre}</h3>
              <p>{g.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Zone() {
  return (
    <section className="section section-tint" id="zone">
      <div className="container zone">
        <div>
          <p className="kicker">Zone d'intervention</p>
          <h2>Un artisan du quartier, à quelques minutes de chez vous</h2>
          <p className="section-intro">
            Basés {site.villeAvecPreposition}, on intervient dans toute la commune et les communes voisines.
          </p>
          <ul className="chips">
            {site.communes.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="zone-note">Votre commune n'est pas dans la liste&nbsp;? Appelez, on vous dira si on peut venir.</p>
        </div>
        {/* Remplacer par une carte (Google Maps / OpenStreetMap) si besoin */}
        <div className="zone-map" aria-hidden="true">
          <span className="zone-pin">
            <Icon name="i-pin" />
          </span>
          <span className="zone-ring"></span>
          <span className="zone-ring zone-ring-2"></span>
          <span className="zone-label">{site.ville}</span>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="section section-white" id="faq">
      <div className="container faq-layout">
        <div className="section-head">
          <p className="kicker">Questions fréquentes</p>
          <h2>Avant de nous appeler</h2>
        </div>
        <div className="faq">
          {site.faq.map((f) => (
            <details key={f.question}>
              <summary>{f.question}</summary>
              <p>{f.reponse}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Brands() {
  return (
    <section className="section" id="marques">
      <div className="container">
        <div className="section-head section-head-center">
          <p className="kicker">Marques &amp; partenaires</p>
          <h2>Le matériel avec lequel on travaille</h2>
          <p className="section-intro">Des marques reconnues, installées et entretenues dans les règles, avec des pièces d'origine.</p>
        </div>
        {/* Pour un logo : <li className="brand"><img src="/logos/marque.svg" alt="Nom de la marque" /></li> */}
        <ul className="brands">
          {site.marques.map((m) => (
            <li className="brand brand-empty" key={m}>
              {m}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>
            Un problème <em>en ce moment</em>&nbsp;?
          </h2>
          <p>Appelez-nous ou laissez votre numéro, on vous rappelle rapidement.</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-call btn-lg" href={telNowHref}>
            <Icon name="i-phone" className="icon" />
            {telNow}
          </a>
          <a className="btn btn-light btn-lg" href="./#probleme">
            Être rappelé
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{site.nom}</p>
          <p>
            {site.metier} {site.villeAvecPreposition} depuis {site.depuis}. Dépannage, installation et rénovation pour
            particuliers et professionnels.
          </p>
        </div>
        <div>
          <p className="footer-title">Informations pratiques</p>
          <p>{site.adresse}</p>
          <p>
            <a href={"mailto:" + site.email}>{site.email}</a>
          </p>
          <p>
            <a href={telHref}>{site.telephone}</a>
          </p>
        </div>
        <div>
          <p className="footer-title">Zones d'intervention</p>
          <p>{site.communes.join(", ")} et alentours</p>
        </div>
        <div>
          <p className="footer-title">Urgences</p>
          <p>Soirs et week-ends</p>
          <p>
            <a href={telUrgenceHref}>{site.telephoneUrgence}</a>
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {annee} {site.nom} · SIRET {site.siret}
        </p>
        <nav className="footer-links" aria-label="Pages">
          <a href="services.html">Services &amp; tarifs</a>
          <a href="entreprise.html">L'artisan</a>
          <a href="blog.html">Blog</a>
          <a href="contact.html">Contact</a>
          <a href="mentions-legales.html">Mentions légales</a>
        </nav>
      </div>
    </footer>
  );
}

// Bouton d'appel rond flottant en bas à droite sur mobile (masquée au-delà de 720 px, voir styles.css)
export function CallBar() {
  // Caché tant que le bouton d'appel du haut de page est visible : un seul appel à l'écran à la fois
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const onScroll = () => setShown(scrollY > innerHeight * 0.7);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a className={"call-fab" + (shown ? " is-shown" : "")} href={telNowHref} aria-label={"Appeler le " + telNow}>
      <Icon name="i-phone" className="icon" />
    </a>
  );
}
