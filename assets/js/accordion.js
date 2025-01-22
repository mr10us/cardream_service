window.addEventListener("DOMContentLoaded", () => {
  const acc = document.querySelectorAll(".accordion");

  if (!acc || acc.length === 0) return;

  const link = document.createElement("link");
  link.href =
    document.querySelector("script[data-theme]").dataset.theme +
    "accordion.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  let activeAccordion = null;

  acc.forEach((item) => {
    item.addEventListener("click", function () {
      if (activeAccordion && activeAccordion !== this) {
        activeAccordion.classList.remove("active");
        activeAccordion.nextElementSibling.style.maxHeight = null;
      }

      this.classList.toggle("active");
      activeAccordion = this;

      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});
