import announcements from '../../../json/blogs/announcements.json' with { type: 'json' };
import weblogs from '../../../json/blogs/weblogs.json' with { type: 'json' };

/**
     * Complies every bloglist data into one big ass object.
     * @type {Object} 
*/
export const bloglistData = {
     "announcements": [...announcements],
     "weblogs": [...weblogs]
}

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