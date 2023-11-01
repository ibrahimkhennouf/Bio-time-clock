import { Request, Response } from 'express';
import { addNewEmployee, checkIn, checkOut, findAllEmployees } from '../services/employee.service';
import { employeesCreationShemaValidator } from '../schemavalidators/employee.schemavalidator';

//create new employee controller
const createEmployee = (req: Request, res: Response) => {
  const newEmployee = req.body;

  const { error } = employeesCreationShemaValidator.validate(newEmployee);

  //check if schema is respected
  if (error) {
    console.log({ error: error, message: 'validation error' });
    res.status(400).send({
      message: 'employee not created missing or invalid information!!',
      error: error,
    });
  } else {
    addNewEmployee(newEmployee)
      .then((newEmployee) => {
        res.status(201).send(newEmployee);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send({ message: 'employee not created!!', error: err });
      });
  }
};

//get all employees with filter controller

const getAllEmployees = (req: Request, res: Response) => {
  const { date } = req.query;

  findAllEmployees(date as string)
    .then((employees) => {
      res.send(employees);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send({ message: 'employees not found!!', error: err });
    });
};

const DoCheckIn = (req: Request, res: Response) => {
  const { id, comment } = req.body;

  checkIn(id, comment)
    .then((employee) => {
      res.send(employee);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send({ message: 'employee not found!!', error: err });
    });
};

const DoCheckOut = (req: Request, res: Response) => {
  const { id, comment } = req.body;

  checkOut(id, comment)
    .then((employee) => {
      res.send(employee);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(404)
        .send({ message: 'employee not found!!', error: err.message ? err.message : err });
    });
};

export { createEmployee, getAllEmployees, DoCheckIn, DoCheckOut };
