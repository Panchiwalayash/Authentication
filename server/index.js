const connectToMongo=require("./db")
const express = require('express')
const cors=require('cors')
connectToMongo();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json()) 

app.use('/api/user',require('./routes/user'))

app.listen(port, () => {
  console.log(`App is hosted on port http://localhost:${port}`)
})