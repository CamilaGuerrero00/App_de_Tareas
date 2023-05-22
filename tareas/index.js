//requires
const {readFileSync, writeFileSync} = require('fs');
const path = require('path');
//estas funciones nos permiten leer y escribir nuestro json
const leerJSON = () => JSON.parse(readFileSync(path.join(__dirname, 'tareas.json') ,'utf-8'));
const escribirTareas = (tarea) => writeFileSync(path.join(__dirname,'tareas.json'),JSON.stringify(tarea,null,3),'utf-8');
//exportaciones
module.exports = { leerJSON, escribirTareas}