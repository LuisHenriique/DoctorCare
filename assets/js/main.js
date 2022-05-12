const nav = document.querySelector('nav')
function onScroll() {
  const positionY = scrollY
  if (positionY !== 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

document.addEventListener('scroll', onScroll())
