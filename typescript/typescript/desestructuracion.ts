(() => {

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    }

    const extraer = ({ nombre, poder }: any) => {
        // const { nombre, poder } = avenger;

        console.log( nombre );
        console.log( poder );
    }

    // extraer(avenger)

    const avengers: string[] = [ 'Thor', 'Ironman', 'Spiderman' ]
    const [ Thor, Ironman, Spiderman ] = avengers;

    const extraerArr = ( [ Thor, Ironman, Spiderman ]: string[] ) => {
        
        console.log(Thor)
        console.log(Ironman)
        console.log(Spiderman)

    }
    
    extraerArr( avengers );

})();