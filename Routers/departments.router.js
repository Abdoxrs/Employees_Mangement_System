const express = require('express');
const departmentController = require('../Controllers/departments.controller');

const router = express.Router();

router.post('/', departmentController.createDepartment);
router.get('/', departmentController.getAllDepartments);
router.delete('/', departmentController.deleteAllDepartments);

router.get('/:id', departmentController.getDepartment);
router.patch('/:id', departmentController.updateDepartment);
router.delete('/:id', departmentController.deleteDepartment);

module.exports = router;
