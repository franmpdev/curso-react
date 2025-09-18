const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [ ,, trunks ]= characterNames;
console.log({ trunks });

const returnsarraysfn = () => {
    return [ 'ABC', 123] as const; //OBLIGA A DEVOLVER PRIMERO UN TEXTO Y DESPUES UN NUMERO
}
const [letters,number] = returnsarraysfn();
console.log({letters, number});