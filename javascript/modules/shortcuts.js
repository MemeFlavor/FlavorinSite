/**  
     * Converts the first letter of the given text to be capitalized.
     * @param {String} str The given text.
     * @returns string
*/
export function toUpperFirstCase(str) {
     return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
     * Randomizes a given range of number based in integers.
     * @param {Number} min The minimum integer range to randomly get.
     * @param {Number} max The maximum integer range to randomly get.
     * @returns Number
*/
export function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
}