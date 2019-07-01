require('./dbconnect');
const UserModel = require('./models/user.model');

// delete
UserModel.deleteMany({
    $or : [
        { _id: '5d1622710dec8e2df8ec11bb' },
        { email: {
                $eq: 'admin05@gmail.com'
            }
        }
    ]
})
.then(result=> console.log(result))
.catch(err=> console.log(err))




// update
// UserModel.updateOne({
//     _id : '5d162420c9e2b12e33edfc29'
// },{
//     role : 'admin'
// })
// .then(user=> console.log(user))
// .catch(err=> console.log(err))
// UserModel.findByIdAndUpdate('5d162420c9e2b12e33edfaaa',{ 
//     role: 'admin', 
//     birthdate: new Date()
// },{ new: true })
// .then(user => {
//     if(user) return console.log(user)
//     throw new Error('Cannot update!')
// })
// .catch(err=> console.log(err.message))

// insert
// UserModel.create({
//     email: 'admin02@gmail.com',
//     password: '111111'
// })
// .then(user => console.log(user))
// .catch(error => console.log(error.message))

// UserModel.insertMany([
//     {
//         email: 'admin03@gmail.com',
//         password: '111111'
//     },
//     {
//         email: 'admin04@gmail.com',
//         password: '111111'
//     }
// ])
// .then(users => console.log(users))
// .catch(error => console.log(error.message))

// const user = new UserModel({
//     email: 'admin06@gmail.com',
//     password: '111111',
//     role: 'admin'
// })
// user.save()
// .then(user => console.log(user))
// .catch(error => console.log(error.message))



// select


