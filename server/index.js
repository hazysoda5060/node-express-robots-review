const express = require('express')
const app = express()
const port = 3064
const robotCtrl = require('./robotController')

app.get('/api/robots', robotCtrl.getRobots)
app.delete('/api/robots/:id', robotCtrl.deleteRobot)


app.listen(port, () => console.log(`server running on ${port}`))