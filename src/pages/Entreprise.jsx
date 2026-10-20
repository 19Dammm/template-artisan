import { site } from "../site.js";
import { goToPicker } from "../demande.js";
import PageHero from "../components/PageHero.jsx";
import WhyUs from "../components/WhyUs.jsx";
import BeforeAfter from "../components/BeforeAfter.jsx";
import { Guarantees, CtaBand } from "../components/Sections.jsx";

export default function Entreprise() {
  return (
    <>
      <PageHero
        kicker="L'artisan"
        titre={`${site.metier} ${site.villeAvecPreposition}`}
        texte={`Depuis ${site.depuis}, ${site.nom} : un artisan du quartier. Celui qui fait le devis est celui qui intervient.`}
        photo={site.photosPages.entreprise}
      />
      <WhyUs />
      <BeforeAfter openPicker={goToPicker} />
      <Guarantees />
      <CtaBand />
    </>
  );
}
