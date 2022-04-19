function func(){
    return [2022, 03,  (new Date).getDate()]
}
let [year, month, day] = func()

console.log(year)
console.log(month)
console.log(day)