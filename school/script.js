const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");
const year = document.querySelector("#year");
const mediaOpen = document.querySelector(".media-open");
const cadModal = document.querySelector("#cadModal");
const modalCloseButtons = document.querySelectorAll(".modal-close, .modal-backdrop");

if (year) {
  year.textContent = new Date().getFullYear();
}

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selected = filter.dataset.filter;

    filters.forEach((button) => {
      button.classList.toggle("active", button === filter);
    });

    cards.forEach((card) => {
      const shouldShow = selected === "all" || card.dataset.category === selected;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

function closeModal() {
  if (!cadModal) return;
  cadModal.classList.remove("is-open");
  cadModal.setAttribute("aria-hidden", "true");
}

if (mediaOpen && cadModal) {
  mediaOpen.addEventListener("click", () => {
    cadModal.classList.add("is-open");
    cadModal.setAttribute("aria-hidden", "false");
  });
}

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
