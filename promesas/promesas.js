const funcionUno = (mensaje)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Funcion ${mensaje} - 900`);
            //reject('Funcion Uno 900')


        },900);

    })
}

const funcionDos = (mensaje)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Funcion ${mensaje} - 300`);
           //reject('error 2')


        },300);

    })
}

const funcionTres = (mensaje)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Funcion ${mensaje} - 500`);
           //reject('error al sumar rapido')


        },500);

    })
}

const funcionCuatro = (mensaje)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Funcion ${mensaje} - 200`);
           //reject('error al sumar rapido')


        },200);

    })
}


// Promise.race compite entre las promesas y devuelve la primera que se resulva



Promise.all( [funcionTres("3"),funcionUno("1"), funcionCuatro("4"), funcionDos("2")])
.then(respuestas=>{
    console.log(respuestas)
    })
.catch(console.log);



