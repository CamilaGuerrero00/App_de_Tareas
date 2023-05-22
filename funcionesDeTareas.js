//requires
const colors = require('colors');
const{leerJSON, escribirTareas} =require('./tareas')
const tareas = leerJSON()
//funcion constructora
function Tareas(titulo, estado){
    this.titulo = titulo;
    this.estado = estado
}
//funciones de acciones
function listar (){
    console.log("\n-----Lista de tareas-----".yellow);
    tareas.forEach((tarea, i) => {console.log(`${i + 1}   ${tarea.titulo} - ${tarea.estado}`.yellow) });
    console.log("-------------------------\n".yellow);
    };
function agregar(titulo, estado){
    let nuevaTarea = new Tareas(titulo, estado);
    tareas.push(nuevaTarea);
    escribirTareas(tareas)
    return ` Tarea "${titulo}"  agregada correctamente`.green
    };
function buscar(titulo){
    const tarea = tareas.find(tarea => tarea.titulo === titulo)
    return tarea;
    };
function filtrar(estado){
    const tareasFiltradas = tareas.filter(tareas => tareas.estado === estado);
    console.log(`\nLista de tareas => ${estado} \n`.magenta);
    const listaFiltrada = tareasFiltradas.forEach((tarea, i) => {console.log(` ${i + 1}  ${tarea.titulo} - ${tarea.estado}`.magenta)});
    console.log(`\n`);
    return listaFiltrada
}
//exportacion
module.exports ={ listar, agregar, buscar, filtrar}