const Project = require('../Models/projects.model');
const { ApiFeatures } = require('../Utills/ApiFeature');

const createProject = (data) => Project.create(data);

const getProjects = (queryParams) => {
  const apiFeature = new ApiFeatures(Project.find({}), queryParams);
  apiFeature.paginate();
  apiFeature.sort();
  apiFeature.projection();
  return apiFeature.dbQuery;
};

const getProjectById = (id) => Project.findById(id);

const updateProjectById = (id, updates) =>
  Project.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

const deleteAllProjects = () => Project.deleteMany({});

const deleteProjectById = (id) => Project.findByIdAndDelete(id);

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  updateProjectById,
  deleteAllProjects,
  deleteProjectById,
};
