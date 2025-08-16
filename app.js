// Hamburger menu toggle
const hamburger = document.querySelector("#header .hamburger");
const navList = document.querySelector("#header .nav-list ul");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navList.classList.toggle("active");
});

// Smooth scrolling for nav links
document.querySelectorAll("#header .nav-list ul a").forEach(link => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		hamburger.classList.remove("active");
		navList.classList.remove("active");
		const targetId = link.getAttribute("href").substring(1);
		const targetSection = document.getElementById(targetId);
		if(targetSection) {
			targetSection.scrollIntoView({ behavior: "smooth" });
		}
	});
});

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-section");

const appearOptions = {
	threshold: 0.1,
	rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
	entries.forEach(entry => {
		if(!entry.isIntersecting) return;
		entry.target.classList.add("appear");
		appearOnScroll.unobserve(entry.target);
	});
}, appearOptions);

faders.forEach(fader => {
	appearOnScroll.observe(fader);
});
