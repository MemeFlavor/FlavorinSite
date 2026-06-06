const amy = document.querySelector('.music__album-amy')

const LIMIT = 60
const MULTIPLY = 10
function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
}

let position = 0
const intervalId = setInterval(() => {
     let positionRancrement = getRandomInt(-1, 1)
     if (positionRancrement != 0) {
          position += positionRancrement * MULTIPLY
     }

     if (position >= -LIMIT && position <= LIMIT) {
          amy.style.transform = `translateX(${position}px)`
     } else if (position <= -LIMIT || position >= LIMIT) {
          position -= positionRancrement * MULTIPLY
     }
}, 2500);