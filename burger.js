document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-icon");
  const nav = document.querySelector("nav");
  const menu = document.querySelector(".burger-menu");
  const links = document.querySelectorAll(".menu li a");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    menu.classList.toggle("active");
  });

  /*links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});*/
});
