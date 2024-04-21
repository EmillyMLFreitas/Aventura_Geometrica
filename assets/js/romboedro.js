// Exemplo de função em javascript chamada por um evento
document.getElementById('calcular_romboedro').addEventListener('click', function (event) {
    event.preventDefault();
    calcularAreaRomboedro();
});

// Função para calcular a área do Romboedro
function calcularAreaRomboedro() {
    let diagonalMaior = parseFloat(document.getElementById('diagonalMaior').value);
    let diagonalMenor = parseFloat(document.getElementById('diagonalMenor').value);
    let areaFace = (diagonalMaior * diagonalMenor) / 2;
    let area = areaFace * 6;
    document.getElementById('area').value = area.toFixed(2);
    document.getElementById('resultado').innerText = `A área do rombroedo é ${area.toFixed(2)}`;
}
