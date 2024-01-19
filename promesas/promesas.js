const sumarLento = (numero)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //resolve(numero +1 );
            reject('error al pasar dato')

        },800);

    })
}

const sumarRapido = (numero)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(numero +1 );

        },300);

    })
}


Promise.all(sumarRapido(6), [sumarLento(5)])
.then(respuestas=>{
    console.log(respuestas)
    })
.catch(console.log);



