const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const smartphoneRouter = require('./routes/smartphone.route')
dotenv.config()

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Conexión a la base de datos establecida'))
.catch(err => console.log(err))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', smartphoneRouter)

const puerto = process.env.PORT || 3000

app.get('/', (req,res) => res.json({ message: 'Bienvenido a la API de Smartphones' }))
app.listen(process.env.PORT , () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`)
})