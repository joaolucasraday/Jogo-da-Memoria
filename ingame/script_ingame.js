const dificuldade = Number(localStorage.getItem("dificuldade"));
console.log(dificuldade)

const cartas = [
    {id: 1, nome: "azul"},
    {id: 2, nome: "vermelho"},
    {id: 3, nome: "verde"},
    {id: 4, nome: "rosa"},
    {id: 5, nome: "preto"},
    {id: 6, nome: "amarelo"},
    {id: 7, nome: "roxo"},
    {id: 8, nome: "laranja"}
]

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // índice aleatório entre 0 e i
    const j = Math.floor(Math.random() * (i + 1));
    
    // troca os elementos
    [array[i], array[j]] = [array[j], array[i]];
  }
  
  return array;
}

let cartasEmbaralhadas = shuffle([...cartas]);
console.log(cartasEmbaralhadas);
console.log(cartas);