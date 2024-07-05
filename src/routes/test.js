import express from 'express';
import { TestValidator } from '../middlewares/validators/test_validator.js';
import { TestController } from '../controllers/test.js';
import { authMiddleware } from '../middlewares/auth.js';

const router = express.Router();
router.use(authMiddleware);
router.post('/', [TestValidator.createTest, TestController.createTest]);
router.get('/:testId', TestController.getTestById);
router.patch('/:testId', [TestValidator.updateTest, TestController.updateTest]);
router.get('/', TestController.listAllTest);
router.delete('/:testId', TestController.deleteTest);

export default router;
