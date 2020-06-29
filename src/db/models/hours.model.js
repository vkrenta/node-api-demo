import { Schema, SchemaTypes, model } from 'mongoose';

const { String, Number } = SchemaTypes;

const schema = new Schema({
  order: Number,
  start: String,
  end: String,
});

const Hours = model('hours', schema);

export default Hours;
