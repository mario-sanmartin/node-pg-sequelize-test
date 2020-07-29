import Sequelize from 'sequelize';
//Esto es mi archivo de conexion
export const sequelize =  new Sequelize(
    'domingo', // nombre bd
    'postgres', //nombre usuario
    'pacifik', //contraseña
        {
            host:'localhost',
            dialect: 'postgres' ,//tipo de bd a conectarse
            pool:{ //conexiones
                max: 5,
                min:0,
                requiere: 30000,
                idle: 10000
            },
            logging: false
        }
)