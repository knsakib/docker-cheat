# docker-cheat

### Multi Docker App
```
Frontend: React

Backend: 
1. Express will store permanent list of indexes that have been received
2. Express will store all the "indexes" and "calculated values" as key-pairs
3. Worker watches redis for new indexes, pulls each new indexes, calcualtes 
new value then puts back it into redis

```

### Environment Variables
```
When we define varaibles in docker-compose we define runtime variables. 
That means only wehn the container is started up. That means it is not 
encoded inside the image. The image does not have any memory of 
this environment variables. 
```
## variableName=value
```
When we define varaibles like that, these variables are set up inside 
container during the container creation.    
```
## variableName
```
If we use this syntax without specifying any value, this value will be 
taken from my machine or the machine docker container is running. It is 
just reference to that orginal value.   
```

### How we will route the request 
```
In our server side index.js we are using route handler like
/value/current, /values/all, /values. 

On the otherhand in the client side Fib.js we are making 
network request(api request)
/api/values/current, 
/api/values/all. 
So, the client thinks it needs to make request to the /api. 
```

### What Nginx will do to solve above scenerio
```
This routes are defined in default.conf by upstream
servers at client:3000 and server:5000. 
These are defined a 'services'(service names) in dockerfile.
We changed the service name from 'server' to 'api' to avoid
the conflict server name used in default.conf of nginx.

``` 

### Reqrite Rules
```
When incoming request comes, Nginx will look into it, more
specifically it will look into the request path. If the path 
contains '/api/', it will route the request to api express server. 
If the request  path contains '/', it will route the request 
to React server. requests with path /api/values/all will be 
handled by /api route of  Nginx. Nginx then route these 
requests to the all /values/all route of express backend 
[we will do it intentionally by rewrite rule] which is 

rewrite /api/(.*) /$1 break.
$1 means whatever matches after /api/ and break means: 
do not try to apply any other rewrite rules after applying 
this one. This will prevent nginx to 
continue to match to a new the route or path.  
```