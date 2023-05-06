const panels = document.querySelectorAll(".panel");

panels.forEach((e) => {
  e.addEventListener("click", function () {
    removeActiveClass();
    e.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach((e) => {
    e.classList.remove("active");
  });
}
