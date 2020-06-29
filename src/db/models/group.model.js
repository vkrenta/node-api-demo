import { Schema, SchemaTypes, model } from 'mongoose';

const { ObjectId, String } = SchemaTypes;

const schema = new Schema({
  name: String,
  departmentId: {
    required: true,
    type: ObjectId,
  },
});

const Group = model('group', schema);

export default Group;
