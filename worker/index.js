const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

const sub = redisClient.duplicate();
//we duplicated the redis client 

function fib(index){
    if (index < 2) return 1;
    return fib(index -1 ) + fib(index-2);
}
//function that is calculating this fibinacci value. It is a recusive solution
// so it is a slow process and and it will simulate the  reason why we are 
// radis and using a sperate  worker process

sub.on('message', (channel, message)=>{
    redisClient.hset('values', message, fib(parseInt(message)));
});
//we are listening on the Radis client that we duplicated. 
//if there is any new message shows up
//we will then run the call back. Call back will take channel and 
//message. Anytime new message came, we will calculate the new 
//fibonacci value, and insert them into some hash of values; 
//the keys will be index that is submitted into the form, meaning 
// the message parameter here in this function.      

sub.subscribe('insert');
//so we subcribe to insert event. insert event will trigger 
//the on event ???!!! 
