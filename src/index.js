import app from './app';
import '@babel/polyfill'; //Esto luego de npn run build se importa


async function main(){
     await app.listen(3000);
    console.log('Servidor desde el puerto 3000');
}

main();