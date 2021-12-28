const { Router } = require('express');
const router = Router();
const { getMembers, createMember, updateMember} = require('../controllers/index.controller');

router.get('/getmembers', getMembers);
router.post('/addmember', createMember);
router.put('/updatemember/:cedula', updateMember);

module.exports = router;