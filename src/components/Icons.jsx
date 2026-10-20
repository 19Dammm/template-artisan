// Icônes du site, utilisées via <Icon name="i-…" />.
// - i-phone, i-star, i-clock, i-check, i-pin : pictos au trait (interface)
// - les autres : illustrations deux tons. Le trait prend la couleur "stroke" du <svg> qui les utilise ;
//   les aplats suivent les variables CSS --duo (foncé) et --duo-2 (clair).
const D = 'style="fill:var(--duo)"';
const L = 'style="fill:var(--duo-2)"';
const ill = (id, body) =>
  `<symbol id="${id}" viewBox="0 0 48 48" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${body}</symbol>`;

const ICONS = `
<svg class="sprite" aria-hidden="true">
  <symbol id="i-phone" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></symbol>
  <symbol id="i-star" viewBox="0 0 24 24"><path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" /></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="m7.5 12.5 3 3 6-6.5" /></symbol>
  <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></symbol>

  ${ill("i-drop", `
    <rect x="3" y="9" width="42" height="10" rx="3" ${D} />
    <rect x="19" y="5.5" width="10" height="17" rx="2.5" ${L} />
    <path d="M24 26c-2.6 3.6-4.2 5.8-4.2 7.8a4.2 4.2 0 0 0 8.4 0c0-2-1.6-4.2-4.2-7.8z" ${D} />
    <path d="M34 28.5c-1.3 1.8-2.1 3-2.1 4a2.1 2.1 0 0 0 4.2 0c0-1-.8-2.2-2.1-4z" ${D} />
    <path d="M13 43h22" />`)}
  ${ill("i-drain", `
    <path d="M30 17v-7a3 3 0 0 0-3-3h-6" />
    <path d="M5 17h38l-3.6 10.4a3 3 0 0 1-2.8 2.1H11.4a3 3 0 0 1-2.8-2.1z" ${D} />
    <path d="M12 22.5h24" stroke-dasharray="1 4" />
    <path d="M24 29.5v5a5 5 0 0 0 10 0V33h9" />`)}
  ${ill("i-wc", `
    <rect x="10" y="4" width="13" height="17" rx="2" ${L} />
    <path d="M14.5 9h4" />
    <path d="M7 21h31a2 2 0 0 1 2 2.2A12 12 0 0 1 28 34h-2.5l1.5 8H14l1.6-8.6A12 12 0 0 1 5 23.2 2 2 0 0 1 7 21z" ${D} />
    <path d="M11 25.5h24" />`)}
  ${ill("i-boiler", `
    <rect x="9" y="3" width="30" height="35" rx="4" ${D} />
    <path d="M9 11h30M14 7h7" />
    <circle cx="33" cy="7" r="1.4" />
    <rect x="16" y="16" width="16" height="16" rx="3.5" ${L} />
    <path d="M24 29c-2.4 0-4-1.6-4-3.6 0-2.4 2.6-3.9 4-6.4 1.4 2.5 4 4 4 6.4 0 2-1.6 3.6-4 3.6z" ${D} />
    <path d="M16 38v6M24 38v6M32 38v6" />`)}
  ${ill("i-tank", `
    <rect x="12" y="3" width="24" height="35" rx="9" ${D} />
    <circle cx="24" cy="14" r="5" ${L} />
    <path d="M24 14l2.6-2.6M12 27h24M18 38v6M30 38v6" />`)}
  ${ill("i-radiator", `
    <rect x="4" y="14" width="40" height="22" rx="3" ${D} />
    <path d="M12 14v22M20 14v22M28 14v22M36 14v22M9 36v5M39 36v5" />
    <path d="M16 10c-1.4-1.4 1.4-2.6 0-4.5M24 10c-1.4-1.4 1.4-2.6 0-4.5M32 10c-1.4-1.4 1.4-2.6 0-4.5" />`)}
  ${ill("i-tap", `
    <path d="M15 15V9M9 9h12" />
    <path d="M5 15h20a9 9 0 0 1 9 9v4h-7v-3a3 3 0 0 0-3-3H5z" ${D} />
    <rect x="2" y="12" width="4" height="13" rx="1" ${L} />
    <path d="M30.5 33c-1.7 2.3-2.7 3.8-2.7 5a2.7 2.7 0 0 0 5.4 0c0-1.2-1-2.7-2.7-5z" ${D} />`)}
  ${ill("i-wrench", `
    <path d="M29.4 12.6a8 8 0 0 0-10.8 10.8L5.5 36.5l6 6 13.1-13.1a8 8 0 0 0 10.8-10.8l-5 5-4.8-1.2-1.2-4.8z" ${D} />
    <circle cx="38" cy="36" r="6" ${L} />
    <circle cx="38" cy="36" r="2" />`)}
  ${ill("i-bath", `
    <path d="M10 23V11a5 5 0 0 1 10 0v1" />
    <path d="M16 12h8l-1 3h-6z" ${L} />
    <path d="M18 19v1.5M22 19v1.5" />
    <circle cx="31" cy="17" r="2.5" ${L} />
    <circle cx="37.5" cy="14" r="3.5" ${L} />
    <path d="M3 23h42v4a11 11 0 0 1-11 11H14A11 11 0 0 1 3 27z" ${D} />
    <path d="M11 38l-2 4M37 38l2 4" />`)}
  ${ill("i-house", `
    <path d="M9 19 24 7l15 12v24H9z" ${D} />
    <path d="M5 22 24 6l19 16" />
    <rect x="20" y="30" width="8" height="13" rx="1" ${L} />
    <rect x="13" y="24" width="5" height="5" rx="1" ${L} />
    <rect x="30" y="24" width="5" height="5" rx="1" ${L} />`)}
  ${ill("i-pipe", `
    <path d="M3 11h21a13 13 0 0 1 13 13v21h-9V24a4 4 0 0 0-4-4H3z" ${D} />
    <rect x="1.5" y="8" width="5" height="15" rx="1.5" ${L} />
    <rect x="25" y="40" width="15" height="5" rx="1.5" ${L} />
    <path d="M15 11v9M28 31h9" />`)}
  ${ill("i-bolt", `
    <circle cx="24" cy="24" r="20" ${L} />
    <path d="M27 7 13 27h10l-2 14 14-20H25z" ${D} />`)}
  ${ill("i-award", `
    <path d="M16 28l-4 15 12-6 12 6-4-15" ${L} />
    <circle cx="24" cy="18" r="13" ${D} />
    <path d="m24 11 2.2 4.4 4.8.7-3.5 3.4.8 4.8-4.3-2.3-4.3 2.3.8-4.8-3.5-3.4 4.8-.7z" ${L} />`)}
  ${ill("i-euro", `
    <path d="M5 25 23 7h16a2 2 0 0 1 2 2v16L23 43z" ${D} />
    <circle cx="33" cy="15" r="3" ${L} />
    <path d="m16 25 5 5 9-10" />`)}
  ${ill("i-chat", `
    <path d="M20 21h20a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4v5l-6-5H20a4 4 0 0 1-4-4V25a4 4 0 0 1 4-4z" ${L} />
    <path d="M4 9a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H15l-7 6v-6a4 4 0 0 1-4-4z" ${D} />
    <path d="M11 15h.01M18 15h.01M25 15h.01" stroke-width="3.2" />`)}
  ${ill("i-building", `
    <rect x="6" y="5" width="22" height="38" rx="2" ${D} />
    <path d="M12 12h3M19 12h3M12 19h3M19 19h3M12 26h3M19 26h3M14 43v-8h6v8" />
    <path d="M28 26l8-7 8 7v17H28z" ${L} />
    <path d="M34 43v-6h4v6M3 43h42" />`)}
  ${ill("i-doc", `
    <rect x="9" y="7" width="30" height="37" rx="3" ${D} />
    <rect x="17" y="3" width="14" height="8" rx="2" ${L} />
    <path d="M15 19h18M15 25h18M15 31h9" />
    <path d="m27 35 3 3 6-7" />`)}
  ${ill("i-map", `
    <path d="M24 45s-14-12.4-14-23a14 14 0 0 1 28 0c0 10.6-14 23-14 23z" ${D} />
    <circle cx="24" cy="22" r="5" ${L} />`)}
  ${ill("i-time", `
    <circle cx="24" cy="26" r="18" ${D} />
    <circle cx="24" cy="26" r="13" ${L} />
    <path d="M24 18v8l6 4M19 4h10M24 4v4" />`)}
  ${ill("i-shield", `
    <path d="M24 4 8 10v12c0 9.6 6.8 17.2 16 20 9.2-2.8 16-10.4 16-20V10z" ${D} />
    <path d="m17 24 5 5 9-10" />`)}
  ${ill("i-seal", `
    <path d="M24 3l4.5 3.3 5.5-.4 2 5.2 5 2.4-.9 5.5L43 24l-2.9 4.9.9 5.5-5 2.4-2 5.2-5.5-.4L24 45l-4.5-3.3-5.5.4-2-5.2-5-2.4.9-5.5L5 24l2.9-4.9-.9-5.5 5-2.4 2-5.2 5.5.4z" ${D} />
    <circle cx="24" cy="24" r="12" ${L} />
    <path d="m18.5 24 4 4 7-8" />`)}

  ${ill("il-step-call", `
    <rect x="6" y="5" width="20" height="38" rx="4" ${D} />
    <rect x="10" y="11" width="12" height="24" rx="1.5" ${L} />
    <path d="M14 39h4" />
    <path d="M28 13a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4h-3l-5 4v-4a4 4 0 0 1-4-4z" ${L} />
    <path d="M33 16.5h.01M36 16.5h.01M39 16.5h.01" stroke-width="3" />`)}
  ${ill("il-step-callback", `
    <rect x="4" y="9" width="32" height="32" rx="3" ${D} />
    <path d="M4 17h32M12 5v8M28 5v8" />
    <rect x="11" y="22" width="7" height="6" rx="1" ${L} />
    <path d="M22 25h7M11 34h7M22 34h3" />
    <circle cx="37" cy="35" r="9" ${L} />
    <path d="M37 30v5l3 2" />`)}
  ${ill("il-step-quote", `
    <rect x="5" y="7" width="26" height="35" rx="3" ${D} />
    <rect x="12" y="3" width="12" height="7" rx="2" ${L} />
    <path d="M11 18h14M11 24h14M11 30h7" />
    <circle cx="33" cy="31" r="8" ${L} />
    <path d="m39 37 6 6M29.5 31l2.5 2.5 4.5-5" />`)}
  ${ill("il-step-done", `
    <path d="M17 17v-5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" />
    <rect x="4" y="17" width="40" height="25" rx="3" ${D} />
    <path d="M4 27h40" />
    <rect x="20" y="24" width="8" height="7" rx="1.5" ${L} />`)}
</svg>`;

export function Sprite() {
  return <div dangerouslySetInnerHTML={{ __html: ICONS }} />;
}

// Décorative par défaut (aria-hidden). label="…" seulement pour une icône seule, sans texte à côté.
export function Icon({ name, className, viewBox = "0 0 24 24", label }) {
  return (
    <svg className={className} viewBox={viewBox} aria-hidden={label ? undefined : "true"} role={label ? "img" : undefined} aria-label={label}>
      <use href={"#" + name} />
    </svg>
  );
}

export function Stars({ count = 5, className = "stars" }) {
  return (
    <span className={className} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
          <use href="#i-star" />
        </svg>
      ))}
    </span>
  );
}
