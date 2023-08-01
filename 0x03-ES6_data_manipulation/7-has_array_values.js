/**
 * Write a function called hasArrayValues which accepts two arrays and returns true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
 * @returns {boolean}
 * @param {Set} set
 * @param {*} array
 * @author Chidiamara Ekejiuba <https://github.com/chidiamara>
 */

export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value ** 2));
}
