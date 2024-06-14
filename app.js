// scripts.js
window.addEventListener("scroll", function () {
  const footer = document.querySelector(".hidden");
  if (window.scrollY > 200) {
    // Adjust this value as needed
    footer.style.bottom = "0";
  } else {
    footer.style.bottom = "-100px"; // Same as initial hidden position
  }
});
