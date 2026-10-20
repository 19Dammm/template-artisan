import { useEffect } from "react";
import { Sprite } from "./components/Icons.jsx";
import Header from "./components/Header.jsx";
import { Footer, CallBar } from "./components/Sections.jsx";

// Éléments qui apparaissent en fondu au défilement (classes .reveal / .is-visible dans styles.css)
const REVEAL = [
  ".section-head", ".hero-intro", ".hero-trust > *", ".picker", ".need", ".why-intro > *", ".reasons li",
  ".ba-text", ".ba-figure", ".reviews-summary", ".review", ".review-quote", ".included-bar", ".services-group",
  ".service", ".guarantee", ".zone > *", ".faq details", ".brand", ".cta-inner > *", ".blog-card", ".contact-card",
].join(",");

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll(REVEAL).forEach((el) => {
      // Décalage en cascade entre éléments frères (cartes d'une même grille)
      const siblings = [...el.parentElement.children].filter((c) => c.matches(REVEAL));
      el.style.setProperty("--i", Math.min(siblings.indexOf(el), 6));
      el.classList.add("reveal");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
}

// Ancre venant d'une autre page (ex. services.html#urgence) : la page est rendue après le chargement, on y descend ensuite
function useHashOnLoad() {
  useEffect(() => {
    if (location.hash) document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
  }, []);
}

export default function Layout({ page, children }) {
  useReveal();
  useHashOnLoad();

  return (
    <>
      <Sprite />
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <Header page={page} />
      <main id="main">{children}</main>
      <Footer />
      <CallBar />
    </>
  );
}
