let allButton = document.getElementById("all");
let electronicsButton = document.getElementById("electronics");
let clothesButton = document.getElementById("clothes");
let productsEl = document.getElementById("products");

const products = [
  {
    id: 1,
    title: "Laptop",
    price: 25000,
    category: "electronics",
    image: "https://picsum.photos/200?1",
  },
  {
    id: 2,
    title: "Phone",
    price: 15000,
    category: "electronics",
    image: "https://picsum.photos/200?2",
  },
  {
    id: 2,
    title: "PC",
    price: 2000,
    category: "electronics",
    image: "https://picsum.photos/200?2",
  },
  {
    id: 3,
    title: "T-Shirt",
    price: 500,
    category: "clothes",
    image: "https://picsum.photos/200?3",
  },
  {
    id: 4,
    title: "Jeans",
    price: 1200,
    category: "clothes",
    image: "https://picsum.photos/200?4",
  },
  {
    id: 5,
    title: "Jeans 2",
    price: 1400,
    category: "clothes",
    image: "https://picsum.photos/200?4",
  },
];

function showProducts(arr) {
  productsEl.innerHTML = arr
    .map((item, index) => {
      return `
       <div class="card">
        <img src=${item.image} alt={${item.title}} />
        <h3>${item.title}</h3>
        <p>${item.price} EGP</p>
        <span>${item.category}</span>
      </div>`;
    })
    .join("");
}

// Show all products (map)
showProducts(products);

// Filter by Category
electronicsButton.addEventListener("click", () => {
  let filterProducts = products.filter((item, index) => {
    return item.category === "electronics";
  });

  showProducts(filterProducts);
});

clothesButton.addEventListener("click", () => {
  let filterProducts = products.filter((item, index) => {
    return item.category === "clothes";
  });

  showProducts(filterProducts);
});

allButton.addEventListener("click", () => {
  showProducts(products);
});

const numbers = [10, 20, 30, 12, 7, 32];

const result = numbers.map((number) => {
  if (number > 15) {
    return number;
  }
});

[undefined, 20, 30];

console.log(result);
