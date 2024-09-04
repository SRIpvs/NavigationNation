const menuBars = document.querySelector('.menu-bars');
const overlay = document.querySelector('.overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    });
}

function toggleNav() {
    // toggle menu bar
    console.log('working');
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');

    if (overlay.classList.contains('overlay-active')) {
        // Animate In
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');

        // Animate nav in
        navAnimation('out', 'in');
    }
    else {
        // Animate out
        overlay.classList.add('overlay-slide-left');
        overlay.classList.remove('overlay-slide-right');
        navAnimation('in', 'out');
    }
}

// EventListeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});