const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then(e => {
        console.log(`MongoDB connected with host: ${e.connection.host}`);
    })
}

module.exports = connectDB