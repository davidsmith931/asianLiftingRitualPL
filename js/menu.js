// DECLARATIONS
// -----------------------------
const menuButton = document.querySelector(".menuToggle i");
const navbar = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar ul li a");
const blackout = document.querySelector(".blackout");

// SHOWING AND HIDING NAVBAR LINKS BY CLICKING BUTTON
// -----------------------------
const openAndClose = function () {
  if (navbar.classList.contains("displayNone")) {
    navbar.classList.remove("displayNone");
    blackout.classList.remove("displayNone");
  } else {
    navbar.classList.add("displayNone");
    blackout.classList.add("displayNone");
  }
};

menuButton.addEventListener("click", openAndClose);

// HIDING NAVBAR LINKS AFTER CLICKING A LINK
// -----------------------------
const closeAfterClick = function () {
  navbar.classList.add("displayNone");
  blackout.classList.add("displayNone");
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
