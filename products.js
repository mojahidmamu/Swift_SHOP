const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");

let cart = 0;
let allProducts = [];

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    renderProducts(allProducts);
  });


function renderProducts(products) {

  productGrid.innerHTML = "";

  products.forEach(p => {

    const card = document.createElement("div");
    card.className =
      "bg-white p-5 rounded-xl shadow hover:shadow-lg transition flex flex-col";

    card.innerHTML = `
      <img src="${p.image}"
           class="h-48 object-contain mb-4">

      <span class="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded w-max mb-2">
        ${p.category}
      </span>

      <h3 class="font-semibold mb-2 line-clamp-2">
        ${p.title}
      </h3>

      <div class="flex justify-between text-sm mb-2">
        <span class="font-bold">$${p.price}</span>
        <span class="text-yellow-500">⭐ ${p.rating.rate}</span>
      </div>

      <div class="flex gap-2 mt-auto">
        <button onclick="goDetails(${p.id})"
          class="border px-3 py-2 rounded w-full">
          Details
        </button>

        <button class="addBtn bg-indigo-600 text-white px-3 py-2 rounded w-full">
          Add
        </button>
      </div>
    `;

    productGrid.appendChild(card);
  });

  // cart buttons
  document.querySelectorAll(".addBtn").forEach(btn => {
    btn.onclick = () => {
      cart++;
      cartCount.innerText = cart;
    };
  });
}


document.querySelectorAll(".catBtn").forEach(btn => {

  btn.addEventListener("click", () => {

    const cat = btn.dataset.cat;

    // active button style
    document.querySelectorAll(".catBtn")
      .forEach(b => b.classList.remove("bg-indigo-600","text-white"));

    btn.classList.add("bg-indigo-600","text-white");

    if (cat === "all") {
      renderProducts(allProducts);
    } else {
      const filtered = allProducts.filter(p => p.category === cat);
      renderProducts(filtered);
    }

  });

});


// open modal + load product
function goDetails(id) {

  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(p => {

      selectedProduct = p;

      document.getElementById("mImage").src = p.image;
      document.getElementById("mTitle").innerText = p.title;
      document.getElementById("mDesc").innerText = p.description;
      document.getElementById("mPrice").innerText = "$" + p.price;
      document.getElementById("mRating").innerText =
        `⭐ ${p.rating.rate} (${p.rating.count} reviews)`;

      const modal = document.getElementById("productModal");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
}

function closeModal() {
  const modal = document.getElementById("productModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function addToCartFromModal() {
  cart++;
  cartCount.innerText = cart;
  closeModal();
}
