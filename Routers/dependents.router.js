const express = require('express');
const dependentController = require('../Controllers/dependents.controller');

const router = express.Router();

router.post('/', dependentController.createDependent);
router.get('/', dependentController.getAllDependents);
router.delete('/', dependentController.deleteAllDependents);

router.get('/:id', dependentController.getDependent);
router.patch('/:id', dependentController.updateDependent);
router.delete('/:id', dependentController.deleteDependent);

module.exports = router;
