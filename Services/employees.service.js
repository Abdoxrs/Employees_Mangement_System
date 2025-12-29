const Employee = require("../Models/employees.model");
const { ApiError } = require('../Utills/ApiError');

const createEmployee = (data) => Employee.create(data);

const getEmployees = (queryParams) => {
  const apiFeature = new ApiFeatures(
    Employee.find({}).populate({
      path: "departmentId",
      select: "number name",
    }),
    queryParams
  );
  apiFeature.paginate();
  apiFeature.sort();
  apiFeature.projection();
  return apiFeature.dbQuery;
};

const getEmployeeById = (id) => Employee.findById(id);

const updateEmployeeById = (id, updates) =>
  Employee.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

const deleteAllEmployees = () => Employee.deleteMany({});

const deleteEmployeeById = (id) => Employee.findByIdAndDelete(id);

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployeeById,
  deleteAllEmployees,
  deleteEmployeeById,
};

// aggregation pipeline stage lookup
