class Carta{
    constructor(naipe, numero) {
        this.naipe = naipe
        this.numero = numero
    }
  }

  // function mostrameu() {
  //   document.getElementById('carta1').style.backgroundImage = ""
  // }
  
  //variavel que guarda a carta de trufo
  var trunfo
  
  var four = []
  
  //inicializa os naipes
  var cartas = []
  
  var numeros = []
  
  //inicializa as maos de cada jogador 
  var p1 = [],  p2 = [],p3 = [], p4 = []
  
  var total = [p1,p2,p3,p4]
  
  function baralho(){
    //escolhe o trunfo
    trunfo = {
      naipe: Math.floor(Math.random() * 4) + 1,
      numero: Math.floor(Math.random() * 10) + 1
    }
    
    //cria todas as cartas
    for (var n = 1; n <= 4; n++)
      for (var i = 1; i <= 10; i++){
        var carta = new Carta(n, i)
        cartas.push(carta)
      }
  
    var indice = cartas.findIndex(cartas => cartas.numero === trunfo.numero && cartas.naipe === trunfo.naipe)
  
    cartas.splice(indice, 1)
  
    var carta = new Carta(trunfo.naipe, trunfo.numero)
    cartas.push(carta)
    
    for (let i = 0; i < 40; i++) 
      numeros.push(i)
  }
  
  function tiraCarta(qtd){
    for(let i = 0; i < qtd; i++){
      // Remove o elemento do array e retorna o valor removido
      const valorRemovido = cartas.splice(Math.floor(Math.random() * cartas.length), 1)[0]
      // console.log(valorRemovido)
      return valorRemovido
    }
  }
  
  function inicio(){
    //da as cartas iniciais
    for(let i = 0; i < 4; i++){
      p1.push(tiraCarta(1))
      p2.push(tiraCarta(1))
      p3.push(tiraCarta(1))
      p4.push(tiraCarta(1))
    }
    console.log("p1: ", p1, "\n", "p2: ", p2, "\n", "p3: ", p3, "\n", "p4: ", p4, "\n")


  }
  
  function darcartas(){
    p1.push(tiraCarta(1))
    p2.push(tiraCarta(1))
    p3.push(tiraCarta(1))
    p4.push(tiraCarta(1))
  }
  
  function play(){
    //escolhe um player para comecar
    let inicio = Math.floor(Math.random() * 4)
    // console.log(inicio)
  
    
    for(let i = inicio; i < 4; i++){
      let removido = total[i].splice(Math.floor(Math.random() * 4), 1)[0]
      // console.log(removido)
      four.push(removido)
    }
  
    for(let i = 0; i < inicio; i++){
      let removido = total[i].splice(Math.floor(Math.random() * 4), 1)[0]
      // console.log(removido)
      four.push(removido)
    }
    // console.log(four)
  }
  
  function compara() {
    let trunfos = []
    let maior
  
    for (let i = 0; i < four.length; i++) {
      if(four[i].naipe === trunfo.naipe)
        trunfos.push(four[i])
    }
  
    if (trunfos.length > 0) {
      // Se houver trunfos, encontra o maior
      maior = trunfos[0];
      for (let i = 1; i < trunfos.length; i++) 
          if (trunfos[i].numero > maior.numero) 
              maior = trunfos[i];
    } else {
      // Se não houver trunfos, encontra a maior carta do naipe da primeira carta
      maior = four[0];
      for (let i = 1; i < four.length; i++) 
          if (four[i].numero > maior.numero) 
              maior = four[i];
    }
  
    console.log("\n",four)
    console.log("\nO maior é: ", maior)
  }
  
  function main(){
    //inicializa o baralho
    baralho()
  
    //da as cartas iniciais
    inicio()
  
    console.log("\no trunfo é: ", trunfo)
  
    //joga a carta de cada jogador
    play()
  
    //compara as cartas jogadas
    compara()
  
    // console.log("p1: ", p1, "\n", "p2: ", p2, "\n", "p3: ", p3, "\n", "p4: ", p4, "\n")
  }
  
  main()


const BACK_CARD = "https://deckofcardsapi.com/static/img/back.png";
