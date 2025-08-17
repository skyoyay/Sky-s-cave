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
// Staggered Infinite Jump
// ------------------------
function staggerTextLoop(selector) {
	const elements = document.querySelectorAll(selector);

	elements.forEach((el) => {
		if (!el.dataset.split) {
			const text = el.textContent.trim();
			const letters = text.split('').map(letter => `<span class="letter">${letter}</span>`).join('');
			el.innerHTML = letters;
			el.dataset.split = true;
		}

		const letters = el.querySelectorAll('.letter');

		letters.forEach((letter, i) => {
			letter.style.display = 'inline-block';
			letter.style.animation = `jump 1s ease ${i * 0.05}s infinite`;
		});
	});
}

// Initialize infinite stagger effect
staggerTextLoop('.stagger');
