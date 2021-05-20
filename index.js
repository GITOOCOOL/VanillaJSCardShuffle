var deck = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']

function arrange(deck, from, to){
    let newDeck = []
    var theCard = deck[from]
    if(from === to){
        return deck
    }
    for(let i = 0; i < deck.length; i++){
        if(i !== from){
            newDeck.push(deck[i])
        } 
        if(i === to){
            let originalCard = newDeck.pop()
            if(to < from){
                newDeck.push(theCard)
                newDeck.push(originalCard)
            }
            else if(from < to){
                newDeck.push(originalCard)
                newDeck.push(theCard)
            }
        }
    }
    
    return newDeck
}

let cards = document.querySelectorAll('.card')
const display = function(d){
    for(i=0; i < d.length; i++){
        cards[i].src = 'images/' + d[i] + 'S.png'
    }
}



display(deck)

let shuffleBtn = document.getElementById('shuffle-btn')

function shuffle(){
    let from  = 0 
    let to = 0
    from = parseInt(document.querySelector('#from').value)
    to = parseInt(document.querySelector('#to').value)

    deck = arrange(deck, from, to);
    display(deck)
}
shuffleBtn.addEventListener('click', shuffle)
function fullShuffle(){
    let shuffleCount = Math.floor(Math.random() * 100);
    let from = 0
    let to = 0
    while(shuffleCount !== 0){
        from = Math.floor(Math.random() * 12)
        to = Math.floor(Math.random() * 12)
        deck = arrange(deck,from,to)
        display(deck)        
        shuffleCount--
    }
}
fullShuffle()

// Now let's try to implement a game where the user can select 3 cards and place them at their table


let cardHolderPosition = 1

cards = document.querySelectorAll('.card')

let card0 = cards[0]
let card1 = cards[1]
let card2 = cards[2]
let card3 = cards[3]
let card4 = cards[4]
let card5 = cards[5]
let card6 = cards[6]
let card7 = cards[7]
let card8 = cards[8]
let card9 = cards[9]
let card10 = cards[10]
let card11 = cards[11]
let card12 = cards[12]


function pickCard0(){
    if(cardHolderPosition > 6){return}
    card0.style.display = 'none' 
    let cardHolder = document.getElementById('cardHolder' + cardHolderPosition)
    cardHolderPosition++
    cardHolder.src = card0.src
}

function pickCard1(){
    if(cardHolderPosition > 6){return null}
    card1.style.display = 'none' 
    let cardHolder = document.getElementById('cardHolder' + cardHolderPosition)
    cardHolderPosition++
    cardHolder.src = card1.src
    console.log(card1)
}
function pickCard2(){
    if(cardHolderPosition > 6){return null}
    card2.style.display = 'none' 
    let cardHolder = document.getElementById('cardHolder' + cardHolderPosition)
    cardHolderPosition++
    cardHolder.src = card2.src
    console.log(card2)
}
function pickCard3(){
    if(cardHolderPosition > 6){return null}
    card3.style.display = 'none' 
    let cardHolder = document.getElementById('cardHolder' + cardHolderPosition)
    cardHolderPosition++
    cardHolder.src = card3.src
    console.log(card3)
}
function pickCard4(){
    if(cardHolderPosition > 6){return null}
    card4.style.display = 'none' 
    let cardHolder = document.getElementById('cardHolder' + cardHolderPosition)
    cardHolderPosition++
    cardHolder.src = card4.src
    //console.log(card)
}
function pickCard5(){
    if(cardHolderPosition > 6){return null}
    card5.style.display = 'none' 
    let cardHolder = document.getElementById('cardHolder' + cardHolderPosition)
    cardHolderPosition++
    cardHolder.src = card5.src
    //console.log(card)
}
function pickCard6(){
    if(cardHolderPosition > 6){return null}
    card6.style.display = 'none' 
    let cardHolder = document.getElementById('cardHolder' + cardHolderPosition)
    cardHolderPosition++
    cardHolder.src = card6.src
    //console.log(card)
}
function pickCard7(){
    if(cardHolderPosition > 6){return null}
    card7.style.display = 'none' 
    let cardHolder = document.getElementById('cardHolder' + cardHolderPosition)
    cardHolderPosition++
    cardHolder.src = card7.src
    //console.log(card)
}
function pickCard8(){
    if(cardHolderPosition > 6){return null}
    card8.style.display = 'none' 
    let cardHolder = document.getElementById('cardHolder' + cardHolderPosition)
    cardHolderPosition++
    cardHolder.src = card8.src
    //console.log(card)
}
function pickCard9(){
    if(cardHolderPosition > 6){return null}
    card9.style.display = 'none' 
    let cardHolder = document.getElementById('cardHolder' + cardHolderPosition)
    cardHolderPosition++
    cardHolder.src = card9.src
    //console.log(card)
}
function pickCard10(){
    if(cardHolderPosition > 6){return null}
    card10.style.display = 'none' 
    let cardHolder = document.getElementById('cardHolder' + cardHolderPosition)
    cardHolderPosition++
    cardHolder.src = card10.src
    //console.log(card)
}
function pickCard11(){
    if(cardHolderPosition > 6){return null}
    card11.style.display = 'none' 
    let cardHolder = document.getElementById('cardHolder' + cardHolderPosition)
    cardHolderPosition++
    cardHolder.src = card11.src
    //console.log(card)
}
function pickCard12(){
    if(cardHolderPosition > 6){return null}
    card12.style.display = 'none' 
    let cardHolder = document.getElementById('cardHolder' + cardHolderPosition)
    cardHolderPosition++
    cardHolder.src = card12.src
    //console.log(card)
}


card0.addEventListener('click', pickCard0)
card1.addEventListener('click', pickCard1)
card2.addEventListener('click', pickCard2)
card3.addEventListener('click', pickCard3)
card4.addEventListener('click', pickCard4)
card5.addEventListener('click', pickCard5)
card6.addEventListener('click', pickCard6)
card7.addEventListener('click', pickCard7)
card8.addEventListener('click', pickCard8)
card9.addEventListener('click', pickCard9)
card10.addEventListener('click', pickCard10)
card11.addEventListener('click', pickCard11)
card12.addEventListener('click', pickCard12)


