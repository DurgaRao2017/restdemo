/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//to execute use http://localhost:8081/

var express = require("express");
var mysql = require('mssql');

var app = express();

var connection ={
  server     : 'USILASD00010',
  user     : 'dev_support_user',
  password : 'M4kHUV<ZXemr&-v',
  database : 'support_db_dev',
  port:'1433'
};




app.get("/",function(req,res){

    var conn = new mysql.Connection(connection);
    
conn.connect().then(function callBack(){
    console.log("Connection established");
    var req = new mysql.Request(conn);



req.input('ip_user_id',mysql.VARCHAR(8) ,'milra02').
execute('get_user_project_profile').then(function(results){
    console.log(JSON.stringify(results));
}
).catch(function (err)
{
    console.log(err);

});
    // req.query('select * from cdn_download_summary').then(function(data){
    //     console.log(data);
    // });

});

});

app.listen(8081);
console.log('program end');

