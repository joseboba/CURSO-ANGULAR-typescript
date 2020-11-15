 const imprimrConsola = (constructorClase: Function) => {
    console.log(constructorClase);
 }

@imprimrConsola
 export class Xmen {

    constructor (
        public  nombre: string,
        public  clave: string
    ){}

    imprimir() {
        console.log(`${ this.nombre } - ${ this.clave }`)
    }

 }