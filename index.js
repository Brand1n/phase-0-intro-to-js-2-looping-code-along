
function writeCards(cards, event){
    const messages=[]
    for (let i = 0; i < cards.length; i++){
        console.log(`Thank you, ${cards[i]}, for the wonderful ${event} gift!` )
        messages.push (`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}
function countDown(count){

while (count >= 0){
    console.log(count)
    count--
}
}
