import { getRandomInt } from "./modules/shortcuts.js";

async function fetchFile(file) {
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

/* Domain */

const domain = document.querySelector('.domain')
if (window.location.hostname === 'memeflavor.github.io') {
     domain.style.backgroundColor = 'hsl(90, 100%, 40%)'
}
domain.textContent = window.location.hostname

/* Panel */

const panelTerminal = document.querySelector('.panel__terminal')
panelTerminal.innerHTML = await fetchFile('txts/syncing.txt')

const panelTerminalProgress = panelTerminal.querySelectorAll('trm-progress')
const panelTerminalPercent = panelTerminal.querySelectorAll('trm-percent')
const panelTerminalTime = panelTerminal.querySelectorAll('trm-time')
const panelTerminalLoad = panelTerminal.querySelectorAll('trm-load')
for (let terminalIndex = 0; terminalIndex < 3; terminalIndex++) {
     let terminalLoadChars = '⠋⠇⠦⠴⠸⠙'
     let terminalLoadIndex = 0;
     let terminalProgressRange = getRandomInt(0, 10)

     const PROGRESS_INDEX_LIMIT = 10
     const PERCENT_INDEX_LIMIT = 5
     function terminalProgress() {
          if (terminalProgressRange % (PROGRESS_INDEX_LIMIT + 1) === 0) terminalProgressRange = 0;
          const progress = panelTerminalProgress[terminalIndex]
          const percent = panelTerminalPercent[terminalIndex]
          const time = panelTerminalTime[terminalIndex]

          time.innerHTML = `${getRandomInt(0, 9)}:${getRandomInt(0, 5)}${getRandomInt(0, 9)}`
          progress.innerHTML = '#'.repeat(terminalProgressRange).padEnd(10, `-`).replace(/\-/g, '<trm-empty>-</trm-empty>')
          percent.innerHTML = `${terminalProgressRange * 10}%`.padStart(4, ' ')
          percent.setAttribute('level', terminalProgressRange * 10)
          terminalProgressRange++
     }

     function terminalLoading() {
          if (terminalLoadIndex % (PERCENT_INDEX_LIMIT + 1) === 0) terminalLoadIndex = 0;
          const load = panelTerminalLoad[terminalIndex]

          load.innerHTML = terminalLoadChars.charAt(terminalLoadIndex)
          terminalLoadIndex++;
     }

     terminalProgress()
     setInterval(terminalProgress, 1100)
     setInterval(terminalLoading, 100)
}