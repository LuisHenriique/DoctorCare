const nav = document.querySelector('#navagation')

document.addEventListener('scroll', function onScroll() {
  const positionY = scrollY
  positionY !== 0 ? nav.classList.add('scroll') : nav.classList.remove('scroll')
})
