import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// Police hébergée avec le site (pas d'appel à Google Fonts) : seulement les graisses utilisées
import "@fontsource/plus-jakarta-sans/latin-400.css";
import "@fontsource/plus-jakarta-sans/latin-500.css";
import "@fontsource/plus-jakarta-sans/latin-500-italic.css";
import "@fontsource/plus-jakarta-sans/latin-600.css";
import "@fontsource/plus-jakarta-sans/latin-700.css";
import "@fontsource/plus-jakarta-sans/latin-800.css";
import "./styles.css";

// Le contenu est déjà écrit dans le HTML au build (prerender.mjs), pour Google et pour un affichage immédiat.
// React le remplace ici par la même page, interactive, calculée à l'heure du visiteur (ligne ouverte ou urgences).
const article = location.pathname.match(/blog-([\w-]+)\.html$/)?.[1];
createRoot(document.getElementById("root")).render(<App page={document.body.dataset.page} article={article} />);
