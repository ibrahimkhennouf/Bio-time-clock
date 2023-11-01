import express from 'express';
import {
  DoCheckIn,
  DoCheckOut,
  createEmployee,
  getAllEmployees,
} from '../controllers/employee.controller';

const router = express.Router();

/**
 * @openapi
 * /api/v1/employees:
 *  post:
 *     tags:
 *     - Employees
 *     description: add new employee
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - lastName
 *              - firstName
 *              - department
 *            properties:
 *              lastName:
 *                type: string
 *                default: khennouf
 *              firstName:
 *                type: string
 *                default: ibrahim
 *              department:
 *                type: string
 *                default: IT
 *     responses:
 *       200:
 *         description: App is up and running , All good
 */

router.post('/', createEmployee);

/**
 * @openapi
 * /api/v1/employees:
 *  get:
 *     tags:
 *     - Employees
 *     description: get all employees
 *     parameters:
 *      - name: date
 *        in: query
 *        description: The date of creation
 *     responses:
 *       200:
 *         description: App is up and running , All good
 */
router.get('/', getAllEmployees);

/**
 * @openapi
 * /api/v1/employees/check-in:
 *  patch:
 *     tags:
 *     - Employees
 *     description: employees are able to checkin
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *            properties:
 *              id:
 *                type: string
 *                default:
 *              comment:
 *                type: string
 *                default:
 *     responses:
 *       200:
 *         description: App is up and running , All good
 */
router.patch('/check-in', DoCheckIn);

/**
 * @openapi
 * /api/v1/employees/check-out:
 *  patch:
 *     tags:
 *     - Employees
 *     description: employees are able to checkout
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *            properties:
 *              id:
 *                type: string
 *                default:
 *              comment:
 *                type: string
 *                default:
 *     responses:
 *       200:
 *         description: App is up and running , All good
 */
router.patch('/check-out', DoCheckOut);

export default router;
