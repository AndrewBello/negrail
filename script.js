let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".carousel-images img");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
  }
  
  // Show the next slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.remove("hidden");
  
  // Transition effect
  slides[slideIndex - 1].style.opacity = "0";
  setTimeout(() => {
    slides[slideIndex - 1].style.transition = "opacity 1s";
    slides[slideIndex - 1].style.opacity = "1";
  }, 50);

  // Repeat the function every 3 seconds
  setTimeout(showSlides, 8000);
}

document.querySelector(".prev-button").addEventListener("click", function () {
  slideIndex--;
  const slides = document.querySelectorAll(".carousel-images img");
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  showSlides();
});

document.querySelector(".next-button").addEventListener("click", function () {
  slideIndex++;
  const slides = document.querySelectorAll(".carousel-images img");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  showSlides();
});

// Start the slideshow when the page loads
showSlides();
