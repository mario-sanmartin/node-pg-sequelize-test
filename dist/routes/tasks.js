"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _taskController = require("../controllers/taskController");

var router = (0, _express.Router)();
//api/tasks
router.post('/', _taskController.createTask);
router.get('/', _taskController.getTasks); //api/tasks/:id

router.get('/:id', _taskController.getTaskById);
router.put('/:id', _taskController.updateTask);
router["delete"]('/:id', _taskController.deleteTask); //api/tasks/project/:projectid

router.get('/project/:projectid', _taskController.getTaskByProject);
var _default = router;
exports["default"] = _default;