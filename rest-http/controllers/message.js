
let object = {
    someKey: 'someValue',
    someKey2: 'someValue2'
}

const sendMessage = async (req, res) => {
    const { message } = req.body
    
    console.log(`message received: ${message}`)
    res.status(200).json(`message sent: ${message}`)
}

const getObject = async (req, res) => {    
    res.status(200).json(object)
}

module.exports = {
    sendMessage,
    getObject
}
