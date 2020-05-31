const express = require('express')
const { calculateTax } = require('./tax');

const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/tax', (req, res) => {
    if (!req.query || !req.query.netIncome) {
        throw new Error('netIncome is required')
    }

    const { netIncome } = req.query
    const tax = calculateTax(netIncome)
    console.log("tax", tax)

    res.json({
        status: 200,
        result: {
            tax
        }
    })
})

app.listen(port, () => console.log(`Tax calculation app listening at http://localhost:${port}`))