import { useEffect, useRef } from "react";
import { site } from "../site.js";
import Photo from "./Photo.jsx";
import { annees } from "../phone.js";
import { Icon } from "./Icons.jsx";

// Fait défiler un nombre de 0 à sa valeur quand il arrive à l'écran
function useCountUp(ref) {
  useEffect(() => {
    const el = ref.current;
    const target = Number(el.textContent);
    if (!Number.isFinite(target) || target <= 0 || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min((t - start) / 1200, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = target;
    };
  }, [ref]);
}

export default function WhyUs() {
  const years = useRef(null);
  useCountUp(years);

  return (
    <section className="section" id="pourquoi">
      <div className="container why">
        <div className="why-intro">
          <p className="kicker">Pourquoi nous choisir</p>
          <h2>
            Un artisan du quartier, <em>pas une plateforme</em>
          </h2>
          <p className="section-intro">
            Installé {site.villeAvecPreposition} depuis {site.depuis}, {site.nom} connaît les immeubles et les
            installations du secteur. [Pas d'intermédiaire&nbsp;: celui qui fait le devis est celui qui intervient.]
          </p>
          <blockquote className="why-quote">
            <p>«&nbsp;{site.citation.texte}&nbsp;»</p>
            <cite>{site.citation.auteur}</cite>
          </blockquote>
          <Photo className="why-photo" src={site.photoArtisan.src} alt={site.photoArtisan.alt} loading="lazy" label="Photo de l'artisan" />
          <dl className="why-stats">
            <div>
              <dt>ans d'expérience</dt>
              <dd ref={years}>{annees}</dd>
            </div>
            <div>
              <dt>interventions</dt>
              <dd>{site.interventions}+</dd>
            </div>
            <div>
              <dt>note clients</dt>
              <dd>{site.note}/5</dd>
            </div>
          </dl>
        </div>

        <ul className="reasons">
          {site.raisons.map((r) => (
            <li key={r.titre}>
              <Icon name={r.icone} />
              <h3>{r.titre}</h3>
              <p>{r.texte}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
