import { connect } from 'mongoose';
const connectDB = () => {
  connect(process.env.DB_URL as string)
    .then(() => {
      console.log('connected to the database!');
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
