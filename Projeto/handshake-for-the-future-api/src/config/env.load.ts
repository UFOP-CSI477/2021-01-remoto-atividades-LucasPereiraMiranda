interface ConfigProps {
  api: {
    port: number;
  };
  db: {
    connection: string;
    host: string;
    username: string;
    password: string;
    database: string;
    port: number;
    synchronize: boolean;
  };
  jwt: {
    secret: string;
    expiresIn: string;
    saltRounds: number;
  };
}

const env: any = process.env;

export const envConfig: ConfigProps = {
  api: {
    port: parseInt(env.SERVER_PORT, 10) || 3000,
  },
  db: {
    connection: env.DB_CONNECTION,
    host: env.DB_HOST,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    port: parseInt(env.DB_PORT, 10) || 3306,
    synchronize: !!env.TYPEORM_SYNCHRONIZE,
  },
  jwt: {
    secret: env.JWT_SECRET || 'secret',
    expiresIn: env.JWT_EXPIRES_IN || '1d',
    saltRounds: parseInt(env.JWT_SALT_ROUNDS, 10) || 10,
  },
};
