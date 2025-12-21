const express = require("express");
const employeeController = require("../Controllers/employees.controller");
const verifyUser = require("../Utills/verifyUser");
const { permittedTo } = require("../Utills/premittedTo");
const router = express.Router();
// CRUD operations for employees

router.use(verifyUser);

router.post("/", permittedTo(["admin"]), employeeController.createEmployee);

router.get("/", employeeController.getAllEmployees);

router.delete(
  "/",
  permittedTo(["admin"]),
  employeeController.deleteAllEmployees
);

router.get("/:id", employeeController.getEmployee);

router.patch("/:id", employeeController.updateEmployee);

router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
