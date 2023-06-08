import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(8081, () => {console.log("server listening at port 8081")})

app.get('/', (req,res) => {
    console.log("hi I am here")
    
    // res.write('hello who\'s there')
    // res.end()

    res.send('hello who\'s there?')
})

app.post('/', (req,res) => {
    console.log(req.body.name)
    console.log(req.query.secretNumber)
    res.json({"status":"got it"})
})

app.post('/about', (req,res) => {
    console.log(req.body.name)
    console.log(req.query.secretNumber)
    res.json({"status":"got it"})
})