// Definir a data final da contagem regressiva
const dataAlvo = new Date('December 31, 2024 23:59:59').getTime();

function atualizarContagem() {
    const agora = new Date().getTime();
    const distancia = dataAlvo - agora;

    // Cálculos para dias, horas, minutos e segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Exibir resultados nos elementos HTML
    document.getElementById('dias').innerHTML = dias;
    document.getElementById('horas').innerHTML = horas;
    document.getElementById('minutos').innerHTML = minutos;
    document.getElementById('segundos').innerHTML = segundos;

    // Se a contagem terminar, exibir uma mensagem
    if (distancia < 0) {
        clearInterval(intervaloContagem);
        document.querySelector('.container-contagem').innerHTML = "<h1>Contagem encerrada!</h1>";
    }
}

// Atualizar a contagem regressiva a cada segundo
const intervaloContagem = setInterval(atualizarContagem, 1000);
