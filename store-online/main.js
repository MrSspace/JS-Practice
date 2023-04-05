const emailNavBar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileIconMenu = document.querySelector('.mobile-icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppin-cart-container');

const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('#product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

function toogleDesktopMenu(){
    const isCarAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if(!isCarAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    const isCarAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if(!isCarAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toogleCarAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openProducDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

emailNavBar.addEventListener('click', toogleDesktopMenu);
mobileIconMenu.addEventListener('click', toogleMobileMenu);
menuCarIcon.addEventListener('click', toogleCarAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

const products = [];
products.push(
    {
        name: "Bike",
        price: "120",
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
);
products.push(
    {
        name: "Bike",
        price: "120",
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
);
products.push(
    {
        name: "Bike",
        price: "120",
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
);

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProducDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(products);

