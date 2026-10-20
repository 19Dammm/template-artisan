import { useState } from "react";
import { site } from "../site.js";
import Photo from "./Photo.jsx";

// Cartes chantier ; mode = n'afficher qu'un domaine (sous chaque série de services)
export function Works({ mode }) {
  const [open, setOpen] = useState(false);
  const list = site.realisations
    .map((r) => ({ ...r, s: site.services.find((s) => s.id === r.service) }))
    .filter((r) => r.s && (!mode || r.s.mode === mode));
  if (!list.length) return null;

  return (
    <>
    <ul className={"works" + (open ? " is-open" : "")}>
      {list.map((r) => (
        <li key={r.titre} className="work">
          <Photo src={r.photo} alt="" loading="lazy" label="Photo du chantier" />
          <p className="work-tag">{r.s.titre}</p>
          <h4>{r.titre}</h4>
          <p className="work-meta">
            {r.lieu} · {r.detail}
          </p>
        </li>
      ))}
    </ul>
    {/* Mobile seulement (voir .works-toggle) : les cartes au-delà de 2 sont masquées */}
    {list.length > 2 && !open && (
      <button type="button" className="btn btn-light works-toggle" onClick={() => setOpen(true)}>
        Voir plus de chantiers ({list.length - 2})
      </button>
    )}
    </>
  );
}

export default function Realisations() {
  return (
    <section className="section section-white" id="realisations">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Réalisations</p>
          <h2>
            Nos derniers <em>chantiers</em>
          </h2>
          <p className="section-intro">Dépannages et travaux réalisés près de chez vous.</p>
        </div>
        <Works />
        <p className="works-more">
          <a className="link-arrow" href="services.html#tarifs">
            Voir tous nos services et tarifs
          </a>
        </p>
      </div>
    </section>
  );
}
