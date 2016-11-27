
export const PostGreSQLconfig = {
  user: 'postgres', //env var: PGUSER
  database: 'postgres', //env var: PGDATABASE
  password: '4r3e2w1q2w', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
