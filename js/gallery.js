// DECLARATIONS
// -----------------------------
const allGalleryImages = Array.from(
  document.querySelectorAll(".galleryBox img")
);
const galleryModal = document.querySelector(".galleryModal");
const galleryDescriptions = [
  "Lifting, laminacja, koloryzacja, botoks rzęs",
  "Masaż Kobido, po 1 zabiegu, uniesienie owalu",
  "Masaż Kobido, po 1 zabiegu",
  "Masaż Kobido, po 1 zabiegu",
  "Henna marokańska brwi z geometrią",
  "Oczyszczanie wodorowe",
  "Masaż Kobido, po 1 zabiegu, uniesienie owalu",
  "Henna marokańska brwi z geometrią",
];

// SHOWING MODAL + ADDING CONTENT
// -----------------------------
for (let i = 0; i < allGalleryImages.length; i++) {
  allGalleryImages[i].addEventListener("click", function () {
    galleryModal.style.display = "flex";
    galleryModal.innerHTML = `${allGalleryImages[i].outerHTML}
    <p>${galleryDescriptions[i]}</p>
    `;

    // ADDING CLOSING BUTTON
    // -----------------------------
    const closingButton = document.createElement(`i`);
    galleryModal.appendChild(closingButton);
    const closeBtn = document.querySelector(".galleryModal i");
    closeBtn.classList.add("fa-solid", "fa-xmark", "closeBtn");

    // CLOSING MODAL ON CLICK (EXCEPT CLICKING ON IMAGE AND TEXT)
    // -----------------------------
    galleryModal.addEventListener("click", function (e) {
      if (
        e.target !== document.querySelector(".galleryModal img") &&
        e.target !== document.querySelector(".galleryModal p")
      ) {
        galleryModal.style.display = "none";
      }
    });
  });
}

document.body.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    galleryModal.style.display = "none";
  }
});
