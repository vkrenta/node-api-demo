import { Schema, model } from 'mongoose';
import log from '../../helpers/log';
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

const Student = model('student', schema);
Student.watch().on('change', (changes) => {
  const { operationType, fullDocument, documentKey, ns } = changes;
  log.info({ ns, operationType, fullDocument, documentKey });
});
export default Student;
