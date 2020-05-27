/*Valida datos vacíos o inválidos*/



/* Calcula la masa corporal de acuerdo al peso y estatura ingresados*/
function division(Peso,Estatura) {
    var Peso = document.getElementById("Peso").value;
    var Estatura = document.getElementById("Estatura").value;
    number = Peso / (Estatura * Estatura);
    number = Math.round((number + Number.EPSILON)*100)/100;
    document.getElementById("Masa").value = number;
    indice(number);
}

/*Determina la condición de la persona de acuerdo al cálculo de masa corporal obtenido*/
function indice(number) {
 var text, valpad, textmov = toString();

    if (number < 18.5) {
        textmov = 'ESTÁS EN BAJO PESO';
        text = 'Puede haber riesgos de salud asociados a un IMC bajo, tales como anemia, osteoporosis, un sistema inmune debilitado y problemas de fertilidad..';
        valpad = 80;
        /*document.getElementById("flechaAbajo").style.paddingLeft = valpad + "%";*/
        flecha = calcularEscala(valpad);
    } else if (number >= 18.5 && number <= 24.9) {
        textmov = 'ESTÁS CON UN PESO NORMAL';
        text = 'Te encuentras en el intervalo de peso normal, lo cual es fantástico. Estudios demuestran que tener un IMC normal puede reducir el riesgo de padecer enfermedades como diabetes tipo 2, enfermedades del corazón, ictus y algunos tipos de cáncer.';
        valpad = 90;
        /*document.getElementById("flechaAbajo").style.paddingLeft = valpad + "%"; */
        flecha = calcularEscala(valpad);
    } else if (number >= 25 && number <= 29.9) {
        textmov = 'ESTÁS EN SOBREPESO';
        text = 'Estudios indican que un IMC por encima del intervalo normal puede incrementar tu riesgo de padecer enfermedades como diabetes tipo 2, enfermedades del corazón, ictus y algunos tipos de cáncer.';
        valpad = 180;
        /*document.getElementById("flechaAbajo").style.paddingLeft = valpad + "%";*/
        flecha = calcularEscala(valpad);
    } else if (number >= 30) {
        textmov = 'ESTÁS EN OBESIDAD';
        text = 'Estudios indican que tener un IMC en este intervalo incrementará significativamente tu riesgo de padecer enfermedades como diabetes tipo 2, enfermedades del corazón, ictus y algunos tipos de cáncer.';
        valpad = 260;
        /*document.getElementById("flechaAbajo").style.paddingLeft = valpad + "%";*/
        flecha = calcularEscala(valpad);
    }
   mensaje = textmov + "\n" + text;
   document.getElementById("Descripcion").value = mensaje;
}


function resetCalculadora() {
    document.getElementById("Calculo").reset();
    document.getElementById("Resultados").reset();
    var canvas = document.getElementById("MyCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function dibujarEscala() {
    var canvas = document.getElementById("MyCanvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    var img1 = new  Image();
    img1.src = "imagenes/arrowabajo.PNG";
    img.src = "imagenes/barra.PNG";
    img.onload = function () {
        ctx.drawImage(img, 45, 38);
    }
    img1.onload = function () {
        ctx.drawImage(img1, 45, 12);
    }
}

function calcularEscala(valpad) {
    var canvas = document.getElementById("MyCanvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    var img1 = new Image();
    img.src = "imagenes/barra.PNG";
    img1.src = "imagenes/arrowabajo.PNG";
    canvas.width = canvas.width;
    img.onload = function () {
        ctx.drawImage(img, 45, 38);
    }
        ctx.drawImage(img1, valpad + 45, 12);
}

