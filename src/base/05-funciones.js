const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papa1502'
});


const user = getUser();
// console.log(user);

const getUserActive = ( name ) =>({
    uid: 'ABC567',
    username: name
})

const userActive = getUserActive('Jorge');
// console.log( userActive );

export {getUser, getUserActive};

