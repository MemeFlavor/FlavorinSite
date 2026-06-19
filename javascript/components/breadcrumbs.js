const headbarTitle = document.querySelector('.post__headbar-title')
const headbarBreadCrumbs = document.querySelector('.post__headbar-breadcrumbs')

const breadCrumbsSeparator = window.location.pathname.split(/\w+/g).slice(-4).slice(0, 2)
const breadCrumbsWords = window.location.pathname.split('/').slice(-3)
const breadCrumbsLast = window.location.pathname.split('/').at(-1)
for (let crumbIndex = 0; crumbIndex < breadCrumbsWords.length; crumbIndex++) {
     const crumbsWords = document.createElement('span')
     crumbsWords.classList.add('post__headbar-crumbs')
     crumbsWords.textContent = breadCrumbsWords[crumbIndex].replace(breadCrumbsLast, headbarTitle.textContent)
     headbarBreadCrumbs.appendChild(crumbsWords)

     if (breadCrumbsSeparator[crumbIndex] !== undefined) {
          const crumbsSeparator = document.createElement('span')
          crumbsSeparator.textContent = breadCrumbsSeparator[crumbIndex]
          headbarBreadCrumbs.appendChild(crumbsSeparator)
     }
}