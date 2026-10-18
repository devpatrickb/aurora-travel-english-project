alert(
  "This is a website for a school project.\n" +
    "This website does not provide any travel offers.\n" +
    "This website works best on desktop devices.",
);

const slideLeftBtn = document.querySelector("#slideLeftBtn");
const slideRightBtn = document.querySelector("#slideRightBtn");
const slideshowContainer = document.querySelector(".slideshow-container");

const slides = document.querySelectorAll(".slide");

const imprint = document.querySelector(".imprint-container");
const closeImprint = document.querySelector("button#closeImprint");
const privacy = document.querySelector(".privacy-container");
const closePrivacy = document.querySelector("button#closePrivacy");

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

function openImprint() {
  if (!imprint.classList.contains("open")) {
    imprint.classList.add("open");
  }
}

closeImprint.addEventListener("click", () => {
  if (imprint.classList.contains("open")) {
    imprint.classList.remove("open");
  }
});

function openPrivacy() {
  if (!privacy.classList.contains("open")) {
    privacy.classList.add("open");
  }
}

closePrivacy.addEventListener("click", () => {
  if (privacy.classList.contains("open")) {
    privacy.classList.remove("open");
  }
});

const contact = document.querySelector(".contact-container");
const closeContact = document.querySelector("#closeContact");

function openContact() {
  contact.classList.add("open");
}

closeContact.addEventListener("click", () => {
  contact.classList.remove("open");
});

contact.addEventListener("click", (event) => {
  if (event.target === contact) {
    contact.classList.remove("open");
  }
});
