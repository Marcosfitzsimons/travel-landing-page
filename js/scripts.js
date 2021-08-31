// Menu Landing Page
const menuToggle = document.querySelector('.toggle');
const entrada = document.querySelector('.entrada');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    entrada.classList.toggle('active');
})

