import express from 'express';
import emplyeesRouter from './employees.router';

const router = express.Router();

router.use('/employees', emplyeesRouter);

export default router;
