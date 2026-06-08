const g = window.location.pathname.split(/\W+/g)
const y = window.location.pathname.split(/\w+/g)
g.shift()
y.shift()

const j = g.slice(1, g.length - 1)
const k = y.slice(1, g.length - 2)
j[j.length - 1] = document.querySelector('.post__headbar-title').textContent
const l = document.querySelector('.post__headbar-breadcrumbs')
for (let index = 0; index < j.length; index++) {
     const thing = document.createElement('span')
     thing.classList.add('post__headbar-crumbs')
     thing.textContent = j[index]
     l.appendChild(thing)

     if (index < k.length) {
          const thing1 = document.createElement('span')
          thing1.textContent = k[index]
          l.appendChild(thing1)
     }
}