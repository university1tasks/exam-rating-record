const express = require("express");
const examController = require("../controllers/examController");
const examRouter = express.Router();

examRouter.post("/send", examController.postExam);
examRouter.get("/create", examController.addExam);
examRouter.get("/", examController.getExams);

module.exports = examRouter;
