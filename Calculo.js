/**
 * Descripción: Calcula la masa corporal de acuerdo al peso y estatura ingresados
 * @method Nombre de la función: division
 * @param Parámetro A: Peso
 * @param Parámetro B: Estatura
 * @return Valor que retorna: El índice de la masa corporal
 */
function division(Peso,Estatura) {
    if (Peso === "" || isNaN(Peso) || Peso.length < 2) {
        alert("El Peso es requerido: no lo has ingresado o el valor no es correcto");
        document.getElementById("Peso").value="";
    }
    else if (Estatura === "" || isNaN(Estatura) || Estatura.length < 3) {
        alert("La Estatura es requerida: no las ha ingresado o el valor no es correcto");
        document.getElementById("Estatura").value="";
    }
    else {
        number = Peso / (Estatura * Estatura);
        number = Math.round((number + Number.EPSILON) * 100) / 100;
        document.getElementById("Masa").value = number;
        indice(number);
    }
}

/**
 * Descripción: Determina la condición de la persona de acuerdo al cálculo de masa corporal obtenido
 * @method Nombre de la función: indice
 * @param Parámetro: number
 * @return Valor que retorna: Descripción relacionada con el IMC obtenido en la función division
 */
function indice(number) {
 var text, valpad, textmov = toString();

    if (number < 18.5) {
        textmov = 'ESTÁS EN BAJO PESO';
        text = 'Puede haber riesgos de salud asociados a un IMC bajo, tales como anemia, osteoporosis, un sistema inmune debilitado y problemas de fertilidad..';
        valpad = 30;
        flecha = calcularEscala(valpad);
    } else if (number >= 18.5 && number <= 24.9) {
        textmov = 'ESTÁS CON UN PESO NORMAL';
        text = 'Te encuentras en el intervalo de peso normal, lo cual es fantástico. Estudios demuestran que tener un IMC normal puede reducir el riesgo de padecer enfermedades como diabetes tipo 2, enfermedades del corazón, ictus y algunos tipos de cáncer.';
        valpad = 90;
        flecha = calcularEscala(valpad);
    } else if (number >= 25 && number <= 29.9) {
        textmov = 'ESTÁS EN SOBREPESO';
        text = 'Estudios indican que un IMC por encima del intervalo normal puede incrementar tu riesgo de padecer enfermedades como diabetes tipo 2, enfermedades del corazón, ictus y algunos tipos de cáncer.';
        valpad = 180;
        flecha = calcularEscala(valpad);
    } else if (number >= 30) {
        textmov = 'ESTÁS EN OBESIDAD';
        text = 'Estudios indican que tener un IMC en este intervalo incrementará significativamente tu riesgo de padecer enfermedades como diabetes tipo 2, enfermedades del corazón, ictus y algunos tipos de cáncer.';
        valpad = 260;
        flecha = calcularEscala(valpad);
    }
   mensaje = textmov + "\n" + text;
   document.getElementById("Comentario").value = mensaje;
}

/**
 * Descripción: Dibuja el canvas cuando carga la página
 * @method Nombre de la función: dibujarEscala
 * @param Parámetro A: none
 * @param Parámetro B: none
 * @return Valor que retorna: none
 */
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

/**
 * Descripción: Calculada la masa corporal, determina en donde debe posicionarse la flecha para indicar en el canvas el peso dentro de la escala
 * @method Nombre de la función: calcularEscala
 * @param Parámetro A: valpad
 * @return Valor que retorna: none
 */
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
    img1.onload = function() {
        ctx.drawImage(img1, valpad + 45, 12);
    }
}

/**
 * Descripción: Blanquea los campos para volver a calcular la masa corporal
 * @method Nombre de la función: resetCalculadora
 * @param Parámetro A: none
 * @return Valor que retorna: none
 */
function resetCalculadora() {
    document.getElementById("Peso").value="";
    document.getElementById("Estatura").value="";
    document.getElementById("Masa").value="";
    document.getElementById("Comentario").value="";
   dibujarEscala();
   var canvas = document.getElementById("MyCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
}
