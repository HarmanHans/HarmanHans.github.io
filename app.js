const header = document.querySelector('header');
const navToggle = document.querySelector('.nav-toggle');
const navBar = document.querySelector('.navbar');
const titles = document.querySelectorAll('h1.section__title');

let prevScrollPos = window.pageYOffset + 70;

console.log(titles);

window.addEventListener('scroll', hideNav);

for (let i = 0; i < titles.length; i++) {
    window.addEventListener('scroll', shiftHeader(titles[i]));
}

function hideNav() {
    let currentScrollPos = window.pageYOffset;

    prevScrollPos > currentScrollPos ? header.classList.remove('scroll') : header.classList.add('scroll');
    prevScrollPos = currentScrollPos;
}

function shiftHeader(element) {
    let currentScrollPos = window.pageYOffset;

    prevScrollPos > currentScrollPos ? element.classList.remove('animation') : element.classList.add('animation');

    prevScrollPos = currentScrollPos;
}

window.addEventListener('resize', function() {
    window.innerWidth > 630 ? navBar.classList.remove('hide') : navBar.classList.add('hide');
});

navToggle.addEventListener('click', () =>  {
    navBar.classList.toggle('hide');
});