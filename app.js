const header = document.querySelector('header');
const navToggle = document.querySelector('.nav-toggle');
const navBar = document.querySelector('.navbar');
const titles = document.querySelectorAll('h1.section__title');

let prevScrollPos = window.pageYOffset + 70;

if (window.innerWidth <= 630) {
    navBar.classList.add('hide');
}
window.addEventListener('scroll', hideNav);

/*for (let i = 0; i < titles.length; i++) {
    window.addEventListener('scroll', shiftHeader(titles[i]));
}*/

function hideNav() {
    let currentScrollPos = window.pageYOffset;

    prevScrollPos > currentScrollPos ? header.classList.remove('scroll') : header.classList.add('scroll');
    if (prevScrollPos < currentScrollPos) {
        navBar.classList.add('hide');
    }
    prevScrollPos = currentScrollPos;
}

/*function shiftHeader(element) {
    let currentScrollPos = window.pageYOffset;

    prevScrollPos > currentScrollPos ? element.classList.remove('animation') : element.classList.add('animation');

    prevScrollPos = currentScrollPos;
}*/

window.addEventListener('resize', function() {
    window.innerWidth > 630 ? navBar.classList.remove('hide') : navBar.classList.add('hide');
});

navToggle.addEventListener('click', () =>  {
    navBar.classList.toggle('hide');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('drop-in');
            entry.target.classList.add('show');
        } /*else {
            entry.target.classList.remove('drop-in');
        } */
    });
});

const observerBody = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation');
            entry.target.classList.add('show');
        }
    });
});

const observerSlide = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-up');
            entry.target.classList.add('show');
        }
    });
});

const linkSlide = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const dropElements = document.querySelectorAll('.nav__item');
const titleElements = document.querySelectorAll('h1.section__title');
const slideElements = document.querySelectorAll('.slides');
const linkElements = document.querySelectorAll('.links__list');
console.log(slideElements);
dropElements.forEach((el) => observer.observe(el));

titleElements.forEach((el) => observerBody.observe(el));
slideElements.forEach((el) => observerSlide.observe(el));
linkElements.forEach((el) => linkSlide.observe(el));