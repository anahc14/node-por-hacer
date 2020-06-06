const descripcion = {
    alias: 'd',
    demand: true
}

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', descripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una determinada tarea', descripcion)
    .command('listar', 'Lista las tareas segun completadas o no', completado)
    .help()
    .argv;

module.exports = {
    argv
}