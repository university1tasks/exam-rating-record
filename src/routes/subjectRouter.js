const express = require("express");
const subjectController = require("../controllers/subjectController");
const subjectRouter = express.Router();

subjectRouter.post("/send", subjectController.postSubject);
subjectRouter.get("/create", subjectController.addSubject);
subjectRouter.get("/", subjectController.getSubjects);

module.exports = subjectRouter;
