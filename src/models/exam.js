const exams = new Map();
let lastIndex = 0;

module.exports = class Exam {
  constructor(subject, ratings) {
    this.id = lastIndex;
    this.subject = subject;
    this.ratings = ratings;
    exams.set(lastIndex, this);
    lastIndex++;
  }
  static getAll() {
    return exams.values();
  }
  static getById(index) {
    return exams.get(index);
  }
};
