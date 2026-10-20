import { renderToString } from "react-dom/server";
import App from "./App.jsx";
export { site } from "./site.js";

// Utilisé seulement au build, par prerender.mjs : renvoie le HTML d'une page
export const render = (page, article) => renderToString(<App page={page} article={article} />);
