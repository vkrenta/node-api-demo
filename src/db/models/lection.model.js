import { Schema, model } from 'mongoose';
const { ObjectId, String, Number } = Schema.Types;

const schema = new Schema({
  name: String,
  teacherId: {
    type: ObjectId,
    required: true,
  },
  groupId: {
    type: ObjectId,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  day: {
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    required: true,
  },
});

const Lection = model('lections', schema);
export default Lection;
