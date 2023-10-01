const header = document.querySelector('header');
const navToggle = document.querySelector('.nav-toggle');
const navBar = document.querySelector('.navbar');

let prevScrollPos = window.pageYOffset + 120;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    prevScrollPos > currentScrollPos ? header.classList.remove('scroll') : header.classList.add('scroll');
    prevScrollPos = currentScrollPos;
}

window.addEventListener('resize', function() {
    window.innerWidth > 630 ? navBar.classList.remove('hide') : navBar.classList.add('hide');
});

navToggle.addEventListener('click', () =>  {
    navBar.classList.toggle('hide');
});