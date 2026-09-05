/**
 * Generates public/og-preview.png — a 1200×630 social share image.
 * Run once: node scripts/generate-og.mjs
 * Requires: sharp (npm install --save-dev sharp)
 */

import sharp from "sharp";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "../public/og-preview.png");

const W = 1200;
const H = 630;

// Build the image as an SVG string, then rasterise with sharp
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#0f0f1a"/>
      <stop offset="50%"  stop-color="#12103a"/>
      <stop offset="100%" stop-color="#0a0a1e"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"   stop-color="#6366f1"/>
      <stop offset="50%"  stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
    <linearGradient id="roleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#818cf8"/>
      <stop offset="50%"  stop-color="#a78bfa"/>
      <stop offset="100%" stop-color="#f472b6"/>
    </linearGradient>
    <linearGradient id="mono" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#8b5cf6"/>
    </linearGradient>
    <radialGradient id="glow1" cx="17%" cy="29%" r="35%">
      <stop offset="0%"   stop-color="#6366f1" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="88%" cy="80%" r="30%">
      <stop offset="0%"   stop-color="#8b5cf6" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow1)"/>
  <rect width="${W}" height="${H}" fill="url(#glow2)"/>

  <!-- Subtle grid -->
  ${Array.from({ length: Math.ceil(W / 60) + 1 }, (_, i) =>
    `<line x1="${i * 60}" y1="0" x2="${i * 60}" y2="${H}" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>`
  ).join("")}
  ${Array.from({ length: Math.ceil(H / 60) + 1 }, (_, i) =>
    `<line x1="0" y1="${i * 60}" x2="${W}" y2="${i * 60}" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>`
  ).join("")}

  <!-- Left accent bar -->
  <rect x="80" y="180" width="6" height="270" rx="3" fill="url(#accent)"/>

  <!-- Name -->
  <text x="116" y="285" font-family="system-ui, sans-serif" font-size="68" font-weight="700" fill="#ffffff">Shushay Kebedew</text>

  <!-- Role -->
  <text x="116" y="355" font-family="system-ui, sans-serif" font-size="36" font-weight="500" fill="url(#roleGrad)">Full Stack Developer</text>

  <!-- Divider -->
  <line x1="116" y1="385" x2="700" y2="385" stroke="rgba(255,255,255,0.10)" stroke-width="1"/>

  <!-- Tech pills -->
  ${[
    { label: "React",      x: 116 },
    { label: "Next.js",    x: 220 },
    { label: "Node.js",    x: 334 },
    { label: "TypeScript", x: 446 },
    { label: "MongoDB",    x: 590 },
  ].map(({ label, x }) => `
    <rect x="${x}" y="408" width="${label.length * 13 + 24}" height="38" rx="19"
          fill="rgba(99,102,241,0.18)" stroke="rgba(99,102,241,0.45)" stroke-width="1"/>
    <text x="${x + 12}" y="432" font-family="system-ui, sans-serif" font-size="20" font-weight="500" fill="#a5b4fc">${label}</text>
  `).join("")}

  <!-- Available badge -->
  <rect x="870" y="55" width="250" height="48" rx="24"
        fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.40)" stroke-width="1.5"/>
  <circle cx="898" cy="79" r="7" fill="#10b981"/>
  <text x="914" y="85" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#34d399">Available for work</text>

  <!-- URL -->
  <text x="${W - 80}" y="${H - 48}" font-family="system-ui, monospace" font-size="17" fill="rgba(148,163,184,0.6)" text-anchor="end">shushaykebedew-portfolio.vercel.app</text>

  <!-- SK monogram -->
  <rect x="${W - 92}" y="${H - 98}" width="62" height="62" rx="12" fill="url(#mono)"/>
  <text x="${W - 73}" y="${H - 51}" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#ffffff">SK</text>
</svg>
`.trim();

await sharp(Buffer.from(svg))
  .png({ quality: 95, compressionLevel: 8 })
  .resize(W, H)
  .toFile(OUT);

console.log(`✓ OG preview written → public/og-preview.png (${W}×${H})`);
