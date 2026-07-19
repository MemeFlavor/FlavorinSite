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

const manualContent = document.querySelectorAll('.manual__content')
const manualContentBio = document.querySelector('.biography')
const manualContentSoc = document.querySelector('.socials')

const manualTitle = document.querySelector('.manual__title')
const manualSects = document.querySelector('.manual__title-section')
const manualFlipClick = new Audio('https://file.garden/akaL6XVvah-9gxkK/Audio/WindowsClick.mp3') // fuck you

let manualFlip = false
const manualNavBtn = document.querySelector('.manual__navigation')
manualNavBtn.addEventListener('click', () => {
     manualContent.forEach(value => value.style.display = 'none')
     manualFlipClick.play()
     manualFlipClick.currentTime = 0
     manualFlip = !manualFlip

     if (manualFlip == false) {
          manualTitle.textContent = manual.biography.title.toUpperCase()
          manualSects.textContent = manual.biography.section
          manualContentBio.style.display = 'grid'
     } else {
          manualTitle.textContent = manual.socials.title.toUpperCase()
          manualSects.textContent = manual.socials.section
          manualContentSoc.style.display = 'block'
     }
})

const socialCollections = document.querySelectorAll('.socials__list-collection')
const socialNavBtn = document.querySelectorAll('.socials__navigation-btn')
const socialNavBtnLength = socialNavBtn.length
for (let navBtnIndex = 0; navBtnIndex < socialNavBtnLength; navBtnIndex++) {
     const navigationElements = socialNavBtn[navBtnIndex];
     navigationElements.addEventListener('click', () => {
          socialCollections.forEach(value => value.style.display = 'none')
          socialCollections[navBtnIndex].style.display = 'flex'
     })
}