import { ConnectionOptions } from 'typeorm';
import { envConfig } from './env.load';
import { join, resolve } from 'path';

const config: ConnectionOptions = {
  type: 'postgres',
  host: envConfig.db.host,
  port: envConfig.db.port,
  username: envConfig.db.username,
  password: envConfig.db.password,
  database: envConfig.db.database,
  synchronize: envConfig.db.synchronize,
  entities: [resolve(__dirname, '..', '**', '*.entity{.ts,.js}')],
  migrationsRun: false,
  migrations: [join(__dirname, '../migrations/**/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export = config;
