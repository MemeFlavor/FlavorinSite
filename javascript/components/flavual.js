import { browser } from "../modules/shortcuts.js";

const flavualFlipClick = new Audio('https://file.garden/akaL6XVvah-9gxkK/Audio/WindowsClick.mp3') // fuck you
let flavualFlips = 1;

const flavualPages = document.querySelectorAll('.flavual__pages')
const flavualPageLength = flavualPages.length
const flavualNavigation = document.querySelector('.flavual__navigation')
flavualNavigation.addEventListener('click', () => {
     flavualFlipClick.play()
     flavualFlipClick.currentTime = 0
     for (let flips = 0; flips < flavualPageLength; flips++) {
          const pages = flavualPages[flips];

          pages.setAttribute('hidden', '')
          pages.setAttribute('aria-hidden', 'true')
          if (flavualFlips == flips) {
               pages.removeAttribute('hidden')
               pages.setAttribute('aria-hidden', 'false')
          }
     }

     flavualFlips++;
     if (flavualFlips % flavualPageLength == 0) flavualFlips = 0;
})

// Browser Compatability //

if (browser.FIREFOX) {
     flavualNavigation.style.setProperty('--navigation-icon-offset-top', '-1px');
}
if (browser.SAFARI) {
     flavualNavigation.style.setProperty('--navigation-icon-offset-top', '-1.5px');
}