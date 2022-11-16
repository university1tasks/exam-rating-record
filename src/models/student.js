const students = new Map();
let lastIndex = 0;

module.exports = class Student {
  constructor(firstName, lastName, patronymic, group) {
    this.id = lastIndex;
    this.firstName = firstName;
    this.lastName = lastName;
    this.patronymic = patronymic;
    this.group = group;
    students.set(lastIndex, this);
    lastIndex++;
  }
  static getAll() {
    return students.values();
  }
  static getById(index) {
    return students.get(index);
  }
};
