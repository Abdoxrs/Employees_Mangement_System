const express = require("express");
const morgan = require("morgan");

const employeesRouter = require("./Routers/employees.router");
const departmentsRouter = require("./Routers/departments.router");
const projectsRouter = require("./Routers/projects.router");
const dependentsRouter = require("./Routers/dependents.router");
const usersRouter = require("./Routers/users.router");

const globalErrorHandler = require("./Utills/globalErrorHandler");
const { ApiError } = require("./Utills/ApiError");

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));


app.use("/api/users", usersRouter);
app.use("/api/employees", employeesRouter);
app.use("/api/departments", departmentsRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/dependents", dependentsRouter);

app.all("{*path}", (req, res, next) => {
  res.status(404).json({
    status: "error",
    message: "resource not found",
    data: null,
  });
});

app.use((error, req, res, next) => {
  if (error.isOperational) {
    res.status(error.statusCode).json({
      status: "fail",
      message: error.message,
      data: null,
    });
  } else {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "internal server error",
      data: null,
    });
  }
});

// app.use(globalErrorHandler);

module.exports = app;

// Risky Operation -> Division by Zero
