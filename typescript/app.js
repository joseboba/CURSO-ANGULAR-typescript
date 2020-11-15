"use strict";
(() => {
    const sumar = (a, b) => {
        return a + b;
    };
    const nombre = () => {
        return 'Hola Mundo';
    };
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve('Fernando');
        });
    };
    obtenerSalario().then(a => console.log(a.toUpperCase()));
})();
