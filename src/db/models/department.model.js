import { Schema, model } from 'mongoose';
import log from '../../helpers/log';
const { String } = Schema.Types;

const schema = new Schema({
  name: String,
});

const Department = model('department', schema);
Department.watch().on('change', (changes) => {
  const { operationType, fullDocument, documentKey, ns } = changes;
  log.info({ ns, operationType, fullDocument, documentKey });
});
export default Department;
