let options = {
	width:  400,
	height: 500,
};

let {color:c = "red", width, height}= options

if(c === undefined){
    c = 'black'
}
console.log(c)
console.log(width)
console.log(height)
