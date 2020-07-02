import { Schema, model } from 'mongoose';
import log from '../../helpers/log';

const { String } = Schema.Types;

const schema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: String,
  lastName: String,
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['teacher', 'student', 'admin'],
    required: true,
  },
});

const User = model('users', schema);

User.watch().on('change', (changes) => {
  const { operationType, fullDocument, documentKey, ns } = changes;
  log.info({ ns, operationType, fullDocument, documentKey });
});

export default User;
