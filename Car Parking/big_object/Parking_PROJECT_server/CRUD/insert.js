var express = require('express');
var api = express.Router();
var config = require('./config.js')
api.post('/carstay',function(req,res){
    // res.send('123456');
    var sql ='INSERT INTO carstay (sl_id,cs_name,cs_type,cs_water,cs_toilet,cs_lng,cs_lat) VALUES (?,?,?,?,?,?,?)'
    config.query(sql,[req.body.id,req.body.name,req.body.type,req.body.water,req.body.toilet,req.body.lng,req.body.lat],
        function(err,result,fields){
            
            // console.log(err);
            // console.log(result.insertId);
            // console.log(result.affectedRows);
            // // console.log(fields);
    })
    res.send("新增成功");
})
api.post('/member',function(req,res){
    // res.send('123456');
    var sql ='INSERT INTO member(member_name,member_ac,member_pass, member_phone,member_email) VALUES (?,?,?,?,?)'
    config.query(sql,[req.body.name,req.body.ac,req.body.pass,req.body.phone,req.body.email],
        function(err,result,fields){
            console.log(err);
    })
    res.send("新增成功");
})
api.post('/license',function(req,res){
    // res.send('123456');
    var sql ='INSERT INTO license(license,member_id) VALUES (?,?)'
    config.query(sql,[req.body.license,req.body.id],
        function(err,result,fields){
            console.log(err);
    })
    res.send("新增成功");
})
api.post('/traderecord',function(req,res){
    // res.send('123456');
    var sql ='INSERT INTO traderecord(member_id,tr_amount,tr_date,tr_time,tr_location,tr_counterparty,tr_type,tr_ps,tr_pe) VALUES (?,?,?,?,?,?,?,?,?)'
    config.query(sql,[req.body.id,req.body.amount,req.body.date,req.body.time,req.body.location,req.body.counterparty,req.body.type,req.body.ps,req.body.pe],
        function(err,result,fields){
            console.log(err);
    })
    res.send("新增成功");
})
module.exports = api;