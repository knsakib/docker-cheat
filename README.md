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
### Written a Dockerrun.aws.json
```
Here we will not build the images. Rather we will just pull the built 
images. 
```
### Task Definition to run Amzon Elastic Containers
```
https://docs.aws.amazon.com/AmazonECS/latest/userguide/task_definition_parameters.html#container_definitions
We put the hostname which is the name of our docker service name 
in our docker-compose.yml. So, hostname=docker service name
(client, postgress, redis, api, worker etc.). We also the name 
as 'client' in our default.conf of nginx. So, at the end
all other containers uses this hostname/service when try to 
communicate with the docker container. That is why all the 
hostname, we put same as service names.  

Essential: true means, if this container crush all other containers 
in this group will shut down, If false then other containers will 
continue to run. 
```
### hostname
```
hostname in case of nginx and worker is not required as 
no other service will call worker or 
this nginx. hostname is in fact an optional field. 
```
### PortMappings
```
It is to map the port of host machine to the 
port inside the container. 
``` 
### Links
```
We need to explicit link between containers. And it is unidirectional.
For example we need to say form links from nginx to 
api-server and react-client. We form the links by using
container name that we defined in Dockerrun.aws.json.    
```
