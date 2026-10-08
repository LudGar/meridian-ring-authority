// MRA-01 Meridian · Wall Standard WK-1 — the single source for every wall in the project.
// Axes: Y up · every piece faces +Z (the habitable / room side) · width runs along +X · origin at the bottom-left of the face plane.
// All widths are multiples of the 4 m module; rim and hall pieces tile on the 20 m bay.
export const SPEC = {
  standard: 'WK-1', revision: 'R2 · 25 km wall, 4 km thick, T1–T8, root to −8 km (ring-build sheets)', units: 'metres', axes: 'Y up; face toward +Z (habitable side); width along +X; origin bottom-left of the face plane',
  module: 4, bay: 20,
  panel: { size: 4, faceDepth: 0.3, frameDepth: 0.3, gap: 0.04, chamfer: 0.28, types: ['P-01 structural', 'P-01A aged/repair', 'P-01X decommissioned', 'P-02 energy', 'P-03 thermal', 'P-04 utility', 'P-05 access'] },
  bayFrame: { mullion: { w: 0.4, proud: 0.3 }, transom: { w: 0.4, proud: 0.34 }, rule: 'each bay owns its left mullion and bottom transom' },
  decalRule: 'every stripe, lane or marking stands at least 0.04 m proud of the surface it sits on; no coplanar faces',
  rim: {
    height: 25000, thickness: 4000, faceZone: 60, shell: 12, footY: 1120,
    foot: { y: 1120, h: 80, plinth: [1120, 1140], firstBays: [1140, 1200], door: { w: 10, h: 7 } },
    storey: { h: 100, startsAt: 1200, gallery: { h: 8, inset: 4 }, note: 'galleries every 100 m inside the face zone' },
    ledges: { first: 2100, every: 2000, last: 24100, depth: 40, slab: 3, floodlightEvery: 400 },
    crest: { teal: 24600, lip: 25000, chamfer: 400 },
    buttress: { every: 100, at: '0 mod 100', tiers: [{ id: 'A', from: 1120, to: 1320, w: 12, d: 12 }, { id: 'B', from: 1320, to: 1520, w: 10, d: 8 }, { id: 'C', from: 1520, to: 'crest', w: 8, d: 5 }] },
    energyLane: { every: 100, at: '50 mod 100', w: 2 },
    thermalBand: 'P-03 bays by sector, R-17 reference: 300–380 m above the foot (1 420–1 500 m)',
    shafts: { lift: [20, 32], riser: [42, 48], note: 'depth into the wall from the inner face' },
    ballastCores: { crest: { u: [600, 3400], y: [15000, 24400] }, foot: { u: [400, 3600], y: [-7600, -5400] } },
  },
  terraces: { count: 8, depth: 2000, rise: 140, startsFromWall: 16000, base: -9, retaining: 1.2, coping: { w: 2.6, h: 0.8 }, soil: 2.5, road: { fromEdge: 16, toEdge: 6 }, gravityBand: { below: 6, h: 2 },
    steps: [1, 2, 3, 4, 5, 6, 7, 8].map(i => ({ id: 'T' + i, top: 140 * i, fromWall: [16000 - 2000 * i, 18000 - 2000 * i] })) },
  root: { top: 1120, base: -7988, thickness: 4000, cell: { size: 320, pitch: 400 }, jointGallery: 10, rimMain: { y: [-2000, -1950], void: [20, 140] } },
  layers: { surface: 0, L1: [-9, -28], L2: [-30, -53], L3: [-56, -116], L5: [-124, -1950], L6: [-1950, -2000], hull: [-2000, -7988], outerSkin: [-7988, -8000] },
  ballast: { top: -6000, thickness: { centre: 23, wall: 63 }, halfWidth: 160000,
    profile: [[0, 23.3], [40, 23.6], [80, 24.9], [100, 26.1], [120, 28.4], [130, 29.9], [140, 33.5], [145, 34.7], [150, 38.5], [153, 42.5], [155, 47], [157, 53.4], [158, 56.9], [159, 60.5], [160, 63]],
    profileNote: 'thickness in m by km from the centre line (Ballast Layer sheet §3, 10⁹ kg/m³)', mass: '4.0e23 kg (5.4 Moon masses), walls carry a quarter', containment: 'teal', hatches: 'orange, every 2 km' },
  interior: {
    tunnel: { module: 4, h: 4, t: 1, energyLine: 2.6, cableTray: 1.6, door: { w: 2.4, h: 2.6 } },
    hall: { bay: 20, t: 2, tealLine: 6 },
    cavern: { bay: 20, t: 4, joint: { every: 100, proud: 2 }, tealLane: { w: 6, every: 180 } },
  },
  pieces: {
    'WK-P01…P05': '4 × 4 m panels, 0.6 m deep',
    'WK-BAY': '20 × 20 m bay, LOD0 = 25 panels, LOD1 = one slab with a 4 m groove grid',
    'WK-RW-FOOT': '20 × 80 × 60 m, 20 m plinth + three bay rows, +1 120 → +1 200 (door variant)',
    'WK-RW-ST': '20 × 100 × 60 m face-zone storey: 5 bay rows, gallery (lane / shaft / thermal variants)',
    'WK-RW-LEDGE': '20 × 40 m service ledge, every 2 km from +2 100 (floodlight variant, one per 400 m)',
    'WK-RW-OUT': '20 × 100 m outer face: 12 m hull shell, radiator band',
    'WK-RW-BODY': 'macro slice of the 25 km × 4 km wall with ledges, crest, lip and crest ballast core',
    'WK-RW-BT-A/B/C': 'buttress tiers 12×12, 10×8, 8×5',
    'WK-TER-T1…T8': '20 × 2 000 m terrace strips, 140 m faces',
    'WK-RT-KEEL': 'slice of the wall root from +1 120 to −7 988 m, 4 km thick, box cells, foot ballast core',
    'WK-RT-SHELL': 'slice of the outer skin: 12 m on the outer face and under the root',
    'WK-BAL': 'hull ballast slab at −6 km, 63 m at the wall tapering to 23 m at the centre line',
    'WK-RT-MAIN': '20 m slice of the L6 rim main',
    'WK-IN-T / -TD / -TC': 'tunnel wall 4 × 4 m, door, outside corner',
    'WK-IN-H': 'hall wall 20 × 20 m',
    'WK-IN-C / -CJ': 'cavern wall 20 × 20 m, joint variant',
  },
};

export function wallKit(THREE, MAT, rnd = Math.random) {
  const grp = (name, parent, x = 0, y = 0, z = 0) => { const g = new THREE.Group(); g.name = name; g.position.set(x, y, z); if (parent) parent.add(g); return g; };
  const mesh = (p, name, geo, mat, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(geo, mat); m.name = name; m.position.set(x, y, z); p.add(m); return m; };
  const B = (p, name, mat, x0, x1, y0, y1, z0, z1) => mesh(p, name, new THREE.BoxGeometry(Math.abs(x1 - x0), Math.abs(y1 - y0), Math.abs(z1 - z0)), mat, (x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
  // box with box-shaped voids: splits on every void boundary, merges along z
  const solid = (p, name, mat, x0, x1, y0, y1, z0, z1, voids = []) => {
    const cut = (a, b, i) => [...new Set([a, b, ...voids.flatMap(v => [v[i], v[i + 1]])])].filter(t => t >= a && t <= b).sort((m, n) => m - n);
    const xs = cut(x0, x1, 0), ys = cut(y0, y1, 2), zs = cut(z0, z1, 4);
    for (let i = 0; i < xs.length - 1; i++) for (let j = 0; j < ys.length - 1; j++) {
      const mx = (xs[i] + xs[i + 1]) / 2, my = (ys[j] + ys[j + 1]) / 2; let run = null;
      for (let k = 0; k < zs.length - 1; k++) { const mz = (zs[k] + zs[k + 1]) / 2, hole = voids.some(v => mx > v[0] && mx < v[1] && my > v[2] && my < v[3] && mz > v[4] && mz < v[5]);
        if (!hole) { run ??= zs[k]; } if ((hole || k === zs.length - 2) && run !== null) { B(p, name, mat, xs[i], xs[i + 1], ys[j], ys[j + 1], run, hole ? zs[k] : zs[k + 1]); run = null; } } } };
  // extrude a (depth u, y) profile along +X for width w; u runs into the wall (−Z)
  const profile = (pts, w, holes = []) => { const s = new THREE.Shape(); pts.forEach(([u, y], i) => i ? s.lineTo(u, y) : s.moveTo(u, y)); holes.forEach(h => { const pa = new THREE.Path(); h.forEach(([u, y], i) => i ? pa.lineTo(u, y) : pa.moveTo(u, y)); s.holes.push(pa); }); const g = new THREE.ExtrudeGeometry(s, { depth: w, bevelEnabled: false }); g.rotateY(Math.PI / 2); return g; };

  // ---------- panels (4 × 4 m), origin bottom-left, face at z = 0
  function panelBase(name, faceMat, opts = {}) {
    const g = new THREE.Group(); g.name = name; const c0 = grp('panel_body', g, 2, 0, 0);
    B(c0, 'mount_frame', MAT.hull, -2, 2, 0, 4, -0.6, -0.3);
    const s = new THREE.Shape(), w = 1.98, c = 0.28; s.moveTo(-w + c, 0.02); s.lineTo(w - c, 0.02); s.lineTo(w, 0.02 + c); s.lineTo(w, 3.98 - c); s.lineTo(w - c, 3.98); s.lineTo(-w + c, 3.98); s.lineTo(-w, 3.98 - c); s.lineTo(-w, 0.02 + c); s.closePath();
    const pg = new THREE.ExtrudeGeometry(s, { depth: 0.3, bevelEnabled: false }); pg.translate(0, 0, -0.3); mesh(c0, 'panel_face', pg, faceMat);
    B(c0, 'top_light_reveal', MAT.bone, -1.7, 1.7, 3.98, 4.0, -0.3, -0.04);
    if (opts.fasteners !== false) for (const [x, y] of [[-1.7, 0.3], [1.7, 0.3], [-1.7, 3.7], [1.7, 3.7]]) mesh(c0, 'fastener', new THREE.CylinderGeometry(0.07, 0.07, 0.04, 12).rotateX(Math.PI / 2), MAT.metal, x, y, 0.02);
    B(c0, 'id_stencil', MAT.hull, -1.8, -1.0, 3.55, 3.7, 0.0, 0.01);
    g.userData.body = c0; return g;
  }
  const crack = (g, x, y, n = 6) => { let cx = x, cy = y; for (let i = 0; i < n; i++) { const nx = cx + (rnd() - 0.5) * 0.5, ny = cy - 0.2 - rnd() * 0.25; const l = Math.hypot(nx - cx, ny - cy); const m = mesh(g, 'hairline_crack', new THREE.BoxGeometry(0.015, l, 0.01), MAT.hull, (cx + nx) / 2, (cy + ny) / 2, 0.005); m.rotation.z = Math.atan2(cx - nx, ny - cy); cx = nx; cy = ny; } };
  const P01 = () => panelBase('WK_P01_structural', MAT.bone);
  const P01A = () => { const p = panelBase('WK_P01A_aged_repair', MAT.aged), g = p.userData.body; crack(g, -0.6, 3.4); crack(g, 0.9, 2.6, 4); B(g, 'stain', MAT.rock, -1.2, 0.4, 0.05, 0.6, 0.0, 0.006); B(g, 'repair_patch', MAT.bone, 0.4, 1.5, 0.8, 1.6, 0.0, 0.03); for (const [x, y] of [[0.5, 0.9], [1.4, 0.9], [0.5, 1.5], [1.4, 1.5]]) mesh(g, 'patch_rivet', new THREE.SphereGeometry(0.03, 6, 4), MAT.metal, x, y, 0.035); return p; };
  const P01X = () => { const p = panelBase('WK_P01X_decommissioned', MAT.hull), g = p.userData.body; B(g, 'decom_cross_a', MAT.orange, -1.6, 1.6, 1.9, 2.1, 0.0, 0.01).rotation.z = 0.78; B(g, 'decom_cross_b', MAT.orange, -1.6, 1.6, 1.9, 2.1, 0.012, 0.022).rotation.z = -0.78; return p; };
  const P02 = () => { const p = panelBase('WK_P02_energy', MAT.slate), g = p.userData.body; B(g, 'energy_strip', MAT.teal, -1.6, 1.6, 0.6, 0.75, 0.0, 0.06); B(g, 'energy_strip_housing', MAT.hull, -1.7, 1.7, 0.5, 0.85, -0.02, 0.03); for (const x of [-1, 0, 1]) { mesh(g, 'conduit_socket', new THREE.CylinderGeometry(0.22, 0.22, 0.12, 16).rotateX(Math.PI / 2), MAT.hull, x, 2.4, 0.06); mesh(g, 'socket_ring', new THREE.TorusGeometry(0.22, 0.03, 6, 20), MAT.teal, x, 2.4, 0.12); } B(g, 'lockplate', MAT.bone, 1.1, 1.6, 3.2, 3.5, 0.0, 0.03); return p; };
  const P03 = () => { const p = panelBase('WK_P03_thermal', MAT.thermal), g = p.userData.body; for (let x = -1.65; x <= 1.66; x += 0.3) B(g, 'cooling_fin', MAT.thermal, x - 0.04, x + 0.04, 0.35, 3.45, 0.0, 0.35); B(g, 'fin_header', MAT.hull, -1.8, 1.8, 3.45, 3.6, 0.0, 0.38); B(g, 'fin_footer', MAT.hull, -1.8, 1.8, 0.2, 0.35, 0.0, 0.38); mesh(g, 'coolant_inlet', new THREE.CylinderGeometry(0.1, 0.1, 0.5, 10), MAT.blue, -1.9, 3.75, 0.2); return p; };
  const P04 = () => { const p = panelBase('WK_P04_utility', MAT.slate), g = p.userData.body; for (let y = 0.5; y < 1.8; y += 0.22) B(g, 'vent_slot', MAT.hull, -1.5, 0.2, y, y + 0.08, 0.0, 0.01); B(g, 'utility_door', MAT.slate, 0.5, 1.7, 0.4, 2.6, 0.0, 0.05); B(g, 'door_hinge', MAT.metal, 1.66, 1.72, 0.6, 2.4, 0.05, 0.09); B(g, 'door_tool_key', MAT.orange, 0.6, 0.75, 1.4, 1.6, 0.05, 0.07); for (const [x, m] of [[-1.2, MAT.blue], [-0.6, MAT.teal], [0.0, MAT.bone]]) { mesh(g, 'gauge', new THREE.CylinderGeometry(0.2, 0.2, 0.05, 20).rotateX(Math.PI / 2), MAT.bone, x, 2.9, 0.03); mesh(g, 'gauge_ring', new THREE.TorusGeometry(0.2, 0.025, 6, 20), m, x, 2.9, 0.06); } B(g, 'data_port_row', MAT.hull, -1.5, 0.2, 2.2, 2.4, 0.0, 0.02); return p; };
  const P05 = () => { const p = panelBase('WK_P05_access', MAT.slate), g = p.userData.body; B(g, 'access_mark', MAT.orange, -1.7, -1.4, 0.3, 3.7, 0.0, 0.02); B(g, 'hatch_frame', MAT.hull, -1.0, 1.4, 0.3, 3.0, 0.0, 0.03); B(g, 'hatch_door', MAT.slate, -0.9, 1.3, 0.4, 2.9, 0.0, 0.06); B(g, 'hatch_seam', MAT.hull, 0.19, 0.21, 0.4, 2.9, 0.06, 0.065); B(g, 'hatch_handle', MAT.orange, 0.95, 1.1, 1.3, 1.9, 0.06, 0.14); B(g, 'status_light', MAT.teal, -0.3, 0.6, 3.15, 3.25, 0.0, 0.05); B(g, 'step_plate', MAT.orange, -1.0, 1.4, 0.2, 0.3, 0.0, 0.25); return p; };
  const PANEL = { P01, P01A, P01X, P02, P03, P04, P05 };

  // ---------- 20 m bay frame: left mullion + bottom transom (each bay owns these)
  const bayFrame = (p, x, y, w = 20, h = 20) => { B(p, 'bay_mullion', MAT.slate, x - 0.2, x + 0.2, y, y + h, 0, 0.3); B(p, 'bay_transom', MAT.slate, x - 0.2, x + w, y - 0.2, y + 0.2, 0, 0.34); };
  const closeFrame = (p, x0, x1, y0, y1) => { B(p, 'bay_mullion', MAT.slate, x1 - 0.2, x1 + 0.2, y0, y1, 0, 0.3); B(p, 'bay_transom', MAT.slate, x0 - 0.2, x1 + 0.2, y1 - 0.2, y1 + 0.2, 0, 0.34); };
  // LOD1 bay face: one slab per bay with the 4 m groove grid
  const bayFace = (p, mat, x, y, w = 20, h = 20) => {
    B(p, 'bay_backing', MAT.hull, x, x + w, y, y + h, -0.6, -0.3); B(p, 'bay_face_' + mat.name, mat, x, x + w, y, y + h, -0.3, 0);
    for (let gx = 4; gx < w; gx += 4) B(p, 'panel_groove', MAT.hull, x + gx - 0.03, x + gx + 0.03, y, y + h, 0, 0.04);
    for (let gy = 4; gy < h; gy += 4) B(p, 'panel_groove', MAT.hull, x, x + w, y + gy - 0.03, y + gy + 0.03, 0, 0.05);
    if (mat === MAT.thermal) for (let gx = 0.8; gx < w; gx += 0.8) B(p, 'P03_fin', MAT.thermal, x + gx - 0.06, x + gx + 0.06, y + 0.4, y + h - 0.4, 0.04, 0.4);
  };
  function bay({ lod = 1, mix = 'rim' } = {}) {
    const g = new THREE.Group(); g.name = 'WK_BAY_20x20_LOD' + lod;
    if (lod === 0) { for (let i = 0; i < 5; i++) for (let j = 0; j < 5; j++) { const r = rnd(), f = mix === 'thermal' ? P03 : r < 0.08 ? P01A : r < 0.13 ? P04 : r < 0.16 ? P02 : (i === 0 && j === 0 && mix === 'rim') ? P05 : P01; const pn = f(); pn.position.set(i * 4, j * 4, 0); g.add(pn); } }
    else bayFace(g, mix === 'thermal' ? MAT.thermal : MAT.bone, 0, 0);
    bayFrame(g, 0, 0); return g;
  }
  const rimMat = () => { const r = rnd(); return r < 0.12 ? MAT.aged : r < 0.18 ? MAT.slate : MAT.bone; };

  // ---------- cut-face graphics (cut plane x = 0, seen from −X); u runs into the wall (z = −u)
  function hatch(p, name, mat, u0, u1, y0, y1, step) {
    const H = y1 - y0;
    for (let c = u0 - H + step / 2; c < u1; c += step) { const a = Math.max(0, u0 - c), b = Math.min(H, u1 - c); if (b <= a) continue;
      const L = (b - a) * Math.SQRT2, m = mesh(p, name, new THREE.BoxGeometry(0.3, step * 0.12, L), mat, -0.15, y0 + (a + b) / 2, -(c + (a + b) / 2)); m.rotation.x = Math.atan2(-(b - a), -(b - a)); }
  }
  function outline(p, name, mat, u0, u1, y0, y1, t) {
    B(p, name, mat, -0.4, 0, y0, y0 + t, -u1, -u0); B(p, name, mat, -0.4, 0, y1 - t, y1, -u1, -u0);
    B(p, name, mat, -0.4, 0, y0, y1, -u0 - t, -u0); B(p, name, mat, -0.4, 0, y0, y1, -u1, -u1 + t);
  }
  function ballastCore(p, w, [u0, u1], [y0, y1], tag) {
    mesh(p, 'ballast_core_' + tag, profile([[u0, y0], [u1, y0], [u1, y1], [u0, y1]], w), MAT.hull);
    hatch(p, 'ballast_hatching', MAT.slate, u0, u1, y0, y1, Math.max(60, (y1 - y0) / 24)); outline(p, 'ballast_containment', MAT.teal, u0, u1, y0, y1, 40);
  }
  // ---------- rim wall foot: 20 m plinth + three bay rows (y local 0 = +1 120)
  function rimFoot({ w = 20, door = false, doors = [], mat = rimMat, lod = 1 } = {}) {
    const g = new THREE.Group(); g.name = 'WK_RW_FOOT_' + w + 'x80' + (door || doors.length ? '_door' : '');
    const D = SPEC.rim.faceZone;
    B(g, 'wall_body_structural', MAT.mass, 0, w, 0, 80, -D, -0.6); B(g, 'plinth_face', MAT.mass, 0, w, 0, 20, -0.6, 0);
    B(g, 'plinth_signal_band', MAT.orange, 0, w, 19, 20, 0, 0.1);
    for (let r = 0; r < 3; r++) for (let x = 0; x < w - 0.1; x += 20) { lod === 2 ? B(g, 'bay_face', MAT.bone, x, x + 20, 20 + r * 20, 40 + r * 20, -0.6, 0) : bayFace(g, mat(), x, 20 + r * 20); bayFrame(g, x, 20 + r * 20); }
    const ds = door ? [w / 2] : doors; for (const cx of ds) { const dw = SPEC.rim.foot.door.w / 2, dh = SPEC.rim.foot.door.h;
      B(g, 'P05_vehicle_door', MAT.hull, cx - dw, cx + dw, 0, dh, 0, 0.3); B(g, 'door_seam', MAT.slate, cx - 0.05, cx + 0.05, 0, dh, 0.3, 0.34);
      B(g, 'door_frame_top', MAT.orange, cx - dw - 0.5, cx + dw + 0.5, dh, dh + 0.5, 0, 0.4); for (const s of [-1, 1]) B(g, 'door_frame_side', MAT.orange, cx + s * (dw + 0.25) - 0.25, cx + s * (dw + 0.25) + 0.25, 0, dh, 0, 0.4);
      B(g, 'door_status_light', MAT.teal, cx - 1, cx + 1, dh - 0.9, dh - 0.6, 0.3, 0.38); }
    return g;
  }
  // ---------- rim storey: 100 m of the 60 m face zone, gallery at the bottom (lod 2 = one slab per storey, for distance)
  function rimStorey({ w = 20, lod = 1, shaft = null, lanes = [], thermalRows = [], mat = rimMat } = {}) {
    const g = new THREE.Group(); g.name = 'WK_RW_ST_' + w + 'x100' + (shaft !== null ? '_shaft' : '') + (thermalRows.length ? '_thermal' : '');
    const D = SPEC.rim.faceZone, H = SPEC.rim.storey.h, gl = SPEC.rim.storey.gallery;
    const voids = [[-1, w + 1, 0, gl.h, -D + gl.inset, -gl.inset]];
    if (shaft !== null) voids.push([shaft, shaft + 12, -1, H + 1, -32, -20], [shaft + 2, shaft + 8, -1, H + 1, -48, -42]);
    solid(g, 'wall_body_structural', MAT.mass, 0, w, 0, H, -D, -0.6, voids);
    B(g, 'gallery_light', MAT.warm, 0, w, gl.h - 0.4, gl.h - 0.1, -D + gl.inset + 2, -gl.inset - 2);
    if (shaft !== null) { for (const x of [shaft + 1, shaft + 11]) B(g, 'lift_rail', MAT.slate, x - 0.3, x + 0.3, 0, H, -26.3, -25.7); mesh(g, 'riser_main', new THREE.CylinderGeometry(1.8, 1.8, H, 16), MAT.blue, shaft + 5, H / 2, -45); }
    if (lod === 2) { B(g, 'storey_face', thermalRows.length ? MAT.thermal : MAT.bone, 0, w, 0, H, -0.6, 0); for (let r = 0; r < 5; r++) B(g, 'bay_transom', MAT.slate, 0, w, r * 20 - 0.2, r * 20 + 0.2, 0, 0.34); for (let x = 0; x < w - 0.1; x += 20) B(g, 'bay_mullion', MAT.slate, x - 0.2, x + 0.2, 0, H, 0, 0.3); }
    else for (let r = 0; r < 5; r++) for (let x = 0; x < w - 0.1; x += 20) {
      const th = thermalRows.includes(r), m = th ? MAT.thermal : mat(x / 20, r);
      if (lod === 0 && !th) { for (let i = 0; i < 5; i++) for (let j = 0; j < 5; j++) { const pn = (m === MAT.aged ? P01A : P01)(); pn.position.set(x + i * 4, r * 20 + j * 4, 0); g.add(pn); } }
      else bayFace(g, m, x, r * 20);
      bayFrame(g, x, r * 20); }
    for (const lx of lanes) { B(g, 'P02_lane_housing', MAT.hull, lx - 1.2, lx + 1.2, 0, H, 0, 0.38); B(g, 'P02_energy_lane', MAT.teal, lx - 1, lx + 1, 0, H, 0.38, 0.48); }
    return g;
  }
  // ---------- service ledge: top at local y = 0, every 2 km from +2 100
  function ledge({ w = 20, lights = [] } = {}) {
    const L = SPEC.rim.ledges, g = new THREE.Group(); g.name = 'WK_RW_LEDGE_' + w + 'x' + L.depth;
    B(g, 'service_ledge', MAT.slate, 0, w, -L.slab, 0, 0.34, L.depth); B(g, 'ledge_soffit_ribs', MAT.hull, 0, w, -L.slab - 1.5, -L.slab, 0.34, 6);
    B(g, 'ledge_edge_signal', MAT.orange, 0, w, -L.slab, 0.3, L.depth, L.depth + 0.3);
    B(g, 'ledge_service_road', MAT.asphalt, 0, w, 0, 0.08, 14, 30); for (let x = 0; x < w - 0.1; x += 10) B(g, 'lane_dash', MAT.bone, x, x + 4, 0.08, 0.1, 21.9, 22.1);
    B(g, 'ledge_rail', MAT.bone, 0, w, 1.0, 1.15, L.depth - 0.4, L.depth - 0.2); for (let x = 2; x < w; x += 4) B(g, 'ledge_rail_post', MAT.slate, x - 0.05, x + 0.05, 0, 1.0, L.depth - 0.35, L.depth - 0.25);
    for (const x of lights) { B(g, 'floodlight_mast', MAT.slate, x - 0.2, x + 0.2, 0, 8, L.depth - 3, L.depth - 2.6); B(g, 'ledge_floodlight', MAT.warm, x - 0.8, x + 0.8, 8, 8.6, L.depth - 3.4, L.depth - 1.6); }
    return g;
  }
  // ---------- outer face: 12 m hull shell, faces +Z (space side) like every other piece
  function rimOuter({ w = 20, h = 100 } = {}) {
    const g = new THREE.Group(); g.name = 'WK_RW_OUT_' + w + 'x' + h;
    B(g, 'outer_shell_hull', MAT.hull, 0, w, 0, h, -SPEC.rim.shell, 0); B(g, 'shell_seam_signal', MAT.orange, 0, w, -0.8, 0.8, 0, 0.6);
    for (let y = 20; y < h; y += 60) B(g, 'outer_radiator_band', MAT.thermal, 0, w, y, Math.min(h, y + 24), 0, 1.5);
    return g;
  }
  // ---------- buttress tiers (centred on x = 0, stands on the bay face)
  function buttress(tier = 'A', h = 100) {
    const t = { A: [12, 12], B: [10, 8], C: [8, 5] }[tier], g = new THREE.Group(); g.name = 'WK_RW_BT_' + tier + '_' + t[0] + 'x' + h + 'x' + t[1];
    B(g, 'buttress', MAT.mass, -t[0] / 2, t[0] / 2, 0, h, 0.34, t[1]); B(g, 'buttress_step_signal', MAT.orange, -t[0] / 2, t[0] / 2, h - 1.2, h, t[1], t[1] + 0.1);
    for (let y = 20; y < h; y += 20) B(g, 'buttress_joint', MAT.slate, -t[0] / 2 - 0.05, t[0] / 2 + 0.05, y - 0.15, y + 0.15, 0.34, t[1] + 0.05); return g;
  }
  // ---------- terrace strip: back edge at z = 0 against the next step up (or the wall), drop at z = 2 000; lod 1 = macro
  function terrace(id = 'T8', { w = 20, trees = null, lod = 0 } = {}) {
    const T = SPEC.terraces, k = T.steps.findIndex(s => s.id === id), h = T.steps[k].top, hp = k ? T.steps[k - 1].top : 0, Dp = T.depth;
    const g = new THREE.Group(); g.name = 'WK_TER_' + id + '_' + w + 'x' + Dp;
    B(g, 'terrace_structural_fill', MAT.rock, 0, w, T.base, h - 3, 0, Dp); B(g, 'terrace_soil', MAT.soil, 0, w, h - 3, h - 0.5, 0, Dp); B(g, 'terrace_grass', MAT.grass, 0, w, h - 0.5, h, 0, Dp);
    B(g, 'terrace_retaining_face', MAT.concrete, 0, w, T.base, h, Dp, Dp + T.retaining); B(g, 'terrace_coping', MAT.aged, 0, w, h, h + T.coping.h, Dp - 1, Dp + 1.6);
    const zf = Dp + T.retaining; B(g, 'terrace_edge_signal', MAT.orange, 0, w, h - 1.6, h - 0.8, zf, zf + 0.1);
    B(g, 'gravity_band', MAT.slate, 0, w, h - T.gravityBand.below - T.gravityBand.h, h - T.gravityBand.below, zf, zf + 0.1);
    if (lod) return g;
    for (let x = 10; x < w; x += 20) { B(g, 'drainage_slot', MAT.hull, x - 0.6, x + 0.6, hp + 1, hp + 2, zf, zf + 0.05); B(g, 'gravity_band_stencil', MAT.bone, x - 3, x + 3, h - 7.6, h - 6.4, zf + 0.1, zf + 0.14); }
    const r0 = Dp - T.road.fromEdge, r1 = Dp - T.road.toEdge;
    B(g, 'terrace_service_road', MAT.asphalt, 0, w, h, h + 0.08, r0, r1); for (let x = 0; x < w - 0.1; x += 10) B(g, 'lane_dash', MAT.bone, x, x + 4, h + 0.08, h + 0.1, (r0 + r1) / 2 - 0.1, (r0 + r1) / 2 + 0.1);
    for (let x = 2; x < w; x += 4) B(g, 'guardrail_post', MAT.slate, x - 0.07, x + 0.07, h, h + 1.1, Dp - 1.55, Dp - 1.4); B(g, 'guardrail_rail', MAT.bone, 0, w, h + 0.95, h + 1.1, Dp - 1.6, Dp - 1.35);
    if (trees) for (let x = 8; x < w; x += 16) for (let z = trees[0]; z < trees[1]; z += 14) { const s = 0.9 + rnd() * 0.4, tx = x + (rnd() - 0.5) * 6, tz = z + (rnd() - 0.5) * 6; mesh(g, 'tree_trunk', new THREE.CylinderGeometry(0.15 * s, 0.22 * s, 3 * s, 8), MAT.soil, tx, h + 1.5 * s, tz); mesh(g, 'tree_crown', new THREE.SphereGeometry(2 * s, 12, 9), MAT.foliage || MAT.grass, tx, h + 4 * s, tz).scale.y = 1.2; }
    return g;
  }
  // ---------- macro wall body: inner face +1 120 → crest, 4 km thick, ledges, teal crest, 45° lip, crest ballast core
  function wallBody({ w = 1000, ledgeLights = true } = {}) {
    const R = SPEC.rim, C = R.crest, g = new THREE.Group(); g.name = 'WK_RW_BODY_' + w;
    const core = R.ballastCores.crest, ch = [[core.u[0], core.y[0]], [core.u[1], core.y[0]], [core.u[1], core.y[1]], [core.u[0], core.y[1]]];
    mesh(g, 'rim_wall_body', profile([[0.6, R.footY], [R.thickness, R.footY], [R.thickness, C.lip], [C.chamfer, C.lip], [0.6, C.teal]], w, [ch]), MAT.mass);
    ballastCore(g, w, core.u, core.y, 'crest');
    B(g, 'inner_face_panels', MAT.bone, 0, w, R.footY + 80, C.teal - 30, -0.6, 0);
    B(g, 'crest_teal_band', MAT.teal, 0, w, C.teal - 30, C.teal, -0.6, 0.6);
    const lip = mesh(g, 'crest_lip_signal', new THREE.BoxGeometry(w, 6, C.chamfer * Math.SQRT2), MAT.orange, w / 2, (C.teal + C.lip) / 2, -C.chamfer / 2 + 3); lip.rotation.x = Math.PI / 4;
    for (let y = R.ledges.first; y <= R.ledges.last; y += R.ledges.every) { const l = ledge({ w, lights: ledgeLights ? Array.from({ length: Math.floor(w / R.ledges.floodlightEvery) }, (_, i) => 200 + i * R.ledges.floodlightEvery) : [] }); l.position.y = y; g.add(l); }
    return g;
  }
  // ---------- wall root: +1 120 → −7 988, 4 km thick, box cells in L5 and the hull, foot ballast core, lift shaft
  function keel({ w = 20 } = {}) {
    const R = SPEC.root, F = SPEC.rim.ballastCores.foot, P = R.cell.pitch, S = R.cell.size, g = new THREE.Group(); g.name = 'WK_RT_KEEL_' + w;
    const cells = []; for (const [ya, yb] of [[-1900, -300], [-5200, -2100]]) for (let y = ya; y + S <= yb; y += P) for (let u = 200; u + S <= R.thickness - 200; u += P) cells.push([u, u + S, y, y + S]);
    const fh = [[F.u[0], F.y[0]], [F.u[1], F.y[0]], [F.u[1], F.y[1]], [F.u[0], F.y[1]]];
    const holes = [...cells.map(([a, b, c, d]) => [[a, c], [b, c], [b, d], [a, d]]), [[20, -480], [32, -480], [32, R.top], [20, R.top]], fh];
    mesh(g, 'rim_keel', profile([[0, R.base], [R.thickness, R.base], [R.thickness, R.top], [0, R.top]], w, holes), MAT.mass);
    ballastCore(g, w, F.u, F.y, 'foot');
    for (const [a, b, c, d] of cells) { for (const s2 of [1, -1]) { const L = Math.hypot(b - a, d - c), br = B(g, 'keel_x_brace', MAT.slate, -4, 4, -4, 4, -L / 2, L / 2); br.position.set(w / 2, (c + d) / 2, -(a + b) / 2); br.rotation.x = s2 * Math.atan2(d - c, b - a); }
      B(g, 'keel_cell_walkway', MAT.slate, 0, w, c, c + 2, -b + 10, -a - 10); }
    B(g, 'joint_seal_line', MAT.orange, 0, w, R.rimMain.y[1], -124, 0, 0.5);
    return g;
  }
  function shell({ w = 20, top = SPEC.rim.crest.lip } = {}) {
    const R = SPEC.rim, T = R.thickness, S = R.shell, g = new THREE.Group(); g.name = 'WK_RT_SHELL_' + w;
    mesh(g, 'outer_skin_hull', profile([[R.crest.chamfer, top], [T, top], [T, -7988], [0, -7988], [0, -8000], [T + S, -8000], [T + S, top + S], [R.crest.chamfer, top + S]], w), MAT.hull);
    for (let y = -7000; y < top; y += 1000) { B(g, 'shell_seam_signal', MAT.orange, 0, w, y - 4, y + 4, -T - S - 0.6, -T - S); if (y > 0) B(g, 'outer_radiator_band', MAT.thermal, 0, w, y + 200, y + 600, -T - S - 3, -T - S); }
    return g;
  }
  // ---------- hull ballast slab under the floor: top at −6 km, z from z0 to z1 measured from the wall face
  function ballastSlab({ w = 1000, z0 = 0, z1 = 20000 } = {}) {
    const BL = SPEC.ballast, g = new THREE.Group(); g.name = 'WK_BAL_' + w;
    const t = z => { const km = Math.max(0, 160 - z / 1000), P = BL.profile; for (let i = 1; i < P.length; i++) if (km <= P[i][0]) return P[i - 1][1] + (P[i][1] - P[i - 1][1]) * (km - P[i - 1][0]) / (P[i][0] - P[i - 1][0]); return P[P.length - 1][1]; };
    const zs = []; for (let z = z0; z < z1; z += 250) zs.push(z); zs.push(z1); const bot = (d = 0) => zs.map(z => [-z, BL.top - t(z) - d]).reverse();
    mesh(g, 'ballast_hull_layer', profile([[-z0, BL.top], [-z1, BL.top], ...bot()], w), MAT.hull);
    mesh(g, 'ballast_containment_top', profile([[-z0, BL.top + 3], [-z1, BL.top + 3], [-z1, BL.top], [-z0, BL.top]], w), MAT.teal);
    mesh(g, 'ballast_containment_bottom', profile([...bot().reverse(), ...bot(3)], w), MAT.teal);
    for (let z = Math.ceil(z0 / 2000) * 2000 + 1000; z < z1; z += 2000) for (let x = Math.min(w / 2, 250); x < w; x += 500) B(g, 'ballast_deck_hatch', MAT.orange, x - 15, x + 15, BL.top + 3, BL.top + 8, z - 15, z + 15);
    return g;
  }
  function rimMain({ w = 20 } = {}) {
    const R = SPEC.root, g = new THREE.Group(); g.name = 'WK_RT_MAIN_' + w;
    solid(g, 'L6_core_band', MAT.deep, 0, w, -2000, -1950, -170, 0, [[-1, w + 1, -1995, -1958, -140, -20]]);
    mesh(g, 'rim_main_water', new THREE.CylinderGeometry(6, 6, w, 20).rotateZ(Math.PI / 2), MAT.blue, w / 2, -1985, -40);
    mesh(g, 'rim_main_energy', new THREE.CylinderGeometry(5, 5, w, 20).rotateZ(Math.PI / 2), MAT.hull, w / 2, -1986, -62);
    for (let x = 10; x < w; x += 40) mesh(g, 'energy_band', new THREE.CylinderGeometry(5.3, 5.3, 2, 20).rotateZ(Math.PI / 2), MAT.teal, x, -1986, -62);
    for (const z of [-96, -104]) B(g, 'freight_rail', MAT.metal, 0, w, -1995, -1994, z - 0.4, z + 0.4);
    B(g, 'rim_main_light', MAT.warm, 0, w, -1958.6, -1958.2, -138, -22);
    return g;
  }
  // ---------- interior walls
  function tunnelWall({ w = 4, door = false } = {}) {
    const T = SPEC.interior.tunnel, g = new THREE.Group(); g.name = 'WK_IN_T' + (door ? 'D' : '') + '_' + w + 'x' + T.h;
    const dx0 = w / 2 - T.door.w / 2, dx1 = w / 2 + T.door.w / 2;
    solid(g, 'tunnel_wall_concrete', MAT.concrete, 0, w, 0, T.h, -T.t, 0, door ? [[dx0, dx1, -1, T.door.h, -T.t - 1, 1]] : []);
    const seg = (y0, y1, z1, name, mat) => { if (door) { B(g, name, mat, 0, dx0 - 0.3, y0, y1, 0, z1); B(g, name, mat, dx1 + 0.3, w, y0, y1, 0, z1); } else B(g, name, mat, 0, w, y0, y1, 0, z1); };
    B(g, 'wall_energy_line', MAT.teal, 0, w, T.energyLine, T.energyLine + 0.1, 0, 0.04);
    seg(T.cableTray, T.cableTray + 0.15, 0.39, 'wall_cable_tray', MAT.slate);
    B(g, 'module_joint', MAT.hull, -0.02, 0.02, 0, T.h, 0, 0.04);
    if (door) { B(g, 'door_frame_top', MAT.orange, dx0 - 0.3, dx1 + 0.3, T.door.h, T.door.h + 0.2, 0, 0.12); for (const x of [dx0 - 0.15, dx1 + 0.15]) B(g, 'door_frame_side', MAT.orange, x - 0.15, x + 0.15, 0, T.door.h, 0, 0.12);
      B(g, 'P05_hatch_door', MAT.slate, dx0, dx1, 0, T.door.h, -T.t / 2 - 0.05, -T.t / 2 + 0.05); B(g, 'door_status_light', MAT.teal, w / 2 - 0.4, w / 2 + 0.4, T.door.h + 0.3, T.door.h + 0.4, 0, 0.06); }
    return g;
  }
  function tunnelCorner() {
    const T = SPEC.interior.tunnel, g = new THREE.Group(); g.name = 'WK_IN_TC_1x' + T.h;
    B(g, 'corner_column', MAT.concrete, -T.t, 0, 0, T.h, -T.t, 0); B(g, 'corner_guard', MAT.orange, -0.08, 0.08, 0, 1.4, -0.08, 0.08); return g;
  }
  function hallWall({ w = 20, h = 20, mat = MAT.bone } = {}) {
    const H = SPEC.interior.hall, g = new THREE.Group(); g.name = 'WK_IN_H_' + w + 'x' + h;
    B(g, 'hall_wall_mass', MAT.mass, 0, w, 0, h, -H.t, -0.6);
    for (let x = 0; x < w - 0.1; x += 20) for (let y = 0; y < h - 0.1; y += 20) { bayFace(g, mat, x, y); bayFrame(g, x, y); }
    B(g, 'hall_teal_line', MAT.teal, 0, w, H.tealLine, H.tealLine + 0.3, 0, 0.1); B(g, 'hall_base_signal', MAT.orange, 0, w, 0, 0.6, 0, 0.12);
    return g;
  }
  function cavernWall({ w = 20, h = 20, joint = false, lane = false } = {}) {
    const C = SPEC.interior.cavern, g = new THREE.Group(); g.name = 'WK_IN_C' + (joint ? 'J' : '') + '_' + w + 'x' + h;
    B(g, 'cavern_wall_mass', MAT.mass, 0, w, 0, h, -C.t, -0.6);
    for (let x = 0; x < w - 0.1; x += 20) for (let y = 0; y < h - 0.1; y += 20) { bayFace(g, rnd() < 0.3 ? MAT.hull : MAT.slate, x, y); bayFrame(g, x, y); }
    if (joint) B(g, 'cavern_panel_joint', MAT.slate, 0, w, -1, 1, 0.34, C.joint.proud);
    if (lane) B(g, 'cavern_teal_lane', MAT.teal, w / 2 - 3, w / 2 + 3, 0, h, 0.34, 1.5);
    return g;
  }
  return { SPEC, solid, profile, hatch, outline, ballastCore, bayFace, bayFrame, closeFrame, panelBase, PANEL, bay, rimFoot, rimStorey, ledge, rimOuter, buttress, terrace, wallBody, keel, shell, ballastSlab, rimMain, tunnelWall, tunnelCorner, hallWall, cavernWall };
}
