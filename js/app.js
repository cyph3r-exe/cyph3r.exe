document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});

const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle("is-flipped");
});
