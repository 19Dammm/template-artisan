import Photo from "./Photo.jsx";

// Haut des pages intérieures : même photo plein cadre que l'accueil, en plus court
export default function PageHero({ kicker, titre, texte, photo }) {
  return (
    <section className="hero-banner page-hero" id="top">
      <Photo className="hero-bg" src={photo} alt="" fetchPriority="high" label="Photo de fond (paysage, large)" />
      <div className="container hero-banner-inner">
        <p className="kicker">{kicker}</p>
        <h1>{titre}</h1>
        {texte && <p className="hero-sub">{texte}</p>}
      </div>
    </section>
  );
}
