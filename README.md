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
### maintaining database in container
```
Here we will use AWS Relational Database Services(RDS) for Postgres
and Amazon Elastic Cache for Redis. 
```
### Security Group
```
We created security Group and allow ports and IPs and ttached those
groups to our redis, postgres and beanstlk instance.  
```
### Environment Variables
```
We also setup the environment variables in beanstalk software card 
under configuration which is unfortunately clear text.   
```
### Travis CI
```
We put the deployment section. We almost copied it from
Lesson-91-AWS-Beanstalk-Automatic-Deployment Branch. We are only 
deploying from this branch. For elastic beanstalk we must define a 
memory option for each conatiner to tell elastic beanstalk how 
much memory we will define for each container.
```

