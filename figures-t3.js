/**
 * Figure builders for paper T3. Each function returns an inline SVG string.
 * Exposed as window.OC_FIG_T3 and used by questions-t3.js.
 */
(function () {
  const INK = "#243044";
  const FILL = "#e3e9f4";
  const SOFT = "#f1f4fa";
  const ACCENT = "#2a5fbf";

  const svg = (w, h, label, body) =>
    '<svg viewBox="0 0 ' + w + " " + h + '" width="' + w + '" height="' + h +
    '" role="img" aria-label="' + label + '" font-family="Outfit, system-ui, sans-serif">' + body + "</svg>";

  const text = (x, y, s, size, anchor, extra) =>
    '<text x="' + x + '" y="' + y + '" font-size="' + (size || 12) + '" text-anchor="' + (anchor || "middle") +
    '" fill="' + INK + '" ' + (extra || "") + ">" + s + "</text>";

  /** Q4: garden with tiled path (30 m by 20 m outer, 20 m by 10 m inner). */
  function garden() {
    return svg(260, 170, "Garden 20 m by 10 m surrounded by a path 5 m wide",
      '<rect x="20" y="10" width="210" height="140" fill="' + FILL + '" stroke="' + INK + '" stroke-width="1.5"/>' +
      '<rect x="55" y="45" width="140" height="70" fill="#fff" stroke="' + INK + '" stroke-width="1.5"/>' +
      text(125, 38, "20 m", 12) + text(212, 84, "10 m", 12) +
      text(37, 84, "5 m", 11) + text(125, 135, "5 m path of square tiles", 11) +
      '<path d="M20 79h35M20 75v8M55 75v8" stroke="' + ACCENT + '" fill="none"/>');
  }

  /** Q8: population pyramid. Values are in units of 100 000. */
  function populationPyramid() {
    const male = [15, 13, 16, 15, 15, 15, 12, 6.4, 3, 0.5];
    const female = [15.4, 14.4, 17.5, 16.5, 16, 15.4, 12.8, 6.8, 4.3, 1];
    const ages = ["0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80-89", "90-100"];
    const s = 13, zl = 250, zr = 290, top = 30, row = 22, bh = 16;
    let g = "";
    ages.forEach((a, i) => {
      const y = top + (9 - i) * row;
      g += '<rect x="' + (zl - male[i] * s) + '" y="' + y + '" width="' + male[i] * s + '" height="' + bh +
        '" fill="#fff" stroke="' + INK + '"/>';
      g += '<rect x="' + zr + '" y="' + y + '" width="' + female[i] * s + '" height="' + bh +
        '" fill="#fff" stroke="' + INK + '"/>';
      g += text(270, y + 12, a, 9);
    });
    const axisY = top + 10 * row + 4;
    g += '<path d="M' + (zl - 15 * s) + " " + axisY + "H" + zl + "M" + zr + " " + axisY + "H" + (zr + 15 * s) + '" stroke="' + INK + '"/>';
    [0, 5, 10, 15].forEach((t) => {
      g += '<path d="M' + (zl - t * s) + " " + axisY + "v5M" + (zr + t * s) + " " + axisY + 'v5" stroke="' + INK + '"/>';
      g += text(zl - t * s, axisY + 17, t, 10) + text(zr + t * s, axisY + 17, t, 10);
    });
    g += text(270, 18, "Age", 12) + text(110, 50, "Male", 13) + text(430, 50, "Female", 13);
    g += text(270, axisY + 36, "Population (100 000s)", 12);
    return svg(540, 290, "Population pyramid by age group and gender", g);
  }

  /**
   * Q10: triangular grid of side 4 (16 small triangles).
   * up = list of [row, k] shaded up triangles, down = list of [row, j] shaded down triangles.
   */
  function triangleGrid(up, down, hilite) {
    const s = 48, h = 41.6, x0 = 20, y0 = 10;
    const has = (list, a, b) => list.some((p) => p[0] === a && p[1] === b);
    let g = "";
    for (let r = 1; r <= 4; r++) {
      for (let k = 0; k < r; k++) {
        const ax = x0 + 2 * s + (k - (r - 1) / 2) * s, ay = y0 + (r - 1) * h;
        const dark = has(up, r, k);
        const fresh = (hilite || []).some((p) => p[0] === r && p[1] === k && p[2] === "u");
        g += '<polygon points="' + ax + "," + ay + " " + (ax - s / 2) + "," + (ay + h) + " " + (ax + s / 2) + "," + (ay + h) +
          '" fill="' + (fresh ? ACCENT : dark ? INK : "#fff") + '" stroke="' + INK + '"/>';
      }
      for (let j = 0; j < r - 1; j++) {
        const lx = x0 + 2 * s + (j - (r - 1) / 2) * s, ly = y0 + (r - 1) * h;
        const dark = has(down, r, j);
        const fresh = (hilite || []).some((p) => p[0] === r && p[1] === j && p[2] === "d");
        g += '<polygon points="' + lx + "," + ly + " " + (lx + s) + "," + ly + " " + (lx + s / 2) + "," + (ly + h) +
          '" fill="' + (fresh ? ACCENT : dark ? INK : "#fff") + '" stroke="' + INK + '"/>';
      }
    }
    return svg(2 * s * 2 + 40, 4 * h + 20, "Triangle made of 16 small triangles, some shaded", g);
  }

  /** Q11: front view of Steps 1 to 3 as stacked layers (3 by 3 and 1 by 1 and so on). */
  function steps() {
    const c = 18;
    const stack = (x, y, widths, label) => {
      let g = "";
      widths.forEach((w, i) => {
        g += '<rect x="' + (x + ((widths[0] - w) * c) / 2) + '" y="' + (y - (i + 1) * c) + '" width="' + w * c +
          '" height="' + c + '" fill="' + FILL + '" stroke="' + INK + '"/>';
      });
      return g + text(x + (widths[0] * c) / 2, y + 16, label, 12);
    };
    return svg(330, 130, "Steps 1 to 3 of a square pyramid of blocks, side view",
      stack(20, 90, [1], "Step 1") + stack(90, 90, [3, 1], "Step 2") + stack(190, 90, [5, 3, 1], "Step 3") +
      text(165, 125, "Each layer is a square of blocks: 1 by 1, 3 by 3, 5 by 5 and so on", 11));
  }

  /** Q13: 4 by 4 by 2 block (base solid, top layer has a 2 by 2 hollow). */
  function hollowBlock() {
    const c = 30, dx = 12, dy = -9, fx = 12, fy = 100;
    const P = (u, v) => [fx + c * u + dx * v, fy + dy * v];
    const pt = (p) => p[0] + "," + p[1];
    let g = '<rect x="' + fx + '" y="' + fy + '" width="' + 4 * c + '" height="' + 2 * c + '" fill="' + FILL + '" stroke="' + INK + '"/>';
    for (let i = 1; i < 4; i++) g += '<path d="M' + (fx + i * c) + " " + fy + "v" + 2 * c + '" stroke="' + INK + '"/>';
    g += '<path d="M' + fx + " " + (fy + c) + "h" + 4 * c + '" stroke="' + INK + '"/>';
    g += '<polygon points="' + [P(0, 0), P(4, 0), P(4, 4), P(0, 4)].map(pt).join(" ") + '" fill="' + SOFT + '" stroke="' + INK + '"/>';
    for (let i = 1; i < 4; i++) {
      g += '<path d="M' + pt(P(i, 0)) + "L" + pt(P(i, 4)) + "M" + pt(P(0, i)) + "L" + pt(P(4, i)) + '" stroke="' + INK + '" stroke-width="0.7"/>';
    }
    g += '<polygon points="' + [P(1, 1), P(3, 1), P(3, 3), P(1, 3)].map(pt).join(" ") + '" fill="#b8c4dc" stroke="' + INK + '"/>';
    g += '<polygon points="' + [P(4, 0), P(4, 4)].map(pt).join(" ") + " " + (P(4, 4)[0]) + "," + (P(4, 4)[1] + 2 * c) + " " + (P(4, 0)[0]) + "," + (P(4, 0)[1] + 2 * c) + '" fill="#d4dcec" stroke="' + INK + '"/>';
    g += '<path d="M' + P(4, 1)[0] + " " + P(4, 1)[1] + "v" + 2 * c + "M" + P(4, 2)[0] + " " + P(4, 2)[1] + "v" + 2 * c + "M" + P(4, 3)[0] + " " + P(4, 3)[1] + "v" + 2 * c + '" stroke="' + INK + '" stroke-width="0.7"/>';
    g += '<path d="M' + P(4, 0)[0] + " " + (P(4, 0)[1] + c) + "L" + P(4, 4)[0] + " " + (P(4, 4)[1] + c) + '" stroke="' + INK + '" stroke-width="0.7"/>';
    return svg(200, 170, "Block of cubes with a hollow in the top layer", g);
  }

  /** Q15: number pyramid with six boxes at the base. */
  function numberPyramid() {
    const base = [76, 45, 35, 47, 62, 12];
    const w = 54, h = 30;
    let g = "";
    for (let r = 0; r < 6; r++) {
      const n = r + 1, x = 12 + ((6 - n) * w) / 2, y = 8 + r * (h + 2);
      for (let i = 0; i < n; i++) {
        g += '<rect x="' + (x + i * w) + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#fff" stroke="' + INK + '"/>';
        if (r === 0) g += text(x + w / 2, y + 20, "x", 15, "middle", 'font-style="italic"');
        if (r === 5) g += text(x + i * w + w / 2, y + 20, base[i], 14);
      }
    }
    return svg(350, 205, "Number pyramid with bottom row 76, 45, 35, 47, 62, 12", g);
  }

  /** Q16: three squares whose corners follow a rule. */
  function cornerSquares() {
    const sq = (x, tl, tr, bl, br, mid) =>
      '<rect x="' + (x + 12) + '" y="22" width="86" height="86" fill="#fff" stroke="' + INK + '" stroke-width="1.4"/>' +
      text(x + 6, 20, tl, 13) + text(x + 106, 20, tr, 13) + text(x + 6, 124, bl, 13) + text(x + 106, 124, br, 13) +
      text(x + 55, 70, mid, 15);
    return svg(380, 135, "Three squares with numbers at the corners and one in the middle",
      sq(0, 2, 5, 7, 3, 31) + sq(125, 10, 11, 9, 8, 182) + sq(250, 6, 4, 13, "?", 63));
  }

  /** Draws a symbol in a unit square. Used by net and cube views. */
  function symbol(kind) {
    const sw = 'vector-effect="non-scaling-stroke" stroke="' + INK + '" stroke-width="1.3"';
    if (kind === "dot") return '<circle cx="0.5" cy="0.5" r="0.26" fill="' + INK + '"/>';
    if (kind === "circle") return '<circle cx="0.5" cy="0.5" r="0.26" fill="#fff" ' + sw + "/>";
    if (kind === "square") return '<rect x="0.28" y="0.28" width="0.44" height="0.44" fill="#fff" ' + sw + "/>";
    const pts = [];
    for (let i = 0; i < 10; i++) {
      const r = i % 2 === 0 ? 0.34 : 0.14, a = (i * Math.PI) / 5;
      pts.push((0.5 + r * Math.sin(a)).toFixed(3) + "," + (0.5 + r * Math.cos(a)).toFixed(3));
    }
    return '<polygon points="' + pts.join(" ") + '" fill="#fff" ' + sw + "/>";
  }

  /** Q17: cube net. Row of four faces (dot, star, circle, dot) with a square above and below the star. */
  function cubeNet() {
    const c = 44, ox = 10, oy = 8;
    const cells = [[1, 0, "square"], [0, 1, "dot"], [1, 1, "star"], [2, 1, "circle"], [3, 1, "dot"], [1, 2, "square"]];
    let g = "";
    cells.forEach((k) => {
      const x = ox + k[0] * c, y = oy + k[1] * c;
      g += '<rect x="' + x + '" y="' + y + '" width="' + c + '" height="' + c + '" fill="#fff" stroke="' + INK + '" stroke-width="1.4"/>' +
        '<g transform="matrix(' + c + " 0 0 " + c + " " + x + " " + y + ')">' + symbol(k[2]) + "</g>";
    });
    return svg(200, 150, "Cube net: a row of dot, star, circle, dot with a square above and below the star", g);
  }

  /** Q17 options: a cube seen with front, top and right faces. */
  function cubeView(front, top, right) {
    const face = (pts, fill) => '<polygon points="' + pts + '" fill="' + fill + '" stroke="' + INK + '" stroke-width="1.4"/>';
    return svg(104, 96, "Cube view with front " + front + ", top " + top + ", right " + right,
      face("10,85 70,85 70,25 10,25", "#fff") + face("10,25 70,25 92,9 32,9", SOFT) + face("70,85 92,69 92,9 70,25", "#e6ebf4") +
      '<g transform="matrix(60 0 0 -60 10 85)">' + symbol(front) + "</g>" +
      '<g transform="matrix(60 0 22 -16 10 25)">' + symbol(top) + "</g>" +
      '<g transform="matrix(22 -16 0 -60 70 85)">' + symbol(right) + "</g>");
  }

  /** Q19: balance with unknown black ovals. */
  function balance() {
    const box = (x, y, label, w) =>
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="30" fill="#fff" stroke="' + INK + '"/>' + text(x + w / 2, y + 20, label, 12);
    const tri = (x, label) =>
      '<polygon points="' + (x + 25) + ",95 " + x + ",140 " + (x + 50) + ',140" fill="#fff" stroke="' + INK + '"/>' + text(x + 25, 130, label, 11);
    return svg(540, 190, "Balance: three 7 kg boxes, two ovals and an 8 kg triangle against two 16.5 kg boxes and an 8 kg triangle",
      '<path d="M10 140H530" stroke="' + INK + '" stroke-width="1.6"/>' +
      '<polygon points="300,142 288,162 312,162" fill="none" stroke="' + INK + '" stroke-width="1.6"/>' +
      box(20, 80, "7 kg", 60) + box(20, 110, "7 kg", 60) + box(80, 110, "7 kg", 60) +
      '<ellipse cx="170" cy="128" rx="22" ry="11" fill="' + INK + '"/><ellipse cx="216" cy="128" rx="22" ry="11" fill="' + INK + '"/>' +
      tri(240, "8 kg") + box(350, 80, "16.5 kg", 80) + box(350, 110, "16.5 kg", 80) + tri(440, "8 kg"));
  }

  /** Q21: rectangular fence 12 m by 4 m. */
  function fence() {
    return svg(270, 120, "Rectangle 12 m long and 4 m wide",
      '<rect x="40" y="30" width="190" height="60" fill="#fff" stroke="' + INK + '" stroke-width="1.5"/>' +
      text(135, 22, "12 m", 12) + text(20, 64, "4 m", 12) + text(135, 112, "(Not to scale)", 11));
  }

  window.OC_FIG_T3 = {
    garden, populationPyramid, triangleGrid, steps, hollowBlock, numberPyramid, cornerSquares, cubeNet, cubeView, balance, fence
  };
})();
