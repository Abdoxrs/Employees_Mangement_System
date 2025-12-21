const { ApiError } = require('../Utills/ApiError');
const projectService = require('../Services/projects.service');

exports.createProject = async (req, res, next) => {
  try {
    const project = await projectService.createProject(req.body);
    res.status(201).json({
      status: 'success',
      message: 'project created successfully',
      data: project,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllProjects = async (req, res, next) => {
  try {
    const projects = await projectService.getProjects(req.query);
    res.status(200).json({
      status: 'success',
      message: 'projects retrieved successfully',
      data: projects,
    });
  } catch (err) {
    next(err);
  }
};

exports.getProject = async (req, res, next) => {
  try {
    const project = await projectService.getProjectById(req.params.id);
    if (!project) throw new ApiError('Project not found', 404);
    res.status(200).json({
      status: 'success',
      message: 'project data retrieved successfully',
      data: project,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateProject = async (req, res, next) => {
  try {
    const project = await projectService.updateProjectById(
      req.params.id,
      req.body
    );
    if (!project) throw new ApiError('Project not found', 404);
    res.status(200).json({
      status: 'success',
      message: 'project updated successfully',
      data: project,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteAllProjects = async (req, res, next) => {
  try {
    const result = await projectService.deleteAllProjects();
    res.status(200).json({
      status: 'success',
      message: 'projects deleted successfully',
      data: { deletedCount: result.deletedCount },
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteProject = async (req, res, next) => {
  try {
    const project = await projectService.deleteProjectById(req.params.id);
    if (!project) throw new ApiError('Project not found', 404);
    res.status(200).json({
      status: 'success',
      message: 'project deleted successfully',
    });
  } catch (err) {
    next(err);
  }
};
