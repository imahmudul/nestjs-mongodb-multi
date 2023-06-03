import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  source: {
    uri: `mongodb://${process.env.MONGO_SOURCE_USERNAME}:${process.env.MONGO_SOURCE_PASSWORD}@localhost/source_db`,
  },
  target: {
    uri: `mongodb://${process.env.MONGO_TARGET_USERNAME}:${process.env.MONGO_TARGET_PASSWORD}@localhost/target_db`,
  },
}));
