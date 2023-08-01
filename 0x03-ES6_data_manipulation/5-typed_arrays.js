/**
 * Creates a buffer array with a given position set to a given value
 * @returns {ArrayBuffer} - buffer array
 * @param {number} length
 * @param {number} position
 * @param {number} value
 * @author Chidiamara Ekejiuba <https://github.com/chidiamara>
 */

export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  if (position >= length) {
    throw Error('Position outside range');
  }
  view.setInt8(position, value);
  return view;
}
