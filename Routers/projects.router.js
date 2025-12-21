const express = require('express');
const projectController = require('../Controllers/projects.controller');

const router = express.Router();

router.post('/', projectController.createProject);
router.get('/', projectController.getAllProjects);
router.delete('/', projectController.deleteAllProjects);

router.get('/:id', projectController.getProject);
router.patch('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;
