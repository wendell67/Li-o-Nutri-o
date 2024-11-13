var titulo = document.querySelector('.titulo');
titulo.textContent = "Wendel Nutrição";

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < 5; i++) {
    console.log(pacientes[i])

    var tdPeso = pacientes[i].querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = pacientes[i].querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = pacientes[i].querySelector('.info-imc');

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(peso);

    if (peso < 0 || peso > 600) {
        tdImc.textContent = 'Peso inválido';
        pesoValido = false;
        pacientes[i].classList.add('dado-invalido');
    }

    if (altura < 0 || altura > 2.80) {
        tdImc.textContent = 'Altura inválida';
        alturaValida = false;
        pacientes[i].classList.add('dado-invalido');
    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
  if (peso > 0 && peso < 600){
    return true;
  } else {
    return false;
  }
}

function validaAltura(peso){
  if (altura > 0 && altura < 2.80){
    return true;
  } else {
    return false;
  }
}