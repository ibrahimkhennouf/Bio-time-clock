/* eslint-disable @typescript-eslint/no-explicit-any */

import Employee, { IEmployee } from '../models/employee.schema';

//create employee
const addNewEmployee = async (newEmployeeData: IEmployee): Promise<IEmployee> => {
  const date = new Date().toISOString().split('T')[0];

  const newEmployee = new Employee({ ...newEmployeeData, dateCreated: date });

  return newEmployee.save();
};

//find all employees
const findAllEmployees = async (date: string): Promise<IEmployee[]> => {
  return await Employee.find(date ? { dateCreated: date } : {});
};

//perform a checkin
const checkIn = async (id: string, comment: string): Promise<IEmployee | null> => {
  const date = new Date();
  return await Employee.findByIdAndUpdate(id, { checkIn: date, comment: comment }, { new: true });
};

//perform a checkOut
const checkOut = async (id: string, comment: string): Promise<IEmployee | null> => {
  const date: any = new Date();
  const emp = await Employee.findById(id);
  if (emp?.checkIn) {
    const chkInTime: any = new Date(emp.checkIn);

    const lastShiftHours = (date - chkInTime) / (1000 * 3600);

    return await Employee.findByIdAndUpdate(
      id,
      { checkOut: date, comment: comment, shiftDuration: lastShiftHours },
      { new: true }
    );
  } else {
    throw new Error('you must check-in before you can check-out');
  }
};

export { addNewEmployee, findAllEmployees, checkIn, checkOut };
