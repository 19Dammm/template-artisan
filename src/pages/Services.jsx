import { site } from "../site.js";
import { goToPicker } from "../demande.js";
import PageHero from "../components/PageHero.jsx";
import Activities from "../components/Activities.jsx";
import Pricing from "../components/Pricing.jsx";
import { Brands, CtaBand } from "../components/Sections.jsx";

export default function Services() {
  return (
    <>
      <PageHero
        kicker="Services & tarifs"
        titre="Dépannage, travaux et entretien"
        texte={`Tout ce qu'on fait ${site.villeAvecPreposition}, avec des prix annoncés à l'avance.`}
        photo={site.photosPages.services}
      />
      <Activities openPicker={goToPicker} />
      <Pricing openPicker={goToPicker} />
      <Brands />
      <CtaBand />
    </>
  );
}
