const express = require("express");
const studentController = require("../controllers/studentController");
const studentRouter = express.Router();

studentRouter.post("/send", studentController.postStudent);
studentRouter.get("/create", studentController.addStudent);
studentRouter.get("/", studentController.getStudents);

module.exports = studentRouter;
