

const myPromise = new Promise <string>( (resolve, reject)=>{
    setTimeout(()=>{
        //Yo quiero mi dinero
        let money = 99;
        if(money>=100){
            resolve('Se ha devuelto el dinero');
        }
        else{
            reject('No se ha devuelto el dinero');
        }
        
    }, 2000);
})

myPromise
.then(message => console.log(message))
.catch(err => console.warn(err))
.finally(()=>{
    console.log('Sigo con mi vida');
})