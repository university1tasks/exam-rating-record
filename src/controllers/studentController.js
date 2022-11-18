const Student = require("../models/student");

exports.addStudent = function (request, response) {
  response.render("create_student");
};
exports.getStudents = function (request, response) {
  response.render("students", {
    students: Student.getAll(),
  });
};
exports.postStudent = function (request, response) {
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const patronymic = request.body.patronymic;
  const group = request.body.group;
  try {
    if (
      firstName.length != 0 &&
      lastName.length != 0 &&
      patronymic.length != 0 &&
      group.length != 0
    ) {
      new Student(firstName, lastName, patronymic, group);
      response.redirect("/students");
    } else {
      response.status(400).send("Error");
    }
  } catch (error) {
    response.status(400).send("Error");
  }
};
