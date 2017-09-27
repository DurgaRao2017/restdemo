/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mysql=require('mysql');
// var connection=mysql.createPool({
// 
//host:'127.0.0.1',
// user:'root',
// password:'Login@12345',
// database:'test'
// 
//});


// var connection=mysql.createPool({
// 
//// socketPath : '/tmp/mysql.sock',
//host:'testdbnew.clqdft9lf1cm.us-east-1.rds.amazonaws.com' || '127.0.0.1',
// user:'awsuser',
// password:'awspassword',
// database:'Test',
// port:3306
// //socketPath:'/var/run/mysqld/mysqld.sock'
//});

 var connection=mysql.createPool({
 
// socketPath : '/tmp/mysql.sock',
// host:'testdbnew.clqdft9lf1cm.us-east-1.rds.amazonaws.com', WORKING
host:'testdbnew2.clqdft9lf1cm.us-east-1.rds.amazonaws.com',
// host:'localhost' || '127.0.0.1',
 user:'awsuser',
 password:'awspassword',
// database:'Test', // Working
database:'testnew',
 port:3306
// socket:'/var/lib/mysql/mysql.sock'
});
//var connection=mysql.createPool({
// 
//host:'USILASD00010',
// user:'dev_support_user',
// password:'M4kHUV<ZXemr&-v',
// database:'support_db_dev',
// port:'1433'
//});
 module.exports=connection;
