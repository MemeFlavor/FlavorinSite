const headbarTitle = document.querySelector('.post__headbar-title')
const headbarBreadCrumbs = document.querySelector('.post__headbar-breadcrumbs')

const headbarPathSlash = window.location.pathname.split(/\W+/g)
const headbarPathTexts = window.location.pathname.split(/\w+/g)
headbarPathSlash.shift()
headbarPathTexts.shift()

const pathSlashGroup = headbarPathSlash.slice(1, headbarPathSlash.length - 1)
const pathTextGroups = headbarPathTexts.slice(1, headbarPathSlash.length - 2)
pathSlashGroup[pathSlashGroup.length - 1] = headbarTitle.textContent
for (let pathSlashIndex = 0; pathSlashIndex < pathSlashGroup.length; pathSlashIndex++) {
     const headbarCrumbs = document.createElement('span')
     headbarCrumbs.classList.add('post__headbar-crumbs')
     headbarCrumbs.textContent = pathSlashGroup[pathSlashIndex]
     headbarBreadCrumbs.appendChild(headbarCrumbs)

     if (pathSlashIndex < pathTextGroups.length) { // Prevents an extra "slash" character.
          const headbarBits = document.createElement('span')
          headbarBits.textContent = pathTextGroups[pathSlashIndex]
          headbarBreadCrumbs.appendChild(headbarBits)
     }
}