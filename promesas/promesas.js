const funcionContiempo = (tiempo)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            
            if(tiempo > 1500){
                reject('error al pasar dato')
            }else{
                resolve('dato pasado correctamente')
            }
            
            

        },tiempo);

    })
}



Promise.all([funcionContiempo(2500)])
.then(respuestas=>{
    console.log(respuestas)
    })
.catch(console.log);



