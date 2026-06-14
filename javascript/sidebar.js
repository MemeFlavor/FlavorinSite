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

const ert = document.querySelector('.updatelogs__terminal')

function hjkl() {
     let divs = document.createElement('div')
     divs.insertAdjacentHTML('beforeend', die
          .replace(/host\.name/g, window.location.hostname)
          .replace(/(commit.+)/, `${die.match(/commit.+/g)[0]} (<color-head>HEAD -></color-head> <color-main>main</color-main>)`)
          .replace(/(commit.+)/g, '<color-commit>$1</color-commit>') + '\n\n'
     )
     ert.appendChild(divs)
}

hjkl()

document.querySelector('.updatelogs__input').addEventListener('keydown', (event) => {
     if (event.key === 'Enter') {
          event.preventDefault();

          if (event.target.value.match('log')) {
               hjkl()

               const iop = document.querySelector('.updatelogs__console')

               const we = document.querySelectorAll('color-head')[1]
               iop.scrollTop = iop.scrollHeight - iop.clientHeight;
          }
     }
})   

/* let wer = await (async () => {
     try {
          const response = await fetch('changelog.txt');
          if (!response.ok) { // Check if the request was successful
               throw new Error('Network response was not ok');
          }
          return await new Response(response.body).text();
     } catch (error) {
          console.error('Error fetching data:', error);
     }
})()

const huy = wer.match(/commit.+/g)
const yu = huy.map((value) => {
               return `<span style="color: #ffb300">${value}</span>`
          })
          .forEach((value, index) => {
               wer = wer.replace(huy[index], value)
          })
const iop = wer.split('\n\n').slice(0, 2).join('\n\n')

const werty = document.querySelector('.updatelogs__terminal')
const iuop = document.querySelector('.updatelogs__input')

const g = wer.replace(/host\.name/g, window.location.hostname)
werty.innerHTML += '<div>' + g + '\n\n' + '</div>'

const grtyt = document.querySelector('.updatelogs__terminal div span')
const hyrts = ' (<span style="color: #51cbd3; font-weight: bolder">HEAD -></span> <span style="color: #43cd5f; font-weight: bolder">main</span>)'
grtyt.innerHTML += hyrts

iuop.addEventListener('keydown', (event) => {
     if (event.key === 'Enter') {
          event.preventDefault();
     } 
}) */