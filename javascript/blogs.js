/* import { getRandomInt } from "./modules/shortcuts.js";

const bannerAccr = document.querySelectorAll('.manual__banner-accuracy')
const bannerAccrCrement = document.querySelectorAll('.manual__banner-accuracy accr-crement')
const bannerAccrNumbers = document.querySelectorAll('.manual__banner-accuracy accr-num')
for (let accuracyIndex = 0; accuracyIndex < 3; accuracyIndex++) {
     const accuracyLines = bannerAccr[accuracyIndex]
     const accuracyCrements = bannerAccrCrement[accuracyIndex];
     const accuracyNumbers = bannerAccrNumbers[accuracyIndex];

     const randomize = getRandomInt(0, 1)
     accuracyLines.style.color = randomize === 1 ? 'hsl(89, 96%, 63%)' : 'hsl(357, 94%, 60%)'
     accuracyCrements.innerHTML = randomize === 1 ? '&#9650;' : '&#9660;'
     accuracyNumbers.innerHTML = `${getRandomInt(0, 35)}.${getRandomInt(0, 9)}%`.padStart(5, '0')
} */