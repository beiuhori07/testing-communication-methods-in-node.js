const express = require('express')
const router = express.Router()

const { sendMessage, getObject } = require('../controllers/message.js')

router.post('/', sendMessage)
router.get('/', getObject)

module.exports = router