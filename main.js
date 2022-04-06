const navMenu = document.querySelector('.nav-menu');
const togle = document.querySelector('.togle');

togle.addEventListener('click', () =>{
    togle.classList.toggle('active')
    navMenu.classList.toggle('active')
})