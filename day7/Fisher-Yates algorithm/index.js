// Fisher-Yates algorithm
function FisherYates(array){
    for(let i=array.length-1; i>0;i--){
        const rand=Math.floor( Math.random()*(i+1));
        [array[i],array[rand]] = [array[rand] , array[i]]
    }
}

const cards=['A','J','K','Q',1,2,3,4,5,6,7,8,9]
FisherYates(cards)
console.log(cards);