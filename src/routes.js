import { allVillagers, registration, registrationPolicy } from './villagers';

const router = require('express').Router();

router.post('/registration', registrationPolicy, registration);
router.get('/villagers', allVillagers);

export default router;
