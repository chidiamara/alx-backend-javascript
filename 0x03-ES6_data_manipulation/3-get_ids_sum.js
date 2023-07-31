/**
 * @returns {Number} sum of all student ids
 * @param {{id: Number,
 *          firstName: String,
 *          location: String}[]} listStudents
 * @author Chidiamara Ekejiuba <https://github.com/chidiamara>
 */

export default function getStudentIdsSum(listStudents) {
  if (!Array.isArray(listStudents)) return 0;
  return listStudents.reduce((sum, student) => sum + student.id, 0);
}
