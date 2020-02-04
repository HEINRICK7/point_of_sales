const mongoose = require('mongoose');

const urlOffLine = 'mongodb://localhost:27017/api';

mongoose.connect(urlOffLine, {  useUnifiedTopology: true, useNewUrlParser: true  })
    .then(() =>{
        console.log('connected db')
    
    })
    .catch((err) =>{
        console.log("error on server", err)

    })
    
                   
module.exports = mongoose;