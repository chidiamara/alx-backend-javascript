/**
 * @returns {Array} list of student ids
 * @param {Array} listStudents
 * @author Chidiamara Ekejiuba <https://github.com/chidiamara>
 */

export default function getListStudentIds(listStudents) {
  if (!Array.isArray(listStudents)) return [];
  return listStudents.map((student) => student.id);
}
