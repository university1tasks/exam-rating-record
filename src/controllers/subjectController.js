const Subject = require("../models/subject");
const Teacher = require("../models/teacher");

exports.addSubject = function (request, response) {
  response.render("create_subject", {
    teachers: Teacher.getAll(),
  });
};
exports.getSubjects = function (request, response) {
  response.render("subjects", {
    subjects: Subject.getAll(),
  });
};
exports.postSubject = function (request, response) {
  const name = request.body.name;
  const teacher = Teacher.getById(parseInt(request.body.teacher));
  try {
    if (name.length != 0 && teacher != undefined) {
      new Subject(name, teacher);
      response.redirect("/subjects");
    } else {
      response.status(400).send("Error");
    }
  } catch (error) {
    response.status(400).send("Error");
  }
};
