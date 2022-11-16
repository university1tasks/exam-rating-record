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
  new Teacher(firstName, lastName, patronymic, academicDegree, department);
  response.redirect("/teachers");
};
