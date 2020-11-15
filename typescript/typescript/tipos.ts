(() => {
 
    let mensaje:string = 'Hola';
    let numero:number  = 123;
    let booleano: boolean = true;
    let hoy: Date = new Date();
    
    let cualquiercosa:any;

    cualquiercosa = mensaje; 
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;

    let spiderman = {
        nombre: 'Peter',
        edad: 30
    }

    spiderman = {
        nombre: 'Juan',
        edad: 100
    }

    console.log(cualquiercosa);
    console.log(spiderman);

})()
