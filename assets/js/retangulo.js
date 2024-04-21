// Exemplo de função em javascript chamada por um evento
document.getElementById('calcular_retangulo').addEventListener('click', function (event) {
    event.preventDefault();
    calcularAreaRetangulo();
});

// Função para calcular a área do Retângulo
function calcularAreaRetangulo() {
    let base = parseFloat(document.getElementById('base').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let area = base * altura;
    document.getElementById('area').value = area.toFixed(2);
    document.getElementById('resultado').innerText = `A área do retângulo é ${area.toFixed(2)}`;
}
