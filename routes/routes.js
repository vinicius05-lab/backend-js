const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");

categoryController = new CategoryController();

router.post('/categories', categoryController.create);
router.get('/categories', categoryController.getAll);
router.get('/categories/:id', categoryController.getById);
router.put('/categories/:id', categoryController.update);
router.delete('/categories/:id', categoryController.delete);

module.exports = router;
