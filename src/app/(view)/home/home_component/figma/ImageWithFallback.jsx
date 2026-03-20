const FALLBACK_SRC =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
      <rect width="1200" height="800" fill="#e2e8f0" />
      <rect x="120" y="120" width="960" height="560" rx="32" fill="#cbd5e1" />
      <text
        x="600"
        y="400"
        text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="42"
        fill="#475569"
      >
        Gambar tidak tersedia
      </text>
    </svg>
  `);

export function ImageWithFallback({ src, alt, ...props }) {
  return (
    <img
      {...props}
      src={src}
      alt={alt}
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = FALLBACK_SRC;
      }}
    />
  );
}
