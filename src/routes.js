import { registration, registrationPolicy } from './villagers'

const router = require('express').Router()

router.get('/registration', registrationPolicy, registration)

export default router 