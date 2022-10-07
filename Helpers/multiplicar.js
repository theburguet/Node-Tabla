
const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base = 5,listar=false,hasta=10) => {

        try{
        
        let salida= '';
    
        for(let i = 1; i<=hasta; i++){
        salida += (`${base} x ${ i } = ${base*i}\n`); //+= es para concatenar / un salto de linea
        }
        if(listar){
        console.log('================================'.rainbow);
        console.log('        Tabla del'.green, base);
        console.log('================================'.rainbow);
        console.log(salida);
        }
    

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt creada`;}
        catch(err){
            throw err;
        }}





    /*
return new Promise((resolve,reject)=>{
    console.log('================================');
    console.log('        Tabla del', base);
    console.log('================================');
    
    
    let salida= '';
    
    for(let i = 1; i<=10; i++){
        salida += (`${base} x ${ i } = ${base*i}\n`); //+= espara concatenar / un salto de linea
    }
    
    console.log(salida);
    
    fs.writeFileSync( `tabla-${base}.txt`, salida);
    
    resolve (`tabla-${base}.txt creada`);
    
    })}*/

module.exports= {
    crearArchivo
}