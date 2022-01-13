const express = require('express')
const routers = require('./routes/userRouter.js');
const eftrouter = require('./routes/etfRouter.js');


const app = express()
const port = 3000


app.use(express.json());


app.use('/user', routers);
app.use('/etf', eftrouter);


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})