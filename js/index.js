// const burger = document.querySelector('#burger');
// const menu = document.querySelector('#menu');

// burger.addEventListener('click', () => {
// if (menu.classList.contains('hidden')){
//     menu.classList.remove('hidden');
// }
// else {
//     menu.classList.add('hidden');
// }
// })
// document.addEventListener('DOMContentLoaded', function() {
//     const menuLink = document.querySelector('.navbar li:nth-child(2) a');
//     const menuDropdown = document.querySelector('.navbar li:nth-child(2) ul');

//     menuLink.addEventListener('click', function(event) {
//         event.preventDefault();
//         menuDropdown.classList.toggle('hidden');
//     });

//     // Close the dropdown when clicking outside
//     document.addEventListener('click', function(event) {
//         if (!menuLink.contains(event.target) && !menuDropdown.contains(event.target)) {
//             menuDropdown.classList.add('hidden');
//         }
//     });
// });
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.remove('lg:bg-[#EDE7D6]');
      navbar.classList.add('lg:bg-transparent'); // Change to your desired solid background color class
    } else {
      navbar.classList.remove('lg:bg-transparent'); // Remove the solid background color class
      navbar.classList.add('lg:bg-[#EDE7D6]');
    }
  });
  // 
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


    
  


