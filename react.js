/* GreenHarvest Agriculture: plain-JS React app (no JSX/Babel needed), Three.js hero, chatbot, reviews */
(function () {
if (!window.React || !window.ReactDOM) {
  document.getElementById("root").innerHTML = '<p class="boot">Could not load React. Check your internet connection and reload.</p>';
  return;
}
const { useState, useEffect, useRef } = React;
const h = React.createElement;
const E = (t) => (p, ...c) => h(t, p, ...c);
const [div, span, para, a, ul, li, img, button, form, label, input, textarea, section, nav, header, footer, main, select, option, article, small, strong, canvas, i, iframe, details, summary, br] =
  ["div","span","p","a","ul","li","img","button","form","label","input","textarea","section","nav","header","footer","main","select","option","article","small","strong","canvas","i","iframe","details","summary","br"].map(E);
const h1 = E("h1"), h2 = E("h2"), h3 = E("h3");

/* ===== IMAGES: change any URL here. Leave hero "" to keep the empty image slot ===== */
const U = (id) => "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=900&q=70";
const IMAGES = {
  hero: "hero-farmer.jpg", // hero image: keep hero-farmer.jpg in the same folder as index.html
  about: U("photo-1500382017468-9049fed747ef"),
  organic: U("photo-1574943320219-553eb213f72d"),
  seeds: U("photo-1625246333195-78d9c38ad449"),
  irrigation: U("photo-1530836369250-ef72a3f5cda8"),
  consult: U("photo-1464226184884-fa280b87c399"),
  equipment: U("photo-1592982537447-7440770cbfc9"),
  solution: U("photo-1500382017468-9049fed747ef"),
  gallery: [
    U("photo-1500382017468-9049fed747ef"), U("photo-1574943320219-553eb213f72d"), U("photo-1625246333195-78d9c38ad449"),
    U("photo-1530836369250-ef72a3f5cda8"), U("photo-1464226184884-fa280b87c399"), U("photo-1592982537447-7440770cbfc9"),
  ],
};
const FALLBACK = "data:image/svg+xml;utf8," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='#8BC34A'/><text x='50%' y='52%' text-anchor='middle' font-size='30' font-family='serif' fill='#103A1E'>GreenHarvest</text></svg>");
const Img = (p) => img(Object.assign({ loading: "lazy", onError: (e) => { e.target.onerror = null; e.target.src = FALLBACK; } }, p));

/* ===== content ===== */
const T = {
  en: { home: "Home", about: "About", products: "Products", solutions: "Solutions", reviews: "Reviews", contact: "Contact",
    h1: "Grow more. Waste less. Farm for the future.",
    sub: "GreenHarvest links farmers, experts, suppliers and customers with smart tools for healthier soil, saved water and better harvests.",
    c1: "Explore products", c2: "Talk to an expert" },
  hi: { home: "होम", about: "हमारे बारे में", products: "उत्पाद", solutions: "समाधान", reviews: "समीक्षाएं", contact: "संपर्क",
    h1: "अधिक उगाएं। कम बर्बाद करें। भविष्य के लिए खेती करें।",
    sub: "ग्रीनहार्वेस्ट किसानों, विशेषज्ञों, आपूर्तिकर्ताओं और ग्राहकों को स्मार्ट तकनीक से जोड़ता है।",
    c1: "उत्पाद देखें", c2: "विशेषज्ञ से बात करें" },
  te: { home: "హోమ్", about: "మా గురించి", products: "ఉత్పత్తులు", solutions: "పరిష్కారాలు", reviews: "సమీక్షలు", contact: "సంప్రదించండి",
    h1: "ఎక్కువ పండించండి. తక్కువ వృథా చేయండి. భవిష్యత్తు కోసం సాగు చేయండి.",
    sub: "గ్రీన్‌హార్వెస్ట్ రైతులు, నిపుణులు, సరఫరాదారులు మరియు కస్టమర్లను స్మార్ట్ సాంకేతికతతో కలుపుతుంది.",
    c1: "ఉత్పత్తులు చూడండి", c2: "నిపుణుడితో మాట్లాడండి" },
};
const PRODUCTS = [
  { t: "Organic Farming Kits", d: "Bio-fertilizers and natural pest control for chemical-free crops.", i: IMAGES.organic, p: "From ₹1,200" },
  { t: "Certified Seeds", d: "High-yield, climate-tested paddy, wheat and vegetable seeds.", i: IMAGES.seeds, p: "From ₹350 per kg" },
  { t: "Smart Irrigation", d: "Drip and sensor-based systems that cut water use by up to 40%.", i: IMAGES.irrigation, p: "From ₹14,000" },
  { t: "Crop Consultancy", d: "One-to-one advice from agronomists on crops, soil and market timing.", i: IMAGES.consult, p: "₹499 per session" },
  { t: "Modern Equipment", d: "Affordable rental and purchase of tractors, sprayers and seeders.", i: IMAGES.equipment, p: "Rent from ₹800 per day" },
];
const SOLUTIONS = [
  { k: "Smart farming", ic: "fa-satellite-dish", d: "Drones and field sensors show crop stress early, so you can act before yield drops.", pts: ["Field maps on your phone", "Alerts in Hindi and Telugu", "Up to 25% higher yield"] },
  { k: "Water management", ic: "fa-droplet", d: "Soil-moisture sensors water your crop only when it needs it.", pts: ["Drip and sprinkler automation", "Rain forecast sync", "Up to 40% water saved"] },
  { k: "Soil health", ic: "fa-seedling", d: "Test pH, nitrogen and organic carbon, then get a fertilizer plan made for your plot.", pts: ["Lab-grade soil reports", "Right dose, right time", "Lower fertilizer cost"] },
  { k: "Disease prevention", ic: "fa-bug", d: "Photograph a leaf and get a diagnosis and treatment steps within minutes.", pts: ["Early blight and rust alerts", "Organic treatment options", "Expert follow-up"] },
];
const STEPS = [["Sow", "Certified seeds and a soil-tested plan."], ["Grow", "Sensors guide water and nutrients."], ["Harvest", "Expert advice on timing and storage."], ["Deliver", "Direct links to buyers at fair prices."]];
const FAQS = [
  ["Do I need a smartphone?", "A basic smartphone helps, but our helpline works on any phone, in Hindi, Telugu and English."],
  ["How fast is delivery?", "Seeds and kits reach most villages in Andhra Pradesh within 3 to 5 days."],
  ["Is organic farming profitable?", "Yes. Organic produce sells at higher prices, and our experts help you plan the switch."],
  ["Can I rent equipment?", "Yes. Tractors, sprayers and seeders can be rented by the day."],
];
const BOT = [
  [/product|seed|buy/i, "We offer organic kits, certified seeds, smart irrigation, consultancy and equipment. See the Products section."],
  [/price|cost|rate/i, "Seeds start at ₹350 per kg, irrigation at ₹14,000 and expert sessions at ₹499."],
  [/contact|phone|call|email/i, "Call +91 98765 43210 or email hello@greenharvest.in. We are in Kurnool, Andhra Pradesh."],
  [/tip|farming|crop|soil|water/i, "Tip: water early in the morning and test your soil every season. It saves water and fertilizer."],
];
const goTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); };

/* ===== 3D hero scene ===== */
function Scene() {
  const ref = useRef();
  useEffect(() => {
    const cv = ref.current; let r;
    try { r = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true }); } catch (e) { return; } // gradient fallback
    const sc = new THREE.Scene(), cam = new THREE.PerspectiveCamera(55, 1, 0.1, 200);
    cam.position.set(0, 4, 14);
    sc.add(new THREE.AmbientLight(0xfff1c9, 0.85));
    const sun = new THREE.DirectionalLight(0xffd27a, 1); sun.position.set(-6, 10, 5); sc.add(sun);
    const crops = [], stalk = new THREE.CylinderGeometry(0.02, 0.04, 1, 5), head = new THREE.ConeGeometry(0.1, 0.45, 5);
    const gm = new THREE.MeshLambertMaterial({ color: 0x6fae3a }), hm = new THREE.MeshLambertMaterial({ color: 0xf2b630 });
    for (let x = -14; x <= 14; x += 1.2) for (let z = -14; z <= 3; z += 1.2) {
      const g = new THREE.Group(), s = new THREE.Mesh(stalk, gm), hd = new THREE.Mesh(head, hm);
      hd.position.y = 0.65; g.add(s, hd); g.position.set(x, -2.2 + Math.sin(x * 0.3) * 0.3, z); g.userData.o = x + z; sc.add(g); crops.push(g);
    }
    const mk = (geo, col, x, y, z) => { const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: col, roughness: 0.4 })); m.position.set(x, y, z); sc.add(m); return m; };
    const objs = [mk(new THREE.SphereGeometry(0.5, 24, 24), 0x4fa3d9, 5, 3, 2), mk(new THREE.OctahedronGeometry(0.55), 0xf9a825, -5, 3.4, 1),
      mk(new THREE.CylinderGeometry(0.3, 0.45, 0.8, 16), 0xc75b39, 3, 1.2, 4), mk(new THREE.ConeGeometry(0.35, 1, 6), 0x8bc34a, -3.2, 1.6, 4)];
    const sunM = new THREE.Mesh(new THREE.SphereGeometry(1.6, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffd35c })); sunM.position.set(-9, 8, -14); sc.add(sunM);
    const clouds = [0, 1, 2].map((n) => { const c = mk(new THREE.SphereGeometry(1.1, 16, 16), 0xffffff, -10 + n * 9, 7 + n, -12); c.scale.set(2.2, 0.8, 1); return c; });
    const tr = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.8, 0.9), new THREE.MeshLambertMaterial({ color: 0x2e7d32 }));
    const cab = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.8), new THREE.MeshLambertMaterial({ color: 0xf9a825 })); cab.position.set(-0.3, 0.7, 0); tr.add(body, cab);
    [[0.6, -0.4, 0.5, 0.4], [-0.6, -0.4, 0.5, 0.5], [0.6, -0.4, -0.5, 0.4], [-0.6, -0.4, -0.5, 0.5]].forEach((q) => {
      const w = new THREE.Mesh(new THREE.CylinderGeometry(q[3], q[3], 0.25, 16), new THREE.MeshLambertMaterial({ color: 0x222222 })); w.rotation.x = Math.PI / 2; w.position.set(q[0], q[1], q[2]); tr.add(w);
    });
    tr.position.set(-8, -1.4, 3); sc.add(tr);
    const mouse = { x: 0, y: 0 }; let scroll = 0;
    const mm = (e) => { mouse.x = e.clientX / innerWidth - 0.5; mouse.y = e.clientY / innerHeight - 0.5; };
    const tilt = (e) => { if (e.gamma != null) { mouse.x = e.gamma / 90; mouse.y = (e.beta - 45) / 90; } };
    const sv = () => { scroll = scrollY / innerHeight; };
    const rs = () => { const w = cv.parentElement.clientWidth, hh = cv.parentElement.clientHeight; r.setSize(w, hh, false); cam.aspect = w / hh; cam.updateProjectionMatrix(); };
    addEventListener("mousemove", mm); addEventListener("deviceorientation", tilt); addEventListener("scroll", sv); addEventListener("resize", rs); rs();
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches; let id, t = 0;
    const loop = () => {
      id = requestAnimationFrame(loop); t += calm ? 0 : 0.016;
      crops.forEach((g) => { g.rotation.z = Math.sin(t * 1.5 + g.userData.o) * 0.12; });
      objs.forEach((o, n) => { o.rotation.y += calm ? 0 : 0.01; o.position.y += Math.sin(t * 1.2 + n) * 0.004; });
      clouds.forEach((c, n) => { c.position.x = ((c.position.x + 14 + (calm ? 0 : 0.008 * (n + 1))) % 40) - 14; });
      tr.position.x = ((tr.position.x + 9 + (calm ? 0 : 0.02)) % 22) - 9;
      cam.position.x += (mouse.x * 3 - cam.position.x) * 0.05;
      cam.position.y += (4 - mouse.y * 2 - scroll * 2 - cam.position.y) * 0.05;
      cam.lookAt(0, 1, 0); r.render(sc, cam);
    };
    loop();
    return () => { cancelAnimationFrame(id); removeEventListener("mousemove", mm); removeEventListener("deviceorientation", tilt); removeEventListener("scroll", sv); removeEventListener("resize", rs); r.dispose(); };
  }, []);
  return canvas({ id: "scene", ref: ref, "aria-hidden": "true" });
}

/* ===== helpers ===== */
function Counter(props) {
  const [n, setN] = useState(0), ref = useRef();
  useEffect(() => {
    const io = new IntersectionObserver((en) => {
      if (!en[0].isIntersecting) return; io.disconnect(); let s = null;
      const step = (ts) => { s = s || ts; const p = Math.min((ts - s) / 1600, 1); setN(Math.floor(p * props.to)); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    });
    io.observe(ref.current); return () => io.disconnect();
  }, []);
  return h("b", { ref: ref }, n.toLocaleString("en-IN") + (props.suffix || ""));
}
function ProductCard(props) {
  const p = props.p, ref = useRef();
  const move = (e) => { const b = ref.current.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - 0.5, y = (e.clientY - b.top) / b.height - 0.5; ref.current.style.transform = "perspective(700px) rotateY(" + x * 12 + "deg) rotateX(" + -y * 12 + "deg) translateY(-4px)"; };
  return article({ className: "card", ref: ref, onMouseMove: move, onMouseLeave: () => { ref.current.style.transform = ""; } },
    Img({ src: p.i, alt: p.t }),
    div({ className: "body" }, h3(null, p.t), para(null, p.d), para(null, strong(null, p.p)),
      button({ className: "btn btn-green btn-sm", onClick: () => props.onAsk(p.t) }, "Enquire now")));
}

/* ===== reviews ===== */
const SEED = [
  { n: "Ramesh Reddy, Kurnool", s: 5, c: "The drip system saved my groundnut crop in a dry year. My water bill is down by a third." },
  { n: "Lakshmi Devi, Guntur", s: 5, c: "The soil report told me exactly what my chilli field lacked. My yield went up." },
  { n: "Suresh Kumar, Anantapur", s: 4, c: "Good seeds and quick delivery. The helpline answered in Telugu, which helped a lot." },
];
function Reviews() {
  const [list, setList] = useState(() => { try { return JSON.parse(localStorage.getItem("gh_reviews")) || SEED; } catch (e) { return SEED; } });
  const [f, setF] = useState({ n: "", s: 0, c: "" }), [err, setErr] = useState(""), [idx, setIdx] = useState(0);
  useEffect(() => { const t = setInterval(() => setIdx((x) => (x + 1) % list.length), 5000); return () => clearInterval(t); }, [list.length]);
  const avg = (list.reduce((s, r) => s + r.s, 0) / list.length).toFixed(1), rnd = Math.round(avg);
  const submit = (e) => {
    e.preventDefault();
    if (!f.n.trim() || !f.s || f.c.trim().length < 10) return setErr("Enter your name, pick a star rating and write at least 10 characters.");
    const next = [{ n: f.n.trim(), s: f.s, c: f.c.trim() }].concat(list); setList(next); setIdx(0); setErr(""); setF({ n: "", s: 0, c: "" });
    try { localStorage.setItem("gh_reviews", JSON.stringify(next)); } catch (x) {}
  };
  const r = list[idx] || list[0];
  return section({ id: "reviews" }, div({ className: "wrap" },
    h2(null, "What farmers say about us"),
    div({ className: "rev-top" },
      div(null, div({ className: "avg" }, avg), div({ className: "stars", "aria-label": avg + " out of 5" }, "★".repeat(rnd) + "☆".repeat(5 - rnd)), small(null, list.length + " reviews")),
      div(null, [5, 4, 3, 2, 1].map((s) => { const c = list.filter((x) => x.s === s).length; return div({ className: "bar", key: s }, s + "★", i({ style: { display: "block" } }, h("em", { style: { width: (c / list.length) * 100 + "%" } })), c); }))),
    div({ className: "rev", "aria-live": "polite" }, div({ className: "stars" }, "★".repeat(r.s)), para(null, "“" + r.c + "”"), h3(null, r.n)),
    form({ className: "card-form", onSubmit: submit, noValidate: true },
      h3(null, "Add your review"),
      div(null, label({ htmlFor: "rn" }, "Your name"), input({ id: "rn", value: f.n, onChange: (e) => setF({ n: e.target.value, s: f.s, c: f.c }) })),
      div({ className: "starpick", role: "group", "aria-label": "Rating" }, [1, 2, 3, 4, 5].map((s) => button({ type: "button", key: s, className: f.s >= s ? "on" : "", "aria-label": s + " stars", onClick: () => setF({ n: f.n, s: s, c: f.c }) }, "★"))),
      div(null, label({ htmlFor: "rc" }, "Your experience"), textarea({ id: "rc", rows: 3, value: f.c, onChange: (e) => setF({ n: f.n, s: f.s, c: e.target.value }) })),
      div({ className: "err", role: "alert" }, err),
      button({ className: "btn btn-green" }, "Post review"))));
}

/* ===== contact ===== */
function Contact(props) {
  const [v, setV] = useState({ name: "", email: "", phone: "", message: "" }), [e, setE] = useState({}), [ok, setOk] = useState(false);
  useEffect(() => { if (props.prefill) setV((x) => Object.assign({}, x, { message: "I would like to know more about: " + props.prefill })); }, [props.prefill]);
  const submit = (ev) => {
    ev.preventDefault(); const er = {};
    if (v.name.trim().length < 2) er.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) er.email = "Enter a valid email, like name@example.com.";
    if (!/^[6-9]\d{9}$/.test(v.phone.replace(/\s/g, ""))) er.phone = "Enter a 10-digit Indian mobile number.";
    if (v.message.trim().length < 10) er.message = "Write at least 10 characters.";
    setE(er); if (Object.keys(er).length) return; setOk(true); setV({ name: "", email: "", phone: "", message: "" });
  };
  const fld = (k, lab, type) => {
    const on = (x) => { const n = Object.assign({}, v); n[k] = x.target.value; setV(n); };
    const props2 = { id: k, value: v[k], onChange: on, "aria-invalid": !!e[k] };
    return div({ key: k }, label({ htmlFor: k }, lab), k === "message" ? textarea(Object.assign({ rows: 4 }, props2)) : input(Object.assign({ type: type || "text" }, props2)), div({ className: "err", role: "alert" }, e[k]));
  };
  return section({ id: "contact", className: "bg-cream" }, div({ className: "wrap two" },
    div(null, h2(null, "Talk to GreenHarvest"), para({ className: "lead" }, "Tell us about your land and crop. An expert will call you within one working day."),
      ul({ className: "info" },
        li(null, i({ className: "fa-solid fa-location-dot" }), "GreenHarvest Agri Hub, Kurnool, Andhra Pradesh 518001"),
        li(null, i({ className: "fa-solid fa-phone" }), a({ href: "tel:+919876543210" }, "+91 98765 43210")),
        li(null, i({ className: "fa-solid fa-envelope" }), a({ href: "mailto:hello@greenharvest.in" }, "hello@greenharvest.in")),
        li(null, i({ className: "fa-solid fa-clock" }), "Mon to Sat, 8 am to 6 pm")),
      iframe({ className: "map", title: "GreenHarvest location in Kurnool", loading: "lazy", src: "https://www.openstreetmap.org/export/embed.html?bbox=78.00%2C15.78%2C78.16%2C15.88&layer=mapnik" })),
    form({ onSubmit: submit, noValidate: true },
      ok ? div({ className: "ok", role: "status" }, "Thank you. We received your message and will call you soon.") : null,
      fld("name", "Full name"), fld("email", "Email", "email"), fld("phone", "Phone number", "tel"), fld("message", "Message"),
      button({ className: "btn btn-gold" }, "Send message"))));
}

/* ===== AI chatbot ===== */
async function callAI(message) {
  // CONNECT YOUR LLM HERE. Never put a real API key in front-end code; call your own backend instead:
  // const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message }) });
  // return (await res.json()).reply;
  return null;
}
function Chatbot() {
  const [open, setOpen] = useState(false), [typing, setTyping] = useState(false), [txt, setTxt] = useState("");
  const [msgs, setMsgs] = useState([{ w: "bot", t: "Namaste! I am Kisan Mitra, GreenHarvest's farming helper. How can I help?" }]);
  const end = useRef(); useEffect(() => { if (end.current) end.current.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing, open]);
  const send = async (q) => {
    if (!q.trim()) return; setMsgs((m) => m.concat([{ w: "me", t: q }])); setTxt(""); setTyping(true);
    let ans = await callAI(q);
    if (!ans) { const hit = BOT.find((b) => b[0].test(q)); ans = hit ? hit[1] : "I can help with products, prices, contact details and farming tips. Try one of the buttons below."; }
    setTimeout(() => { setTyping(false); setMsgs((m) => m.concat([{ w: "bot", t: ans }])); }, 900);
  };
  return h(React.Fragment, null,
    open ? div({ className: "chat", role: "dialog", "aria-label": "Chat with Kisan Mitra" },
      header(null, span(null, "👨‍🌾 Kisan Mitra"), button({ "aria-label": "Close chat", onClick: () => setOpen(false) }, "✕")),
      div({ className: "msgs" }, msgs.map((m, n) => div({ key: n, className: "m " + m.w }, m.t)), typing ? div({ className: "m bot dots" }, span(null, "●"), span(null, "●"), span(null, "●")) : null, div({ ref: end })),
      div({ className: "chips" }, ["Products", "Pricing", "Contact", "Farming tips"].map((c) => button({ key: c, onClick: () => send(c) }, c))),
      form({ onSubmit: (e) => { e.preventDefault(); send(txt); } }, input({ "aria-label": "Type your question", value: txt, onChange: (e) => setTxt(e.target.value), placeholder: "Ask a question" }), button({ className: "btn btn-green btn-sm" }, "Send"))) : null,
    button({ className: "fab bot-btn", "aria-label": "Open chat assistant", onClick: () => setOpen(!open) }, i({ className: "fa-solid fa-comments" })));
}

/* ===== app ===== */
function App() {
  const [lang, setLang] = useState("en"), t = T[lang], [menu, setMenu] = useState(false), [sol, setSol] = useState(0);
  const [heroOk, setHeroOk] = useState(true), [ask, setAsk] = useState(""), [showTop, setShowTop] = useState(false), [lb, setLb] = useState(null), [mail, setMail] = useState("");
  useEffect(() => { const s = () => setShowTop(scrollY > 600); addEventListener("scroll", s); return () => removeEventListener("scroll", s); }, []);
  const nav2 = (id) => (e) => { e.preventDefault(); setMenu(false); goTo(id); };
  const S = SOLUTIONS[sol], keys = ["home", "about", "products", "solutions", "reviews", "contact"];
  return h(React.Fragment, null,
    nav({ "aria-label": "Main" }, div({ className: "wrap nav-in" },
      a({ href: "#home", className: "logo", onClick: nav2("home") }, i({ className: "fa-solid fa-wheat-awn" }), " GreenHarvest"),
      button({ className: "burger", "aria-label": "Toggle menu", "aria-expanded": menu, onClick: () => setMenu(!menu) }, i({ className: "fa-solid " + (menu ? "fa-xmark" : "fa-bars") })),
      ul({ className: "links" + (menu ? " open" : "") },
        keys.map((k) => li({ key: k }, a({ href: "#" + k, onClick: nav2(k) }, t[k]))),
        li(null, select({ className: "lang", "aria-label": "Language", value: lang, onChange: (e) => setLang(e.target.value) }, option({ value: "en" }, "English"), option({ value: "hi" }, "हिन्दी"), option({ value: "te" }, "తెలుగు")))))),
    main({ id: "main" },
      header({ className: "hero", id: "home" }, h(Scene), div({ className: "wrap" },
        div(null, h1(null, t.h1), para({ className: "sub" }, t.sub),
          div({ className: "cta" }, button({ className: "btn btn-gold", onClick: () => goTo("products") }, t.c1), button({ className: "btn btn-ghost", onClick: () => goTo("contact") }, t.c2))),
        /* HERO IMAGE: change IMAGES.hero at the top of this file */
        div({ className: "arch" }, IMAGES.hero && heroOk ? img({ id: "hero-image", src: IMAGES.hero, alt: "Indian farmer in a green field at sunrise", fetchpriority: "high", onError: () => setHeroOk(false) }) : span(null, "Place hero-farmer.jpg next to index.html")))),

      section({ id: "about" }, div({ className: "wrap two" },
        div(null, h2(null, "Rooted in the village, built for tomorrow"),
          para(null, "GreenHarvest began with one idea: a small farmer deserves the same data, inputs and advice as a large farm. Today we connect farmers, agronomists, suppliers and buyers on one platform, so good decisions reach every field."),
          div({ className: "mv" }, div(null, h3(null, "Our mission"), para(null, "Raise farm income with affordable technology and honest advice.")), div(null, h3(null, "Our vision"), para(null, "Every Indian village farming sustainably and profitably."))),
          para(null, "We help farmers use less water, protect their soil and sell at fair prices.")),
        Img({ className: "photo", src: IMAGES.about, alt: "Golden wheat field at sunrise" }))),

      section({ id: "products", className: "bg-cream" }, div({ className: "wrap" },
        h2(null, "Products and services"), para({ className: "lead" }, "Everything a farm needs, from seed to harvest."),
        div({ className: "grid" }, PRODUCTS.map((p) => h(ProductCard, { key: p.t, p: p, onAsk: (n) => { setAsk(n); goTo("contact"); } }))))),

      section({ id: "solutions" }, div({ className: "wrap" },
        h2(null, "Farming solutions that raise productivity"), para({ className: "lead" }, "Choose a topic to see how technology helps your field."),
        div({ className: "tabs", role: "tablist" }, SOLUTIONS.map((s, n) => button({ key: s.k, role: "tab", className: "tab", "aria-selected": sol === n, onClick: () => setSol(n) }, s.k))),
        div({ className: "two" },
          div(null, i({ className: "fa-solid sol-icon " + S.ic }), h3({ style: { fontSize: "1.8rem", margin: "10px 0" } }, S.k), para(null, S.d), ul(null, S.pts.map((p) => li({ key: p }, p))),
            button({ className: "btn btn-green", style: { marginTop: 20 }, onClick: () => { setAsk(S.k); goTo("contact"); } }, "Get this solution")),
          Img({ className: "photo", src: IMAGES.solution, alt: S.k + " on a farm" })))),

      section({ className: "bg-cream", id: "process" }, div({ className: "wrap" },
        h2(null, "From seed to market"), para({ className: "lead" }, "How GreenHarvest supports you through every season."),
        div({ className: "steps" }, STEPS.map((s) => div({ className: "step", key: s[0] }, h3(null, s[0]), para(null, s[1])))))),

      section({ id: "gallery" }, div({ className: "wrap" },
        h2(null, "Life on the farm"), para({ className: "lead" }, "Fields, farmers and harvests from the villages we work with."),
        div({ className: "gal" }, IMAGES.gallery.map((src, n) => button({ key: n, "aria-label": "Open photo " + (n + 1), onClick: () => setLb(src) }, Img({ src: src, alt: "Farm photo " + (n + 1) })))))),

      section({ className: "stats" }, div({ className: "wrap" }, h2(null, "Our impact so far"),
        div({ className: "grid", style: { marginTop: 30 } },
          div({ className: "stat" }, h(Counter, { to: 12000, suffix: "+" }), "farmers served"), div({ className: "stat" }, h(Counter, { to: 48000, suffix: "+" }), "acres improved"),
          div({ className: "stat" }, h(Counter, { to: 40, suffix: "%" }), "average water saved"), div({ className: "stat" }, h(Counter, { to: 320, suffix: "+" }), "villages reached")))),

      h(Reviews),

      section({ id: "faq", className: "bg-cream" }, div({ className: "wrap" }, h2(null, "Common questions"), FAQS.map((f) => details({ key: f[0] }, summary(null, f[0]), para(null, f[1]))))),

      h(Contact, { prefill: ask })),

    footer(null, div({ className: "wrap" },
      div({ className: "foot" },
        div(null, h3(null, "GreenHarvest Agriculture"), para(null, "Smart, sustainable farming tools and expert advice for Indian farmers.")),
        div(null, h3(null, "Quick links"), ul(null, ["about", "products", "solutions", "reviews", "contact"].map((k) => li({ key: k }, a({ href: "#" + k, onClick: nav2(k) }, t[k]))))),
        div(null, h3(null, "Newsletter"), para(null, "Monthly farming tips."),
          form({ className: "news", onSubmit: (e) => { e.preventDefault(); if (/^\S+@\S+\.\S+$/.test(mail)) { setMail("Subscribed!"); } } }, input({ "aria-label": "Email address", type: "email", placeholder: "Email", value: mail, onChange: (e) => setMail(e.target.value) }), button({ className: "btn btn-gold btn-sm" }, "Join")),
          para({ style: { marginTop: 10 } }, "Kurnool, Andhra Pradesh", br(), "+91 98765 43210")),
        div({ className: "soc" }, h3(null, "Follow us"),
          a({ href: "https://facebook.com", "aria-label": "Facebook", target: "_blank", rel: "noopener" }, i({ className: "fa-brands fa-facebook" })),
          a({ href: "https://instagram.com", "aria-label": "Instagram", target: "_blank", rel: "noopener" }, i({ className: "fa-brands fa-instagram" })),
          a({ href: "https://youtube.com", "aria-label": "YouTube", target: "_blank", rel: "noopener" }, i({ className: "fa-brands fa-youtube" })))),
      div({ className: "copy" }, "© " + new Date().getFullYear() + " GreenHarvest Agriculture. All rights reserved."))),

    a({ className: "fab wa", href: "https://wa.me/919876543210", target: "_blank", rel: "noopener", "aria-label": "Chat on WhatsApp" }, i({ className: "fa-brands fa-whatsapp" })),
    showTop ? button({ className: "fab top", "aria-label": "Back to top", onClick: () => scrollTo({ top: 0, behavior: "smooth" }) }, i({ className: "fa-solid fa-arrow-up" })) : null,
    lb ? div({ className: "lb", role: "dialog", "aria-label": "Photo viewer", onClick: () => setLb(null) }, button({ "aria-label": "Close photo", onClick: () => setLb(null) }, "✕"), img({ src: lb, alt: "Enlarged farm photo" })) : null,
    h(Chatbot));
}
ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();