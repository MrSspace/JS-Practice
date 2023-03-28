const emailNavBar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileIconMenu = document.querySelector('.mobile-icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

function toogleDesktopMenu(){
    const isCarAsideClosed = aside.classList.contains('inactive');
    if(!isCarAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    const isCarAsideClosed = aside.classList.contains('inactive');
    if(!isCarAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toogleCarAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

emailNavBar.addEventListener('click', toogleDesktopMenu);
mobileIconMenu.addEventListener('click', toogleMobileMenu);
menuCarIcon.addEventListener('click', toogleCarAside);