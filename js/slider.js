// DECLARATIONS
// -----------------------------
const paragraphs = document.querySelectorAll(".aboutMeTextSlidesAll p");
const aboutMeTextSlidesAll = document.querySelector(".aboutMeTextSlidesAll");
const barsAboutMeBox = document.querySelector(".barsAboutMe");
const theClock = 10000;
let whichBar = 1;
let nextBar = whichBar;

// CREATING BARS (DEPENDING ON NUMBER OF PARAGRAPHS)
// -----------------------------
for (let i = 0; i < paragraphs.length; i++) {
  const newBar = document.createElement("div");
  barsAboutMeBox.appendChild(newBar);
  newBar.className = "bar";
}

// DECLARATIONS INCLUDING CREATED BARS
// -----------------------------
const allBars = document.querySelectorAll(".bar");
const lastBar = allBars.length - 1;

// SETTING BOX WIDTH DEPENDING ON NUMBER OF PARAGRAPHS
// -----------------------------
aboutMeTextSlidesAll.style.width = `${100 * paragraphs.length}%`;

// ADDING GOLD TO FIRST BAR
// -----------------------------

document.querySelector(".bar:first-child").classList.add("barGold");

// AUTOPLAY
// -----------------------------
const autoplayFunction = function () {
  allBars[nextBar].click();
};

let autoplay = setInterval(autoplayFunction, theClock);

// CREATING FUNCTION THAT ALLOWS TO CLICK ON BARS AND VIEW DIFFERENT TEXT
// -----------------------------
const whatIsClicked = function (e) {
  const barIndex = Array.from(e.target.parentNode.children).indexOf(e.target);

  if (e.target.classList.contains("bar")) {
    whichBar = barIndex;
    clearInterval(autoplay);
    autoplay = setInterval(autoplayFunction, theClock);

    if (whichBar < allBars.length - 1) {
      nextBar = barIndex + 1;
    } else {
      nextBar = 0;
    }

    // REMOVING ALL GOLD
    // -----------------------------
    for (let i = 0; i < allBars.length; i++) {
      allBars[i].classList.remove("barGold");
    }

    // ADDING GOLD AND SLIDING
    // -----------------------------
    allBars[barIndex].classList.add("barGold");
    aboutMeTextSlidesAll.style.left = `${0 - barIndex * 100}%`;
  }
};

window.addEventListener("click", whatIsClicked);
