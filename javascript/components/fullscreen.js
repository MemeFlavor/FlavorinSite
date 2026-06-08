const theFuckingDocument = document.querySelector('html')

const postImages = document.querySelectorAll('.post__body img')
const postDialogFull = document.querySelector('.post__fullscreen')
const postDialogFullExit = document.querySelector('.post__fullscreen-exit')
const postDialogFullImg = document.querySelector('.post__fullscreen-image')

// Open Dialog, i think
postImages.forEach((images) => {
     images.addEventListener('click', (self) => {
          postDialogFullImg.style.imageRendering = self.srcElement.hasAttribute('data-pixelated') == true ? 'pixelated' : 'auto'
          postDialogFullImg.setAttribute('src', self.srcElement.src)
          postDialogFullImg.setAttribute('alt', self.srcElement.alt)
          postDialogFull.show()
          theFuckingDocument.style.scrollbarWidth = 'none'
     })
})

// Hovering, Exiting, Clicking States
postDialogFullExit.addEventListener('mouseleave', self => self.srcElement.setAttribute('src', 'images/buttons/exit.png'))
postDialogFullExit.addEventListener('mouseenter', self => self.srcElement.setAttribute('src', 'images/buttons/exit-hover.png'))
postDialogFullExit.addEventListener('mousedown',  self => self.srcElement.setAttribute('src', 'images/buttons/exit-active.png'))

// Exiting
function postDialogFullClose() {
     postDialogFull.close()
     theFuckingDocument.style.scrollbarWidth = 'auto'
}

document.addEventListener('keydown', (event) => {
     if (event.key == 'Escape' && postDialogFull.open) postDialogFullClose();
})
postDialogFullExit.addEventListener('click', postDialogFullClose)