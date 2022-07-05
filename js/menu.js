// DECLARATIONS
// -----------------------------
const menuButton = document.querySelector(".menuToggle i");
const navbar = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar ul li a");
const blackout = document.querySelector(".blackout");

// SHOWING AND HIDING NAVBAR LINKS BY CLICKING BUTTON
// -----------------------------
const openAndClose = function () {
  navbar.classList.toggle("d-none");
  blackout.classList.toggle("d-none");
  // if (navbar.classList.contains("d-none")) {
  //   navbar.classList.remove("d-none");
  //   blackout.classList.remove("d-none");
  // } else {
  //   navbar.classList.add("d-none");
  //   blackout.classList.add("d-none");
  // }
};

menuButton.addEventListener("click", openAndClose);

// HIDING NAVBAR LINKS AFTER CLICKING A LINK
// -----------------------------
const closeAfterClick = function () {
  navbar.classList.add("d-none");
  blackout.classList.add("d-none");
};

for (i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", closeAfterClick);
}

// POLYFILL SCROLL
// -----------------------------
const scroll = new SmoothScroll('.navbar ul li a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
