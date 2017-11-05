const lerp = (x, y, n) => x * (1 - n) + y * n;
const lerp2d = (c1, c2, n) => [lerp(c1[0], c2[0], n), lerp(c1[1], c2[1], n)];
const lerpDist = (c1, c2, d) => lerp2d(c1, c2, d / Math.sqrt((c1[0] - c2[0]) ** 2 + (c1[1] - c2[1]) ** 2));
const roundLerpDist = (c1, c2, d) => lerpDist(c1, c2, d).map(n => Math.round(100 * n) / 100);

const smooth = (coords, radius = 1) =>
	coords.split(' ').map(c => c.split(',').map(Number)) // svg path to coord array
		.map((e, i, a) => [ // map coordinates to corners
			roundLerpDist(a[(i + 1) % a.length], a[i], radius), //start (from end of current line)
			a[(i + 1) % a.length], // corner coord as control point for curve
			roundLerpDist(a[(i + 1) % a.length], a[(i + 2) % a.length], radius) //end (from start of next line)
		])
		.map((e, i, a) =>
			(i === 0 ? `M${a[a.length - 1][2]} ` : '') + // move to start coordinate
			`L${e[0]} Q${e[1]},${e[2]}` + // line to start of corner + quadratic curve to end of corner
			(i === a.length - 1 ? ' Z' : '') // end path on the last element
		)
		.join(' ');

export default smooth;
