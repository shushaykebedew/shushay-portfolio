import { useState } from "react";

export default function LazyImage({ src, alt, className, width, height }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

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
