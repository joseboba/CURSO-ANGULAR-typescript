(() => {

    const retirarDinero = ( montoRetirar: number ): Promise<number> => {

        let dineroActual = 1000;
        return new Promise((resolve, reject) => {

            if( montoRetirar > dineroActual ){
                reject('No puede retirar ese dinero')
            }else{
                dineroActual -= montoRetirar;
                resolve(dineroActual)
            }

        });

    }
    
    retirarDinero(500)
        .then( m => console.log(`Se ha retirado el dinero, este es su dinero actualmente: ${ m }`))
        .catch( e => console.log(e))

})();