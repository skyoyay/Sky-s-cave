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

// Hero text animation (jump + color wave)
const heroTexts = document.querySelectorAll("#home .hero h1");

heroTexts.forEach((text, index) => {
  const letters = text.textContent.split("");
  text.textContent = ""; // clear original text

  letters.forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.setProperty("--i", i); // set index for animation delay
    span.classList.add("jump-color-wave");
    text.appendChild(span);
  });
});

