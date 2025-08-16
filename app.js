// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});

// Close menu on nav item click
document.querySelectorAll(".nav-list ul li a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
  });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Hero text animation (home section)
const heroTexts = document.querySelectorAll("#home .hero h1");

heroTexts.forEach((text) => {
  const letters = text.textContent.split("");
  text.textContent = "";

  letters.forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.setProperty("--i", i);
    span.classList.add("jump-color-wave-home");
    text.appendChild(span);
  });
});

// Jump + color wave for all other text outside home
const allTextElements = document.querySelectorAll("h1, h2, p, a, .section-title, .project-info");

allTextElements.forEach(el => {
  if (!el.closest("#home")) { // exclude #home
    const letters = el.textContent.split("");
    el.textContent = "";

    letters.forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.setProperty("--i", i);
      span.classList.add("jump-color-wave");
      el.appendChild(span);
    });
  }
});


