const keys = require('./keys');

//Express App Setup
const express =  require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');
//cors is for Cross Origin Resource Sharing 

const app = express();
app.use(cors());
app.use(bodyParser.json());

//postgress client setup
const { Pool } = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.Host,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});

pgClient.on('error', () => console.log('Lost PG connection'));

pgClient
    .query('CREATE TABLE IF NOT EXISTS values (number INT)')
    .catch(err => console.log(err));


//redis client setup
const redis = require('redis');
const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

const redisPublisher = redisClient.duplicate();
//we are dulicating connection according to radis documentation
//because wehen a connection is established for publishing or
//or subscribing, this connection can not be used for other purpose.  

//express route handlders
app.get('/', (req, res) => {
    res.send('Hi');
});

app.get('/values/all', async(req, res)=>{
    const values = await pgClient.query('SELECT * from values');
    res.send(values.rows);
//This route will be used to get the data from postgress
//That means all the data that even been submitted ever.
//this is an async arrow function. 
//values.rows means only the data. there are other data like metadata
//we dont want to send those data. 
});

app.get('/values/current', async(req, res)=>{
    redisClient.hgetall('values', (err, values)=>{
        res.send(values);
//this will be used to return all the indexes and 
//and calculated values from redis that
//has been submitted. 
//redis library does not have promise support. that is we cant 
//async await model 
    });
});

app.post('/values', async(req, res)=>{
    const index =req.body.index;
    if(parseInt(index)>40){
        return res.status(422).send('Index is too high!')
    }
    redisClient.hset('values', index, 'Nothing Yet!');
    redisPublisher.publish('insert', index);
    pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);
    //this line will take value index and save permanently in to postgress 
    res.send({working: true});

});

app.listen(5000, err=>{
    console.log('Listening');
});