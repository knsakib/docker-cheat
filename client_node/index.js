var express = require ('express');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views');

const fibRoutes =  require('./routes/fib');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', fibRoutes);

app.listen(4000, err=>{
    console.log('Listening 4000');
});
