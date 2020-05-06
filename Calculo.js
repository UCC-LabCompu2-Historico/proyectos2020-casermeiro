
function division(Peso,Estatura) {
  number = Peso / (Estatura * Estatura);
  number = Math.round((number + Number.EPSILON)*100)/100;
    var texto = mensaje(number);
    return number + "\n" + texto;
}

function mensaje(number) {
 var pLeft, text, paddin, valpad, textmov = toString();

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
   return mensaje;
}

function inicio(){
    document.getElementById("limpiar").addEventListener('click',limpiar);
}



