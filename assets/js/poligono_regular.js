// Exemplo de função em javascript chamada por um evento
document.getElementById('calcular_poligono_regular').addEventListener('click', function (event) {
    event.preventDefault();
    calcularAreaPoligonoRegular();
});

// Função para calcular a área do Polígono Regular
function calcularAreaPoligonoRegular() {
    let nLados = parseInt(document.getElementById('selecionar_poligono_regular').value);
    let lado = parseFloat(document.getElementById('lado').value);
    let apotema = lado / (2 * Math.tan(Math.PI/nLados));
    let perimetro = nLados * lado;
    let area = (apotema * perimetro) / 2;
    document.getElementById('area').value = area.toFixed(2);
    document.getElementById('resultado').innerText = `A área desse polígono é ${area.toFixed(2)}`;
}
