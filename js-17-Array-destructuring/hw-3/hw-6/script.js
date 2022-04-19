function func({ color, width, height }) {
  if (color === undefined) {
    color = "black";
  }

  console.log(color);
  console.log(width);
  console.log(height);
}
func({ color: "red", width: 400, height: 500 });
