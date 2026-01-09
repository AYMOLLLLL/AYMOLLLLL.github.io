document.addEventListener("DOMContentLoaded", function () {
  // Исправлено: ищем кнопки аккордеона по правильному классу
  const accordionButtons = document.querySelectorAll(
    ".main__about-accordion-btn"
  );

  // Если есть хотя бы один элемент аккордеона
  if (accordionButtons.length > 0) {
  }

  // Добавляем обработчик клика на каждую кнопку
  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const item = this.closest(".main__about-accordion-item");
      const content = item.querySelector(".main__about-accordion-content");

      // Если элемент уже активен, закрываем его
      if (item.classList.contains("active")) {
        closeAccordionItem(item, button, content);
      } else {
        // Закрываем все другие открытые элементы
        closeAllAccordionItems();
        // Открываем текущий
        openAccordionItem(item, button, content);
      }
    });

    // Добавляем поддержку клавиатуры
    button.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click(); // Имитируем клик при нажатии Enter или пробела
      }
    });
  });

  // Функция для открытия элемента аккордеона
  function openAccordionItem(item, button, content) {
    item.classList.add("active");
    button.setAttribute("aria-expanded", "true");
    button.classList.add("main__about-accordion-btn--active");
    content.style.maxHeight = content.scrollHeight + "px";
  }

  // Функция для закрытия элемента аккордеона
  function closeAccordionItem(item, button, content) {
    item.classList.remove("active");
    button.setAttribute("aria-expanded", "false");
    button.classList.remove("main__about-accordion-btn--active");
    content.style.maxHeight = null;
  }

  // Функция для закрытия всех открытых элементов
  function closeAllAccordionItems() {
    document
      .querySelectorAll(".main__about-accordion-item.active")
      .forEach((openItem) => {
        const button = openItem.querySelector(".main__about-accordion-btn");
        const content = openItem.querySelector(
          ".main__about-accordion-content"
        );
        closeAccordionItem(openItem, button, content);
      });
  }
});
