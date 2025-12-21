const { ApiError } = require("../Utills/ApiError");
const employeeService = require("../Services/employees.service");

exports.createEmployee = async (req, res, next) => {
  const employee = await employeeService.createEmployee(req.body);
  res.status(201).json({
    status: "success",
    message: "employee created successfully",
    data: employee,
  });
};

exports.getAllEmployees = async (req, res, next) => {
  const employees = await employeeService.getEmployees(req.query);
  res.status(200).json({
    status: "success",
    message: "employees retrieved successfully",
    data: employees,
  });
};

exports.getEmployee = async (req, res, next) => {
  try {
    const employee = await employeeService.getEmployeeById(req.params.id);
    if (!employee) {
      throw new ApiError("Employee not found", 404);
    }
    res.status(200).json({
      status: "success",
      message: "employee data retrieved successfully",
      data: employee,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateEmployee = async (req, res, next) => {
  try {
    console.log(req.body);
    const employee = await employeeService.updateEmployeeById(
      req.params.id,
      req.body
    );
    console.log(employee);
    if (!employee) {
      throw new ApiError("Employee not found", 404);
    }
    res.status(200).json({
      status: "success",
      message: "employee updated successfully",
      data: employee,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteAllEmployees = async (req, res, next) => {
  const result = await employeeService.deleteAllEmployees();
  res.status(200).json({
    status: "success",
    message: "employees deleted successfully",
    data: { deletedCount: result.deletedCount },
  });
};

exports.deleteEmployee = async (req, res, next) => {
  const employee = await employeeService.deleteEmployeeById(req.params.id);
  if (!employee) {
    throw new ApiError("Employee not found", 404);
  }
  res.status(200).json({
    status: "success",
    message: "employee deleted successfully",
  });
};
