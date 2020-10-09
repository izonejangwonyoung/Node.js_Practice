function findAndSaveUser(Users){
    Users.findOne({})
        .then((user)=> {
            user.name='김채원';
            return user.save();
        })
        .then((user)=> {
            return Users.findOne({gender:'F'});
        })
        .then((user)=> {
            //생략
        })
        .catch(err=>
        {console.error(err);})


}




console.log('=====================')

async function findAndSaveUser(Users){

    try{
        let user=await Users.findOne({});
    user.name='김채원'
    user=await user.save();
    user=await Users.findOne({gender: 'F'});
}catch (error){
        console.error(error)
    }
}


