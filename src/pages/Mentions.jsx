import { site } from "../site.js";
import { telHref } from "../phone.js";
import PageHero from "../components/PageHero.jsx";

// Mentions obligatoires (LCEN) et données personnelles (RGPD). Toutes les valeurs viennent de site.js.
export default function Mentions() {
  return (
    <>
      <PageHero kicker="Informations légales" titre="Mentions légales" photo={site.photosPages.mentions} />
      <section className="section">
        <div className="container article">
          <h2>Éditeur du site</h2>
          <p>
            {site.nom}, {site.formeJuridique}
            <br />
            SIRET {site.siret} · {site.immatriculation}
            <br />
            TVA {site.tva}
            <br />
            {site.adresse}
            <br />
            Téléphone : <a href={telHref}>{site.telephone}</a> · E-mail : <a href={"mailto:" + site.email}>{site.email}</a>
          </p>

          <h2>Directeur de la publication</h2>
          <p>{site.directeurPublication}</p>

          <h2>Hébergement</h2>
          <p>
            {site.hebergeur}
            <br />
            {site.hebergeurCoordonnees}
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, photos et le logo de ce site appartiennent à {site.nom}, sauf mention contraire. Toute reproduction
            sans autorisation écrite est interdite.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Le formulaire de demande recueille votre commune, votre nom, votre numéro de téléphone, et les précisions et la photo
            que vous choisissez d'ajouter. Ces informations servent uniquement à vous rappeler et à préparer votre devis. Elles ne sont
            ni vendues, ni cédées à des tiers.
          </p>
          <p>
            Responsable du traitement : {site.nom}. Durée de conservation : {site.conservationDonnees} après votre dernière
            demande.
          </p>
          <p>
            Vous pouvez demander à consulter, corriger ou supprimer vos données, ou vous opposer à leur utilisation, en écrivant
            à <a href={"mailto:" + site.email}>{site.email}</a>. En cas de désaccord, vous pouvez saisir la CNIL
            (www.cnil.fr).
          </p>

          <h2>Cookies</h2>
          {/* Vrai tant qu'aucun outil de statistiques ou de publicité n'est ajouté : sinon, mettre à jour ce paragraphe */}
          <p>Ce site n'utilise pas de cookie de suivi ni d'outil de mesure d'audience.</p>
        </div>
      </section>
    </>
  );
}
