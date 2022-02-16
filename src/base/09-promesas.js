import { getHeroById } from './08-imp-exp';

const getHeroByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
 
            const p1 = getHeroById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No get hero' );
            }
        }, 2000 )
    
    });


}

export {getHeroByIdAsync};