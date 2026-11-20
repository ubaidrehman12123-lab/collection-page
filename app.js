const products = [
  {
    id: 1,
    image: "./images/piz.jpg",
    title: "Burger1",
    description:
      "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 100,
    category: "Burger",
    rating: 5,
  },
  {
    id: 2,
    image: "./images/burger.jpg",
    title: "Shawarma1",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 200,
    category: "Shawarma",
    rating: 4,
  },
  {
    id: 3,
    image: "./images/piz.jpg",
    title: "Pizza1",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 300,
    category: "Pizza",
    rating: 3,
  },
  {
    id: 4,
    image: "./images/burger.png",
    title: "Burger2",
    description:
      "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 400,
    category: "Burger",
    rating: 2,
  },
  {
    id: 5,
    image: "./images/shawarma.jpg",
    title: "Shawarma2",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 500,
    category: "Shawarma",
    rating: 1,
  },
  {
    id: 6,
    image: "./images/piz.jpg",
    title: "Pizza2",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 600,
    category: "Pizza",
    rating: 5,
  },
  {
    id: 7,
    image: "./images/burger.png",
    title: "Burger3",
    description:
      "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 700,
    category: "Burger",
    rating: 4,
  },
  {
    id: 8,
    image: "./images/shawarma.jpg",
    title: "Shawarma3",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 800,
    category: "Shawarma",
    rating: 3,
  },
  {
    id: 9,
    image: "./images/piz.jpg",
    title: "Pizza3",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 900,
    category: "Pizza",
    rating: 2,
  },
];

// HTML Elements
const wrapperDiv = document.querySelector(".wrapper");
const mainPage = document.querySelector(".mainpage");
const sideBar = document.querySelector(".sidebar");
const chackBox = document.querySelectorAll(".chackBox");
const themeBtn = document.getElementById("theme");
const priceRange = document.querySelector(".range");
const ratingSelect = document.querySelector("#selectRating");

// Theme Toggle
let themeColor = true;

themeBtn.addEventListener("click", () => {
  let containerDiv = document.querySelector(".container");

  if (themeColor) {
    containerDiv.classList.add("theme");
    themeColor = false;
  } else {
    containerDiv.classList.remove("theme");
    themeColor = true;
  }
});

// Render Products
let filterProductsElement = (filterProducts) => {
  let filterCategory = filterProducts.map((product) => {
    return `
      <div class="products">
        <img src="${product.image}" alt="${product.title}">
        <div class="content">
          <h1>${product.title}</h1>
          <p>${product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: ${product.rating} ⭐</p>
        </div>
      </div>
    `;
  });

  mainPage.innerHTML = filterCategory.join(" ");
};

// Filter All Products
let filterAllProducts = () => {
  // Category Filter
  let selectedProducts = [];

  chackBox.forEach((item) => {
    if (item.checked) {
      selectedProducts.push(item.value.toLowerCase());
    }
  });

  let allFilteredProducts = products.filter((product) => {
    return (
      selectedProducts.length === 0 ||
      selectedProducts.includes(product.category.toLowerCase())
    );
  });

  // Price Range Filter
  let convertvalue = Number(priceRange.value);

  let filterPrice = allFilteredProducts.filter((product) => {
    return product.price <= convertvalue;
  });

  // Rating Filter
  let convertRating = Number(ratingSelect.value);

  let filterRating = filterPrice.filter((product) => {
    return ratingSelect.value === "" || product.rating === convertRating;
  });

  // Final Products
  filterProductsElement(filterRating);
};

// Category Event
chackBox.forEach((check) => {
  check.addEventListener("change", filterAllProducts);
});

// Price Range Event
priceRange.addEventListener("input", filterAllProducts);

// Rating Event
ratingSelect.addEventListener("change", filterAllProducts);

// Initial Products
filterAllProducts();
