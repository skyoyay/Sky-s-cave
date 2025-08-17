// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-list ul');
const menu_items = document.querySelectorAll('.nav-list ul li a');
const header = document.querySelector('.header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_items.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobile_menu.classList.remove('active');
    });
});

// Staggered Jump Effect
function staggerText(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        if(!el.dataset.split) {
            const text = el.textContent.trim();
            el.innerHTML = text.split('').map(letter => `<span class="letter">${letter}</span>`).join('');
            el.dataset.split = true;
        }
        const letters = el.querySelectorAll('.letter');
        letters.forEach((letter, i) => {
            letter.style.animation = `jump 0.6s ease forwards ${i*0.05}s`;
            letter.style.animationIterationCount = 'infinite';
        });
    });
}
staggerText('.stagger');

