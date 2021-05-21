const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId


var { PostMessage}  =  require('../models/postMessage')

router.get('/', (req,res)=>{

     PostMessage.find((err,docs)=>{
    
        if(!err) res.send(docs)
        else console.log('Error while fetching the data')
     })
 })

router.post('/',(req,res)=>{
   
   const title= req.body.title;
   const message= req.body.message;

     var newRecord = new PostMessage ({
         title : title,
         message: message
     })
   
      newRecord.save((err,docs)=>{
          if(!err) res.send(docs)
          else console.log('Error while Uploading the data')
      })
   
  })

  router.put('/:id',(req,res)=>{
   
   if(!ObjectID.isValid(req.params.id))
     return res.send(400).send('No record with given id: ' + req.params.id)
    

     var updatedRecord ={
        title : req.body.title,
        message: req.body.message
    }
    PostMessage.findByIdAndUpdate(req.params.id, {$set: updatedRecord},{new: true},(err,docs)=>{
        if(!err) res.send(docs)
        else console.log('Error while updating the data' + JSON.stringify(err,undefined,2))
    }) 

 })


 router.delete('/:id', (req,res)=>{
    if(!ObjectID.isValid(req.params.id))
    return res.send(400).send('No record with given id: ' + req.params.id)

    PostMessage.findByIdAndRemove(req.params.id, (err,docs)=>{
        if(!err) res.send(docs)
        else console.log('Error while deleting a record : ')
    })

})





 module.exports = router