
// modulos para hacer las peticiones//
let XMLHttpRequest = require ('xmlhttprequest').XMLHttpRequest;
//funcion principal//
const fetchData = (url_api) => {
    return new Promise ((resolve, reject) => {
        //instanciamos la conexion
        const xhttp = new XMLHttpRequest (); 
        //abrir una conexion con el metodo, la ruta y su es asincrono//
        xhttp.open('GET', url_api, true);
        //validacion del llamado
        xhttp.onreadystatechange = (() => {
            //comparamos el 4 porque eso indica que es completo la peticion//
            if(xhttp.readyState === 4){
                //verificamos que el status este en 200, 200 es que es correcto
                xhttp.status === 200
                //asi esta en 200
                    ? resolve(json.parse(xhttp.responseText))
                    // asi no esta en 200
                    : reject(new Error('Error',url_api) )
        }
    });
    //por ultimo enviamos la peticion
    xhttp.send();
    });
}

//exportamos la funcion
module.exports = fetchData;