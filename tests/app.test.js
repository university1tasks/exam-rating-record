const assert = require("assert");
const { after } = require("mocha");
const supertest = require("supertest");
const { app, server } = require("../index");
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
  context("simple object", () => {
    it("should create student", () => {
      const student = new Student("Ivan", "Ivanov", "Ivanovich", "IVT");
      assert.equal(Student.getById(0), student);
      assert.equal(Student.getAll().next().value, student);
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
      const subject = new Subject("EVM", teacher);
      assert.equal(Subject.getById(0), subject);
      assert.equal(Subject.getAll().next().value, subject);
    });
  });
});

after(() => {
  server.close();
});
