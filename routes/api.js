const express = require('express')
 route = express.Router()
 const db=require('../module/db')
route.get('/',function(req,res){
       db.selectall()
       .then(function(result){
        res.render("../views/index.ejs",{table:result})
       })
       .catch(function(err){
           res.send(err);
       })
    // res.send("hello2")
    })
    
    route.post('/add',function(req,res){
        //add req.body to these

        db.add(req.body.a_name,req.body.a_age)
        .then(function(){      res.redirect('/table')})
        .catch(function(err){
            res.send(err);
        })
  
    })
    
    route.post('/delete',function(req,res){
        //add req.body to these
        db._delete(req.body.d_id)
        .then(function(){      res.redirect('/table')})
        .catch(function(err){
            res.send(err);
        })
        
    })
    
    route.post('/update',function(req,res){
        //add req.body to these
        db._update(req.body.u_id,req.body.u_name,req.body.u_age)
        .then(function(){      res.redirect('/table')})
        .catch(function(err){
            res.send(err);
        })
    })
    module.exports={route:route}