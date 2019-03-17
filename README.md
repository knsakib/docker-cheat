# docker-cheat

### What we did (To execute Prod Environment)
```
We do it in multiple pahes. We defined the build phase as builder and then we use that build phase
in run phase where we start the nginx container.
```

## docker run -p 8080:80 45be89e10637
```
We map the port 8080 of our local machine to the 80 port of the container 
```
