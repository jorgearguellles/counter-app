const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papa1502'
});


const user = getUser();
// console.log(user);

const getUserActive = ( name = "Carlos" ) =>({
    uid: 'ABC567',
    username: name
})

const userActive = getUserActive();
// console.log( userActive );

export {getUser, getUserActive};

