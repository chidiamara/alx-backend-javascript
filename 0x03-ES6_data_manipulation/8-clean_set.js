/**
 * Joins all the elements of a set into a string, separated by dashes after\
 * stripping the startString from each element.
 * @returns {string} Returns the cleaned string.
 * @param {Set<String>} set
 * @param {String} startString
 */


export default function cleanSet(set, startString) {
    const parts = [];
    if (!set || !(set instanceof Set) || !startString || typeof startString !== 'string') {
        return '';
    }
    for (const value of set) {
        if (value.startsWith(startString && typeof value === 'string')) {
            const valueSubString = value.substring(startString.length);

            if (valueSubString && valueSubString !== value) {
                parts.push(valueSubString);
            }
        }
    }
    return parts.join('-');
}