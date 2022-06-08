/* first show the disappered nav */
const navIcon = document.querySelector('.navbar-icon');
const overlay = document.querySelector('.overlay');

navIcon.addEventListener(('click'), () => {
    overlay.classList.toggle('change');
    navIcon.classList.toggle('change');
})

/*Making interval to set the changing headline */
const headlines = document.querySelectorAll('.section-two h2');
let i = 1

setInterval(() => {
    i++
    const headline = document.querySelector('.section-two .change');
    headline.classList.remove('change')

    if (i > headlines.length) {
        headlines[0].classList.add('change')
        i = 1
    } else {
        headline.nextElementSibling.classList.add('change')
    }
}, 2000)