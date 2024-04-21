// Exemplo de função em javascript chamada por um evento
document.getElementById('calcular_esfera').addEventListener('click', function (event) {
    event.preventDefault();
    calcularAreaEsfera();
});

// Função para calcular a área da Esfera
function calcularAreaEsfera() {
    let raio = parseFloat(document.getElementById('raio').value);
    let area = 4 * Math.PI * Math.pow(raio, 2);
    document.getElementById('area').value = area.toFixed(2);
    document.getElementById('resultado').innerText = `A área da esfera é ${area.toFixed(2)}`;
}
