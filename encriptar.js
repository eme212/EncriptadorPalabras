function encriptar() {
    // defino la variale que va a recibir la palabra una vez que se ahga click en el boton y tolowercase es para que todo se reciba en minusculas
    var fraseIngresada = document.getElementById(textoAEncriptar).value.toLowercase();

    //defino la varable qque va a realizar la encriptación, con el nombrevariable.replace (/letra/ img,  "poner reemplazo") se reemplaza puntualmente la letra a modificar
    //img se coloca por
    //i = para que tome letras mayusculas y minusculas
    //m= tome toda la linea de la oracion
    //g= tome en cuenta multiples lineas
    var encriptacion = fraseIngresada.replace(/e/img, "enter");
    var encriptacion = encriptacion.replace(/i/img, "imes");
    var encriptacion = encriptacion.replace(/a/img, "ai");
    var encriptacion = encriptacion.replace(/o/img, "ober");
    var encriptacion = encriptacion.replace(/u/img, "ufat");

    //defino variable donde voy a retornar el tecto encriptado
    document.getElementById(devolucionTexto).innerHTML =;


}
