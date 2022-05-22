const body = document.querySelector('body')
const nav = document.querySelector('#navagation')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')
const BackToTopButton = document.querySelector('#BackToTopButton')

document.addEventListener('scroll', function showNavOnScroll() {
  const positionY = scrollY
  positionY !== 0 ? nav.classList.add('scroll') : nav.classList.remove('scroll')
})

document.addEventListener('scroll', function showBackToTopButton() {
  const positionY = scrollY
  positionY > 500
    ? BackToTopButton.classList.remove('show')
    : BackToTopButton.classList.add('show')
})

openMenu.addEventListener('click', function (e) {
  body.classList.add('menu-expanded')
})

closeMenu.addEventListener('click', function (e) {
  body.classList.remove('menu-expanded')
})

document.addEventListener('click', function (e) {
  const el = e.target

  if (el.classList.contains('services')) {
    body.classList.remove('menu-expanded')
  }

  if (el.classList.contains('homeDoctor')) {
    body.classList.remove('menu-expanded')
  }

  if (el.classList.contains('about')) {
    body.classList.remove('menu-expanded')
  }

  if (el.classList.contains('button')) {
    body.classList.remove('menu-expanded')
  }
})

//ScrollReaveal

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home,
#home img, 
#home .stats, 
#services, 
#services header,
#services .card,
#about,
#about header,
#about .content,
#contact,
#contact header,
#contact .content,
footer,
footer p,
footer .socialLinks
`)
