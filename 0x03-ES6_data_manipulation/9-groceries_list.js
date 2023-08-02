/**
 * @returns {Map<string, number>} Returns a map of grocery names and their quantity.
 * @author Chidiamara Ekejiuba <https://github.com/chidiamara>
 */

export default function groceriesList() {
  const groceries = new Map();
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);
  return groceries;
}
