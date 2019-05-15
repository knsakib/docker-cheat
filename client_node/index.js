var express = require ('express');
var app = express();
const axios = require('axios');


app.set('view engine', 'ejs');

app.set('views', 'views');

app.get('/', async (req,res)=>{
    const values = await axios.get('/api/values/current');
    const seenIndexes = await axios.get('/api/values/all');
    console.log(values);
    res.render('fibView', {
        values: values,
        seenIndexes: seenIndexes
         
    });
});

app.post('/fibView', async(req, res)=>{
    
    await axios.post ('/api/values', {
        index: this.state.index
    });
    
  });

app.listen(3000);
