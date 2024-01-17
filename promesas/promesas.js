

let promesaExitosa = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('La operación fue exitosa');
    }, 4000);
});

promesaExitosa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.log(error);
});