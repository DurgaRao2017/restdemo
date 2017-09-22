/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'127.0.0.1',
 user:'root',
 password:'Login@12345',
 database:'test'
 
});
 module.exports=connection;
