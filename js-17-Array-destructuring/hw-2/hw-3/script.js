let options = {
	width:  400,
	height: 500,
};

let {color = 'red', width, height} = options
if (color === undefined) {
	color = 'black'
}

console.log(color)
console.log(width)
console.log(height)