// Lage deck
var type = ['hjerte','spar','kløver','ruter'] 
var rank = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'] 
var deck = []
for (var i = 0; i < 4; i++) {
    for (var u = 0; u < 13; u++) {
// deck.push(rank[u] + type[i]) 
var card = {
typee: type [i], 
rankk: rank [u], 
worth: 0
}
// 
if(card.rankk=='2'){
card.worth=2
}

if(card.rankk=='3'){
    card.worth=3
    } 

    if(card.rankk=='4'){
        card.worth=4
        }
        if(card.rankk=='5'){
            card.worth=5
            }
            if(card.rankk=='6'){
                card.worth=6
                }
                if(card.rankk=='7'){
                    card.worth=7
                    }
                    if(card.rankk=='8'){
                        card.worth=8
                        }
                        if(card.rankk=='9'){
                            card.worth=9
                            }
                            if(card.rankk=='10'){
                                card.worth=10
                                }
                                if(card.rankk=='J'){
                                    card.worth=11
                                    }
                                    if(card.rankk=='Q'){
                                        card.worth=12
                                        }
                                        if(card.rankk=='K'){
                                            card.worth=13
                                            }
                                            if(card.rankk=='A'){
                                                card.worth=69
                                                }
                                               deck.push(card)
}
    }
     
// console.log(deck)
// shuffle decket
deck.sort((a,b)=>0.5-Math.random())
 console.log(deck) 
 // drawing kort
var mittkort = deck[0]
var programsittkort = deck[51]
console.log(`ditt kort er: ${mittkort.rankk}${mittkort.typee}`)
console.log(`program sitt kort er: ${programsittkort.rankk}${programsittkort.typee}`)
// velge vinner
if(mittkort.worth > programsittkort.worth){
   console.log('u win gg ez') 
}
if(mittkort.worth < programsittkort.worth){
    console.log('program wins') 
 }
 if(mittkort.worth == programsittkort.worth){
    console.log('draw') 
 }
