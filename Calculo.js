/*Valida datos vacíos o inválidos*/



/* Calcula la masa corporal de acuerdo al peso y estatura ingresados*/
function division(Peso,Estatura) {
    number = Peso / (Estatura * Estatura);
    number = Math.round((number + Number.EPSILON)*100)/100;
    document.getElementById("Masa_Total")[0].value = number;
}

/*Determina la condición de la persona de acuerdo al cálculo de masa corporal obtenido*/
function indice(number) {
 var text, valpad, textmov = toString();

    if (number < 18.5) {
        textmov = 'ESTÁS EN BAJO PESO';
        text = 'Puede haber riesgos de salud asociados a un IMC bajo, tales como anemia, osteoporosis, un sistema inmune debilitado y problemas de fertilidad..';
        valpad = 5;
        document.getElementById("flechaAbajo").style.paddingLeft = valpad + "%";
    } else if (number >= 18.5 && number <= 24.9) {
        textmov = 'ESTÁS CON UN PESO NORMAL';
        text = 'Te encuentras en el intervalo de peso normal, lo cual es fantástico. Estudios demuestran que tener un IMC normal puede reducir el riesgo de padecer enfermedades como diabetes tipo 2, enfermedades del corazón, ictus y algunos tipos de cáncer.';
        valpad = 15;
        document.getElementById("flechaAbajo").style.paddingLeft = valpad + "%";
    } else if (number >= 25 && number <= 29.9) {
        textmov = 'ESTÁS EN SOBREPESO';
        text = 'Estudios indican que un IMC por encima del intervalo normal puede incrementar tu riesgo de padecer enfermedades como diabetes tipo 2, enfermedades del corazón, ictus y algunos tipos de cáncer.';
        valpad = 30;
        document.getElementById("flechaAbajo").style.paddingLeft = valpad + "%";
    } else if (number >= 30) {
        textmov = 'ESTÁS EN OBESIDAD';
        text = 'Estudios indican que tener un IMC en este intervalo incrementará significativamente tu riesgo de padecer enfermedades como diabetes tipo 2, enfermedades del corazón, ictus y algunos tipos de cáncer.';
        valpad = 40;
        document.getElementById("flechaAbajo").style.paddingLeft = valpad + "%";
    }
   mensaje = textmov + "\n" + text;
   document.getElementById("Description")[0].value = mensaje;
}

function moverFlecha() {
    
}

function resetCalculadora() {
    document.getElementById("Calculo").reset();
    document.getElementById("number").reset();
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function dibujarEscala() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    var img1 = new  Image();
    img1.src = "imagenes/arrowabajo.PNG";
    img.src = "imagenes/barra.PNG";
    img.onload = function () {
        ctx.drawImage(img, 100, 50);
    }
    img1.onload = function () {
        ctx.drawImage(img1, 100, 40);
    }
}



