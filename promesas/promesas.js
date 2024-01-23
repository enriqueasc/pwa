

fetch('../img/uno.png')
    .then(res => res.blob())  // Obtener la imagen como un objeto Blob
    .then(blob => {

        console.log('Imagen Blob:', blob);
        // Crear una URL para la imagen Blob
        const imgUrl = URL.createObjectURL(blob);

        // Crear la etiqueta de la imagen y establecer el atributo src
        const imgElement = document.createElement('img');
        imgElement.src = imgUrl;

        // Insertar la imagen en el cuerpo del documento
        document.body.appendChild(imgElement);
    })
    .catch(error => {
        console.error('Error al cargar la imagen:', error);
    });


