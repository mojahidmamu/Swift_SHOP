const productGrid = document.getElementById("productContainer");
const cartCount = document.getElementById("cartCount");

let cart = 0;

// Top rated 3 products card 
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const topProducts = data
      .sort((a, b) => b.rating.rate - a.rating.rate)
      .slice(0, 3);

    productGrid.innerHTML = "";

    topProducts.forEach((p) => {
      const card = document.createElement("div");
      card.className = "bg-white p-6 rounded-lg shadow-md flex flex-col mb-8";

      card.innerHTML = `
        <img src="${p.image}" class="h-48 mx-auto object-contain mb-4">

        <p class="text-sm text-gray-500 mb-4">
          ⭐ ${p.rating.rate} (${p.rating.count})
        </p>

        <h3 class="font-semibold mb-2">
          ${p.title}
        </h3>

        <p class="text-indigo-600 font-bold mb-1">
          $${p.price}
        </p>

      <div class="flex gap-2">
        <button class="text-black border rounded-lg px-4 py-2 ">
          View Details
        </button>
        <button class="addBtn mt-auto bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Add To Cart
        </button>
      </div>
      `;

      productGrid.appendChild(card);
    });

    // cart button events
    document.querySelectorAll(".addBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        cart++;
        cartCount.innerText = cart;
      });
    });
  })
  .catch((err) => {
    productGrid.innerHTML =
      "<p class='text-red-500'>Failed to load products</p>";
    console.error(err);
  });
