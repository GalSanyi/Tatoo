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
