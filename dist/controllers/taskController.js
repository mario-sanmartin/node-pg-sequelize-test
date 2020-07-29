"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTask = createTask;
exports.getTasks = getTasks;
exports.getTaskById = getTaskById;
exports.deleteTask = deleteTask;
exports.updateTask = updateTask;
exports.getTaskByProject = getTaskByProject;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Task = _interopRequireDefault(require("../models/Task"));

function createTask(_x, _x2) {
  return _createTask.apply(this, arguments);
}

function _createTask() {
  _createTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, done, projectid, newTask;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, done = _req$body.done, projectid = _req$body.projectid; // console.log(req.body);

            _context.next = 4;
            return _Task["default"].create({
              name: name,
              done: done,
              projectid: projectid
            }, {
              fields: ['name', 'done', 'projectid'] //Campos a pasar

            });

          case 4:
            newTask = _context.sent;
            res.json({
              message: 'New Task created'
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _createTask.apply(this, arguments);
}

;

function getTasks(_x3, _x4) {
  return _getTasks.apply(this, arguments);
}

function _getTasks() {
  _getTasks = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var task;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Task["default"].findAll({
              attributes: ['id', 'name', 'done', 'projectid'],
              order: [['id', 'ASC'] //Criterio para ordenar
              ]
            });

          case 3:
            task = _context2.sent;
            res.json({
              task: task
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getTasks.apply(this, arguments);
}

function getTaskById(_x5, _x6) {
  return _getTaskById.apply(this, arguments);
}

function _getTaskById() {
  _getTaskById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, oneTask;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Task["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'name', 'done', 'projectid']
            });

          case 3:
            oneTask = _context3.sent;
            res.json({
              message: 'Aqui esta tu tarea papu',
              oneTask: oneTask
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getTaskById.apply(this, arguments);
}

function deleteTask(_x7, _x8) {
  return _deleteTask.apply(this, arguments);
}

function _deleteTask() {
  _deleteTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id; //Desde aqui obtengo el id

            _context4.prev = 1;
            _context4.next = 4;
            return _Task["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            res.json({
              message: 'Tarea Eliminada'
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 7]]);
  }));
  return _deleteTask.apply(this, arguments);
}

function updateTask(_x9, _x10) {
  return _updateTask.apply(this, arguments);
}

function _updateTask() {
  _updateTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body2, name, done, projectid, tarea, tareaUpdate;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, done = _req$body2.done, projectid = _req$body2.projectid;
            _context5.next = 4;
            return _Task["default"].findOne({
              //Con esto buscamos el id que coincida
              attributes: ['name', 'done', 'projectid'],
              //Los atributos que queremos
              where: {
                id: id
              }
            });

          case 4:
            tarea = _context5.sent;
            _context5.next = 7;
            return _Task["default"].update({
              //Aqui indicamos que datos queremos actualizar
              name: name,
              done: done,
              projectid: projectid
            }, {
              where: {
                id: id
              } //El id sea igual

            });

          case 7:
            tareaUpdate = _context5.sent;
            res.json({
              message: 'Tarea RecontraActualizada',
              tareaUpdate: tareaUpdate
            });

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateTask.apply(this, arguments);
}

function getTaskByProject(_x11, _x12) {
  return _getTaskByProject.apply(this, arguments);
}

function _getTaskByProject() {
  _getTaskByProject = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var projectid, tareas;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            projectid = req.params.projectid;
            _context6.next = 3;
            return _Task["default"].findAll({
              attributes: ['id', 'name', 'done', 'projectid'],
              where: {
                projectid: projectid
              }
            });

          case 3:
            tareas = _context6.sent;
            res.json({
              tareas: tareas
            });

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getTaskByProject.apply(this, arguments);
}