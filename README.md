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