import { Schema, model } from 'mongoose';
const { ObjectId } = Schema.Types;

const schema = new Schema({
  userId: {
    type: ObjectId,
    required: true,
    unique: true,
  },
  groupId: {
    type: ObjectId,
    required: true,
  },
});

const Student = model('students', schema);
export default Student;
