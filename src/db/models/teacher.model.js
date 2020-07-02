import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const schema = new Schema({
  userId: {
    type: ObjectId,
    required: true,
    unique: true,
  },
  departmentId: {
    type: ObjectId,
    required: true,
  },
});

const Teacher = model('teachers', schema);

export default Teacher;
