(() => {

    const sumar = (a: number, b:number): number => {
        return a + b;
    }

    const nombre = (): string => {
        return 'Hola Mundo'
    }

    const obtenerSalario = (): Promise<string> => {

        return new Promise( (resolve, reject) => {
            resolve('Fernando');
        })
    }

    obtenerSalario().then( a => console.log( a.toUpperCase() ) )

})();