//Array que acepta 2 tipos distintos, string y number
const myArray : (number | string)[] = [1,"2",3,"4",5];

myArray.push(6);

console.log(myArray)

const myArray2 = [...myArray]
myArray2.push("7")
console.log(myArray2)