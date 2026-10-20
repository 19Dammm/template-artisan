// Hors accueil, les boutons "Demander" renvoient vers le formulaire de l'accueil, pré-rempli (lu dans Home.jsx)
export function goToPicker(mode, problem) {
  const q = new URLSearchParams({ mode });
  if (problem) q.set("probleme", problem);
  location.href = "./?" + q + "#probleme";
}
