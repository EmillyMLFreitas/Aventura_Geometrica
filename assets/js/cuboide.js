// Exemplo de função em javascript chamada por um evento
document.getElementById('calcular_cuboide').addEventListener('click', function (event) {
    event.preventDefault();
    calcularAreaCuboide();
});

// Função para calcular a área do Cubóide
function calcularAreaCuboide() {
    let comprimento = parseFloat(document.getElementById('comprimento').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let largura = parseFloat(document.getElementById('largura').value);
    let area = 2 * (comprimento * largura + comprimento * altura + largura * altura); 
    document.getElementById('area').value = area.toFixed(2);
    document.getElementById('resultado').innerText = `A área do cubóide é ${area.toFixed(2)}`;
}

