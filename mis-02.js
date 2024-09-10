//Image Slider

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
// let intervalId = null;

//++++++++Start slideshow and parameters for timer

//initializeSlider()
document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider() {
    
    if (slides.length > 0) { 
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    } 
}
//+++++Changing between slides
function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;

    }
    else if (index < 0) { 
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
};

//++++++++Buttons++++++++
function prevSlide() { 
    clearInterval(intervalId)
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() { 
    slideIndex++;
    showSlide(slideIndex);
}

//++++++++Ham Menu++++++++++
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});