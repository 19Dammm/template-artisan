import { site } from "../site.js";
import { telHref, telUrgenceHref } from "../phone.js";
import { Icon } from "../components/Icons.jsx";
import PageHero from "../components/PageHero.jsx";
import { Zone, Faq } from "../components/Sections.jsx";

export default function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact"
        titre="Une question, un devis, une urgence ?"
        texte="Appelez-nous, écrivez-nous, ou décrivez votre besoin en ligne : on vous rappelle."
        photo={site.photosPages.contact}
      />
      <section className="section">
        <div className="container contact-grid">
          <a className="contact-card" href={telHref}>
            <Icon name="i-phone" />
            <h2>Téléphone</h2>
            <p>{site.telephone}</p>
            <small>{site.horairesTexte}</small>
          </a>
          <a className="contact-card" href={telUrgenceHref}>
            <Icon name="i-bolt" />
            <h2>Urgences</h2>
            <p>{site.telephoneUrgence}</p>
            <small>Soirs &amp; week-ends</small>
          </a>
          <a className="contact-card" href={"mailto:" + site.email}>
            <Icon name="i-chat" />
            <h2>Email</h2>
            <p>{site.email}</p>
            <small>Réponse sous {site.delaiDevis}</small>
          </a>
          <div className="contact-card">
            <Icon name="i-pin" />
            <h2>Adresse</h2>
            <p>{site.adresse}</p>
            <small>SIRET {site.siret}</small>
          </div>
        </div>
        <div className="container center">
          <a className="btn btn-primary btn-lg" href="./#besoin">
            Décrire mon besoin en ligne
          </a>
        </div>
      </section>
      <Zone />
      <Faq />
    </>
  );
}
