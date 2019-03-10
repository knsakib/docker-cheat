const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  host: 'redis-server', //when our express srever try to connect to the redis-server, docker will look for the container called-redis-server.
  //This is how node app will connect to redi, as in our docker-compose we mentioned which container is redis-server
  port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
  process.exit(0);
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
