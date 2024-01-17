

const  cargaDatosDeAPI = (url) =>{
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if(!response.ok ){
                    throw Error(`Error en la solicitud: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(`Error al cargar datos: ${error.message}`);
            });
    });
}

const apiUrl = "https://fakestoreapi.com/products/1";

cargaDatosDeAPI(apiUrl)
    .then((data) => {
        console.log("Datos cargados: ", data);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });


