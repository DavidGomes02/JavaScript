function preencherTabuleiro() {
    var tabuleiro = [];

    // Loop para percorrer as linhas
    for (var linha = 0; linha < 8; linha++) {
        var novaLinha = [];

        // Loop para percorrer as colunas
        for (var coluna = 0; coluna < 8; coluna++) {
            // Calcula o valor da casa atual, dobrando o valor a cada casa
            var valor = Math.pow(2, linha + coluna);
            novaLinha.push(valor);
        }

        // Adiciona a linha ao tabuleiro
        tabuleiro.push(novaLinha);
    }

    // Retorna o tabuleiro preenchido
    return tabuleiro;
}

// Função para exibir o tabuleiro no console
function exibirTabuleiro(tabuleiro) {
    for (var linha = 0; linha < tabuleiro.length; linha++) {
        console.log(tabuleiro[linha].join(" "));
    }
}

// Chama a função para preencher o tabuleiro
var meuTabuleiro = preencherTabuleiro();

// Chama a função para exibir o tabuleiro no console
exibirTabuleiro(meuTabuleiro);