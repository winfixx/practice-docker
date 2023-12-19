const express = require('express')

const app = express()
const PORT = 5000

app.use(express.json())
app.use('/api', (req, res) => {
    res.send({message: 'Hello world'})
})

app.listen(PORT, () => console.log(`Server has been started on port = ${PORT}`))