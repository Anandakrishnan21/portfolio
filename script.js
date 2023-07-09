// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

let navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});

// TESTIMONIAL
const testimonials = [
  {
    text: '"He is a skilled web developer who learns all his lessons quickly, and the work he produces is truly amazing"',
    name: "Aravind, Project Manager in Exposys dataLabs",
  },
  {
    text: '"Working with Mr. Anandakrishnan has been an absolute pleasure. His expertise in web development is evident in the flawless execution of our project. I highly recommend him for any web development needs"',
    name: "Alan Varghese Paul, Web Developer",
  },
  {
    text: '"Mr. Anandakrishnans work as a web developer surpassed all our expectations. The attention to detail, creativity, and technical proficiency showcased in our website are outstanding"',
    name: "Albin Stanly, Xynapse Technologies Company Owner ",
  },
];

const testimonialDiv = document.getElementById("testimonial");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

let testimonialIndex = 0;

function displayTestimonial() {
  const testimonial = testimonials[testimonialIndex];

  testimonialDiv.innerHTML = "";

  const testDiv = document.createElement("div");
  testDiv.className = "test";

  const textPara = document.createElement("p");
  textPara.textContent = testimonial.text;

  const name = document.createElement("h4");
  name.textContent = testimonial.name;

  testDiv.appendChild(textPara);
  testDiv.appendChild(name);

  testimonialDiv.appendChild(testDiv);
}

btn1.addEventListener("click", () => {
  testimonialIndex--;
  if (testimonialIndex < 0) {
    testimonialIndex = testimonials.length - 1;
  }
  displayTestimonial();
});

btn2.addEventListener("click", () => {
  testimonialIndex++;
  if (testimonialIndex > testimonials.length) {
    testimonialIndex = 0;
  }
  displayTestimonial();
});

displayTestimonial();

// certificates

const certificates = [
  {
    name: "TECHKRITI'22-24 Hrs HACKATHON",
    company: "SCMS School of Engineering and Technology",
  },
  {
    name: "IEEEEXtreme 16.0 Programming First-Prize ",
    company: "IEEEEXtreme",
  },
  {
    name: "Full Stack Developer InternShip Certificate",
    company: "Exposys DataLabs",
  },
  {
    name: "NPTEL - Problem Solving Through Programming in C",
    company: "NPTEL",
  },
];

const certificateDiv = document.getElementById("certificate");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

let certificateIndex = 0;

function displayCertificate() {
  const certificate = certificates[certificateIndex];

  certificateDiv.innerHTML = "";

  const certDiv = document.createElement("div");
  certDiv.classList = "cert";

  const textPara = document.createElement("p");
  textPara.textContent = certificate.name;

  const company = document.createElement("h4");
  company.textContent = certificate.company;

  certDiv.appendChild(textPara);
  certDiv.appendChild(company);
  certificateDiv.appendChild(certDiv);
}

btn3.addEventListener("click", () => {
  certificateIndex--;
  if (certificateIndex < 0) {
    certificateIndex = certificates.length - 1;
  }
  displayCertificate();
});

btn4.addEventListener("click", () => {
  certificateIndex++;
  if (certificateIndex > certificates.length) {
    certificateIndex = 0;
  }
  displayCertificate();
});

displayCertificate();
