const header = document.querySelector('header');

let prevScrollPos = window.pageYOffset + 120;
console.log(prevScrollPos);

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    prevScrollPos > currentScrollPos ? header.classList.remove('scroll') : header.classList.add('scroll');
    prevScrollPos = currentScrollPos;
}