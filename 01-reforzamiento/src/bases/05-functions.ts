function greet (name: string) :string /*Valor de retorno*/ {
    return `Hola ${name}`
}
const message = greet('Goku');
console.log(message);

//Arrow Function
const greet2 = (name:string) :string => `Hola ${name}`;
console.log(greet2('Vegeta'));

//Ejercicio

interface User {
    uid: string;
    username: string;
}

function returnUser():User{
    return {
        uid: 'ABC-123',
        username: 'franmpdev'
    }
}
const returnUser2 = ():User => ({
        uid: 'ABC-123',
        username: 'franmpdev'
});

const myUser = returnUser();
console.log(myUser);

const myNumbers :number[] = [1,2,3,4,5];
myNumbers.forEach(console.log) //Será muy útil en React