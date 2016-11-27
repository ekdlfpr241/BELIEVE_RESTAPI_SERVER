var express = require('express');
var pgInstance = require('../../module/database');
var router = express.Router();

//console.log(pgInstance.query('SELECT name from users'));

/* 파라미터가 없는 SELECT 문 REST처리 */
router.get('/getCondition', function(req, res, next) {
  pgInstance.query(['SELECT name from users where name = $1', ['abcd']], res);
//  res.render('index', { title: 'Express' });
});

/* 파라미터가 있는 SELECT 문 REST처리 */
router.get('/getNonCondition', function(req, res, next) {
    pgInstance.query(['INSERT into users values (\'aa\')'], res);
});

module.exports = router;
