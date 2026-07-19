import { useState } from "react";

export default function LazyImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded" />
      )}

      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"
          }`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
      />

      {error && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
          Failed to load image
        </div>
      )}
    </div>
  );
}
