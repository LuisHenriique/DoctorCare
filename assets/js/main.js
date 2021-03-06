const body = document.querySelector('body')
const nav = document.querySelector('#navigation')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')
const BackToTopButton = document.querySelector('#BackToTopButton')

function onScrollAll() {
  activateMenuCurrentSection(home)
  activateMenuCurrentSection(services)
  activateMenuCurrentSection(about)
  activateMenuCurrentSection(contact)
  showBackToTopButton()
  showNavOnScroll()
}

function activateMenuCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar de passou da secão
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // onde a seção termina?
  const sectionEndsAt = sectionTop + sectionHeight

  // O final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // limites seções
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    console.log('Estou na seção HOME')
    menuElement.classList.add('active')
  } else {
  }
}

function showNavOnScroll() {
  const positionY = scrollY
  positionY !== 0 ? nav.classList.add('scroll') : nav.classList.remove('scroll')
}
function showBackToTopButton() {
  const positionY = scrollY
  positionY > 500
    ? BackToTopButton.classList.add('show')
    : BackToTopButton.classList.remove('show')
}

document.addEventListener('scroll', onScrollAll)

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
footer .socialLinks`)
