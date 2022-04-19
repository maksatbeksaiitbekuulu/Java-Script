
let re = /@/gi;

let string = 'ddd@bbb@ccc@kkk';

let newstring = string.replace(re, '!');

console.log(newstring);