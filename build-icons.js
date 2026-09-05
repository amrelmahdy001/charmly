const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'icons');
const distDir = path.join(__dirname, 'dist');

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

/**
 * Extract the viewBox attribute from raw SVG content.
 * Falls back to width/height attributes, or 24x24 as default.
 */
function extractViewBox(raw) {
  const m = raw.match(/viewBox=["']([^"']+)["']/i);
  if (m) return m[1].trim();
  
  const w = raw.match(/\swidth=["']([0-9.]+)(?:px)?["']/i);
  const h = raw.match(/\sheight=["']([0-9.]+)(?:px)?["']/i);
  return `0 0 ${w ? w[1] : 24} ${h ? h[1] : 24}`;
}

/**
 * Extract the inner content of an SVG file.
 * Removes anything before the opening <svg> tag and after the closing </svg> tag.
 */
function extractInner(raw) {
  const svgStart = raw.indexOf('<svg');
  if (svgStart === -1) return null;
  
  const openTagEnd = raw.indexOf('>', svgStart);
  const closeTagStart = raw.lastIndexOf('</svg>');
  
  if (openTagEnd === -1 || closeTagStart === -1) return null;
  
  return raw.slice(openTagEnd + 1, closeTagStart).trim();
}

// Read all SVG files from the icons directory
const icons = {};
const files = fs.readdirSync(iconsDir);
let skipped = 0;

for (const file of files) {
  if (!file.endsWith('.svg')) continue;
  
  const name = file.replace('.svg', '').toLowerCase();
  const raw = fs.readFileSync(path.join(iconsDir, file), 'utf8');
  
  const viewBox = extractViewBox(raw);
  const content = extractInner(raw);
  
  if (!content) {
    console.warn(`⚠️  Skipped "${file}": unable to parse SVG content.`);
    skipped++;
    continue;
  }
  
  // Store only viewBox and inner content — not the full file
  icons[name] = { viewBox, content };
}

// Write the generated icon data to dist/icons.json
fs.writeFileSync(path.join(distDir, 'icons.json'), JSON.stringify(icons));

console.log(`✅ Generated ${Object.keys(icons).length} icons`);
if (skipped) {
  console.log(`   (Skipped ${skipped} file${skipped !== 1 ? 's' : ''} — check warnings above)`);
}