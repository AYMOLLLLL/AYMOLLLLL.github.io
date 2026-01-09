document.addEventListener("DOMContentLoaded", function () {
  const burgerElement = document.getElementById("burger");
  const NavElement = document.getElementById("headerNav");
  const NavListElements = document.querySelectorAll(".header__nav-link");
  const body = document.body;
  burgerElement.addEventListener("click", function () {
    if (NavElement.classList.contains("header__nav--open")) {
      NavElement.classList.remove("header__nav--open");
      burgerElement.classList.remove("burger--active");
      body.style.overflow = "auto";
    } else {
      NavElement.classList.add("header__nav--open");
      burgerElement.classList.add("burger--active");
      body.style.overflow = "hidden";
    }
  });
  NavListElements.forEach((list) => {
    list.addEventListener("click", function (e) {
      NavElement.classList.remove("header__nav--open");
      burgerElement.classList.remove("burger--active");
      body.style.overflow = "auto";
    });
  });
});
