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
