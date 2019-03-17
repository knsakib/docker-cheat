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
Now we got connected to stdin inside docker container. We can select test suit selection.
However, when we are running test we are getting an error.
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

## docker attach image_id/name
```
To use stdin and stdout service of docker container from our terminal, we opened a second terminal window.
But unfortunately this will not work as it should be, when we docker-compose to start and run a container.
We can really do stdin or stdout from our terminal in our running container.       
```

## docker exec -it image_id/name sh
```
To understand the shortcomings, we start a shell inside docker container. And we can see
that if we run 'ps' there we can see for each piece of command start a separate
process inside docker. For example, one process run npm, another process use npm
to run test process and so on and so forth. So, the process which is responsible
for running test, is receiving the stdin command to get different test command.
The problem is when we run 'docker attach', we always attach to the stdin of the
primary process with process id of '1'. But it is not always the primary process
(here is npm) who is responsible to get different commands for the test process.
There are other test suits out there where we do not send any inputs. In that case,
we will not face these issues.             
```
