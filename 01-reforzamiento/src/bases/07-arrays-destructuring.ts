const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [ ,, trunks ]= characterNames;
console.log({ trunks });

const returnsarraysfn = () => {
    return [ 'ABC', 123] as const; //OBLIGA A DEVOLVER PRIMERO UN TEXTO Y DESPUES UN NUMERO
}
const [letters,number] = returnsarraysfn();
console.log({letters, number});

//EJERCICIO BASADO EN UN HOOK DE REACT, USESTATE
const useState = (data: string)=>{
    return [data, (newData: string)=>{
        data = newData;
        console.log(data);
    }] as const;

}

const [ name, setName ] = useState('Goku');
console.log(name);
setName('Vegeta');