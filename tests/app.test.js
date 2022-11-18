const assert = require("assert");
const { after } = require("mocha");
const supertest = require("supertest");
const { app, server } = require("../index");
const { postStudent } = require("../src/controllers/studentController");
const { postSubject } = require("../src/controllers/subjectController");
const Student = require("../src/models/student");
const Subject = require("../src/models/subject");
const Teacher = require("../src/models/teacher");

describe("Main routes", () => {
  context("expecting status code 200", () => {
    it("should check /", function (done) {
      supertest(app).get("/").expect(200).end(done);
    });
    it("should check /students", function (done) {
      supertest(app).get("/students").expect(200).end(done);
    });
    it("should check /subjects", function (done) {
      supertest(app).get("/subjects").expect(200).end(done);
    });
    it("should check /teachers", function (done) {
      supertest(app).get("/teachers").expect(200).end(done);
    });
    it("should check /exams", function (done) {
      supertest(app).get("/exams").expect(200).end(done);
    });
  });

  it("should return status code 404", function (done) {
    supertest(app).get("/nonexistent").expect(404).end(done);
  });
});

describe("Objects creation", () => {
  const responseFake = {
    redirect: function (v) {},
  };

  context("simple object", () => {
    it("should create student", () => {
      const student = {
        firstName: "Ivan",
        lastName: "Ivanov",
        patronymic: "Ivanovich",
        group: "IVT",
      };
      postStudent({ body: student }, responseFake);
      assert.equal(Student.getById(0).firstName, student.firstName);
      assert.equal(Student.getById(0).lastName, student.lastName);
      assert.equal(Student.getById(0).patronymic, student.patronymic);
      assert.equal(Student.getById(0).group, student.group);
    });
  });

  context("nested object", () => {
    it("should create subject", () => {
      const teacher = new Teacher(
        "Petr",
        "Petrov",
        "Petrovich",
        "Doctor",
        "IST"
      );
      const subject = {
        name: "EVM",
        teacher: "0",
      };
      postSubject({ body: subject }, responseFake);
      assert.equal(Subject.getById(0).name, subject.name);
      assert.equal(Subject.getById(0).teacher, teacher);
    });
  });
});

after(() => {
  server.close();
});
