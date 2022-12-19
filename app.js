const wrapper = document.querySelector(".slider-wrap");
const heroLink = document.querySelectorAll(".hero-link");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./assets/air.png",
      },
      {
        code: "darkblue",
        img: "./assets/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./assets/jordan.png",
      },
      {
        code: "green",
        img: "./assets/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./assets/blazer.png",
      },
      {
        code: "green",
        img: "./assets/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./assets/crater.png",
      },
      {
        code: "lightgray",
        img: "./assets/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./assets/hippie.png",
      },
      {
        code: "black",
        img: "./assets/hippie2.png",
      },
    ],
  },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".product-img");
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

heroLink.forEach((item, index) => {
  item.addEventListener("click", () => {
    // CHANGE CURRENT SLIDE
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    // CHANGE CHOSEN PRODUCT
    chosenProduct = products[index];
    // CHANGE TEXTS OF CURRENT PRODUCT
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "$" + chosenProduct.price;
    currentProductImg.src = chosenProduct.colors[0].img;
    // ASSIGN NEW BACKGROUND COLORS
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});

// MANIPULATE PRODUCT COLOR
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

// SIZES
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".product-btn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
