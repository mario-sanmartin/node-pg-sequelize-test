import Sequelize  from 'sequelize'; //Funcionalidades de Sequelize
import {sequelize}  from '../database/database'; //Importamos la conexion

import Task from './Task'

const Project = sequelize.define('projects',{
    id :{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type: Sequelize.TEXT
    },
    priority:{
            type: Sequelize.INTEGER
    },
    description:{
        type: Sequelize.TEXT
    },
    deliverydate:{
        type: Sequelize.DATE
    }
},{
    timestamps: false
});

Project.hasMany(Task,{foreignKey:'projectid',sourceKey:'id'});
Task.belongsTo(Project,{foreignKey:'projectid',sourceKey:'id'});

export default Project;