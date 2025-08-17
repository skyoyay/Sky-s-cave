// ----- Hamburger menu -----
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

// ----- Scroll header color -----
document.addEventListener('scroll', () => {
    const scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

// ----- Letter-level stagger animation -----
const staggerTexts = document.querySelectorAll('.stagger');

staggerTexts.forEach(el => {
    const letters = el.textContent.split('');
    el.textContent = ''; // clear original text
    letters.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.display = 'inline-block';
        span.style.opacity = 0;
        span.style.transform = 'translateY(20px)';
        span.style.transition = `all 0.5s ease ${i * 0.05}s`; // stagger by 50ms per letter
        el.appendChild(span);

        // trigger animation after appending
        setTimeout(() => {
            span.style.opacity = 1;
            span.style.transform = 'translateY(0)';
        }, 50);
    });
});
