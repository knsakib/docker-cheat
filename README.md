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
One we ran the test command, we need to select or give input inside docker container to select which we test we want to execute.
By default we get stdout connection inside the container. But to get stdin we need to to run extra command which os '-it'
```

## docker run -it image_id/name npm run test
```
Now we got a shell inside docker container. We can select test suit selection. However, when we are running test we are getting an error.
TypeError: Cannot assign to read only property 'Symbol(Symbol.toStringTag)' of object '#<process>
```

### What we did (Change the node version for now to execute the test)
```
We change node version from 'FROM node:alpine' to 'FROM node:10.15-alpine'. Then we run or select any specific test inside the container. We can exit etc.
```
