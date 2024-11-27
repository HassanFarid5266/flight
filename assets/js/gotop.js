(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const goTopButtons = document.querySelectorAll(".go-top");

    if (goTopButtons.length === 0) return;

    window.addEventListener("scroll", function () {
      const scrolled = window.scrollY;
      goTopButtons.forEach((button) => {
        if (scrolled > 600) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    });

    goTopButtons.forEach((button) => {
      button.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    });
  });
})();
