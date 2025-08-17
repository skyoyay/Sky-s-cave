// Hamburger menu toggle
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	const scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// ------------------------
// Staggered Jump Effect
// ------------------------
function staggerText(selector) {
	const elements = document.querySelectorAll(selector);

	elements.forEach((el) => {
		// Split text into letters if not already wrapped
		if (!el.dataset.split) {
			const text = el.textContent.trim();
			const letters = text.split('').map((letter) => `<span class="letter">${letter}</span>`).join('');
			el.innerHTML = letters;
			el.dataset.split = true;
		}

		const letters = el.querySelectorAll('.letter');

		// Animate letters with a stagger
		letters.forEach((letter, i) => {
			letter.style.display = 'inline-block';
			letter.style.animation = `jump 0.6s ease forwards`;
			letter.style.animationDelay = `${i * 0.05}s`;
		});
	});
}

// Initialize stagger effect
staggerText('.stagger');


