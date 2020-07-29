"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

//Esto es mi archivo de conexion
var sequelize = new _sequelize["default"]('intentoDeBd', // nombre bd
'postgres', //nombre usuario
'pacifik', //contraseña
{
  host: 'localhost',
  dialect: 'postgres',
  //tipo de bd a conectarse
  pool: {
    //conexiones
    max: 5,
    min: 0,
    requiere: 30000,
    idle: 10000
  },
  logging: false
});
exports.sequelize = sequelize;