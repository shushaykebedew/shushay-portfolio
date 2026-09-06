/**
 * Compresses all large images in src/assets to under 200KB.
 * Run: node scripts/compress-images.mjs
 */
import sharp from "sharp";
import { readdirSync, statSync, renameSync } from "fs";
import { join, extname, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS = join(__dirname, "../src/assets");
const TARGET_KB = 200;

const files = readdirSync(ASSETS).filter((f) =>
  [".jpg", ".jpeg", ".png", ".webp"].includes(extname(f).toLowerCase())
);

for (const file of files) {
  const input = join(ASSETS, file);
  const sizeKB = statSync(input).size / 1024;
  if (sizeKB <= TARGET_KB) {
    console.log(`✓ ${file} — ${Math.round(sizeKB)}KB (already small enough)`);
    continue;
  }

  const ext = extname(file).toLowerCase();
  const isJpg = ext === ".jpg" || ext === ".jpeg";
  const isPng = ext === ".png";

  // Try progressively lower quality until under TARGET_KB
  let quality = 75;
  let buf;
  while (quality >= 30) {
    const pipeline = sharp(input).resize({ width: 1200, withoutEnlargement: true });
    buf = isJpg
      ? await pipeline.jpeg({ quality, mozjpeg: true }).toBuffer()
      : isPng
      ? await pipeline.png({ quality, compressionLevel: 9 }).toBuffer()
      : await pipeline.webp({ quality }).toBuffer();

    if (buf.length / 1024 <= TARGET_KB) break;
    quality -= 5;
  }

  await sharp(buf).toFile(input + ".tmp");
  renameSync(input + ".tmp", input);
  console.log(
    `✓ ${file} — ${Math.round(sizeKB)}KB → ${Math.round(buf.length / 1024)}KB (q${quality})`
  );
}
console.log("Done.");
