/* Verdant & Vellum: storefront logic
   ------------------------------------------------------------------
   Everything you will ever edit lives in the CONFIG and PRODUCTS blocks
   at the top of this file. See SETUP-GUIDE.md for step-by-step help.

   Each product gets its own detail view, shareable at:
   yoursite.com/#item-<id>
------------------------------------------------------------------ */

const CONFIG = {
  storeUrl: "https://payhip.com/",                       // your Payhip store link ("Shop Catalog" button)
  email: "vanitasandvine@gmail.com",
  instagramUrl: "https://www.instagram.com/verdant.and.vellum/?hl=en",
  instagramHandle: "@verdant.and.vellum",
  pinterestUrl: "https://pin.it/oS2KEFTDx",
  pinterestHandle: "Verdant & Vellum"
};

/* A product only appears on the site when its `url` is filled in.
   Leave url as "" to keep it hidden as a draft. */
const PRODUCTS = [
  {
    id: "cabinet-of-curiosities-vol-01",
    tag: "Vol. 01",
    title: "Cabinet of Curiosities",
    meta: "16 transparent PNGs, 3000 x 3000 px+, 300 DPI",
    price: "$3.00",
    was: "$6.00",                       // set to "" when the sale ends
    short:
      "Amber glass, poisonous roots and alchemical relics: clean transparent PNGs for junk journals, dark academia layouts and print-on-demand.",
    intro: [
      "If your junk journals, dark academia layouts or print-on-demand items are missing that 3 AM candle-lit laboratory energy, this pack fixes it. It is pure, unadulterated antique weirdness, heavy on amber glass, poisonous roots and alchemical relics.",
      "Total ghost-free zone: completely inanimate, zero creepy faces, and no background halo to ruin your workflow. Just clean, high-res transparent PNGs ready to drop into digital planners, stickers and physical merch."
    ],
    folders: [
      {
        name: "Folder 01: Curiosities & Alchemical Relics",
        items: [
          "Amber glass dropper bottle with dried ferns",
          "Apothecary brass scale with scales of mortality",
          "Black rose wax seal",
          "Ceramic apothecary jar with Latin label",
          "Hourglass with falling black sand and thorns",
          "Mortar and pestle with crossed mandrake root",
          "Vintage poison vial with belladonna"
        ]
      },
      {
        name: "Folder 02: Gothic Apothecary & Glassware",
        items: [
          "Amber glass apothecary jar",
          "Cobalt blue poison bottle",
          "Ornamental elixir vial 01",
          "Ornamental elixir vial 02"
        ]
      },
      {
        name: "Folder 03: Poisonous Botanicals & Dark Flora",
        items: [
          "Atropa belladonna",
          "Black henbane flower",
          "Datura white trumpet",
          "Poison hemlock",
          "Sprig of poisonous oleander"
        ]
      }
    ],
    specs: [
      "16 individual PNG files with transparent backgrounds and zero halo around the edges",
      "3000 x 3000 px or larger at 300 DPI: print them huge or shrink them to tiny planner stickers without pixelation",
      "Instant download: a tidy zip file straight to your device the second you check out"
    ],
    images: [
      { src: "images/vol01-cover.webp",    alt: "Cabinet of Curiosities Vol. 01 cover: 6 high-res transparent PNGs" },
      { src: "images/vol01-mockups.webp",  alt: "Mockups showing the artwork on a notebook cover and a hoodie" },
      { src: "images/vol01-contents.webp", alt: "Diagram of the three folders inside the pack" },
      { src: "images/vol01-license.webp",  alt: "License and terms summary" }
    ],
    url: "https://payhip.com/b/lI7yZ"
  },

  /* Free product: the Vol. 00 freebie */
  {
    id: "midnight-desk-freebie",
    kind: "freebie",
    tag: "Vol. 00 - Free",
    title: "The Midnight Desk Freebie",
    meta: "Transparent PNGs, 300 DPI",
    price: "Free",
    was: "",
    short: "A free taste of the studio. Download it, test the clean edges on your own layouts, and see if the Cabinet of Curiosities is for you.",
    intro: [
      "The Midnight Desk Freebie is our free starter pack: clean, high-resolution transparent PNGs in the same dark, moody style as the paid collections, with zero background halo.",
      "Drop them into a junk journal spread, a digital planner or a sticker sheet and see the edge quality for yourself. No card needed."
    ],
    folders: [],
    specs: [
      "Transparent PNG files with clean edges and zero halo",
      "300 DPI, ready to print or shrink to tiny planner stickers",
      "Instant download from Payhip"
    ],
    images: [
      { src: "images/freebie-cover.webp",    alt: "The Midnight Desk Freebie Vol. 00 cover with a full moon, a bat and a graveyard" },
      { src: "images/freebie-mockups.webp",  alt: "Mockups showing the artwork on a notebook cover and a hoodie" },
      { src: "images/freebie-license.webp",  alt: "License and terms summary" }
    ],
    url: "https://payhip.com/b/7ORyg"
  }
];

/* ---------- Helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

function el(tag, attrs = {}, html = "") {
  const n = document.createElement(tag);
  for (const k in attrs) n.setAttribute(k, attrs[k]);
  n.innerHTML = html;
  return n;
}

const LIVE = PRODUCTS.filter(p => p.url);
const isFree = p => p.price.toLowerCase() === "free";

function priceHtml(p) {
  return (p.was ? '<s class="price-was">' + p.was + "</s> " : "") + p.price;
}

function placeholder(p) {
  return '<div class="art-empty">' + p.title + "<br>preview coming soon</div>";
}

/* ---------- Product cards ---------- */
function renderGrid() {
  const grid = $("#productGrid");
  grid.innerHTML = "";
  grid.classList.toggle("single", LIVE.length === 1);

  LIVE.forEach(p => {
    const card = el("article", { class: "card" });
    const first = p.images[0];

    card.appendChild(el("button", {
      class: "card-art", type: "button",
      "data-open": p.id, "aria-label": "View details for " + p.title
    }, first ? '<img src="' + first.src + '" alt="' + first.alt + '" loading="lazy">' : placeholder(p)));

    const body = el("div", { class: "card-body" });
    body.appendChild(el("p", { class: "card-tag" }, p.tag));
    body.appendChild(el("h3", { class: "card-title" },
      '<button type="button" data-open="' + p.id + '">' + p.title + "</button>"));
    body.appendChild(el("p", { class: "card-meta" }, p.short));
    body.appendChild(el("p", { class: "card-meta" }, p.meta));
    body.appendChild(el("p", { class: "card-price" }, priceHtml(p)));

    const actions = el("div", { class: "card-actions" });
    actions.appendChild(el("button", { class: "btn btn-ghost", type: "button", "data-open": p.id }, "View details"));
    actions.appendChild(el("a", {
      class: "btn btn-solid", href: p.url, target: "_blank", rel: "noopener noreferrer"
    }, isFree(p) ? "Get free" : "Buy now"));
    body.appendChild(actions);

    card.appendChild(body);
    grid.appendChild(card);
  });

  grid.addEventListener("click", e => {
    const t = e.target.closest("[data-open]");
    if (t) location.hash = "item-" + t.dataset.open;
  });
}

/* ---------- Product detail dialog ---------- */
const productDialog = $("#productDialog");
const docDialog = $("#docDialog");
const BASE_TITLE = document.title;

function renderGallery(p) {
  const box = $("#pdArt");
  if (!p.images.length) { box.innerHTML = placeholder(p); return; }

  box.innerHTML =
    '<div class="pd-art-inner">' +
      '<img class="pd-main" id="pdMain" src="' + p.images[0].src + '" alt="' + p.images[0].alt + '">' +
      (p.images.length > 1
        ? '<div class="pd-thumbs">' + p.images.map((im, i) =>
            '<button type="button" class="pd-thumb' + (i === 0 ? " on" : "") + '" data-i="' + i + '" aria-label="Show image ' + (i + 1) + '">' +
            '<img src="' + im.src + '" alt="' + im.alt + '" loading="lazy"></button>').join("") + "</div>"
        : "") +
    "</div>";

  $$(".pd-thumb", box).forEach(b =>
    b.addEventListener("click", () => {
      const im = p.images[+b.dataset.i];
      const main = $("#pdMain");
      main.src = im.src; main.alt = im.alt;
      $$(".pd-thumb", box).forEach(x => x.classList.toggle("on", x === b));
    })
  );
}

function openProduct(id) {
  const p = LIVE.find(x => x.id === id);
  if (!p) return;

  renderGallery(p);
  $("#pdTitle").textContent = p.title;
  $("#pdMeta").textContent = p.tag + ". " + p.meta + ".";
  $("#pdPrice").innerHTML = priceHtml(p);
  $("#pdDesc").innerHTML = p.intro.map(t => "<p>" + t + "</p>").join("");

  const folders = $("#pdFolders");
  folders.hidden = !p.folders.length;
  folders.innerHTML = p.folders.length
    ? "<h3>What is inside</h3>" + p.folders.map(f =>
        '<h4>' + f.name + "</h4><ul>" + f.items.map(i => "<li>" + i + "</li>").join("") + "</ul>").join("")
    : "";

  $("#pdSpecs").innerHTML = p.specs.map(s => "<li>" + s + "</li>").join("");

  $$(".pd-buy").forEach(b => {
    b.href = p.url;
    b.textContent = isFree(p) ? "Get it free on Payhip" : "Buy now on Payhip";
  });

  document.title = p.title + " " + p.tag + " | Verdant & Vellum";
  if (!productDialog.open) productDialog.showModal();
  productDialog.scrollTop = 0;
}

function syncFromHash() {
  const h = location.hash;
  if (h.startsWith("#item-")) openProduct(h.slice(6));
  else if (productDialog.open) productDialog.close();
}

productDialog.addEventListener("close", () => {
  document.title = BASE_TITLE;
  if (location.hash.startsWith("#item-")) history.replaceState(null, "", "#collections");
});

/* ---------- Policy dialogs ---------- */
const DOCS = {
  privacy: {
    title: "Privacy Policy",
    body:
      "<p>Verdant &amp; Vellum is a static showcase website. It does not collect, store or sell personal data itself, and it does not use tracking cookies.</p>" +
      "<h3>Purchases</h3><p>Buttons on this site send you to Payhip to complete your order. Payhip and its payment providers process your payment and personal details under their own privacy policies. We never see your card number.</p>" +
      "<h3>Email</h3><p>If you write to us, we use your email address only to reply to you. If you download a free product from Payhip, you may be asked to join our mailing list there; you can unsubscribe at any time.</p>" +
      "<h3>Contact</h3><p>Questions about this policy: <a href=\"mailto:" + CONFIG.email + "\">" + CONFIG.email + "</a></p>"
  },
  terms: {
    title: "Terms of Service",
    body:
      "<p>By purchasing or downloading from Verdant &amp; Vellum you agree to the following.</p>" +
      "<h3>License</h3><p>Personal projects are unlimited. Small business commercial use is allowed up to 500 units of physical or digital end products (stickers, journals, merch). Print-on-demand is allowed when the art is mixed into a new composite design.</p>" +
      "<h3>Restrictions</h3><p>You may not resell, share or give away the raw PNG files, or bundle them into competing digital asset packs. All rights remain reserved to Verdant &amp; Vellum.</p>" +
      "<h3>Digital goods and refunds</h3><p>All products are instant digital downloads, so refunds are generally not offered once a file has been downloaded. If a file is damaged or missing, contact us and we will fix it.</p>" +
      "<h3>Contact</h3><p><a href=\"mailto:" + CONFIG.email + "\">" + CONFIG.email + "</a></p>"
  }
};

$$("[data-doc]").forEach(b =>
  b.addEventListener("click", () => {
    const d = DOCS[b.dataset.doc];
    $("#docTitle").textContent = d.title;
    $("#docBody").innerHTML = d.body;
    docDialog.showModal();
  })
);

[productDialog, docDialog].forEach(dlg =>
  dlg.addEventListener("click", e => {
    if (e.target === dlg || e.target.closest("[data-close]")) dlg.close();
  })
);

/* ---------- Mobile menu ---------- */
const burger = $("#burger");
const nav = $("#nav");

function setMenu(open) {
  nav.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

/* ---------- Hero candle-light follows the pointer ---------- */
const hero = $(".hero");
const glow = $("#heroGlow");
if (hero && glow && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  hero.addEventListener("pointermove", e => {
    const r = hero.getBoundingClientRect();
    glow.style.setProperty("--gx", (e.clientX - r.left) + "px");
    glow.style.setProperty("--gy", (e.clientY - r.top) + "px");
  });
}

/* ---------- Init ---------- */
$("#shopCatalog").href = CONFIG.storeUrl;
$("#igLink").href = CONFIG.instagramUrl;
$("#igLink").textContent = "Instagram " + CONFIG.instagramHandle;
$("#pinLink").href = CONFIG.pinterestUrl;
$("#pinLink").textContent = "Pinterest " + CONFIG.pinterestHandle;
$("#mailLink").href = "mailto:" + CONFIG.email;
$("#mailLink").textContent = CONFIG.email;
$("#year").textContent = new Date().getFullYear();

/* Hero second button: the free pack if it is live, otherwise a peek at the first product */
const freebie = LIVE.find(p => p.kind === "freebie");
const heroTarget = freebie || LIVE[0];
const hb = $("#heroSecondary");
if (heroTarget) {
  hb.href = "#item-" + heroTarget.id;
  hb.textContent = freebie ? "Claim Free Pack" : "See what's inside";
} else {
  hb.hidden = true;
}

renderGrid();
window.addEventListener("hashchange", syncFromHash);
syncFromHash();