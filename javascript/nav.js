const burger = document.querySelector(".burger");
const navlink = document.querySelector(".navres");
const header = document.querySelector("header");
const container = document.querySelector(".container");

burger.addEventListener("click", () => {
  navlink.classList.toggle("ul-active");
  burger.classList.toggle("toggle");
});

if (header) {
  header.addEventListener("click", () => {
    navlink.classList.remove("ul-active");
    burger.classList.remove("toggle");
  });
}

// container.addEventListener("click", () => {
//   navlink.classList.remove("ul-active");
//   burger.classList.remove("toggle");
// });
