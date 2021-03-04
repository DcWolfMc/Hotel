/*function fontIncrease(){
    fontSize +=modificador;
    paragrafo.style.fontSize = fontSize+"%";
    titulosH2.style.fontSize = fontSize+"%";
}
function fontDecrease(){
    fontSize -=modificador;
    paragrafo.style.fontSize = fontSize+"%";
    titulosH2.style.fontSize = fontSize+"%";
}*/
var paragrafo =document.querySelector(".base");
var fontSize = 100;
var modificador = 10;
var aMais = document.getElementById("aMais").addEventListener("click" , function(){
    fontSize +=modificador;
    paragrafo.style.fontSize = fontSize+"%"
});
var aMenos = document.getElementById("aMenos").addEventListener("click" , function(){
    fontSize -=modificador;
    paragrafo.style.fontSize = fontSize+"%";
});
