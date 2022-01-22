
const people = ['Pedro','Roberto','Rodolfo'];
const [ , , p3 ] = people;

const returnArray = () =>{
    return ['ABC', 123];
}

const [ characters, numbers ] = returnArray(); 

const usState = ( value ) => {
    return [ value, ()=>{ console.log('Hello World') } ];
}

export {returnArray}

