const menuBtn = document.querySelector('#menuBtn');
const body = document.querySelector('body');
const overlay = document.querySelector('overlay');
const fadeElems = document.querySelectorAll('.has-fade');
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('toggle');
        body.classList.add('noscroll');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        menuOpen = true;
    } else {
        menuBtn.classList.remove('toggle');
        body.classList.remove('noscroll');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        menuOpen = false;
    }
});