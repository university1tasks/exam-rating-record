const express = require("express");
const teacherController = require("../controllers/teacherController");
const teacherRouter = express.Router();

teacherRouter.post("/send", teacherController.postTeacher);
teacherRouter.get("/create", teacherController.addTeacher);
teacherRouter.get("/", teacherController.getTeachers);

module.exports = teacherRouter;
