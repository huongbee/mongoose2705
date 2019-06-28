const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://user2705:5PbIvgxNoW0i1l13@cluster0-hx3vv.mongodb.net/mydb?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     useCreateIndex: true
// })
mongoose.connect('mongodb://localhost/mongoose2705',{
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(()=>console.log('DB Connected!'))
.catch((err)=>console.log(err.message))
