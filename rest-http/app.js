
const express = require('express')
const app = express();

const messageRouter = require('./routes/messageRouter')

app.use(express.json())

app.get('/', (req, res) => 
    res.send('some api')   
)
app.use('/api/v1/message', messageRouter)

const port = process.env.PORT || 3000;
const start = async () => {
    try {

        app.listen(port, () => 
            console.log(`server is listening on port ${port}...`)
        )

    } catch (error) {
        console.log(error);
    }
}

start();