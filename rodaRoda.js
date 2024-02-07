// Lista de palavras e suas respectivas dicas
const palavras = [
    [['f','l','o','r','e','s','t','a'], ['Árvores']],
    [['t','e','l','e','f','o','n','e'], ['Ligações']],
    [['l','u','a'], ['Satélite']],
    [['m','o','n','t','a','n','h','a'], ['Pico']],
    [['b','a','n','a','n','a'], ['Amarelo']],
    [['c','a','n','e','t','a'], ['Escrever']],
    [['g','i','r','a','f','a'], ['Pescoço']],
    [['f','o','g','o'], ['Queimar']],
    [['e','s','p','e','l','h','o'], ['Reflexo']],
    [['p','i','a','n','o'], ['Teclas']],
    [['t','i','g','r','e'], ['Listras']],
    [['m','a','ç','ã'], ['Fruta']],
    [['r','e','l','o','g','i','o'], ['Tempo']],
    [['e','l','e','f','a','n','t','e'], ['Tromba']],
    [['e','s','c','o','l','a'], ['Educação']],
    [['l','á','p','i','s'], ['Grafite']],
    [['d','i','n','h','e','i','r','o'], ['Moeda']],
    [['c','a','d','e','i','r','a'], ['Assento']],
    [['s','o','l'], ['Brilho']],
    [['b','a','r','c','o'], ['Navegar']],
    [['á','g','u','a'], ['Beber']],
    [['c','a','c','h','e','c','o','l'], ['Aquecer']],
    [['p','a','p','e','l'], ['Escrita']],
    [['c','o','r','a','ç','ã','o'], ['Amor']],
    
    
  ];
  //// Variáveis (vetores) para armazenar o estado do jogo
  let palavraAtual = [];
  let palavraAdivinhada = [];
  let letrasErradas = [];
  let dicas = [];
  // Função para escolher uma palavra aleatória e iniciar o jogo
  function escolherPalavra() {
    const palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
    palavraAtual = palavraEscolhida[0];
    dicas = palavraEscolhida[1];
    palavraAdivinhada = Array(palavraAtual.length).fill('_');
    letrasErradas = [];
    atualizarTela();
  }
  // Função para atualizar a exibição na tela (palavra a ser adivinhada e dica)

  function atualizarTela() {
    document.getElementById('word-display').textContent = palavraAdivinhada.join(' ');
    document.getElementById('hint').textContent = dicas[Math.floor(Math.random() * dicas.length)];
  }
  // Função chamada quando o jogador faz uma tentativa de adivinhar uma letra

  function guessLetter() {
    const inputElement = document.getElementById('guess-input');
    const letra = inputElement.value.toLowerCase();
  // Verifica se a entrada é uma letra válida
    if (letra.length !== 1 || !/[a-z]/.test(letra)) {
      alert("Digite uma letra válida!");
      return;
    }
  
    let acertou = false;
    // Percorre a palavra atual para verificar se a letra está presente

    for (let i = 0; i < palavraAtual.length; i++) {
      if (palavraAtual[i] === letra) {
        palavraAdivinhada[i] = letra;
        acertou = true;
      }
    }
    // Se a letra não foi encontrada, adiciona à lista de letras erradas

    if (!acertou) {
      letrasErradas.push(letra);
    }
  
    inputElement.value = ''; // Limpa o campo de entrada
    atualizarTela();
    // Verifica se o jogador adivinhou a palavra ou excedeu o número máximo de tentativas

    if (palavraAdivinhada.join('') === palavraAtual.join('')) {
      alert("Parabéns! Você adivinhou a palavra!");
      escolherPalavra();
    } else if (letrasErradas.length === 6) {
      alert("Você errou 6 vezes. Fim de jogo!");
      escolherPalavra();
    }
  }
  // Função para iniciar o jogo chamando escolherPalavra()

  function startGame() {
    escolherPalavra();
  }
  // Inicia o jogo ao carregar a página

  startGame();