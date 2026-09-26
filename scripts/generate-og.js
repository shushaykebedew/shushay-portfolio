import sharp from "sharp";
import { writeFileSync } from "fs";

const svgContent = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#060913" />
      <stop offset="50%" stop-color="#0b1120" />
      <stop offset="100%" stop-color="#050814" />
    </linearGradient>

    <!-- Brand Accent Gradient -->
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06b6d4" />
      <stop offset="50%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>

    <!-- Grid Pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="1" stroke-opacity="0.4" />
    </pattern>

    <!-- Glow Radial Filters -->
    <radialGradient id="cyanGlow" cx="20%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="emeraldGlow" cx="85%" cy="75%" r="50%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#10b981" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Background Layer -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />

  <!-- Grid Overlay -->
  <rect width="1200" height="630" fill="url(#grid)" />

  <!-- Radial Glow Orbs -->
  <rect width="1200" height="630" fill="url(#cyanGlow)" />
  <rect width="1200" height="630" fill="url(#emeraldGlow)" />

  <!-- Vertical Accent Pillar -->
  <rect x="80" y="180" width="6" height="270" rx="3" fill="url(#brandGrad)" />

  <!-- Content Group -->
  <g transform="translate(120, 0)">

    <!-- Name H1 -->
    <text x="0" y="240" font-family="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" font-weight="900" font-size="64" fill="#ffffff" letter-spacing="-1">
      Shushay Kebedew
    </text>

    <!-- Role Subtitle -->
    <text x="0" y="300" font-family="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" font-weight="800" font-size="34" fill="url(#brandGrad)" letter-spacing="0">
      Full Stack Engineer &amp; AI Specialist
    </text>

    <!-- Divider Line -->
    <line x1="0" y1="335" x2="620" y2="335" stroke="#1e293b" stroke-width="2" />

    <!-- Tech Stack Badges Group -->
    <g transform="translate(0, 365)">
      <!-- Tech Badge 1: React -->
      <rect x="0" y="0" width="105" height="42" rx="12" fill="#0b1120" stroke="#06b6d4" stroke-width="1.5" stroke-opacity="0.5" />
      <text x="52.5" y="26" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#22d3ee" text-anchor="middle">React</text>

      <!-- Tech Badge 2: Next.js -->
      <rect x="120" y="0" width="110" height="42" rx="12" fill="#0b1120" stroke="#06b6d4" stroke-width="1.5" stroke-opacity="0.5" />
      <text x="175" y="26" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#22d3ee" text-anchor="middle">Next.js</text>

      <!-- Tech Badge 3: Node.js -->
      <rect x="245" y="0" width="110" height="42" rx="12" fill="#0b1120" stroke="#06b6d4" stroke-width="1.5" stroke-opacity="0.5" />
      <text x="300" y="26" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#22d3ee" text-anchor="middle">Node.js</text>

      <!-- Tech Badge 4: TypeScript -->
      <rect x="370" y="0" width="130" height="42" rx="12" fill="#0b1120" stroke="#06b6d4" stroke-width="1.5" stroke-opacity="0.5" />
      <text x="435" y="26" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#22d3ee" text-anchor="middle">TypeScript</text>

      <!-- Tech Badge 5: MongoDB -->
      <rect x="515" y="0" width="125" height="42" rx="12" fill="#0b1120" stroke="#06b6d4" stroke-width="1.5" stroke-opacity="0.5" />
      <text x="577.5" y="26" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#22d3ee" text-anchor="middle">MongoDB</text>
    </g>
  </g>

  <!-- Top Right Status Badge -->
  <g transform="translate(880, 80)">
    <rect x="0" y="0" width="240" height="46" rx="23" fill="#0b1120" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.6" />
    <circle cx="28" cy="23" r="6" fill="#10b981" />
    <text x="45" y="29" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="15" fill="#34d399">AVAILABLE FOR WORK</text>
  </g>

  <!-- Bottom Right Branding Group -->
  <g transform="translate(860, 500)">
    <!-- SK Monogram Box -->
    <rect x="190" y="0" width="70" height="70" rx="18" fill="#060913" stroke="url(#brandGrad)" stroke-width="3" />
    <text x="225" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="34" fill="url(#brandGrad)" text-anchor="middle">SK</text>

    <!-- Domain Tag -->
    <text x="175" y="42" font-family="'JetBrains Mono', monospace" font-weight="600" font-size="15" fill="#64748b" text-anchor="end">
      shushaykebedew-portfolio.vercel.app
    </text>
  </g>
</svg>
`;

async function main() {
  const buffer = Buffer.from(svgContent);
  await sharp(buffer)
    .resize(1200, 630)
    .png({ quality: 95 })
    .toFile("public/og-preview.png");
  console.log("Updated public/og-preview.png successfully!");
}

main().catch(console.error);
