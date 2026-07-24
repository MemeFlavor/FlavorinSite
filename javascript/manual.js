const manual = {
     "biography": {
          "title": "biography",
          "section": "Everything About Me!"
     },
     "socials": {
          "title": "socials",
          "section": "Legal Stalking"
     }
}

const manualPages = document.querySelectorAll('.manual__pages')
const manualPagesBio = document.querySelector('.biography')
const manualPagesSoc = document.querySelector('.socials')

const manualTitle = document.querySelector('.manual__title')
const manualLabel = document.querySelector('.manual__label')
const manualFlipClick = new Audio('https://file.garden/akaL6XVvah-9gxkK/Audio/WindowsClick.mp3') // fuck you

let manualFlip = false
const manualNavBtn = document.querySelector('.manual__navigation')
manualNavBtn.addEventListener('click', () => {
     manualPages.forEach(value => value.style.display = 'none')
     manualFlipClick.play()
     manualFlipClick.currentTime = 0
     manualFlip = !manualFlip

     if (manualFlip == false) {
          manualTitle.textContent = manual.biography.title.toUpperCase()
          manualLabel.textContent = manual.biography.section
          manualPagesBio.style.display = 'grid'
     } else {
          manualTitle.textContent = manual.socials.title.toUpperCase()
          manualLabel.textContent = manual.socials.section
          manualPagesSoc.style.display = 'block'
     }
})