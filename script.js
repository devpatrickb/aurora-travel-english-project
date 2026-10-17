alert(
  "This is a website for a school project.\n" +
    "This website does not provide any travel offers.\n" +
    "This website works best on desktop devices.",
);

const slideLeftBtn = document.querySelector("#slideLeftBtn");
const slideRightBtn = document.querySelector("#slideRightBtn");
const slideshowContainer = document.querySelector(".slideshow-container");

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;

  slideshowContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

slideLeftBtn.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

slideRightBtn.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

setInterval(() => {
  showSlide(currentSlide + 1);
}, 10000);
