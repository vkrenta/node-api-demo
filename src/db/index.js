import mongoose from 'mongoose';
import log from '../helpers/log';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    log.info('Successful connection to MongoDB');
  } catch (e) {
    log.error({ label: e.name, message: e.message });
    process.exit(-1);
  }
};

export default connectDB;
