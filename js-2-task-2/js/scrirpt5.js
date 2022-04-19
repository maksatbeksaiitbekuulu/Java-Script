
let number = '1025 3647 8512 1245';

let 
theRest = number.slice(0, 10), 
theReplace = number.replace(theRest, '*')

let 
firstChar = theReplace[0],
firstCharRepeat = firstChar.repeat(9);

console.log('Номер вашей карты: '+ firstCharRepeat + theReplace);