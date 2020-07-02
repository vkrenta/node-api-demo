import { Schema, model } from 'mongoose';
const { String } = Schema.Types;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
});

const Department = model('departments', schema);
export default Department;
