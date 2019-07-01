require('./dbconnect');
const UserModel = require('./models/user.model');

//name LIKE '%Van%'
UserModel.find()
.where({name: {
    $regex : 'Van'
}})
.then(users=> console.log(users))
.catch(err=> console.log(err))

// name LIKE 'Nguyen Van%'
// UserModel.find({
    // name: {
    //     // $regex : /^Nguyen Van/
    //     $regex : '^Nguyen Van'
    // }
// })
// .then(users=> console.log(users))
// .catch(err=> console.log(err))

// //name LIKE '%Van Ti'
// UserModel.find({
//     name: {
//         $regex : 'Van Ti$'
//     }
// })
// .then(users=> console.log(users))
// .catch(err=> console.log(err))
// select
// limit
// sort
// SELECT email FROM users ORDER BY email DESC LIMIT 1,2 
// UserModel.find()
// // .select('email password')
// .select({
//     _id: 0,
//     email: 1
// }).sort({email : -1})
// .skip(1) // position
// .limit(2) // quantity
// .then(users=> console.log(users))
// .catch(err=> console.log(err))


// delete
// UserModel.deleteMany({
//     $or : [
//         { _id: '5d1622710dec8e2df8ec11bb' },
//         { email: {
//                 $eq: 'admin05@gmail.com'
//             }
//         }
//     ]
// })
// .then(result=> console.log(result))
// .catch(err=> console.log(err))




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
//         email: 'admin04@gmail.com',
//         password: '111111',
//         name : 'Nguyen Van Teo'
//     },
//     {
//         email: 'admin05@gmail.com',
//         password: '111111',
//         name : 'Nguyen Van Ti'
//     },
//     {
//         email: 'admin06@gmail.com',
//         password: '111111',
//         name : 'Le Van Ti'
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




