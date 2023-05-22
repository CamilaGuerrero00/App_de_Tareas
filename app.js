//requires
const colors = require('colors');
const argv = require('process').argv;
const funcionesTareas = require('./funcionesDeTareas')
const comando = argv[2];

switch (comando){
    //en caso de no recibir un comando
    case  undefined :
        console.log("Atención - Tienes que pasar una acción. Las acciones disponibles son :\nlistar\nagregar\nfiltrar ".cyan);
    break;
    //este caso presenta una lista completa de tareas
    case  "listar":
        funcionesTareas.listar()
    break;
    //este caso permite añadir una tarea
    case "agregar":
        let titulo = argv[3];
        let estado = argv[4] || "pendiente";
        //en caso de no recibir tareas o agregar una existente
        if (titulo === undefined) {
            console.log("ERROR: Titulo requerido".red);
            break;
        }
        if(funcionesTareas.buscar(titulo)){
            console.log("ERROR: tarea ya existente".red)
            break;
        }
        let respuesta = funcionesTareas.agregar(titulo, estado)
        console.log(respuesta)
    break;
    //este caso muestra solo las tareas que pida en filtro
    case "filtrar":
        let filtro = argv[3];
        //en caso de no recibir filtro o que este no sea valido
        if (filtro === undefined) {
            console.log("ERROR: filtro requerido".red);
            break; 
        }
        let estados = ["pendiente", "en proceso", "terminada"];
        if(!estados.includes(filtro)){
            console.log("Error: filtro invalido".red)
            break;
        }
          funcionesTareas.filtrar(filtro)
    break;
    //en caso de que el comando no exista
    default :
        console.log("No entiendo qué quieres hacer. Las acciones disponibles son :\nlistar\nagregar\nfiltrar ".cyan);
}
