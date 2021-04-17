const app = require('./app')
const connectDB = require('./config/database')
const dotenv = require('dotenv')

//setting up config file
dotenv.config({ path: './config/.env' })

const PORT = process.env.PORT || 8080

//set up database
connectDB()
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})