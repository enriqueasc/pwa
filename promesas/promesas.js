

fetch('not-found.html')
    .then( resp => resp.text())
    .then( html => {
        document.querySelector('body').innerHTML = html;
    })
    
   
    .catch( err => {
        console.log('No se ha podido completar la solicitud');
        console.log(err);
    })

        
   