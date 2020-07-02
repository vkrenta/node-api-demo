import { Schema, model } from 'mongoose';
import log from '../../helpers/log';

const { ObjectId } = Schema.Types;

const schema = new Schema({
  userId: {
    type: ObjectId,
    required: true,
    unique: true,
  },
  departmentId: {
    type: ObjectId,
    required: true,
  },
});

const Teacher = model('teachers', schema);

Teacher.watch().on('change', (changes) => {
  const { operationType, fullDocument, documentKey, ns } = changes;
  log.info({ ns, operationType, fullDocument, documentKey });
});

export default Teacher;
