const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");

let cart = 0;

// fetch top 3 products
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {

    const topProducts = data
      .sort((a, b) => b.rating.rate - a.rating.rate)
      .slice(0, 3);

    topProducts.forEach(p => {

      const card = document.createElement("div");
      card.className = "bg-white p-6 rounded shadow";

      card.innerHTML = `
        <img src="${p.image}" class="h-48 mx-auto object-contain mb-4">
        <h3 class="font-semibold mb-2 line-clamp-2">${p.title}</h3>
        <p class="text-indigo-600 font-bold mb-2">$${p.price}</p>
        <p class="text-sm text-gray-500 mb-4">⭐ ${p.rating.rate}</p>

        <button class="addBtn bg-indigo-600 text-white px-4 py-2 rounded w-full">
          Add To Cart
        </button>
      `;

      productGrid.appendChild(card);
    });

    document.querySelectorAll(".addBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        cart++;
        cartCount.innerText = cart;
      });
    });

  });
