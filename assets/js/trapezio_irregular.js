// Exemplo de função em javascript chamada por um evento
document.getElementById('calcular_trapezio_irregular').addEventListener('click', function (event) {
    event.preventDefault();
    calcularAreaTrapezioIrregular();
});

// Função para calcular a área do Trapézio Irregular
function calcularAreaTrapezioIrregular() {
    let baseMaior = parseFloat(document.getElementById('baseMaior').value);
    let baseMenor = parseFloat(document.getElementById('baseMenor').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let area = (baseMaior + baseMenor) * altura / 2; 
    document.getElementById('area').value = area.toFixed(2);
    document.getElementById('resultado').innerText = `A área do trapézio é ${area.toFixed(2)}`;
}