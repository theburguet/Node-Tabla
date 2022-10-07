const argv =require('yargs')
    .option('b',{
        alias: 'base',
        type:'number',
        demandOption: true,
        describe: 'La base de la tabla de multiplicar'

    })
    .option('l',{
        alias: 'listar',
        type:'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'

    })
    .option('h',{
        alias: 'hasta',
        type:'number',
        demandOption: true,
        defaul:10,
        describe: 'Elige el maximo de la tabla'

    })
    .check((argv,options)=>{
        console.log('yargs',argv)
        if(isNaN(argv.b)){
            throw 'Labase tiene que ser un numero';
        }
        return true;
    })

    .argv; 
module.exports = argv;