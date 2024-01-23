const esperarNVeces = (veces)=>{
    return new Promise((resolve, reject)=>{

        let espera = 0;
        
        for(let i = 1; i <= veces; i++){
            
            espera = i * 1000;

            console.log(i)

            setTimeout(()=>{

                console.log("espera ", espera)
            
                if(i  === veces){
                    resolve(`¡He esperado ${veces} veces!`)
                }
    
            },espera);

            console.log(typeof espera)
        
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




