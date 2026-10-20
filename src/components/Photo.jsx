// Vraie photo si src est rempli dans site.js, sinon un emplacement hachuré de même taille avec une légende (.ph)
export default function Photo({ src, label, className = "", ...props }) {
  if (src) return <img className={className || undefined} src={src} {...props} />;
  return <div className={(className + " ph").trim()} data-label={label} aria-hidden="true" />;
}
