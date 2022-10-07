//app.js o index.js se suele usar de forma comun y suele ser la raiz y archivo inicial
const{crearArchivo}=require('./Helpers/multiplicar');
 // esta linea viene en la documentacion de nodejs en su web y te ejemplifica como declararlo
const argv=require('./config/yargs');
const colors = require('colors');
// extraemos del pagquete yargs el argv


//opcion ('l')
//listar
//boolean
//defeault false
//mandar a crearArchivo
//recibir la L en multiplicar si listar esta en true, se lista la salida, si no no se muestra nada.

console.clear();

// este metodo esta bien pero es basico y ofrece problemas, usaremos yards
/*
const[,,tercerArgumento='base=5']=process.argv; //sacamos en pantalla los argumentos de la consola, sacamos solo el tercero

//console.log(tercerArgumento);

const [, base=5]= tercerArgumento.split('='); //aqui spliteamos el resultado del tercerargumento y lo dividimos en dos


console.log(base); 

//const base = 9;
*/

//Yards


//console.log(process.argv); //devuelve procesos nativos del programa
//console.log(argv); //devuelve los procesos del paquete yargs


//console.log('base:yargs', argv.base);



crearArchivo(argv.b, argv.l,argv.h)
.then(crearAchivo => console.log(crearArchivo, 'creado')) //convertimos en promesa para controlar el resultado
.catch(err => console.log(err));


