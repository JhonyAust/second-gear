const express = require('express')
const cors = require('cors')
const {dbConnect} = require('./utiles/db')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))
require('dotenv').config()
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/api', require('./routes/authRoutes'))

app.get('/', (req, res) => res.send('Hello World!'))
const port = process.env.PORT
dbConnect()
app.listen(port, () => console.log(`Server is running on port ${port}!`))