/* Layerline site script. Renders the catalog and product pages from store.js. */
(function () {
  var STORE = window.STORE || { site: {}, products: [] };
  var SITE = STORE.site || {};
  var PRODUCTS = STORE.products || [];
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var fmt = new Intl.NumberFormat(SITE.locale || "en-IN", { style: "currency", currency: SITE.currency || "INR", maximumFractionDigits: 0 });
  var money = function (n) { return fmt.format(Number(n) || 0); };
  function fmtTime(m) {
    m = Number(m) || 0; if (!m) return "";
    var h = Math.floor(m / 60), r = m % 60;
    if (!h) return r + " m";
    if (!r) return h + " h";
    return h + " h " + (r < 10 ? "0" : "") + r + " m";
  }

  /* Line drawings used when a design has no photo. 200 x 150 */
  function box(h, extra) {
    return '<g transform="translate(0 6)">' +
      '<path class="f" d="M40 60 L100 90 L100 ' + (90 + h) + ' L40 ' + (60 + h) + 'Z"/>' +
      '<path class="f" d="M100 90 L160 60 L160 ' + (60 + h) + ' L100 ' + (90 + h) + 'Z"/>' +
      '<path class="f" d="M100 30 L160 60 L100 90 L40 60Z"/>' + extra + '</g>';
  }
  var art = {
    organizer: function () { return box(40, '<path d="M100 38 L150 60 L100 82 L50 60Z"/><path class="acc" d="M70 45 L130 75"/><path class="acc" d="M130 45 L70 75"/>'); },
    "case": function () { return box(26, '<path d="M40 73 L100 103 L160 73"/><path d="M88 50 L118 65"/><path d="M94 47 L124 62"/><path d="M100 44 L130 59"/><path class="acc" d="M112 100 L124 94 L124 98 L112 104Z"/><path class="acc" d="M130 91 L142 85 L142 89 L130 95Z"/>'); },
    gear: function () {
      var n = 12, p = 2 * Math.PI / n, pts = [], cx = 100, cy = 75, ri = 40, ro = 52, i, a0;
      function pt(r, a) { return (cx + r * Math.cos(a)).toFixed(1) + " " + (cy + r * Math.sin(a)).toFixed(1); }
      for (i = 0; i < n; i++) { a0 = i * p; pts.push(pt(ri, a0), pt(ro, a0 + 0.14 * p), pt(ro, a0 + 0.46 * p), pt(ri, a0 + 0.6 * p)); }
      return '<path class="f" d="M' + pts.join(" L") + 'Z"/><circle cx="100" cy="75" r="26"/><circle class="acc" cx="100" cy="75" r="10"/>';
    },
    hook: function () { return '<path class="f" d="M62 22 H138 V40 H62Z"/><circle class="acc" cx="76" cy="31" r="3"/><circle class="acc" cx="124" cy="31" r="3"/><path class="thick" d="M100 40 V88 Q100 118 128 118 Q152 118 152 94"/>'; },
    vase: function () {
      var s = "", i, y, rx;
      for (i = 0; i < 12; i++) { y = 28 + i * 10; rx = 26 + 17 * Math.sin(i * 0.55 + 0.4); s += '<ellipse class="' + (i === 0 ? "acc" : "") + '" cx="100" cy="' + y + '" rx="' + rx.toFixed(1) + '" ry="' + (rx * 0.26).toFixed(1) + '"/>'; }
      return s;
    },
    spool: function () { return '<path class="f" d="M50 132 H150 V140 H50Z"/><path d="M100 118 V132"/><circle class="f" cx="100" cy="72" r="46"/><circle cx="100" cy="72" r="38"/><circle cx="100" cy="72" r="30"/><circle cx="100" cy="72" r="22"/><circle class="acc" cx="100" cy="72" r="9"/>'; }
  };
  function artSvg(key) { var f = art[key] || art.organizer; return '<svg class="art" viewBox="0 0 200 150" aria-hidden="true">' + f() + '</svg>'; }
  function visual(p) { return p.image ? '<img class="photo" src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy">' : artSvg(p.art); }
  function buyLink(p, cls) {
    if (p.buyUrl) return '<a class="btn ' + (cls || "accent") + '" href="' + esc(p.buyUrl) + '" target="_blank" rel="noopener">Buy now</a>';
    var subject = encodeURIComponent("Order: " + p.name), body = encodeURIComponent("Hi, I would like to buy " + p.name + " (" + money(p.price) + ").");
    return '<a class="btn ' + (cls || "accent") + '" href="mailto:' + esc(SITE.email || "") + '?subject=' + subject + '&body=' + body + '">Buy by email</a>';
  }

  window.Layerline = { STORE: STORE, esc: esc, money: money, fmtTime: fmtTime, artSvg: artSvg, art: art };

  /* Hero drawing: a vase sliced into layers */
  var hero = $("hero-art");
  if (hero) {
    var n = 44, step = 6, y0 = 58, cx = 150, s = "", i, y, rx;
    for (i = 0; i < n; i++) { y = y0 + i * step; rx = 56 + 34 * Math.sin(i * 0.16 + 0.6); s += '<ellipse class="layer' + (i === 0 ? " top" : "") + '" cx="' + cx + '" cy="' + y + '" rx="' + rx.toFixed(1) + '" ry="' + (rx * 0.26).toFixed(1) + '"/>'; }
    var yb = y0 + step;
    s += '<path class="dim" d="M268 ' + y0 + ' H286 M268 ' + yb + ' H286 M277 ' + y0 + ' V' + yb + '"/><text class="acc" x="270" y="' + (yb + 22) + '">0.20 mm</text>';
    s += '<text x="16" y="34">Z 8.80 mm</text><text x="16" y="52" class="acc">Layer 44 of 44</text>';
    hero.innerHTML = '<svg viewBox="0 0 340 340" aria-hidden="true">' + s + '</svg>';
  }

  /* Site-wide text from store.js */
  Array.prototype.forEach.call(document.querySelectorAll("[data-site]"), function (el) {
    var v = SITE[el.getAttribute("data-site")];
    if (v) el.textContent = v;
  });
  Array.prototype.forEach.call(document.querySelectorAll("[data-mail]"), function (el) {
    if (SITE.email) { el.href = "mailto:" + SITE.email; if (el.getAttribute("data-mail") === "text") el.textContent = SITE.email; }
  });
  Array.prototype.forEach.call(document.querySelectorAll("[data-social]"), function (el) {
    var v = SITE[el.getAttribute("data-social")];
    if (v) { el.href = v; el.hidden = false; }
  });

  /* Catalog (home page) */
  var grid = $("grid");
  if (grid) {
    var state = { cat: "All", q: "", sort: "featured" };
    var chipsEl = $("chips"), emptyEl = $("empty"), countEl = $("result-count");
    var cats = ["All"];
    PRODUCTS.forEach(function (p) { if (p.cat && cats.indexOf(p.cat) === -1) cats.push(p.cat); });
    var renderChips = function () {
      chipsEl.innerHTML = cats.map(function (c) { return '<button class="chip" type="button" data-cat="' + esc(c) + '" aria-pressed="' + (state.cat === c) + '">' + esc(c) + '</button>'; }).join("");
    };
    var render = function () {
      var q = state.q.trim().toLowerCase();
      var list = PRODUCTS.filter(function (p) { return (state.cat === "All" || p.cat === state.cat) && (!q || (p.name + " " + p.cat + " " + (p.blurb || "")).toLowerCase().indexOf(q) !== -1); });
      if (state.sort === "price-asc") list.sort(function (a, b) { return a.price - b.price; });
      if (state.sort === "price-desc") list.sort(function (a, b) { return b.price - a.price; });
      if (state.sort === "time-asc") list.sort(function (a, b) { return (a.mins || 1e9) - (b.mins || 1e9); });
      grid.innerHTML = list.map(function (p) {
        var url = "product.html?id=" + encodeURIComponent(p.id);
        var specs = [p.formats, fmtTime(p.mins), p.grams ? p.grams + " g" : ""].filter(Boolean).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
        return '<article class="card"><a class="art-wrap' + (p.image ? " photo-wrap" : "") + '" href="' + url + '" aria-label="View ' + esc(p.name) + '">' + visual(p) + '</a>' +
          '<div class="card-body"><span class="label cat">' + esc(p.cat) + '</span><h3><a href="' + url + '">' + esc(p.name) + '</a></h3>' +
          '<div class="specs">' + specs + '</div>' +
          '<div class="card-foot"><span class="price">' + money(p.price) + '</span><a class="btn ghost small" href="' + url + '">View details</a></div></div></article>';
      }).join("");
      emptyEl.hidden = list.length !== 0;
      emptyEl.textContent = PRODUCTS.length ? "No designs match that search. Try another category or clear the search." : "New designs are on the way. Check back soon.";
      countEl.textContent = list.length + (list.length === 1 ? " design" : " designs");
    };
    chipsEl.addEventListener("click", function (e) { var b = e.target.closest("[data-cat]"); if (!b) return; state.cat = b.getAttribute("data-cat"); renderChips(); render(); });
    $("q").addEventListener("input", function (e) { state.q = e.target.value; render(); });
    $("sort").addEventListener("change", function (e) { state.sort = e.target.value; render(); });
    renderChips(); render();
  }

  /* Product page */
  var pd = $("pd");
  if (pd) {
    var id = new URLSearchParams(location.search).get("id");
    var p = PRODUCTS.filter(function (x) { return x.id === id; })[0];
    if (!p) {
      pd.innerHTML = '<div class="notfound"><p class="label">Design not found</p><h2 class="h2">That design is not in the store.</h2><a class="btn accent" href="index.html#catalog">See all designs</a></div>';
      document.title = "Design not found | " + (SITE.name || "Layerline");
    } else {
      document.title = p.name + " | " + (SITE.name || "Layerline");
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", (p.blurb || p.name).slice(0, 155));
      var rows = [["Files", p.formats], ["Print time", fmtTime(p.mins)], ["Filament", p.grams ? p.grams + " g" : ""], ["Layer height", p.layer], ["Nozzle", p.nozzle], ["Supports", p.supports], ["Infill", p.infill], ["Material", p.material], ["Fit", p.fit]].filter(function (r) { return r[1]; });
      $("crumb-name").textContent = p.name;
      pd.innerHTML = '<div class="pd-art' + (p.image ? " photo-wrap" : "") + '">' + visual(p) + '</div>' +
        '<div class="pd-info"><div style="display:grid;gap:10px"><span class="label cat">' + esc(p.cat) + '</span><h1>' + esc(p.name) + '</h1></div>' +
        '<p class="desc">' + esc(p.blurb || "") + '</p>' +
        '<div class="pd-buy"><span class="price">' + money(p.price) + '</span>' + buyLink(p) + '</div>' +
        '<p class="fine">Instant digital files. Personal license included. <a href="terms.html" style="color:var(--accent)">Read the license</a>.</p>' +
        '<dl class="spec">' + rows.map(function (r) { return "<dt>" + r[0] + "</dt><dd>" + esc(r[1]) + "</dd>"; }).join("") + '</dl></div>';

      var ld = { "@context": "https://schema.org", "@type": "Product", name: p.name, description: p.blurb || p.name, category: p.cat,
        offers: { "@type": "Offer", price: String(p.price), priceCurrency: SITE.currency || "INR", availability: "https://schema.org/InStock" } };
      var sc = document.createElement("script"); sc.type = "application/ld+json"; sc.textContent = JSON.stringify(ld); document.head.appendChild(sc);

      var rel = PRODUCTS.filter(function (x) { return x.id !== p.id; }).sort(function (a, b) { return (b.cat === p.cat) - (a.cat === p.cat); }).slice(0, 3);
      var relEl = $("related");
      if (relEl && rel.length) {
        relEl.innerHTML = rel.map(function (x) {
          var url = "product.html?id=" + encodeURIComponent(x.id);
          return '<article class="card"><a class="art-wrap' + (x.image ? " photo-wrap" : "") + '" href="' + url + '" aria-label="View ' + esc(x.name) + '">' + visual(x) + '</a><div class="card-body"><span class="label cat">' + esc(x.cat) + '</span><h3><a href="' + url + '">' + esc(x.name) + '</a></h3><div class="card-foot"><span class="price">' + money(x.price) + '</span></div></div></article>';
        }).join("");
        $("related-wrap").hidden = false;
      }
    }
  }
})();
