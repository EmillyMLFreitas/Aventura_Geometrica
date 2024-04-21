// Exemplo de função em javascript chamada por um evento
document.getElementById('calcular_circulo').addEventListener('click', function (event) {
    event.preventDefault();
    calcularAreaCirculo();
});

// Função para calcular a área do Círculo
function calcularAreaCirculo() {
    let raio = parseFloat(document.getElementById('raio').value);
    let area = Math.PI * Math.pow(raio, 2);
    document.getElementById('area').value = area.toFixed(2);
    document.getElementById('resultado').innerText = `A área do círculo é ${area.toFixed(2)}`;
}