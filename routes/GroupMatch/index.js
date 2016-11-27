var express = require('express');
var pgInstance = require('../../module/database');
var router = express.Router();

/* 그룹매칭 관련 REST */

/* 파라미터가 없는 SELECT 문 REST처리 */
router.get('/getCondition', function(req, res, next) {

});


module.exports = router;
