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
        <img src="${p.image}" class="h-48 mx-auto object-contain mb-4">

        <div class="flex justify-between">
          <button class="text-sm border border-gray-300 bg-green-100 rounded-lg px-3 py-1 mb-4">
            ${p.category}
          </button>
          <p class="text-sm text-gray-500 mb-4">
            ⭐ ${p.rating.rate} (${p.rating.count})
          </p>
        </div>

        <h3 class="font-semibold mb-2">
          ${p.title}
        </h3>

        <p class="text-indigo-600 font-bold mb-1">
          $${p.price}
        </p>

      <div class="flex gap-2">
        <button onclick="goDetails(${p.id})" class="text-black border rounded-lg px-4 py-2 ">
          View Details
        </button>
        <button class="addBtn mt-auto bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Add To Cart
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
    // active button
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


// open modal  
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
