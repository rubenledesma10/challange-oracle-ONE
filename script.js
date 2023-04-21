function encriptar () {
    var texto = document.getElementById("input_texto").value.toLowerCase();
    var texto_cifrado = texto.replace(/e/igm, "enter"); //i es para que afecte tanto mayusculas como minusculas, g es para toda la oracion o linea, m es para que afecte multiples lineas o parrafos
    var texto_cifrado = texto.replace(/o/igm, "ober");
    var texto_cifrado = texto_cifrado.replace(/i/igm, "imes");
    var texto_cifrado = texto_cifrado.replace(/a/igm, "ai");
    var texto_cifrado = texto_cifrado.replace(/u/igm, "ufat"); 

    document.getElementById("imagen_muñeco").style.display = "none";
    document.getElementById("texto_desencriptar").style.display = "none";
    document.getElementById("resultados").innerHTML = texto_cifrado;
    document.getElementById("boton_copiar").style.display = "show";
    document.getElementById("boton_copiar").style.display = "inherit";
}

function desencriptar () {
    var texto = document.getElementById("input_texto").value.toLowerCase();
    var texto_cifrado = texto.replace(/enter/igm, "e"); //i es para que afecte tanto mayusculas como minusculas, g es para toda la oracion o linea, m es para que afecte multiples lineas o parrafos
    var texto_cifrado = texto.replace(/ober/igm, "o");
    var texto_cifrado = texto_cifrado.replace(/imes/igm, "i");
    var texto_cifrado = texto_cifrado.replace(/ai/igm, "a");
    var texto_cifrado = texto_cifrado.replace(/ufat/igm, "u"); 

    document.getElementById("imagen_muñeco").style.display = "none";
    document.getElementById("texto_desencriptar").style.display = "none";
    document.getElementById("resultados").innerHTML = texto_cifrado;
    document.getElementById("boton_copiar").style.display = "show";
    document.getElementById("boton_copiar").style.display = "inherit";
}

function copy () {
    var contenido = document.querySelector("#resultados");
    contenido.select();
    document.execCommand("copy");
    alert("¡Copiado!");
}