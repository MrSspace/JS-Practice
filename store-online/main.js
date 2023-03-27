const emailNavBar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

emailNavBar.addEventListener('click', toogleDesktopMenu);