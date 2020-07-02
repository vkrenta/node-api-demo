import { Schema, model } from 'mongoose';

const { String } = Schema.Types;

const schema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: String,
  lastName: String,
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['teacher', 'student', 'admin'],
    required: true,
  },
});

const User = model('users', schema);

export default User;
