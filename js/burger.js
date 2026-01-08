document.addEventListener("DOMContentLoaded", function () {
  const burgerElement = document.getElementById("burger");
  const NavElement = document.getElementById("headerNav");
  const NavListElements = document.querySelectorAll(".header__nav-link");
  burgerElement.addEventListener("click", function () {
    if (NavElement.classList.contains("header__nav--open")) {
      NavElement.classList.remove("header__nav--open");
    } else {
      NavElement.classList.add("header__nav--open");
    }
  });
  NavListElements.forEach((list) => {
    list.addEventListener("click", function (e) {
      NavElement.classList.remove("header__nav--open");
    });
  });
});
