import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IEmployee {
  lastName: string;
  firstName: string;
  department: string;
  dateCreated: string;
  checkIn: Date;
  checkOut: Date;
  comment: string;
  shiftDuration: number;
}

const employeeSchema = new Schema<IEmployee>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  department: { type: String, required: true },
  dateCreated: { type: String, required: true },
  checkIn: { type: Date, default: null },
  checkOut: { type: Date, default: null },
  comment: { type: String, default: null },
  shiftDuration: { type: Number, default: null },
});

employeeSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
  },
});

const Employee = model<IEmployee>('Employee', employeeSchema);

export default Employee;
