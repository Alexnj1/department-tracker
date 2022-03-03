const express = require('express')
const PORT = process.env.PORT || 3001
const db = require ('./db/connection')
const app = express()
const apiRoutes = require("./api-routes")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes)

db.connect((err) => {
    if (err) throw err
    console.log('Company database connected')
    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}`)
    })
})