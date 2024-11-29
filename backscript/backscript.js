async function baralho(){
    const response = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')

    const data = await response.json()

    return data.deck_id
}

// async function comprar(deckId){
//     const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`);

//     const data = await response.json()

//     console.log(data)
// }

async function parcial() {
    // let text = ""
    // for (let i = 1; i <= 7; i++) {
    //     text += `${i}D,`
    //     text += `${i}C,`
    //     text += `${i}H,`
    //     text += `${i}S,`
    // }
    // text = text.slice(0, -1)
    // console.log(text)
    const response = await fetch(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?cards=1D,1C,1H,1S,2D,2C,2H,2S,3D,3C,3H,3S,4D,4C,4H,4S,5D,5C,5H,5S,6D,6C,6H,6S,7D,7C,7H,7S,KD,KC,KH,KS,JD,JC,JH,JS,QD,QC,QH,QS`)
    const data = await response.json()

    return console.log(data)
}

async function jogar(){
    await parcial()
    // const deckId = await baralho()
    // console.log(deckId)
    // await comprar(deckId)


}

jogar()

