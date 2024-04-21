// Exemplo de função em javascript chamada por um evento
document.getElementById('calcular_quadrado').addEventListener('click', function (event) {
    event.preventDefault();
    calcularAreaQuadrado();
});

// Função para calcular a área do Quadrado
function calcularAreaQuadrado() {
    let lado = parseFloat(document.getElementById('lado').value);
    let area = Math.pow(lado, 2);
    document.getElementById('area').value = area.toFixed(2);
    document.getElementById('resultado').innerText = `A área do quadrado é ${area.toFixed(2)}`;
}
