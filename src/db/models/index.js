import Department from './department.model';
import Group from './group.model';
import Lection from './lection.model';
import Student from './student.model';
import Teacher from './teacher.model';
import User from './user.model';
import log from '../../helpers/log';

const models = [Department, Group, Lection, Student, Teacher, User];

models.forEach((m) =>
  m.watch().on('change', (changes) => {
    const { operationType, fullDocument, documentKey, ns } = changes;
    log.info({ ns, operationType, fullDocument, documentKey });
  })
);
