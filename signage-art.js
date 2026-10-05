// Meridian signage & decal artwork. Shared by the 3D kit (canvas textures) and the 2D artwork sheet.
export const C = { bone: '#d9d3c6', light: '#ece7dc', ink: '#1d2024', graphite: '#2b2f34', slate: '#6b7279', orange: '#e0612a', teal: '#3fd0c0', blue: '#3f6f9a', aged: '#b3a68c', screen: '#101316',
  magenta: '#e2337a', yellow: '#f5c400', cyan: '#19b5d8', lime: '#8fd13f', violet: '#3b2a8c' };
const SANS = "'IBM Plex Sans Condensed', sans-serif", MONO = "'IBM Plex Mono', monospace";
export const fontsReady = () => Promise.race([Promise.all(["700 64px 'IBM Plex Sans Condensed'", "500 64px 'IBM Plex Sans Condensed'", "500 64px 'IBM Plex Mono'"].map(f => document.fonts.load(f))), new Promise(r => setTimeout(r, 2500))]);
const T = (c, s, x, y, size, color, o = {}) => { c.font = (o.w || 700) + ' ' + size + 'px ' + (o.mono ? MONO : SANS); c.fillStyle = color; c.textAlign = o.align || 'left'; c.textBaseline = o.base || 'alphabetic'; if (o.ls) c.letterSpacing = o.ls + 'px'; c.fillText(s, x, y, o.max); c.letterSpacing = '0px'; };
const R = (c, x, y, w, h, color) => { c.fillStyle = color; c.fillRect(x, y, w, h); };
export const logo = (c, cx, cy, r, ring = C.light, bar = C.orange) => { c.lineWidth = r * 0.3; c.strokeStyle = ring; c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2); c.stroke(); R(c, cx - r * 0.17, cy - r * 1.22, r * 0.34, r * 2.44, bar); };
const chevrons = (c, x, y, w, h, a, b, step) => { c.save(); c.beginPath(); c.rect(x, y, w, h); c.clip(); R(c, x, y, w, h, b); c.fillStyle = a; for (let k = -h; k < w + h; k += step * 2) { c.beginPath(); c.moveTo(x + k, y + h); c.lineTo(x + k + step, y + h); c.lineTo(x + k + step + h, y); c.lineTo(x + k + h, y); c.closePath(); c.fill(); } c.restore(); };
const footer = (c, W, H, h, label, bg = C.graphite) => { R(c, 0, H - h, W, h, bg); logo(c, h * 0.62, H - h / 2, h * 0.26); T(c, label, h * 1.15, H - h / 2, h * 0.34, C.light, { base: 'middle', ls: h * 0.03, max: W - h * 1.3 }); };
const tri = (c, cx, cy, s, fill, stroke) => { c.beginPath(); c.moveTo(cx, cy - s * 0.58); c.lineTo(cx + s / 2, cy + s * 0.29); c.lineTo(cx - s / 2, cy + s * 0.29); c.closePath(); c.fillStyle = fill; c.fill(); c.lineWidth = s * 0.07; c.lineJoin = 'round'; c.strokeStyle = stroke; c.stroke(); };
const stencilCut = (c, W, H, gap, every) => { c.save(); c.globalCompositeOperation = 'destination-out'; for (let x = every * 0.5; x < W; x += every) c.fillRect(x, 0, gap, H); c.restore(); };
const screenGlow = (c, W, H) => { R(c, 0, 0, W, H, C.screen); };

export const ART = {
  water_loop: { cat: 'MRA public notice', title: 'Billboard · Water is a loop', w: 3000, h: 1500, m: [6, 3], draw(c, W, H) {
    R(c, 0, 0, W, H, C.cyan); c.lineWidth = 120; c.strokeStyle = C.light; c.beginPath(); c.arc(W * 0.78, H * 0.42, 380, 0.35, Math.PI * 1.85); c.stroke();
    c.fillStyle = C.light; c.beginPath(); const ax = W * 0.78 + 380 * Math.cos(0.35), ay = H * 0.42 + 380 * Math.sin(0.35); c.moveTo(ax - 150, ay - 40); c.lineTo(ax + 120, ay - 60); c.lineTo(ax + 10, ay + 190); c.closePath(); c.fill();
    c.fillStyle = C.blue; c.beginPath(); c.ellipse(W * 0.78, H * 0.42, 150, 190, 0, 0, Math.PI * 2); c.fill();
    T(c, 'WATER', 140, 470, 330, C.ink); T(c, 'IS A LOOP.', 140, 800, 330, C.ink);
    T(c, 'Every drop you use comes back through the L2 mains.', 150, 960, 78, C.ink, { w: 500 }); footer(c, W, H, 260, 'MERIDIAN RING AUTHORITY · WATER SERVICE · SECTOR 17'); } },
  ring_day: { cat: 'MRA public notice', title: 'Billboard · Ring Day 240', w: 3000, h: 1500, m: [6, 3], draw(c, W, H) {
    R(c, 0, 0, W, H, C.magenta); c.lineWidth = 90; for (const [r, col] of [[1500, C.yellow], [1380, C.violet], [1260, C.light]]) { c.strokeStyle = col; c.beginPath(); c.arc(W * 0.5, H + 1000, r, Math.PI * 1.08, Math.PI * 1.92); c.stroke(); }
    T(c, 'RING DAY', W / 2, 600, 420, C.yellow, { align: 'center' }); T(c, 'YEAR 240 · ONE WORLD, BUILT BY HAND', W / 2, 760, 96, C.light, { align: 'center', ls: 6 });
    T(c, 'PARADE · S17 COUNCIL QUARTER · 14:00', W / 2, 900, 80, C.ink, { align: 'center', w: 700 }); footer(c, W, H, 260, 'MERIDIAN RING AUTHORITY · PUBLIC EVENTS'); } },
  recruit: { cat: 'MRA public notice', title: 'Billboard · Maintenance Corps', w: 3000, h: 1500, m: [6, 3], draw(c, W, H) {
    R(c, 0, 0, W, H, C.yellow); c.lineWidth = 60; c.strokeStyle = C.ink; c.beginPath(); c.arc(W * 0.8, H + 1600, 2000, Math.PI * 1.32, Math.PI * 1.68); c.stroke();
    const fx = W * 0.8, fy = H - 320; c.fillStyle = C.ink; c.beginPath(); c.arc(fx, fy - 560, 80, 0, Math.PI * 2); c.fill(); R(c, fx - 100, fy - 460, 200, 360, C.ink); R(c, fx - 100, fy - 330, 200, 60, C.orange); R(c, fx - 90, fy - 100, 70, 220, C.ink); R(c, fx + 20, fy - 100, 70, 220, C.ink);
    T(c, 'KEEP THE WORLD', 140, 430, 230, C.ink); T(c, 'RUNNING.', 140, 680, 230, C.ink);
    R(c, 140, 780, 1550, 170, C.violet); T(c, 'JOIN THE MAINTENANCE CORPS', 180, 865, 96, C.yellow, { base: 'middle', ls: 4 }); T(c, 'Apply at any MRA service point · training at Spire S17', 150, 1080, 70, C.ink, { w: 500 }); footer(c, W, H, 260, 'MERIDIAN RING AUTHORITY · MAINTENANCE CORPS'); } },
  visit_rim: { cat: 'MRA campaign · tram-stop panel', title: 'Backlit panel · Visit the rim', w: 1200, h: 1800, m: [1.2, 1.8], glow: true, draw(c, W, H) {
    R(c, 0, 0, W, H, C.violet); R(c, 760, 120, 260, 1100, C.yellow); for (const [x, y, w] of [[560, 1020, 200], [380, 1100, 180], [200, 1170, 180]]) R(c, x, y, w, 1220 - y, C.magenta); R(c, 760, 300, 260, 40, C.violet); R(c, 760, 520, 260, 40, C.violet);
    R(c, 0, 1220, W, 20, C.yellow); T(c, 'VISIT', 90, 1400, 180, C.yellow); T(c, 'THE RIM', 90, 1560, 180, C.light); T(c, 'Tours from Spire S17 · daily 09:00', 95, 1650, 48, C.light, { w: 500 }); T(c, 'TRAM T-07 → RIM GATE', 95, 1730, 44, C.yellow, { ls: 3 }); } },
  service_point: { cat: 'MRA campaign · shop blade', title: 'Blade sign · MRA service point', w: 600, h: 1200, m: [0.6, 1.2], draw(c, W, H) {
    R(c, 0, 0, W, H, C.lime); logo(c, W / 2, 210, 110, C.ink, C.magenta); T(c, 'MRA', W / 2, 560, 240, C.ink, { align: 'center' }); T(c, 'SERVICE', W / 2, 700, 110, C.ink, { align: 'center' }); T(c, 'POINT', W / 2, 820, 110, C.ink, { align: 'center' });
    R(c, 60, 900, W - 120, 8, C.ink); T(c, 'TICKETS · PERMITS', W / 2, 1000, 44, C.ink, { align: 'center', w: 500 }); T(c, 'REPAIR REPORTS', W / 2, 1060, 44, C.ink, { align: 'center', w: 500 }); } },
  public_notice: { cat: 'MRA public notice · info pylon', title: 'Info pylon · Night works notice', w: 800, h: 2000, m: [0.8, 2.0], draw(c, W, H) {
    R(c, 0, 0, W, H, C.light); R(c, 0, 0, W, 220, C.graphite); T(c, 'SECTOR 17', 60, 95, 64, C.light); T(c, 'PUBLIC NOTICE', 60, 175, 64, C.orange);
    T(c, 'TRAM T-07', 60, 380, 96, C.ink); T(c, 'NIGHT WORKS', 60, 480, 96, C.ink); R(c, 60, 530, 120, 10, C.orange);
    ['L1 platform 2 closed', '23:00 – 05:00', 'Days 112 – 118', '', 'Replacement bus from', 'Market Row S17-R03'].forEach((s, i) => T(c, s, 60, 640 + i * 76, 52, C.ink, { w: 500 }));
    R(c, 60, 1180, W - 120, 300, C.bone); T(c, 'WHY', 90, 1250, 44, C.slate); ['Rail joints on the L1 loop', 'are replaced every 40 years.'].forEach((s, i) => T(c, s, 90, 1320 + i * 60, 42, C.ink, { w: 500 }));
    T(c, 'P-05-17-0441', 60, 1620, 40, C.slate, { mono: true, w: 500 }); footer(c, W, H, 220, 'ASK AT ANY TERMINAL'); } },
  building_id: { cat: 'Building ID plate', title: 'ID plate · M-01-17', w: 900, h: 300, m: [0.9, 0.3], draw(c, W, H) {
    R(c, 0, 0, W, H, C.graphite); R(c, 0, 0, 40, H, C.orange); T(c, 'M-01-17', 90, 150, 130, C.light, { mono: true, w: 500, base: 'middle' }); T(c, 'MAINTENANCE TOWER · SECTOR 17', 92, 250, 40, C.aged, { ls: 3 }); logo(c, W - 90, 120, 44); } },
  sector_marker: { cat: 'Sector marker', title: 'Sector monolith · S17', w: 1000, h: 2600, m: [1.0, 2.6], draw(c, W, H) {
    R(c, 0, 0, W, H, C.graphite); logo(c, W / 2, 220, 110); T(c, 'S17', W / 2, 820, 440, C.light, { align: 'center' }); R(c, 0, 900, W, 26, C.teal);
    T(c, '← S16', 80, 1100, 96, C.light); T(c, '200 km', 80, 1190, 60, C.aged, { w: 500 }); T(c, 'S18 →', W - 80, 1400, 96, C.light, { align: 'right' }); T(c, '200 km', W - 80, 1490, 60, C.aged, { align: 'right', w: 500 });
    R(c, 80, 1620, W - 160, 6, C.slate); T(c, 'LEVEL L0 · SURFACE', 80, 1740, 60, C.light, { ls: 3 }); T(c, 'RING ARC 17.000', 80, 1830, 52, C.aged, { mono: true, w: 500 }); R(c, 0, H - 120, W, 120, C.orange); } },
  fleet_decal: { cat: 'Vehicle livery decal', title: 'Fleet decal · T-12 0417', w: 2400, h: 600, m: [2.4, 0.6], decal: true, draw(c, W, H) {
    logo(c, 150, 300, 110, C.graphite, C.orange); T(c, 'T-12 · 0417', 330, 330, 200, C.graphite, { mono: true, w: 500, base: 'middle' }); R(c, 330, 470, 1900, 30, C.teal); T(c, 'MERIDIAN TRANSIT · ROUTE T-07', 330, 560, 56, C.graphite, { ls: 6 }); } },
  hazard_chevron: { cat: 'Vehicle livery decal', title: 'Rear chevron · Keep 10 m', w: 1600, h: 600, m: [1.6, 0.6], draw(c, W, H) {
    chevrons(c, 0, 0, W, H, C.orange, C.graphite, 110); R(c, W / 2 - 330, H / 2 - 110, 660, 220, C.light); T(c, 'KEEP 10 m', W / 2, H / 2, 140, C.ink, { align: 'center', base: 'middle' }); } },
  high_voltage: { cat: 'Hazard & safety', title: 'Danger · High voltage', w: 800, h: 1100, m: [0.6, 0.825], draw(c, W, H) {
    R(c, 0, 0, W, H, C.light); R(c, 0, 0, W, 180, C.orange); T(c, 'DANGER', W / 2, 90, 110, C.ink, { align: 'center', base: 'middle' }); tri(c, W / 2, 470, 400, C.yellow, C.ink);
    c.fillStyle = C.ink; c.beginPath(); [[425, 330], [350, 500], [410, 500], [370, 620], [470, 440], [405, 440], [445, 330]].forEach(([x, y], i) => i ? c.lineTo(x, y) : c.moveTo(x, y)); c.closePath(); c.fill();
    T(c, 'HIGH VOLTAGE', W / 2, 760, 96, C.ink, { align: 'center' }); T(c, 'ENERGY DISTRIBUTOR E-1701', W / 2, 850, 42, C.ink, { align: 'center', w: 500 }); T(c, 'AUTHORISED PERSONNEL ONLY', W / 2, 920, 42, C.ink, { align: 'center', w: 500 }); R(c, 0, H - 80, W, 80, C.teal); } },
  confined_space: { cat: 'Hazard & safety', title: 'Warning · Confined space', w: 800, h: 1100, m: [0.6, 0.825], draw(c, W, H) {
    R(c, 0, 0, W, H, C.light); R(c, 0, 0, W, 180, C.orange); T(c, 'WARNING', W / 2, 90, 110, C.ink, { align: 'center', base: 'middle' }); tri(c, W / 2, 470, 400, C.yellow, C.ink);
    c.fillStyle = C.ink; c.beginPath(); c.ellipse(W / 2, 540, 120, 34, 0, 0, Math.PI * 2); c.fill(); c.beginPath(); c.arc(W / 2, 395, 26, 0, Math.PI * 2); c.fill(); R(c, W / 2 - 22, 425, 44, 110, C.ink);
    T(c, 'CONFINED SPACE', W / 2, 760, 90, C.ink, { align: 'center' }); T(c, 'ENTRY BY PERMIT ONLY', W / 2, 850, 46, C.ink, { align: 'center', w: 500 }); T(c, 'GAS TEST BEFORE ENTRY · S-17', W / 2, 920, 40, C.ink, { align: 'center', w: 500 }); R(c, 0, H - 80, W, 80, C.orange); } },
  ppe: { cat: 'Hazard & safety', title: 'Mandatory · PPE', w: 1100, h: 800, m: [0.825, 0.6], draw(c, W, H) {
    R(c, 0, 0, W, H, C.light); R(c, 0, 0, W, 150, C.blue); T(c, 'MANDATORY', W / 2, 75, 90, C.light, { align: 'center', base: 'middle' });
    [['HELMET', 0], ['EAR', 1], ['EYES', 2]].forEach(([l, i]) => { const x = 200 + i * 350; c.fillStyle = C.blue; c.beginPath(); c.arc(x, 360, 140, 0, Math.PI * 2); c.fill(); c.fillStyle = C.light; c.strokeStyle = C.light; c.lineWidth = 24;
      if (i === 0) { c.beginPath(); c.arc(x, 400, 90, Math.PI, 0); c.fill(); R(c, x - 110, 395, 220, 26, C.light); }
      if (i === 1) { c.beginPath(); c.arc(x, 380, 80, Math.PI, 0); c.stroke(); R(c, x - 105, 360, 50, 90, C.light); R(c, x + 55, 360, 50, 90, C.light); }
      if (i === 2) { R(c, x - 100, 340, 85, 55, C.light); R(c, x + 15, 340, 85, 55, C.light); R(c, x - 20, 352, 40, 14, C.light); }
      T(c, l, x, 570, 60, C.ink, { align: 'center' }); });
    T(c, 'BEYOND THIS POINT · L2 GALLERY B', W / 2, 700, 46, C.ink, { align: 'center', w: 1000 }); } },
  stencil_wall: { cat: 'Wall stencil', title: 'Wall stencil · Zone L2-B', w: 1600, h: 600, m: [3.2, 1.2], decal: true, draw(c, W, H) {
    T(c, 'ZONE L2-B', 40, 230, 230, C.orange, { mono: true, w: 500 }); T(c, 'RACK 07 · WATER MAIN W-3', 46, 380, 92, C.light, { mono: true, w: 500 }); T(c, 'P-04-17-0441', 46, 520, 92, C.light, { mono: true, w: 500 }); stencilCut(c, W, H, 10, 140); } },
  stencil_floor: { cat: 'Floor stencil', title: 'Floor stencil · Exit X-17-02', w: 1200, h: 1200, m: [2.4, 2.4], decal: true, draw(c, W, H) {
    c.fillStyle = C.orange; c.beginPath(); [[160, 430], [700, 430], [700, 260], [1060, 560], [700, 860], [700, 690], [160, 690]].forEach(([x, y], i) => i ? c.lineTo(x, y) : c.moveTo(x, y)); c.closePath(); c.fill();
    T(c, 'EXIT', 160, 1030, 220, C.orange, { mono: true, w: 500 }); T(c, 'X-17-02', 700, 1030, 110, C.orange, { mono: true, w: 500 }); stencilCut(c, W, H, 14, 180); } },
  departures: { cat: 'Digital screen', title: 'Departure board · Tram T-07', w: 1920, h: 1080, m: [1.92, 1.08], glow: true, draw(c, W, H) {
    screenGlow(c, W, H); R(c, 0, 0, W, 150, C.graphite); logo(c, 90, 75, 40); T(c, 'TRAM T-07 · DEPARTURES', 170, 75, 72, C.light, { base: 'middle' }); T(c, '09:01', W - 60, 75, 72, C.teal, { align: 'right', base: 'middle', mono: true, w: 500 });
    ['TIME', 'DESTINATION', 'PLATFORM', 'STATUS'].forEach((h, i) => T(c, h, [80, 360, 1180, 1500][i], 230, 40, C.slate));
    [['09:02', 'RIM GATE', '1', 'ON TIME'], ['09:05', 'MARKET ROW', '2', 'ON TIME'], ['09:09', 'SPIRE S17', '1', '+2 MIN'], ['09:14', 'COUNCIL QUARTER', '2', 'ON TIME'], ['09:20', 'FARM CO-OP F-22', '1', 'ON TIME']].forEach((r, i) => { const y = 340 + i * 120; if (i % 2) R(c, 40, y - 75, W - 80, 110, '#181c20'); r.forEach((s, j) => T(c, s, [80, 360, 1180, 1500][j], y, 64, j === 3 ? (s === 'ON TIME' ? C.teal : C.orange) : C.light, { mono: j === 0 || j === 2, w: j === 0 || j === 2 ? 500 : 700 })); });
    R(c, 0, H - 110, W, 110, C.orange); T(c, 'PLATFORM 2 CLOSED NIGHTLY 23:00–05:00 · DAYS 112–118 · REPLACEMENT BUS FROM MARKET ROW', 50, H - 55, 46, C.ink, { base: 'middle' }); } },
  emergency: { cat: 'Digital screen', title: 'Emergency broadcast · Pressure test', w: 1920, h: 1080, m: [1.92, 1.08], glow: true, draw(c, W, H) {
    screenGlow(c, W, H); chevrons(c, 0, 0, W, 80, C.orange, C.ink, 60); chevrons(c, 0, H - 80, W, 80, C.orange, C.ink, 60);
    T(c, 'ALERT', 100, 360, 260, C.orange); T(c, 'PRESSURE TEST IN PROGRESS', 100, 520, 96, C.light); T(c, 'STAY CLEAR OF L2 GALLERY B', 100, 640, 96, C.light);
    R(c, 100, 720, 900, 8, C.orange); T(c, 'Follow the orange floor line to exit X-17-02.', 100, 820, 56, C.bone, { w: 500 }); T(c, 'MRA SAFETY · 09:01 · DAY 114', 100, 920, 44, C.slate, { mono: true, w: 500 }); logo(c, W - 260, 470, 150, C.light, C.orange); } },
  mural: { cat: 'Mural', title: 'Mural · We built this world', w: 6000, h: 2000, m: [18, 6], draw(c, W, H) {
    R(c, 0, 0, W, H, C.yellow); R(c, 0, 0, W, 700, C.cyan); R(c, 0, 700, W, 120, C.light);
    c.lineWidth = 180; c.strokeStyle = C.magenta; c.beginPath(); c.arc(W / 2, 3600, 3300, Math.PI * 1.2, Math.PI * 1.8); c.stroke(); c.lineWidth = 60; c.strokeStyle = C.violet; c.beginPath(); c.arc(W / 2, 3600, 3080, Math.PI * 1.2, Math.PI * 1.8); c.stroke();
    let x = 200; while (x < W - 200) { const w = 120 + (x * 7 % 160), h = 300 + (x * 13 % 520); R(c, x, 1500 - h, w, h, C.violet); x += w + 40; }
    for (const [cx, h] of [[1100, 900], [3900, 1000]]) { R(c, cx, 1500 - h, 50, h, C.ink); R(c, cx - 300, 1500 - h, 700, 50, C.ink); R(c, cx + 340, 1500 - h + 50, 8, 380, C.ink); R(c, cx + 300, 1500 - h + 430, 90, 60, C.orange); }
    for (let i = 0; i < 9; i++) { const fx = 600 + i * 560, fy = 1500; c.fillStyle = C.ink; c.beginPath(); c.arc(fx, fy - 250, 40, 0, Math.PI * 2); c.fill(); R(c, fx - 45, fy - 205, 90, 160, C.ink); R(c, fx - 45, fy - 150, 90, 28, i % 2 ? C.orange : C.lime); R(c, fx - 40, fy - 45, 30, 45, C.ink); R(c, fx + 10, fy - 45, 30, 45, C.ink); }
    R(c, 0, 1500, W, 30, C.ink); ['0', '60', '120', '180', '240'].forEach((y, i) => { const tx = 300 + i * 1350; R(c, tx, 1530, 16, 80, C.ink); T(c, 'YEAR ' + y, tx + 40, 1600, 90, C.ink); });
    T(c, 'WE BUILT THIS WORLD', 260, 420, 380, C.light); T(c, 'SECTOR 17 · RING DAY 240 · PAINTED BY RESIDENTS', 270, 560, 90, C.ink, { w: 500 });
    R(c, 0, H - 260, W, 260, C.magenta); T(c, 'MERIDIAN RING AUTHORITY · PUBLIC ART PROGRAMME', 260, H - 130, 100, C.light, { base: 'middle', ls: 8 }); logo(c, 140, H - 130, 60); } },
};
export const ORDER = ['water_loop', 'ring_day', 'recruit', 'visit_rim', 'service_point', 'public_notice', 'building_id', 'sector_marker', 'fleet_decal', 'hazard_chevron', 'high_voltage', 'confined_space', 'ppe', 'stencil_wall', 'stencil_floor', 'departures', 'emergency', 'mural'];
export const render = (key, canvas) => { const a = ART[key]; canvas.width = a.w; canvas.height = a.h; const c = canvas.getContext('2d'); c.clearRect(0, 0, a.w, a.h); a.draw(c, a.w, a.h); return canvas; };
