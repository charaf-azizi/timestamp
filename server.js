const express= require('express');
const app= express()
const path = require('path');


app.get('/api/:date', (req, res)=>{
    const invalidDate = (date)=>{
        return date.toUTCString()!=='Invalid Date'
     };
    const date = new Date(req.params.date);
    const unixDate = Number(req.params.date); 

    if(unixDate){
        return  res.json({'unix': unixDate ,'utc': new Date(unixDate).toUTCString()})
    }
  
    if(invalidDate(date)){
        res.json({'unix': date.getTime(), 'utc': date })
       }else{
          res.send('Invalid date')
       }
})

app.get('/api', (req, res)=>{
    res.json({'unix': new Date().getTime(), 'utc': new Date() })
})

app.listen(3000, ()=>{
    console.log('hello world')
})
