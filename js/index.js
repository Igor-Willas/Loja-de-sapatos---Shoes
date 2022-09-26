const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuMobile = document.querySelector('#menu-mobile')

menuHamburguer.addEventListener('click', () => {
    
    menuMobile.classList.toggle('menu-mobile-visivel')

})