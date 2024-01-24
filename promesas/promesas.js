

fetch('https://fakestoreapi.com/products/1')
    .then( res =>res.json() )
    .then( data => {
        if(data){
            return console.log(data);
        }else{
            throw new Error('no existe el producto')
        }
    })
    .catch( err => console.log(err))

        
   