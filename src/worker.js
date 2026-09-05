import icons from '../dist/icons.json' assert { type: 'json' };

// Layout constants
const ICON_SIZE = 48;
const PADDING = 0;          // spacing inside the box around the icon
const GAP = 8;              // space between boxes
const BOX = ICON_SIZE;      // box size (48x48)
const RADIUS = 12;          // rounded corner radius
const BG = '#1a1b2e';       // dark navy background

/**
 * Escape a string for safe use inside SVG attributes.
 */
function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;');
}

/**
 * Render a single icon box with clipping.
 */
function renderIcon(name, x, y, index) {
  const icon = icons[name];
  if (!icon) return '';

  const clipId = `clip-${index}`;

  return `
    <g transform="translate(${x}, ${y})">
      <rect width="${BOX}" height="${BOX}" rx="${RADIUS}" fill="${BG}"/>
      <clipPath id="${clipId}">
        <rect width="${BOX}" height="${BOX}" rx="${RADIUS}"/>
      </clipPath>
      <g clip-path="url(#${clipId})">
        <svg x="${PADDING}" y="${PADDING}" width="${ICON_SIZE}" height="${ICON_SIZE}"
             viewBox="${escapeAttr(icon.viewBox)}" preserveAspectRatio="xMidYMid meet">
          ${icon.content}
        </svg>
      </g>
    </g>
  `;
}

/**
 * Build the complete SVG from a list of icon names.
 */
function buildSvg(names, perline) {
  const valid = names.filter((n) => icons[n]);

  if (valid.length === 0) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="320" height="48">
        <text x="8" y="28" font-family="monospace" font-size="13" fill="#e05252">
          No valid icons found
        </text>
      </svg>
    `;
  }

  const columns = perline && perline > 0 ? Math.min(perline, valid.length) : valid.length;
  const rows = Math.ceil(valid.length / columns);

  const width = columns * BOX + (columns - 1) * GAP;
  const height = rows * BOX + (rows - 1) * GAP;

  let body = '';

  valid.forEach((name, idx) => {
    const col = idx % columns;
    const row = Math.floor(idx / columns);
    const x = col * (BOX + GAP);
    const y = row * (BOX + GAP);
    body += renderIcon(name, x, y, idx);
  });

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"
         viewBox="0 0 ${width} ${height}" fill="none">
      ${body}
    </svg>
  `;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname !== '/icons') {
      return new Response('Not found', { status: 404 });
    }

    const iParam = url.searchParams.get('i') || '';
    const names = iParam
      .split(',')
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);

    if (names.length === 0) {
      return new Response('Missing "i" query parameter, e.g. ?i=js,html,css', {
        status: 400,
      });
    }

    const perlineParam = url.searchParams.get('perline');
    const perline = perlineParam ? parseInt(perlineParam, 10) : 0;

    const svg = buildSvg(names, perline);

    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=60, immutable',
        'Access-Control-Allow-Origin': '*',
      },
    });
  },
};