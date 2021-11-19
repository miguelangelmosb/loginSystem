const mongoose = require('mongoose');

    mongoose.connect(
        'mongodb://localhost/conference-system',
        async(err)=>{
            if(err) throw err;
            console.log("conncted to db")
        }
    )