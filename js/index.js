const square = document.querySelectorAll(".square");
square.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".pagination__card li").forEach((item) => {
      item.classList.remove("active");
      item.classList.add("inactive");
    });
    item.classList.add("active");
    item.classList.remove("inactive");
  });
});

const heart = document.querySelectorAll("[data-menu-button]");
heart.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("is-open");
  });
});

let cart__basket = document.querySelector(".basket__count");
let cardField = document.querySelector(".card__table");
let add = document.querySelectorAll(".add__basket");
for (but of add) {
  but.onclick = (e) => {
    // Changed onClick to onclick
    let item = Number(cart__basket.getAttribute("data-count") || 0);
    cart__basket.setAttribute("data-count", item + 1);
    cart__basket.classList.add("on");
  };
}

const field = document.querySelector(".field");
const img = document.querySelector(".card-img-top");
const text = document.querySelector(".card-text");
const score = document.querySelector(".score");
console.log(text);
add.forEach((item) => {
  item.addEventListener("click", () => {
    let clonedItem = img.cloneNode(true);
    let text__card = text.cloneNode(true);
    let price = score.cloneNode(true);

    clonedItem.classList.add("no-hover-effect");
    field.appendChild(clonedItem);
    field.appendChild(text__card);
    field.appendChild(price);
  });
});
// window.addEventListener("DOMContentLoaded", () => {
//   function createCart() {
//     const cart = document.createElement("div");
//     const field = document.createElement("div");
//     const closeBtn = document.createElement("button");

//     cart.classList.add("cart");
//     field.classList.add("cart-field");
//     closeBtn.classList.add("close__btn");
//     closeBtn.textContent = "close";

//     document.body.appendChild(cart);
//     cart.appendChild(field);
//     cart.appendChild(closeBtn);
//   }

//   createCart();

//   const field = document.querySelector(".cart-field");
//   const cart = document.querySelector(".cart");
//   const close = document.querySelector(".close__btn");
//   const cart__basket = document.querySelector(".basket__count"); // Define cart__basket

//   function openCart() {
//     cart.style.display = "block";
//   }

//   function closeCart() {
//     cart.style.display = "none";
//   }

//   cart__basket.addEventListener("click", openCart); // Use cart__basket

//   close.addEventListener("click", closeCart);

//   const cardField = document.querySelector(".card__table");
//   const add = document.querySelectorAll(".add__basket");
//   console.log(cardField);
//   add.forEach((item) => {
//     item.addEventListener("click", () => {
//       let clonedItem = cardField.cloneNode(true);
//       btn = clonedItem.querySelector(".add__basket");
//       btn.remove();
//       // Add a class to the cloned item to override the hover effect
//       clonedItem.classList.add("no-hover-effect");
//       field.appendChild(clonedItem);
//     });
//   });
// });
