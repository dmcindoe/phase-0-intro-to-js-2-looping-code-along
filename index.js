const names = [ 'Lisa', 'Kaitlin', 'Jan']

function writeCards(names, event){
   const bdaynames = []
    for(let i = 0; i < names.length; i++){
        bdaynames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return bdaynames
}

writeCards(names);

function countDown(number){
    while (number >= 0) 
      console.log(number--);
  }  