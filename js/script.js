document.addEventListener("DOMContentLoaded", function () {
  const notFinishedProjects = document.querySelectorAll(".notfinished");
  notFinishedProjects.forEach((project) => {
    project.addEventListener("click", function (e) {
      e.preventDefault();
      alert(
        'Страница этого проекта ещё в разработке. Загляните на: "Этот сайт"'
      );
    });
  });
});
