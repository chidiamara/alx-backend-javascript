/**
 * @return: students by location
 * @returns {Array} students by location
 * @param {Array} students
 * @param {String} city
 * @author Chidiamara Ekejiuba <https://github.com/chidiamara>
 */

export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) return [];
  return students.filter((student) => student.location === city);
}
