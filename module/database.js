var pg = require('pg');

/*
PGInstance 템플릿 디자인 적용
Coded by KJH
Date : 16/11/27
*/
var pgInstance = function (){
  const PostGreSQLconfig = {
    user: 'postgres', //env var: PGUSER
    database: 'postgres', //env var: PGDATABASE
    password: '4r3e2w1q2w', //env var: PGPASSWORD
    host: 'localhost', // Server hosting the postgres database
    port: 5432, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };
  this.pool = new pg.Pool(PostGreSQLconfig);
}

/* 파라미터가 없는 SQL */
pgInstance.prototype.query = function(queryDatas, res) {

  this.pool.connect(function(err, client, done) {
    if(err) {

      return console.error('error fetching client from pool', err);
    }
    /* 파라미터가 없는 경우 처리 */
      if(queryDatas.length == 1) {
        client.query(queryDatas[0], function(err, result) {
          //call `done()` to release the client back to the pool
          done();

          res.send(result);

          if(err) {
            return console.error('error running query', err);
          }
          //output: 1
        });
      }

      /* 파라미터가 있는 경우 처리 */
      else if(queryDatas.length == 2) {
        client.query(queryDatas[0], queryDatas[1], function(err, result) {
          //call `done()` to release the client back to the pool
          done();

          res.send(result);

          if(err) {
            return console.error('error running query', err);
          }
          //output: 1
        });
      }

  });
}

module.exports = new pgInstance();
