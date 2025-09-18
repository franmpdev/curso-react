const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
}
const {name} = person;
console.log(name);

interface Hero {
    name: string;
    age: number;
}

const heros :Hero[]= [
    {
        name: 'Spiderman',
        age: 30
    },
    {
        name: 'Ironman',
        age: 45
    
    },
    {
        name: 'Thor',
        age: 99
    }
]
function findOlderHero():void{
    const hero1 = heros.find(hero => {
        const {age} = hero;
        if(age > 100){
            return hero;
        }
    })
    if(hero1){
        const { name } = hero1;
        console.log(name);
    }
    else{
        console.log('There is no heros older than 100 years old')
    }
}
findOlderHero();

