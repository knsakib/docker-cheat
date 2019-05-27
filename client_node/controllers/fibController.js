const axios = require('axios');

const fetchValues = async () => {
    try{
        return await axios.get('api/values/current');
    } catch (error) {
        console.error(error);        
    }
}

const fetchIndexes = async () => {
    try{
        return await axios.get('api/values/all');
    } catch (error) {
        console.error(error);        
    }
}

const postIndexes = async () => {
    try{
        return await axios.post ('/api/values');
    } catch (error) {
        console.error(error);        
    }
}

exports.getValues = ('/', async (req,res)=>{
        const values = await fetchValues()
        const seenIndexes = await fetchIndexes()
      
    // const values = await axios.get('api/values/current');
    // const seenIndexes = await axios.get('api/values/all');
    // const values = [];
    // const seenIndexes = [];
    // ------------------ //
    // const values = axios.get('api/values/current');
    // const seenIndexes = axios.get('api/values/all');
    // await Promise.all(values, seenIndexes);
    
    res.render('fibView', {
        values: values,
        seenIndexes: seenIndexes         
    });
});


exports.postValues = ('/', async(req, res)=>{
    
    const postBody = await postIndexes()
    
    res.redirect('/');

});