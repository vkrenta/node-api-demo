import { Schema, model } from 'mongoose';
import log from '../../helpers/log';
const { String, Number } = Schema.Types;

const schema = new Schema({
  order: Number,
  start: String,
  end: String,
});

const Hours = model('hours', schema);
Hours.watch().on('change', (changes) => {
  const { operationType, fullDocument, documentKey, ns } = changes;
  log.info({ ns, operationType, fullDocument, documentKey });
});
export default Hours;
