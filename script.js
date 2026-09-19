// ---------------------------------------------------------------
// Product data now lives in products.json — open that file to add,
// remove, or edit products. Each entry needs:
//   name, price, category, image (URL/filename, or "" for a placeholder),
//   and color (used only for the placeholder swatch background).
// Categories used so far: "Custom gifts", "Crochet",
// "Beaded accessories", "Hand-painted clothing"
// — kept on each product so a category filter can be added later
// without restructuring anything.
//
// NOTE: fetching a local JSON file only works when the page is
// served over http(s) — e.g. on GitHub Pages, or locally via:
//   python3 -m http.server
// then visiting http://localhost:8000. Opening index.html directly
// by double-clicking it (file:// URL) will block this fetch in most
// browsers — that's a browser security rule, not a bug in this code.
// ---------------------------------------------------------------

const insta = "https://instagram.com/zymoyra.co";

function renderProducts(list){
  const grid = document.getElementById("gallery-grid");
  grid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-img" style="background:${p.image ? 'transparent' : p.color}">
        ${p.image ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">` : `<span>${p.name}</span>`}
      </div>
      <div class="product-body">
        <span class="cat-tag">${p.category}</span>
        <h3>${p.name}</h3>
        <div class="price">${p.price}</div>
        <a class="order-link" href="${insta}" target="_blank" rel="noopener">DM to order →</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

fetch("products.json")
  .then(res => res.json())
  .then(renderProducts)
  .catch(err => {
    console.error("Could not load products.json:", err);
    document.getElementById("gallery-grid").innerHTML =
      "<p style='color:var(--ink-soft)'>Couldn't load products — if you're viewing this file directly, run a local server instead (see the comment at the top of script.js).</p>";
  });
