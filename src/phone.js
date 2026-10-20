import { site } from "./site.js";

// Ouvert / fermé : la ligne principale aux heures d'ouverture, la ligne urgences le reste du temps.
// shortcut: calculé une fois au chargement de la page, pas mis à jour si la page reste ouverte des heures.
const now = new Date();
const plage = site.horaires[now.getDay()];
const heure = now.getHours() + now.getMinutes() / 60;

// Au build (pas de window), le HTML écrit à l'avance montre toujours la ligne principale ; le navigateur recalcule ensuite.
export const ouvert = typeof window === "undefined" || (Boolean(plage) && heure >= plage[0] && heure < plage[1]);
export const annee = now.getFullYear();
export const annees = Number.isFinite(Number(site.depuis)) ? annee - Number(site.depuis) : "[X]";

// Numéro à appeler maintenant (affiché + lien)
export const telNow = ouvert ? site.telephone : site.telephoneUrgence;
export const telNowHref = "tel:" + (ouvert ? site.telephoneLien : site.telephoneUrgenceLien);
export const telHref = "tel:" + site.telephoneLien;
export const telUrgenceHref = "tel:" + site.telephoneUrgenceLien;
