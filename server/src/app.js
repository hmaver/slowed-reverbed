// var shell = require('shelljs');
// shell.echo('hello world');

var funcy = require('./test.js')
// var funcy2 = funcy.mySpecialFunc()

console.log("hello")
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')
// var filename = 'testing';
// var link = "https://www.youtube.com/watch?v=viimfQi_pUw";
// var reverb = 80;
// var tempo = 0.8;
// var pitch = 0.85;

const app = express()
app.use(morgan('')) //shows what hit us
app.use(bodyParser.json())
app.use(cors())

// GET, POST, PATCH, PUT, DELETE
//endpoint
// app.get('/register', (req, res) => {
//     funcy.mySpecialFunc()
// })

//sound stuff below
// app.post('/register', (req, res) => {
//     funcy.mySpecialFunc()
//     res.send({
//         message:'hi',
//     })
// })

require('./routes')(app)

sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })
