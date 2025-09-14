interface Address {
    postalCode: string;
    city: string;
}
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

//Objeto literal de tipo Person
const spiderman: Person = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 20,
    address: {
        postalCode: '12345',
        city: 'New York'
    }
}


console.log(spiderman);