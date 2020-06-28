import { config } from 'dotenv';

export default (() => {
  config({ path: 'src/config/.env' });
  process.env.MONGO_URI = process.env.MONGO_URI.replace(
    '{{env}}',
    process.env.ENV
  );
})();
