import { Schema, SchemaTypes, model } from 'mongoose';

const { ObjectId } = SchemaTypes;

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

const Teacher = model('teacher', schema);

export default Teacher;
