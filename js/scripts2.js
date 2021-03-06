/*==================== Nav Toggle ====================*/

const navToggle = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__enlace')

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    nav.classList.toggle('active')
})

/*==================== Nav Sticky Home Page ====================*/

window.addEventListener("scroll", function(){
    let header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 500)
    header.classList.toggle("center", window.scrollY > 500)
    header.classList.toggle("border-bottom", window.scrollY > 500)
    navToggle.classList.toggle("display-none", window.scrollY > 500)
})

/*==================== TESTIMONIAL ====================*/

let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    breakpoints: {
        568:{
            slidesPerView: 2,
        }
    }
}) 