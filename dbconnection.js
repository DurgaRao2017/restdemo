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


 var connection=mysql.createPool({
 
host:'testdbnew.clqdft9lf1cm.us-east-1.rds.amazonaws.com',
 user:'awsuser',
 password:'awspassword',
 database:'Test',
 port:'3306'
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
