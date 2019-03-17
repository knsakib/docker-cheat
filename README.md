# docker-cheat

## docker build -f Dockerfile.dev .

```
We ran it first to execute test
```

## docker run image_id/name npm run test
```
After Docket run we will append the command that we want to run inside Docker container.
```

### What we did (To execute the test)
```
One we ran the test command, we need to select or give input inside docker container to select which we test we
want to execute. By default we get stdout connection inside the container. But to get stdin we need to to run
extra command which os '-it'
```

## docker run -it image_id/name npm run test
```
Now we got a shell inside docker container. We can select test suit selection. However, when we are running
test we are getting an error.
TypeError: Cannot assign to read only property 'Symbol(Symbol.toStringTag)' of object '#<process>
```

### What we did (Change the node version for now to execute the test)
```
We change node version from 'FROM node:alpine' to 'FROM node:10.15-alpine'. Then we run or select any
specific test inside the container. We can exit etc. However, here the test is not update is not live.
If we add code in the test environment, it will not update live.   
```

### What we did (To solve live test environment issue)
```
We can setup a second service inside the container which will be responsible to run the test suit. In that
service we would map volume outside the container. But there is another way. After running the container
in a separate terminal, we would get the ID of running container.   
```

## docker exec -it image_id/name npm run test
```
But there is another way to run live test suit. After running the container
in a separate terminal, we would get the ID of running container and then run this command.
So, instead of 'docker run -it image_id/name npm run test' we will run
'docker exec -it image_id/name npm run test'   
```

### What we did (To solve live test environment issue)
```
We initiate a second service in the container con docker-compose.yml and run docker-compose up --build,
which is responsible to start test suit. Now if we change
anything in the test container it will update live in our test environment. But there is no way to
select anything meaning no stdin or stdout of that container. We cannot rerun or choose or get any
test data other than seeing the test results in console.        
```
