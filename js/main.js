// Portfolio filtering (Isotope if available, otherwise fallback)
document.addEventListener("DOMContentLoaded", () => {
  const filterList = document.querySelector("#portfolio-flters");
  const container = document.querySelector(".portfolio-container");
  if (!filterList || !container) return;

  const filterButtons = filterList.querySelectorAll("li[data-filter]");
  const items = container.querySelectorAll(".portfolio-item");

  let iso = null;
  if (window.Isotope) {
    iso = new window.Isotope(container, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });
  }

  const FADE_MS = 220;

  const applyFilterFallback = (filter) => {
    const filterClass =
      filter && filter !== "*" && filter.startsWith(".")
        ? filter.slice(1)
        : filter;
    items.forEach((item) => {
      const matches =
        filter === "*" ||
        (filterClass && item.classList.contains(filterClass));
      if (matches) {
        if (item.style.display === "none") {
          item.style.display = "";
          item.classList.add("is-fading");
          requestAnimationFrame(() => {
            item.classList.remove("is-fading");
          });
        }
      } else {
        item.classList.add("is-fading");
        window.setTimeout(() => {
          item.style.display = "none";
        }, FADE_MS);
      }
    });
  };

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("filter-active"));
      btn.classList.add("filter-active");

      const filter = btn.getAttribute("data-filter") || "*";
      if (iso) {
        iso.arrange({ filter });
      } else {
        applyFilterFallback(filter);
      }
    });
  });
});
