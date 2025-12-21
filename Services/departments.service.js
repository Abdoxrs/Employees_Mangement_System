const Department = require('../Models/departments.model');
const { ApiFeatures } = require('../Utills/ApiFeature');

const createDepartment = (data) => Department.create(data);

const getDepartments = (queryParams) => {
  const apiFeature = new ApiFeatures(Department.find({}), queryParams);
  apiFeature.paginate();
  apiFeature.sort();
  apiFeature.projection();
  return apiFeature.dbQuery;
};  

const getDepartmentById = (id) => Department.findById(id);

const updateDepartmentById = (id, updates) =>
  Department.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

const deleteAllDepartments = () => Department.deleteMany({});

const deleteDepartmentById = (id) => Department.findByIdAndDelete(id);

module.exports = {
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartmentById,
  deleteAllDepartments,
  deleteDepartmentById,
};
