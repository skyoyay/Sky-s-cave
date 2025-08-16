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

// Hero text animation (optional if needed)
const heroTexts = document.querySelectorAll("#home .hero h1");
heroTexts.forEach((text, index) => {
  const span = text.querySelector("span");
  text.style.opacity = 0;
  setTimeout(() => {
    text.style.transition = "opacity 0.5s ease";
    text.style.opacity = 1;
    if (span) span.style.animation = `text_reveal_box 1s ease ${index * 1}s forwards`;
  }, index * 1000);
});
