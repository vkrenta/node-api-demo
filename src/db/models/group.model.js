import { Schema, model } from 'mongoose';
const { ObjectId, String } = Schema.Types;

const schema = new Schema({
  name: String,
  departmentId: {
    required: true,
    type: ObjectId,
  },
});

const Group = model('groups', schema);

export default Group;
