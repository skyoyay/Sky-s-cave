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

// Hero text animation (jump + color wave) for #home
const heroTexts = document.querySelectorAll("#home .hero h1");

heroTexts.forEach((text, index) => {
  const letters = text.textContent.split("");
  text.textContent = ""; // clear original text

  letters.forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.setProperty("--i", i); // set index for animation delay
    // Only jump without color change for #home
    span.style.animation = `jump 1.2s ease-in-out infinite`;
    text.appendChild(span);
  });
});

// Function to wrap letters in spans for jump + color wave outside #home
function wrapLettersWithAnimation(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(el => {
    // Skip #home
    if (el.closest("#home")) return;

    const letters = el.textContent.split("");
    el.textContent = ""; // clear original text

    letters.forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.setProperty("--i", i);
      span.classList.add("jump-color-wave");
      el.appendChild(span);
    });
  });
}

// Apply to headings, paragraphs, links outside #home
wrapLettersWithAnimation("h1, h2, p, a, .section-title span, .brand h1 span");


