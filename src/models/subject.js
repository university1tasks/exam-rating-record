const subjects = new Map();
let lastIndex = 0;

module.exports = class Subject {
  constructor(name, teacher) {
    this.id = lastIndex;
    this.name = name;
    this.teacher = teacher;
    subjects.set(lastIndex, this);
    lastIndex++;
  }
  static getAll() {
    return subjects.values();
  }
  static getById(index) {
    return subjects.get(index);
  }
};
