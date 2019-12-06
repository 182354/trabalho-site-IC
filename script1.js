/* Java Para o Relogio*/

function relogio() {
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    if (horas<10){
    horas="0"+ horas;

    }
    if (minutos<10){
        minutos="0"+ minutos;

    }
    if (segundos<10){
        segundos="0"+ segundos;

    }
    document.getElementById("relogio").innerHTML=horas+":"+minutos+":"+segundos;

}

window.setInterval("relogio()",1000);



/* Trocar imagem da logo*/


function trocarimagem() {
    document.getElementById("logao").src="capa/LH_HTML.png";


}
function trocarimagem1(){
    document.getElementById("logao").src="capa/LH_HOR.png";
}
function trocarimagem2(){
    document.getElementById("logao").src="capa/LH_JAVA.png"
}

