import { useState } from "react";
import { site } from "../site.js";
import Photo from "./Photo.jsx";

export default function BeforeAfter({ openPicker }) {
  const [pos, setPos] = useState(50);
  const r = site.realisation;

  return (
    <section className="section section-dark" id="realisations">
      <div className="container ba">
        <div className="ba-text">
          <p className="kicker">Réalisations</p>
          <h2>
            Avant / après&nbsp;: <em>jugez sur pièce</em>
          </h2>
          <p className="section-intro">
            Faites glisser le curseur pour comparer. Chaque chantier est livré propre, testé et expliqué.
          </p>
          <dl className="ba-facts">
            <div><dt>Chantier</dt><dd>{r.chantier}</dd></div>
            <div><dt>Lieu</dt><dd>{r.lieu}</dd></div>
            <div><dt>Durée</dt><dd>{r.duree}</dd></div>
            <div><dt>Travaux</dt><dd>{r.travaux}</dd></div>
          </dl>
          <button type="button" className="btn btn-white" onClick={() => openPicker("projet")}>
            Un projet similaire&nbsp;? Devis gratuit
          </button>
        </div>

        <figure className="ba-figure">
          <div className="compare" style={{ "--pos": pos + "%" }}>
            <Photo src={r.avant.src} alt={r.avant.alt} loading="lazy" label="Photo AVANT (même cadrage)" />
            <Photo className="compare-after" src={r.apres.src} alt={r.apres.alt} loading="lazy" label="Photo APRÈS (même cadrage)" />
            <span className="compare-tag compare-tag-before">Avant</span>
            <span className="compare-tag compare-tag-after">Après</span>
            <span className="compare-handle" aria-hidden="true"></span>
            <input type="range" min="0" max="100" value={pos} onChange={(e) => setPos(e.target.value)} aria-label="Comparer avant et après" />
          </div>
          {r.credit && <figcaption>{r.credit}</figcaption>}
        </figure>
      </div>
    </section>
  );
}
