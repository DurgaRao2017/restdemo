/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var db=require('../dbconnection'); //reference of dbconnection.js
 
var Task={
 
getAllTasks:function(callback){
 
//return db.query("Select * from test.users",callback);

return db.query("Select * from Test.Users",callback);

},
 getTaskById:function(id,callback){
 
//return db.query("select * from test.users where id=?",[id],callback);

 return db.query("select * from Test.Users where id=?",[id],callback);

 },
 addTask:function(Task,callback){
 return db.query("Insert into test.users values(?,?,?)",[Task.id,Task.UserName,Task.Password],callback);
 },
 deleteTask:function(id,callback){
  return db.query("delete from test.users where id=?",[id],callback);
 },
 updateTask:function(id,Task,callback){
  return db.query("update test.users set UserName=?,Password=? where id=?",[Task.UserName,Task.Password,id],callback);
 }
 
};
 module.exports=Task;
