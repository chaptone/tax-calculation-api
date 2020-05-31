const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/tax', (req, res) => {
    if (!req.query || !req.query.netIncome) {
        throw new Error('netIncome is required')
    }
    const { netIncome = 0 } = req.query.netIncome

    res.json({
        status: 200,
        result: {
            tax: 200
        }
    })
})

app.listen(port, () => console.log(`Tax calculation app listening at http://localhost:${port}`))