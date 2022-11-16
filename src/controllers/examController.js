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
  //   new Exam(
  //     {
  //       name: "test",
  //       teacher: {
  //         lastName: "tln",
  //         firstName: "tfn",
  //         patronymic: "tpn",
  //       },
  //     },
  //     [
  //       {
  //         student: {
  //           lastName: "sln",
  //           firstName: "sfn",
  //           patronymic: "spn",
  //         },
  //         rate: 4,
  //       },
  //       {
  //         student: {
  //           lastName: "sln2",
  //           firstName: "sfn2",
  //           patronymic: "spn2",
  //         },
  //         rate: 5,
  //       },
  //     ]
  //   );
  response.render("exams", {
    exams: Exam.getAll(),
  });
};

exports.postExam = function (request, response) {
  const data = request.body;
  const subject = Subject.getById(parseInt(data.subject));
  delete data.subject;
  const ratings = [];
  let rating;
  for (const [studentId, rate] of Object.entries(data)) {
    rating = {
      student: Student.getById(parseInt(studentId)),
      rate,
    };
    ratings.push(rating);
  }
  new Exam(subject, ratings);
  response.redirect("/exams");
};
