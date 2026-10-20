import { useEffect, useRef, useState } from "react";
import { site } from "../site.js";
import { telNow, telNowHref } from "../phone.js";
import { Icon } from "./Icons.jsx";

const MODES = {
  urgence: {
    type: "Urgence",
    titre: "Quel est votre problème ?",
    autre: "Autre problème ?",
    autreValeur: "Autre dépannage",
    label: "Problème :",
    submit: "Être rappelé",
    delaiQuestion: "C'est pour quand ?",
    delais: ["Maintenant", "Aujourd'hui", "Cette semaine"],
  },
  projet: {
    type: "Projet",
    titre: "Quel est votre projet ?",
    autre: "Autre projet ?",
    autreValeur: "Autre projet",
    label: "Projet :",
    submit: "Recevoir mon devis gratuit",
    delaiQuestion: "Quand souhaitez-vous démarrer ?",
    delais: ["Dès que possible", "Dans 1 à 3 mois", "Je compare"],
  },
};

// Prix indicatif d'un problème, repris du service correspondant (site.services)
function tarif(problem, serviceId) {
  const s = site.services.find((s) => s.id === serviceId || s.demande === problem);
  return s?.prefixe ? `${s.prefixe} ${s.prix}` : "Devis gratuit";
}

// Bloc "urgence ou projet → problème → coordonnées → confirmation".
// L'état (mode, étape, problème) est tenu par App pour que les boutons des autres sections puissent l'ouvrir.
export default function Picker({ state, setState }) {
  const { mode, step, problem } = state;
  const m = MODES[mode];
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const communeRef = useRef(null);

  useEffect(() => {
    setError("");
    if (step === 2) communeRef.current?.focus({ preventScroll: true });
  }, [step, problem]);

  const showError = (message, field) => {
    setError(message);
    field?.focus();
  };

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;

    const tel = form.telephone.value.replace(/[\s.\-]/g, "");
    const photo = form.photo.files[0];
    if (!form.commune.value.trim()) return showError("Indiquez votre commune.", form.commune);
    if (!/^(\+33|0)[1-9]\d{8}$/.test(tel)) {
      return showError("Indiquez un numéro de téléphone valide (ex : 06 12 34 56 78).", form.telephone);
    }
    if (photo && photo.size > 10e6) return showError("La photo est trop lourde (10 Mo maximum).", form.photo);

    const data = new FormData(form);
    if (!photo) data.delete("photo"); // champ vide : ne pas envoyer de fichier vide
    const sujet = (mode === "projet" ? "Demande de devis — " : "Demande de rappel — ") + problem;

    if (!site.formAction) {
      // Pas encore de service d'envoi branché : on prépare un e-mail
      // Un lien mailto ne peut pas joindre de fichier : on demande au visiteur d'ajouter sa photo à l'e-mail
      const body =
        [...data].filter(([, v]) => typeof v === "string").map(([k, v]) => `${k} : ${v}`).join("\n") +
        (photo ? "\n\nPhoto : pensez à la joindre à cet e-mail." : "");
      location.href =
        "mailto:" + site.email + "?subject=" + encodeURIComponent(sujet) + "&body=" + encodeURIComponent(body);
      return setState({ ...state, step: 3 });
    }

    data.append("_subject", sujet);
    setSending(true);
    try {
      const envoyer = () => fetch(site.formAction, { method: "POST", body: data, headers: { Accept: "application/json" } });
      let res = await envoyer();
      // Certains services refusent les fichiers (Formspree gratuit) : on renvoie la demande sans la photo plutôt que de la perdre
      if (!res.ok && photo) {
        data.set("photo", "non transmise (refusée par le service d'envoi)");
        res = await envoyer();
      }
      if (!res.ok) throw new Error();
      form.reset();
      setState({ ...state, step: 3 });
    } catch {
      showError("L'envoi a échoué. Appelez-nous directement au " + telNow + ".");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className={"picker" + (step === 3 ? " is-done" : "")} id="probleme" data-mode={mode}>
      <ol className="steps" aria-label="Étapes">
        {["Votre besoin", "Vos coordonnées"].map((label, i) => (
          <li key={label} className={(Math.min(step, 2) === i + 1 ? "is-active" : "") + (i + 1 < step ? " is-done" : "")}>
            <span>{i + 1}</span> {label}
          </li>
        ))}
      </ol>

      {step === 1 && (
        <div className="step">
          <div className="mode-switch" role="tablist" aria-label="Type de besoin">
            <button type="button" role="tab" className="mode-tab" aria-selected={mode === "urgence"} onClick={() => setState({ ...state, mode: "urgence" })}>
              <span className="mode-dot" aria-hidden="true"></span>
              Une urgence
            </button>
            <button type="button" role="tab" className="mode-tab" aria-selected={mode === "projet"} onClick={() => setState({ ...state, mode: "projet" })}>
              Un projet de travaux
            </button>
          </div>

          <div className="mode-panel">
            <h2 className="picker-title">{m.titre}</h2>
            <div className="problems">
              {site.problemes[mode].map((p) => (
                <button key={p.titre} type="button" className="problem" onClick={() => setState({ mode, step: 2, problem: p.valeur || p.titre, service: p.service })}>
                  <Icon name={p.icone} />
                  <span className="problem-name">{p.titre}</span>
                  <span className="problem-hint">{p.detail}</span>
                  <span className="problem-price">{tarif(p.valeur || p.titre, p.service)}</span>
                </button>
              ))}
            </div>
            <button type="button" className="link-btn other-btn" onClick={() => setState({ mode, step: 2, problem: m.autreValeur })}>
              {m.autre}
            </button>
            <a className="link-arrow prices-link" href="services.html#tarifs">
              Voir tous nos tarifs
            </a>
          </div>
        </div>
      )}

      {step === 2 && (
        <form className="step callback-form" noValidate onSubmit={onSubmit}>
          <div className="chosen">
            <span className="chosen-label">{m.label}</span>
            <strong className="chosen-value">{problem}</strong>
            <button type="button" className="link-btn" onClick={() => setState({ ...state, step: 1 })}>
              Modifier
            </button>
            <p className="chosen-price">
              Prix indicatif&nbsp;: <strong>{tarif(problem, state.service)}</strong> TTC · prix confirmé avant
              d'intervenir.{" "}
              <a href="services.html#tarifs">Tous les tarifs</a>
            </p>
          </div>
          <input type="hidden" name="type" value={m.type} />
          <input type="hidden" name="probleme" value={problem} />

          <div className="field">
            <label htmlFor="commune">Votre commune</label>
            <input ref={communeRef} id="commune" name="commune" list="communes" autoComplete="address-level2" required placeholder="Ex : votre ville" />
            <datalist id="communes">
              {site.communes.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </div>

          <fieldset className="field" key={mode}>
            <legend>{m.delaiQuestion}</legend>
            <div className="segmented">
              {m.delais.map((d, i) => (
                <label key={d}>
                  <input type="radio" name="delai" value={d} defaultChecked={i === 0} />
                  <span>{d}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="field-row">
            <div className="field">
              <label htmlFor="nom">
                Votre nom <span className="optional">(facultatif)</span>
              </label>
              <input id="nom" name="nom" autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="tel">Téléphone</label>
              <input id="tel" name="telephone" type="tel" autoComplete="tel" inputMode="tel" required placeholder="06 12 34 56 78" />
            </div>
          </div>

          <div className="field">
            <label htmlFor="precisions">
              Précisions <span className="optional">(facultatif)</span>
            </label>
            <textarea id="precisions" name="precisions" rows="2" placeholder="Ex : fuite sous l'évier de la cuisine depuis ce matin"></textarea>
          </div>

          <PhotoField />

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="btn btn-primary btn-block" disabled={sending}>
            {sending ? "Envoi en cours…" : m.submit}
          </button>
          <p className="form-note">Vos coordonnées servent uniquement à vous rappeler pour cette demande.</p>
        </form>
      )}

      {step === 3 && (
        <div className="step step-done">
          <Icon name="i-check" className="done-icon" />
          <h2 className="picker-title">Demande bien reçue</h2>
          <p>On vous rappelle très vite. Si c'est urgent, n'attendez pas&nbsp;: appelez directement.</p>
          <a className="btn btn-call btn-block" href={telNowHref}>
            <Icon name="i-phone" className="icon" />
            Appeler le {telNow}
          </a>
        </div>
      )}

      <p className="picker-call">
        Vous préférez appeler tout de suite&nbsp;?{" "}
        <a href={telNowHref}>
          <strong>{telNow}</strong>
        </a>
      </p>
    </div>
  );
}

// Photo du problème, facultative : aperçu local avant l'envoi (l'adresse temporaire est libérée quand on change de photo)
function PhotoField() {
  const [apercu, setApercu] = useState("");
  useEffect(() => () => URL.revokeObjectURL(apercu), [apercu]);

  return (
    <div className="field">
      <label htmlFor="photo">
        Une photo du problème <span className="optional">(facultatif)</span>
      </label>
      <input
        id="photo"
        className="photo-input"
        name="photo"
        type="file"
        accept="image/*"
        onChange={(e) => setApercu(e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : "")}
      />
      <label htmlFor="photo" className={"photo-pick" + (apercu ? "" : " ph")} data-label="Ajouter une photo : elle nous aide à préparer l'intervention">
        {apercu && <img src={apercu} alt="Votre photo (cliquer pour la changer)" />}
      </label>
    </div>
  );
}
