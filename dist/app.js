"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _projects = _interopRequireDefault(require("./routes/projects"));

var _tasks = _interopRequireDefault(require("./routes/tasks"));

//Importando routes
//Iniciaización
var app = (0, _express["default"])(); //middlewares

app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)()); //Rutas

app.use('/api/projects', _projects["default"]);
app.use('/api/tasks', _tasks["default"]);
var _default = app;
exports["default"] = _default;