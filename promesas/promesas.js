const sumarLento = (numero)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //resolve(numero +1 );
            reject('error al sumar lento')


        },800);

    })
}

const sumarRapido = (numero)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           resolve(numero +1 );
           //reject('error al sumar rapido')


        },800);

    })
}

// Promise.race compite entre las promesas y devuelve la primera que se resulva

Promise.race( [sumarLento(5), sumarRapido(6)])
.then(respuestas=>{
    console.log(respuestas)
    })
.catch(console.log);



