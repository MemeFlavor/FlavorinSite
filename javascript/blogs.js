const prefersReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const windowScreenSaverWrapper = document.querySelector('.windows__screensaver')
const windowScreenSaverBody = document.querySelector('.windows__screensaver marquee')
const wackyworkbenchSonic = document.querySelector('.wacky-workbench__sonic img')

function reduce_motion() {
     windowScreenSaverWrapper.setAttribute('scrollamount', 2)
     windowScreenSaverBody.setAttribute('scrollamount', 2)

     wackyworkbenchSonic.style.display = 'none'
}

function default_motion() {
     windowScreenSaverWrapper.setAttribute('scrollamount', 4)
     windowScreenSaverBody.setAttribute('scrollamount', 4)

     wackyworkbenchSonic.style.display = 'block'
}

function has_motion(event) {
     if (event.matches == true) { reduce_motion() } else { default_motion() }
}

has_motion(prefersReduceMotion)
prefersReduceMotion.addEventListener('change', has_motion);