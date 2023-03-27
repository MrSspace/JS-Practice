const emailNavBar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileIconMenu = document.querySelector('.mobile-icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');

function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

emailNavBar.addEventListener('click', toogleDesktopMenu);
mobileIconMenu.addEventListener('click', toogleMobileMenu);