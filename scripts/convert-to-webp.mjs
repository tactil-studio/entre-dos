import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import { join, extname, basename } from "path";

const ASSETS_DIR = "src/assets";
const QUALITY = 82;

const files = await readdir(ASSETS_DIR);
const targets = files.filter((f) => /\.(jpg|jpeg|png)$/i.test(f));

for (const file of targets) {
  const src = join(ASSETS_DIR, file);
  const dest = join(ASSETS_DIR, basename(file, extname(file)) + ".webp");

  await sharp(src).webp({ quality: QUALITY }).toFile(dest);

  const [srcStat, destStat] = await Promise.all([
    import("fs").then((m) => m.promises.stat(src)),
    import("fs").then((m) => m.promises.stat(dest)),
  ]);

  const saving = (((srcStat.size - destStat.size) / srcStat.size) * 100).toFixed(1);
  console.log(`✓ ${file} → ${basename(dest)}  (${(srcStat.size / 1024).toFixed(0)} KB → ${(destStat.size / 1024).toFixed(0)} KB, -${saving}%)`);

  await unlink(src);
}

console.log(`\nDone — ${targets.length} images converted and originals deleted.`);
