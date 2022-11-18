const Teacher = require("../models/teacher");

exports.addTeacher = function (request, response) {
  response.render("create_teacher");
};
exports.getTeachers = function (request, response) {
  response.render("teachers", {
    teachers: Teacher.getAll(),
  });
};
exports.postTeacher = function (request, response) {
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const patronymic = request.body.patronymic;
  const academicDegree = request.body.academicDegree;
  const department = request.body.department;
  try {
    if (
      firstName.length != 0 &&
      lastName.length != 0 &&
      patronymic.length != 0 &&
      academicDegree.length != 0 &&
      department.length != 0
    ) {
      new Teacher(firstName, lastName, patronymic, academicDegree, department);
      response.redirect("/teachers");
    } else {
      response.status(400).send("Error");
    }
  } catch (error) {
    response.status(400).send("Error");
  }
};
