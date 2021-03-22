import express from 'express'
import router from './routes.js'

const port = 3000

const app = express()
app.use(express.static('public'))
app.use('/api', router)

app.use(express.json())

app.listen(port, () => {
    console.log(`Server started @http://localhost:${port}`)
})