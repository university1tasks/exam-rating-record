const Exam = require("../models/exam");
const Subject = require("../models/subject");
const Student = require("../models/student");

exports.addExam = function (request, response) {
  response.render("create_exam", {
    subjects: Subject.getAll(),
    students: Student.getAll(),
  });
};

exports.getExams = function (request, response) {
  response.render("exams", {
    exams: Exam.getAll(),
  });
};

exports.postExam = function (request, response) {
  const data = request.body;
  const subject = Subject.getById(parseInt(data.subject));
  if (subject == undefined) {
    response.status(400).send("Error");
    return;
  }
  delete data.subject;
  const ratings = [];
  let rating;
  let rateInt;
  for (const [studentId, rate] of Object.entries(data)) {
    rateInt = parseInt(rate);
    rating = {
      student: Student.getById(parseInt(studentId)),
      rate,
    };
    if (
      rating.student == undefined ||
      rateInt == NaN ||
      rateInt < 2 ||
      rateInt > 5
    ) {
      response.status(400).send("Error");
      return;
    }
    ratings.push(rating);
  }
  new Exam(subject, ratings);
  response.redirect("/exams");
};
