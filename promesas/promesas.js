const funcionContiempo = (tiempo)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            
            if(tiempo >= 1500){
                reject('se ha agotado el tiempo.')
            }else{
                resolve('Promesa resulta correctamente en menos de 1.5 segundos ')
            }
            
            

        },tiempo);

    })
}

funcionContiempo(1400)
    .then(resultado =>{
        console.log(resultado);
    } )
    .catch(error =>{
        console.log(error);
    })




