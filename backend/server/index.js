require('dotenv').config()
const express = require('express') 
const models = require('./models/models')
const sequelize = require('./db')
const cors = require('cors')


const Port = process.env.Port || 5000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'WORKING!!!!' })
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(Port,
            () => console.log(`Server started on port ${Port}`))
    } catch (e) {
        console.log(e)
    }
}

start()