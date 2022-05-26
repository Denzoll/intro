const Router = require('express');

const { studentController } = require('../controllers/students.controllers');
const router = Router();

router.get('/students', studentController.getStudent);

router.post('/students',studentController.postStudent);
router.delete('/students/:id',studentController.deleteStudent)
router.patch('/students/:id',studentController.patchStudent)
module.exports = router;