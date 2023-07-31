/**
 * @returns {Object[]} list of students with updated grade
 * @param {{ id: number, firstName: string, location: string }[]} students
 * @param {string} city
 * @param {{stduentId: number, grade: number}[]} newGrades
 * @author Chidiamara Ekejiuba <https://github.com/chidiamara>
 */

export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (!Array.isArray(students)) return [];
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (newGrades
        .filter((grade) => grade.studentId === student.id)
        .pop() || defaultGrade).grade,
    }));
}
