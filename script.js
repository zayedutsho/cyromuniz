// script.js

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", function () {
      content.classList.toggle("show");
      const icon = header.querySelector(".toggle-icon");
      icon.textContent = content.classList.contains("show") ? "-" : "+";

      // Close other items
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem
            .querySelector(".accordion-content")
            .classList.remove("show");
          otherItem.querySelector(".toggle-icon").textContent = "+";
        }
      });
    });
  });
});
