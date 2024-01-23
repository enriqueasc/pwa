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



Promise.all([funcionContiempo(1500)])
.then(respuestas=>{
    console.log(respuestas)
    })
.catch(console.log);


