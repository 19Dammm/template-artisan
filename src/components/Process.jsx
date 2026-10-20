import { useEffect, useRef, useState } from "react";
import { site } from "../site.js";
import Photo from "./Photo.jsx";

const STEPS = [
  { titre: "Vous décrivez le problème", texte: "Par téléphone, ou en choisissant votre situation juste au-dessus. Une photo de la panne nous aide beaucoup." },
  { titre: "On vous rappelle", texte: "Premiers conseils au téléphone, et un créneau d'intervention qui vous convient." },
  { titre: "Diagnostic & devis", texte: "Sur place, on identifie la panne, on vous l'explique et on vous remet un devis gratuit." },
  { titre: "Intervention", texte: "Les travaux sont réalisés au prix annoncé, le chantier est laissé propre, et on reste joignable après." },
];

// Défilement par étapes : l'image reste fixe et change avec l'étape lue, les autres étapes sont estompées
export default function Process() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    // Étape active = celle qui traverse la bande centrale de l'écran
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(Number(e.target.dataset.i))),
      { rootMargin: "-45% 0px -45% 0px" }
    );
    refs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section section-white" id="comment-ca-marche">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Comment ça marche</p>
          <h2>
            Simple comme <em>un coup de fil</em>
          </h2>
          <p className="section-intro">De votre appel à l'intervention, en 4 étapes.</p>
        </div>

        <div className="howto">
          <div className="howto-media" aria-hidden="true">
            {STEPS.map((s, i) => (
              <Photo key={s.titre} src={site.photosEtapes[i]} alt="" loading="lazy" className={i === active ? "is-active" : ""} label={"Photo de l'étape " + (i + 1)} />
            ))}
            <span className="howto-count">
              {active + 1} / {STEPS.length}
            </span>
          </div>

          <ol className="howto-list">
            {STEPS.map((s, i) => (
              <li
                key={s.titre}
                ref={(el) => (refs.current[i] = el)}
                data-i={i}
                className={i === active ? "is-active" : undefined}
                aria-current={i === active ? "step" : undefined}
              >
                <Photo className="howto-photo" src={site.photosEtapes[i]} alt="" loading="lazy" label={"Photo de l'étape " + (i + 1)} />
                <span className="howto-num">{i + 1}</span>
                <h3>{s.titre}</h3>
                <p>{s.texte}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="center">
          <a className="btn btn-primary" href="#probleme">
            Décrire mon problème
          </a>
        </div>
      </div>
    </section>
  );
}
