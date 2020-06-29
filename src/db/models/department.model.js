import { Schema, SchemaTypes, model } from 'mongoose';

const { String } = SchemaTypes;

const schema = new Schema({
  name: String,
});

const Department = model('department', schema);

export default Department;
