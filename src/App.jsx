import { StrictMode } from "react";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Entreprise from "./pages/Entreprise.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Mentions from "./pages/Mentions.jsx";

// Le site entier pour une page donnée : utilisé dans le navigateur (main.jsx) et au build (entry-server.jsx).
// page = valeur de <body data-page="…"> ; article = slug d'un article du blog (fichiers blog-<slug>.html)
const PAGES = { accueil: Home, services: Services, entreprise: Entreprise, contact: Contact, blog: Blog, mentions: Mentions };

export default function App({ page, article }) {
  const Page = PAGES[page] || Home;
  return (
    <StrictMode>
      <Layout page={page}>
        <Page article={article} />
      </Layout>
    </StrictMode>
  );
}
