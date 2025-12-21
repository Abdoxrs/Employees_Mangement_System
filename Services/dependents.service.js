const Dependent = require('../Models/dependents.model');
const { ApiFeatures } = require('../Utills/ApiFeature');

const createDependent = (data) => Dependent.create(data);

const getDependents = (queryParams) => {
  const apiFeature = new ApiFeatures(Dependent.find({}), queryParams);
  apiFeature.paginate();
  apiFeature.sort();
  apiFeature.projection();
  return apiFeature.dbQuery;
};

const getDependentById = (id) => Dependent.findById(id);

const updateDependentById = (id, updates) =>
  Dependent.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

const deleteAllDependents = () => Dependent.deleteMany({});

const deleteDependentById = (id) => Dependent.findByIdAndDelete(id);

module.exports = {
  createDependent,
  getDependents,
  getDependentById,
  updateDependentById,
  deleteAllDependents,
  deleteDependentById,
};
