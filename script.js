const insta = "https://instagram.com/zymoyra.co";

function renderProducts(list) {
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
