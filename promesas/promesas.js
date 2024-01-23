const esperarNVeces = (veces)=>{
    return new Promise((resolve, reject)=>{


        for(let i = 1; i <= veces; i++){
            
            let espera = i * 1000;

            console.log(i)

            setTimeout(()=>{

                console.log(espera)
            
                if(i  === veces){
                    resolve(`¡He esperado ${veces} veces!`)
                }
    
            },espera);

            console.log(espera)
            



        }



       

    })
}

esperarNVeces(3)
    .then(resultado =>{
        console.log(resultado);
    } )
    .catch(error =>{
        console.log(error);
    })




