import { useState } from "react";
import Hero from "../components/Hero.jsx";
import Need from "../components/Need.jsx";
import Process from "../components/Process.jsx";
import Reviews from "../components/Reviews.jsx";
import Artisan from "../components/Artisan.jsx";
import Realisations from "../components/Realisations.jsx";
import { CtaBand, Zone, Faq } from "../components/Sections.jsx";

// Accueil, dans l'ordre du visiteur : appeler (hero) → son besoin avec les prix → qui intervient → les avis → des chantiers → comment ça marche → où on intervient → les questions avant d'appeler. Le reste est sur les pages intérieures.
export default function Home() {
  // Formulaire pré-rempli quand on arrive d'une autre page (voir demande.js)
  const [picker, setPicker] = useState(() => {
    const q = new URLSearchParams(globalThis.location?.search); // au build il n'y a pas d'adresse : formulaire vide
    const problem = q.get("probleme") || "";
    return { mode: q.get("mode") === "projet" ? "projet" : "urgence", step: problem ? 2 : 1, problem };
  });

  return (
    <>
      <Hero />
      <Need picker={picker} setPicker={setPicker} />
      <Artisan />
      <Reviews />
      <Realisations />
      <Process />
      <Zone />
      <Faq />
      <CtaBand />
    </>
  );
}
