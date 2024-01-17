const ejecutarConTimeout = (ms)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Operación completada depués de ${ms} milisegundos`);
        }, ms);
    })
}


const tiempoLimite = 5000;

ejecutarConTimeout(tiempoLimite)
    .then(resultado =>{
        console.log(resultado);
    } )
    .catch(error =>{
        console.log(error);
    })

