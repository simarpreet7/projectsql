// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'sam',
  password:'SSxyz@123'
});
 
// simple query
function selectall(){

    return new Promise(
       function(resolve,reject){
        connection.query(
            'SELECT * FROM dtu ',
            function(err, results, fields) {
                if(err) reject(err);
                else
                resolve(results);
       
            }
          );
       }
    )
}

function add(name,age){

    return new Promise(
       function(resolve,reject){
        connection.query(
            'insert into dtu(name,age) values(?,?)',[name,age],
            function(err, results, fields) {
                if(err) reject(err);
                else
                resolve();
       
            }
          );
       }
    )
}
function _delete(id){

    return new Promise(
       function(resolve,reject){
        connection.query(
            'delete from dtu where id ='+id+';',
            function(err, results, fields) {
                if(err) reject(err);
                else
                resolve();
       
            }
          );
       }
    )
}
function _update(id,name,age){
    var x="'"+name+"'";

    return new Promise(
       function(resolve,reject){
        connection.query(
            'UPDATE dtu SET name = '+x+', age= '+age+' WHERE id = '+ id+';',
            function(err, results, fields) {
                if(err) reject(x);
                else
                resolve();
       
            }
          );
       }
    )
}
module.exports={
    selectall,add,_delete,_update
}