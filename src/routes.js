const router = require('express').Router()

router.get('/registration', (req, res) => {

    res.json({ 'message': 'got here' })

})

export default router 