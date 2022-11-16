const express = require("express");
const app = express();
const path = require("path");
const subjectRouter = require("./src/routes/subjectRouter");
const teacherRouter = require("./src/routes/teacherRouter");
const studentRouter = require("./src/routes/studentRouter");
const homeRouter = require("./src/routes/homeRouter");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/src/views"));
app.use(express.urlencoded({ extended: false }));

app.use("/subjects", subjectRouter);
app.use("/teachers", teacherRouter);
app.use("/students", studentRouter);
app.use("/", homeRouter);

app.use(function (req, res, next) {
  res.status(404).send("Not Found");
});

app.listen(3000);
