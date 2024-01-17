

let promesaExitosa = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Algo salio mal');
    }, 4000);
});

promesaExitosa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.log(error);
});