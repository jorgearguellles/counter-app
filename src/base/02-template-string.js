
const name   = 'Fernando';
const lastName = 'Herrera';


// const nameComplete = name + ' ' + lastName;
const nameComplete = `${ name } ${ lastName }`;

// console.log( nameComplete );


function getHi(name = "Carlos") {
    return 'Hello ' + name;
}

// console.log( `Este es un text: ${ getHi( name ) }  ` );

export default getHi;