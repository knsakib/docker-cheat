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
### Written a .travis.yml
```
We have written the .travis.yml fi.e The build context changed now to different 
folders instead of just '.' as there is multiple docker containers. 
The test command will run in before install section. -- --coverage flag
is for exiting the test with an status code instead of running is continuously.
After test is sucessful we ran: docker build -t image-name build-context
```

### push the images to Docker Hub
```
Instead of building the images and pushing this directly to elastic beanstalk
we will push the images to docker hub and pull the images in beanstalk 
from docker hub. We did it by putting docker id and pass in env variables.
```