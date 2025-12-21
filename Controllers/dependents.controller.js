const { ApiError } = require('../Utills/ApiError');
const dependentService = require('../Services/dependents.service');

exports.createDependent = async (req, res, next) => {
  try {
    const dependent = await dependentService.createDependent(req.body);
    res.status(201).json({
      status: 'success',
      message: 'dependent created successfully',
      data: dependent,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllDependents = async (req, res, next) => {
  try {
    const dependents = await dependentService.getDependents(req.query);
    res.status(200).json({
      status: 'success',
      message: 'dependents retrieved successfully',
      data: dependents,
    });
  } catch (err) {
    next(err);
  }
};

exports.getDependent = async (req, res, next) => {
  try {
    const dependent = await dependentService.getDependentById(req.params.id);
    if (!dependent) throw new ApiError('Dependent not found', 404);
    res.status(200).json({
      status: 'success',
      message: 'dependent data retrieved successfully',
      data: dependent,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateDependent = async (req, res, next) => {
  try {
    const dependent = await dependentService.updateDependentById(
      req.params.id,
      req.body
    );
    if (!dependent) throw new ApiError('Dependent not found', 404);
    res.status(200).json({
      status: 'success',
      message: 'dependent updated successfully',
      data: dependent,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteAllDependents = async (req, res, next) => {
  try {
    const result = await dependentService.deleteAllDependents();
    res.status(200).json({
      status: 'success',
      message: 'dependents deleted successfully',
      data: { deletedCount: result.deletedCount },
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteDependent = async (req, res, next) => {
  try {
    const dependent = await dependentService.deleteDependentById(
      req.params.id
    );
    if (!dependent) throw new ApiError('Dependent not found', 404);
    res.status(200).json({
      status: 'success',
      message: 'dependent deleted successfully',
    });
  } catch (err) {
    next(err);
  }
};
