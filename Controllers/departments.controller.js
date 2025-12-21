const { ApiError } = require('../Utills/ApiError');
const departmentService = require('../Services/departments.service');

exports.createDepartment = async (req, res, next) => {
  const department = await departmentService.createDepartment(req.body);
  res.status(201).json({
    status: 'success',
    message: 'department created successfully',
    data: department,
  });
};

exports.getAllDepartments = async (req, res, next) => {
  const departments = await departmentService.getDepartments(req.query);
  res.status(200).json({
    status: 'success',
    message: 'departments retrieved successfully',
    data: departments,
  });
};

exports.getDepartment = async (req, res, next) => {
  const department = await departmentService.getDepartmentById(req.params.id);
  if (!department) throw new ApiError('Department not found', 404);
  res.status(200).json({
    status: 'success',
    message: 'department data retrieved successfully',
    data: department,
  });
};

exports.updateDepartment = async (req, res, next) => {
  const department = await departmentService.updateDepartmentById(
    req.params.id,
    req.body
  );
  if (!department) throw new ApiError('Department not found', 404);
  res.status(200).json({
    status: 'success',
    message: 'department updated successfully',
    data: department,
  });
};

exports.deleteAllDepartments = async (req, res, next) => {
  const result = await departmentService.deleteAllDepartments();
  res.status(200).json({
    status: 'success',
    message: 'departments deleted successfully',
    data: { deletedCount: result.deletedCount },
  });
};

exports.deleteDepartment = async (req, res, next) => {
  const department = await departmentService.deleteDepartmentById(
    req.params.id
  );
  if (!department) throw new ApiError('Department not found', 404);
  res.status(200).json({
    status: 'success',
    message: 'department deleted successfully',
  });
};
