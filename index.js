// Definir a data final da contagem regressiva (Ano Novo de 2024)
const dataAlvo = new Date('December 31, 2024 23:59:59').getTime();

function atualizarContagem() {
    // Obter o horário atual
    const agora = new Date().getTime();
    
    // Calcular a distância entre o horário atual e a data-alvo
    const distancia = dataAlvo - agora;

    // Cálculos para dias, horas, minutos e segundos
    // Dias: dividir o total da distância por milissegundos em um dia
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    
    // Horas: pegar o restante dos milissegundos após calcular os dias, e dividir por milissegundos em uma hora
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    // Minutos: pegar o restante dos milissegundos após calcular as horas, e dividir por milissegundos em um minuto
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    
    // Segundos: pegar o restante dos milissegundos após calcular os minutos e dividir por milissegundos em um segundo
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Exibir os valores calculados de dias, horas, minutos e segundos nos elementos HTML
    document.getElementById('dias').innerHTML = dias;
    document.getElementById('horas').innerHTML = horas;
    document.getElementById('minutos').innerHTML = minutos;
    document.getElementById('segundos').innerHTML = segundos;

    // Verificar se a contagem regressiva terminou (distância é menor que zero)
    if (distancia < 0) {
        // Parar a contagem regressiva
        clearInterval(intervaloContagem);
        
        // Exibir uma mensagem de contagem encerrada
        document.querySelector('.container-contagem').innerHTML = "<h1>Contagem encerrada!</h1>";
    }
}

function iniciarContagem() {
    // Mostrar a contagem regressiva e a descrição na tela
    document.getElementById('container-contagem').style.display = 'flex';
    document.getElementById('descricao-contagem').style.display = 'block';

    // Iniciar o intervalo que atualizará a contagem regressiva a cada segundo
    const intervaloContagem = setInterval(atualizarContagem, 1000);
}


