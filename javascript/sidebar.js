async function trag(file) {
     try {
          const response = await fetch(file);
          if (!response.ok) { // Check if the request was successful
               throw new Error('Network response was not ok');
          }
          return await new Response(response.body).text();
     } catch (error) {
          console.error('Error fetching data:', error);
     }
}

const die = await trag('changelog.txt')
const cie = await trag('help.txt')

const ert = document.querySelector('.debug__terminal')
const kil = document.querySelector('.debug__input')

function hjkl() {
     let divs = document.createElement('div')
     divs.insertAdjacentHTML('beforeend', die
          .replace(/host\.name/g, window.location.hostname)
          .replace(/(commit.+)/, `${die.match(/commit.+/g)[0]} (<color-head>HEAD -></color-head> <color-main>main</color-main>)`)
          .replace(/(commit.+)/g, '<color-commit>$1</color-commit>') + '\n\n'
     )
     ert.appendChild(divs)
}

function iklw() {
     let divs = document.createElement('div')
     divs.insertAdjacentHTML('beforeend', die
          .replace(/host\.name/g, window.location.hostname)
          .replace(/(commit.+)/, `${die.match(/commit.+/g)[0]} (<color-head>HEAD -></color-head> <color-main>main</color-main>)`)
          .replace(/(commit.+)/g, '<color-commit>$1</color-commit>')
          .split('\n\n')
          .slice(0, 2)
          .join('\n\n') + '\n\n'
     )
     ert.appendChild(divs)
}

function hegy() {
     let divs = document.createElement('div')
     divs.insertAdjacentHTML('beforeend', cie + '\n\n')
     ert.appendChild(divs)
}

iklw()

let que = false
kil.addEventListener('keydown', (event) => {
     if (event.key !== 'Enter') return;
     event.preventDefault();

     const dop = event.target.value
     const iow = dop.match(/[a-z\-]+/g)

     if (que == true) {
          if (iow[0] === 'y') {
               window.location.href = 'https://memeflavor.github.io/FlavorinSite/index.html'
          } else if (iow[0] === 'n') {
               let divs = document.createElement('div')
               divs.insertAdjacentHTML('beforeend', `\n`)
               ert.appendChild(divs)
               que = false
          }
          return
     }

     if (iow[0] !== 'flavory') {
          let divs = document.createElement('div')
          divs.insertAdjacentHTML('beforeend', `command not found: ${iow[0]}`)
          ert.appendChild(divs)
          return
     }

     switch (iow[1]) {
          case '-h': case 'help':
               hegy()
               break;
          case '-r': case 'recent':
               iklw()
               break;
          case '-l': case 'log':
               hjkl()
               break;
          case '-c': case 'clear':
               ert.innerHTML = ''
               break;
          case '-t': case 'testing':
               let divs1 = document.createElement('div')
               divs1.insertAdjacentHTML('beforeend', 'Do you want to test some changes\nthat are currenty experimental?\n> [y/n]')
               ert.appendChild(divs1)

               que = true
               break;
          default:
               let divs = document.createElement('div')
               divs.insertAdjacentHTML('beforeend', `flavory is not a command: ${iow[1]}`)
               ert.appendChild(divs)
               break;
     }    
})

kil.addEventListener('keydown', (event) => {
     if (event.key !== 'Enter') return;
     event.preventDefault();

     const iop = document.querySelector('.debug__console')
     iop.scrollTop = iop.scrollHeight - iop.clientHeight;
     event.target.value = ''
})