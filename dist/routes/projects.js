"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _projectController = require("../controllers/projectController");

var router = (0, _express.Router)();
router.post('/', _projectController.createProject); //crear un proyecto

router.get('/', _projectController.getProyects); //mostrar todos los proyectos

router.get('/:id', _projectController.getProyectByID);
router["delete"]('/:id', _projectController.deleteProyect);
router.put('/:id', _projectController.updateProyect);
var _default = router;
exports["default"] = _default;