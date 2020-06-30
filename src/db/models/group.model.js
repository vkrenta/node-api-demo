import { Schema, model } from 'mongoose';
import log from '../../helpers/log';
const { ObjectId, String } = Schema.Types;

const schema = new Schema({
  name: String,
  departmentId: {
    required: true,
    type: ObjectId,
  },
});

const Group = model('group', schema);
Group.watch().on('change', (changes) => {
  const { operationType, fullDocument, documentKey, ns } = changes;
  log.info({ ns, operationType, fullDocument, documentKey });
});
export default Group;
