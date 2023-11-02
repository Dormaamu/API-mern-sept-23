const mongoose = require('mongoose')

const connectDB = () => {
    return mongoose.connect(process.env.LIVE_URL)
        .then(() => {
            console.log("Connected Successfully")
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports=connectDB