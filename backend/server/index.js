require('dotenv').config()
const express = require('express') 
const models = require('./models/models')
const sequelize = require('./db')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
let fileUpload = require('express-fileupload')
let path = require('path')



const Port = process.env.Port || 5000

const app = express()
app.use(cors({origin: true}))
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Last one
app.use(errorHandler)

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