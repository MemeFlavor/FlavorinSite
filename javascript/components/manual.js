import { browser } from "../modules/shortcuts.js";

const manualFlipClick = new Audio('https://file.garden/akaL6XVvah-9gxkK/Audio/WindowsClick.mp3') // fuck you
let manualFlips = 1;

const manualPages = document.querySelectorAll('.manual__pages')
const manualPageLength = manualPages.length
const manualNavigation = document.querySelector('.manual__navigation')
manualNavigation.addEventListener('click', () => {
     manualFlipClick.play()
     manualFlipClick.currentTime = 0
     for (let flips = 0; flips < manualPageLength; flips++) {
          const pages = manualPages[flips];

          pages.setAttribute('hidden', '')
          pages.setAttribute('aria-hidden', 'true')
          if (manualFlips == flips) {
               pages.removeAttribute('hidden')
               pages.setAttribute('aria-hidden', 'false')
          }
     }

     manualFlips++;
     if (manualFlips % manualPageLength == 0) manualFlips = 0;
})