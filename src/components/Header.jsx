import { useEffect, useRef, useState } from "react";
import { site } from "../site.js";
import { telHref, telUrgenceHref } from "../phone.js";
import { Icon } from "./Icons.jsx";

// page = valeur de data-page de la page qui correspond au lien (pour le surligner)
const NAV = [
  { href: "services.html", page: "services", label: "Services & tarifs", sub: true },
  { href: "entreprise.html", page: "entreprise", label: "L'artisan" },
  { href: "./#avis", label: "Avis" },
  { href: "blog.html", page: "blog", label: "Blog" },
  { href: "contact.html", page: "contact", label: "Contact" },
];

export default function Header({ page }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const photoHero = page !== "accueil" || site.heroStyle !== "artisan";
  const [atTop, setAtTop] = useState(true);

  // Le menu ouvert masque la barre d'appel mobile (voir .menu-open dans styles.css)
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    // Échap ferme le menu et rend le focus au bouton
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  // En haut de page, l'en-tête est transparent sur la photo d'accueil ; il redevient opaque dès qu'on défile
  useEffect(() => {
    const onScroll = () => setAtTop(scrollY < 40);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  const link = ({ href, label, sub, page: target }) => (
    <a key={href} href={href} className="nav-link" aria-current={target && target === page ? "page" : undefined} onClick={() => setOpen(false)}>
      {label}
      {sub && (
        <svg className="chevron" viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      )}
    </a>
  );

  return (
    <div className="masthead">
      <div className="topbar">
        <div className="container topbar-inner">
          <p>
            <span className="topbar-label">Urgences soirs &amp; week-ends</span>
            <a href={telUrgenceHref}>{site.telephoneUrgence}</a>
          </p>
          <p className="topbar-extra">
            Artisan depuis {site.depuis} · {site.promesse}
          </p>
        </div>
      </div>

      <header className={"site-header" + (photoHero && atTop && !open ? " is-over-hero" : "")}>
        <div className="container header-inner">
          <a className="logo" href="./" aria-label={`${site.nom} — accueil`}>
            <span className="logo-mark" aria-hidden="true">{site.initiale}</span>
            <span className="logo-text">
              <span className="logo-name">{site.nom}</span>
              <span className="logo-sub">{site.activite}</span>
            </span>
          </a>

          {/* Avant le menu dans le code : au clavier, Tab entre dans le menu juste après l'avoir ouvert (affiché à droite via order) */}
          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={"nav" + (open ? " is-open" : "")} id="nav" aria-label="Principale">
            {NAV.map((item) =>
              item.sub ? (
                <div key={item.href} className="nav-item has-menu">
                  {link(item)}
                  <ul className="submenu">
                    <li><a href="services.html#urgence" onClick={() => setOpen(false)}>Dépannage &amp; urgence</a></li>
                    <li><a href="services.html#projets" onClick={() => setOpen(false)}>Projets &amp; travaux</a></li>
                    <li><a href="services.html#tarifs" onClick={() => setOpen(false)}>Tous les services et tarifs</a></li>
                  </ul>
                </div>
              ) : (
                link(item)
              )
            )}
          </nav>

          <a className="btn btn-call header-call" href={telHref}>
            <Icon name="i-phone" className="icon" />
            <span className="header-call-text">
              <span className="header-call-label">Appeler</span>
              <span>{site.telephone}</span>
            </span>
          </a>

        </div>
      </header>
    </div>
  );
}
