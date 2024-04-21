// Exemplo de função em javascript chamada por um evento
document.getElementById('calcular_cubo').addEventListener('click', function (event) {
    event.preventDefault();
    calcularAreaCubo();
});

// Função para calcular a área do Cubo
function calcularAreaCubo() {
    let lado = parseFloat(document.getElementById('lado').value);
    let area = 6 * Math.pow(lado, 2);
    document.getElementById('area').value = area.toFixed(2);
    document.getElementById('resultado').innerText = `A área do cubo é ${area.toFixed(2)}`;
}