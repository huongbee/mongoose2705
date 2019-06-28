const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose2705',{
    useNewUrlParser: true
})
.then(()=>console.log('DB Connected!'))
.catch((err)=>console.log(err.message))
