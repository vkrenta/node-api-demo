import { Schema, SchemaTypes, model } from 'mongoose';

const { String } = SchemaTypes;

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
    enum: ['teacher', 'student'],
    required: true,
  },
});

const User = model('user', schema);

export default User;
