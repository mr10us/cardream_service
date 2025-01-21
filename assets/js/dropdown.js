window.addEventListener("load", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  if (!dropdowns || dropdowns.length === 0) return;

  // Adding dropdown styles
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = this.document.querySelector("script[data-theme]").dataset.theme + "dropdown.css";
  document.head.appendChild(link);

  dropdowns.forEach((dropdown) => {
    if (dropdown.dataset.position) {
      const position = dropdown.dataset.position;
      const content = dropdown.querySelector(".dropdown__content");

      if (position === "top") {
        dropdown.style.setProperty("--triangle-deg", "-180deg");
        dropdown.style.setProperty("--triangle-origin", "bottom center");
        content.style.top = "unset";
        content.style.bottom = "calc(100% + 8px)";
      }
    }
  });

  (function () {
    window.addEventListener("click", ({ target }) => {
      if (
        target.classList.contains("dropdown") ||
        target.parentNode.classList.contains("dropdown")
      ) {
        const dropdown = target.closest(".dropdown");

        dropdown.classList.toggle("active");
      } else {
        document.querySelectorAll(".dropdown").forEach((dropdown) => {
          dropdown.classList.remove("active");
        });
      }
    });
  })();
});
