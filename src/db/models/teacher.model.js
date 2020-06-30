import { Schema, model } from 'mongoose';

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

const Teacher = model('teacher', schema);

Teacher.watch().on('change', (changes) => {
  const { operationType, fullDocument, documentKey, ns } = changes;
  log.info({ ns, operationType, fullDocument, documentKey });
});

export default Teacher;
