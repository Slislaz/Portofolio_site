document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop tilbage til start
    showSlide(currentSlide);
  }

  // Vis første slide
  showSlide(currentSlide);

  // Skift slide hver 1.5r sekund
  setInterval(nextSlide, 1500);
});
