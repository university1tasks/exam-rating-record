const teachers = new Map();
let lastIndex = 0;

module.exports = class Teacher {
  constructor(firstName, lastName, patronymic, academicDegree, department) {
    this.id = lastIndex;
    this.firstName = firstName;
    this.lastName = lastName;
    this.patronymic = patronymic;
    this.academicDegree = academicDegree;
    this.department = department;
    teachers.set(lastIndex, this);
    lastIndex++;
  }
  static getAll() {
    return teachers.values();
  }
  static getById(index) {
    return teachers.get(index);
  }
};
