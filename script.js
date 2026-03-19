console.log("Scripts Carregados");

function facil(){
    localStorage.setItem("dificuldade", 1);
}

function medio(){
    localStorage.setItem("dificuldade", 2);
}

function dificil(){
    localStorage.setItem("dificuldade", 3);
}

console.log("Scripts Carregados");

const bancoDeFotos = [
    '../imagens/foto1.png', '../imagens/foto2.png', '../imagens/foto3.png',
    '../imagens/foto4.png', '../imagens/foto5.png', '../imagens/foto6.png',
    '../imagens/foto7.png', '../imagens/foto8.png'
];

function montarTabuleiro() {
    const mesa = document.querySelector('.mesa');
    if (!mesa) return;

    let dificuldade = Number(localStorage.getItem("dificuldade")) || 1;
    let numPares;

    if (dificuldade === 1) {
        numPares = 4; // 8 cartas
    } else if (dificuldade === 2) {
        numPares = 6; // 12 cartas
    } else {
        numPares = 8; // 16 cartas
    }

    // Criando a lista de fotos (sem embaralhar)
    let fotosDoJogo = bancoDeFotos.slice(0, numPares);
    let cartasFinal = [...fotosDoJogo, ...fotosDoJogo];

    // Apenas gera as DIVs na tela
    cartasFinal.forEach(caminhoFoto => {
        const carta = document.createElement('div');
        carta.classList.add('card');
        // Deixamos o caminho da foto guardado para seu amigo usar depois
        carta.dataset.foto = caminhoFoto; 
        
        mesa.appendChild(carta);
    });
}

window.onload = montarTabuleiro;