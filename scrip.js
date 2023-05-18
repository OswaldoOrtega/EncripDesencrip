/* 
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
function encriptar()
{
    var texto = document.getElementById("texagregar").value.toLowerCase();//esto de value es para que aunque escriba en mayusculas lo transformara en misnuscilas
    
         //i es para que afecte a mayusculas y minuscilas 
        //g es para toda la linea de oracion
        //m es para que afecte  a multiples parrafos
        var txtcifrado = texto.replace(/e/igm,"enter");
        var txtcifrado = txtcifrado.replace(/i/igm,"imes");
        var txtcifrado = txtcifrado.replace(/a/igm,"ai");
        var txtcifrado = txtcifrado.replace(/o/igm,"ober");
        var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    
        document.getElementById("imagenMuneco").style.display = "none";
        document.getElementById("textimagen").style.display = "none";
        document.getElementById("texto2").innerHTML = txtcifrado;
        document.getElementById("copi").style.display = "show";
        document.getElementById("copi").style.display = "inherit";
       
    
}
function desencriptar()
{
    var texto = document.getElementById("texagregar").value.toLowerCase();//esto de value es para que aunque escriba en mayusculas lo transformara en misnuscilas
    //i es para que afecte a mayusculas y minuscilas 
    //g es para toda la linea de oracion
    //m es para que afecte  a multiples parrafos
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");

    document.getElementById("imagenMuneco").style.display = "none";
    document.getElementById("textimagen").style.display = "none";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("copi").style.display = "show";
    document.getElementById("copi").style.display = "inherit";
}
function copiar()
{
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");// esta es para hacer que copy puede hacer tambien cute de cortar etc
}