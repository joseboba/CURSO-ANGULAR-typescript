(() => {
 
    const getEdad = () => {
        return 100 + 100 + 300;
    }

    const nombre = 'Jose Enrique';
    const apellido = 'Bobadilla';
    const edad = 19;

    const salida = `${ nombre }
${ apellido }
${ getEdad() }`;

    console.log(salida)

})()
