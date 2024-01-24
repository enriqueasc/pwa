

fetch('https://fakestoreapi.com/products/s')
    .then( res =>{

        res.json();

        if(res.ok){
            return console.log(res);
        }else{
            throw new Error('no existe el producto')
        }

    })
    .then( data => console.log(data))
    
   
    .catch( err => console.log(err))

        
   