import { getRandomInt } from "../modules/shortcuts.js";

const LIMIT = 60
const STEPS = 10
const amy = document.querySelector('.music__album-amy')

let position = 0
const dancingMovement = setInterval(() => {
     let positionRancrement = getRandomInt(-1, 1)
     if (positionRancrement != 0) {
          position += positionRancrement * STEPS
     }

     if (position >= -LIMIT && position <= LIMIT) {
          amy.style.transform = `translateX(${position}px)`
     } else if (position <= -LIMIT || position >= LIMIT) {
          position -= positionRancrement * STEPS
     }
}, 2500);