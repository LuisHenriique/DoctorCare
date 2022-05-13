const nav = document.querySelector('#navagation')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')

document.addEventListener('scroll', function onScroll() {
  const positionY = scrollY
  positionY !== 0 ? nav.classList.add('scroll') : nav.classList.remove('scroll')
})

openMenu.addEventListener('click', function (e) {
  document.body.classList.add('menu-expanded')
})

closeMenu.addEventListener('click', function (e) {
  document.body.classList.remove('menu-expanded')
})

document.addEventListener('click', function (e) {
  const el = e.target

  if (el.classList.contains('services')) {
    document.body.classList.remove('menu-expanded')
  }

  if (el.classList.contains('home')) {
    document.body.classList.remove('menu-expanded')
  }

  if (el.classList.contains('about')) {
    document.body.classList.remove('menu-expanded')
  }
})
