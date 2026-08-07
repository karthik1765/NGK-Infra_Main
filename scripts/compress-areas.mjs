import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';

const DEST = 'public/areas';
mkdirSync(DEST, { recursive: true });

// Mapping: destination filename → source path in Downloads
const images = [
  { dest: 'gajuwaka.png',        src: 'C:/Users/karth/Downloads/Gajuwaka.png' },
  { dest: 'kommadi.png',         src: 'C:/Users/karth/Downloads/kommadhi.png' },
  { dest: 'rushikonda.png',      src: 'C:/Users/karth/Downloads/rushikonda.png' },
  { dest: 'madhurawada.png',     src: 'C:/Users/karth/Downloads/madhurawada.png' },
  { dest: 'bheemunipatnam.png',  src: 'C:/Users/karth/Downloads/bheemili.png' },
  { dest: 'pendurthi.png',       src: 'C:/Users/karth/Downloads/pendurthi.png' },
  { dest: 'duvvada.png',         src: 'C:/Users/karth/Downloads/duvvada.png' },
  { dest: 'anakapalle.png',      src: 'C:/Users/karth/Downloads/anakapalle.png' },
  { dest: 'tagarapuvalasa.png',  src: 'C:/Users/karth/Downloads/thagarapuvalasa.png' },
  { dest: 'maddilapalem.png',    src: 'C:/Users/karth/Downloads/maddilapalem.png' },
  { dest: 'simhachalam.png',     src: 'C:/Users/karth/Downloads/simhachallam.png' },
  // Keep existing AI-generated images for missing ones:
  // sabbavaram.png, beach_oriented.png, vizag_city.png already exist
];

let processed = 0;
let skipped = 0;

for (const { dest, src } of images) {
  const destPath = path.join(DEST, dest);
  if (!existsSync(src)) {
    console.log(`⚠️  SKIP (not found): ${src}`);
    skipped++;
    continue;
  }
  try {
    await sharp(src)
      .resize(600, 450, { fit: 'cover', position: 'centre' }) // Resize to uniform 600×450
      .png({ compressionLevel: 9, quality: 80 })              // Max PNG compression
      .toFile(destPath);

    // Report size reduction
    const { size: inSize } = await import('fs').then(fs => ({ size: fs.statSync(src).size }));
    const { size: outSize } = await import('fs').then(fs => ({ size: fs.statSync(destPath).size }));
    const saved = Math.round((1 - outSize / inSize) * 100);
    console.log(`✅ ${dest.padEnd(25)} ${(inSize/1024).toFixed(0).padStart(6)} KB → ${(outSize/1024).toFixed(0).padStart(5)} KB  (${saved}% smaller)`);
    processed++;
  } catch (err) {
    console.error(`❌ ERROR processing ${src}:`, err.message);
  }
}

console.log(`\nDone! ${processed} compressed, ${skipped} skipped.`);
console.log('Note: sabbavaram.png, beach_oriented.png, vizag_city.png kept as-is (AI generated).');
