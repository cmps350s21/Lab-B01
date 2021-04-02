import express from 'express'
import router from './routes.js'
import mongoose from "mongoose";

const port = 3000

const app = express()
// const uri = `mongodb+srv://dbUser:dbUserPassword@cluster0.tptzm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const uri = "mongodb://127.0.0.1:27017/banking-app"
const options = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(uri , options , (err)=>{
    console.log(`database started`)
})


app.use(express.static('public'))
app.use(express.json())
app.use('/api', router)

app.listen(port, () => {
    console.log(`Server started @http://localhost:${port}`)
})


/*
mongoose.connect(
    'mongodb://127.0.0.1:27017/BankDB',
    {useNewUrlParser: true, useUnifiedTopology: true}
    )
 */