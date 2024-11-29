  async function createDeck() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const data = await response.json();
    return data.deck_id;
  }

  async function drawAndFilterDeck(deckId) {
      // Desenha todas as 52 cartas do baralho
      const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`);
      const data = await response.json();

      // Filtra as cartas removendo 8, 9 e 10
      const filteredCards = data.cards.filter(card => !['8', '9', '10'].includes(card.value));
      return filteredCards;
  }

  async function drawCards(deckId, count) {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`);
    const data = await response.json();

    // Verifique a resposta para garantir que as cartas foram retornadas corretamente
    console.log('Cartas recebidas:', data.cards);

    return data.cards;
}

async function inicio() {
    const deckId = await createDeck();
    // console.log(deckId)
    const cards = await drawCards(deckId, 16); // 4 jogadores x 4 cartas = 16 cartas

    // Verificar se as cartas têm a propriedade 'image'
    if (!cards || cards.length === 0) {
      console.error('Nenhuma carta foi recebida.');
      return;
    }

    // Distribui as cartas para os jogadores
    const players = ['player1-cards', 'player2-cards', 'player3-cards', 'player4-cards'];
    
    for (let i = 0; i < 4; i++) {
      const playerCardsContainer = document.getElementById(players[i]);
      playerCardsContainer.innerHTML = ''; // Limpa as cartas anteriores
      
      // Distribui 4 cartas para cada jogador
      for (let j = 0; j < 4; j++) {
        const card = cards[i * 4 + j];
          
        if (card && card.image) {
          const cardDiv = document.createElement('div');
          cardDiv.classList.add('card');

          // Cria uma imagem para a carta
          const img = document.createElement('img');
          img.src = card.image; // Utiliza o campo 'image' da API para a URL da imagem da carta
          img.alt = `${card.value} de ${card.suit}`;

          // Adiciona a imagem da carta à div da carta
          cardDiv.appendChild(img);
          playerCardsContainer.appendChild(cardDiv);
        } else {
          console.error('Carta sem imagem:', card);
        }
      }
    }
}

  // async function displayCards() {
  //     const deckId = await createDeck();
  //     const filteredCards = await drawAndFilterDeck(deckId);

  //     const cardsContainer = document.getElementById('cards-container');
  //     cardsContainer.innerHTML = ''; // Limpa qualquer conteúdo anterior

  //     // Exibe as cartas filtradas
  //     filteredCards.forEach(card => {
  //         const cardDiv = document.createElement('div');
  //         cardDiv.classList.add('card');
  //         cardDiv.innerHTML = `
              
  //             <img src="${card.image}" alt="${card.value} de ${card.suit}">
  //         `;
  //         // <p>${card.value}</p> //valor de cima
  //         //     <p>${card.suit}</p>
  //         cardsContainer.appendChild(cardDiv);
  //     });

  //     console.log(filteredCards)
  // }

  // displayCards();

  


// class Carta{
//     constructor(naipe, numero) {
//         this.naipe = naipe
//         this.numero = numero
//     }
//   }




//   async function baralho_fundo() {
//       const deckId = await createDeck();
//       const filteredCards = await drawAndFilterDeck(deckId);

//       const cardsContainer = document.getElementById('cards-container');
//       cardsContainer.innerHTML = ''; // Limpa qualquer conteúdo anterior

//       // Exibe as cartas filtradas
//       filteredCards.forEach(card => {
//           const cardDiv = document.createElement('div');
//           cardDiv.classList.add('card');
//           cardDiv.innerHTML = `
              
//               <img src="${card.image}" alt="${card.value} de ${card.suit}">
//           `;
//           // <p>${card.value}</p> //valor de cima
//           //     <p>${card.suit}</p>
//           cardsContainer.appendChild(cardDiv);
//       });
//   }

//   baralho_fundo()







//   // function mostrameu() {
//   //   document.getElementById('carta1').style.backgroundImage = ""
//   // }
  
//   //variavel que guarda a carta de trufo
//   var trunfo
  
//   var four = []
  
//   //inicializa os naipes
//   var cartas = []
  
//   var numeros = []
  
//   //inicializa as maos de cada jogador 
//   var p1 = [],  p2 = [],p3 = [], p4 = []
  
//   var total = [p1,p2,p3,p4]
  
//   function baralho(){
//     //escolhe o trunfo
//     trunfo = {
//       naipe: Math.floor(Math.random() * 4) + 1,
//       numero: Math.floor(Math.random() * 10) + 1
//     }
    
//     //cria todas as cartas
//     for (var n = 1; n <= 4; n++)
//       for (var i = 1; i <= 10; i++){
//         var carta = new Carta(n, i)
//         cartas.push(carta)
//       }
  
//     var indice = cartas.findIndex(cartas => cartas.numero === trunfo.numero && cartas.naipe === trunfo.naipe)
  
//     cartas.splice(indice, 1)
  
//     var carta = new Carta(trunfo.naipe, trunfo.numero)
//     cartas.push(carta)
    
//     for (let i = 0; i < 40; i++) 
//       numeros.push(i)
//   }
  
//   function tiraCarta(qtd){
//     for(let i = 0; i < qtd; i++){
//       // Remove o elemento do array e retorna o valor removido
//       const valorRemovido = cartas.splice(Math.floor(Math.random() * cartas.length), 1)[0]
//       // console.log(valorRemovido)
//       return valorRemovido
//     }
//   }
  
//   function inicio(){
//     //da as cartas iniciais
//     for(let i = 0; i < 4; i++){
//       p1.push(tiraCarta(1))
//       p2.push(tiraCarta(1))
//       p3.push(tiraCarta(1))
//       p4.push(tiraCarta(1))
//     }
//     console.log("p1: ", p1, "\n", "p2: ", p2, "\n", "p3: ", p3, "\n", "p4: ", p4, "\n")


//   }
  
//   function darcartas(){
//     p1.push(tiraCarta(1))
//     p2.push(tiraCarta(1))
//     p3.push(tiraCarta(1))
//     p4.push(tiraCarta(1))
//   }
  
//   function play(){
//     //escolhe um player para comecar
//     let inicio = Math.floor(Math.random() * 4)
//     // console.log(inicio)
  
    
//     for(let i = inicio; i < 4; i++){
//       let removido = total[i].splice(Math.floor(Math.random() * 4), 1)[0]
//       // console.log(removido)
//       four.push(removido)
//     }
  
//     for(let i = 0; i < inicio; i++){
//       let removido = total[i].splice(Math.floor(Math.random() * 4), 1)[0]
//       // console.log(removido)
//       four.push(removido)
//     }
//     // console.log(four)
//   }
  
//   function compara() {
//     let trunfos = []
//     let maior
  
//     for (let i = 0; i < four.length; i++) {
//       if(four[i].naipe === trunfo.naipe)
//         trunfos.push(four[i])
//     }
  
//     if (trunfos.length > 0) {
//       // Se houver trunfos, encontra o maior
//       maior = trunfos[0];
//       for (let i = 1; i < trunfos.length; i++) 
//           if (trunfos[i].numero > maior.numero) 
//               maior = trunfos[i];
//     } else {
//       // Se não houver trunfos, encontra a maior carta do naipe da primeira carta
//       maior = four[0];
//       for (let i = 1; i < four.length; i++) 
//           if (four[i].numero > maior.numero) 
//               maior = four[i];
//     }
  
//     console.log("\n",four)
//     console.log("\nO maior é: ", maior)
//   }
  
//   function main(){
//     //inicializa o baralho
//     baralho()
  
//     //da as cartas iniciais
//     inicio()
  
//     console.log("\no trunfo é: ", trunfo)
  
//     //joga a carta de cada jogador
//     play()
  
//     //compara as cartas jogadas
//     compara()
  
//     // console.log("p1: ", p1, "\n", "p2: ", p2, "\n", "p3: ", p3, "\n", "p4: ", p4, "\n")
//   }
  
//   main()


// // const BACK_CARD = "https://deckofcardsapi.com/static/img/back.png";
