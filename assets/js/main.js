const body = document.querySelector('body')
const nav = document.querySelector('#navagation')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')

document.addEventListener('scroll', function onScroll() {
  const positionY = scrollY
  positionY !== 0 ? nav.classList.add('scroll') : nav.classList.remove('scroll')
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
#services .card
`)
