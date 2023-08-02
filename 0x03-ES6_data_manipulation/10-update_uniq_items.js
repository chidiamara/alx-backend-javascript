/**
 * updates the quantity of the item in the groceries list to 100\
 * where the quantity is 1
 * @param {Map<string, number>} groceries - a map of grocery names and their quantity
 * @returns {Map<string, number>} Returns a map of grocery names and their quantity.
 * @author Chidiamara Ekejiuba <https://github.com/chidiamara>
 */

export default function updateUniqueItems(groceries) {
  for (const [item, quantity] of groceries) {
    if (quantity === 1) {
      groceries.set(item, 100);
    }
  }
  return groceries;
}
