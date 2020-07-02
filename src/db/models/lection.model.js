import { Schema, model } from 'mongoose';
import log from '../../helpers/log';
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
Lection.watch().on('change', (changes) => {
  const { operationType, fullDocument, documentKey, ns } = changes;
  log.info({ ns, operationType, fullDocument, documentKey });
});
export default Lection;
