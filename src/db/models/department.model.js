import { Schema, model } from 'mongoose';
import log from '../../helpers/log';
const { String } = Schema.Types;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
});

const Department = model('departments', schema);
Department.watch().on('change', (changes) => {
  const { operationType, fullDocument, documentKey, ns } = changes;
  log.info({ ns, operationType, fullDocument, documentKey });
});
export default Department;
