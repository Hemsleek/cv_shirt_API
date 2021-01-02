import { registration, registrationPolicy } from './villagers'

const router = require('express').Router()

router.post('/registration', registrationPolicy, registration)

export default router 