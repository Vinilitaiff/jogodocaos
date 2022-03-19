//escolhe um ponto aleatoriamente dentro do contexto
const pontoAleatorio = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

//gera um numero aleatorio entre min e max
const numeroAleatorio = (min, max) => {
    return Math.random() * (max - min) + min;
};

//esta função retorna o ponto medio até um vértice
const pontoMedio = (a, b, h, i) => {
    let x = (a + h) / 2
    let y = (b + i) / 2
    return [x, y];
};

function play() {
    //cria um contexto
    let canvas = document.getElementById('canvasid');
    let contexto = canvas.getContext('2d');

    //limpa o contexto
    contexto.clearRect(0, 0, canvas.width, canvas.height);

    //aqui desenhamos os 3 pontos do triagulo
    contexto.fillStyle = "red";
    contexto.fillRect(0, 0, 3, 3);
    contexto.fillRect(500, 0, 3, 3);
    contexto.fillRect(250, 500, 3, 3);

    var x4 = numeroAleatorio(0, 500);
    var y4 = numeroAleatorio(0, 500);

    //define os valores e inicia o processo
    var iteracoes = document.getElementById("iteracoes").value;
    for (let i = 0; i < iteracoes; i++) {
        let rpy = 0
        let rpx = pontoAleatorio([0, 500, 250])
        if (rpx == 0 || rpx == 500) {
            rpy = 0;
        } else {
            rpy = 500;
        };
        var [x4, y4] = pontoMedio(rpx, rpy, x4, y4)
        contexto.fillStyle = "black";
        contexto.fillRect(x4, y4, 1.2, 1.2)
    };
}
