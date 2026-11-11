import { useState } from "react";

export default function LazyImage({ src, alt, className, width, height }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (!src) {
    return (
      <div className={`relative ${className} flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-200 to-cyan-100 dark:from-slate-800 dark:via-slate-900 dark:to-cyan-950`} role="img" aria-label={alt}>
        <span className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-400">Preview unavailable</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 animate-pulse rounded" />
      )}

      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"
          }`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
        decoding="async"
        width={width}
        height={height}
      />

      {error && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
          Failed to load image
        </div>
      )}
    </div>
  );
}
