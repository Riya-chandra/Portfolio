const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(process.cwd(), "public");

// Images to optimize
const imagesToOptimize = [
	"rocket.jpg",
	"wiki.jpg",
	"aurville.png",
	"image.png",
	"p2.png",
	"p3.png",
	"profile.jpg",
];

async function optimizeImage(filename) {
	const inputPath = path.join(publicDir, filename);
	const ext = path.extname(filename);
	const name = path.basename(filename, ext);

	// Create backup
	const backupPath = path.join(publicDir, `${name}_original${ext}`);

	if (!fs.existsSync(inputPath)) {
		console.log(`⚠️  ${filename} not found, skipping...`);
		return;
	}

	// Backup original if not already backed up
	if (!fs.existsSync(backupPath)) {
		fs.copyFileSync(inputPath, backupPath);
		console.log(`📦 Backed up: ${filename} -> ${name}_original${ext}`);
	}

	const stats = fs.statSync(inputPath);
	const originalSize = (stats.size / 1024 / 1024).toFixed(2);

	try {
		// Optimize based on file type
		if (ext === ".jpg" || ext === ".jpeg") {
			await sharp(inputPath)
				.resize(1920, null, {
					// Max width 1920px, maintain aspect ratio
					fit: "inside",
					withoutEnlargement: true,
				})
				.jpeg({
					quality: 80,
					progressive: true,
					mozjpeg: true,
				})
				.toFile(inputPath + ".tmp");
		} else if (ext === ".png") {
			await sharp(inputPath)
				.resize(1920, null, {
					fit: "inside",
					withoutEnlargement: true,
				})
				.png({
					quality: 80,
					compressionLevel: 9,
					adaptiveFiltering: true,
				})
				.toFile(inputPath + ".tmp");
		}

		// Replace original with optimized
		fs.renameSync(inputPath + ".tmp", inputPath);

		const newStats = fs.statSync(inputPath);
		const newSize = (newStats.size / 1024 / 1024).toFixed(2);
		const saved = ((1 - newStats.size / stats.size) * 100).toFixed(1);

		console.log(`✅ ${filename}: ${originalSize}MB -> ${newSize}MB (saved ${saved}%)`);
	} catch (error) {
		console.error(`❌ Error optimizing ${filename}:`, error.message);
	}
}

async function optimizeAll() {
	console.log("🖼️  Starting image optimization...\n");

	for (const image of imagesToOptimize) {
		await optimizeImage(image);
	}

	console.log("\n✨ Image optimization complete!");
	console.log('💡 Original images backed up with "_original" suffix');
}

optimizeAll();
